(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{475:function(t,e,r){"use strict";r.r(e);var a=r(18),s=Object(a.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("p",[r("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/chst365/bolgImgs/imgs/topImgs/376.jpg",alt:""}})]),t._v(" "),r("h2",{attrs:{id:"response-事件处理最好在-50ms-内完成"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#response-事件处理最好在-50ms-内完成"}},[t._v("#")]),t._v(" Response: 事件处理最好在 50ms 内完成")]),t._v(" "),r("h3",{attrs:{id:"目标"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#目标"}},[t._v("#")]),t._v(" 目标")]),t._v(" "),r("ul",[r("li",[t._v("用户的输入到响应的时间不超过 100ms")])]),t._v(" "),r("h3",{attrs:{id:"优化方案"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#优化方案"}},[t._v("#")]),t._v(" 优化方案")]),t._v(" "),r("ul",[r("li",[t._v("事件处理函数在 50ms 内完成，考虑到 idle task 的情况，事件会排队，等待时间大概 50ms。适用于 click,toggle,starting animations 等，不适应于 drag 和 scroll")]),t._v(" "),r("li",[t._v("复杂的 js 计算尽可能放在后台，如 web worker，避免对用户输入造成阻塞")]),t._v(" "),r("li",[t._v("超过 50ms 的响应，一定要提供反馈，如倒计时，进度百分比等\n"),r("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2020/7/13/173489db13875e5b?imageView2/0/w/1280/h/960/format/webp/ignore-error/1",alt:""}})])]),t._v(" "),r("h2",{attrs:{id:"animation-在-10ms-内产生一帧"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#animation-在-10ms-内产生一帧"}},[t._v("#")]),t._v(" Animation: 在 10ms 内产生一帧")]),t._v(" "),r("h3",{attrs:{id:"目标-2"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#目标-2"}},[t._v("#")]),t._v(" 目标")]),t._v(" "),r("ul",[r("li",[t._v("产生每一帧的时间不要超过 10ms，为保证浏览器 60 帧，每一帧的时间在 16ms 左右，但浏览器需 6ms 渲染每一帧")]),t._v(" "),r("li",[t._v("旨在视觉平滑")])]),t._v(" "),r("h3",{attrs:{id:"优化方案-2"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#优化方案-2"}},[t._v("#")]),t._v(" 优化方案")]),t._v(" "),r("ul",[r("li",[t._v("cpu 尽可能地少做事，如取 offset,设置 style 等操作。尽可能保证 60 帧体验")]),t._v(" "),r("li",[t._v("在渲染性能上，针对不同动画做一些特定优化")])]),t._v(" "),r("h2",{attrs:{id:"idle-最大化空闲时间"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#idle-最大化空闲时间"}},[t._v("#")]),t._v(" Idle: 最大化空闲时间")]),t._v(" "),r("h3",{attrs:{id:"目标-3"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#目标-3"}},[t._v("#")]),t._v(" 目标")]),t._v(" "),r("ul",[r("li",[t._v("最大化空闲时间，以增大 50ms 内响应用户输入的几率")])]),t._v(" "),r("h3",{attrs:{id:"优化方案-3"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#优化方案-3"}},[t._v("#")]),t._v(" 优化方案")]),t._v(" "),r("ul",[r("li",[t._v("用空闲时间来完成一些延后的工作，如先加载页面可见的部分，然后利用空闲时间加载剩余部分"),r("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/API/Window/requestIdleCallback",target:"_blank",rel:"noopener noreferrer"}},[t._v("requestldleCallback"),r("OutboundLink")],1)]),t._v(" "),r("li",[t._v("在空闲时间内执行的任务尽量控制在 50ms 内，如果更惨，会影响 input handle 的 pending 时间")]),t._v(" "),r("li",[t._v("若用户在空闲时间任务进行时进行交互，必须以此为最高优先级，并暂停空闲时间的任务")])]),t._v(" "),r("h2",{attrs:{id:"load-传输内容到页面可交互的时间不超过-5s"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#load-传输内容到页面可交互的时间不超过-5s"}},[t._v("#")]),t._v(" Load: 传输内容到页面可交互的时间不超过 5s")]),t._v(" "),r("h3",{attrs:{id:"目标-4"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#目标-4"}},[t._v("#")]),t._v(" 目标")]),t._v(" "),r("ul",[r("li",[t._v("优化加载速度，可根据设备、网络等条件。如用户在 3G 网络手机上打开页面时间不超过 5s")]),t._v(" "),r("li",[t._v("对于第二次打开，尽量不超过 2s")])]),t._v(" "),r("h3",{attrs:{id:"优化方案-4"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#优化方案-4"}},[t._v("#")]),t._v(" 优化方案")]),t._v(" "),r("ul",[r("li",[t._v("在手机设备上测试加载性能，选用中配的 3G（400kb/s,400ms RTT）网络,可使用"),r("a",{attrs:{href:"https://www.webpagetest.org/easy",target:"_blank",rel:"noopener noreferrer"}},[t._v("WebPageTest"),r("OutboundLink")],1),t._v("来测试")]),t._v(" "),r("li",[t._v("即使用户使用的是 4G，也会有丢包或网络波动的情况，可能会比预期的更慢")]),t._v(" "),r("li",[t._v("可采用"),r("a",{attrs:{href:"https://web.dev/native-lazy-loading/",target:"_blank",rel:"noopener noreferrer"}},[t._v("lazy load"),r("OutboundLink")],1),t._v(","),r("a",{attrs:{href:"https://web.dev/reduce-javascript-payloads-with-code-splitting/",target:"_blank",rel:"noopener noreferrer"}},[t._v("code-splitting"),r("OutboundLink")],1),t._v("等"),r("a",{attrs:{href:"https://web.dev/fast/",target:"_blank",rel:"noopener noreferrer"}},[t._v("其他优化"),r("OutboundLink")],1),t._v("手段，让第一次加载的资源更少")])]),t._v(" "),r("h2",{attrs:{id:"分析-rail-的工具"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#分析-rail-的工具"}},[t._v("#")]),t._v(" 分析 RAIL 的工具")]),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://developers.google.com/web/tools/chrome-devtools",target:"_blank",rel:"noopener noreferrer"}},[t._v("Chrome DevTools"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://web.dev/measure/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Lighthouse"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://webpagetest.org/easy",target:"_blank",rel:"noopener noreferrer"}},[t._v("WebPageTest"),r("OutboundLink")],1)])])])}),[],!1,null,null,null);e.default=s.exports}}]);