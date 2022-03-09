---
title: CSS语法：除了属性和选择器，你还需要知道这些带@的规则
date: 2022-03-09 19:48:01
permalink: /pages/58e79c/
categories:
  - 极客时间
  - 重学前端
tags:
  - 
---
<audio title="CSS语法：除了属性和选择器，你还需要知道这些带@的规则" src="https://static001.geekbang.org/resource/audio/b9/41/b903afd711372b39af059389a5db9141.mp3" controls="controls"></audio> 
<p>你好，我是winter。</p><p>今天我们进入CSS的学习。CSS是前端工程师几乎每天都要用的技术了，不过CSS的学习资料却是最糟糕的，这是因为CSS并没有像HTML和JavaScript那样的一份标准文档。</p><p>如果我们到W3C的网站上搜索看看，可以得到一些信息：</p><ul>
<li><a href="https://www.w3.org/TR/?title=css">https://www.w3.org/TR/?title=css</a></li>
</ul><p>在这里，我们一共看到了98份CSS相关的标准，它们各自从一些角度规定了CSS的特性。</p><p>这里我们暂且去掉Working Draft状态的标准，可以得到22份候选标准和6份推荐标准。</p><p>既然我们的专栏内容强调去系统性学习CSS，于是，面对这22+6份标准，我们就又需要一条线索，才能把这些离散的标准组织成易于理解和记忆的形式。</p><p>在这样的需求下，我找到的线索就是CSS语法，任何CSS的特性都必须通过一定的语法结构表达出来，所以语法可以帮助我们发现大多数CSS特性。</p><p>CSS语法的最新标准，你可以戳这里查看：</p><ul>
<li><a href="https://www.w3.org/TR/css-syntax-3/">https://www.w3.org/TR/css-syntax-3/</a></li>
</ul><p>这篇文档的阅读体验其实是非常糟糕的，它对CSS语法的描述使用了类似LL语法分析的伪代码，而且没有描述任何具体的规则。</p><p>这里你就不必自己去阅读了，我来把其中一些有用的关键信息抽取出来描述一下，我们一起来看看。</p><!-- [[[read_end]]] --><p>我们拿到这份标准可以看到，去除空格、HTML注释等无效信息，<strong>CSS的顶层样式表由两种规则组成的规则列表构成，一种被称为 at-rule，也就是at 规则，另一种是 qualified rule，也就是普通规则。</strong></p><p>at-rule由一个 @ 关键字和后续的一个区块组成，如果没有区块，则以分号结束。这些at-rule在开发中使用机会远远小于普通的规则，所以它的大部分内容，你可能会感觉很陌生。</p><p>这些at规则正是掌握CSS的一些高级特性所必须的内容。qualified rule则是指普通的CSS规则，也就是我们所熟识的，由选择器和属性指定构成的规则。</p><h2>at 规则</h2><p>好了，现在我们已经知道了，CSS语法的整体结构，接下来我们要做的是一个体力活，从所有的CSS标准里找到所有可能的 at-rule（不用谢，我已经帮你找好了，如果页面定位不准，你可以打开页面搜索关键字）。</p><ul>
<li>@charset ： <a href="https://www.w3.org/TR/css-syntax-3/">https://www.w3.org/TR/css-syntax-3/</a></li>
<li>@import ：<a href="https://www.w3.org/TR/css-cascade-4/">https://www.w3.org/TR/css-cascade-4/</a></li>
<li>@media ：<a href="https://www.w3.org/TR/css3-conditional/">https://www.w3.org/TR/css3-conditional/</a></li>
<li>@page ： <a href="https://www.w3.org/TR/css-page-3/">https://www.w3.org/TR/css-page-3/</a></li>
<li>@counter-style ：<a href="https://www.w3.org/TR/css-counter-styles-3">https://www.w3.org/TR/css-counter-styles-3</a></li>
<li>@keyframes ：<a href="https://www.w3.org/TR/css-animations-1/">https://www.w3.org/TR/css-animations-1/</a></li>
<li>@fontface ：<a href="https://www.w3.org/TR/css-fonts-3/">https://www.w3.org/TR/css-fonts-3/</a></li>
<li>@supports ：<a href="https://www.w3.org/TR/css3-conditional/">https://www.w3.org/TR/css3-conditional/</a></li>
<li>@namespace ：<a href="https://www.w3.org/TR/css-namespaces-3/">https://www.w3.org/TR/css-namespaces-3/</a></li>
</ul><p>这里的每一种@规则背后，都是一组CSS的知识。在我们的课程中，有些会重点介绍，不过，为了先给你建立起一个整体的认知，我们这里会给所有的@规则提供一些简单的例子和介绍。</p><h3>@charset</h3><p>@charset用于提示CSS文件使用的字符编码方式，它如果被使用，必须出现在最前面。这个规则只在给出语法解析阶段前使用，并不影响页面上的展示效果。</p><pre><code class="language-CSS">@charset "utf-8";
</code></pre><h3>@import</h3><p>@import用于引入一个CSS文件，除了@charset规则不会被引入，@import可以引入另一个文件的全部内容。</p><pre><code class="language-CSS">@import "mystyle.css";
@import url("mystyle.css");
</code></pre><pre><code>@import [ &lt;url&gt; | &lt;string&gt; ]
        [ supports( [ &lt;supports-condition&gt; | &lt;declaration&gt; ] ) ]?
        &lt;media-query-list&gt;? ;
