---
title: JavaScript语法（二）：你知道哪些JavaScript语句？
date: 2022-03-09 19:47:23
permalink: /pages/e0b904/
categories:
  - 极客时间
  - 重学前端
tags:
  - 
---
<audio title="JavaScript语法（二）：你知道哪些JavaScript语句？" src="https://static001.geekbang.org/resource/audio/b9/36/b98805c10ae51f49492bce8a7103b936.mp3" controls="controls"></audio> 
<p>你好，我是winter。</p><p>我们在上一节课中已经讲过了JavaScript语法的顶层设计，接下来我们进入到更具体的内容。</p><p>JavaScript遵循了一般编程语言的“语句-表达式”结构，多数编程语言都是这样设计的。我们在上节课讲的脚本，或者模块都是由语句列表构成的，这一节课，我们就来一起了解一下语句。</p><p>在JavaScript标准中，把语句分成了两种：声明和语句，不过，这里的区分逻辑比较奇怪，所以，这里我还是按照自己的思路给你整理一下。</p><p>普通语句：</p><p><img src="https://static001.geekbang.org/resource/image/81/55/8186219674547691cf59e5c095304d55.png" alt=""></p><p>声明型语句：</p><p><img src="https://static001.geekbang.org/resource/image/0e/38/0e5327528df12d1eaad52c4005efff38.jpg" alt=""></p><p>我们根据上面的分类，来遍历学习一下这些语句。</p><h2>语句块</h2><p>我们可以这样去简单理解，语句块就是一对大括号。</p><pre><code class="language-JavaScript">{
    var x, y;
    x = 10;
    y = 20;
}
</code></pre><p>语句块的意义和好处在于：让我们可以把多行语句视为同一行语句，这样，if、for等语句定义起来就比较简单了。不过，我们需要注意的是，语句块会产生作用域，我们看一个例子：</p><pre><code class="language-JavaScript">{
    let x = 1;
}
console.log(x); // 报错
</code></pre><p>这里我们的let声明，仅仅对语句块作用域生效，于是我们在语句块外试图访问语句块内的变量x就会报错。</p><h2>空语句</h2><p>空语句就是一个独立的分号，实际上没什么大用。我们来看一下：</p><pre><code class="language-JavaScript">;
</code></pre><p>空语句的存在仅仅是从语言设计完备性的角度考虑，允许插入多个分号而不抛出错误。</p><!-- [[[read_end]]] --><h2>if语句</h2><p>if语句是条件语句。我想，对多数人来说，if语句都是熟悉的老朋友了，也没有什么特别需要注意的用法，但是为了我们课程的完备性，这里还是要讲一下。</p><p>if语句示例如下：</p><pre><code class="language-JavaScript">if(a &lt; b)
    console.log(a);
</code></pre><p>if语句的作用是，在满足条件时执行它的内容语句，这个语句可以是一个语句块，这样就可以实现有条件地执行多个语句了。</p><p>if语句还有else结构，用于不满足条件时执行，一种常见的用法是，利用语句的嵌套能力，把if和else连写成多分支条件判断：</p><pre><code class="language-JavaScript">if(a &lt; 10) {
    //...
} else if(a &lt; 20) {
    //...
} else if(a &lt; 30) {
    //...
} else {
    //...
}
</code></pre><p>这段代码表示四个互斥的分支，分别在满足a&lt;10、a&lt;20、a&lt;30和其它情况时执行。</p><h2>switch语句</h2><p>switch语句继承自Java，Java中的switch语句继承自C和C++，原本switch语句是跳转的变形，所以我们如果要用它来实现分支，必须要加上break。</p><p>其实switch原本的设计是类似goto的思维。我们看一个例子：</p><pre><code class="language-JavaScript">switch(num) {
case 1:
    print(1);
case 2:
    print 2;
case 3:
    print 3;
}
</code></pre><p>这段代码当num为1时输出1 2 3，当num为2时输出2 3，当num为3时输出3。如果我们要把它变成分支型，则需要在每个case后加上break。</p><pre><code class="language-JavaScript">switch(num) {
case 1:
    print 1;
    break;
case 2:
    print 2;
    break;
case 3:
    print 3;
    break;
}
</code></pre><p>在C时代，switch生成的汇编代码性能是略优于if else的，但是对JavaScript来说，则无本质区别。我个人的看法是，现在switch已经完全没有必要使用了，应该用if else结构代替。</p><h2>循环语句</h2><p>循环语句应该也是你所熟悉的语句了，这里我们把重点放在一些新用法上。</p><h3>while循环和do while循环</h3><p>这两个都是历史悠久的JavaScript语法了，示例大概如下：</p><pre><code class="language-JavaScript">let a = 100
while(a--) {
    console.log("*");
}
</code></pre><pre><code class="language-JavaScript">let a = 101;
do {
    console.log(a);
} while(a &lt; 100)
</code></pre><p>注意，这里do while循环无论如何至少会执行一次。</p><h3>普通for循环</h3><p>首先我们来看看普通的for循环。</p><pre><code class="language-JavaScript">
for(i = 0; i &lt; 100; i++)
    console.log(i);

