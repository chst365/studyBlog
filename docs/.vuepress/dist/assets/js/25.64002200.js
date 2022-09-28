(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{449:function(s,n,a){"use strict";a.r(n);var e=a(15),t=Object(e.a)({},(function(){var s=this,n=s.$createElement,a=s._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/chst365/bolgImgs/imgs/topImgs/346.jpg",alt:""}})]),s._v(" "),a("h1",{attrs:{id:"十、使用命名空间"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#十、使用命名空间"}},[s._v("#")]),s._v(" 十、使用命名空间")]),s._v(" "),a("p",[s._v("命名空间和模块最好不要混用，即不要在一个模块中使用命名空间，最好在一个全局的环境使用.\n在早期版本中，命名空间就是内部模块，本质上是闭包，用于隔离作用域。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('namespace Shape {\n    const pi = Math.PI\n    export function cricle(r: number) {\n        return pi * r ** 2\n    } \n}\n\n/// <reference path="a.ts" /> \n// 防止引用a.ts报错\nnamespace Shape {\n    export function square(x: number) {\n        return x * x\n    }\n}\n\nconsole.log(Shape.cricle(1))\nconsole.log(Shape.square(1))\n\n// 命名空间的别名\nimport cricle = Shape.cricle\nconsole.log(cricle(2))\n\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br")])])])}),[],!1,null,null,null);n.default=t.exports}}]);