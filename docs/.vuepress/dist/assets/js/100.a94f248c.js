(window.webpackJsonp=window.webpackJsonp||[]).push([[100],{459:function(e,s,t){"use strict";t.r(s);var a=t(9),n=Object(a.a)({},(function(){var e=this,s=e._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("p",[s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/chst365/bolgImgs/imgs/topImgs/433.jpg",alt:""}}),e._v("\nHTTP 协议有一个缺陷：通信只能有客户端发起。这种单向请求的特点，在服务器有连续状态变化需通知客户端的场景中，我们就只能轮询：每隔一段时间，就发出一个询问，了解服务器最新的信息状态。如聊天室。\n轮询的效率低，且浪费资源，于是 websocket就出现了。")]),e._v(" "),s("h2",{attrs:{id:"websocket-协议"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#websocket-协议"}},[e._v("#")]),e._v(" websocket 协议")]),e._v(" "),s("p",[e._v("websocket 是web浏览器和服务器间的一种全双工通信协议。\n由IETF定协议标准，API由W3C定。\n一旦连接建立，之后的全部数据通信都通过这个连接进行。\n可互相发送JSON、XML、HTML后图片等任意格式的数据。")]),e._v(" "),s("h3",{attrs:{id:"ws-vs-http"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ws-vs-http"}},[e._v("#")]),e._v(" WS VS HTTP")]),e._v(" "),s("h4",{attrs:{id:"相同点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#相同点"}},[e._v("#")]),e._v(" 相同点")]),e._v(" "),s("ul",[s("li",[e._v("都是基于TCP的应用层协议")]),e._v(" "),s("li",[e._v("是使用Request/Response模型建立的连接")]),e._v(" "),s("li",[e._v("在连接建立过程中错误的处理方式相同，即WS返回和HTTP相同的返回码")]),e._v(" "),s("li",[e._v("都可以在网络中传输数据")])]),e._v(" "),s("h4",{attrs:{id:"不同点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#不同点"}},[e._v("#")]),e._v(" 不同点")]),e._v(" "),s("ul",[s("li",[e._v("WS使用HTTP来建立连接，定义了一系列新的header，HTTP不适用")]),e._v(" "),s("li",[e._v("WS 的连接不能通过中间人转发，必须是一个直接连接")]),e._v(" "),s("li",[e._v("WS 连接建立后，双方都可在任何时刻向对方发送数据")]),e._v(" "),s("li",[e._v("WS 连接建立后，数据使用帧来传递，不再需要Request消息")]),e._v(" "),s("li",[e._v("WS 的数据帧有序")])]),e._v(" "),s("h2",{attrs:{id:"websocket-通信过程及对应报文分析"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#websocket-通信过程及对应报文分析"}},[e._v("#")]),e._v(" websocket 通信过程及对应报文分析")]),e._v(" "),s("p",[e._v("WS 整个通信过程如下图：")]),e._v(" "),s("p",[s("img",{attrs:{src:"https://img-blog.csdnimg.cn/20200527233222508.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L0xMODQ1ODc2NDI1,size_16,color_FFFFFF,t_70",alt:""}}),e._v(" "),s("img",{attrs:{src:"https://img-blog.csdnimg.cn/20200527233246458.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L0xMODQ1ODc2NDI1,size_16,color_FFFFFF,t_70",alt:""}}),e._v("\nwebsocket是基于TCP的一个应用协议，与HTTP协议的关联之处在于websocket的握手数据被HTTP服务器当作HTTP包来处理，主要通过Update request HTTP包建立起连接，之后的通信全部使用websocket自己的协议。\nTCP连接建立后，客户端发送websocket的握手请求，请求报文头部如下：")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("GET /uin=xxxxxxxx&app=xxxxxxxxx&token=XXXXXXXXXXXX HTTP/1.1\nHost: server.example.cn:443\nConnection: Upgrade\nPragma: no-cache\nCache-Control: no-cache\nUser-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.138 Safari/537.36\nUpgrade: websocket\nSec-WebSocket-Version: 13\nAccept-Encoding: gzip, deflate\nAccept-Language: zh-CN,zh;q=0.9\nCookie: user_id=XXXXX\nSec-WebSocket-Key: 1/2hTi/+eNURiekpNI4k5Q==\nSec-WebSocket-Extensions: permessage-deflate; client_max_window_bits\nSec-WebSocket-Protocol: binary, base64\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br"),s("span",{staticClass:"line-number"},[e._v("9")]),s("br"),s("span",{staticClass:"line-number"},[e._v("10")]),s("br"),s("span",{staticClass:"line-number"},[e._v("11")]),s("br"),s("span",{staticClass:"line-number"},[e._v("12")]),s("br"),s("span",{staticClass:"line-number"},[e._v("13")]),s("br"),s("span",{staticClass:"line-number"},[e._v("14")]),s("br")])]),s("ul",[s("li",[e._v("第一行为为请求的方法，类型必须为GET，协议版本号必须大于1.1")]),e._v(" "),s("li",[e._v("Upgrade字段必须包含，值为websocket")]),e._v(" "),s("li",[e._v("Connection字段必须包含，值为Upgrade")]),e._v(" "),s("li",[e._v("Sec-WebSocket-Key字段必须包含 ，记录着握手过程中必不可少的键值。")]),e._v(" "),s("li",[e._v("Sec-WebSocket-Protocol字段必须包含 ，记录着使用的子协议")]),e._v(" "),s("li",[e._v("Origin（请求头）：Origin用来指明请求的来源，Origin头部主要用于保护Websocket服务器免受非授权的跨域脚本调用Websocket API的请求。也就是不想没被授权的跨域访问与服务器建立连接，服务器可以通过这个字段来判断来源的域并有选择的拒绝。")])]),e._v(" "),s("p",[s("img",{attrs:{src:"https://img-blog.csdnimg.cn/20200527233303721.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L0xMODQ1ODc2NDI1,size_16,color_FFFFFF,t_70",alt:""}})]),e._v(" "),s("p",[e._v("服务器接收到请求后，返回状态码为101 Switching Protocols 的响应")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("HTTP/1.1 101 Switching Protocols\nServer: WebSockify Python/2.6.6\nDate: Wed, 27 May 2020 03:03:21 GMT\nUpgrade: websocket\nConnection: Upgrade\nSec-WebSocket-Accept: hXXXXXXXXXXXXXXxGmM=\nSec-WebSocket-Protocol: binary\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br")])]),s("p",[s("img",{attrs:{src:"https://img-blog.csdnimg.cn/20200527233326813.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L0xMODQ1ODc2NDI1,size_16,color_FFFFFF,t_70",alt:""}})]),e._v(" "),s("p",[e._v("Sec-WebSocket-Accept字段是由握手请求中的Sec-WebSocket-Key字段生层的。")]),e._v(" "),s("p",[e._v("握手成功后，通信不再使用HTTP协议，而采用WebSocket独立的数据帧。如下图所示，为协议帧格式:\n"),s("img",{attrs:{src:"https://img-blog.csdnimg.cn/20200527233345809.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L0xMODQ1ODc2NDI1,size_16,color_FFFFFF,t_70",alt:""}})]),e._v(" "),s("h2",{attrs:{id:"nginx-支持websocket-配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#nginx-支持websocket-配置"}},[e._v("#")]),e._v(" nginx 支持websocket 配置")]),e._v(" "),s("p",[e._v("由于http 请求 涉及 反向代理 所以就涉及 nginx 配置需要支持 websocket 需要做一些特殊的配置；")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('# 配置Nginx支持webSocket开始\nproxy_set_header Host $http_host;\nproxy_http_version 1.1;\nproxy_set_header Upgrade $http_upgrade;\nproxy_set_header Connection "upgrade";\n')])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br")])])])}),[],!1,null,null,null);s.default=n.exports}}]);