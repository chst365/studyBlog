---
title: CSS小实验：动手做，用代码挖掘CSS属性
date: 2022-03-09 19:49:08
permalink: /pages/cb3b08/
categories:
  - 极客时间
  - 重学前端
tags:
  - 
---
<audio title="CSS小实验：动手做，用代码挖掘CSS属性" src="https://static001.geekbang.org/resource/audio/37/1c/37a702dc1acff7b21dfaa999c01a0a1c.mp3" controls="controls"></audio> 
<p>你好，我是winter。</p><p>我们的课程中已经讲解了一部分CSS属性，但是CSS属性数量繁多，我们的课程只能覆盖其中一小部分，所以我设计了这个小实验，教你用代码挖掘W3C标准中的属性。</p><h2>浏览器中已经实现的属性</h2><p>首先我们来看看浏览器中实现了哪些属性。我们用一段代码来看一下。</p><pre><code class="language-JavaScript">Object.keys(document.body.style).filter(e =&gt; !e.match(/^webkit/))
</code></pre><p>这段代码思路非常简单，就是枚举document.body.style上的所有属性，并且去掉webkit前缀的私有属性。</p><p>在我的Chrome中，得到了这样一组属性：</p><pre><code>alignContent, alignItems, alignSelf, alignmentBaseline, all, animation, animationDelay, animationDirection, animationDuration, animationFillMode, animationIterationCount, animationName, animationPlayState, animationTimingFunction, backfaceVisibility, background, backgroundAttachment, backgroundBlendMode, backgroundClip, backgroundColor, backgroundImage, backgroundOrigin, backgroundPosition, backgroundPositionX, backgroundPositionY, backgroundRepeat, backgroundRepeatX, backgroundRepeatY, backgroundSize, baselineShift, blockSize, border, borderBlockEnd, borderBlockEndColor, borderBlockEndStyle, borderBlockEndWidth, borderBlockStart, borderBlockStartColor, borderBlockStartStyle, borderBlockStartWidth, borderBottom, borderBottomColor, borderBottomLeftRadius, borderBottomRightRadius, borderBottomStyle, borderBottomWidth, borderCollapse, borderColor, borderImage, borderImageOutset, borderImageRepeat, borderImageSlice, borderImageSource, borderImageWidth, borderInlineEnd, borderInlineEndColor, borderInlineEndStyle, borderInlineEndWidth, borderInlineStart, borderInlineStartColor, borderInlineStartStyle, borderInlineStartWidth, borderLeft, borderLeftColor, borderLeftStyle, borderLeftWidth, borderRadius, borderRight, borderRightColor, borderRightStyle, borderRightWidth, borderSpacing, borderStyle, borderTop, borderTopColor, borderTopLeftRadius, borderTopRightRadius, borderTopStyle, borderTopWidth, borderWidth, bottom, boxShadow, boxSizing, breakAfter, breakBefore, breakInside, bufferedRendering, captionSide, caretColor, clear, clip, clipPath, clipRule, color, colorInterpolation, colorInterpolationFilters, colorRendering, columnCount, columnFill, columnGap, columnRule, columnRuleColor, columnRuleStyle, columnRuleWidth, columnSpan, columnWidth, columns, contain, content, counterIncrement, counterReset, cursor, cx, cy, d, direction, display, dominantBaseline, emptyCells, fill, fillOpacity, fillRule, filter, flex, flexBasis, flexDirection, flexFlow, flexGrow, flexShrink, flexWrap, float, floodColor, floodOpacity, font, fontDisplay, fontFamily, fontFeatureSettings, fontKerning, fontSize, fontStretch, fontStyle, fontVariant, fontVariantCaps, fontVariantEastAsian, fontVariantLigatures, fontVariantNumeric, fontVariationSettings, fontWeight, gap, grid, gridArea, gridAutoColumns, gridAutoFlow, gridAutoRows, gridColumn, gridColumnEnd, gridColumnGap, gridColumnStart, gridGap, gridRow, gridRowEnd, gridRowGap, gridRowStart, gridTemplate, gridTemplateAreas, gridTemplateColumns, gridTemplateRows, height, hyphens, imageRendering, inlineSize, isolation, justifyContent, justifyItems, justifySelf, left, letterSpacing, lightingColor, lineBreak, lineHeight, listStyle, listStyleImage, listStylePosition, listStyleType, margin, marginBlockEnd, marginBlockStart, marginBottom, marginInlineEnd, marginInlineStart, marginLeft, marginRight, marginTop, marker, markerEnd, markerMid, markerStart, mask, maskType, maxBlockSize, maxHeight, maxInlineSize, maxWidth, maxZoom, minBlockSize, minHeight, minInlineSize, minWidth, minZoom, mixBlendMode, objectFit, objectPosition, offset, offsetDistance, offsetPath, offsetRotate, opacity, order, orientation, orphans, outline, outlineColor, outlineOffset, outlineStyle, outlineWidth, overflow, overflowAnchor, overflowWrap, overflowX, overflowY, overscrollBehavior, overscrollBehaviorX, overscrollBehaviorY, padding, paddingBlockEnd, paddingBlockStart, paddingBottom, paddingInlineEnd, paddingInlineStart, paddingLeft, paddingRight, paddingTop, page, pageBreakAfter, pageBreakBefore, pageBreakInside, paintOrder, perspective, perspectiveOrigin, placeContent, placeItems, placeSelf, pointerEvents, position, quotes, r, resize, right, rowGap, rx, ry, scrollBehavior, scrollMargin, scrollMarginBlock, scrollMarginBlockEnd, scrollMarginBlockStart, scrollMarginBottom, scrollMarginInline, scrollMarginInlineEnd, scrollMarginInlineStart, scrollMarginLeft, scrollMarginRight, scrollMarginTop, scrollPadding, scrollPaddingBlock, scrollPaddingBlockEnd, scrollPaddingBlockStart, scrollPaddingBottom, scrollPaddingInline, scrollPaddingInlineEnd, scrollPaddingInlineStart, scrollPaddingLeft, scrollPaddingRight, scrollPaddingTop, scrollSnapAlign, scrollSnapStop, scrollSnapType, shapeImageThreshold, shapeMargin, shapeOutside, shapeRendering, size, speak, src, stopColor, stopOpacity, stroke, strokeDasharray, strokeDashoffset, strokeLinecap, strokeLinejoin, strokeMiterlimit, strokeOpacity, strokeWidth, tabSize, tableLayout, textAlign, textAlignLast, textAnchor, textCombineUpright, textDecoration, textDecorationColor, textDecorationLine, textDecorationSkipInk, textDecorationStyle, textIndent, textOrientation, textOverflow, textRendering, textShadow, textSizeAdjust, textTransform, textUnderlinePosition, top, touchAction, transform, transformBox, transformOrigin, transformStyle, transition, transitionDelay, transitionDuration, transitionProperty, transitionTimingFunction, unicodeBidi, unicodeRange, userSelect, userZoom, vectorEffect, verticalAlign, visibility, whiteSpace, widows, width, willChange, wordBreak, wordSpacing, wordWrap, writingMode, x, y, zIndex, zoom
</code></pre><p>数了一下，这里有390个属性，这非常壮观了，要想了解它们可不是一件容易的事情。接下来我们试着找到它们背后对应的标准。</p><h2>小实验：找出W3C标准中的CSS属性</h2><p>我们知道CSS2.1是一份标准，但是CSS3分布在无数标准中，我们需要用代码把它们整理出来，这就是我们今天的小实验内容了。</p><p>为了达到我们的目的，我们需要写一个简单的爬虫，来找一找W3C标准中都覆盖了哪些属性。</p><p><strong>我们这个爬虫的思路是：用iframe来加载所有标准的网页，然后用JavaScript找出它们中间定义的属性。</strong></p><!-- [[[read_end]]] --><h3>第一步：找到CSS相关的标准。</h3><p>我们来到W3C的TR页面：</p><ul>
<li><a href="https://www.w3.org/TR/?tag=css">https://www.w3.org/TR/?tag=css</a></li>
</ul><p>我们必须从这个页面里抓取所有的标准名称和链接，打开它的代码，我们会发现它是有规律的，这个页面由一个巨大的列表构成，我们只需要根据tag选取需要的标准即可。</p><pre><code class="language-JavaScript">document.querySelectorAll("#container li[data-tag~=css] h2:not(.Retired):not(.GroupNote)")
</code></pre><p>这段代码可以找到所有CSS相关的标准，我们用代码把从HTML结构中把它们抽取出来。可以得到一个列表。<br>
（图片较大，请等待加载。）</p><p><img src="https://static001.geekbang.org/resource/image/3b/be/3bc9ec8fad753e4a7af9db27bb1e25be.png" alt=""></p><h3>第二步：分析每个标准中的CSS属性</h3><p>得到了这个标准的列表，下一步我们就是分析每个标准中的CSS属性。</p><p>我们打开第一个标准，试着找出属性定义：</p><ul>
<li><a href="https://www.w3.org/TR/2019/WD-css-lists-3-20190425/">https://www.w3.org/TR/2019/WD-css-lists-3-20190425/</a></li>
</ul><p>经过分析，我们会发现，属性总是在一个具有propdef的容器中，有属性data-dfn-type值为property。</p><p>这里我不得不感慨，W3C的标准写得真的是十分严谨，这给我们带来了很大的方便。我们用以下代码获取属性：</p><pre><code class="language-JavaScript">document.querySelectorAll(".propdef [data-dfn-type=property]")
</code></pre><p>对于第一个标准 CSS  Lists  Module  Level 3 得到了这个列表：</p><pre><code>list-style-image
list-style-type
list-style-position
list-style
marker-side
counter-reset
counter-set
counter-increment
</code></pre><p>好了，接下来，我们来用iframe打开这些标准，并且用我们分析好的规则，来找出里面的属性就可以了。最终成品代码如下：</p><pre><code class="language-JavaScript">
var iframe = document.createElement("iframe");

