(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{380:function(t,s,a){"use strict";a.r(s);var n=a(9),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p",[s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/chst365/bolgImgs/imgs/topImgs/177.jpg",alt:""}})]),t._v(" "),s("h1",{attrs:{id:"一、类型基础"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#一、类型基础"}},[t._v("#")]),t._v(" 一、类型基础")]),t._v(" "),s("h2",{attrs:{id:"强类型与弱类型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#强类型与弱类型"}},[t._v("#")]),t._v(" 强类型与弱类型")]),t._v(" "),s("h3",{attrs:{id:"静态类型语言与动态类型语言"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#静态类型语言与动态类型语言"}},[t._v("#")]),t._v(" 静态类型语言与动态类型语言")]),t._v(" "),s("p",[t._v("静态类型语言：在编译阶段确定所有变量的类型\n动态类型语言：在执行阶段确定所有变量的类型")]),t._v(" "),s("h4",{attrs:{id:"js与c-对比"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#js与c-对比"}},[t._v("#")]),t._v(" JS与C++对比")]),t._v(" "),s("p",[t._v("JS")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("class C {\n    constructor(x, y) {\n        this.x = x;\n        this.y = y;\n    }\n}\nfunction add(a, b) {\n    return a.x + a.y + b.x + b.y;\n}\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br")])]),s("p",[t._v("C++")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("class C {\n    public:\n        int x;\n        int y;\n}\nint add(C a, C b) {\n    return a.x + a.y + b.x + b.y;\n}\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br")])]),s("p",[s("img",{attrs:{src:"http://upload.smart-lzgz.cn/mweb/202003311585585587604915841963992038.jpg",alt:"-w818"}}),t._v("\nJS")]),t._v(" "),s("ul",[s("li",[t._v("在程序运行时，动态计算属性偏移量")]),t._v(" "),s("li",[t._v("需要额外的空间存储属性名")]),t._v(" "),s("li",[t._v("所有对象的便宜了信息各存一份")])]),t._v(" "),s("p",[t._v("C++")]),t._v(" "),s("ul",[s("li",[t._v("编译阶段确定属性偏移量")]),t._v(" "),s("li",[t._v("用偏移量访问代替属性访问")]),t._v(" "),s("li",[t._v("偏移量信息共享")])]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"left"}},[t._v("静态类型语言")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("动态类型语言")])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("对类型极度严格")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("对类型非常宽松")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("立即发现错误")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("Bug可能隐藏数月甚至数年")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("运行时性能好")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("运行时性能差")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("自文档化")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("可读性差")])])])]),t._v(" "),s("p",[t._v("动态类型语言的支持者认为：")]),t._v(" "),s("ul",[s("li",[t._v("性能是可以改善的（V8引擎），而语言的灵活性更重要")]),t._v(" "),s("li",[t._v("隐藏的错误可以通过单元测试发现")]),t._v(" "),s("li",[t._v("文档可以通过工具生成")])]),t._v(" "),s("p",[t._v("JS是动态弱类型语言")]),t._v(" "),s("h2",{attrs:{id:"其他定义"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#其他定义"}},[t._v("#")]),t._v(" 其他定义")]),t._v(" "),s("p",[t._v("美国加州大学的讲义中定义\n强类型语言：不允许程序在发生错误后继续执行\n这样定义,C/C++就是弱类型语言，因为他们没有对数组越界进行检查，由此可能导致程序的崩溃")]),t._v(" "),s("p",[t._v("争议：C/C++是强类型还是弱类型？")]),t._v(" "),s("h2",{attrs:{id:"总结"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[t._v("#")]),t._v(" 总结")]),t._v(" "),s("p",[s("img",{attrs:{src:"http://upload.smart-lzgz.cn/mweb/202003311585585587606015841973600108.jpg",alt:"-w716"}})])])}),[],!1,null,null,null);s.default=e.exports}}]);