for(var i = 0; i &lt; 100; i++)
    console.log(i);

for(let i = 0; i &lt; 100; i++)
    console.log(i);

var j = 0;
for(const i = 0; j &lt; 100; j++)
    console.log(i);

</code></pre><p>这里为了配合新语法，加入了允许let和const，实际上，const在这里是非常奇葩的东西，因为这里声明和初始化的变量，按惯例是用于控制循环的，但是它如果是const就没法改了。</p><p>我想，这一点可能是从保持let和const一致性的角度考虑的吧。</p><h3>for in循环</h3><p>for in 循环枚举对象的属性，这里体现了属性的enumerable特征。</p><pre><code class="language-JavaScript">let o = { a: 10, b: 20}
Object.defineProperty(o, "c", {enumerable:false, value:30})

for(let p in o)
    console.log(p);

</code></pre><p>这段代码中，我们定义了一个对象o，给它添加了不可枚举的属性c，之后我们用for in循环枚举它的属性，我们会发现，输出时得到的只有a和b。</p><p>如果我们定义c这个属性时，enumerable为true，则for in循环中也能枚举到它。</p><h3>for of循环和for await of循环</h3><p>for of循环是非常棒的语法特性。</p><p>我们先看下基本用法，它可以用于数组：</p><pre><code class="language-JavaScript">for(let e of [1, 2, 3, 4, 5])
    console.log(e);
</code></pre><p>但是实际上，它背后的机制是iterator机制。</p><p>我们可以给任何一个对象添加iterator，使它可以用于for of语句，看下示例：</p><pre><code class="language-JavaScript">let o = {  
    [Symbol.iterator]:() =&gt; ({
        _value: 0,
        next(){
            if(this._value == 10)
                return {
                    done: true
                }
            else return {
                value: this._value++,
                done: false
            };
        }
    })
}
for(let e of o)
    console.log(e);

</code></pre><p>这段代码展示了如何为一个对象添加iterator。但是，在实际操作中，我们一般不需要这样定义iterator，我们可以使用generator function。</p><pre><code class="language-JavaScript">function* foo(){
    yield 0;
    yield 1;
    yield 2;
    yield 3;
}
for(let e of foo())
    console.log(e);
</code></pre><p>这段代码展示了generator function和foo的配合。</p><p>此外，JavaScript还为异步生成器函数配备了异步的for of，我们来看一个例子：</p><pre><code class="language-JavaScript">function sleep(duration) {
    return new Promise(function(resolve, reject) {
        setTimeout(resolve,duration);
    })
}
async function* foo(){
    i = 0;
    while(true) {
        await sleep(1000);
        yield i++;
    }
        
}
for await(let e of foo())
    console.log(e);
</code></pre><p>这段代码定义了一个异步生成器函数，异步生成器函数每隔一秒生成一个数字，这是一个无限的生成器。</p><p>接下来，我们使用for await of来访问这个异步生成器函数的结果，我们可以看到，这形成了一个每隔一秒打印一个数字的无限循环。</p><p>但是因为我们这个循环是异步的，并且有时间延迟，所以，这个无限循环的代码可以用于显示时钟等有意义的操作。</p><h2>return</h2><p>return语句用于函数中，它终止函数的执行，并且指定函数的返回值，这是大家非常熟悉语句了，也没有什么特殊之处。</p><pre><code class="language-JavaScript">function squre(x){
    return x * x;
}
</code></pre><p>这段代码展示了return的基本用法。它后面可以跟一个表达式，计算结果就是函数返回值。</p><h2>break语句和continue语句</h2><p>break语句用于跳出循环语句或者switch语句，continue语句用于结束本次循环并继续循环。</p><p>这两个语句都属于控制型语句，用法也比较相似，所以我们就一起讲了。需要注意的是，它们都有带标签的用法。</p><pre><code class="language-JavaScript">outer:for(let i = 0; i &lt; 100; i++)
    inner:for(let j = 0; j &lt; 100; j++)
        if( i == 50 &amp;&amp; j == 50)
            break outer;
