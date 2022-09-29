(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{347:function(s,n,a){"use strict";a.r(n);var e=a(4),t=Object(e.a)({},(function(){var s=this,n=s._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("p",[n("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/chst365/bolgImgs/imgs/topImgs/93.jpg",alt:""}})]),s._v(" "),n("h1",{attrs:{id:"九、es6与commonjs的模块系统"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#九、es6与commonjs的模块系统"}},[s._v("#")]),s._v(" 九、ES6与CommonJS的模块系统")]),s._v(" "),n("h2",{attrs:{id:"es6的模块"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#es6的模块"}},[s._v("#")]),s._v(" ES6的模块")]),s._v(" "),n("h3",{attrs:{id:"导出"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#导出"}},[s._v("#")]),s._v(" 导出")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("// 单独导出\nexport let a = 1\n\n// 批量导出\nlet b = 2\nlet c = 3\nexport { b, c }\n\n// 导出接口\nexport interface P {\n    x: number;\n    y: number;\n}\n\n// 导出函数\nexport function f() {}\n\n// 导出时起别名\nfunction g() {}\nexport { g as G }\n\n// 默认导出，无需函数名\nexport default function () {\n    console.log(\"I'm default\")\n}\n\n// 导出常量\nexport const str = 'Hello'\n\n// 引入外部模块，重新导出\nexport { str as hello } from './b'\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br")])]),n("h3",{attrs:{id:"导入"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#导入"}},[s._v("#")]),s._v(" 导入")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("import { a, b, c } from './a'   // 批量导入\nimport { P } from './a'         // 导入接口\nimport { f as F } from './a'    // 导入时起别名\nimport * as All from './a'      // 导入模块中所有成员，绑定在 All 上\nimport myFunction from './a'    // 不加{},导入默认\n\nconsole.log(a,b,c)\n\nlet p: P = {\n    x: 1, \n    y: 1\n}\nconsole.log(All)\nmyFunction()\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br")])]),n("h2",{attrs:{id:"commonjs-node-模块"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#commonjs-node-模块"}},[s._v("#")]),s._v(" CommonJS(Node)模块")]),s._v(" "),n("h3",{attrs:{id:"导出-2"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#导出-2"}},[s._v("#")]),s._v(" 导出")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("let a = {\n    x: 1,\n    y: 2\n}\n\n// 整体导出\nmodule.exports = a\n\n// exports === module.exports\n// 导出多个变量\nexports.c = 3\nexports.d = 4\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br")])]),n("h3",{attrs:{id:"导入-2"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#导入-2"}},[s._v("#")]),s._v(" 导入")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("let c1 = require('./a.node')\nlet c2 = require('./b.node')\n\nconsole.log(c1, c2)\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br")])]),n("h2",{attrs:{id:"两个配置项"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#两个配置项"}},[s._v("#")]),s._v(" 两个配置项")]),s._v(" "),n("p",[s._v("在ts中可以用ts-node插件直接运行ts文件\n在生产环境中，两个系统模块会编译成什么？\n在"),n("code",[s._v("tsconfig.json")]),s._v("中，"),n("code",[s._v("target")]),s._v("配置项表示的是要编译的目标语言是什么版本，ts中生成的"),n("code",[s._v("target")]),s._v("默认值是"),n("code",[s._v("es5")]),s._v(" "),n("code",[s._v("module")]),s._v("配置项是把我们的代码编译成什么模块系统，ts中"),n("code",[s._v("module")]),s._v("默认值是"),n("code",[s._v("commonjs")]),s._v("\n在命令行中"),n("code",[s._v("tsc")]),s._v("的默认值是"),n("code",[s._v("es3")]),s._v("，在使用tsc时，默认忽略tsconfig配置文件")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("tsc ./src/es6/a.ts -t es3\ntsc ./src/es6/a.ts -t es5\ntsc ./src/es6/a.ts -t es6\n// -t: -target \ntsc ./src/es6/a.ts -m amd\ntsc ./src/es6/a.ts -m umd\n// -m: -module\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br")])]),n("p",[s._v("这里，会有两个模块的系统兼容问题，在编译的时候，默认会把所有模块编译成commonjs，这时就会对导入导出做一些特殊的处理\n处理es6中的默认导出，不再试顶级属性，在导入的时候同样\n在es6中，允许有次级的导出，在commonjs中，只允许模块有一个顶级导出（module.exports）,如果一个模块有多个次级导出，再出现一个顶级导出，则会覆盖前面的次级导出,在es6中则不会出现这种问题\n但是一个模块用es6的方式做了默认导出，另一个模块用非es6的方式做了导入，就会产生问题\n"),n("code",[s._v("esModuleInterop")]),s._v(" 配置项如果开启的话，就允许"),n("code",[s._v("export =")]),s._v("的方式导入，也可以"),n("code",[s._v("export from")]),s._v("的方式导入")])])}),[],!1,null,null,null);n.default=t.exports}}]);