(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{376:function(s,t,a){"use strict";a.r(t);var n=a(3),e=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("p",[t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/chst365/bolgImgs/imgs/topImgs/76.jpg",alt:""}})]),s._v(" "),t("h2",{attrs:{id:"守护进程的启动方式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#守护进程的启动方式"}},[s._v("#")]),s._v(" 守护进程的启动方式")]),s._v(" "),t("p",[s._v("如果不在nodejs环境中，我们如何创建守护进程？过程如下：")]),s._v(" "),t("ol",[t("li",[s._v("创建一个进程A")]),s._v(" "),t("li",[s._v("在进程A中创建进程B，可使用fork方式或其他方法")]),s._v(" "),t("li",[s._v("对进程B执行"),t("code",[s._v("setsid")]),s._v("方法")]),s._v(" "),t("li",[s._v("进程A退出，进程B由init进程接管。此时进程B为守护进程")])]),s._v(" "),t("h3",{attrs:{id:"setsid"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#setsid"}},[s._v("#")]),s._v(" setsid")]),s._v(" "),t("p",[s._v("setsid主要完成三件事：")]),s._v(" "),t("ol",[t("li",[s._v("该进程变成一个新会话的会话领导")]),s._v(" "),t("li",[s._v("该进程变成一个新进程组的组长")]),s._v(" "),t("li",[s._v("该进程没有控制终端\n然而，nodejs中并没有对"),t("code",[s._v("setsid")]),s._v("方法的直接封装")])]),s._v(" "),t("h2",{attrs:{id:"nodejs-中启动子进程方法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#nodejs-中启动子进程方法"}},[s._v("#")]),s._v(" Nodejs 中启动子进程方法")]),s._v(" "),t("p",[s._v("借助"),t("code",[s._v("child_process")]),s._v("中的"),t("code",[s._v("spawn")]),s._v("即可创建子进程，方法如下：")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" spawn "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("require")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'child_process'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("spawn"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" process "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("require")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'process'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" p "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("spawn")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'node'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'b.js'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nconsole"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("process"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("pid"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" p"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("pid"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("p",[s._v("注意，这里只打印当前进程的PID和子进程的PID，同时为了观察效果，我并没有将父进程退出。")]),s._v(" "),t("p",[s._v("b.js 中代码很简单，打开一个资源，并不停的写入数据。")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" fs "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("require")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'fs'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" process "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("require")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'process'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\nfs"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("open")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/Users/mebius/Desktop/log.txt"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'w'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("err"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" fd")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\tconsole"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("fd"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\t"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("while")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\t"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t\tfs"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("write")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("fd"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("process"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("pid"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"\\n"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\t"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br")])]),t("p",[s._v("运行后的效果如图：\n"),t("img",{attrs:{src:"https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2016/11/29/7a21cc1b1975ad2128ed094f5e8effc6.png~tplv-t2oaga2asx-zoom-in-crop-mark:3024:0:0:0.awebp",alt:""}}),s._v("\n我们来看以下 top 命令下的进程情况:\n"),t("img",{attrs:{src:"https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2016/11/29/52bf06943ce2b7f2acfc9095bb202ece.png~tplv-t2oaga2asx-zoom-in-crop-mark:3024:0:0:0.awebp",alt:""}}),s._v("\n看到，此时父进程PID为17055，子进程的PPID为17055，PID为17056.")]),s._v(" "),t("h2",{attrs:{id:"nodejs中setsid的调用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#nodejs中setsid的调用"}},[s._v("#")]),s._v(" Nodejs中setsid的调用")]),s._v(" "),t("p",[s._v("到此为止，守护进程已经完成一半，下面要调用setsid方法，并且退出父进程。")]),s._v(" "),t("p",[s._v("代码修改如下：")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" spawn "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("require")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'child_process'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("spawn"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" process "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("require")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'process'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" p "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("spawn")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'node'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'b.js'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("detached")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nconsole"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("process"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("pid"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" p"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("pid"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nprocess"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("exit")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br")])]),t("p",[s._v("在 spawn 的第三个参数中，可以设置 detached 属性，如果该属性为true，则会调用 setsid 方法。这样就满足我们对守护进程的要求。")]),s._v(" "),t("p",[s._v("在此运行命令。\n"),t("img",{attrs:{src:"https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2016/11/29/04ffe72d6460092a8b5796f6f6099734.png~tplv-t2oaga2asx-zoom-in-crop-mark:3024:0:0:0.awebp",alt:""}})]),s._v(" "),t("p",[s._v("查看 top 命令\n"),t("img",{attrs:{src:"https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2016/11/29/c05d3cae380bb9f107f09793c8c67923.png~tplv-t2oaga2asx-zoom-in-crop-mark:3024:0:0:0.awebp",alt:""}})]),s._v(" "),t("p",[s._v("可以看到，当前仅存在一个PID为17062的进程，这个进程就是我们要的守护进程。")]),s._v(" "),t("h2",{attrs:{id:"总结"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[s._v("#")]),s._v(" 总结")]),s._v(" "),t("p",[s._v("守护进程最重要的是稳定，如果守护进程挂掉，那么其管理的子进程都将变为孤儿进程，同时被init进程接管，这是我们不愿意看到的。于此同时，守护进程对于子进程的管理也是有非常多的发挥余地的，例如PM2中，将一个进程同时启动4次，达到CPU多核使用的目的（很有可能你的进程在同一核中运行），进程挂掉后自动重启等等，这些事情等着我们去造轮子。\n总体来说，Nodejs启动守护进程方式比较简单，默认所暴露的API也屏蔽了很多系统级别API，使得大家使用上更加方便，但没有接触过Linux的人在理解上有一些复杂。")])])}),[],!1,null,null,null);t.default=e.exports}}]);