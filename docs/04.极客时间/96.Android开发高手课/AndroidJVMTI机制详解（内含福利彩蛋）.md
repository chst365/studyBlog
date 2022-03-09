---
title: AndroidJVMTI机制详解（内含福利彩蛋）
date: 2022-03-09 21:53:10
permalink: /pages/1a85d9/
categories:
  - 极客时间
  - Android开发高手课
tags:
  - 
---
<audio title="AndroidJVMTI机制详解（内含福利彩蛋）" src="https://static001.geekbang.org/resource/audio/e9/1e/e9b2621b301ebf777d52b63f75a9441e.mp3" controls="controls"></audio> 
<p>你好，我是孙鹏飞。</p><p>在专栏<a href="http://time.geekbang.org/column/article/73277">卡顿优化</a>的分析中，绍文提到可以利用JVM TI机制获得更加非常丰富的顿现场信息，包括内存申请、线程创建、类加载、GC信息等。</p><p>JVM TI机制究竟是什么？它为什么如此的强大？怎么样将它应用到我们的工作中？今天我们一起来解开它神秘的面纱。</p><h2>JVM  TI介绍</h2><p>JVM  TI全名是<a href="https://docs.oracle.com/javase/7/docs/platform/jvmti/jvmti.html#SpecificationIntro">Java Virtual Machine Tool Interface</a>，是开发虚拟机监控工具使用的编程接口，它可以监控JVM内部事件的执行，也可以控制JVM的某些行为，可以实现调试、监控、线程分析、覆盖率分析工具等。</p><p>JVM  TI属于<a href="https://docs.oracle.com/javase/7/docs/technotes/guides/jpda/architecture.html">Java Platform Debugger Architecture</a>中的一员，在Debugger Architecture上JVM  TI可以算作一个back-end，通过JDWP和front-end JDI去做交互。需要注意的是，Android内的JDWP并不是基于JVM  TI开发的。</p><p>从Java SE 5开始，Java平台调试体系就使用JVM TI替代了之前的JVMPI和JVMDI。如果你对这部分背景还不熟悉，强烈推荐先阅读下面这几篇文章：</p><ul>
<li>
<p><a href="https://www.ibm.com/developerworks/cn/java/j-lo-jpda1/index.html">深入 Java 调试体系：第 1 部分，JPDA 体系概览</a></p>
</li>
<li>
<p><a href="https://www.ibm.com/developerworks/cn/java/j-lo-jpda2/index.html">深入 Java 调试体系：第 2 部分，JVMTI 和 Agent 实现</a></p>
</li>
<li>
<p><a href="https://www.ibm.com/developerworks/cn/java/j-lo-jpda3/index.html">深入 Java 调试体系：第 3 部分，JDWP 协议及实现</a></p>
</li>
<li>
<p><a href="https://www.ibm.com/developerworks/cn/java/j-lo-jpda4/index.html">深入 Java 调试体系：第 4 部分，Java 调试接口（JDI）</a></p>
</li>
</ul><!-- [[[read_end]]] --><p>虽然Java已经使用了JVM TI很多年，但从源码上看在Android 8.0才<a href="http://androidxref.com/8.0.0_r4/xref/art/runtime/openjdkjvmti/">集成</a>了JVM  TI v1.2，主要是需要在Runtime中支持修改内存中的Dex和监控全局的事件。有了JVM  TI的支持，我们可以实现很多调试工具没有实现的功能，或者定制我们自己的Debug工具来获取我们关心的数据。</p><p>现阶段已经有工具使用JVM  TI技术，比如Android Studio的Profilo工具和Linkedin的<a href="https://github.com/linkedin/dexmaker/tree/master/dexmaker-mockito-inline">dexmaker-mockito-inline</a>工具。Android Studio使用JVM  TI机制实现了实时的内存监控，对象分配切片、GC事件、Memory Alloc Diff功能，非常强大；dexmaker使用该机制实现Mock final methods和static methods。</p><p><strong>1. JVM TI支持的功能</strong></p><p>在介绍JVM TI的实现原理之前，我们先来看一下JVM TI提供了什么功能？我们可以利用这些功能做些什么？</p><p><strong>线程相关事件 -&gt; 监控线程创建堆栈、锁信息</strong></p><ul>
<li>
<p>ThreadStart ：线程在执行方法前产生线程启动事件。</p>
</li>
<li>
<p>ThreadEnd：线程结束事件。</p>
</li>
<li>
<p>MonitorWait：wait方法调用后。</p>
</li>
<li>
<p>MonitorWaited：wait方法完成等待。</p>
</li>
<li>
<p>MonitorContendedEnter：当线程试图获取一个已经被其他线程持有的对象锁时。</p>
</li>
<li>
<p>MonitorContendedEntered：当线程获取到对象锁继续执行时。</p>
</li>
</ul><p><strong>类加载准备事件 -&gt; 监控类加载</strong></p><ul>
<li>
<p>ClassFileLoadHook：在类加载之前触发。</p>
</li>
<li>
<p>ClassLoad：某个类首次被加载。</p>
</li>
<li>
<p>ClassPrepare：某个类的准备阶段完成。</p>
</li>
</ul><p><strong>异常事件 -&gt; 监控异常信息</strong></p><ul>
<li>
<p>Exception：有异常抛出的时候。</p>
</li>
<li>
<p>ExceptionCatch：当捕获到一个异常时候。</p>
</li>
</ul><p><strong>调试相关</strong></p><ul>
<li>
<p>SingleStep：步进事件，可以实现相当细粒度的字节码执行序列，这个功能可以探查多线程下的字节码执行序列。</p>
</li>
<li>
<p>Breakpoint：当线程执行到一个带断点的位置，断点可以通过JVMTI SetBreakpoint方法来设置。</p>
</li>
</ul><p><strong>方法执行</strong></p><ul>
<li>
<p>FramePop：当方法执行到retrun指令或者出现异常时候产生，手动调用NofityFramePop JVM TI函数也可产生该事件。</p>
</li>
<li>
<p>MethodEntry：当开始执行一个Java方法的时候。</p>
</li>
<li>
<p>MethodExit：当方法执行完成后，产生异常退出时。</p>
</li>
<li>
<p>FieldAccess：当访问了设置了观察点的属性时产生事件，观察点使用SetFieldAccessWatch函数设置。</p>
</li>
<li>
<p>FieldModification：当设置了观察点的属性值被修改后，观察点使用SetFieldModificationWatch设置。</p>
</li>
</ul><p><strong>GC -&gt; 监控GC事件与时间</strong></p><ul>
<li>
<p>GarbageCollectionStart：GC启动时。</p>
</li>
<li>
<p>GarbageCollectionFinish：GC结束后。</p>
</li>
</ul><p><strong>对象事件 -&gt; 监控内存分配</strong></p><ul>
<li>
<p>ObjectFree：GC释放一个对象时。</p>
</li>
<li>
<p>VMObjectAlloc：虚拟机分配一个对象的时候。</p>
</li>
</ul><p><strong>其他</strong></p><ul>
<li>NativeMethodBind：在首次调用本地方法时或者调用JNI RegisterNatives的时候产生该事件，通过该回调可以将一个JNI调用切换到指定的方法上。</li>
</ul><p>通过上面的事件描述可以大概了解到JVM TI支持什么功能，详细的回调函数参数可以从JVM TI<a href="https://docs.oracle.com/javase/7/docs/platform/jvmti/jvmti.html">规范文档</a>里获取到，<strong>我们可以通过这些功能实们定制的性能监控、数据采集、行为修改等工具。</strong></p><p><strong>2. JVM TI实现原理</strong></p><p>JVM TI Agent的启动需要虚拟机的支持，我们的Agent和虚拟机运行在同一个进程中，虚拟机通过dlopen打开我们的Agent动态链接库，然后通过Agent_OnAttach方法来调用我们定义的初始化逻辑。</p><p>JVM TI的原理其实很简单，以VmObjectAlloc事件为例，当我们通过SetEventNotificationMode函数设置JVMTI_EVENT_VM_OBJECT_ALLOC回调的时候，最终会调用到art::Runtime::Current() -&gt; GetHeap() -&gt; SetAllocationListener(listener);</p><p>在这个方法中，listener是JVM TI实现的一个虚拟机提供的art::gc::AllocationListener回调，当虚拟机分配对象内存的时候会调用该回调，源码可见<a href="http://androidxref.com/9.0.0_r3/xref/art/runtime/gc/heap-inl.h#194">heap-inl.h#194</a>，同时在该回调函数里也会调用我们之前设置的callback方法，这样事件和相关的数据就会透传到我们的Agent里，来实现完成事件的监听。</p><p>类似atrace和StrictMode，JVM TI的每个事件都需要在源码中埋点支持。感兴趣的同学，可以挑选一些事件在源码中进一步跟踪。</p><h2>JVM  TI Agent开发</h2><p>JVM  TI Agent程序使用C/C++语言开发，也可以使用其他支持C语言调用语言开发，比如Rust。</p><p>JVM  TI所涉及的常量、函数、事件、数据类型都定义在jvmti.h文件中，我们需要下载该文件到项目中引用使用，你可以从Android项目里下载它的<a href="http://androidxref.com/9.0.0_r3/xref/art/openjdkjvmti/include/">头文件</a>。</p><p>JVM  TI Agent的产出是一个so文件，在Android里通过系统提供的<a href="https://developer.android.com/reference/kotlin/android/os/Debug#attachJvmtiAgent%28kotlin.String%2C+kotlin.String%2C+java.lang.ClassLoader%29">Debug.attachJvmtiAgent</a>方法来启动一个JVM  TI Agent程序。</p><pre><code>static fun attachJvmtiAgent(library: String, options: String?, classLoader: ClassLoader?): Unit
</code></pre><p>library是so文件的绝对地址。需要注意的是API Level为28，而且需要应用开启了<a href="https://developer.android.com/guide/topics/manifest/application-element#debug">android:debuggable</a>才可以使用，<strong>不过我们可以通过强制开启debug来在release版里启动JVM TI功能</strong>。</p><p>Android下的JVM  TI Agent在被虚拟机加载后会及时调用Agent_OnAttach方法，这个方法可以当作是Agent程序的main函数，所以我们需要在程序里实现下面的函数。</p><pre><code>extern &quot;C&quot; JNIEXPORT jint JNICALL Agent_OnAttach(JavaVM *vm, char *options,void *reserved)
</code></pre><p>你可以在这个方法里进行初始化操作。</p><p>通过JavaVM::GetEnv函数拿到jvmtiEnv*环境指针（Environment Pointer），通过该指针可以访问JVM  TI提供的函数。</p><pre><code>jvmtiEnv *jvmti_env;jint result = vm-&gt;GetEnv((void **) &amp;jvmti_env, JVMTI_VERSION_1_2);
</code></pre><p>通过AddCapabilities函数来开启需要的功能，也可以通过下面的方法开启所有的功能，不过开启所有的功能对虚拟机的性能有所影响。</p><pre><code>void SetAllCapabilities(jvmtiEnv *jvmti) {
    jvmtiCapabilities caps;
    jvmtiError error;
    error = jvmti-&gt;GetPotentialCapabilities(&amp;caps);
    error = jvmti-&gt;AddCapabilities(&amp;caps);
}
</code></pre><p>GetPotentialCapabilities函数可以获取当前环境支持的功能集合，通过jvmtiCapabilities结构体返回，该结构体里标明了支持的所有功能，可以通过<a href="http://androidxref.com/9.0.0_r3/xref/art/openjdkjvmti/include/jvmti.h#712">jvmti.h</a>来查看，大概内容如下。</p><pre><code>typedef struct {
    unsigned int can_tag_objects : 1;
    unsigned int can_generate_field_modification_events : 1;
    unsigned int can_generate_field_access_events : 1;
    unsigned int can_get_bytecodes : 1;
    unsigned int can_get_synthetic_attribute : 1;
    unsigned int can_get_owned_monitor_info : 1;
......
} jvmtiCapabilities;
</code></pre><p>然后通过AddCapabilities方法来启动需要的功能，如果需要单独添加功能，则可以通过如下方法。</p><pre><code> jvmtiCapabilities caps;
    memset(&amp;caps, 0, sizeof(caps));
    caps.can_tag_objects = 1;
