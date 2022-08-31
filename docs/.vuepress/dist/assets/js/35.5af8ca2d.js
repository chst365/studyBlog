(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{352:function(t,v,e){"use strict";e.r(v);var _=e(3),i=Object(_.a)({},(function(){var t=this,v=t._self._c;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("p",[v("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/chst365/bolgImgs/imgs/topImgs/295.jpg",alt:""}})]),t._v(" "),v("h2",{attrs:{id:"浏览器请求、加载、渲染一个页面的大致过程"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#浏览器请求、加载、渲染一个页面的大致过程"}},[t._v("#")]),t._v(" 浏览器请求、加载、渲染一个页面的大致过程")]),t._v(" "),v("ul",[v("li",[t._v("DNS 查询")]),t._v(" "),v("li",[t._v("TCP 连接")]),t._v(" "),v("li",[t._v("HTTP 请求即响应")]),t._v(" "),v("li",[t._v("服务器响应")]),t._v(" "),v("li",[t._v("客户端渲染")])]),t._v(" "),v("h3",{attrs:{id:"从浏览器内核拿到内容-渲染线程接收请求-加载网页并渲染网页-渲染"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#从浏览器内核拿到内容-渲染线程接收请求-加载网页并渲染网页-渲染"}},[t._v("#")]),t._v(" 从浏览器内核拿到内容（渲染线程接收请求，加载网页并渲染网页）渲染")]),t._v(" "),v("ul",[v("li",[t._v("解析 html 建立 dom 树")]),t._v(" "),v("li",[t._v("解析 css 构建 render 树（将 css 代码解析成树形结构，结合 DOM 合并成 render 树）")]),t._v(" "),v("li",[t._v("布局 render 树（Layout/reflow）,负责各元素尺寸、位置的计算")]),t._v(" "),v("li",[t._v("绘制 render 树（paint）,绘制页面像素信息")]),t._v(" "),v("li",[t._v("浏览器会将各层的信息发送个 GPU（GPU 进程：最多一个，用于 3D 绘制等），GPU 会将各层合成（composite），显示在屏幕上")])]),t._v(" "),v("p",[v("img",{attrs:{src:"https://segmentfault.com/img/bVHJfZ?w=624&h=289",alt:""}})]),t._v(" "),v("ul",[v("li",[t._v("DOM Tree: 浏览器将 HTML 解析成树形的数据结构")]),t._v(" "),v("li",[t._v("CSS Rule Tree: 浏览器将 CSS 解析成树形的数据结构")]),t._v(" "),v("li",[t._v("Render Tree: DOM 和 CSSOM 合并成 Render Tree")]),t._v(" "),v("li",[t._v("layout: 浏览器计算出每个节点在屏幕中的位置")]),t._v(" "),v("li",[t._v("painting: 按照算出来的规则，通过显卡，把内容画到屏幕上")]),t._v(" "),v("li",[t._v("reflow（回流）: 也称重排，某个元素的位置变了，影响到其他元素的布局，然后浏览器就需要重新布局，重新渲染绘制")]),t._v(" "),v("li",[t._v("repaint(重绘): 改变某个元素的背景色，文字颜色等不影响它周围布局的属性时，屏幕的一部分要重画，但元素的几何尺寸没变")])]),t._v(" "),v("p",[t._v("注意：")]),t._v(" "),v("ol",[v("li",[v("code",[t._v("display:none")]),t._v("的节点不会被加入"),v("code",[t._v("Render Tree")]),t._v(",而"),v("code",[t._v("visibility:hidden")]),t._v("可以，所以某个节点最开始不显示，设为"),v("code",[t._v("display:none")]),t._v("是更优的")]),t._v(" "),v("li",[v("code",[t._v("display:none")]),t._v("会触发"),v("code",[t._v("reflow")]),t._v(",而"),v("code",[t._v("visibility:hidden")]),t._v("只会触发"),v("code",[t._v("repaint")]),t._v(",因位置没变")]),t._v(" "),v("li",[t._v("某些情况下，如修改了元素的样式，浏览器并不会立刻 reflow 或 repaint，而是会把这样的操作积攒一批，然后做一次 reflow，这叫异步 reflow 或增量异步 reflow。当某些情况下，如：resize 窗口，改不了页面的默认字体等，浏览器会马上进行 reflow")])]),t._v(" "),v("p",[v("img",{attrs:{src:"https://segmentfault.com/img/bV7TKK?w=580&h=381",alt:""}})]),t._v(" "),v("h2",{attrs:{id:"composite"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#composite"}},[t._v("#")]),t._v(" Composite")]),t._v(" "),v("p",[t._v("注意：这里讨论的是 Webkit，描述的是 Chrome 的实现细节，而非 web 平台的功能（其他浏览器不一定适用）")]),t._v(" "),v("ul",[v("li",[t._v("Chrome 拥有两套不同的渲染路径（rendering path）:硬件加速路径和软硬件路径（older software path）")]),t._v(" "),v("li",[t._v("Chrome 有不同类型的层：RenderLayer（负责 DOM 子树）和 GraphicsLayer(负责 RenderLayer 的子树)，只有 GraphicsLayer 是作为纹理(texture)上传给 GPU 的")]),t._v(" "),v("li",[t._v("纹理：一个从主存储器（RAM）移动到图像存储器（GPU 的 VRAM）的位图图像（bitmapimage）")]),t._v(" "),v("li",[t._v("Chrome 使用纹理来从 GPU 上获得大块的页面内容。通过将纹理应用到一个非常简单的矩形网格就能很容易匹配不同的位置(position)和变形(transformation)。这也就是 3DCSS 的工作原理，它对于快速滚动也十分有效。")])]),t._v(" "),v("p",[v("img",{attrs:{src:"https://segmentfault.com/img/bV7URO?w=650&h=268",alt:""}}),t._v("\n在 DOM 树中每个节点对应一个 LayoutObject,当他们的 LayoutObject 处于相同的坐标空间时，就会形成一个 RenderLayers（渲染层）。")]),t._v(" "),v("p",[t._v("RenderLayers 保证页面元素以正确的顺序合成，此时会出现层合成（composite）,从而正确处理透明元素和重叠元素的显示。")]),t._v(" "),v("p",[t._v("某些特殊的渲染层被认为是合成层（Compositing Layers），合成层拥有单独的 GraphicsLayers，而其他不适合成层的渲染层，则和其第一个拥有 GraphicsLayer 父层公用一个。")]),t._v(" "),v("p",[t._v("而每个 GraphicsLayer（合成层单独拥有的图层）都有一个 GraphicsContext，GraphicsContext 会负责输出该层的位图，位图是存储在共享内存中，作为纹理上传到 GPU 中，最后由 GPU 将多个位图进行合成，然后显示到屏幕上。")]),t._v(" "),v("h3",{attrs:{id:"如何变成合成层"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#如何变成合成层"}},[t._v("#")]),t._v(" 如何变成合成层")]),t._v(" "),v("p",[t._v("虽然 Chrome 的启发式方法随着时间在不断发展进步，但从目前来说，满足以下任意情况便会创建层：")]),t._v(" "),v("ul",[v("li",[t._v("3D 或透视变换 CSS 属性")]),t._v(" "),v("li",[t._v("使用加速视频解码的"),v("code",[t._v("<video>")]),t._v("元素拥有 3D")]),t._v(" "),v("li",[t._v("("),v("code",[t._v("<WebGL>")]),t._v(")上下文或加速的 2D 上下文的"),v("code",[t._v("<canvas>")]),t._v("元素")]),t._v(" "),v("li",[t._v("混合插件（如 Flash）")]),t._v(" "),v("li",[t._v("对自己的"),v("code",[t._v("opacity")]),t._v("做 CSS 动画或使用一个动画变换的元素")]),t._v(" "),v("li",[t._v("拥有加速 CSS 过滤器的元素")]),t._v(" "),v("li",[t._v("元素有一个包含复合层的后代节点（一个元素有个子元素，子元素在自己的层里）")]),t._v(" "),v("li",[t._v("元素有一个"),v("code",[t._v("z-index")]),t._v("较低且包含一个复合层的兄弟元素（该元素在复合层上面渲染）")])]),t._v(" "),v("h3",{attrs:{id:"合成层的优点"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#合成层的优点"}},[t._v("#")]),t._v(" 合成层的优点")]),t._v(" "),v("ul",[v("li",[t._v("合成层的位图，会交由 GPU 合成，比 CPU 处理要快")]),t._v(" "),v("li",[t._v("当需 repaint 时，只需 repaint 本身，不会影响到其他的层")]),t._v(" "),v("li",[t._v("对于 transform 和 opacity 效果，不会触发 layout 和 paint")])]),t._v(" "),v("p",[t._v("注意：")]),t._v(" "),v("ol",[v("li",[t._v("只是合成层的合成处理(把绘图上下文的位图输出进行组合)交给 GPU，位图的处理（绘图上下文的工作）还需要 CPU")]),t._v(" "),v("li",[t._v("当需要 repaint 的时候可以只 repaint 本身，不影响其它层，当 paint 前还有 style,layout，就意味着即使合成层只是 repaint 了自己，但 style 和 layout 本身就很占用时间")]),t._v(" "),v("li",[t._v("仅仅是 transform 和 opacity 不会引发 layout 和 paint，其他属性不确定")])]),t._v(" "),v("h4",{attrs:{id:"总结"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[t._v("#")]),t._v(" 总结")]),t._v(" "),v("p",[t._v("一般一个元素开启硬件加速后会变成合成层，可以独立于普通文档流中，改动后可避免整个页面重绘，提升性能")]),t._v(" "),v("h4",{attrs:{id:"性能优化点"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#性能优化点"}},[t._v("#")]),t._v(" 性能优化点")]),t._v(" "),v("ol",[v("li",[t._v("提升合成层的最好方式是使用 CSS 的"),v("code",[t._v("will-change")]),t._v("属性，可设置"),v("code",[t._v("will-change")]),t._v("为"),v("code",[t._v("opacity/transform/top/left/bottom/right")]),t._v("可将元素提升为合成层")]),t._v(" "),v("li",[t._v("使用 transform / opacity 来实现动画效果，这样只需合成层的合并就好了")]),t._v(" "),v("li",[t._v("减少绘制区域，对于不需要重新绘制的区域应尽量避免绘制，以减少绘制区域。")])]),t._v(" "),v("h3",{attrs:{id:"利用合成层可能踩到的坑"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#利用合成层可能踩到的坑"}},[t._v("#")]),t._v(" 利用合成层可能踩到的坑")]),t._v(" "),v("ol",[v("li",[t._v("合成层占用内存的问题")]),t._v(" "),v("li",[t._v("层爆炸（很多不需要提升为合成层的元素因某些不当操作成了合成层）\n解决方式：使用 3D 硬件加速提升动画性能时，最好给元素加个"),v("code",[t._v("z-index")]),t._v("属性，人为干扰合成的排序，可有效减少 chrome 创建不必要的合成层，提升渲染性能，移动端优化效果尤为明显")])]),t._v(" "),v("p",[v("img",{attrs:{src:"https://segmentfault.com/img/bV85wj?w=1056&h=1358",alt:""}})]),t._v(" "),v("p",[t._v("开启 Rendering 的 Layer borders 后观察点击为动画元素设置"),v("code",[t._v("z-index")]),t._v("复选框的页面提示变化")]),t._v(" "),v("p",[v("img",{attrs:{src:"https://segmentfault.com/img/bV85zk?w=1056&h=1206",alt:""}}),t._v("\n上图中可以明显看出：页面中设置了一个 h1 标题，应用了 translate3d 动画，使得它被放到 composited layer 中渲染，然后在这个元素后面创建了 2000 个 list。在不为 h1 元素设置 z-index 的情况下，使得本不需要提升到合成层的 ul 元素下的每个 li 元素都提升为一个单独合成层（每个 li 元素的黄色提示边框），最终会导致 GPU 资源过度消耗页面滑动时很卡，尤其在移动端（安卓）上更加明显。\n"),v("img",{attrs:{src:"https://segmentfault.com/img/bV85Ag?w=1070&h=1200",alt:""}}),t._v("\n如图操作选中为动画元素设置"),v("code",[t._v("z-index")]),t._v("，可以看出 ul 下的每个 li 都回归到普通渲染层，不再是合成层也就不会消耗 GPU 资源去渲染，从而达到了优化页面性能优化的目的")])])}),[],!1,null,null,null);v.default=i.exports}}]);