outer:for(let i = 0; i &lt; 100; i++)
    inner:for(let j = 0; j &lt; 100; j++)
        if( i &gt;= 50 &amp;&amp; j == 50)
            continue outer;
</code></pre><p>带标签的break和continue可以控制自己被外层的哪个语句结构消费，这可以跳出复杂的语句结构。</p><h2>with语句</h2><p>with语句是个非常巧妙的设计，但它把JavaScript的变量引用关系变得不可分析，所以一般都认为这种语句都属于糟粕。</p><p>但是历史无法改写，现在已经无法去除with了。我们来了解一下它的基本用法即可。</p><pre><code class="language-JavaScript">let o = {a:1, b:2}
with(o){
    console.log(a, b);
}
</code></pre><p>with语句把对象的属性在它内部的作用域内变成变量。</p><h2>try语句和throw语句</h2><p>try语句和throw语句用于处理异常。它们是配合使用的，所以我们就放在一起讲了。在大型应用中，异常机制非常重要。</p><pre><code class="language-JavaScript">try {
    throw new Error("error");
} catch(e) {
    console.log(e);
} finally {
    console.log("finally");
}

</code></pre><p>一般来说，throw用于抛出异常，但是单纯从语言的角度，我们可以抛出任何值，也不一定是异常逻辑，但是为了保证语义清晰，不建议用throw表达任何非异常逻辑。</p><p>try语句用于捕获异常，用throw抛出的异常，可以在try语句的结构中被处理掉：try部分用于标识捕获异常的代码段，catch部分则用于捕获异常后做一些处理，而finally则是用于执行后做一些必须执行的清理工作。</p><p>catch结构会创建一个局部的作用域，并且把一个变量写入其中，需要注意，在这个作用域，不能再声明变量e了，否则会出错。</p><p>在catch中重新抛出错误的情况非常常见，在设计比较底层的函数时，常常会这样做，保证抛出的错误能被理解。</p><p>finally语句一般用于释放资源，它一定会被执行，我们在前面的课程中已经讨论过一些finally的特征，即使在try中出现了return，finally中的语句也一定要被执行。</p><h2>debugger语句</h2><p>debugger语句的作用是：通知调试器在此断点。在没有调试器挂载时，它不产生任何效果。</p><p>介绍完普通语句，我们再来看看声明型语句。声明型语句跟普通语句最大区别就是声明型语句响应预处理过程，普通语句只有执行过程。</p><h2>var</h2><p>var声明语句是古典的JavaScript中声明变量的方式。而现在，在绝大多数情况下，let和const都是更好的选择。</p><p>我们在上一节课已经讲解了var声明对全局作用域的影响，它是一种预处理机制。</p><p>如果我们仍然想要使用var，我的个人建议是，把它当做一种“保障变量是局部”的逻辑，遵循以下三条规则：</p><ul>
<li>声明同时必定初始化；</li>
<li>尽可能在离使用的位置近处声明；</li>
<li>不要在意重复声明。</li>
</ul><p>例如：</p><pre><code class="language-JavaScript">var x = 1, y = 2;
doSth(x, y);

for(var x = 0; x &lt; 10; x++)
    doSth2(x);
</code></pre><p>这个例子中，两次声明了变量x，完成了两段逻辑，这两个x意义上可能不一定相关，这样，不论我们把代码复制粘贴在哪里，都不会出错。</p><p>当然，更好的办法是使用let改造，我们看看如何改造：</p><pre><code class="language-JavaScript">{
    let x = 1, y = 2;
    doSth(x, y);
}

for(let x = 0; x &lt; 10; x++)
    doSth2(x);
