(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{390:function(s,n,a){"use strict";a.r(n);var e=a(9),t=Object(e.a)({},(function(){var s=this,n=s._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("p",[n("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/chst365/bolgImgs/imgs/topImgs/158.jpg",alt:""}})]),s._v(" "),n("h1",{attrs:{id:"十二、如何编写声明文件"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#十二、如何编写声明文件"}},[s._v("#")]),s._v(" 十二、如何编写声明文件？")]),s._v(" "),n("p",[s._v("类库一般分为三类：全局类库、模块类库、umd类库。\njquery是umd类库，即可以通过全局方式引用，通过webpack的插件实现，也可以通过模块化的方式来引用。")]),s._v(" "),n("h2",{attrs:{id:"全局类库声明文件"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#全局类库声明文件"}},[s._v("#")]),s._v(" 全局类库声明文件")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("declare function globalLib(options: globalLib.Options): void;\n\ndeclare namespace globalLib {\n    const version: string;\n    function doSomething(): void;\n    interface Options {\n        [key: string]: any\n    }\n}\n\n// declare关键字可以为一个外部变量提供类型声明\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br")])]),n("h2",{attrs:{id:"模块类库声明文件"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#模块类库声明文件"}},[s._v("#")]),s._v(" 模块类库声明文件")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("declare function moduleLib(options: Options): void\n\ninterface Options {\n    [key: string]: any\n}\n\ndeclare namespace moduleLib {\n    const version:  string\n    function doSomething(): void\n}\n\nexport = moduleLib\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br")])]),n("h2",{attrs:{id:"umd类库声明文件"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#umd类库声明文件"}},[s._v("#")]),s._v(" umd类库声明文件")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("declare namespace umdLib {\n    const version: string\n    function doSomething():void\n}\n\nexport as namespace umdLib\n\nexport = umdLib\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br")])]),n("p",[s._v("入口文件")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("import $ from 'jquery'\n// 无法找到xxx声明文件，在ts中，使用非ts类库时，必须为这个类库编写一个声明文件，对外暴露它的API，有时，它的声明文件是包含在它的源码中，但有时是单独提供需要额外安装的\n// 安装类声明包：@types/jquery\n$('.app').css('color','red')\n\n/* \n    我们在使用外部类库时，需要查询一下有没有声明文件：http://microsoft.github.io/TypeSearch\n    http://definitelytyped.org/guides //如何贡献声明文件\n*/\nglobalLib({x: 1})\nglobalLib.doSomething()\n\nimport moduleLib from './module-lib'\n\nmoduleLib.doSomething()\n\nimport umdLib from './umd-lib'\n// 如果注释上面，开启allowUmdGlobalAccess配置则解决问题\numdLib.doSomething()\n\n// 给外部模块增加自定义方法\nimport m from 'moment'\ndeclare module 'moment' {\n    export function myFunction(): void\n}\n\nm.myFunction = () => {}\n\ndeclare global {\n    namespace globalLib {\n        function doAnything(): void\n    }\n}\n// 这样会给全局命名空间造成污染，一般不建议这样做\nglobalLib.doSomething = () => {}\n\n// 声明文件之间的依赖\n\n    \n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br"),n("span",{staticClass:"line-number"},[s._v("36")]),n("br"),n("span",{staticClass:"line-number"},[s._v("37")]),n("br"),n("span",{staticClass:"line-number"},[s._v("38")]),n("br"),n("span",{staticClass:"line-number"},[s._v("39")]),n("br")])])])}),[],!1,null,null,null);n.default=t.exports}}]);