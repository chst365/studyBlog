(window.webpackJsonp=window.webpackJsonp||[]).push([[92],{419:function(t,v,_){"use strict";_.r(v);var T=_(4),e=Object(T.a)({},(function(){var t=this,v=t._self._c;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("p",[v("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/chst365/bolgImgs/imgs/topImgs/343.jpg",alt:""}})]),t._v(" "),v("h2",{attrs:{id:"http历史"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#http历史"}},[t._v("#")]),t._v(" http历史")]),t._v(" "),v("ul",[v("li",[t._v("1991 发布 HTTP 0.9 版 最简单")]),t._v(" "),v("li",[t._v("1996 发布 HTTP 1.0 版 串输慢")]),t._v(" "),v("li",[t._v("1997 发布 HTTP 1.1 版 传输最广泛的版本")]),t._v(" "),v("li",[t._v("2015 发布 HTTP 2.0 版 优化1.1性能和安全性")]),t._v(" "),v("li",[t._v("2018 发布 HTTP 3.0 版 优化2.0，UDP取代TCP协议")])]),t._v(" "),v("h2",{attrs:{id:"http-0-9-1-0"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#http-0-9-1-0"}},[t._v("#")]),t._v(" HTTP 0.9/1.0")]),t._v(" "),v("p",[t._v("这两个版本，就是最传统的 "),v("code",[t._v("request-response")]),t._v("。\n0.9 版本不支持请求头，只支持 "),v("code",[t._v("GET")]),t._v(" 方法。\n1.0 主要增加了几个变化：")]),t._v(" "),v("ul",[v("li",[t._v("在请求中加入了 HTTP 版本号，如："),v("code",[t._v("GET /coolshell/index.html HTTP/1.0")])]),t._v(" "),v("li",[t._v("HTTP 开始有 header，无论是request还是response都有header")]),t._v(" "),v("li",[t._v("增加了 HTTP Status Code 标识相关的状态码")]),t._v(" "),v("li",[t._v("还有 "),v("code",[t._v("Content-Type")]),t._v(" 可以传输其他的文件了")])]),t._v(" "),v("h3",{attrs:{id:"缺点"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#缺点"}},[t._v("#")]),t._v(" 缺点")]),t._v(" "),v("p",[v("strong",[t._v("每请求一个资源都要新建一个 TCP 链接，而且还是串行请求")]),t._v("。所以，网络变快，打开网页的速度也还是很慢。")]),t._v(" "),v("h2",{attrs:{id:"http-1-1"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#http-1-1"}},[t._v("#")]),t._v(" HTTP/1.1")]),t._v(" "),v("p",[t._v("1.1 主要解决了1.0的网络性能问题，以及增加了一些新东西：")]),t._v(" "),v("ul",[v("li",[t._v("可设置"),v("code",[t._v("keepalive")]),t._v("让HTTP重用TCP链接，可省每次请求都要在广域网进行的TCP的三次握手的巨大开销。这就是"),v("strong",[t._v("HTTP 长链接")]),t._v("或"),v("strong",[t._v("请求响应式的HTTP持久链接")])]),t._v(" "),v("li",[t._v("支持pipeline网络传输。只要第一个请求发出去了，不必等其回来，就可发第二个请求，可减少整体的响应时间（注：非幂等的POST方法或有依赖的请求不能被pipeline化）")]),t._v(" "),v("li",[t._v("支持Chunked Response。在 Response时，不必说明"),v("code",[t._v("Content-Length")]),t._v("，客户端就不能连接，直到收到服务端的EOF标识。这叫"),v("strong",[t._v("服务端Push模型")]),t._v("或"),v("strong",[t._v("服务端Push式的HTTP持久链接")])]),t._v(" "),v("li",[t._v("增加 Cache Control 机制")]),t._v(" "),v("li",[t._v("协议头增加 "),v("code",[t._v("Language、Encoding、Type")]),t._v("等头，让客户端可跟服务器端进行更多的协商")]),t._v(" "),v("li",[t._v("增加 "),v("code",[t._v("HOST")]),t._v(" 头。服务器就知道你要请求哪个网站了，因为可有多个域名解析到同一个IP上，要区分用户请求的哪个域名，就需在HTTP协议中加入域名信息，而不是被DNS转换过的IP信息。")]),t._v(" "),v("li",[t._v("加入 "),v("code",[t._v("OPTIONS")]),t._v(" 方法。主要用于"),v("code",[t._v("CORS-Cross Origin Resource Sharing")]),t._v(" 应用")])]),t._v(" "),v("p",[t._v("1.1 应该分为两个时代，2014年前和2014年后。2014 加入了一组RFC，这组RFC又叫HTTP/2预览版。\n主要是两个大的需求：")]),t._v(" "),v("ul",[v("li",[t._v("加大了HTTP的安全性（使用TLS协议等），使HTTP应用得更广泛")]),t._v(" "),v("li",[t._v("HTTP/1.1 支持四种网络协议：\n"),v("ul",[v("li",[t._v("传统的短链接")]),t._v(" "),v("li",[t._v("可重用TCP的长链接模型")]),t._v(" "),v("li",[t._v("服务端push的模型")]),t._v(" "),v("li",[t._v("WebSocket 模型")])])])]),t._v(" "),v("h2",{attrs:{id:"http-2"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#http-2"}},[t._v("#")]),t._v(" HTTP/2")]),t._v(" "),v("p",[t._v("HTTP/1.1 虽然可重用TCP链接，但请求还是一个一个串行发的，还需保证其顺序。在大量的网页请求中都是些资源类的东西，如果能并行这些请求，可增加更大的网络吞吐和性能。\nHTTP/1.1 传输数据是以文本的方式，借助CPU的zip压缩可减少网络带宽，但耗了前后端的CPU。\n2010 Google搞了一个叫 "),v("a",{attrs:{href:"https://en.wikipedia.org/wiki/SPDY",target:"_blank",rel:"noopener noreferrer"}},[t._v("SPDY"),v("OutboundLink")],1),t._v(" 的协议。后来成了HTTP/2的基础。\nHTTP/2基本上解决了之前的性能问题，与HTTP/1.1最主要的不同是：")]),t._v(" "),v("ul",[v("li",[t._v("HTTP/2 是一个二进制协议。增加了数据传输的效率")]),t._v(" "),v("li",[t._v("HTTP/2 可在一个TCP链接中并发请求多个HTTP请求，移除了HTTP/1.1的串行请求")]),t._v(" "),v("li",[t._v("HTTP/2 会压缩头，若你同时发出多个请求，且它们的头是一样或相似，那协议会帮你消除重复的部分。这就是HPACK算法。")]),t._v(" "),v("li",[t._v("HTTP/2 允许服务端在客户端放 cache，叫服务端push。即你没有请求的东西，我服务端可先送给你放在你本地的缓存中。")])]),t._v(" "),v("h2",{attrs:{id:"http-3"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#http-3"}},[t._v("#")]),t._v(" HTTP/3")]),t._v(" "),v("p",[t._v("HTTP/2 也并不是完美的，其主要的问题若干个HTTP请求复用一个TCP链接，底层的TCP协议不知道上层有个多少个HTTP请求，所以，一旦发生丢包，就会导致所有的HTTP请求都必须等待这个丢了的包被重传回来，哪怕丢的包不是我这个HTTP请求的。\n这个问题又叫Head-of-Line Blocking，也是一个经典的流量调度问题，这个问题最早主要发生在交换机上。")]),t._v(" "),v("p",[t._v("HTTP/1.1中的pipeline中如果有一个请求block了，那么队列后请求也统统被block住了；HTTP/2 多请求复用一个TCP连接，一旦发生丢包，就会block住所有的HTTP请求。这样的问题很讨厌。好像基本无解了。\n是的TCP是无解了，但是UDP是有解的。于是，"),v("strong",[t._v("HTTP/3 将TCP协议改成了UDP")])]),t._v(" "),v("p",[t._v("然后又是 Google 家的协议 QUIC 进入了标准。下面带着问题看看 QUIC 协议的几个重要特性：")]),t._v(" "),v("ul",[v("li",[t._v("Head-of-Line Blocking 问题在 UDP 的世界是不存在的，因为UDP不管顺序，不管丢包（QUIC有自己的丢包重传机制）")]),t._v(" "),v("li",[t._v("在TCP协议里，如果网络上出现拥塞，大家都会丢包，于是大家都会进入拥塞控制的算法中，进入一个慢启动的过程，包括TCP链接建立时。以前TCP 的拥塞算法玩的是数学模型，而新型的TCP拥塞算法是以BBR为代表的测量模型。QUIC 刚开始用的是CUBIC（BBR刚开始不是很成熟），之后也是用的BBR")]),t._v(" "),v("li",[t._v("建立一个HTTPS连接，需六次握手（TCP三次，TLS三次），但QUIC直接把TCP和TLS的合并成三次握手（在HTTP/2时，是否默认开启TLS在业内是又争议的，反派说，TLS在一些情况下是不需要的，如企业内网，而支持派说TLS的那些开销小）\n"),v("img",{attrs:{src:"https://coolshell.cn/wp-content/uploads/2019/10/http-request-over-tcp-tls@2x-292x300.png",alt:""}}),t._v(" "),v("img",{attrs:{src:"https://coolshell.cn/wp-content/uploads/2019/10/http-request-over-quic@2x-300x215.png",alt:""}})])]),t._v(" "),v("p",[t._v("所以，QUIC是一个在UDP上的伪TCP+TLS+HTTP/2的多路复用协议。")]),t._v(" "),v("p",[t._v("对于UDP还是有一些挑战的：")]),t._v(" "),v("ul",[v("li",[t._v("如在NAT环境下，若是TCP，NAT路由或代理服务器可通过记录TCP的四元组（源地址、源端口、目标地址、目标端口）来做连接映射，然而，UDP是不行的。于是QUIC引入了connection id来标识一个连接，但是还是会有问题，如一些等价路由交换机，它们只认四元组不认connection id。这导致属于同一个connection id但是四元组不同的网络包就转到了不同的服务器上，这就导致数据不能传到同一台服务器上，数据不完整，链接只能断了。所以，你需要更聪明的算法。")]),t._v(" "),v("li",[t._v("HTTP/2 的头压缩算法HPACK。HPACK需维护一个动态的字典表来分析请求的头中哪些是重复的，HPACK的这个数据结构需在encoder和decoder端同步这个东西。在TCP上，这种同步是透明的，然而在UDP上这个事不好干了。于是，基于QUIC的QPACK就出来了，利用两个附加的QUIC steam，一个用来发送这个字典表的更新给对方，另一个用来ack对方发过来的update。")])])])}),[],!1,null,null,null);v.default=e.exports}}]);