</code></pre><p>到此JVM  TI的初始化操作就已经完成了。</p><p>所有的函数和数据结构类型说明可以在<a href="https://docs.oracle.com/javase/7/docs/platform/jvmti/jvmti.html">这里</a>找到。下面我来介绍一些常用的功能和函数。</p><p><strong>1. JVM  TI事件监控</strong></p><p>JVM  TI的一大功能就是可以收到虚拟机执行时候的各种事件通知。</p><p>首先通过SetEventCallbacks方法来设置目标事件的回调函数，如果callbacks传入nullptr则清除掉所有的回调函数。</p><pre><code>  jvmtiEventCallbacks callbacks;
    memset(&amp;callbacks, 0, sizeof(callbacks));

    callbacks.GarbageCollectionStart = &amp;GCStartCallback;
    callbacks.GarbageCollectionFinish = &amp;GCFinishCallback;
    int error = jvmti_env-&gt;SetEventCallbacks(&amp;callbacks, sizeof(callbacks));
</code></pre><p>设置了回调函数后，如果要收到目标事件的话需要通过SetEventNotificationMode，这个函数有个需要注意的地方是event_thread，如果参数event_thread参数为nullptr，则会全局启用改目标事件回调，否则只在指定的线程内生效，比如很多时候对于一些事件我们只关心主线程。</p><pre><code>jvmtiError SetEventNotificationMode(jvmtiEventMode mode,
          jvmtiEvent event_type,
          jthread event_thread,
           ...);