document.body.appendChild(iframe);

iframe.src = "https://www.w3.org/TR/2019/WD-css-lists-3-20190425/"

function happen(element, type){
  return new Promise(resolve =&gt; {
    element.addEventListener(type, resolve, {once: true})
  })
}

happen(iframe, "load").then(function(){
  //Array.prototype.map.call(document.querySelectorAll("#container li[data-tag~=css] h2"), e=&gt; e.children[0].href + " |\t" + e.children[0].textContent).join("\n")
  console.log(iframe.contentWindow);
})
async function start(){
  var output = []
  for(let standard of  Array.prototype.slice.call(document.querySelectorAll("#container li[data-tag~=css] h2:not(.Retired):not(.GroupNote)"))) {
    console.log(standard.children[0].href);
    iframe.src = standard.children[0].href;
    await happen(iframe, "load");
    var properties = Array.prototype.map.call(iframe.contentWindow.document.querySelectorAll(".propdef [data-dfn-type=property]"), e =&gt; e.childNodes[0].textContent);
    if(properties.length)
        output.push(standard.children[0].textContent + " | " + properties.join(", "));
  }
  console.log(output.join("\n"))
}
start();
</code></pre><p>这样，我们就得到了每个属性属于哪个标准，我们来看看最终结果。我把它整理成了一个列表。</p><p>（图片较大，请等待加载。）<br>
<img src="https://static001.geekbang.org/resource/image/ab/71/ab03527b7b40b594bb55f6bfd523d271.jpg" alt=""></p><p>至此，我们已经找出了标准中讲解的所有属性。</p><h2>结语</h2><p>今天的这节课我们通过代码对标准做了分析，找出了属性和标准的对应关系。</p><p>我们的第一步是找到所有的标准列表，第二步是找到每个标准中的属性。最后得到的这个列表比较全面地覆盖了CSS属性，并根据标准划分好了分类，我觉得这可以作为你后续学习和精研的重要依据。</p><p>我在本篇内容的前面还有一份浏览器中已经实现的属性列表，理论上属性列表中的属性应该都出现在了我们的标准中。</p><p>那么，这次课后的小任务，就是找出被我们的代码遗漏的属性，和重复出现在多份标准中的属性，让我们的列表更为完善。</p><p></p>