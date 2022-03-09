---
title: 唯鹿同学的练习手记第2辑
date: 2022-03-09 21:52:58
permalink: /pages/363dae/
categories:
  - 极客时间
  - Android开发高手课
tags:
  - 
---
<audio title="练习Sample跑起来.唯鹿同学的练习手记第2辑" src="https://static001.geekbang.org/resource/audio/8b/be/8b7f5c322632493d7d6e9729188cffbe.mp3" controls="controls"></audio> 
<p>你好，我是唯鹿。</p><p>接着上篇<a href="https://time.geekbang.org/column/article/83742">练习手记</a>，今天练习6～8、12、17、19这六期内容（主要针对有课后Sample练习的），相比1～5期轻松了很多。</p><p><a href="https://github.com/AndroidAdvanceWithGeektime/Chapter06"><strong>Chapter06</strong></a></p><blockquote>
<p>该项目展示了使用PLT Hook技术来获取Atrace的日志，可以学习到systrace的一些底层机制。</p>
</blockquote><p>没有什么问题，项目直接可以运行起来。运行项目后点击开启Atrace日志，然后就可以在Logcat日志中查看到捕获的日志，如下：</p><pre><code>11:40:07.031 8537-8552/com.dodola.atrace I/HOOOOOOOOK: ========= install systrace hoook =========
11:40:07.034 8537-8537/com.dodola.atrace I/HOOOOOOOOK: ========= B|8537|Record View#draw()
11:40:07.034 8537-8552/com.dodola.atrace I/HOOOOOOOOK: ========= B|8537|DrawFrame
11:40:07.035 8537-8552/com.dodola.atrace I/HOOOOOOOOK: ========= B|8537|syncFrameState
    ========= B|8537|prepareTree
    ========= E
    ========= E
    ========= B|8537|eglBeginFrame
    ========= E
    ========= B|8537|computeOrdering
    ========= E
    ========= B|8537|flush drawing commands
    ========= E
11:40:07.036 8537-8552/com.dodola.atrace I/HOOOOOOOOK: ========= B|8537|eglSwapBuffersWithDamageKHR
    ========= B|8537|setSurfaceDamage
    ========= E
11:40:07.042 8537-8552/com.dodola.atrace I/HOOOOOOOOK: ========= B|8537|queueBuffer
    ========= E
11:40:07.043 8537-8552/com.dodola.atrace I/HOOOOOOOOK: ========= B|8537|dequeueBuffer
    ========= E
    ========= E
    ========= E
