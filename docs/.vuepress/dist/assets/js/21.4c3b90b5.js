(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{337:function(s,n,a){"use strict";a.r(n);var e=a(3),t=Object(e.a)({},(function(){var s=this,n=s._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("p",[n("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/chst365/bolgImgs/imgs/topImgs/452.jpg",alt:""}})]),s._v(" "),n("h1",{attrs:{id:"六、泛型"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#六、泛型"}},[s._v("#")]),s._v(" 六、泛型")]),s._v(" "),n("p",[s._v("泛型：不预先确定的数据类型，具体的类型在使用的时候才能确定。")]),s._v(" "),n("h2",{attrs:{id:"泛型函数与泛型接口"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#泛型函数与泛型接口"}},[s._v("#")]),s._v(" 泛型函数与泛型接口")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("function log<T>(value: T): T {\n    console.log(value);\n    return value;\n}\nlog<string[]>(['a', 'b'])\nlog(['a', 'b'])\n// 泛型函数的实现\ntype Log = <T>(value: T) =>  T\nlet myLog: Log = log\n// 泛型接口\ninterface LogInterface<T = string> {\n    <T>(value: T): T\n}\nlet MyLog: LogInterface  = log \nMyLog('i')\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br")])]),n("h2",{attrs:{id:"泛型类与泛型约束"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#泛型类与泛型约束"}},[s._v("#")]),s._v(" 泛型类与泛型约束")]),s._v(" "),n("p",[s._v("泛型的好处：")]),s._v(" "),n("ul",[n("li",[s._v("函数和类可以轻松的支持多种类型，增强程序的扩展性")]),s._v(" "),n("li",[s._v("不必谢多条函数重载，冗长的联合类型声明，增强代码的可读性")]),s._v(" "),n("li",[s._v("灵活控制类型之间的约束")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("class Logg<T> {\n    run(value: T) {\n        console.log(value)\n        return value\n    }\n}\nlet logg1 = new Logg<number>()\nlogg1.run(1)\nlet logg2 = new Logg()\nlogg2.run('1')\n\ninterface Length {\n    length: number\n}\nfunction logg<T extends Length>(value: T): T {\n    console.log(value, value.length)\n    return value\n}\nlogg([1])\nlogg('123')\nlogg({length: 1})\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br")])])])}),[],!1,null,null,null);n.default=t.exports}}]);