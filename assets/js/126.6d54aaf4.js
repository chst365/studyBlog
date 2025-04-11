(window.webpackJsonp=window.webpackJsonp||[]).push([[126],{486:function(s,a,t){"use strict";t.r(a);var e=t(9),n=Object(e.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/chst365/bolgImgs/imgs/topImgs/33.jpg",alt:""}})]),s._v(" "),a("h1",{attrs:{id:"面试官-说说你对-shell-的理解-常见的命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#面试官-说说你对-shell-的理解-常见的命令"}},[s._v("#")]),s._v(" 面试官：说说你对 shell 的理解？常见的命令？")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://static.vue-js.com/71003620-0883-11ec-a752-75723a64e8f5.png",alt:""}})]),s._v(" "),a("h2",{attrs:{id:"一、是什么"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一、是什么"}},[s._v("#")]),s._v(" 一、是什么")]),s._v(" "),a("p",[a("code",[s._v("Shell")]),s._v("是一个由"),a("code",[s._v("c")]),s._v("语言编写的应用程序，它是用户使用 Linux 的桥梁。Shell 既是一种命令语言，又是一种程序设计语言")]),s._v(" "),a("p",[s._v("它连接了用户和"),a("code",[s._v("Linux")]),s._v("内核，让用户能够更加高效、安全、低成本地使用 "),a("code",[s._v("Linux")]),s._v(" 内核")]),s._v(" "),a("p",[s._v("其本身并不是内核的一部分，它只是站在内核的基础上编写的一个应用程序，它和 QQ、微信等其它软件没有什么区别，特殊的地方就是开机立马启动，并呈现在用户面前")]),s._v(" "),a("p",[s._v("主要作用是接收用户输入的命令，并对命令进行处理，处理完毕后再将结果反馈给用户，比如输出到显示器、写入到文件等，同样能够调用和组织其他的应用程序，相当于一个领导者的身份，如下图：")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://static.vue-js.com/80db0ca0-0883-11ec-8e64-91fdec0f05a1.png",alt:""}})]),s._v(" "),a("p",[s._v("那么"),a("code",[s._v("shell")]),s._v("脚本就是多个 "),a("code",[s._v("Shell")]),s._v(" 命令的组合并通过 "),a("code",[s._v("if")]),s._v(" 条件分支控制或循环来组合运算，实现一些复杂功能，文件后缀名为"),a("code",[s._v(".sh")])]),s._v(" "),a("p",[s._v("常用的 "),a("code",[s._v("ls")]),s._v(" 命令，它本身也是一个 "),a("code",[s._v("Shell")]),s._v(" 脚本，通过执行这个 "),a("code",[s._v("Shell")]),s._v(" 脚本可以列举当前目录下的文件列表，如下创建一个"),a("code",[s._v("hello.sh")]),s._v("脚本")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token shebang important"}},[s._v("#!/bin/bash")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 执行的命令主体")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"hello world"')]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("ul",[a("li",[a("p",[s._v("#!/bin/bash ：指定脚本要使用的 Shell  类型为 Bash")])]),s._v(" "),a("li",[a("p",[s._v("ls、echo： 脚本文件的内容，表明我们执行  hello.sh  脚本时会列举出当前目录的文件列表并且会向控制台打印 `hello world")])])]),s._v(" "),a("p",[s._v("执行方式为"),a("code",[s._v(".hello.zsh")])]),s._v(" "),a("h2",{attrs:{id:"二、种类"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二、种类"}},[s._v("#")]),s._v(" 二、种类")]),s._v(" "),a("p",[a("code",[s._v("Linux")]),s._v(" 的 "),a("code",[s._v("Shell")]),s._v(" 种类众多，只要能给用户提供命令行环境的程序，常见的有：")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("Bourne Shell（sh），是目前所有 Shell 的祖先，被安装在几乎所有发源于 Unix 的操作系统上")])]),s._v(" "),a("li",[a("p",[s._v("Bourne Again shell（bash） ，是 sh 的一个进阶版本，比 sh 更优秀， bash 是目前大多数 Linux 发行版以及 macOS 操作系统的默认 Shell")])]),s._v(" "),a("li",[a("p",[s._v("C Shell（csh） ，它的语法类似 C 语言")])]),s._v(" "),a("li",[a("p",[s._v("TENEX C Shell（tcsh） ，它是 csh 的优化版本")])]),s._v(" "),a("li",[a("p",[s._v("Korn shell（ksh） ，一般在收费的 Unix 版本上比较多见")])]),s._v(" "),a("li",[a("p",[s._v("Z Shell（zsh） ，它是一种比较新近的 Shell ，集 bash 、 ksh 和 tcsh 各家之大成")])])]),s._v(" "),a("p",[a("img",{attrs:{src:"https://static.vue-js.com/8e739440-0883-11ec-a752-75723a64e8f5.png",alt:""}})]),s._v(" "),a("p",[s._v("关于 "),a("code",[s._v("Shell")]),s._v(" 的几个常见命令：")]),s._v(" "),a("ul",[a("li",[s._v("ls：查看文件")]),s._v(" "),a("li",[s._v("cd：切换工作目录")]),s._v(" "),a("li",[s._v("pwd：显示用户当前目录")]),s._v(" "),a("li",[s._v("mkdir：创建目录")]),s._v(" "),a("li",[s._v("cp：拷贝")]),s._v(" "),a("li",[s._v("rm：删除")]),s._v(" "),a("li",[s._v("mv：移动")]),s._v(" "),a("li",[s._v("du：显示目录所占用的磁盘空间")])]),s._v(" "),a("h2",{attrs:{id:"三、命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#三、命令"}},[s._v("#")]),s._v(" 三、命令")]),s._v(" "),a("p",[a("code",[s._v("Shell")]),s._v(" 并不是简单的堆砌命令，我们还可以在 "),a("code",[s._v("Shell")]),s._v(" 中编程，这和使用 "),a("code",[s._v("C++")]),s._v("、"),a("code",[s._v("C#")]),s._v("、"),a("code",[s._v("Java")]),s._v("、"),a("code",[s._v("Python")]),s._v(" 等常见的编程语言并没有什么两样。")]),s._v(" "),a("p",[s._v("Shell 虽然没有 C++、Java、Python 等强大，但也支持了基本的编程元素，例如：")]),s._v(" "),a("ul",[a("li",[s._v("if...else 选择结构，case...in 开关语句，for、while、until 循环；")]),s._v(" "),a("li",[s._v("变量、数组、字符串、注释、加减乘除、逻辑运算等概念；")]),s._v(" "),a("li",[s._v("函数，包括用户自定义的函数和内置函数（例如 printf、export、eval 等）")])]),s._v(" "),a("p",[s._v("下面以"),a("code",[s._v("bash")]),s._v("为例简单了解一下"),a("code",[s._v("shell")]),s._v("的基本使用")]),s._v(" "),a("h3",{attrs:{id:"变量"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#变量"}},[s._v("#")]),s._v(" 变量")]),s._v(" "),a("p",[a("code",[s._v("Bash")]),s._v(" 没有数据类型的概念，所有的变量值都是字符串，可以保存一个数字、一个字符、一个字符串等等")]),s._v(" "),a("p",[s._v("同时无需提前声明变量，给变量赋值会直接创建变量")]),s._v(" "),a("p",[s._v("访问变量的语法形式为："),a("code",[s._v("${var}")]),s._v(" 和 "),a("code",[s._v("$var")]),s._v(" 。")]),s._v(" "),a("p",[s._v("变量名外面的花括号是可选的，加不加都行，加花括号是为了帮助解释器识别变量的边界，所以推荐加花括号。")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("word")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"hello"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${word}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Output: hello")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("h3",{attrs:{id:"条件控制"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#条件控制"}},[s._v("#")]),s._v(" 条件控制")]),s._v(" "),a("p",[s._v("跟其它程序设计语言一样，Bash 中的条件语句让我们可以决定一个操作是否被执行。结果取决于一个包在"),a("code",[s._v("[[ ]]")]),s._v("里的表达式")]),s._v(" "),a("p",[s._v("跟其他语言一样，使用"),a("code",[s._v("if...else")]),s._v("进行表达，如果中括号里的表达式为真，那么"),a("code",[s._v("then")]),s._v("和"),a("code",[s._v("fi")]),s._v("之间的代码会被执行，如果则"),a("code",[s._v("else")]),s._v("和"),a("code",[s._v("fi")]),s._v("之间的代码会被执行")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-ne")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("then")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"true"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("else")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"false"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("fi")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Output: true")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("p",[a("code",[s._v("fi")]),s._v("标志着条件代码块的结束")]),s._v(" "),a("h3",{attrs:{id:"函数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#函数"}},[s._v("#")]),s._v(" 函数")]),s._v(" "),a("p",[s._v("bash 函数定义语法如下：")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" funname "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    action"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("return int"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("ul",[a("li",[s._v("函数定义时，function 关键字可有可无")]),s._v(" "),a("li",[s._v("函数返回值 - return 返回函数返回值，返回值类型只能为整数（0-255）。如果不加 return 语句，shell 默认将以最后一条命令的运行结果，作为函数返回值")]),s._v(" "),a("li",[s._v("函数返回值在调用该函数后通过 $?  来获得")]),s._v(" "),a("li",[s._v("所有函数在使用前必须定义。这意味着必须将函数放在脚本开始部分，直至 shell 解释器首次发现它时，才可以使用。调用函数仅使用其函数名即可")])]),s._v(" "),a("h2",{attrs:{id:"参考文献"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考文献"}},[s._v("#")]),s._v(" 参考文献")]),s._v(" "),a("ul",[a("li",[s._v("http://c.biancheng.net/view/706.html")]),s._v(" "),a("li",[s._v("https://juejin.cn/post/6930013333454061575")])])])}),[],!1,null,null,null);a.default=n.exports}}]);