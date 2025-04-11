(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{402:function(v,_,l){"use strict";l.r(_);var i=l(9),t=Object(i.a)({},(function(){var v=this,_=v._self._c;return _("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[_("p",[_("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/chst365/bolgImgs/imgs/topImgs/302.jpg",alt:""}})]),v._v(" "),_("h2",{attrs:{id:"白屏时间"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#白屏时间"}},[v._v("#")]),v._v(" 白屏时间")]),v._v(" "),_("p",[v._v("即用户点击一个链接或打开浏览器输入 URL 地址后，从屏幕空白到显示第一个画面的时间（首屏渲染时间）")]),v._v(" "),_("h2",{attrs:{id:"白屏是一个怎样的过程"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#白屏是一个怎样的过程"}},[v._v("#")]),v._v(" 白屏是一个怎样的过程")]),v._v(" "),_("ol",[_("li",[_("p",[v._v("DNS Lookup")]),v._v(" "),_("ul",[_("li",[v._v("浏览器从 DNS 服务器中进行域名查询")]),v._v(" "),_("li",[v._v("浏览器会先对页面进行域名解析，获取服务器的 IP 地址后，进而和服务器进行通信")]),v._v(" "),_("li",[v._v("通常在整个加载页面的过程中，浏览器会多次进行 DNS Lookup，包括页面本身的域名查询以及在解析 HTML 页面时加载的 JS、CSS、Image、Video 等资源产生的域名查询")])])]),v._v(" "),_("li",[_("p",[v._v("建立 TCP 请求连接")]),v._v(" "),_("ul",[_("li",[v._v("浏览器和服务端 TCP 请求建立的过程，是基于 TCP/IP，该协议由网络层的 IP 和传输层的 TCP 组成。")]),v._v(" "),_("li",[v._v("IP 是每一台互联网设备在互联网中的唯一地址")]),v._v(" "),_("li",[v._v("TCP 通过三次握手建立连接，并提供可靠的数据传输服务")])])]),v._v(" "),_("li",[_("p",[v._v("服务端请求处理响应")]),v._v(" "),_("ul",[_("li",[v._v("在 TCP 连接建立后，web 服务器接受请求，开始进行处理，同时浏览器端开始等待服务器的处理响应")]),v._v(" "),_("li",[v._v("web 服务器根据请求类型的不同，进行相应的处理。静态资源直接进行响应；如其他注册的请求转发给相应的应用服务器，进行如数据处理、缓存中取数据，将数据按照定好的格式响应给浏览器")]),v._v(" "),_("li",[v._v("在大型应用中，通常为分布式服务架构，应用服务器的处理有可能经过很多个系统的中间件，最终获取到需要的数据")])])]),v._v(" "),_("li",[_("p",[v._v("客户端下载、解析、渲染显示页面")]),v._v(" "),_("ul",[_("li",[v._v("在服务器返回数据后，客户端浏览器接收数据，进行 HTML 下载、解析、渲染显示\n"),_("ul",[_("li",[v._v("如果是 Gzip 包，则先解压为 HTML")]),v._v(" "),_("li",[v._v("解析 HTML 的头部代码，下载头部代码中的样式资源文件或脚本文件")]),v._v(" "),_("li",[v._v("解析 HTML 代码和样式文件代码，构建 HTML 的 DOM 树及 CSS 相关的 CSSOM 树")]),v._v(" "),_("li",[v._v("通过遍历 DOM 树和 CSSOM 树，浏览器依次计算每个节点的大小、坐标、颜色等样式，构造渲染树")]),v._v(" "),_("li",[v._v("根据渲染树完成绘制过程")])])]),v._v(" "),_("li",[v._v("浏览器安全解析策略对解析 HTML 造成的影响\n"),_("ul",[_("li",[v._v("当解析 HTML 时遇到内联的 JS 代码，会阻塞 DOM 树的构建")]),v._v(" "),_("li",[v._v("当 CSS 样式文件没下载完，浏览器解析 HTML 遇到了内联 JS 代码时，浏览器暂停 JS 脚本执行，暂停 HTML 解析。直到 CSS 文件下载完，完成 CSSOM 树构建，重新恢复原来的解析")])])])])])]),v._v(" "),_("h2",{attrs:{id:"白屏-性能优化"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#白屏-性能优化"}},[v._v("#")]),v._v(" 白屏-性能优化")]),v._v(" "),_("ol",[_("li",[v._v("DNS 解析优化\n"),_("ul",[_("li",[v._v("DNS 缓存优化")]),v._v(" "),_("li",[v._v("DNS 预加载策略")]),v._v(" "),_("li",[v._v("稳定可靠的 DNS 服务器")])])]),v._v(" "),_("li",[v._v("TCP 网络链路优化\n"),_("ul",[_("li",[v._v("针对网络链路的优化，好像除了花钱没有什么更好的方式")])])]),v._v(" "),_("li",[v._v("服务端处理优化\n"),_("ul",[_("li",[v._v("Redis 缓存、数据库存储优化、系统内的各种中间件以及 Gzip 压缩等")])])]),v._v(" "),_("li",[v._v("浏览器下载、解析、渲染页面优化\n"),_("ul",[_("li",[v._v("尽可能的精简 HTML 的代码和结构")]),v._v(" "),_("li",[v._v("尽可能的优化 CSS 文件和结构")]),v._v(" "),_("li",[v._v("一定要合理的放置 JS 代码，尽量不要使用内联的 JS 代码")])])])])])}),[],!1,null,null,null);_.default=t.exports}}]);