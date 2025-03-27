(window.webpackJsonp=window.webpackJsonp||[]).push([[216],{575:function(t,s,a){"use strict";a.r(s);var e=a(9),v=Object(e.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p",[s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/chst365/bolgImgs/imgs/topImgs/356.jpg",alt:""}})]),t._v(" "),s("h1",{attrs:{id:"面试官-说说em-px-rem-vh-vw区别"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#面试官-说说em-px-rem-vh-vw区别"}},[t._v("#")]),t._v(" 面试官：说说em/px/rem/vh/vw区别?")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://static.vue-js.com/51b036e0-9131-11eb-85f6-6fac77c0c9b3.png",alt:""}})]),t._v(" "),s("h2",{attrs:{id:"一、介绍"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#一、介绍"}},[t._v("#")]),t._v(" 一、介绍")]),t._v(" "),s("p",[t._v("传统的项目开发中，我们只会用到"),s("code",[t._v("px")]),t._v("、"),s("code",[t._v("%")]),t._v("、"),s("code",[t._v("em")]),t._v("这几个单位，它可以适用于大部分的项目开发，且拥有比较良好的兼容性")]),t._v(" "),s("p",[t._v("从"),s("code",[t._v("CSS3")]),t._v("开始，浏览器对计量单位的支持又提升到了另外一个境界，新增了"),s("code",[t._v("rem")]),t._v("、"),s("code",[t._v("vh")]),t._v("、"),s("code",[t._v("vw")]),t._v("、"),s("code",[t._v("vm")]),t._v("等一些新的计量单位")]),t._v(" "),s("p",[t._v("利用这些新的单位开发出比较良好的响应式页面，适应多种不同分辨率的终端，包括移动设备等")]),t._v(" "),s("h2",{attrs:{id:"二、单位"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#二、单位"}},[t._v("#")]),t._v(" 二、单位")]),t._v(" "),s("p",[t._v("在"),s("code",[t._v("css")]),t._v("单位中，可以分为长度单位、绝对单位，如下表所指示")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("CSS单位")]),t._v(" "),s("th")])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("相对长度单位")]),t._v(" "),s("td",[t._v("em、ex、ch、rem、vw、vh、vmin、vmax、%")])]),t._v(" "),s("tr",[s("td",[t._v("绝对长度单位")]),t._v(" "),s("td",[t._v("cm、mm、in、px、pt、pc")])])])]),t._v(" "),s("p",[t._v("这里我们主要讲述px、em、rem、vh、vw")]),t._v(" "),s("h3",{attrs:{id:"px"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#px"}},[t._v("#")]),t._v(" px")]),t._v(" "),s("p",[t._v("px，表示像素，所谓像素就是呈现在我们显示器上的一个个小点，每个像素点都是大小等同的，所以像素为计量单位被分在了绝对长度单位中")]),t._v(" "),s("p",[t._v("有些人会把"),s("code",[t._v("px")]),t._v("认为是相对长度，原因在于在移动端中存在设备像素比，"),s("code",[t._v("px")]),t._v("实际显示的大小是不确定的")]),t._v(" "),s("p",[t._v("这里之所以认为"),s("code",[t._v("px")]),t._v("为绝对单位，在于"),s("code",[t._v("px")]),t._v("的大小和元素的其他属性无关")]),t._v(" "),s("h3",{attrs:{id:"em"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#em"}},[t._v("#")]),t._v(" em")]),t._v(" "),s("p",[t._v("em是相对长度单位。相对于当前对象内文本的字体尺寸。如当前对行内文本的字体尺寸未被人为设置，则相对于浏览器的默认字体尺寸（"),s("code",[t._v("1em = 16px")]),t._v("）")]),t._v(" "),s("p",[t._v("为了简化 "),s("code",[t._v("font-size")]),t._v(" 的换算，我们需要在"),s("code",[t._v("css")]),t._v("中的 "),s("code",[t._v("body")]),t._v(" 选择器中声明"),s("code",[t._v("font-size")]),t._v("= "),s("code",[t._v("62.5%")]),t._v("，这就使 em 值变为 "),s("code",[t._v("16px*62.5% = 10px")])]),t._v(" "),s("p",[t._v("这样 "),s("code",[t._v("12px = 1.2em")]),t._v(", "),s("code",[t._v("10px = 1em")]),t._v(", 也就是说只需要将你的原来的"),s("code",[t._v("px")]),t._v(" 数值除以 10，然后换上 "),s("code",[t._v("em")]),t._v("作为单位就行了")]),t._v(" "),s("p",[t._v("特点：")]),t._v(" "),s("ul",[s("li",[t._v("em 的值并不是固定的")]),t._v(" "),s("li",[t._v("em 会继承父级元素的字体大小")]),t._v(" "),s("li",[t._v("em 是相对长度单位。相对于当前对象内文本的字体尺寸。如当前对行内文本的字体尺寸未被人为设置，则相对于浏览器的默认字体尺寸")]),t._v(" "),s("li",[t._v("任意浏览器的默认字体高都是 16px")])]),t._v(" "),s("p",[t._v("举个例子")]),t._v(" "),s("div",{staticClass:"language-html line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("big"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    我是14px=1.4rem"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("small"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("我是12px=1.2rem"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br")])]),s("p",[t._v("样式为")]),t._v(" "),s("div",{staticClass:"language-css line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{pre:!0,attrs:{class:"token selector"}},[t._v("<style>\n    html")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("font-size")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 10px"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*  公式16px*62.5%=10px  */")]),t._v("  \n    "),s("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".big")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("font-size")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 1.4rem"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".small")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("font-size")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 1.2rem"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n</style>\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br")])]),s("p",[t._v("这时候"),s("code",[t._v(".big")]),t._v("元素的"),s("code",[t._v("font-size")]),t._v("为14px，而"),s("code",[t._v(".small")]),t._v("元素的"),s("code",[t._v("font-size")]),t._v("为12px")]),t._v(" "),s("h3",{attrs:{id:"rem"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#rem"}},[t._v("#")]),t._v(" rem")]),t._v(" "),s("p",[t._v("rem，相对单位，相对的只是HTML根元素"),s("code",[t._v("font-size")]),t._v("的值")]),t._v(" "),s("p",[t._v("同理，如果想要简化"),s("code",[t._v("font-size")]),t._v("的转化，我们可以在根元素"),s("code",[t._v("html")]),t._v("中加入"),s("code",[t._v("font-size: 62.5%")])]),t._v(" "),s("div",{staticClass:"language-css line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{pre:!0,attrs:{class:"token selector"}},[t._v("html")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("font-size")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 62.5%"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*  公式16px*62.5%=10px  */")]),t._v(" \n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v("这样页面中1rem=10px、1.2rem=12px、1.4rem=14px、1.6rem=16px;使得视觉、使用、书写都得到了极大的帮助")]),t._v(" "),s("p",[t._v("特点：")]),t._v(" "),s("ul",[s("li",[t._v("rem单位可谓集相对大小和绝对大小的优点于一身")]),t._v(" "),s("li",[t._v("和em不同的是rem总是相对于根元素，而不像em一样使用级联的方式来计算尺寸")])]),t._v(" "),s("h3",{attrs:{id:"vh、vw"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vh、vw"}},[t._v("#")]),t._v(" vh、vw")]),t._v(" "),s("p",[t._v("vw ，就是根据窗口的宽度，分成100等份，100vw就表示满宽，50vw就表示一半宽。（vw 始终是针对窗口的宽），同理，"),s("code",[t._v("vh")]),t._v("则为窗口的高度")]),t._v(" "),s("p",[t._v("这里的窗口分成几种情况：")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("在桌面端，指的是浏览器的可视区域")])]),t._v(" "),s("li",[s("p",[t._v("移动端指的就是布局视口")])])]),t._v(" "),s("p",[t._v("像"),s("code",[t._v("vw")]),t._v("、"),s("code",[t._v("vh")]),t._v("，比较容易混淆的一个单位是"),s("code",[t._v("%")]),t._v("，不过百分比宽泛的讲是相对于父元素：")]),t._v(" "),s("ul",[s("li",[t._v("对于普通定位元素就是我们理解的父元素")]),t._v(" "),s("li",[t._v("对于position: absolute;的元素是相对于已定位的父元素")]),t._v(" "),s("li",[t._v("对于position: fixed;的元素是相对于 ViewPort（可视窗口）")])]),t._v(" "),s("h2",{attrs:{id:"三、总结"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#三、总结"}},[t._v("#")]),t._v(" 三、总结")]),t._v(" "),s("p",[s("strong",[t._v("px")]),t._v("：绝对单位，页面按精确像素展示")]),t._v(" "),s("p",[s("strong",[t._v("em")]),t._v("：相对单位，基准点为父节点字体的大小，如果自身定义了"),s("code",[t._v("font-size")]),t._v("按自身来计算，整个页面内"),s("code",[t._v("1em")]),t._v("不是一个固定的值")]),t._v(" "),s("p",[s("strong",[t._v("rem")]),t._v("：相对单位，可理解为"),s("code",[t._v("root em")]),t._v(", 相对根节点"),s("code",[t._v("html")]),t._v("的字体大小来计算")]),t._v(" "),s("p",[s("strong",[t._v("vh、vw")]),t._v("：主要用于页面视口大小布局，在页面布局上更加方便简单")])])}),[],!1,null,null,null);s.default=v.exports}}]);