typedef enum {
    JVMTI_ENABLE = 1,//开启
    JVMTI_DISABLE = 0 .//关闭
} jvmtiEventMode;
</code></pre><p>以上面的GC事件为例，上面设置了GC事件的回调函数，如果想要在回调方法里接收到事件则需要使用SetEventNotificationMode开启事件，需要说明的是SetEventNotificationMode和SetEventCallbacks方法调用没有先后顺序。</p><pre><code>jvmti-&gt;SetEventNotificationMode(JVMTI_ENABLE, JVMTI_EVENT_GARBAGE_COLLECTION_START, nullptr);
jvmti-&gt;SetEventNotificationMode(JVMTI_ENABLE, JVMTI_EVENT_GARBAGE_COLLECTION_FINISH, nullptr);
</code></pre><p>通过上面的步骤就可以在虚拟机产生GC事件后在回调函数里获取到对应的函数了，这个Sample需要注意的是在gc callback里禁止使用JNI和JVM  TI函数，因为虚拟机处于停止状态。</p><pre><code>void GCStartCallback(jvmtiEnv *jvmti) {
    LOGI(&quot;==========触发 GCStart=======&quot;);
}

void GCFinishCallback(jvmtiEnv *jvmti) {
    LOGI(&quot;==========触发 GCFinish=======&quot;);
}
</code></pre><p>Sample效果如下。</p><pre><code>com.dodola.jvmti I/jvmti: ==========触发 GCStart=======
com.dodola.jvmti I/jvmti: ==========触发 GCFinish=======
</code></pre><p><strong>2. JVM  TI字节码增强</strong></p><p>JVM  TI可以在虚拟机运行的状态下对字节码进行修改，可以通过下面三种方式修改字节码。</p><ul>
<li>
<p>Static：在虚拟机加载Class文件之前，对字节码修改。该方式一般不采用。</p>
</li>
<li>
<p>Load-Time：在虚拟机加载某个Class时，可以通过JVM  TI回调拿到该类的字节码，会触发ClassFileLoadHook回调函数，该方法由于ClassLoader机制只会触发一次，由于我们Attach Agent的时候经常是在虚拟机执行一段时间之后，所以并不能修改已经加载的Class比如Object，所以需要根据Class的加载时机选择该方法。</p>
</li>
<li>
<p>Dynamic：对于已经载入的Class文件也可以通过JVM  TI机制修改，当系统调用函数RetransformClasses时会触发ClassFileLoadHook，此时可以对字节码进行修改，该方法最为实用。</p>
</li>
</ul><p>传统的JVM操作的是Java Bytecode，Android里的字节码操作的是<a href="https://source.android.com/devices/tech/dalvik/dalvik-bytecode">Dalvik Bytecode</a>，Dalvik Bytecode是寄存器实现的，操作起来相对JavaBytecode来说要相对容易一些，可以不用处理本地变量和操作数栈的交互。</p><p>使用这个功能需要开启JVM  TI字节码增强功能。</p><pre><code>jvmtiCapabilities.can_generate_all_class_hook_events=1 //开启 class hook 功能标记
jvmtiCapabilities.can_retransform_any_class=1 //开启对任意类进行 retransform 操作
</code></pre><p>然后注册ClassFileLoadHook事件回调。</p><pre><code>jvmtiEventCallbacks callbacks;s
callbacks.ClassFileLoadHook = &amp;ClassTransform;
</code></pre><p>这里说明一下ClassFileLoadHook的函数原型，后面会讲解如何重新修改现有字节码。</p><pre><code>static void ClassTransform(
               jvmtiEnv *jvmti_env,//jvmtiEnv 环境指针
               JNIEnv *env,//jniEnv 环境指针
               jclass classBeingRedefined,//被重新定义的class 信息
               jobject loader,//加载该 class 的 classloader，如果该项为 nullptr 则说明是 BootClassLoader 加载的
               const char *name,//目标类的限定名
               jobject protectionDomain,//载入类的保护域
               jint classDataLen,//class 字节码的长度
               const unsigned char *classData,//class 字节码的数据
               jint *newClassDataLen,//新的类数据的长度
               unsigned char **newClassData) //新类的字节码数据
