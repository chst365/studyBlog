---
title: 唯鹿同学的练习手记第3辑
date: 2022-03-09 21:53:04
permalink: /pages/645742/
categories:
  - 极客时间
  - Android开发高手课
tags:
  - 
---
<audio title="练习Sample跑起来.唯鹿同学的练习手记第3辑" src="https://static001.geekbang.org/resource/audio/df/c2/df08966dbbe1afcf86c3debc177b82c2.mp3" controls="controls"></audio> 
<p>没想到之前的写的练习心得得到了老师的认可，看来我要更加认真努力练习了。今天来练习第22、27、ASM这三课的Sample。</p><p><a href="https://github.com/AndroidAdvanceWithGeektime/Chapter22"><strong>Chapter22</strong></a></p><blockquote>
<p>尝试使用Facebook ReDex库来优化我们的安装包。</p>
</blockquote><p><strong>准备工作</strong></p><p>首先是下载ReDex：</p><pre><code>git clone https://github.com/facebook/redex.git
cd redex
</code></pre><p>接着是安装：</p><pre><code>autoreconf -ivf &amp;&amp; ./configure &amp;&amp; make -j4
sudo make install
</code></pre><p>在安装时执行到这里，报出下图错误：</p><p><img src="https://static001.geekbang.org/resource/image/40/fa/40ba14544153f1ef67bfd21a884c1efa.jpg" alt=""></p><p>其实就是没有安装Boost，所以执行下面的命令安装它。</p><pre><code>brew install boost jsoncpp
</code></pre><p>安装Boost完成后，再等待十几分钟时间安装ReDex。</p><p>下来就是编译我们的Sample，得到的安装包信息如下。</p><p><img src="https://static001.geekbang.org/resource/image/bc/0b/bcf38372f4d9315b9d288607e437040b.jpeg" alt=""></p><p>可以看到有三个Dex文件，APK大小为13.7MB。</p><p><strong>通过ReDex命令优化</strong></p><p>为了让我们可以更加清楚流程，你可以输出ReDex的日志。</p><pre><code>export TRACE=2
</code></pre><p>去除Debuginfo的方法，需要在项目根目录执行：</p><pre><code>redex --sign -s ReDexSample/keystore/debug.keystore -a androiddebugkey -p android -c redex-test/stripdebuginfo.config -P ReDexSample/proguard-rules.pro  -o redex-test/strip_output.apk ReDexSample/build/outputs/apk/debug/ReDexSample-debug.apk
</code></pre><p>上面这段很长的命令，其实可以拆解为几部分：</p><ul>
<li>
<p><code>--sign</code> 签名信息</p>
</li>
<li>
<p><code>-s</code>（keystore）签名文件路径</p>
</li>
<li>
<p><code>-a</code>（keyalias）签名的别名</p>
</li>
<li>
<p><code>-p</code>（keypass）签名的密码</p>
</li>
<li>
<p><code>-c</code> 指定ReDex的配置文件路径</p>
</li>
<li>
<p><code>-P</code> ProGuard规则文件路径</p>
</li>
<li>
<p><code>-o</code> 输出的文件路径</p>
</li>
<li>
<p>最后是要处理APK文件的路径</p>
</li>
</ul><!-- [[[read_end]]] --><p>但在使用时，我遇到了下图的问题：</p><p><img src="https://static001.geekbang.org/resource/image/f9/42/f942ef115b2293562b6c3d533c0abd42.png" alt=""></p><p>这里是找不到<code>Zipalign</code>，所以需要我们配置Android SDK的根目录路径，添加在原命令前面：</p><pre><code>ANDROID_SDK=/path/to/android/sdk redex [... arguments ...]
</code></pre><p>结果如下：</p><p><img src="https://static001.geekbang.org/resource/image/4f/28/4f442a95f1518cbe38311b042cdda028.png" alt=""></p><p>实际的优化效果是，原Debug包为14.21MB，去除Debuginfo的方法后为12.91MB，效果还是不错的。<strong>去除的内容就是一些调试信息及堆栈行号。</strong></p><p><img src="https://static001.geekbang.org/resource/image/fd/07/fda8e0b637df6f145f9867764720ab07.jpeg" alt=""></p><p>不过老师在Sample的proguard-rules.pro中添加了<code>-keepattributes SourceFile,LineNumberTable</code>保留了行号信息。</p><p>所以处理后的包安装后进入首页，还是可以看到堆栈信息的行号。</p><p><strong>Dex重分包的方法</strong></p><pre><code>redex --sign -s ReDexSample/keystore/debug.keystore -a androiddebugkey -p android -c redex-test/interdex.config -P ReDexSample/proguard-rules.pro  -o redex-test/interdex_output.apk ReDexSample/build/outputs/apk/debug/ReDexSample-debug.apk
</code></pre><p>和之前的命令一样，只是<code>-c</code>使用的配置文件为interdex.config。</p><p>输出信息：</p><p><img src="https://static001.geekbang.org/resource/image/29/aa/293f13ab6fe75ede7d4840d04f0d56aa.jpeg" alt=""></p><p>优化效果为，原Debug包为14.21MB、3个Dex，优化后为13.34MB、2个Dex。</p><p><img src="https://static001.geekbang.org/resource/image/77/c3/77abb69a81448e677b64bb5cbd59fec3.jpeg" alt=""></p><p>根据老师的介绍，<strong>如果你的应用有4个以上的Dex，这个体积优化至少有10%</strong>。 看来效果还是很棒棒的。至于其他问题，比如在Windows环境使用ReDex，可以参看ReDex的<a href="https://fbredex.com/docs/installation">使用文档</a>。</p><p><a href="https://github.com/AndroidAdvanceWithGeektime/Chapter27"><strong>Chapter27</strong></a></p><blockquote>
<p>利用AspectJ实现插桩的例子。</p>
</blockquote><p>效果和<a href="https://github.com/AndroidAdvanceWithGeektime/Chapter07">Chapter07</a>是一样的，只是Chapter07使用的是ASM方式实现的，这次是AspectJ实现。ASM与AspectJ都是Java字节码处理框架，相比较来说AspectJ使用更加简单，同样的功能实现只需下面这点代码，但是ASM比AspectJ更加高效和灵活。</p><p>AspectJ实现代码：</p><pre><code>@Aspect
public class TraceTagAspectj {

