(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{370:function(t,s,a){"use strict";a.r(s);var n=a(4),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p",[s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/chst365/bolgImgs/imgs/topImgs/212.jpg",alt:""}})]),t._v(" "),s("h2",{attrs:{id:"微前端的价值"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#微前端的价值"}},[t._v("#")]),t._v(" 微前端的价值")]),t._v(" "),s("ul",[s("li",[t._v("技术栈无关：主框架不限制接入应用的技术栈，子应用具备完全自主权")]),t._v(" "),s("li",[t._v("独立开发、独立部署：子应用仓库独立，前后端可独立开发，部署完成后主框架自动完成同步更新")]),t._v(" "),s("li",[t._v("独立运行时：每个子应用间状态隔离，运行时状态不共享")])]),t._v(" "),s("p",[t._v("微前端架构旨在解决单体应用在一个相对长的时间跨度下，由于参与的人员、团队的增多、变迁，从一个普通应用演变成一个巨石应用( Frontend Monolith )后，随之而来的应用不可维护的问题。这类问题在企业级 Web 应用中尤其常见。")]),t._v(" "),s("h2",{attrs:{id:"针对中后台应用的解决方案"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#针对中后台应用的解决方案"}},[t._v("#")]),t._v(" 针对中后台应用的解决方案")]),t._v(" "),s("p",[t._v("中后台应用由于其应用生命周期长(动辄 3+ 年)等特点，最后演变成一个巨石应用的概率往往高于其他类型的 web 应用。而从技术实现角度，微前端架构解决方案大概分为两类场景：")]),t._v(" "),s("ul",[s("li",[t._v("单实例：即同一时刻，只有一个子应用被展示，子应用具备一个完整的应用生命周期。通常基于 url 的变化来做子应用的切换。")]),t._v(" "),s("li",[t._v("多实例：同一时刻可展示多个子应用。通常使用 Web Components 方案来做子应用封装，子应用更像是一个业务组件而不是应用。")])]),t._v(" "),s("p",[t._v("本文将着重介绍单实例场景下的微前端架构实践方案（基于 single-spa），因为这个场景更贴近大部分中后台应用。")]),t._v(" "),s("h2",{attrs:{id:"行业现状"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#行业现状"}},[t._v("#")]),t._v(" 行业现状")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://antcloud-cnhz02-athomeweb-01.oss-cn-hzfinance.aliyuncs.com/image/2019-08-26/1c4ee3d5-d535-4bb4-a511-2d0e1274519d.png",alt:""}})]),t._v(" "),s("p",[t._v("MPA 方案的优点在于 部署简单、各应用之间硬隔离，天生具备技术栈无关、独立开发、独立部署的特性。缺点则也很明显，应用之间切换会造成浏览器重刷，由于产品域名之间相互跳转，流程体验上会存在断点。")]),t._v(" "),s("p",[t._v("SPA 则天生具备体验上的优势，应用直接无刷新切换，能极大的保证多产品之间流程操作串联时的流程性。缺点则在于各应用技术栈之间是强耦合的。")]),t._v(" "),s("p",[t._v("那我们有没有可能将 MPA 和 SPA 两者的优势结合起来，构建出一个相对完善的微前端架构方案呢？")]),t._v(" "),s("p",[t._v('jsconf china 2016 大会上，ucloud 的同学分享了他们的基于 angularjs 的方案（单页应用“联邦制”实践），里面提到的 "联邦制" 概念很贴切，可以认为是早期的基于耦合技术栈的微前端架构实践。')]),t._v(" "),s("h2",{attrs:{id:"微前端架构实践中的问题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#微前端架构实践中的问题"}},[t._v("#")]),t._v(" 微前端架构实践中的问题")]),t._v(" "),s("p",[t._v("微前端架构的优势，正是 MPA 与 SPA 架构优势的合集。即保证应用具备独立开发权的同时，又有将它们整合到一起保证产品完整的流程体验的能力。\n这样一套模式下，应用的架构就会变成：\n"),s("img",{attrs:{src:"https://antcloud-cnhz02-athomeweb-01.oss-cn-hzfinance.aliyuncs.com/image/2019-08-26/00e4ae14-6a48-4118-a9d3-bdcbf2debadd.png",alt:""}}),t._v(" "),s("code",[t._v("Stitching layer")]),t._v(" 作为主框架的核心成员，充当调度者的角色，由它来决定在不同的条件下激活不同的子应用。因此主框架的定位则仅仅是："),s("strong",[t._v("导航路由")]),t._v(" + "),s("strong",[t._v("资源加载框架")]),t._v("。")]),t._v(" "),s("p",[t._v("具体实现这样的架构，具体要解决以下几个技术问题：")]),t._v(" "),s("h3",{attrs:{id:"路由系统及-futurestat"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#路由系统及-futurestat"}},[t._v("#")]),t._v(" 路由系统及 FutureStat")]),t._v(" "),s("p",[t._v("我们在一个实现了微前端内核的产品中，正常访问一个子应用的页面时，可能会有这样一个链路：\n"),s("img",{attrs:{src:"https://antcloud-cnhz02-athomeweb-01.oss-cn-hzfinance.aliyuncs.com/image/2019-08-26/86e06958-dc1b-404a-9aaa-7b7a33c7bab8.png",alt:""}})]),t._v(" "),s("p",[t._v("由于我们的子应用都是 lazy load 的，当浏览器重新刷新时，主框架的资源会被重新加载，同时异步 load 子应用的静态资源，由于此时主应用的路由系统已经激活，但子应用的资源可能还没有完全加载完毕，从而导致路由注册表里发现没有能匹配子应用 /subApp/123/detail 的规则，这时候就会导致跳 NotFound 页或者直接路由报错。")]),t._v(" "),s("p",[t._v("这个问题在所有 lazy load 方式加载子应用的方案中都会碰到，早些年前 angularjs 社区把这个问题统一称之为 Future State。")]),t._v(" "),s("p",[t._v("解决的思路也很简单，我们需要设计这样一套路由机制：")]),t._v(" "),s("p",[t._v("主框架配置子应用的路由为"),s("code",[t._v("subApp: { url: '/subApp/**', entry:'./subApp.js' }")]),t._v("，则当浏览器的地址为 "),s("code",[t._v("/subApp/abc")]),t._v(" 时，框架需要先加载 entry 资源，待 entry 资源加载完毕，确保子应用的路由系统注册进主框架之后后，再去由子应用的路由系统接管 url change 事件。同时在子应用路由切出时，主框架需要触发相应的 destroy 事件，子应用在监听到该事件时，调用自己的卸载方法卸载应用，如 React 场景下 "),s("code",[t._v("destroy = () => ReactDOM.unmountAtNode(container)")]),t._v(" 。")]),t._v(" "),s("p",[t._v("要实现这样一套机制，我们可以自己去劫持 url change 事件从而实现自己的路由系统，也可以基于社区已有的 ui router library，尤其是 react-router 在 v4 之后实现了 Dynamic Routing 能力，我们只需要复写一部分路由发现的逻辑即可。这里我们推荐直接选择社区比较完善的相关实践 single-spa。")]),t._v(" "),s("h3",{attrs:{id:"app-entry"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#app-entry"}},[t._v("#")]),t._v(" App Entry")]),t._v(" "),s("p",[t._v("解决了路由问题后，主框架与子应用集成的方式，也会成为一个需要重点关注的技术决策。")]),t._v(" "),s("h4",{attrs:{id:"_1-构建时组合-vs-运行时组合"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-构建时组合-vs-运行时组合"}},[t._v("#")]),t._v(" 1. 构建时组合 VS 运行时组合")]),t._v(" "),s("p",[t._v("微前端架构模式下，子应用打包的方式，基本分为两种：")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("方 案")]),t._v(" "),s("th",[t._v("特点")]),t._v(" "),s("th",[t._v("优点")]),t._v(" "),s("th",[t._v("缺点")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("构建时")]),t._v(" "),s("td",[t._v("子应用通过 "),s("code",[t._v("Package Registry")]),t._v("（可以是"),s("code",[t._v("npm package")]),t._v(",也可以是 "),s("code",[t._v("git tags")]),t._v("等其他方式）的方式，与主应用一起打包发布")]),t._v(" "),s("td",[t._v("主应用、子应用间可以做打包优化，如依赖共享等")]),t._v(" "),s("td",[t._v("子应用与主应用间产品工具链耦合。工具链也是技术栈的一部分。子应用每次发布依赖主应用重新打包发布")])]),t._v(" "),s("tr",[s("td",[t._v("运行时")]),t._v(" "),s("td",[t._v("子应用自己构建打包，主应用运行时动态加载子应用资源")]),t._v(" "),s("td",[t._v("主应用与子应用间完全解耦，子应用完全技术栈无关")]),t._v(" "),s("td",[t._v("会多出一些运行时的复杂度和 "),s("code",[t._v("overhead")])])])])]),t._v(" "),s("p",[t._v("很显然，要实现真正的技术栈无关跟独立部署两个核心目标，大部分场景下我们需要使用运行时加载子应用这种方案。")]),t._v(" "),s("h4",{attrs:{id:"_2-js-entry-vs-htmlentry"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-js-entry-vs-htmlentry"}},[t._v("#")]),t._v(" 2.JS Entry vs HTMLEntry")]),t._v(" "),s("p",[t._v("在确定了运行时载入的方案后，另一个需要决策的点是，我们需要子应用提供什么形式的资源作为渲染入口？")]),t._v(" "),s("p",[t._v("JS Entry 的方式通常是子应用将资源打成一个 entry script，比如 single-spa 的 example 中的方式。但这个方案的限制也颇多，如要求子应用的所有资源打包到一个 js bundle 里，包括 css、图片等资源。除了打出来的包可能体积庞大之外的问题之外，资源的并行加载等特性也无法利用上。")]),t._v(" "),s("p",[t._v("HTML Entry 则更加灵活，直接将子应用打出来 HTML 作为入口，主框架可以通过 fetch html 的方式获取子应用的静态资源，同时将 HTML document 作为子节点塞到主框架的容器中。这样不仅可以极大的减少主应用的接入成本，子应用的开发方式及打包方式基本上也不需要调整，而且可以天然的解决子应用之间样式隔离的问题(后面提到)。想象一下这样一个场景：")]),t._v(" "),s("div",{staticClass:"language-html line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- 子应用 index.html --\x3e")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("src")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("//unpkg/antd.min.js"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token script"}}),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("body")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("main")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("id")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("root"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("main")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("body")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br")])]),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 子应用入口")]),t._v("\nReactDOM"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("render")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("App "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" document"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getElementById")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"root"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br")])]),s("p",[t._v('如果是 JS Entry 方案，主框架需要在子应用加载之前构建好相应的容器节点(比如这里的 "#root" 节点)，不然子应用加载时会因为找不到 container 报错。但问题在于，主应用并不能保证子应用使用的容器节点为某一特定标记元素。而 HTML Entry 的方案则天然能解决这一问题，保留子应用完整的环境上下文，从而确保子应用有良好的开发体验。')]),t._v(" "),s("p",[t._v("HTML Entry 方案下，主框架注册子应用的方式则变成：")]),t._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("framework"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("registerApp")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"subApp1"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("entry")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"//abc.alipay.com/index.html"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v("本质上这里 HTML 充当的是应用静态资源表的角色，在某些场景下，我们也可以将 HTML Entry 的方案优化成 Config Entry，从而减少一次请求，如：")]),t._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("framework"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("registerApp")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"subApp1"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("html")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("scripts")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"//abc.alipay.com/index.js"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("css")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"//abc.alipay.com/index.css"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br")])]),s("p",[t._v("总结一下：")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("App Entry")]),t._v(" "),s("th",[t._v("优点")]),t._v(" "),s("th",[t._v("缺点")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("HTML Entry")]),t._v(" "),s("td",[t._v("1. 子应用开发、发布完全独立"),s("br"),t._v(" 2. 子应用具备与独立应用开发时一致的开发体验")]),t._v(" "),s("td",[t._v("1. 多一次请求，子应用资源解析消耗转移到运行时"),s("br"),t._v(" 2. 主子应用不处于同一个构建环境，无法利用 bundler 的一些构建期的优化能力，如公共依赖抽取等")])]),t._v(" "),s("tr",[s("td",[t._v("JS Entry")]),t._v(" "),s("td",[t._v("主子应用使用同一个 bundler 可方便做构建时优化")]),t._v(" "),s("td",[t._v("1. 子应用的发布需主应用重新打包"),s("br"),t._v(" 2. 主应用需为每个子应用预留一个容器节点，且该节点 id 需与子应用的容器 ID 保持一致"),s("br"),t._v(" 3. 子应用各类资源需一起打成一个 bundle ，资源加载效率变低")])])])]),t._v(" "),s("h4",{attrs:{id:"_3-模块导入"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-模块导入"}},[t._v("#")]),t._v(" 3. 模块导入")]),t._v(" "),s("p",[t._v("微前端架构下，我们需要获取到子应用暴露出的一些钩子引用，如 bootstrap、mount、unmout 等(参考 single-spa)，从而能对接入应用有一个完整的生命周期控制。而由于子应用通常又有集成部署、独立部署两种模式同时支持的需求，使得我们只能选择 umd 这种兼容性的模块格式打包我们的子应用。如何在浏览器运行时获取远程脚本中导出的模块引用也是一个需要解决的问题。")]),t._v(" "),s("p",[t._v("通常我们第一反应的解法，也是最简单的解法就是与子应用与主框架之间约定好一个全局变量，把导出的钩子引用挂载到这个全局变量上，然后主应用从这里面取生命周期函数。")]),t._v(" "),s("p",[t._v("这个方案很好用，但是最大的问题是，主应用与子应用之间存在一种强约定的打包协议。那我们是否能找出一种松耦合的解决方案呢？")]),t._v(" "),s("p",[t._v("很简单，我们只需要走 umd 包格式中的 global export 方式获取子应用的导出即可，大体的思路是通过给 window 变量打标记，记住每次最后添加的全局变量，这个变量一般就是应用 export 后挂载到 global 上的变量。实现方式可以参考 systemjs global import，这里不再赘述。")]),t._v(" "),s("h3",{attrs:{id:"应用隔离"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#应用隔离"}},[t._v("#")]),t._v(" 应用隔离")]),t._v(" "),s("h4",{attrs:{id:"_1-样式隔离"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-样式隔离"}},[t._v("#")]),t._v(" 1. 样式隔离")]),t._v(" "),s("p",[t._v("由于微前端场景下，不同技术栈的子应用会被集成到同一个运行时中，所以我们必须在框架层确保各个子应用之间不会出现样式互相干扰的问题。")]),t._v(" "),s("p",[s("strong",[t._v("Shadow DOM？")]),t._v('\n针对 "Isolated Styles" 这个问题，如果不考虑浏览器兼容性，通常第一个浮现到我们脑海里的方案会是 Web Components。基于 Web Components 的 Shadow DOM 能力，我们可以将每个子应用包裹到一个 Shadow DOM 中，保证其运行时的样式的绝对隔离。\n但 Shadow DOM 方案在工程实践中会碰到一个常见问题，比如我们这样去构建了一个在 Shadow DOM 里渲染的子应用：')]),t._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" shadow "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("querySelector")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"#hostElement"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("attachShadow")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("mode")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"open"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nshadow"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("innerHTML "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('\'<sub-app>Here is some new text</sub-app><link rel="stylesheet" href="//unpkg.com/antd/antd.min.css">\'')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br")])]),s("p",[t._v("由于子应用的样式作用域仅在 shadow 元素下，那么一旦子应用中出现运行时越界跑到外面构建 DOM 的场景，必定会导致构建出来的 DOM 无法应用子应用的样式的情况。")]),t._v(" "),s("p",[t._v("比如 sub-app 里调用了 antd modal 组件，由于 modal 是动态挂载到 document.body 的，而由于 Shadow DOM 的特性 antd 的样式只会在 shadow 这个作用域下生效，结果就是弹出框无法应用到 antd 的样式。解决的办法是把 antd 样式上浮一层，丢到主文档里，但这么做意味着子应用的样式直接泄露到主文档了。")]),t._v(" "),s("p",[s("strong",[t._v("CSS Module? BEM?")]),t._v("\n社区通常的实践是通过约定 css 前缀的方式来避免样式冲突，即各个子应用使用特定的前缀来命名 class，或者直接基于 css module 方案写样式。对于一个全新的项目，这样当然是可行，但是通常微前端架构更多的目标是解决存量/遗产 应用的接入问题。很显然遗产应用通常是很难有动力做大幅改造的。")]),t._v(" "),s("p",[t._v("最主要的是，约定的方式有一个无法解决的问题，假如子应用中使用了三方的组件库，三方库在写入了大量的全局样式的同时又不支持定制化前缀？比如 a 应用引入了 antd 2.x，而 b 应用引入了 antd 3.x，两个版本的 antd 都写入了全局的 .menu class ，但又彼此不兼容怎么办？")]),t._v(" "),s("p",[s("strong",[t._v("Dynamic Stylesheet !")]),t._v("\n解决方案其实很简单，我们只需要在应用切出/卸载后，同时卸载掉其样式表即可，原理是浏览器会对所有的样式表的插入、移除做整个 CSSOM 的重构，从而达到 插入、卸载 样式的目的。这样即能保证，在一个时间点里，只有一个应用的样式表是生效的。")]),t._v(" "),s("p",[t._v("上文提到的 HTML Entry 方案则天生具备样式隔离的特性，因为应用卸载后会直接移除去 HTML 结构，从而自动移除了其样式表。")]),t._v(" "),s("p",[t._v("比如 HTML Entry 模式下，子应用加载完成的后的 DOM 结构可能长这样：")]),t._v(" "),s("div",{staticClass:"language-html line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("html")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("body")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("main")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("id")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("subApp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- 子应用完整的 html 结构  --\x3e")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("link")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("rel")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("stylesheet"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("href")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("//alipay.com/subapp.css"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("id")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("root"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("..."),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("main")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("body")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("html")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br")])]),s("p",[t._v("当子应用被替换或卸载时，subApp 节点的 innerHTML 也会被复写，//alipay.com/subapp.css 也就自然被移除样式也随之卸载了。")]),t._v(" "),s("h3",{attrs:{id:"_2-js-隔离"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-js-隔离"}},[t._v("#")]),t._v(" 2. JS 隔离")]),t._v(" "),s("p",[t._v("解决了样式隔离的问题后，有一个更关键的问题我们还没有解决：如何确保各个子应用之间的全局变量不会互相干扰，从而保证每个子应用之间的软隔离？")]),t._v(" "),s("p",[t._v("这个问题比样式隔离的问题更棘手，社区的普遍玩法是给一些全局副作用加各种前缀从而避免冲突。但其实我们都明白，这种通过团队间的“口头”约定的方式往往低效且易碎，所有依赖人为约束的方案都很难避免由于人的疏忽导致的线上 bug。那么我们是否有可能打造出一个好用的且完全无约束的 JS 隔离方案呢？")]),t._v(" "),s("p",[t._v("针对 JS 隔离的问题，我们独创了一个运行时的 JS 沙箱。简单画了个架构图：\n"),s("img",{attrs:{src:"https://antcloud-cnhz02-athomeweb-01.oss-cn-hzfinance.aliyuncs.com/image/2019-08-26/f9b794e2-24cc-40c8-bd57-7254c93d5908.png",alt:""}}),t._v("\n即在应用的 bootstrap 及 mount 两个生命周期开始之前分别给全局状态打下快照，然后当应用切出/卸载时，将状态回滚至 bootstrap 开始之前的阶段，确保应用对全局状态的污染全部清零。而当应用二次进入时则再恢复至 mount 前的状态的，从而确保应用在 remount 时拥有跟第一次 mount 时一致的全局上下文。")]),t._v(" "),s("p",[t._v("当然沙箱里做的事情还远不止这些，其他的还包括一些对全局事件监听的劫持等，以确保应用在切出之后，对全局事件的监听能得到完整的卸载，同时也会在 remount 时重新监听这些全局事件，从而模拟出与应用独立运行时一致的沙箱环境。")]),t._v(" "),s("h2",{attrs:{id:"蚂蚁金服微前端落地实践"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#蚂蚁金服微前端落地实践"}},[t._v("#")]),t._v(" 蚂蚁金服微前端落地实践")]),t._v(" "),s("p",[t._v("自去年年底伊始，我们便尝试基于微前端架构模式，构建出一套全链路的面向中后台场景的产品接入平台，目的是解决不同产品之间集成困难、流程割裂的问题，希望接入平台后的应用，不论使用哪种技术栈，在运行时都可以通过自定义配置，实现不同应用之间页面级别的自由组合，从而生成一个千人千面的个性化控制台。")]),t._v(" "),s("p",[t._v("目前这套平台已在蚂蚁生产环境运行半年多，同时接入了多个产品线的 40+ 应用、4+ 不同类型的技术栈。过程中针对大量微前端实践中的问题，我们总结出了一套完整的解决方案：\n"),s("img",{attrs:{src:"https://antcloud-cnhz02-athomeweb-01.oss-cn-hzfinance.aliyuncs.com/image/2019-08-26/f44b35de-1d21-45dd-9998-e65cc52c0266.png",alt:""}})]),t._v(" "),s("p",[t._v("qiankun - 一套完整的微前端解决方案")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://github.com/umijs/qiankun",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/umijs/qiankun"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("取名 qiankun，意为统一。我们希望通过 qiankun 这种技术手段，让你能很方便的将一个巨石应用改造成一个基于微前端架构的系统，并且不再需要去关注各种过程中的技术细节，做到真正的开箱即用和生产可用。")]),t._v(" "),s("p",[t._v("对于 umi 用户我们也提供了配套的 qiankun 插件，以便于 umi 应用能几乎零成本的接入 qiankun：\n@umijs/plugin-qiankun")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://github.com/umijs/umi-plugin-qiankun/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/umijs/umi-plugin-qiankun/"),s("OutboundLink")],1)])])}),[],!1,null,null,null);s.default=e.exports}}]);