</code></pre><p>然后开启事件，完整的初始化逻辑可参考Sample中的代码。</p><pre><code>SetEventNotificationMode(JVMTI_ENABLE, JVMTI_EVENT_CLASS_FILE_LOAD_HOOK, NULL)
</code></pre><p>下面以Sample代码作为示例来讲解如何在Activity类的onCreate方法中插入一行日志调用代码。</p><p>通过上面的步骤后就可以在虚拟机第一次加载类的时候和在调用RetransformClasses或者RedefineClasses时，在ClassFileLoadHook回调方法里会接收到事件回调。我们目标类是Activity，它在启动应用的时候就已经触发了类加载的过程，由于这个Sample开启事件的时机很靠后，所以此时并不会收到加载Activity类的事件回调，所以需要调用RetransformClasses来触发事件回调，这个方法用于对已经载入的类进行修改，传入一个要修改类的Class数组和数组长度。</p><pre><code>jvmtiError RetransformClasses(jint class_count, const jclass* classes)
</code></pre><p>调用该方法后会在ClassFileLoadHook设置的回调，也就是上面的ClassTran sform方法中接收到回调，在这个回调方法中我们通过字节码处理工具来修改原始类的字节码。</p><p>类的修改会触发虚拟机使用新的方法，旧的方法将不再被调用，如果有一个方法正在栈帧上，则这个方法会继续运行旧的方法的字节码。RetransformClasses 的修改不会导致类的初始化，也就是不会重新调用<cinit>方法，类的静态变量的值和实例变量的值不会产生变化，但目标类的断点会失效。</cinit></p><p>处理类有一些限制，我们可以改变方法的实现和属性，但不能添加删除重命名方法，不能改变方法签名、参数、修饰符，不能改变类的继承关系，如果产生上面的行为会导致修改失败。修改之后会触发类的校验，而且如果虚拟机里有多个相同的Class ，我们需要注意一下取到的Class需要是当前生效的Class，按照ClassLoader加载机制也就是说优先使用提前加载的类。</p><p>Sample中实现的效果是在Activity.onCreate方法中增加一行日志输出。</p><p>修改前：</p><pre><code>protected void onCreate(@Nullable Bundle savedInstanceState) {
.......
}
</code></pre><p>修改后：</p><pre><code>protected void onCreate(@Nullable Bundle savedInstanceState) {
      com.dodola.jvmtilib.JVMTIHelper.printEnter(this,&quot;....&quot;);
....
}
</code></pre><p>我使用的Dalvik字节码修改库是Android系统源码里提供的一套修改框架<a href="http://androidxref.com/9.0.0_r3/xref/tools/dexter/">dexter</a>，虽然使用起来十分灵活但比较繁琐，也可以使用<a href="https://github.com/linkedin/dexmaker">dexmaker</a>框架来实现。本例还是使用dexter，框架使用C++开发，可以直接读取classdata然后进行操作，可以类比到ASM框架。下面的代码是核心的操作代码，完整的代码参考本期Sample。</p><pre><code>ir::Type* stringT = b.GetType(&quot;Ljava/lang/String;&quot;);
ir::Type* jvmtiHelperT=b.GetType(&quot;Lcom/dodola/jvmtilib/JVMTIHelper;&quot;);
lir::Instruction *fi = *(c.instructions.begin());
VReg* v0 = c.Alloc&lt;VReg&gt;(0);
addInstr(c, fi, OP_CONST_STRING,
         {v0, c.Alloc&lt;String&gt;(methodDesc, methodDesc-&gt;orig_index)});