    @TargetApi(Build.VERSION_CODES.JELLY_BEAN_MR2)
    @Before(&quot;execution(* **(..))&quot;)
    public void before(JoinPoint joinPoint) {
        Trace.beginSection(joinPoint.getSignature().toString());
    }

    /**
     * hook method when it's called out.
     */
    @TargetApi(Build.VERSION_CODES.JELLY_BEAN_MR2)
    @After(&quot;execution(* **(..))&quot;)
    public void after() {
        Trace.endSection();
    }
</code></pre><p>简单介绍下上面代码的意思：</p><ul>
<li>
<p><code>@Aspect</code>：在编译时AspectJ会查找被<code>@Aspect</code>注解的类，然后执行我们的AOP实现。</p>
</li>
<li>
<p><code>@Before</code>：可以简单理解为方法执行前。</p>
</li>
<li>
<p><code>@After</code>：可以简单理解为方法执行后。</p>
</li>
<li>
<p><code>execution</code>：方法执行。</p>
</li>
<li>
<p><code>* **(..)</code>：第一个星号代表任意返回类型，第二个星号代表任意类，第三个代表任意方法，括号内为方法参数无限制。星号和括号内都是可以替换为具体值，比如String TestClass.test(String)。</p>
</li>
</ul><p>知道了相关注解的含义，那么实现的代码含义就是，<strong>所有方法在执行前后插入相应指定操作</strong>。</p><p>效果对比如下：</p><p><img src="https://static001.geekbang.org/resource/image/64/77/644381974bcd1e3b2d468cdeb432ed77.png" alt=""><br>
<img src="https://static001.geekbang.org/resource/image/02/ca/02b99a9e7fd70da8d9fdf086f31c78ca.png" alt=""></p><p>下来实现给MainActivity的<code>onResume</code>方法增加try catch。</p><pre><code>@Aspect
public class TryCatchAspect {
    
    @Pointcut(&quot;execution(* com.sample.systrace.MainActivity.onResume())&quot;) // &lt;- 指定类与方法
    public void methodTryCatch() {
    }

