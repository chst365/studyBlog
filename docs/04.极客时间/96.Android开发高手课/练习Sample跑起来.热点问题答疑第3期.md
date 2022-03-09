---
title: 热点问题答疑第3期
date: 2022-03-09 21:52:36
permalink: /pages/bb1750/
categories:
  - 极客时间
  - Android开发高手课
tags:
  - 
---
<audio title="练习Sample跑起来.热点问题答疑第3期" src="https://static001.geekbang.org/resource/audio/67/fb/6743895ed4b5615995b787a754d154fb.mp3" controls="controls"></audio> 
<p>你好，我是孙鹏飞。又到了答疑的时间，今天我将围绕卡顿优化这个主题，和你探讨一下专栏第6期和补充篇的两个Sample的实现。</p><p>专栏第6期的Sample完全来自于Facebook的性能分析框架<a href="https://github.com/facebookincubator/profilo">Profilo</a>，主要功能是收集线上用户的atrace日志。关于atrace相信我们都比较熟悉了，平时经常使用的systrace工具就是封装了atrace命令来开启ftrace事件，并读取ftrace缓冲区生成可视化的HTML日志。这里多说一句，ftrace是Linux下常用的内核跟踪调试工具，如果你不熟悉的话可以返回第6期文稿最后查看ftrace的介绍。Android下的atrace扩展了一些自己使用的categories和tag，这个Sample获取的就是通过atrace的同步事件。</p><p>Sample的实现思路其实也很简单，有两种方案。</p><p>第一种方案：hook掉atrace写日志时的一系列方法。以Android 9.0的代码为例写入ftrace日志的代码在<a href="http://androidxref.com/9.0.0_r3/xref/system/core/libcutils/trace-dev.cpp">trace-dev.cpp</a>里，由于每个版本的代码有些区别，所以需要根据系统版本做一些区分。</p><p>第二种方案：也是Sample里所使用的方案，由于所有的atrace event写入都是通过<a href="http://androidxref.com/9.0.0_r3/xref/system/core/libcutils/trace-container.cpp#85">/sys/kernel/debug/tracing/trace_marker</a>，atrace在初始化的时候会将该路径fd的值写入<a href="http://androidxref.com/9.0.0_r3/s?defs=atrace_marker_fd&amp;project=system">atrace_marker_fd</a>全局变量中，我们可以通过dlsym轻易获取到这个fd的值。关于trace_maker这个文件我需要说明一下，这个文件涉及ftrace的一些内容，ftrace原来是内核的事件trace工具，并且ftrace文档的开头已经写道</p><!-- [[[read_end]]] --><blockquote>
<p>Ftrace is an internal tracer designed to help out developers and designers of systems to find what is going on inside the kernel.</p>
</blockquote><p>从文档中可以看出来，ftrace工具主要是用来探查outside of user-space的性能问题。不过在很多场景下，我们需要知道user space的事件调用和kernel事件的一个先后关系，所以ftrace也提供了一个解决方法，也就是提供了一个文件trace_marker，往该文件中写入内容可以产生一条ftrace记录，这样我们的事件就可以和kernel的日志拼在一起。但是这样的设计有一个不好的地方，在往文件写入内容的时候会发生system call调用，有系统调用就会产生用户态到内核态的切换。这种方式虽然没有内核直接写入那么高效，但在很多时候ftrace工具还是很有用处的。</p><p>由此可知，用户态的事件数据都是通过trace_marker写入的，更进一步说是通过write接口写入的，那么我们只需要hook住write接口并过滤出写入这个fd下的内容就可以了。这个方案通用性比较高，而且使用PLT Hook即可完成。</p><p>下一步会遇到的问题是，想要获取atrace的日志，就需要设置好atrace的category tag才能获取到。我们从源码中可以得知，判断tag是否开启，是通过atrace_enabled_tags &amp; tag来计算的，如果大于0则认为开启，等于0则认为关闭。下面我贴出了部分atrace_tag的值，你可以看到，判定一个tag是否是开启的，只需要tag值的左偏移数的位值和atrace_enabled_tags在相同偏移数的位值是否同为1。其实也就是说，我将atrace_enabled_tags的所有位都设置为1，那么在计算时候就能匹配到任何的atrace tag。</p><pre><code>#define ATRACE_TAG_NEVER            0      
#define ATRACE_TAG_ALWAYS           (1&lt;&lt;0)  
#define ATRACE_TAG_GRAPHICS         (1&lt;&lt;1)
#define ATRACE_TAG_INPUT            (1&lt;&lt;2)
#define ATRACE_TAG_VIEW             (1&lt;&lt;3)
#define ATRACE_TAG_WEBVIEW          (1&lt;&lt;4)
#define ATRACE_TAG_WINDOW_MANAGER   (1&lt;&lt;5)
#define ATRACE_TAG_ACTIVITY_MANAGER (1&lt;&lt;6)
#define ATRACE_TAG_SYNC_MANAGER     (1&lt;&lt;7)
#define ATRACE_TAG_AUDIO            (1&lt;&lt;8)
#define ATRACE_TAG_VIDEO            (1&lt;&lt;9)
#define ATRACE_TAG_CAMERA           (1&lt;&lt;10)
#define ATRACE_TAG_HAL              (1&lt;&lt;11)
#define ATRACE_TAG_APP              (1&lt;&lt;12)
</code></pre><p>下面是我用atrace抓下来的部分日志。</p><p><img src="https://static001.geekbang.org/resource/image/f9/b8/f9b273a45eeb643f976b48147ce1b3b8.png" alt=""></p><p>看到这里有同学会问，Begin和End是如何对应上的呢？要回答这个问题，首先要先了解一下这种记录产生的场景。这个日志在Java端是由Trace.traceBegin和Trace.traceEnd产生的，在使用上有一些硬性要求：这两个方法必须成对出现，否则就会造成日志的异常。请看下面的系统代码示例。</p><pre><code>void assignWindowLayers(boolean setLayoutNeeded) {
2401        Trace.traceBegin(Trace.TRACE_TAG_WINDOW_MANAGER, &quot;assignWindowLayers&quot;);//关注此处事件开始代码
2402        assignChildLayers(getPendingTransaction());
2403        if (setLayoutNeeded) {
2404            setLayoutNeeded();
2405        }
2406
2411        scheduleAnimation();
2412        Trace.traceEnd(Trace.TRACE_TAG_WINDOW_MANAGER);//事件结束
2413    }
2414
</code></pre><p>所以我们可以认为B下面紧跟的E就是事件的结束标志，但很多情况下我们会遇到上面日志中所看到的两个B连在一起，紧跟的两个E我们不知道分别对应哪个B。此时我们需要看一下产生事件的CPU是哪个，并且看一下产生事件的task_pid是哪个，也就是最前面的InputDispatcher-1944，这样我们就可以对应出来了。</p><p>接下来我们一起来看看补充篇的Sample，它的目的是希望让你练习一下如何监控线程创建，并且打印出创建线程的Java方法。Sample的实现比较简单，主要还是依赖PLT  Hook来hook线程创建时使用的主要函数pthread_create。想要完成这个Sample你需要知道Java线程是如何创建出来的，并且还要理解Java线程的执行方式。需要特别说明的是，其实这个Sample也存在一个缺陷。从虚拟机的角度看，线程其实又分为两种，一种是Attached线程，我习惯按照.Net的叫法称其为托管线程；一种是Unattached线程，为非托管线程。但底层都是依赖POSIX Thread来实现的，从pthread_create里无法区分该线程是否是托管线程，也有可能是Native直接开启的线程，所以有可能并不能对应到创建线程时候的Java Stack。</p><p>关于线程，我们在日常监控中可能并不太关心线程创建时候的状况，而区分线程可以通过提前设置Thread Name来实现。举个例子，比如在出现OOM时发现是发生在pthread_create执行的时候，说明当前线程数可能过多，一般我们会在OOM的时候采集当前线程数和线程堆栈信息，可以看一下是哪个线程创建过多，如果指定了线程名称则很快就能查找出问题所在。</p><p>对于移动端的线程来说，我们大多时候更关心的是主线程的执行状态。因为主线程的任何耗时操作都会影响操作界面的流畅度，所以我们经常把看起来比较耗时的操作统统都往子线程里面丢，虽然这种操作虽然有时候可能很有效，但还可能会产生一些我们平时很少遇到的异常情况。比如我曾经遇到过，由于用户手机的I/O性能很低，大量的线程都在wait io；或者线程开启的太多，导致线程Context switch过高；又或者是一个方法执行过慢，导致持有锁的时间过长，其他线程无法获取到锁等一系列异常的情况，</p><p>虽然线程的监控很不容易，但并不是不能实现，只是实现起来比较复杂并且要考虑兼容性。比如我们可能比较关心一个Lock当前有多少线程在等待锁释放，就需要先获取到这个Object的MirrorObject，然后构造一个MonitorInfo，之后获取到waiters的列表，而这个列表里就存储了等待锁释放的线程。你看其实过程也并不复杂，只是在计算地址偏移量的时候需要做一些处理。</p><p>当然还有更细致的优化，比如我们都知道Java里是有轻量级锁和重量级锁的一个转换过程，在ART虚拟机里被称为ThinLocked和FatLocked，而转换过程是通过Monitor::Inflate和Monitor::Deflate函数来实现的。此时我们可以监控Monitor::Inflate调用时monitor指向的Object，来判断是哪段代码产生了“瘦锁”到“胖锁”转换的过程，从而去做一些优化。接下来要做优化，需要先知晓ART虚拟机锁转换的机制，如果当前锁是瘦锁，持有该锁的线程再一次获取这个锁只递增了lock count，并未改变锁的状态。但是lock count超过4096则会产生瘦锁到胖锁的转换，如果当前持有该锁的线程和进入MontorEnter的线程不是同一个的情况下就会产生锁争用的情况。ART虚拟机为了减少胖锁的产生做了一些优化，虚拟机先通过<a href="http://man7.org/linux/man-pages/man2/sched_yield.2.html">sched_yield</a>让出当前线程的执行权，操作系统在后面的某个时间再次调度该线程执行，从调用sched_yield到再次执行的时候计算时间差，在这个时间差里占用该锁的线程可能会释放对锁的占用，那么调用线程会再次尝试获取锁，如果获取锁成功的话则会从 Unlocked状态直接转换为ThinLocked状态，不会产生FatLocked状态。这个过程持续50次，如果在50次循环内无法获取到锁则会将瘦锁转为胖锁。如果我们对某部分的多线程代码性能敏感，则希望锁尽量持续在瘦锁的状态，我们可以减少同步块代码的粒度，尽量减少很多线程同时争抢锁，可以监控Inflate函数调用情况来判断优化效果。</p><p>最后，还有同学对在Crash状态下获取Java线程堆栈的方法比较感兴趣，我在这里简单讲一下，后面会有专门的文章介绍这部分内容。</p><p>一种方案是使用ThreadList::ForEach接口间接实现，具体的逻辑可以看<a href="http://androidxref.com/9.0.0_r3/xref/art/runtime/trace.cc#286">这里</a>。另一种方案是 Profilo里的<a href="https://github.com/facebookincubator/profilo/blob/master/cpp/profiler/unwindc/">Unwinder</a>机制，这种实现方式就是模拟<a href="http://androidxref.com/9.0.0_r3/xref/art/runtime/stack.cc#766">StackVisitor</a>的逻辑来实现。</p><p>这两期反馈的问题不多，答疑的内容也可以算作对正文的补充，如果有同学想多了解虚拟机的机制或者其他性能相关的问题，欢迎你给我留言，我也会在后面的文章和你聊聊这些话题，比如有同学问到的ART下GC的详细逻辑之类的问题。</p><h2>相关资料</h2><ul>
<li>
<p><a href="https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/tree/Documentation/trace/ftrace.rst">ftrace kernel doc</a></p>
</li>
<li>
<p><a href="https://source.android.google.cn/devices/tech/debug/ftrace">ftrace的使用</a></p>
</li>
<li>
<p><a href="https://lwn.net/Articles/322666/">A look at ftrace</a></p>
</li>
</ul><h2>福利彩蛋</h2><p>今天为认真提交作业完成练习的同学，送出第二波“学习加油礼包”。<span class="orange">@Seven</span>同学提交了第5期的<a href="https://github.com/AndroidAdvanceWithGeektime/Chapter05/pull/1">作业</a>，送出“极客周历”一本，其他同学如果完成了练习千万别忘了通过Pull request提交哦。</p><p>欢迎你点击“请朋友读”，把今天的内容分享给好友，邀请他一起学习。</p><p></p>