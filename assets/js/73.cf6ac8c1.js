(window.webpackJsonp=window.webpackJsonp||[]).push([[73],{432:function(t,s,a){"use strict";a.r(s);var n=a(9),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p",[s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/chst365/bolgImgs/imgs/topImgs/348.jpg",alt:""}})]),t._v(" "),s("h2",{attrs:{id:"react-理念"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#react-理念"}},[t._v("#")]),t._v(" React 理念")]),t._v(" "),s("p",[t._v("从官网可看到React理念：\nReact是用js构建"),s("strong",[t._v("快速响应")]),t._v("的大型Web应用程序的首选方式。\n那么，制约快速响应的因素是什么：")]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("CPU瓶颈")]),t._v("：当遇到大计算量的操作或设备性能不足使页面掉帧，导致卡顿")]),t._v(" "),s("li",[s("strong",[t._v("IO瓶颈")]),t._v("：发送网络请求后，需等待数据返回才能进一步操作导致不能快速响应\nReact 是如何解决这两个瓶颈呢？")])]),t._v(" "),s("h3",{attrs:{id:"cpu瓶颈"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#cpu瓶颈"}},[t._v("#")]),t._v(" CPU瓶颈")]),t._v(" "),s("p",[t._v("当项目变庞大、组件数量多，就容易遇到CPU瓶颈\n如下Demo,向视图中渲染3000个li")]),t._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("App")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" len "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3000")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("ul"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Array")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("len"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("fill")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("map")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("_"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" i")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("li"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("i"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("li"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("ul"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" rootEl "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("querySelector")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"#root"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nReactDOM"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("render")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("App"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" rootEl"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  \n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br")])]),s("p",[t._v("主流浏览器刷新频率：60Hz(1000ms/60Hz),即16.6ms浏览器刷新一次。\n我们知道，JS可操作DOM，"),s("strong",[t._v("GUI渲染线程JS线程是互斥的")]),t._v("。所以"),s("strong",[t._v("JS脚本执行和浏览器布局、绘制不能同时执行")]),t._v("。\n在每16.6ms内，需完成如下工作：")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("JS脚本执行 --- 样式布局 --- 样式绘制\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v("当JS执行时间 过长，超出16.6ms,这次刷新就无时间执行样式布局和绘制\n在Demo中，由于组件数量多（3000个），JS脚本执行时间过长，页面掉帧，造成卡顿。\n从打印的执行堆栈图看到，JS执行时间73.65ms，远多于一帧时间\n"),s("img",{attrs:{src:"https://react.iamkasong.com/img/long-task.png",alt:""}}),t._v("\n如何解决这个问题？\n答案是：在浏览器每一帧中，预留一些时间给JS线程，React用这些时间更新组件；若预留的时间不够，React将线程控制权交还给浏览器使其有时间渲染UI，react则等待下一帧时间来继续被中断的工作。\n在"),s("a",{attrs:{href:"https://github.com/facebook/react/blob/1fb18e22ae66fdb1dc127347e169e73948778e5a/packages/scheduler/src/forks/SchedulerHostConfig.default.js#L119",target:"_blank",rel:"noopener noreferrer"}},[t._v("源码"),s("OutboundLink")],1),t._v("中，预留的时间是5ms。\n这种将长任务分拆到每一帧中，称为"),s("strong",[t._v("时间切片")]),t._v("（time slice）\n如何开启时间？\n开启"),s("code",[t._v("Concurrent Mode")]),t._v("可开启时间切片。")]),t._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 通过使用ReactDOM.unstable_createRoot开启Concurrent Mode")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ReactDOM.render(<App/>, rootEl);  ")]),t._v("\nReactDOM"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("unstable_createRoot")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("rootEl"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("render")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("App"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br")])]),s("p",[s("img",{attrs:{src:"https://react.iamkasong.com/img/time-slice.png",alt:""}}),t._v("\n此时可看到，长任务被分拆到每一帧不同的task中，JS脚本执行时间大体在5ms左右，这样浏览器就有时间执行样式布局和绘制，减少掉帧的可能性。")]),t._v(" "),s("p",[t._v("所以，"),s("strong",[t._v("解决CPU瓶颈的关键是时间切片")]),t._v("，而"),s("strong",[t._v("时间切片的关键是将同步的更新变为可中断的异步更新")])]),t._v(" "),s("h3",{attrs:{id:"io瓶颈"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#io瓶颈"}},[t._v("#")]),t._v(" IO瓶颈")]),t._v(" "),s("p",[t._v("网络延迟是前端开发者无法解决的。那么如何在网络延迟下，减少用户对网络延迟的感知呢？\nReact的答案是将人机交互研究的结果整合到真实的UI中。\n这里以IOS系统为例子\n从设置页面，进入通用页面（不涉及网络请求）\n"),s("img",{attrs:{src:"https://react.iamkasong.com/img/legacy-move.gif",alt:""}}),t._v("\n作为对比，从设置进入Siri与搜索页面\n"),s("img",{attrs:{src:"https://react.iamkasong.com/img/concurrent-mov.gif",alt:""}}),t._v("\n两者的区别？\n前者的交互是同步的，直接显示后续页面\n后者的交互是异步的，需等待请求返回再显示后续页面。\n但从用户感知看，两者区别微乎其微。\n这里的做法是：在点击“Siri与搜索”后，先在当前页停留一小段时间，用来请求数据；若这段时间足够短，用户则无感知，若请求时间超过范围，再显示loading效果。\n为此，React实现了"),s("a",{attrs:{href:"https://zh-hans.reactjs.org/docs/concurrent-mode-suspense.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Suspense"),s("OutboundLink")],1),t._v("功能及配套hook——"),s("a",{attrs:{href:"https://zh-hans.reactjs.org/docs/concurrent-mode-reference.html#usedeferredvalue",target:"_blank",rel:"noopener noreferrer"}},[t._v("useDeferredValue"),s("OutboundLink")],1),t._v("\n在源码内部，为支持这些特性，需将"),s("strong",[t._v("同步的更新变为可中断的异步更新")])]),t._v(" "),s("h2",{attrs:{id:"总结"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[t._v("#")]),t._v(" 总结")]),t._v(" "),s("p",[t._v("React为践行构建快速响应的大型Web应用程序，主要解决了CPU的瓶颈和IO瓶颈两大关键问题。主要是将"),s("strong",[t._v("同步更新变为可中断的异步更新")])])])}),[],!1,null,null,null);s.default=e.exports}}]);