    @Around(&quot;methodTryCatch()&quot;)
    public void aroundTryJoinPoint(ProceedingJoinPoint joinPoint) throws Throwable {
       
         // try catch
         try {
             joinPoint.proceed(); // &lt;- 调用原方法
         } catch (Exception e) {
              e.printStackTrace();
         }
    }
}
</code></pre><p>上面用到了两个新注解：</p><ul>
<li>
<p><code>@Around</code>：用于替换以前的代码，使用joinPoint.proceed()可以调用原方法。</p>
</li>
<li>
<p><code>@Pointcut</code>：指定一个切入点。</p>
</li>
</ul><p>实现就是指定一个切入点，利用替换原方法的思路包裹一层try catch。</p><p>效果对比如下：</p><p><img src="https://static001.geekbang.org/resource/image/7f/c0/7f4a5bb6995c53872966c956d7e78ec0.png" alt=""><br>
<img src="https://static001.geekbang.org/resource/image/08/bc/08d123aa792c8f4fc8538fd5658cb9bc.png" alt=""></p><p>当然AspectJ还有很多用法，Sample中包含有《AspectJ程序设计指南》，便于我们具体了解和学习AspectJ。</p><p><a href="https://github.com/AndroidAdvanceWithGeektime/Chapter-ASM"><strong>Chapter-ASM</strong></a></p><blockquote>
<p>Sample利用ASM实现了统计方法耗时和替换项目中所有的new Thread。</p>
</blockquote><ul>
<li>
<p>运行项目首先要注掉ASMSample build.gradle的<code>apply plugin: 'com.geektime.asm-plugin'</code>和根目录build.gradle的<code>classpath ("com.geektime.asm:asm-gradle-plugin:1.0") { changing = true }</code>。</p>
</li>
<li>
<p>运行<code>gradle task ":asm-gradle-plugin:buildAndPublishToLocalMaven"</code>编译plugin插件，编译的插件在本地<code>.m2\repository</code>目录下</p>
</li>
<li>
<p>打开第一步注掉的内容就可以运行了。</p>
</li>
</ul><p>实现的大致过程是，先利用Transform遍历所有文件，再通过ASM的<code>visitMethod</code>遍历所有方法，最后通过AdviceAdapter实现最终的修改字节码。具体实现可以看代码和<a href="https://time.geekbang.org/column/article/83148">《练习Sample跑起来 | ASM插桩强化练习》</a>。</p><p>效果对比：</p><p><img src="https://static001.geekbang.org/resource/image/ee/0b/ee98c9349e62d5aca66b883a89cd470b.png" alt=""><br>
<img src="https://static001.geekbang.org/resource/image/d0/3a/d0dd3c68ac2d56b6eebf6853f871c43a.png" alt=""></p><p>下面是两个练习：</p><p>1.给某个方法增加try catch</p><p>这里我就给MainActivity的<code>mm</code>方法进行try catch。实现很简单，直接修改ASMCode的TraceMethodAdapter。</p><pre><code>public static class TraceMethodAdapter extends AdviceAdapter {

        private final String methodName;
        private final String className;
        private final Label tryStart = new Label();
        private final Label tryEnd = new Label();
        private final Label catchStart = new Label();
        private final Label catchEnd = new Label();

        protected TraceMethodAdapter(int api, MethodVisitor mv, int access, String name, String desc, String className) {
            super(api, mv, access, name, desc);
            this.className = className;
            this.methodName = name;
        }

        @Override
        protected void onMethodEnter() {
            if (className.equals(&quot;com/sample/asm/MainActivity&quot;) &amp;&amp; methodName.equals(&quot;mm&quot;)) {
                mv.visitTryCatchBlock(tryStart, tryEnd, catchStart, &quot;java/lang/Exception&quot;);
                mv.visitLabel(tryStart);
            }
        }

        @Override
        protected void onMethodExit(int opcode) {
            if (className.equals(&quot;com/sample/asm/MainActivity&quot;) &amp;&amp; methodName.equals(&quot;mm&quot;)) {
                mv.visitLabel(tryEnd);
                mv.visitJumpInsn(GOTO, catchEnd);
                mv.visitLabel(catchStart);
                mv.visitMethodInsn(Opcodes.INVOKEVIRTUAL, &quot;java/lang/RuntimeException&quot;, &quot;printStackTrace&quot;, &quot;()V&quot;, false);
                mv.visitInsn(Opcodes.RETURN);
                mv.visitLabel(catchEnd);
            }
        }
</code></pre><p><code>visitTryCatchBlock</code>方法：前三个参数均是Label实例，其中一、二表示try块的范围，三则是catch块的开始位置，第四个参数是异常类型。其他的方法及参数就不细说了，具体你可以参考<a href="https://asm.ow2.io/asm4-guide.pdf">ASM文档</a>。</p><p>实现类似AspectJ，在方法执行开始及结束时插入我们的代码。</p><p>效果我就不截图了，代码如下：</p><pre><code>public void mm() {
        try {
            A a = new A(new B(2));
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
</code></pre><p>2.查看代码中谁获取了IMEI</p><p>这个就更简单了，直接寻找谁使用了TelephonyManager的<code>getDeviceId</code>方法，并且在Sample中有答案。</p><pre><code>public class IMEIMethodAdapter extends AdviceAdapter {

    private final String methodName;
    private final String className;

    protected IMEIMethodAdapter(int api, MethodVisitor mv, int access, String name, String desc, String className) {
        super(api, mv, access, name, desc);
        this.className = className;
        this.methodName = name;
    }

    @Override
    public void visitMethodInsn(int opcode, String owner, String name, String desc, boolean itf) {
        super.visitMethodInsn(opcode, owner, name, desc, itf);

        if (owner.equals(&quot;android/telephony/TelephonyManager&quot;) &amp;&amp; name.equals(&quot;getDeviceId&quot;) &amp;&amp; desc.equals(&quot;()Ljava/lang/String;&quot;)) {
            Log.e(&quot;asmcode&quot;, &quot;get imei className:%s, method:%s, name:%s&quot;, className, methodName, name);
        }
    }
}  
</code></pre><p>Build后输出如下：</p><p><img src="https://static001.geekbang.org/resource/image/2d/94/2d5c01eee4fc651b5831c0341d6e0994.png" alt=""></p><p>总体来说ASM的上手难度还是高于AspectJ，需要我们了解编译后的字节码，这里所使用的功能也只是冰山一角。课代表鹏飞同学推荐的ASM Bytecode Outline插件是个好帮手！最后我将我练习的代码也上传到了<a href="https://github.com/simplezhli/Chapter-ASM">GitHub</a>，里面还包括一份中文版的ASM文档，有兴趣的同学可以下载看看。</p><p>参考</p><ul>
<li><a href="http://time.geekbang.org/column/article/83148">练习Sample跑起来 | ASM插桩强化练</a></li>
<li><a href="http://asm.ow2.io/asm4-guide.pdf">ASM文档</a></li>
</ul><p></p>