</code></pre><p>通过代码，我们可以看出，import还支持 supports 和media query形式。</p><h3>@media</h3><p>media就是大名鼎鼎的media query使用的规则了，它能够对设备的类型进行一些判断。在media的区块内，是普通规则列表。</p><pre><code class="language-CSS">@media print {
    body { font-size: 10pt }
}
</code></pre><h3>@page</h3><p>page用于分页媒体访问网页时的表现设置，页面是一种特殊的盒模型结构，除了页面本身，还可以设置它周围的盒。</p><pre><code class="language-CSS">@page {
  size: 8.5in 11in;
  margin: 10%;

  @top-left {
    content: "Hamlet";
  }
  @top-right {
    content: "Page " counter(page);
  }
}
</code></pre><h3>@ counter-style</h3><p>counter-style产生一种数据，用于定义列表项的表现。</p><pre><code class="language-CSS">@counter-style triangle {
  system: cyclic;
  symbols: ‣;
  suffix: " ";
}
</code></pre><h3>@ key-frames</h3><p>keyframes产生一种数据，用于定义动画关键帧。</p><pre><code class="language-CSS">@keyframes diagonal-slide {

  from {
    left: 0;
    top: 0;
  }

  to {
    left: 100px;
    top: 100px;
  }

}
</code></pre><h3>@ fontface</h3><p>fontface用于定义一种字体，icon font技术就是利用这个特性来实现的。</p><pre><code>@font-face {
  font-family: Gentium;
  src: url(http://example.com/fonts/Gentium.woff);
}

p { font-family: Gentium, serif; }
</code></pre><h3>@ support</h3><p>support检查环境的特性，它与media比较类似。</p><h3>@ namespace</h3><p>用于跟XML命名空间配合的一个规则，表示内部的CSS选择器全都带上特定命名空间。</p><h3>@ viewport</h3><p>用于设置视口的一些特性，不过兼容性目前不是很好，多数时候被HTML的meta代替。</p><h3>其它</h3><p>除了以上这些，还有些目前不太推荐使用的at规则。</p><ul>
<li>@color-profile 是 SVG1.0 引入的CSS特性，但是实现状况不怎么好。</li>
<li>@document 还没讨论清楚，被推迟到了CSS4中。</li>
<li>@font-feature-values 。</li>
</ul><h2>普通规则</h2><p>接下来我们进入qualified rule，也就是普通规则的部分，看看这里有什么需要我们记住的内容。</p><p>qualified rule主要是由选择器和声明区块构成。声明区块又由属性和值构成。我在下面的列表中，介绍了这部分语法的组成要点。</p><ul>
<li>普通规则
<ul>
<li>选择器</li>
<li>声明列表
<ul>
<li>属性</li>
<li>值
<ul>
<li>值的类型</li>
<li>函数</li>
</ul>
</li>
</ul>
</li>
</ul>
</li>
</ul><h3>选择器</h3><p>我们先来看看选择器，它有一份独立的标准，我们可以参考这个网址：</p><p><a href="https://www.w3.org/TR/selectors-4/">https://www.w3.org/TR/selectors-4/</a></p><p>这份标准不在我们前面的过滤条件中，它属于CSS和HTML共用的标准。</p><p>关于选择器的叠加规则等知识我们后文会专门的一节课程来讲，这里我们就从语法的角度介绍一下选择器。</p><p>在选择器标准的最后，附有一张选择器的语法表，从这份语法表，我们可以理清楚记忆选择器的思路。</p><p>我们从语法结构可以看出，任何选择器，都是由几个符号结构连接的：空格、大于号、加号、波浪线、双竖线，这里需要注意一下，空格，即为后代选择器的优先级较低。</p><p>然后对每一个选择器来说，如果它不是伪元素的话，由几个可选的部分组成，标签类型选择器，id、class、属性和伪类，它们中只要出现一个，就构成了选择器。</p><p>如果它是伪元素，则在这个结构之后追加伪元素。只有伪类可以出现在伪元素之后。我在下面用一个列表（不太严谨地）整理了选择器的语法结构：<br>
<img src="https://static001.geekbang.org/resource/image/4f/67/4fa32e5cf47c72a58f7a8211d4e8fc67.png" alt=""></p><p>我们在这里可以参考一个示例图：</p><p><img src="https://static001.geekbang.org/resource/image/8b/7c/8bdd0a249ab1dbf8b854b2decd7eb87c.png" alt=""></p><p>（语法结构分析示例）<br>
看完了选择器，我们继续来看看声明部分的语法。</p><h2>声明：属性和值</h2><p>声明部分是一个由“属性:值”组成的序列。</p><p><strong>属性</strong>是由中划线、下划线、字母等组成的标识符，CSS还支持使用反斜杠转义。我们需要注意的是：属性不允许使用连续的两个中划线开头，这样的属性会被认为是CSS变量。</p><p>在<a href="https://www.w3.org/TR/css-variables/">CSS Variables标准</a>中，以双中划线开头的属性被当作变量，与之配合的则是 var 函数：</p><pre><code>:root {
  --main-color: #06c;
  --accent-color: #006;
}
/* The rest of the CSS file */
#foo h1 {
  color: var(--main-color);
}
</code></pre><p><strong>值</strong>的部分，主要<a href="https://www.w3.org/TR/css-values-4/">在标准 CSS Values and Unit</a>，根据每个CSS属性可以取到不同的值，这里的值可能是字符串、标识符。</p><p>CSS属性值可能是以下类型。</p><ul>
<li>CSS范围的关键字：initial，unset，inherit，任何属性都可以的关键字。</li>
<li>字符串：比如content属性。</li>
<li>URL：使用url() 函数的URL值。</li>
<li>整数/实数：比如flex属性。</li>
<li>维度：单位的整数/实数，比如width属性。</li>
<li>百分比：大部分维度都支持。</li>
<li>颜色：比如background-color属性。</li>
<li>图片：比如background-image属性。</li>
<li>2D位置：比如background-position属性。</li>
<li>函数：来自函数的值，比如transform属性。</li>
</ul><p>这里我们要重点介绍一下函数。一些属性会要求产生函数类型的值，比如easing-function会要求cubic-bezier()函数的值：</p><p>CSS支持一批特定的计算型函数：</p><ul>
<li>calc()</li>
<li>max()</li>
<li>min()</li>
<li>clamp()</li>
<li>toggle()</li>
<li>attr()</li>
</ul><p><strong>calc()</strong>函数是基本的表达式计算，它支持加减乘除四则运算。在针对维度进行计算时，calc()函数允许不同单位混合运算，这非常的有用。</p><p>例如：</p><pre><code class="language-CSS">section {
  float: left;
  margin: 1em; border: solid 1px;
  width: calc(100%/3 - 2*1em - 2*1px);
}
</code></pre><p><strong>max()、min()和clamp()</strong>则是一些比较大小的函数，max()表示取两数中较大的一个，min()表示取两数之中较小的一个，clamp()则是给一个值限定一个范围，超出范围外则使用范围的最大或者最小值。</p><p>toggle()函数在规则选中多于一个元素时生效，它会在几个值之间来回切换，比如我们要让一个列表项的样式圆点和方点间隔出现，可以使用下面代码：</p><pre><code class="language-CSS">ul { list-style-type: toggle(circle, square); }
</code></pre><p>attr()函数允许CSS接受属性值的控制。</p><h2>总结</h2><p>在这一部分，我们介绍了CSS语法的总体结构，CSS的语法总体结构是由两种规则列表构成，一种是at 规则，另一种是普通规则。</p><p>在at规则中，我举了13个以上的例子，并逐个进行了简单的介绍。而在普通规则的部分，我介绍了选择器和声明区块是普通规则的主要组成部分。</p><p>并且，我给出了一个（不太严谨）的选择器语法结构，声明区块则由属性和值构成，这一部分我们重点介绍了函数。</p><p>从整体上去掌握内容，再去定位到单个细节，这对于我们学习CSS有非常重要的提示作用。</p><p>最后，给你留一个思考问题，CSS的函数有很多，本文也提到了不少，请你也一起查阅资料，试着总结一下，你能找到多少种CSS函数？</p><p></p>