</code></pre><p>通过B|事件和E|事件是成对出现的，这样就可以计算出应用执行每个事件使用的时间。那么上面的Log中View的draw()方法显示使用了9ms。</p><p>这里实现方法是使用了<a href="https://github.com/facebookincubator/profilo">Profilo</a>的PLT Hook来hook libc.so的<code>write</code>与<code>__write_chk</code>方法。libc是C的基础库函数，为什么要hook这些方法，需要我们补充C、Linux相关知识。</p><p>同理<a href="https://github.com/AndroidAdvanceWithGeektime/Chapter06-plus">Chapter06-plus</a>展示了如何使用 PLT Hook技术来获取线程创建的堆栈，README有详细的实现步骤介绍，我就不赘述了。</p><p><a href="https://github.com/AndroidAdvanceWithGeektime/Chapter07"><strong>Chapter07</strong></a></p><blockquote>
<p>这个Sample是学习如何给代码加入Trace Tag，大家可以将这个代码运用到自己的项目中，然后利用systrace查看结果。这就是所谓的systrace + 函数插桩。</p>
</blockquote><!-- [[[read_end]]] --><p>操作步骤：</p><ul>
<li>
<p>使用Android Studio打开工程Chapter07。</p>
</li>
<li>
<p>运行Gradle Task <code>:systrace-gradle-plugin:buildAndPublishToLocalMaven</code>编译plugin插件。</p>
</li>
<li>
<p>使用Android Studio单独打开工程systrace-sample-android。</p>
</li>
<li>
<p>编译运行App（插桩后的class文件在目录<code>Chapter07/systrace-sample-android/app/build/systrace_output/classes</code>中查看）。</p>
</li>
</ul><p>对比一下插桩效果，插桩前：</p><p><img src="https://static001.geekbang.org/resource/image/65/a5/6587c2a9e0d4cae3b5336cbf9ef91da5.jpeg" alt=""></p><p>插桩后:</p><p><img src="https://static001.geekbang.org/resource/image/08/13/0895158565b8548d86d2e076325c0713.jpeg" alt=""></p><p>可以看到在方法执行前后插入了TraceTag，这样的话<code>beginSection</code>方法和<code>endSection</code>方法之间的代码就会被追踪。</p><pre><code>public class TraceTag {

    @TargetApi(Build.VERSION_CODES.JELLY_BEAN_MR2)
    public static void i(String name) {
        Trace.beginSection(name);
    }

    @TargetApi(Build.VERSION_CODES.JELLY_BEAN_MR2)
    public static void o() {
        Trace.endSection();
    }
</code></pre><p>其实Support-Compat库中也有类似的一个<a href="https://developer.android.google.cn/reference/android/support/v4/os/TraceCompat">TraceCompat</a>，项目中可以直接使用。</p><p>然后运行项目，打开systrace：</p><pre><code>python $ANDROID_HOME/platform-tools/systrace/systrace.py gfx view wm am pm ss dalvik app sched -b 90960 -a com.sample.systrace  -o test.log.html
</code></pre><p><img src="https://static001.geekbang.org/resource/image/d1/0e/d17230ca7e70b399101b1ce66dd35e0e.jpeg" alt=""></p><p>最后打开生成的test.log.html文件就可以查看systrace记录：</p><p><img src="https://static001.geekbang.org/resource/image/e0/4b/e093fc650bfeafd053eb845a1b1d9c4b.jpeg" alt=""></p><p>当然，这一步我们也可以使用SDK中的Monitor，效果是一样的。</p><p>使用systrace + 函数插桩的方式，我们就可以很方便地观察每个方法的耗时，从而针对耗时的方法进行优化，尤其是Application的启动优化。</p><p><a href="https://github.com/AndroidAdvanceWithGeektime/Chapter08"><strong>Chapter08</strong></a></p><blockquote>
<p>该项目展示了关闭掉虚拟机的class verify后对性能的影响。</p>
</blockquote><p>在加载类的过程有一个verify class的步骤，它需要校验方法的每一个指令，是一个比较耗时的操作。这个例子就是通过Hook去掉verify这个步骤。该例子尽量在Dalvik下执行，在ART下的效果并不明显。</p><p>去除校验代码（可以参看阿里的<a href="https://github.com/alibaba/atlas">Atlas</a>）：</p><pre><code>    AndroidRuntime runtime = AndroidRuntime.getInstance();
    runtime.init(this.getApplicationContext(), true);
    runtime.setVerificationEnabled(false);
</code></pre><p>具体运行效果这里我就不展示了，直接运行体验就可以了。</p><p><a href="https://github.com/AndroidAdvanceWithGeektime/Chapter12"><strong>Chapter12</strong></a></p><blockquote>
<p>通过复写Application的<code>getSharedPreferences</code>替换系统<code>SharedPreferences</code>的实现，核心的优化在于修改了Apply的实现，将多个Apply方法在内存中合并，而不是多次提交。</p>
</blockquote><p>修改<code>SharedPreferencesImpl</code>的Apply部分如下：</p><pre><code>       public void apply() {
			// 先调用commitToMemory()
            final MemoryCommitResult mcr = commitToMemory();

            boolean hasDiskWritesInFlight = false;
            synchronized (SharedPreferencesImpl.this) {
            	// mDiskWritesInFlight大于0说明之前已经有调用过commitToMemory()了
                hasDiskWritesInFlight = mDiskWritesInFlight &gt; 0;
            }
            // 源码没有这层判断，直接提交。
            if (!hasDiskWritesInFlight) {
                final Runnable awaitCommit = new Runnable() {
                    public void run() {
                        try {
                            mcr.writtenToDiskLatch.await();
                        } catch (InterruptedException ignored) {
                        }
                    }
                };

                QueuedWork.add(awaitCommit);


                Runnable postWriteRunnable = new Runnable() {
                    public void run() {
                        awaitCommit.run();

                        QueuedWork.remove(awaitCommit);
                    }
                };

                SharedPreferencesImpl.this.enqueueDiskWrite(mcr, postWriteRunnable);
            }

            // Okay to notify the listeners before it's hit disk
            // because the listeners should always get the same
            // SharedPreferences instance back, which has the
            // changes reflected in memory.
            notifyListeners(mcr);
</code></pre><p><a href="https://github.com/AndroidAdvanceWithGeektime/Chapter14"><strong>Chapter14</strong></a></p><p>这个是全面解析SQLite的资料，有兴趣的可以下载看看。</p><p><a href="https://github.com/AndroidAdvanceWithGeektime/Chapter17"><strong>Chapter17</strong></a></p><blockquote>
<p>该项目展示了如何使用PLT Hook技术来获取网络请求相关信息。</p>
</blockquote><p>通过PLT Hook，代理Socket相关的几个重要函数：</p><pre><code>/**
* 直接 hook 内存中的所有so，但是需要排除掉socket相关方法本身定义的libc(不然会出现循坏)
* plt hook
*/
void hookLoadedLibs() {
    ALOG(&quot;hook_plt_method&quot;);
    hook_plt_method_all_lib(&quot;libc.so&quot;, &quot;send&quot;, (hook_func) &amp;socket_send_hook);
    hook_plt_method_all_lib(&quot;libc.so&quot;, &quot;recv&quot;, (hook_func) &amp;socket_recv_hook);
    hook_plt_method_all_lib(&quot;libc.so&quot;, &quot;sendto&quot;, (hook_func) &amp;socket_sendto_hook);
    hook_plt_method_all_lib(&quot;libc.so&quot;, &quot;recvfrom&quot;, (hook_func) &amp;socket_recvfrom_hook);
    hook_plt_method_all_lib(&quot;libc.so&quot;, &quot;connect&quot;, (hook_func) &amp;socket_connect_hook);
}
</code></pre><pre><code>int hook_plt_method_all_lib(const char* exclueLibname, const char* name, hook_func hook) {
  if (refresh_shared_libs()) {
    // Could not properly refresh the cache of shared library data
    return -1;
  }

  int failures = 0;

  for (auto const&amp; lib : allSharedLibs()) {
      if (strcmp(lib.first.c_str(), exclueLibname) != 0) {
        failures += hook_plt_method(lib.first.c_str(), name, hook);
      }
  }

  return failures;
}
</code></pre><p>运行项目，访问百度的域名<a href="https://www.baidu.com">https://www.baidu.com</a>，输出如下：</p><pre><code>17:08:28.347 12145-12163/com.dodola.socket E/HOOOOOOOOK: socket_connect_hook sa_family: 10
17:08:28.349 12145-12163/com.dodola.socket E/HOOOOOOOOK: stack:com.dodola.socket.SocketHook.getStack(SocketHook.java:13)
    java.net.PlainSocketImpl.socketConnect(Native Method)
    java.net.AbstractPlainSocketImpl.doConnect(AbstractPlainSocketImpl.java:334)
    java.net.AbstractPlainSocketImpl.connectToAddress(AbstractPlainSocketImpl.java:196)
    java.net.AbstractPlainSocketImpl.connect(AbstractPlainSocketImpl.java:178)
    java.net.SocksSocketImpl.connect(SocksSocketImpl.java:356)
    java.net.Socket.connect(Socket.java:586)
    com.android.okhttp.internal.Platform.connectSocket(Platform.java:113)
    com.android.okhttp.Connection.connectSocket(Connection.java:196)
    com.android.okhttp.Connection.connect(Connection.java:172)
    com.android.okhttp.Connection.connectAndSetOwner(Connection.java:367)
    com.android.okhttp.OkHttpClient$1.connectAndSetOwner(OkHttpClient.java:130)
    com.android.okhttp.internal.http.HttpEngine.connect(HttpEngine.java:329)
    com.android.okhttp.internal.http.HttpEngine.sendRequest(HttpEngine.java:246)
    com.android.okhttp.internal.huc.HttpURLConnectionImpl.execute(HttpURLConnection
    AF_INET6 ipv6 IP===&gt;183.232.231.173:443
    socket_connect_hook sa_family: 1
    Ignore local socket connect
02-07 17:08:28.637 12145-12163/com.dodola.socket E/HOOOOOOOOK: respond:﻿&lt;!DOCTYPE html&gt;
    &lt;html&gt;&lt;!--STATUS OK--&gt;&lt;head&gt;&lt;meta charset=&quot;utf-8&quot;&gt;&lt;title&gt;百度一下,你就知道&lt;/title&gt;
</code></pre><p>可以看到我们获取到了网络请求的相关信息。</p><p>最后，我们可以通过Connect函数的hook，实现很多需求，例如：</p><ul>
<li>禁用应用网络访问</li>
<li>过滤广告IP</li>
<li>禁用定位功能</li>
</ul><p><a href="https://github.com/AndroidAdvanceWithGeektime/Chapter19"><strong>Chapter19</strong></a></p><blockquote>
<p>使用Java Hook实现Alarm、WakeLock与GPS的耗电监控。</p>
</blockquote><p>实现原理</p><p>根据老师提供的提示信息，动态代理对应的<a href="http://androidxref.com/7.0.0_r1/xref/frameworks/base/core/java/android/os/PowerManager.java">PowerManager</a>、<a href="http://androidxref.com/7.0.0_r1/xref/frameworks/base/core/java/android/app/AlarmManager.java">AlarmManager</a>、<a href="http://androidxref.com/7.0.0_r1/xref/frameworks/base/location/java/android/location/LocationManager.java">LocationManager</a>的<code>mService</code>实现，要拦截的方法在<a href="http://androidxref.com/7.0.0_r1/xref/frameworks/base/services/core/java/com/android/server/power/PowerManagerService.java">PowerManagerService</a>、<a href="http://androidxref.com/7.0.0_r1/xref/frameworks/base/services/core/java/com/android/server/AlarmManagerService.java">AlarmManagerService</a>、<a href="http://androidxref.com/7.0.0_r1/xref/frameworks/base/services/core/java/com/android/server/LocationManagerService.java">LocationManagerService</a>中。</p><p>实现核心代码：</p><pre><code>        Object oldObj = mHostContext.getSystemService(Context.XXX_SERVICE);
	Class&lt;?&gt; clazz = oldObj.getClass();
	Field field = clazz.getDeclaredField(&quot;mService&quot;);
	field.setAccessible(true);

	final Object mService = field.get(oldObj);
	setProxyObj(mService);

	Object newObj = Proxy.newProxyInstance(this.getClass().getClassLoader(), mService.getClass().getInterfaces(), this);
	field.set(oldObj, newObj)
</code></pre><p>写了几个调用方法去触发，通过判断对应的方法名来做堆栈信息的输出。</p><p>输出的堆栈信息如下：</p><p><img src="https://static001.geekbang.org/resource/image/43/b7/43e081eacdef050b78b71043c87acdb7.png" alt=""></p><p>当然，强大的Studio在3.2后也有了强大的耗电量分析器，同样可以监测到这些信息，如下图所示（我使用的Studio版本为3.3）。</p><p><img src="https://static001.geekbang.org/resource/image/82/3d/82b2939991e4c9c729017255fb1cb73d.png" alt=""></p><p>实现不足之处：</p><ul>
<li>可能兼容性上不是特别完善（期待老师的标准答案）。</li>
<li>没有按照耗电监控的规则去做一些业务处理。</li>
</ul><p>心得体会：</p><ul>
<li>本身并不复杂，只是为了找到Hook点，看了对应的Service源码耗费了一些时间，对于它们的工作流程有了更深的认识。</li>
<li>平时也很少使用动态代理，这回查漏补缺，一次用了个爽。</li>
</ul><p>这个作业前前后后用了一天时间，之前作业还有一些同学提供PR，所以相对轻松些，但这次没有参考，走了点弯路，不过收获也是巨大的。我就不细说了，感兴趣的话可以参考我的实现。完整代码参见<a href="https://github.com/simplezhli/Chapter19">GitHub</a>，仅供参考。</p><p><strong>参考</strong></p><ul>
<li><a href="https://time.geekbang.org/column/article/76413">练习Sample跑起来 | 热点问题答疑第3期</a></li>
<li><a href="https://time.geekbang.org/column/article/79331">练习Sample跑起来 | 热点问题答疑第4期</a></li>
</ul><p></p>