addCall(b, c, fi, OP_INVOKE_STATIC, jvmtiHelperT, &quot;printEnter&quot;, voidT, {stringT}, {0});
c.Assemble();
</code></pre><p>必须通过JVM  TI函数Allocate为要修改的类数据分配内存，将new_class_data指向修改后的类bytecode数组，将new_class_data_len置为修改后的类bytecode数组的长度。若是不修改类文件，则不设置new_class_data即可。若是加载了多个JVM  TI Agent都启用了该事件，则设置的new_class_data会成为下一个JVM  TI Agent的class_data。</p><p>此时我们生成的onCreate方法里已经加上了我们添加的日志方法调用。开启新的Activity会使用新的类字节码执行，同时会使用ClassLoader加载我们注入的com.dodola.jvmtilib.JVMTIHelper类。我在前面说过，Activity是使用BootClassLoader进行加载的，然而我们的类明显不在BootClassLoader里，此时就会产生Crash。</p><pre><code>java.lang.NoClassDefFoundError: Class not found using the boot class loader; no stack trace available
</code></pre><p>所以需要想办法将JVMTIHelper类添加到BootClassLoader里，这里可以使用JVM  TI提供的AddToBootstrapClassLoaderSearch方法来添加Dex或者APK到Class搜索目录里。Sample里是将 getPackageCodePath添加进去就可以了。</p><h2>总结</h2><p>今天我主要讲解了JVM  TI的概念和原理，以及它可以实现的功能。通过JVM  TI可以完成很多平时可能需要很多“黑科技”才可以获取到的数据，比如<a href="https://android-review.googlesource.com/c/platform/art/+/822440">Thread Park Start/Finish</a>事件、获取一个锁的waiters等。</p><p>可能在Android圈里了解JVM TI的人不多，对它的研究还没有非常深入。目前JVM TI的功能已经十分强大，后续的Android版本也会进一步增加更多的功能支持，这样它可以做的事情将会越来越多。我相信在未来，它将会是本地自动化测试，甚至是线上远程诊断的一大“杀器”。</p><p>在本期的<a href="https://github.com/AndroidAdvanceWithGeektime/JVMTI_Sample">Sample</a>里，我们提供了一些简单的用法，你可以在这个基础之上完成扩展，实现自己想要的功能。</p><h2>相关资料</h2><p>1.<a href="https://www.ibm.com/developerworks/cn/java/j-lo-jpda1/index.html">深入 Java 调试体系：第 1 部分，JPDA 体系概览</a></p><p>2.<a href="https://www.ibm.com/developerworks/cn/java/j-lo-jpda2/index.html">深入 Java 调试体系：第 2 部分，JVMTI 和 Agent 实现</a></p><p>3.<a href="https://www.ibm.com/developerworks/cn/java/j-lo-jpda3/index.html">深入 Java 调试体系：第 3 部分，JDWP 协议及实现</a></p><p>4.<a href="https://www.ibm.com/developerworks/cn/java/j-lo-jpda4/index.html">深入 Java 调试体系：第 4 部分，Java 调试接口（JDI）</a></p><p>5.JVM TI官方文档：<a href="https://docs.oracle.com/javase/7/docs/platform/jvmti/jvmti.html">https://docs.oracle.com/javase/7/docs/platform/jvmti/jvmti.html</a></p><p>6.源码是最好的资料：<a href="http://androidxref.com/9.0.0_r3/xref/art/openjdkjvmti/">http://androidxref.com/9.0.0_r3/xref/art/openjdkjvmti/</a></p><h2>福利彩蛋</h2><p>根据专栏导读里我们约定的，我和绍文会选出一些认真提交作业完成练习的同学，送出一份“学习加油礼包”。专栏更新到现在，很多同学留下了自己的思考和总结，我们选出了<span class="orange">@Owen、@志伟、@许圣明、@小洁、@SunnyBird</span>，送出“<a href="time://mall?url=http%3A%2F%2Fh5.youzan.com%2Fv2%2Fgoods%2F2fwl2bk2x20js">极客时间周历</a>”一份，希望更多同学可以加入到学习和讨论中来，与我们一起进步。</p><p><img src="https://static001.geekbang.org/resource/image/c9/ce/c91eaa4425b74b8c5d8a044e0332f8ce.png" alt=""><br>
@Owen学习总结：<a href="https://github.com/devzhan/Breakpad">https://github.com/devzhan/Breakpad</a></p><p>@许圣明、@小洁、@SunnyBird 通过Pull Requests提交了练习作业<a href="https://github.com/AndroidAdvanceWithGeektime/Chapter04/pulls">https://github.com/AndroidAdvanceWithGeektime/Chapter04/pulls</a>。</p><p>极客时间小助手会在24小时内与获奖用户取得联系，注意查看短信哦～</p><p></p>