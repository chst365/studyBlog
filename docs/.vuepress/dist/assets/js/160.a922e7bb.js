(window.webpackJsonp=window.webpackJsonp||[]).push([[160],{520:function(t,s,a){"use strict";a.r(s);var e=a(9),n=Object(e.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p",[s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/chst365/bolgImgs/imgs/topImgs/211.jpg",alt:""}})]),t._v(" "),s("h1",{attrs:{id:"面试官-web常见的攻击方式有哪些-如何防御"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#面试官-web常见的攻击方式有哪些-如何防御"}},[t._v("#")]),t._v(" 面试官：web常见的攻击方式有哪些？如何防御？")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://static.vue-js.com/d0892930-8d1d-11eb-ab90-d9ae814b240d.png",alt:""}})]),t._v(" "),s("h2",{attrs:{id:"一、是什么"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#一、是什么"}},[t._v("#")]),t._v(" 一、是什么")]),t._v(" "),s("p",[t._v("Web攻击（WebAttack）是针对用户上网行为或网站服务器等设备进行攻击的行为")]),t._v(" "),s("p",[t._v("如植入恶意代码，修改网站权限，获取网站用户隐私信息等等")]),t._v(" "),s("p",[t._v("Web应用程序的安全性是任何基于Web业务的重要组成部分")]),t._v(" "),s("p",[t._v("确保Web应用程序安全十分重要，即使是代码中很小的 bug 也有可能导致隐私信息被泄露")]),t._v(" "),s("p",[t._v("站点安全就是为保护站点不受未授权的访问、使用、修改和破坏而采取的行为或实践")]),t._v(" "),s("p",[t._v("我们常见的Web攻击方式有")]),t._v(" "),s("ul",[s("li",[t._v("XSS (Cross Site Scripting) 跨站脚本攻击")]),t._v(" "),s("li",[t._v("CSRF（Cross-site request forgery）跨站请求伪造")]),t._v(" "),s("li",[t._v("SQL注入攻击")])]),t._v(" "),s("h2",{attrs:{id:"二、xss"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#二、xss"}},[t._v("#")]),t._v(" 二、XSS")]),t._v(" "),s("p",[t._v("XSS，跨站脚本攻击，允许攻击者将恶意代码植入到提供给其它用户使用的页面中")]),t._v(" "),s("p",[s("code",[t._v("XSS")]),t._v("涉及到三方，即攻击者、客户端与"),s("code",[t._v("Web")]),t._v("应用")]),t._v(" "),s("p",[s("code",[t._v("XSS")]),t._v("的攻击目标是为了盗取存储在客户端的"),s("code",[t._v("cookie")]),t._v("或者其他网站用于识别客户端身份的敏感信息。一旦获取到合法用户的信息后，攻击者甚至可以假冒合法用户与网站进行交互")]),t._v(" "),s("p",[t._v("举个例子：")]),t._v(" "),s("p",[t._v("一个搜索页面，根据"),s("code",[t._v("url")]),t._v("参数决定关键词的内容")]),t._v(" "),s("div",{staticClass:"language-html line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("input")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("type")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("text"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("value")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("<%= getParameter("),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v('keyword")')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("%")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v('">\n'),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("button")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("搜索"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("button")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v('\n  您搜索的关键词是：<%= getParameter("keyword") %>\n'),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br")])]),s("p",[t._v("这里看似并没有问题，但是如果不按套路出牌呢？")]),t._v(" "),s("p",[t._v("用户输入"),s("code",[t._v("\"><script>alert('XSS');<\/script>")]),t._v("，拼接到 HTML 中返回给浏览器。形成了如下的 HTML：")]),t._v(" "),s("div",{staticClass:"language-html line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("input")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("type")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("text"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("value")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token script"}},[s("span",{pre:!0,attrs:{class:"token language-javascript"}},[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("alert")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'XSS'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v('">\n'),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("button")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("搜索"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("button")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v('\n  您搜索的关键词是：">'),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token script"}},[s("span",{pre:!0,attrs:{class:"token language-javascript"}},[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("alert")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'XSS'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br")])]),s("p",[t._v("浏览器无法分辨出 "),s("code",[t._v("<script>alert('XSS');<\/script>")]),t._v(" 是恶意代码，因而将其执行，试想一下，如果是获取"),s("code",[t._v("cookie")]),t._v("发送对黑客服务器呢？")]),t._v(" "),s("p",[t._v("根据攻击的来源，"),s("code",[t._v("XSS")]),t._v("攻击可以分成：")]),t._v(" "),s("ul",[s("li",[t._v("存储型")]),t._v(" "),s("li",[t._v("反射型")]),t._v(" "),s("li",[t._v("DOM 型")])]),t._v(" "),s("h3",{attrs:{id:"存储型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#存储型"}},[t._v("#")]),t._v(" 存储型")]),t._v(" "),s("p",[t._v("存储型 XSS 的攻击步骤：")]),t._v(" "),s("ol",[s("li",[t._v("攻击者将恶意代码提交到目标网站的数据库中")]),t._v(" "),s("li",[t._v("用户打开目标网站时，网站服务端将恶意代码从数据库取出，拼接在 HTML 中返回给浏览器")]),t._v(" "),s("li",[t._v("用户浏览器接收到响应后解析执行，混在其中的恶意代码也被执行")]),t._v(" "),s("li",[t._v("恶意代码窃取用户数据并发送到攻击者的网站，或者冒充用户的行为，调用目标网站接口执行攻击者指定的操作")])]),t._v(" "),s("p",[t._v("这种攻击常见于带有用户保存数据的网站功能，如论坛发帖、商品评论、用户私信等")]),t._v(" "),s("h3",{attrs:{id:"反射型-xss"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#反射型-xss"}},[t._v("#")]),t._v(" 反射型 XSS")]),t._v(" "),s("p",[t._v("反射型 XSS 的攻击步骤：")]),t._v(" "),s("ol",[s("li",[t._v("攻击者构造出特殊的 URL，其中包含恶意代码")]),t._v(" "),s("li",[t._v("用户打开带有恶意代码的 URL 时，网站服务端将恶意代码从 URL 中取出，拼接在 HTML 中返回给浏览器")]),t._v(" "),s("li",[t._v("用户浏览器接收到响应后解析执行，混在其中的恶意代码也被执行")]),t._v(" "),s("li",[t._v("恶意代码窃取用户数据并发送到攻击者的网站，或者冒充用户的行为，调用目标网站接口执行攻击者指定的操作")])]),t._v(" "),s("p",[t._v("反射型 XSS 跟存储型 XSS 的区别是：存储型 XSS 的恶意代码存在数据库里，反射型 XSS 的恶意代码存在 URL 里。")]),t._v(" "),s("p",[t._v("反射型 XSS 漏洞常见于通过 URL 传递参数的功能，如网站搜索、跳转等。")]),t._v(" "),s("p",[t._v("由于需要用户主动打开恶意的 URL 才能生效，攻击者往往会结合多种手段诱导用户点击。")]),t._v(" "),s("p",[t._v("POST 的内容也可以触发反射型 XSS，只不过其触发条件比较苛刻（需要构造表单提交页面，并引导用户点击），所以非常少见")]),t._v(" "),s("h3",{attrs:{id:"dom-型-xss"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#dom-型-xss"}},[t._v("#")]),t._v(" DOM 型 XSS")]),t._v(" "),s("p",[t._v("DOM 型 XSS 的攻击步骤：")]),t._v(" "),s("ol",[s("li",[t._v("攻击者构造出特殊的 URL，其中包含恶意代码")]),t._v(" "),s("li",[t._v("用户打开带有恶意代码的 URL")]),t._v(" "),s("li",[t._v("用户浏览器接收到响应后解析执行，前端 JavaScript 取出 URL 中的恶意代码并执行")]),t._v(" "),s("li",[t._v("恶意代码窃取用户数据并发送到攻击者的网站，或者冒充用户的行为，调用目标网站接口执行攻击者指定的操作")])]),t._v(" "),s("p",[t._v("DOM 型 XSS 跟前两种 XSS 的区别：DOM 型 XSS 攻击中，取出和执行恶意代码由浏览器端完成，属于前端 JavaScript 自身的安全漏洞，而其他两种 XSS 都属于服务端的安全漏洞")]),t._v(" "),s("h3",{attrs:{id:"xss的预防"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#xss的预防"}},[t._v("#")]),t._v(" XSS的预防")]),t._v(" "),s("p",[t._v("通过前面介绍，看到"),s("code",[t._v("XSS")]),t._v("攻击的两大要素：")]),t._v(" "),s("ul",[s("li",[t._v("攻击者提交而恶意代码")]),t._v(" "),s("li",[t._v("浏览器执行恶意代码")])]),t._v(" "),s("p",[t._v("针对第一个要素，我们在用户输入的过程中，过滤掉用户输入的恶劣代码，然后提交给后端，但是如果攻击者绕开前端请求，直接构造请求就不能预防了")]),t._v(" "),s("p",[t._v("而如果在后端写入数据库前，对输入进行过滤，然后把内容给前端，但是这个内容在不同地方就会有不同显示")]),t._v(" "),s("p",[t._v("例如：")]),t._v(" "),s("p",[t._v("一个正常的用户输入了 "),s("code",[t._v("5 < 7")]),t._v(" 这个内容，在写入数据库前，被转义，变成了 "),s("code",[t._v("5 < 7")])]),t._v(" "),s("p",[t._v("在客户端中，一旦经过了 "),s("code",[t._v("escapeHTML()")]),t._v("，客户端显示的内容就变成了乱码( "),s("code",[t._v("5 < 7")]),t._v(" )")]),t._v(" "),s("p",[t._v("在前端中，不同的位置所需的编码也不同。")]),t._v(" "),s("ul",[s("li",[t._v("当 "),s("code",[t._v("5 < 7")]),t._v(" 作为 HTML 拼接页面时，可以正常显示：")])]),t._v(" "),s("div",{staticClass:"language-html line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("title")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("comment"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("5 "),s("span",{pre:!0,attrs:{class:"token entity named-entity",title:"<"}},[t._v("&lt;")]),t._v(" 7"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("ul",[s("li",[t._v("当 "),s("code",[t._v("5 < 7")]),t._v(" 通过 Ajax 返回，然后赋值给 JavaScript 的变量时，前端得到的字符串就是转义后的字符。这个内容不能直接用于 Vue 等模板的展示，也不能直接用于内容长度计算。不能用于标题、alert 等")])]),t._v(" "),s("p",[t._v("可以看到，过滤并非可靠的，下面就要通过防止浏览器执行恶意代码：")]),t._v(" "),s("p",[t._v("在使用 "),s("code",[t._v(".innerHTML")]),t._v("、"),s("code",[t._v(".outerHTML")]),t._v("、"),s("code",[t._v("document.write()")]),t._v(" 时要特别小心，不要把不可信的数据作为 HTML 插到页面上，而应尽量使用 "),s("code",[t._v(".textContent")]),t._v("、"),s("code",[t._v(".setAttribute()")]),t._v(" 等")]),t._v(" "),s("p",[t._v("如果用 "),s("code",[t._v("Vue/React")]),t._v(" 技术栈，并且不使用 "),s("code",[t._v("v-html")]),t._v("/"),s("code",[t._v("dangerouslySetInnerHTML")]),t._v(" 功能，就在前端 "),s("code",[t._v("render")]),t._v(" 阶段避免 "),s("code",[t._v("innerHTML")]),t._v("、"),s("code",[t._v("outerHTML")]),t._v(" 的 XSS 隐患")]),t._v(" "),s("p",[t._v("DOM 中的内联事件监听器，如 "),s("code",[t._v("location")]),t._v("、"),s("code",[t._v("onclick")]),t._v("、"),s("code",[t._v("onerror")]),t._v("、"),s("code",[t._v("onload")]),t._v("、"),s("code",[t._v("onmouseover")]),t._v(" 等，"),s("code",[t._v("<a>")]),t._v(" 标签的 "),s("code",[t._v("href")]),t._v(" 属性，JavaScript 的 "),s("code",[t._v("eval()")]),t._v("、"),s("code",[t._v("setTimeout()")]),t._v("、"),s("code",[t._v("setInterval()")]),t._v(" 等，都能把字符串作为代码运行。如果不可信的数据拼接到字符串中传递给这些 API，很容易产生安全隐患，请务必避免")]),t._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v(" 链接内包含恶意代码 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" a href"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('" "')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" a"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("script"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// setTimeout()/setInterval() 中调用恶意代码")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setTimeout")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"UNTRUSTED"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setInterval")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"UNTRUSTED"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// location 调用恶意代码")]),t._v("\nlocation"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("href "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'UNTRUSTED'")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// eval() 中调用恶意代码")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("eval")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"UNTRUSTED"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br")])]),s("h2",{attrs:{id:"三、csrf"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#三、csrf"}},[t._v("#")]),t._v(" 三、CSRF")]),t._v(" "),s("p",[t._v("CSRF（Cross-site request forgery）跨站请求伪造：攻击者诱导受害者进入第三方网站，在第三方网站中，向被攻击网站发送跨站请求")]),t._v(" "),s("p",[t._v("利用受害者在被攻击网站已经获取的注册凭证，绕过后台的用户验证，达到冒充用户对被攻击的网站执行某项操作的目")]),t._v(" "),s("p",[t._v("一个典型的CSRF攻击有着如下的流程：")]),t._v(" "),s("ul",[s("li",[t._v("受害者登录a.com，并保留了登录凭证（Cookie）")]),t._v(" "),s("li",[t._v("攻击者引诱受害者访问了b.com")]),t._v(" "),s("li",[t._v("b.com 向 a.com 发送了一个请求：a.com/act=xx。浏览器会默认携带a.com的Cookie")]),t._v(" "),s("li",[t._v("a.com接收到请求后，对请求进行验证，并确认是受害者的凭证，误以为是受害者自己发送的请求")]),t._v(" "),s("li",[t._v("a.com以受害者的名义执行了act=xx")]),t._v(" "),s("li",[t._v("攻击完成，攻击者在受害者不知情的情况下，冒充受害者，让a.com执行了自己定义的操作")])]),t._v(" "),s("p",[s("code",[t._v("csrf")]),t._v("可以通过"),s("code",[t._v("get")]),t._v("请求，即通过访问"),s("code",[t._v("img")]),t._v("的页面后，浏览器自动访问目标地址，发送请求")]),t._v(" "),s("p",[t._v("同样，也可以设置一个自动提交的表单发送"),s("code",[t._v("post")]),t._v("请求，如下：")]),t._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("form action"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://bank.example/withdraw"')]),t._v(" method"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("POST")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("input type"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"hidden"')]),t._v(" name"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"account"')]),t._v(" value"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"xiaoming"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("input type"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"hidden"')]),t._v(" name"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"amount"')]),t._v(" value"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"10000"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("input type"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"hidden"')]),t._v(" name"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"for"')]),t._v(" value"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"hacker"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("form"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("script"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" document"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("forms"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("submit")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("script"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" \n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br")])]),s("p",[t._v("访问该页面后，表单会自动提交，相当于模拟用户完成了一次"),s("code",[t._v("POST")]),t._v("操作")]),t._v(" "),s("p",[t._v("还有一种为使用"),s("code",[t._v("a")]),t._v("标签的，需要用户点击链接才会触发")]),t._v(" "),s("p",[t._v("访问该页面后，表单会自动提交，相当于模拟用户完成了一次POST操作")]),t._v(" "),s("div",{staticClass:"language-html line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[t._v('< a href="http://test.com/csrf/withdraw.php?amount=1000&for=hacker" taget="_blank">\n    重磅消息！！\n'),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("a")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br")])]),s("h3",{attrs:{id:"csrf的特点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#csrf的特点"}},[t._v("#")]),t._v(" CSRF的特点")]),t._v(" "),s("ul",[s("li",[t._v("攻击一般发起在第三方网站，而不是被攻击的网站。被攻击的网站无法防止攻击发生")]),t._v(" "),s("li",[t._v("攻击利用受害者在被攻击网站的登录凭证，冒充受害者提交操作；而不是直接窃取数据")]),t._v(" "),s("li",[t._v("整个过程攻击者并不能获取到受害者的登录凭证，仅仅是“冒用”")]),t._v(" "),s("li",[t._v("跨站请求可以用各种方式：图片URL、超链接、CORS、Form提交等等。部分请求方式可以直接嵌入在第三方论坛、文章中，难以进行追踪")])]),t._v(" "),s("h3",{attrs:{id:"csrf的预防"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#csrf的预防"}},[t._v("#")]),t._v(" CSRF的预防")]),t._v(" "),s("p",[t._v("CSRF通常从第三方网站发起，被攻击的网站无法防止攻击发生，只能通过增强自己网站针对CSRF的防护能力来提升安全性")]),t._v(" "),s("p",[t._v("防止"),s("code",[t._v("csrf")]),t._v("常用方案如下：")]),t._v(" "),s("ul",[s("li",[t._v("阻止不明外域的访问\n"),s("ul",[s("li",[t._v("同源检测")]),t._v(" "),s("li",[t._v("Samesite Cookie")])])]),t._v(" "),s("li",[t._v("提交时要求附加本域才能获取的信息\n"),s("ul",[s("li",[t._v("CSRF Token")]),t._v(" "),s("li",[t._v("双重Cookie验证")])])])]),t._v(" "),s("p",[t._v("这里主要讲讲"),s("code",[t._v("token")]),t._v("这种形式，流程如下：")]),t._v(" "),s("ul",[s("li",[t._v("用户打开页面的时候，服务器需要给这个用户生成一个Token")]),t._v(" "),s("li",[t._v("对于GET请求，Token将附在请求地址之后。对于 POST 请求来说，要在 form 的最后加上")])]),t._v(" "),s("div",{staticClass:"language-html line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("input")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("type")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),t._v("”hidden”")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),t._v("”csrftoken”")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("value")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),t._v("”tokenvalue”/")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("ul",[s("li",[t._v("当用户从客户端得到了Token，再次提交给服务器的时候，服务器需要判断Token的有效性")])]),t._v(" "),s("h2",{attrs:{id:"四、sql注入"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#四、sql注入"}},[t._v("#")]),t._v(" 四、SQL注入")]),t._v(" "),s("p",[t._v("Sql 注入攻击，是通过将恶意的 "),s("code",[t._v("Sql")]),t._v("查询或添加语句插入到应用的输入参数中，再在后台 "),s("code",[t._v("Sql")]),t._v("服务器上解析执行进行的攻击")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://static.vue-js.com/ead52fa0-8d1d-11eb-85f6-6fac77c0c9b3.png",alt:""}})]),t._v(" "),s("p",[t._v("流程如下所示：")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("找出SQL漏洞的注入点")])]),t._v(" "),s("li",[s("p",[t._v("判断数据库的类型以及版本")])]),t._v(" "),s("li",[s("p",[t._v("猜解用户名和密码")])]),t._v(" "),s("li",[s("p",[t._v("利用工具查找Web后台管理入口")])]),t._v(" "),s("li",[s("p",[t._v("入侵和破坏")])])]),t._v(" "),s("p",[t._v("预防方式如下：")]),t._v(" "),s("ul",[s("li",[t._v("严格检查输入变量的类型和格式")]),t._v(" "),s("li",[t._v("过滤和转义特殊字符")]),t._v(" "),s("li",[t._v("对访问数据库的Web应用程序采用Web应用防火墙")])]),t._v(" "),s("p",[t._v("上述只是列举了常见的"),s("code",[t._v("web")]),t._v("攻击方式，实际开发过程中还会遇到很多安全问题，对于这些问题， 切记不可忽视")]),t._v(" "),s("h2",{attrs:{id:"参考文献"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参考文献"}},[t._v("#")]),t._v(" 参考文献")]),t._v(" "),s("ul",[s("li",[t._v("https://tech.meituan.com/2018/09/27/fe-security.html")]),t._v(" "),s("li",[t._v("https://developer.mozilla.org/zh-CN/docs/learn/Server-side/First_steps/Website_security")])])])}),[],!1,null,null,null);s.default=n.exports}}]);