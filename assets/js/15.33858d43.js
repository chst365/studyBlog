(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{375:function(t,s,a){"use strict";a.r(s);var e=a(9),n=Object(e.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p",[s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/chst365/bolgImgs/imgs/topImgs/323.jpg",alt:""}})]),t._v(" "),s("h2",{attrs:{id:"dom-是什么"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#dom-是什么"}},[t._v("#")]),t._v(" DOM 是什么？")]),t._v(" "),s("ul",[s("li",[t._v("从页面的角度看，DOM 是生成页面的基础数据结构")]),t._v(" "),s("li",[t._v("从 js 脚本视角看，DOM 提供给 js 脚本操作的接口，通过接口，js 可以对 DOM 结构进行访问，从而改变文档的结构、样式和内容")]),t._v(" "),s("li",[t._v("从安全视角看，DOM 是一道安全防护线，一些不安全的内容在 DOM 解析阶段就被拒之门外")])]),t._v(" "),s("h2",{attrs:{id:"dom-树如何生成"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#dom-树如何生成"}},[t._v("#")]),t._v(" DOM 树如何生成")]),t._v(" "),s("ul",[s("li",[t._v("HTML 解析器（HTMLParser）：将 HTML 字节流转换为 DOM 结构")]),t._v(" "),s("li",[t._v("过程：\n"),s("ul",[s("li",[t._v('准备阶段（识别文件，创建渲染进程）：网络进程接收到响应头后，会根据响应头的 content-type 来判断文件类型，如 "text/html",然后为该请求选择或创建一个渲染进程，网络进程和渲染进程间会建立一个共享数据的通道，网络进程将接收到的数据通过通道传给渲染进程，渲染进程会动态接收字节流，并将其解析为 DOM')]),t._v(" "),s("li",[t._v("通过分词器将字节流转为 Token\n"),s("ul",[s("li",[t._v("Token 分为： Tag Token（StartTag、EndTag） 和 文本 Token")])])]),t._v(" "),s("li",[t._v("将 Token 解析为 DOM 节点，并将 DOM 节点添加到 DOM 树中\n"),s("ul",[s("li",[t._v("Token 栈结构: 将 StartTag Token 入栈，并为此 Token 创建 DOM 节点，，将此节点加入 DOM 树中，遇文本 Token 不入栈，并为此创建文本节点，将此节点挂在栈顶 Token 对应的节点下，遇 EndTag Token 解析器会判断是否与栈顶 StartTag 对应，若对应，就将 StartTag 从栈顶弹出，表示此元素解析完成）")])])])])])]),t._v(" "),s("h2",{attrs:{id:"js-是如何影响-dom-生成的"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#js-是如何影响-dom-生成的"}},[t._v("#")]),t._v(" JS 是如何影响 DOM 生成的")]),t._v(" "),s("p",[t._v("在解析阶段，遇到 script Start Token 前正常解析，遇到时，渲染引擎判断这是一段脚本，此时，HTML 解析器会暂停 DOM 的解析，因为 js 可能要修改当前已生成的 DOM\n如果引入的 js 文件没有操作 DOM 相关代码，可以将 js 代码设置为异步加载，通过 async 或 defer 来标记代码")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("<script async type=\"text/javascript\" src='foo.js'><\/script>\n// async 标志的文件一旦加载完成，会立即执行\n<script defer type=\"text/javascript\" src='foo.js'><\/script>\n// defer 标志的文件，需在 DOMContentLoaded 事件之前执行\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br")])]),s("p",[t._v("js 引擎在解析 js 前，是不知道 js 是否操纵了 CSSOM，所以渲染引擎在遇到 js 脚本是，不管 js 是否操纵了 CSSOM，都会执行 CSS 文件下载，解析操作，再执行 js 解析")]),t._v(" "),s("p",[t._v("另外，渲染引擎还有一个安全检查模块叫 XSSAuditor,是用来检测词法安全的。在分词器解析处 Token 后，它会检测这些模块是否安全，是否符合 CSP 规范，是否存在跨站点请求等。如果出现不符合规范的内存，它会对该脚本或者下载任务进行拦截")])])}),[],!1,null,null,null);s.default=n.exports}}]);