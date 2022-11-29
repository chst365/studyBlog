(window.webpackJsonp=window.webpackJsonp||[]).push([[100],{531:function(t,a,s){"use strict";s.r(a);var r=s(18),v=Object(r.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p",[s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/chst365/bolgImgs/imgs/topImgs/448.jpg",alt:""}})]),t._v(" "),s("h2",{attrs:{id:"小例子"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#小例子"}},[t._v("#")]),t._v(" 小例子")]),t._v(" "),s("p",[t._v("我们打开一个微信软件，这时就开启了一个进程，当在微信里进行各种操作（查看朋友圈、扫一扫等），这么多的操作就是线程。\n"),s("strong",[t._v("进程包含线程，线程是进程的一个子集")]),t._v("\n进程：在系统中正在运行的一个应用程序；"),s("strong",[t._v("程序一旦运行就是进程")]),t._v("；"),s("strong",[t._v("进程是资源分配的最小单位")]),t._v("。\n线程："),s("strong",[t._v("系统分配处理器时间资源的基本单元")]),t._v("，或进程内独立执行的一个单元执行流。"),s("strong",[t._v("线程是程序执行的最小单位")])]),t._v(" "),s("h2",{attrs:{id:"深入理解"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#深入理解"}},[t._v("#")]),t._v(" 深入理解")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/3/21/1699ecde3bb5683b~tplv-t2oaga2asx-zoom-in-crop-mark:3024:0:0:0.awebp",alt:""}})]),t._v(" "),s("h3",{attrs:{id:"进程-线程-内存-文件-网络句柄"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#进程-线程-内存-文件-网络句柄"}},[t._v("#")]),t._v(" 进程（线程+内存+文件/网络句柄）")]),t._v(" "),s("h4",{attrs:{id:"内存"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#内存"}},[t._v("#")]),t._v(" 内存")]),t._v(" "),s("p",[t._v("我们通常所理解的内存是我们见到的（2G/4G/8G/16G）物理内存。这里的内存是"),s("strong",[t._v("逻辑内存")]),t._v("。是"),s("strong",[t._v("内存的寻址空间")]),t._v("。"),s("strong",[t._v("每个进程的内存是相互独立的")]),t._v("。")]),t._v(" "),s("h4",{attrs:{id:"文件-网络句柄"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#文件-网络句柄"}},[t._v("#")]),t._v(" 文件/网络句柄")]),t._v(" "),s("p",[t._v("是"),s("strong",[t._v("所有的进程所共有的")]),t._v("，如打开同一个文件夹，抢同一个网络的端口等这样的操作是被允许的。")]),t._v(" "),s("h4",{attrs:{id:"线程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#线程"}},[t._v("#")]),t._v(" 线程")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/3/21/1699ecde3ba97f25~tplv-t2oaga2asx-zoom-in-crop-mark:3024:0:0:0.awebp",alt:""}})]),t._v(" "),s("h3",{attrs:{id:"线程-栈-pc-tls"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#线程-栈-pc-tls"}},[t._v("#")]),t._v(" 线程（栈+PC+TLS）")]),t._v(" "),s("h4",{attrs:{id:"栈"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#栈"}},[t._v("#")]),t._v(" 栈")]),t._v(" "),s("p",[t._v("我们通常都说调用堆栈，其实这里堆是无含义的，调用堆栈就是调用栈的意思。那么栈里面有什么呢？从主线程的入口main函数，会不断的进行函数调用，每次函数调用，会把所有的参数和返回地址压入栈中。")]),t._v(" "),s("h4",{attrs:{id:"pc-程序计数器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#pc-程序计数器"}},[t._v("#")]),t._v(" PC（程序计数器）")]),t._v(" "),s("p",[t._v("操作系统真正运行的是一个个线程，而进程只是线程的一个容器。\nPC就是指向当前的指令，指令放在内存中。\n每个线程都有一串自己的指针，指向自己当前所在内存的指针。\n计算机绝大部分是数据和程序存储在同一片内存里，即内存既有数据变量又有程序。\n所以PC指针指向内存。\n"),s("strong",[t._v("缓冲区溢出")]),t._v("\n我们经常听到这个漏洞。如：有个表单要输入用户名，本来是用来存数据的地方。黑客把数据输入的特别长，长度超出给数据存储的内存区，跑到了给程序分配的一部分内存中。黑客可通过这种办法将要运行的代码写入用户名框中，来植入进来。解决办法：限制用户名长度不超过其缓冲区大小。")]),t._v(" "),s("h4",{attrs:{id:"tls-线程本地存储"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#tls-线程本地存储"}},[t._v("#")]),t._v(" TLS（线程本地存储）")]),t._v(" "),s("p",[t._v("线程独立的内存就是TLS。存储线程独有的数据。")]),t._v(" "),s("h2",{attrs:{id:"进程间怎么交互"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#进程间怎么交互"}},[t._v("#")]),t._v(" 进程间怎么交互")]),t._v(" "),s("p",[t._v("通过TCP/IP的端口来实现")]),t._v(" "),s("h2",{attrs:{id:"线程间怎么交互"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#线程间怎么交互"}},[t._v("#")]),t._v(" 线程间怎么交互")]),t._v(" "),s("p",[t._v("有一大块共享的内存，只要大家的指针是同一个就可看到各自的内存。")]),t._v(" "),s("h2",{attrs:{id:"总结"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[t._v("#")]),t._v(" 总结")]),t._v(" "),s("p",[t._v("1.进程要分配一大部分的内存，而线程只需要分配一部分栈就可以了.\n2.一个程序至少有一个进程,一个进程至少有一个线程.\n3.进程是资源分配的最小单位，线程是程序执行的最小单位。\n4.一个线程可以创建和撤销另一个线程，同一个进程中的多个线程之间可以并发执行.")])])}),[],!1,null,null,null);a.default=v.exports}}]);