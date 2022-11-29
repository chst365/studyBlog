(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{469:function(t,s,a){"use strict";a.r(s);var n=a(18),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/chst365/bolgImgs/imgs/topImgs/220.jpg",alt:""}})]),t._v(" "),a("h2",{attrs:{id:"总结的要点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#总结的要点"}},[t._v("#")]),t._v(" 总结的要点")]),t._v(" "),a("ul",[a("li",[t._v("精简 DOM，合理布局")]),t._v(" "),a("li",[t._v("使用 transform 代替 left,top 减少使用引起页面重排的属性")]),t._v(" "),a("li",[t._v("开启硬件加速")]),t._v(" "),a("li",[t._v("尽量避免浏览器创建不必要的图形层")]),t._v(" "),a("li",[t._v("尽量减少 js 动画，如需要，使用对性能更友好的"),a("code",[t._v("requestAnimationFrame")])]),t._v(" "),a("li",[t._v("使用 chrome performance 工具调试动画性能")])]),t._v(" "),a("p",[t._v("我们知道网页动画的每一帧都是一次重新渲染，每秒低于 24 帧的动画，人眼会感受到停顿，30~60 帧/s 才比较流畅，大多数屏幕的刷新频率 60Hz,这就意味着每一帧的任务耗时不能高于 16ms")]),t._v(" "),a("p",[t._v("浏览器渲染每一帧的过程，如图:\n"),a("img",{attrs:{src:"https://upload-images.jianshu.io/upload_images/1621708-a41d34fd8b262bb6.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1095/format/webp",alt:""}})]),t._v(" "),a("ol",[a("li",[t._v("js\n我们可以使用 js 来实现一些视觉变化的效果，也可以使用一些其他的常用方法：CSS Animations、Transitions 和 Web Animation API")]),t._v(" "),a("li",[t._v("样式计算\n此过程根据匹配选择器计算出哪些元素应用哪些 CSS3 规则，并将应用规则并计算每个元素的最终样式")]),t._v(" "),a("li",[t._v("布局\n浏览器开始计算元素占据的空间大小及在屏幕的位置。网页的布局模式意味着一个元素可能影响其他元素，因此对于浏览器来说，布局过程是经常发生的")]),t._v(" "),a("li",[t._v("绘制\n填充像素的过程。涉及绘出文本、颜色、图像、边框和阴影，基本上包括元素的每个可视部分。绘制一般是在多个表面（层）上完成的")]),t._v(" "),a("li",[t._v("合成\n由于页面的各部分可能被绘制到多层，由此他们需要按正确顺序绘制到屏幕上，以便正确渲染页面。对于与另一元素重叠的元素来说，这点特别重要，因为一个错误可能使一个元素错误出现在另一个元素的上层")])]),t._v(" "),a("p",[t._v("生成布局（flow）和绘制（paint）合称渲染（render）。重排必然导致重绘，重绘不一定需要重排。\n"),a("img",{attrs:{src:"https://upload-images.jianshu.io/upload_images/1621708-67a605f7213dd67f.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/720/format/webp",alt:""}})]),t._v(" "),a("p",[t._v("优化页面渲染：")]),t._v(" "),a("ul",[a("li",[t._v("精简 DOM 元素，合理布局，样式表尽可能简单，重绘和重排就越快")]),t._v(" "),a("li",[t._v("多使用 div+css 布局，避免使用 table 布局（table 元素的重排和重绘成本要高于 div）")]),t._v(" "),a("li",[t._v("DOM 元素读写分离")]),t._v(" "),a("li",[t._v("让进行大量动画的元素脱离文档流，减少重排开销")]),t._v(" "),a("li",[t._v("通过改变元素的 class 或 csstext 一次性的更改样式")]),t._v(" "),a("li",[t._v("缓存 DOM 元素的位置信息，避免不必要的属性读取")]),t._v(" "),a("li",[t._v("尽量使用离线 DOM")]),t._v(" "),a("li",[t._v("使用 css3 transform 优化动画性能")])]),t._v(" "),a("h3",{attrs:{id:"css3-transform-的执行效率"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#css3-transform-的执行效率"}},[t._v("#")]),t._v(" css3 transform 的执行效率")]),t._v(" "),a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("\x3c!-- 对应图1-- > div")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("height")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 100px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("transition")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" height 1s linear"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("div:hover")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("height")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 200px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("\x3c!-- 对应图2 -- > div")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("transform")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("scale")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("0.5"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("transition")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" transform 1s linear"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("div:hover")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("transform")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("scale")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br")])]),a("p",[t._v("一个从 height: 100px 到 height: 200px 的 动画按照下面的流程图来执行各种操作橙色方框的操作比较耗时，绿色方框的操作比较快速\n"),a("img",{attrs:{src:"https://upload-images.jianshu.io/upload_images/1621708-2f9474dd0744d413.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/455/format/webp",alt:""}}),t._v(" "),a("img",{attrs:{src:"https://upload-images.jianshu.io/upload_images/1621708-a013fcb7fed434ba.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/510/format/webp",alt:""}}),t._v("\n因为每一帧的变化浏览器都在进行布局、绘制、把新的位图交给 GPU 内存，但是在将位图加载到 GPU 内存中的操作是个相对耗时的操作。")]),t._v(" "),a("p",[t._v("GPU 在如下方面很快：")]),t._v(" "),a("ul",[a("li",[t._v("绘制位图到屏幕上")]),t._v(" "),a("li",[t._v("可不断的绘制相同的位图")]),t._v(" "),a("li",[t._v("将同一位图进行位移、旋转、缩放")])]),t._v(" "),a("h3",{attrs:{id:"层的引入"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#层的引入"}},[t._v("#")]),t._v(" 层的引入")]),t._v(" "),a("p",[t._v("在 Chrome 中实际上有几种不同类型的层：")]),t._v(" "),a("ul",[a("li",[t._v("掌管 DOM 子树的渲染层（RenderLayer）")]),t._v(" "),a("li",[t._v("掌管渲染层子树的图形层（GraphicsLayer）")]),t._v(" "),a("li",[t._v("某些特殊的渲染层被认为是合成层（Compositing Layers），合成层拥有单独的 GraphicsLayer")])]),t._v(" "),a("p",[t._v("拥有单独 GraphicsLayer 的层，都会将位图存储在共享内存中，作为纹理上传到 GPU 中，最后由 GPU 将多个位图进行合成，然后 draw 到屏幕上")]),t._v(" "),a("p",[t._v("在哪些因素下会将渲染层提升为合成层：")]),t._v(" "),a("ul",[a("li",[t._v("进行 3D 或透视变换的 css 属性")]),t._v(" "),a("li",[t._v("使用硬件加速视频解码的"),a("code",[t._v("<video>")]),t._v("元素")]),t._v(" "),a("li",[t._v("具有 3D（WebGL）上下文或硬件加速的 2D 上下文的"),a("code",[t._v("<canvas>")]),t._v("元素")]),t._v(" "),a("li",[t._v("组合型插件（即 Flash）")]),t._v(" "),a("li",[t._v("具有有 CSS 透明度动画或使用动画式 Webkit 变换的元素")]),t._v(" "),a("li",[t._v("具有硬件加速的 css 滤镜的元素")]),t._v(" "),a("li",[t._v("子元素中存在具有组合层元素的元素（存在具有自己层的子元素的元素）")]),t._v(" "),a("li",[t._v("同级元素中有 Z 索引币其小的元素，且该 Z 索引比较小的元素具有组合层（在组合层之上进行渲染的元素）")])]),t._v(" "),a("p",[t._v("提升为合成层有什么好处")]),t._v(" "),a("ul",[a("li",[t._v("合成层的位图，会交由 GPU 合成，币 CPU 处理要快")]),t._v(" "),a("li",[t._v("当需要 repaint 时，只需要 repaint 本身，不会影响到其他的层")]),t._v(" "),a("li",[t._v("对于 transform 和 opacity 效果，不会触发 layout 和 paint")])]),t._v(" "),a("p",[t._v("提升合成层的最好方式是使用 CSS 的 will-change 属性，如 will-change 设置为 opacity/transform/top/left/bottom/right")]),t._v(" "),a("p",[t._v("对于还不支持 will-change 属性的浏览器，可以使用一个 3D transform 属性来强制提升为合成层："),a("code",[t._v("transform:translateZ(0)")])]),t._v(" "),a("p",[t._v("通常情况下开启硬件加速会提高动画的流畅性，但是过多的合成层也会造成性能瓶颈，会占用大量的内存空间")]),t._v(" "),a("h3",{attrs:{id:"网页动画的渲染"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#网页动画的渲染"}},[t._v("#")]),t._v(" 网页动画的渲染")]),t._v(" "),a("p",[t._v("在 js 中有一些方法可以调节重新渲染，大幅提高网页性能")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("window.requestAnimationFrame(fn)")]),t._v("可以将某些代码放到下一次重新渲染执行")]),t._v(" "),a("li",[a("code",[t._v("window.requestIdleCallback(fn)")]),t._v("可以调节重新渲染。它指定只有当一帧的末尾有空闲时间，才会执行回调函数。只有当前帧运行时间小于 16.66ms 时，函数 fn 才会执行，否则，就推迟奥下一帧，下一帧没时间，继续推迟下去\n"),a("ul",[a("li",[a("code",[t._v("window.requestIdleCallback(fn, 5000)")]),t._v("如果在指定的这段时间内，每一帧都没有空闲时间，那么函数 fn 将会强制执行")])])])]),t._v(" "),a("h3",{attrs:{id:"chrome-devtool-performance"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#chrome-devtool-performance"}},[t._v("#")]),t._v(" Chrome Devtool Performance")]),t._v(" "),a("p",[t._v("怎么去分析页面运行时的性能表现，"),a("a",{attrs:{href:"https://links.jianshu.com/go?to=https%3A%2F%2Fzhuanlan.zhihu.com%2Fp%2F29879682",target:"_blank",rel:"noopener noreferrer"}},[t._v("Chrome Devtool Performance"),a("OutboundLink")],1),t._v("是一个很好的选择。")])])}),[],!1,null,null,null);s.default=e.exports}}]);