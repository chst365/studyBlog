(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{393:function(s,n,a){"use strict";a.r(n);var e=a(9),t=Object(e.a)({},(function(){var s=this,n=s._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("p",[n("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/chst365/bolgImgs/imgs/topImgs/331.jpg",alt:""}})]),s._v(" "),n("h1",{attrs:{id:"十四、编译工具-从ts-loader到bable"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#十四、编译工具-从ts-loader到bable"}},[s._v("#")]),s._v(" 十四、编译工具：从ts-loader到Bable")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("const HtmlWebpackPlugin = require('html-webpack-plugin')\nconst ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')\n\nmodule.exports = {\n  entry: './src/index.ts',\n  output: {\n    filename: 'app.js'\n  },\n  resolve: {\n    extensions: ['.js', '.ts', '.tsx'],\n  },\n  module: {\n    rules: [\n      {\n        test: /\\.tsx?$/i,\n        use: [{\n          loader: 'ts-loader',\n          options: {\n            // 配置项开启，编译器只做语言转换，而不做类型检查\n            transpileOnly: true\n          }\n        }],\n        exclude: /node-modules/\n      }\n    ]\n  },\n  plugins: [\n    new HtmlWebpackPlugin({\n      template: './src/tpl/index.html'\n    }),\n    new ForkTsCheckerWebpackPlugin()\n  ]\n}\n\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br")])]),n("p",[s._v("transpileOnly: 关闭，即做语言转换，又做类型检查，影响项目构建速度；开启，只做语言转换，不做类型检查，可以加快项目构建速度，但是即使ide报类型错误，也可以构建项目，当开启时可以搭配插件"),n("code",[s._v("fork-ts-checker-webpack-plugin")]),s._v("来进行构建项目的类型检查")]),s._v(" "),n("h2",{attrs:{id:"awesome-typescript-loader"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#awesome-typescript-loader"}},[s._v("#")]),s._v(" awesome-typescript-loader")]),s._v(" "),n("p",[s._v("与ts-loader的主要区别：")]),s._v(" "),n("ul",[n("li",[s._v("更适合与Babel集成，使用Babel的转义和缓存")]),s._v(" "),n("li",[s._v("不需要安装额外的插件，就可以把类型检查放在独立进程中进行\n编译时间对比（ms）:\n"),n("img",{attrs:{src:"https://upload.smart-lzgz.cn/mweb/2021%2002%2001%2016121846290384%2015861747266372%20.jpg",alt:"-w1382"}})])]),s._v(" "),n("p",[n("img",{attrs:{src:"https://upload.smart-lzgz.cn/mweb/2021%2002%2001%2016121846290401%2015861747652303%20.jpg",alt:"-w1550"}})]),s._v(" "),n("p",[n("img",{attrs:{src:"https://upload.smart-lzgz.cn/mweb/2021%2002%2001%2016121846290414%2015861748686450%20.jpg",alt:"-w1486"}})]),s._v(" "),n("p",[s._v("Babel暂不支持以下四种语法：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("// babel 不能使用下面四种语法\n\x3c!--命名空间--\x3e\n// namespace N {\n//     export const n = 1\n// }\n\x3c!--类型断言--\x3e\n// let s = {} as A\n// s.a = 1\n\x3c!--枚举常量--\x3e\n// const enum E { A }\n\x3c!--导出--\x3e\n// export = s\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br")])]),n("h2",{attrs:{id:"如何选择typescript编译工具"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#如何选择typescript编译工具"}},[s._v("#")]),s._v(" 如何选择TypeScript编译工具")]),s._v(" "),n("p",[n("img",{attrs:{src:"https://upload.smart-lzgz.cn/mweb/2021%2002%2001%2016121846290427%2015861760134865%20.jpg",alt:"-w1457"}})])])}),[],!1,null,null,null);n.default=t.exports}}]);