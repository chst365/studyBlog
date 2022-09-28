(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{463:function(t,s,a){"use strict";a.r(s);var e=a(15),r=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/chst365/bolgImgs/imgs/topImgs/43.jpg",alt:""}})]),t._v(" "),a("h2",{attrs:{id:"页面生成的过程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#页面生成的过程"}},[t._v("#")]),t._v(" 页面生成的过程")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2020/3/6/170af501e710ce67?imageView2/0/w/1280/h/960/format/webp/ignore-error/1",alt:""}})]),t._v(" "),a("ol",[a("li",[t._v("HTML 被 HTML 解析器解析成 DOM 树")]),t._v(" "),a("li",[t._v("CSS 被 CSS 解析器解析成 CSSOM 树")]),t._v(" "),a("li",[t._v("结合 DOM 树和 CSSOM 树生成一颗渲染树 (Render Tree),此过程为 Attachment")]),t._v(" "),a("li",[t._v("生成布局（flow）,浏览器在屏幕上画出渲染树中的所有节点")]),t._v(" "),a("li",[t._v("将布局绘制（paint）在屏幕上，显示出整个页面")])]),t._v(" "),a("h2",{attrs:{id:"重排比重绘大"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#重排比重绘大"}},[t._v("#")]),t._v(" 重排比重绘大")]),t._v(" "),a("ul",[a("li",[t._v("重绘不一定导致重排，但重排一定导致重绘")])]),t._v(" "),a("h2",{attrs:{id:"重排-reflow"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#重排-reflow"}},[t._v("#")]),t._v(" 重排（reflow）")]),t._v(" "),a("p",[t._v("重排也叫回流，重新生成布局，重新排列元素")]),t._v(" "),a("h3",{attrs:{id:"哪些情况会发生重排"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#哪些情况会发生重排"}},[t._v("#")]),t._v(" 哪些情况会发生重排")]),t._v(" "),a("ul",[a("li",[t._v("页面初始渲染")]),t._v(" "),a("li",[t._v("添加/删除可见的 DOM 元素")]),t._v(" "),a("li",[t._v("改变元素位置")]),t._v(" "),a("li",[t._v("改变元素尺寸，如边距、填充、边框、宽高等")]),t._v(" "),a("li",[t._v("改变元素内容，如文字数量，图片大小等")]),t._v(" "),a("li",[t._v("改变元素字体大小")]),t._v(" "),a("li",[t._v("改变浏览器窗口尺寸，如 resize 事件发生时")]),t._v(" "),a("li",[t._v("激活 CSS 伪类，如"),a("code",[t._v(":hover")])]),t._v(" "),a("li",[t._v("设置 style 属性的值，因通过设置 style 属性改变节点样式，每次设置都会触发一次 reflow")]),t._v(" "),a("li",[t._v("查询某些属性或调用某些计算方法："),a("code",[t._v("offsetWidth")]),t._v(","),a("code",[t._v("offsetHeight")]),t._v("等，调用"),a("code",[t._v("getComputedStyle")]),t._v("方法")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("常见引起重排属性和方法")]),t._v(" "),a("th",[t._v("--")]),t._v(" "),a("th",[t._v("--")]),t._v(" "),a("th",[t._v("--")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("width")]),t._v(" "),a("td",[t._v("height")]),t._v(" "),a("td",[t._v("margin")]),t._v(" "),a("td",[t._v("padding")])]),t._v(" "),a("tr",[a("td",[t._v("display")]),t._v(" "),a("td",[t._v("border-width")]),t._v(" "),a("td",[t._v("border")]),t._v(" "),a("td",[t._v("position")])]),t._v(" "),a("tr",[a("td",[t._v("overflow")]),t._v(" "),a("td",[t._v("font-size")]),t._v(" "),a("td",[t._v("vertical-align")]),t._v(" "),a("td",[t._v("min-height")])]),t._v(" "),a("tr",[a("td",[t._v("clientWidth")]),t._v(" "),a("td",[t._v("clientHeight")]),t._v(" "),a("td",[t._v("clientTop")]),t._v(" "),a("td",[t._v("clientLeft")])]),t._v(" "),a("tr",[a("td",[t._v("offsetWidth")]),t._v(" "),a("td",[t._v("offsetHeight")]),t._v(" "),a("td",[t._v("offsetTop")]),t._v(" "),a("td",[t._v("offsetLeft")])]),t._v(" "),a("tr",[a("td",[t._v("scrollWidth")]),t._v(" "),a("td",[t._v("scrollHeight")]),t._v(" "),a("td",[t._v("scrollTop")]),t._v(" "),a("td",[t._v("scrollLeft")])]),t._v(" "),a("tr",[a("td",[t._v("scrollIntoView()")]),t._v(" "),a("td",[t._v("scrollTo()")]),t._v(" "),a("td",[t._v("getComputedStyle()")]),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",[t._v("getBoundingClientRect()")]),t._v(" "),a("td",[t._v("scrollIntoViewIfNeeded()")]),t._v(" "),a("td"),t._v(" "),a("td")])])]),t._v(" "),a("h3",{attrs:{id:"重排影响的范围"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#重排影响的范围"}},[t._v("#")]),t._v(" 重排影响的范围")]),t._v(" "),a("p",[t._v("由于浏览器渲染界面是基于流式布局模型，所以触发重排时会对周围的 DOM 重新排列")]),t._v(" "),a("ul",[a("li",[t._v("全局范围：从根节点 html 开始对整个渲染树进行重新布局")]),t._v(" "),a("li",[t._v("局部范围：对渲染树的某部分或某一个渲染你对象进行重新布局")])]),t._v(" "),a("h2",{attrs:{id:"重绘-repaints"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#重绘-repaints"}},[t._v("#")]),t._v(" 重绘（Repaints）")]),t._v(" "),a("p",[t._v("当一个元素的外观发生改变，但没有改变布局，重新把元素外观绘制出来的过程，叫重绘")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("常见的引起重绘的属性")]),t._v(" "),a("th",[t._v("--")]),t._v(" "),a("th",[t._v("--")]),t._v(" "),a("th",[t._v("--")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("color")]),t._v(" "),a("td",[t._v("border-style")]),t._v(" "),a("td",[t._v("visibility")]),t._v(" "),a("td",[t._v("background")])]),t._v(" "),a("tr",[a("td",[t._v("text-decoration")]),t._v(" "),a("td",[t._v("background-image")]),t._v(" "),a("td",[t._v("background-position")]),t._v(" "),a("td",[t._v("background-repeat")])]),t._v(" "),a("tr",[a("td",[t._v("outline-color")]),t._v(" "),a("td",[t._v("outline")]),t._v(" "),a("td",[t._v("outline-style")]),t._v(" "),a("td",[t._v("border-radius")])]),t._v(" "),a("tr",[a("td",[t._v("outline-width")]),t._v(" "),a("td",[t._v("box-shadow")]),t._v(" "),a("td",[t._v("background-size")]),t._v(" "),a("td")])])]),t._v(" "),a("h2",{attrs:{id:"重排优化建议"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#重排优化建议"}},[t._v("#")]),t._v(" 重排优化建议")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("减少重排范围")]),t._v(" "),a("ul",[a("li",[t._v("尽可能在低层级的 DOM 节点上，不要通过父元素去影响子元素")]),t._v(" "),a("li",[t._v("不要使用 table 布局，可能很小的改动造成整个 table 的重新布局，不得已使用 table，可设置"),a("code",[t._v("table-layout:auto")]),t._v("或"),a("code",[t._v("table-layout:fixed")]),t._v("使 table 一行一行渲染，限制 reflow 的影响范围")])])]),t._v(" "),a("li",[a("p",[t._v("减少重排次数")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("样式集中改变")]),t._v(" "),a("ul",[a("li",[t._v("样式统一在"),a("code",[t._v("cssText")]),t._v("变量中编辑")]),t._v(" "),a("li",[t._v("更改类名而不是直接修改样式")]),t._v(" "),a("li",[a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// bad")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" left "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" top "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nel"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("style"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("left "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" left "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"px"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nel"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("style"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("top "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" top "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"px"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 当top和left的值是动态计算而成时...")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// better")]),t._v("\nel"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("style"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("cssText "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"; left: "')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" left "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"px; top: "')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" top "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"px;"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// better")]),t._v("\nel"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("className "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('" className"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br")])])])])]),t._v(" "),a("li",[a("p",[t._v("分离读写操作")]),t._v(" "),a("ul",[a("li",[t._v("DOM 的多个读操作（或多个写操作），应该放在一起。")]),t._v(" "),a("li",[a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// bad 强制刷新 触发四次重排+重绘")]),t._v("\ndiv"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("style"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("left "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" div"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("offsetLeft "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"px"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\ndiv"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("style"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("top "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" div"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("offsetTop "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"px"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\ndiv"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("style"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("right "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" div"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("offsetRight "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"px"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\ndiv"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("style"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("bottom "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" div"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("offsetBottom "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"px"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// good 缓存布局信息 相当于读写分离 触发一次重排+重绘")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" curLeft "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" div"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("offsetLeft"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" curTop "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" div"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("offsetTop"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" curRight "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" div"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("offsetRight"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" curBottom "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" div"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("offsetBottom"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\ndiv"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("style"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("left "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" curLeft "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"px"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\ndiv"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("style"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("top "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" curTop "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"px"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\ndiv"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("style"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("right "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" curRight "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"px"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\ndiv"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("style"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("bottom "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" curBottom "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"px"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br")])])])])]),t._v(" "),a("li",[a("p",[t._v("将 DOM 离线")]),t._v(" "),a("ul",[a("li",[t._v("使用 "),a("code",[t._v("dispaly:none")])]),t._v(" "),a("li",[t._v("通过"),a("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/API/DocumentFragment",target:"_blank",rel:"noopener noreferrer"}},[t._v("DocumentFragment"),a("OutboundLink")],1),t._v("创建一个"),a("code",[t._v("dom")]),t._v("碎片，在此上面批量操作"),a("code",[t._v("dom")]),t._v("，操作完成后，再添加到文档中，这样只会触发一次重排")]),t._v(" "),a("li",[t._v("复制节点，在副本上工作，然后替换他")])])]),t._v(" "),a("li",[a("p",[t._v("使用 absolute 或 fixed 脱离文档流")]),t._v(" "),a("ul",[a("li",[t._v("使用绝对定位会使该元素独立成为渲染树中"),a("code",[t._v("body")]),t._v("的一个子元素，一些其他在这个区域的节点可能需要重绘，但不需要重排")])])]),t._v(" "),a("li",[a("p",[t._v("优化动画")]),t._v(" "),a("ul",[a("li",[t._v("把动画效果应用到"),a("code",[t._v("position:absolute/fixed")]),t._v("的元素上")]),t._v(" "),a("li",[t._v("启用 CPU 加速：Canvas2D/布局合成、transitions、transforms、WebGL 和 video")])])])])])]),t._v(" "),a("h2",{attrs:{id:"如何在浏览器中查看页面渲染时间"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#如何在浏览器中查看页面渲染时间"}},[t._v("#")]),t._v(" 如何在浏览器中查看页面渲染时间")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2020/3/6/170af50e460d9a23?imageView2/0/w/1280/h/960/format/webp/ignore-error/1",alt:""}})]),t._v(" "),a("ol",[a("li",[a("p",[t._v("打开开发者工具：点击 Performance 左侧有个小圆点 点击刷新页面会录制整个页面加载出来 时间的分配情况。如图")]),t._v(" "),a("ul",[a("li",[t._v("蓝色：网络通信和 HTML 解析")]),t._v(" "),a("li",[t._v("黄色：js 执行")]),t._v(" "),a("li",[t._v("紫色：样式计算和布局，即重排")]),t._v(" "),a("li",[t._v("绿色：重绘")])])]),t._v(" "),a("li",[a("p",[t._v("点击 Event Log：单独勾选 Loading 项会显示 html 和 css 加载时间。如下\n"),a("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2020/3/6/170af5139b7ba71b?imageView2/0/w/1280/h/960/format/webp/ignore-error/1",alt:""}})])])])])}),[],!1,null,null,null);s.default=r.exports}}]);