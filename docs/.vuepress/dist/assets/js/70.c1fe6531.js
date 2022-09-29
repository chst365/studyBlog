(window.webpackJsonp=window.webpackJsonp||[]).push([[70],{385:function(e,t,r){"use strict";r.r(t);var a=r(9),n=Object(a.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("p",[t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/chst365/bolgImgs/imgs/topImgs/328.jpg",alt:""}})]),e._v(" "),t("h2",{attrs:{id:"react15架构"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#react15架构"}},[e._v("#")]),e._v(" React15架构")]),e._v(" "),t("p",[e._v("React15架构可分两层：")]),e._v(" "),t("ul",[t("li",[e._v("Reconciler(协调器):负责找出变化的组件")]),e._v(" "),t("li",[e._v("Renderer(渲染器):负责将变化的组件渲染到页面上")])]),e._v(" "),t("h3",{attrs:{id:"reconciler-协调器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#reconciler-协调器"}},[e._v("#")]),e._v(" Reconciler(协调器)")]),e._v(" "),t("p",[e._v("在React中可通过"),t("code",[e._v("this.setState")]),e._v("、"),t("code",[e._v("this.forceUpdate")]),e._v("、"),t("code",[e._v("ReactDOM.render")]),e._v("等API触发更新。\n每当有更新发生时，Reconciler会做如下工作：")]),e._v(" "),t("ul",[t("li",[e._v("调用函数组件或class组件的render方法，将返回的JSX转化为虚拟DOM")]),e._v(" "),t("li",[e._v("将虚拟DOM和上次更新时的虚拟DOM对比")]),e._v(" "),t("li",[e._v("通过对比找出本次更新中变化的虚拟DOM")]),e._v(" "),t("li",[e._v("通知Renderer将变化的虚拟DOM渲染到页面上\n可在"),t("a",{attrs:{href:"https://zh-hans.reactjs.org/docs/codebase-overview.html#reconcilers",target:"_blank",rel:"noopener noreferrer"}},[e._v("这里"),t("OutboundLink")],1),e._v("看到React官方对Reconciler的解释")])]),e._v(" "),t("h3",{attrs:{id:"renderer-渲染器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#renderer-渲染器"}},[e._v("#")]),e._v(" Renderer(渲染器)")]),e._v(" "),t("p",[e._v("由于React支持跨平台，所以不同平台有不同的Renderer。我们最熟悉的是负责在浏览器环境渲染的Renderer——"),t("a",{attrs:{href:"https://www.npmjs.com/package/react-dom",target:"_blank",rel:"noopener noreferrer"}},[e._v("ReactDOM"),t("OutboundLink")],1),e._v("\n除此之外，还有：")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://www.npmjs.com/package/react-native",target:"_blank",rel:"noopener noreferrer"}},[e._v("ReactNative"),t("OutboundLink")],1),e._v("渲染器，渲染App原生组件")]),e._v(" "),t("li",[t("a",{attrs:{href:"https://www.npmjs.com/package/react-test-renderer",target:"_blank",rel:"noopener noreferrer"}},[e._v("ReactTest"),t("OutboundLink")],1),e._v("渲染器，渲染出纯js对象用于测试")]),e._v(" "),t("li",[t("a",{attrs:{href:"https://www.npmjs.com/package/react-art",target:"_blank",rel:"noopener noreferrer"}},[e._v("ReactArt"),t("OutboundLink")],1),e._v("渲染器，渲染到Canvas,SVG或VML（IE8）")])]),e._v(" "),t("p",[e._v("可在"),t("a",{attrs:{href:"https://zh-hans.reactjs.org/docs/codebase-overview.html#renderers",target:"_blank",rel:"noopener noreferrer"}},[e._v("这里"),t("OutboundLink")],1),e._v("看到React官方对Renderer的解释")]),e._v(" "),t("h3",{attrs:{id:"react15架构的缺点"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#react15架构的缺点"}},[e._v("#")]),e._v(" React15架构的缺点")]),e._v(" "),t("p",[e._v("在Reconciler中，"),t("code",[e._v("mount")]),e._v("的组件会调用"),t("a",{attrs:{href:"https://github.com/facebook/react/blob/15-stable/src/renderers/dom/shared/ReactDOMComponent.js#L498",target:"_blank",rel:"noopener noreferrer"}},[e._v("mountComponent"),t("OutboundLink")],1),e._v("，\nupdate的组件会调用"),t("a",{attrs:{href:"https://github.com/facebook/react/blob/15-stable/src/renderers/dom/shared/ReactDOMComponent.js#L877",target:"_blank",rel:"noopener noreferrer"}},[e._v("updateComponent"),t("OutboundLink")],1),e._v("。\n这两个方法都会递归更新子组件。\n"),t("strong",[e._v("递归更新的缺点")]),e._v("："),t("strong",[e._v("一旦开始，中途无法中断")]),e._v("。当层级很深时，递归更新时间超过16ms,用户交互就会卡顿。")]),e._v(" "),t("p",[e._v("那么React15的架构支持异步更新吗？我们来看一个例子：\n初始化时"),t("code",[e._v("state.count=1")]),e._v(",每次点击按钮"),t("code",[e._v("state.count++")]),e._v("\n列表中3个元素的值分别为1,2,3乘以"),t("code",[e._v("state.count")]),e._v("的结果\n用红色标注了更新的步骤\n"),t("img",{attrs:{src:"https://react.iamkasong.com/img/v15.png",alt:""}}),e._v("\n我们看到，Reconciler和Renderer是交替工作的。\n由于整个过程都是同步的，所以在用户看来所有DOM是同时更新的。\n我们模拟下，如果中途中断更新会怎么样("),t("strong",[e._v("React15并不会中断进行中的更新")]),e._v(")？\n"),t("img",{attrs:{src:"https://react.iamkasong.com/img/dist.png",alt:""}}),e._v("\n可看到，当第一个li完成更新时中断更新，即步骤3完成后中断更新，此时后面的步骤都还未执行。\n用户本来期望123变成246,。实际却看见更新不完全的DOM（即223）\n为此，React重写了整个架构。")]),e._v(" "),t("h2",{attrs:{id:"react16架构"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#react16架构"}},[e._v("#")]),e._v(" React16架构")]),e._v(" "),t("p",[e._v("React16架构可分三层：")]),e._v(" "),t("ul",[t("li",[e._v("Scheduler(调度器)——调度任务优先级，高优先任务优先进入Reconciler")]),e._v(" "),t("li",[e._v("Reconciler(协调器):负责找出变化的组件")]),e._v(" "),t("li",[e._v("Renderer(渲染器):负责将变化的组件渲染到页面上")])]),e._v(" "),t("h3",{attrs:{id:"scheduler-调度器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#scheduler-调度器"}},[e._v("#")]),e._v(" Scheduler(调度器)")]),e._v(" "),t("p",[e._v("既然我们以浏览器是否有剩余时间作为任务中断的标准，那么我们需要一种机制：当浏览器有剩余时间时通知我们。\n其实部分浏览器已实现这个API，就是"),t("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/API/Window/requestIdleCallback",target:"_blank",rel:"noopener noreferrer"}},[e._v("requestldleCallback"),t("OutboundLink")],1),e._v("。\n但由于以下因素，React放弃使用：")]),e._v(" "),t("ul",[t("li",[e._v("浏览器兼容性")]),e._v(" "),t("li",[e._v("触发频率不稳定，受多因素影响。如当浏览器切换tab后，之前tab注册的"),t("code",[e._v("requestldleCallback")]),e._v("触发频率会变很低")])]),e._v(" "),t("p",[e._v("基于以上原因，React实现了功能更完备的"),t("code",[e._v("requestIdleCallback")]),e._v(" polyfill，这就是Scheduler。\n除了在空闲时触发回调的功能外，Scheduler还提供了多种调度优先级供任务设置。\n"),t("a",{attrs:{href:"https://github.com/facebook/react/blob/1fb18e22ae66fdb1dc127347e169e73948778e5a/packages/scheduler/README.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("Scheduler"),t("OutboundLink")],1),e._v("是独立于React的库")]),e._v(" "),t("h3",{attrs:{id:"reconciler-协调器-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#reconciler-协调器-2"}},[e._v("#")]),e._v(" Reconciler(协调器)")]),e._v(" "),t("p",[e._v("React15中Reconciler是递归处理虚拟DOM的。让我们看看React16的"),t("a",{attrs:{href:"https://github.com/facebook/react/blob/1fb18e22ae66fdb1dc127347e169e73948778e5a/packages/react-reconciler/src/ReactFiberWorkLoop.new.js#L1673",target:"_blank",rel:"noopener noreferrer"}},[e._v("Reconciler"),t("OutboundLink")],1),e._v("\n可看到，更新工作从递归变成了可中断的循环过程。每次循环都会调用"),t("code",[e._v("shouldYield")]),e._v("判断当前是否有剩余时间")]),e._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("/** @noinline */")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("function")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("workLoopConcurrent")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// Perform work until Scheduler asks us to yield")]),e._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("while")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("workInProgress "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("!==")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("null")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("&&")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("!")]),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("shouldYield")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    workInProgress "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("performUnitOfWork")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("workInProgress"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br"),t("span",{staticClass:"line-number"},[e._v("6")]),t("br"),t("span",{staticClass:"line-number"},[e._v("7")]),t("br")])]),t("p",[e._v("那么React16是如何解决中断更新时DOM渲染不完全的问题呢？\n在React16中，Reconciler与Renderer不再是交替工作。\n当Scheduler将任务交给Reconciler后，Reconciler会为变化的虚拟DOM打上代表增/删/更新的标记，类似这样：")]),e._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("export")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("const")]),e._v(" Placement "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("/*             */")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("0b0000000000010")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("export")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("const")]),e._v(" Update "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("/*                */")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("0b0000000000100")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("export")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("const")]),e._v(" PlacementAndUpdate "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("/*    */")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("0b0000000000110")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("export")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("const")]),e._v(" Deletion "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("/*              */")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("0b0000000001000")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br")])]),t("p",[e._v("全部标记见"),t("a",{attrs:{href:"https://github.com/facebook/react/blob/1fb18e22ae66fdb1dc127347e169e73948778e5a/packages/react-reconciler/src/ReactSideEffectTags.js",target:"_blank",rel:"noopener noreferrer"}},[e._v("这里"),t("OutboundLink")],1)]),e._v(" "),t("p",[e._v("整个Scheduler与Reconciler的工作都在内存中进行。只有当所有组件都完成Reconciler的工作，才会统一交给Renderer。\n"),t("a",{attrs:{href:"https://zh-hans.reactjs.org/docs/codebase-overview.html#fiber-reconciler",target:"_blank",rel:"noopener noreferrer"}},[e._v("这里"),t("OutboundLink")],1),e._v("是React官方对React1新Reconciler的解释\n可看到，Reconciler内部采用了"),t("code",[e._v("Fiber")]),e._v("架构")]),e._v(" "),t("h3",{attrs:{id:"renderer-渲染器-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#renderer-渲染器-2"}},[e._v("#")]),e._v(" Renderer(渲染器)")]),e._v(" "),t("p",[e._v("Renderer根据Reconciler为虚拟DOM打的标记，同步执行对应的DOM操作。\n之前的Demo在React16架构中整个更新流程为：\n"),t("img",{attrs:{src:"https://react.iamkasong.com/img/process.png",alt:""}}),e._v("\n其中红框中的步骤随时可能由于以下原因被中断：")]),e._v(" "),t("ul",[t("li",[e._v("有其他更高优任务需先更新")]),e._v(" "),t("li",[e._v("当前帧无剩余时间")])]),e._v(" "),t("p",[e._v("由于红框中的工作在内存中进行，不会更新页面上的DOM，所以即使反复中断，用户也看不到更新不完全的DOM。")]),e._v(" "),t("p",[e._v("由于Scheduler和Reconciler都是平台无关的，所以React为他们单独发了一个包"),t("a",{attrs:{href:"https://www.npmjs.com/package/react-reconciler",target:"_blank",rel:"noopener noreferrer"}},[e._v("react-reconciler"),t("OutboundLink")],1),e._v(",我们可用这个包自己实现一个"),t("code",[e._v("ReactDOM")]),e._v(",\n具体见"),t("a",{attrs:{href:"https://www.youtube.com/watch?v=CGpMlWVcHok&list=PLPxbbTqCLbGHPxZpw4xj_Wwg8-fdNxJRh&index=7",target:"_blank",rel:"noopener noreferrer"}},[e._v("参考资料"),t("OutboundLink")],1)])])}),[],!1,null,null,null);t.default=n.exports}}]);