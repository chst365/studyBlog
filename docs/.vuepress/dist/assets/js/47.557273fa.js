(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{477:function(e,r,t){"use strict";t.r(r);var o=t(18),i=Object(o.a)({},(function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("p",[t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/chst365/bolgImgs/imgs/topImgs/338.jpg",alt:""}})]),e._v(" "),t("h2",{attrs:{id:"什么是-tree-shaking"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#什么是-tree-shaking"}},[e._v("#")]),e._v(" 什么是 Tree-shaking")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2018/1/4/160bfdcf2a31ce4a?imageslim",alt:""}}),e._v("\n上图形象解释了 Tree-shaking 的本意。在 webpack 项目中，有一个入口文件，相当于一颗树的主干，入口文件有很多依赖的模块，相当于树枝。实际情况中，虽然依赖了某个模块，但其实只使用其中的某些功能。通过 tree-shaking，将没用的模块摇调，这样达到删除无用代码的目的。")]),e._v(" "),t("p",[e._v("现支持 tree shaking 的工具有 "),t("a",{attrs:{href:"https://www.rollupjs.com/",target:"_blank",rel:"noopener noreferrer"}},[t("strong",[e._v("Rollup")]),t("OutboundLink")],1),e._v("、"),t("a",{attrs:{href:"https://webpack.docschina.org/",target:"_blank",rel:"noopener noreferrer"}},[t("strong",[e._v("Webpack")]),t("OutboundLink")],1),e._v("、"),t("a",{attrs:{href:"https://www.npmjs.com/package/google-closure-compiler",target:"_blank",rel:"noopener noreferrer"}},[t("strong",[e._v("closure-compiler")]),t("OutboundLink")],1),e._v(".")]),e._v(" "),t("p",[e._v("DCE(dead code elimination): 编译器可判断出某些代码不影响输出，然后消除这些代码。\nTree-shaking 是 DCE 的一种新的实现，传统的 DCE 消灭不可能执行的代码，而 Tree-shaking 消除没有用到的代码。")]),e._v(" "),t("h2",{attrs:{id:"dce"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#dce"}},[e._v("#")]),e._v(" DCE")]),e._v(" "),t("ul",[t("li",[e._v("代码不会被执行，不可到达")]),e._v(" "),t("li",[e._v("代码执行的结果不会被用到")]),e._v(" "),t("li",[e._v("代码只会影响死变量（只写不读）")])]),e._v(" "),t("p",[e._v("js 的 DCE 由 uglify 完成")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2018/1/4/160bfd6baf24ec38?imageView2/0/w/1280/h/960/format/webp/ignore-error/1",alt:""}}),e._v("\n中间为 rollup 打包的结果，右边是 webpack 打包的结果\nrollup 将无用的代码 foo/unused 函数消除了，但仍保留不会执行到的代码，而 webpack 则完整保留了无用代码和不会执行的代码")]),e._v(" "),t("p",[e._v("分别用 rollup + uglify 和 webpack + uglify 将代码进行打包\n"),t("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2018/1/4/160bfd6bb11fd152?imageView2/0/w/1280/h/960/format/webp/ignore-error/1",alt:""}}),e._v("\n中间为配置文件，右侧是结果，可看出结果中都去除了无法执行的代码")]),e._v(" "),t("h2",{attrs:{id:"tree-shaking-原理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#tree-shaking-原理"}},[e._v("#")]),e._v(" tree-shaking 原理")]),e._v(" "),t("h3",{attrs:{id:"es6-module-特点"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#es6-module-特点"}},[e._v("#")]),e._v(" ES6 module 特点")]),e._v(" "),t("ul",[t("li",[e._v("只能作为模块顶层的语句出现")]),e._v(" "),t("li",[e._v("import 的模块名只能是字符串常量")]),e._v(" "),t("li",[e._v("import binding 是 immutable 的")])]),e._v(" "),t("p",[e._v("ES6 模块依赖关系是确定的，和运行时的状态无关，可以进行可靠的静态分析，这是 tree-shaking 的基础。\n所谓静态分析就是不执行代码，从字面量上对代码进行分析，ES6 之前的模块化，动态 require 一个模块，只有执行后才知道引用什么模块，不能通过静态分析做优化。")]),e._v(" "),t("p",[e._v("面向过程编程和面向对象编程,从这两个方面来实验")]),e._v(" "),t("ul",[t("li",[t("p",[e._v("函数消除实验\n"),t("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2018/1/4/160bfd6bc4a537f6?imageView2/0/w/1280/h/960/format/webp/ignore-error/1",alt:""}}),e._v("\nutils 中 get 方法没有被使用到，我们期望 get 方法最终被消除\n注意：uglify 目前不支持跨文件做 DCE，所以上面这种情况，uglify 是不能优化的")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2018/1/4/160bfd6bd406dd90?imageView2/0/w/1280/h/960/format/webp/ignore-error/1",alt:""}}),e._v("\n上图 rollup 打包结果，符合预期")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2018/1/4/160bfd6bcd7d371a?imageView2/0/w/1280/h/960/format/webp/ignore-error/1",alt:""}}),e._v("\n上图 webpack 打包结果，也符合预期，但是没有 rollup 更优化")])]),e._v(" "),t("li",[t("p",[e._v("类消除实验")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2018/1/4/160bfd6bcd97b34f?imageView2/0/w/1280/h/960/format/webp/ignore-error/1",alt:""}}),e._v("\n![](https://user-gold-cdn.xitu.io/2018/1/4/160bfd6bd77e84e0?imageView2/0/w/1280/h/960/format/webp/ignore-error/1\n由图看出，"),t("code",[e._v("main.js")]),e._v("引用了"),t("code",[e._v("menu.js")]),e._v("，但没有用到 menu 的任何方法和变量，期望最终代码消除"),t("code",[e._v("menu.js")]),e._v("的内容")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2018/1/4/160bfd6bd7406d51?imageView2/0/w/1280/h/960/format/webp/ignore-error/1",alt:""}}),e._v("\nrollup 打包后，还包含了"),t("code",[e._v("menu.js")]),e._v("的全部代码")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2018/1/4/160bfd6bdec358f0?imageView2/0/w/1280/h/960/format/webp/ignore-error/1",alt:""}}),e._v("\nwebpack 打包后，也包含了"),t("code",[e._v("menu.js")]),e._v("的全部代码")]),e._v(" "),t("p",[e._v("看来，webpack 和 rollup 对类消除不太友好，那么 closure-compiler 呢？")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2018/1/4/160bfd6c102e5ed1?imageView2/0/w/1280/h/960/format/webp/ignore-error/1",alt:""}}),e._v("\nclosure compiler， tree-shaking 的结果完美！")]),e._v(" "),t("p",[e._v("但能得到这么完美结果是有条件的，那就是 cc 的侵入式约束规范，需添加如下图代码\n"),t("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2018/1/4/160bfd6bf5516b9d?imageView2/0/w/1280/h/960/format/webp/ignore-error/1",alt:""}})]),e._v(" "),t("p",[e._v("google 定义一整套注解规范 Annotating JavaScript for the Closure Compiler，想更多了解的，可以去看下官网。侵入式这个就让人很不爽，google Closure Compiler 是 java 写的，和我们基于 node 的各种构建库不可能兼容（不过目前好像已经有 nodejs 版 Closure Compiler），Closure Compiler 使用起来也比较麻烦，所以虽然效果很赞，但比较难以应用到项目中，迁移成本较大。")])])]),e._v(" "),t("h3",{attrs:{id:"总结"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[e._v("#")]),e._v(" 总结")]),e._v(" "),t("p",[e._v("三大工具的 tree-shaking 对于无用代码，无用模块的消除，都是有限的，有条件的。closure compiler 是最好的，但与我们日常的基于 node 的开发流很难兼容。\ntree-shaking 对 web 意义重大，是一个极致优化的理想世界，是前端进化的又一个终极理想。")])])}),[],!1,null,null,null);r.default=i.exports}}]);