</code></pre><p>这里我用代码块限制了第一个x的作用域，这样就更难发生变量命名冲突引起的错误了。</p><h2>let和const</h2><p>let和const是都是变量的声明，它们的特性非常相似，所以我们放在一起讲了。let和const是新设计的语法，所以没有什么硬伤，非常地符合直觉。let和const的作用范围是if、for等结构型语句。</p><p>我们看下基本用法：</p><pre><code class="language-JavaScript">const a = 2;
if(true){
    const a = 1;
    console.log(a);
}
console.log(a);
</code></pre><p>这里的代码先在全局声明了变量a，接下来又在if内声明了a，if内构成了一个独立的作用域。</p><p>const和let语句在重复声明时会抛错，这能够有效地避免变量名无意中冲突：</p><pre><code class="language-JavaScript">let a = 2
const a = 1;
</code></pre><p>这段代码中，先用let声明了a，接下来又试图使用const声明变量a，这时，就会产生错误。</p><p>let和const声明虽然看上去是执行到了才会生效，但是实际上，它们还是会被预处理。如果当前作用域内有声明，就无法访问到外部的变量。我们来看这段代码：</p><pre><code class="language-JavaScript">const a = 2;
if(true){
    console.log(a); //抛错
    const a = 1;   
}
</code></pre><p>这里在if的作用域中，变量a声明执行到之前，我们访问了变量a，这时会抛出一个错误，这说明const声明仍然是有预处理机制的。</p><p>在执行到const语句前，我们的JavaScript引擎就已经知道后面的代码将会声明变量a，从而不允许我们访问外层作用域中的a。</p><h2>class声明</h2><p>我们在之前的课程中，已经了解过class相关的用法。这里我们再从语法的角度来看一遍：</p><pre><code class="language-JavaScript">class a {

}
</code></pre><p>class最基本的用法只需要class关键字、名称和一对大括号。它的声明特征跟const和let类似，都是作用于块级作用域，预处理阶段则会屏蔽外部变量。</p><pre><code class="language-JavaScript">const a = 2;
if(true){
    console.log(a); //抛错
    class a {

    }
}
</code></pre><p>class内部，可以使用constructor关键字来定义构造函数。还能定义getter/setter和方法。</p><pre><code class="language-JavaScript">class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
  // Getter
  get area() {
    return this.calcArea();
  }
  // Method
  calcArea() {
    return this.height * this.width;
  }
}
</code></pre><p>这个例子来自MDN，它展示了构造函数、getter和方法的定义。</p><p>以目前的兼容性，class中的属性只能写在构造函数中，相关标准正在TC39讨论。</p><p>需要注意，class默认内部的函数定义都是strict模式的。</p><h2>函数声明</h2><p>函数声明使用 function 关键字。</p><p>在上一节课中，我们已经讨论过函数声明对全局作用域的影响了。这一节课，我们来看看函数声明具体的内容，我们先看一下函数声明的几种类型。</p><pre><code class="language-JavaScript">
function foo(){

}

function* foo(){
    yield 1;
    yield 2;
    yield 3;
}

async function foo(){
    await sleep(3000);
    
}

async function* foo(){
    await sleep(3000);
    yield 1;
}

</code></pre><p>带*的函数是generator，我们在前面的部分已经见过它了。生成器函数可以理解为返回一个序列的函数，它的底层是iterator机制。</p><p>async函数是可以暂停执行，等待异步操作的函数，它的底层是Promise机制。异步生成器函数则是二者的结合。</p><p>函数的参数，可以只写形参名，现在还可以写默认参数和指定多个参数，看下例子：</p><pre><code class="language-JavaScript">
function foo(a = 1, ...other) {
    console.log(a, other)
}
</code></pre><p>这个形式可以代替一些对参数的处理代码，表意会更加清楚。</p><h2>结语</h2><p>今天我们一起学习了语句家族，语句分成了普通语句和声明型语句。</p><p>普通语句部分，建议你把重点放在循环语句上面。声明型语句我觉得都很重要，尤其是它们的行为。熟练掌握了它们，我们就可以在工作中去综合运用它们，从而减少代码中的错误。新特性大多可以帮助我们发现代码中的错误。</p><p>最后留一个小作业，请你找出所有具有Symbol.iterator的原生对象，并且看看它们的for of遍历行为。</p><p></p>