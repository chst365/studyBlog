(window.webpackJsonp=window.webpackJsonp||[]).push([[242],{602:function(t,s,a){"use strict";a.r(s);var n=a(9),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p",[s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/chst365/bolgImgs/imgs/topImgs/362.jpg",alt:""}})]),t._v(" "),s("h1",{attrs:{id:"面试官-说说你对贪心算法、回溯算法的理解-应用场景"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#面试官-说说你对贪心算法、回溯算法的理解-应用场景"}},[t._v("#")]),t._v(" 面试官：说说你对贪心算法、回溯算法的理解？应用场景？")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://static.vue-js.com/1d49eae0-2e8e-11ec-a752-75723a64e8f5.png",alt:""}})]),t._v(" "),s("h2",{attrs:{id:"一、贪心算法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#一、贪心算法"}},[t._v("#")]),t._v(" 一、贪心算法")]),t._v(" "),s("p",[t._v("贪心算法，又称贪婪算法，是算法设计中的一种思想")]),t._v(" "),s("p",[t._v("其期待每一个阶段都是局部最优的选择，从而达到全局最优，但是结果并不一定是最优的")]),t._v(" "),s("p",[t._v("举个零钱兑换的例子，如果你有1元、2元、5元的钱币数张，用于兑换一定的金额，但是要求兑换的钱币张数最少")]),t._v(" "),s("p",[t._v("如果现在你要兑换11元，按照贪心算法的思想，先选择面额最大的5元钱币进行兑换，那么就得到11 = 5 + 5 + 1 的选择，这种情况是最优的")]),t._v(" "),s("p",[t._v("但是如果你手上钱币的面额为1、3、4，想要兑换6元，按照贪心算法的思路，我们会 6 = 4 + 1 + 1这样选择，这种情况结果就不是最优的选择")]),t._v(" "),s("p",[t._v("从上面例子可以看到，贪心算法存在一些弊端，使用到贪心算法的场景，都会存在一个特性：")]),t._v(" "),s("p",[t._v("一旦一个问题可以通过贪心法来解决，那么贪心法一般是解决这个问题的最好办法")]),t._v(" "),s("p",[t._v("至于是否选择贪心算法，主要看是否有如下两大特性：")]),t._v(" "),s("ul",[s("li",[t._v("贪心选择：当某一个问题的整体最优解可通过一系列局部的最优解的选择达到，并且每次做出的选择可以依赖以前做出的选择，但不需要依赖后面需要做出的选择")]),t._v(" "),s("li",[t._v("最优子结构：如果一个问题的最优解包含其子问题的最优解，则此问题具备最优子结构的性质。问题的最优子结构性质是该问题是否可以用贪心算法求解的关键所在")])]),t._v(" "),s("h2",{attrs:{id:"二、回溯算法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#二、回溯算法"}},[t._v("#")]),t._v(" 二、回溯算法")]),t._v(" "),s("p",[t._v("回溯算法，也是算法设计中的一种思想，是一种渐进式寻找并构建问题解决方式的策略")]),t._v(" "),s("p",[t._v("回溯算法会先从一个可能的工作开始解决问题，如果不行，就回溯并选择另一个动作，知道将问题解决")]),t._v(" "),s("p",[t._v("使用回溯算法的问题，有如下特性：")]),t._v(" "),s("ul",[s("li",[t._v("有很多路，例如一个矩阵的方向或者树的路径")]),t._v(" "),s("li",[t._v("在这些的路里面，有死路也有生路，思路即不符合题目要求的路，生路则符合")]),t._v(" "),s("li",[t._v("通常使用递归来模拟所有的路")])]),t._v(" "),s("p",[t._v("常见的伪代码如下：")]),t._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("result "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("backtrack")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("路径"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 选择列表")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("满足结束条件")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n    result"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("路径"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" 选择 "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("of")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("选择列表")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n    做选择\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("backtrack")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("路径"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 选择列表"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    撤销选择\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br")])]),s("p",[t._v("重点解决三个问题：")]),t._v(" "),s("ul",[s("li",[t._v("路径：也就是已经做出的选择")]),t._v(" "),s("li",[t._v("选择列表")]),t._v(" "),s("li",[t._v("结束条件")])]),t._v(" "),s("p",[t._v("例如经典使用回溯算法为解决全排列的问题，如下：")]),t._v(" "),s("p",[t._v("一个不含重复数字的数组 "),s("code",[t._v("nums")]),t._v(" ，我们要返回其所有可能的全排列，解决这个问题的思路是：")]),t._v(" "),s("ul",[s("li",[t._v("用递归模拟所有的情况")]),t._v(" "),s("li",[t._v("遇到包含重复元素的情况则回溯")]),t._v(" "),s("li",[t._v("收集到所有到达递归终点的情况，并返回、")])]),t._v(" "),s("p",[s("img",{attrs:{src:"https://static.vue-js.com/2a030f00-2e8e-11ec-8e64-91fdec0f05a1.png",alt:""}})]),t._v(" "),s("p",[t._v("用代码表示则如下：")]),t._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("permute")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("nums")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" res "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" path "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("backtracking")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("nums"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" nums"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" res"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    \n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("backtracking")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" k"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" used")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("path"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" k"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            res"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("push")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Array"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("from")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("path"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" i "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" k"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("used"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("continue")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            path"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("push")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            used"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 同支")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("backtracking")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" k"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" used"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            path"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("pop")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            used"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br"),s("span",{staticClass:"line-number"},[t._v("15")]),s("br"),s("span",{staticClass:"line-number"},[t._v("16")]),s("br"),s("span",{staticClass:"line-number"},[t._v("17")]),s("br"),s("span",{staticClass:"line-number"},[t._v("18")]),s("br"),s("span",{staticClass:"line-number"},[t._v("19")]),s("br"),s("span",{staticClass:"line-number"},[t._v("20")]),s("br")])]),s("h2",{attrs:{id:"三、总结"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#三、总结"}},[t._v("#")]),t._v(" 三、总结")]),t._v(" "),s("p",[t._v("前面也初步了解到分而治之、动态规划，现在再了解到贪心算法、回溯算法")]),t._v(" "),s("p",[t._v("其中关于分而治之、动态规划、贪心策略三者的求解思路如下：")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://static.vue-js.com/504b5230-2e8e-11ec-8e64-91fdec0f05a1.png",alt:""}})]),t._v(" "),s("p",[t._v("其中三者对应的经典问题如下图：")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://static.vue-js.com/62cdc910-2e8e-11ec-8e64-91fdec0f05a1.png",alt:""}})]),t._v(" "),s("h2",{attrs:{id:"参考文献"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参考文献"}},[t._v("#")]),t._v(" 参考文献")]),t._v(" "),s("ul",[s("li",[t._v("https://zh.wikipedia.org/wiki/%E8%B4%AA%E5%BF%83%E7%AE%97%E6%B3%95")]),t._v(" "),s("li",[t._v("https://leetcode-cn.com/problems/permutations/solution/dai-ma-sui-xiang-lu-dai-ni-xue-tou-hui-s-mfrp/")]),t._v(" "),s("li",[t._v("https://cloud.tencent.com/developer/article/1767046")])])])}),[],!1,null,null,null);s.default=e.exports}}]);