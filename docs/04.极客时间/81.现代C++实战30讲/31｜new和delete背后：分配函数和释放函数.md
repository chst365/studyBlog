---
title: 31｜new和delete背后：分配函数和释放函数
date: 2022-03-09 14:13:38
permalink: /pages/640d6c/
categories:
  - 极客时间
  - 现代C++实战30讲
tags:
  - 
---
<audio title="31｜new和delete背后：分配函数和释放函数" src="https://static001.geekbang.org/resource/audio/45/91/45c4c14041d00bb314ebefd38caedc91.mp3" controls="controls"></audio> 
<p>你好，我是吴咏炜。</p><p>有一个我之前没讲、但挺有意思的话题是 <code>new</code> 和 <code>delete</code> 行为的定制。这件事情我很久很久以前就做过 <span class="orange">[1]</span>，没往专栏里写的最主要原因是，这实际是 C++98 就有的高级技巧，不属于现代 C++。不过，在目前续写的内容里，我就不再拘泥必须新了，既然这是 C++ 里现在仍然需要的技巧，那就还是介绍一下。何况，这部分在现代 C++ 里还是有点新内容的。</p><h2>最常用的分配和释放函数</h2><p>在<a href="https://time.geekbang.org/column/article/169225">第 1 讲</a>，我提到过，当我们使用 <code>new</code> 和 <code>delete</code> 来创建和销毁对象时，实际发生的事情还是比较多的（如果忘了的话，可以去复习一下）。其中，分配内存和释放内存的操作是通过 <code>operator new</code> 和 <code>operator delete</code> 函数完成的。在最简单的 <code>new</code> 和 <code>delete</code> 形式里，我们使用的是以下两个函数：</p><pre><code class="language-cpp">void* operator new(size_t size);
void operator delete(void* ptr) noexcept;
</code></pre><p><code>operator new</code> 和 <code>operator delete</code> 函数通常就被称为分配函数（allocation function）和释放函数（deallocation function）。</p><p>需要注意 <code>operator new</code> 是可能抛出异常的，而 <code>operator delete</code> 则不会抛出异常，被标为 noexcept。这和我们通常不允许在析构函数中抛出异常是完全一致的。</p><!-- [[[read_end]]] --><p>但这远不是这两个函数的所有形式。最典型情况，我们对于数组形式的分配（如 <code>pArray = new Obj[42]</code>）和释放（如 <code>delete[] pArray</code>），有专门的分配和释放函数：</p><pre><code class="language-cpp">void* operator new[](size_t size);
void operator delete[](void* ptr) noexcept;
</code></pre><p>这些函数的默认实现都很简单，大致相当于：</p><pre><code class="language-cpp">void* operator new(size_t size)
{
  void* ptr = malloc(size);
  if (ptr == nullptr) {
    throw bad_alloc();
  }
  return ptr;
}

void operator delete(void* ptr) noexcept
{
  free(ptr);
}

void* operator new[](size_t size)
{
  return operator new(size);
}

void operator delete[](void* ptr) noexcept
{
  operator delete(ptr);
}
</code></pre><p>即，这些函数最后会转到 C 标准库里的 <code>malloc</code> 和 <code>free</code> 上，但是，分配函数在内存分配失败时的默认行为是抛异常，而非返回空指针。</p><p>你可能会想，为什么要这么中转一次呢，直接调用 <code>malloc</code> 和 <code>free</code> 不行吗？原因也很简单，这样一个中间层就是一个定制点，我们可以通过提供自己的 <code>operator new</code> 和 <code>operator delete</code> 函数来修改内存的分配和释放行为，而非直接调用 <code>malloc</code> 和 <code>free</code>。当用户不提供 <code>operator new</code> 和 <code>operator delete</code> 函数时，<code>new</code> 和 <code>delete</code> 就会调用标准库提供的版本；否则，用户提供的 <code>operator new</code> 和 <code>operator delete</code> 函数就会被使用。</p><p>具体的实现机制根据平台不同而不同。比如，在 Linux 上标准库的分配和释放函数由 libstdc++.so 共享库提供，只要链接过程中在 <code>-lstdc++</code> 之前的目标文件或库文件里有分配和释放函数出现，它们就会比标准库的分配和释放函数有更高的优先权，会被所有用到分配和释放函数的地方调用，包括 libstdc++ 自身。</p><p>不过，需要留意的是，用户提供的分配和释放函数仍需跟标准的分配和释放函数有同样的接口，包括形式和语义。特别是：</p><ul>
<li>分配函数不应返回空指针，而应使用 <code>std::bad_alloc</code> 异常表示内存分配失败</li>
<li>释放函数不允许抛出异常</li>
</ul><p>举一个具体的例子，<code>make_shared</code> 函数会调用 <code>operator new</code>，并期待内存分配失败时会抛出异常。如果你自己提供的 <code>operator new</code> 替换版本抛出了异常，那 <code>make_shared</code> 也会有正常的失败行为；而如果你提供的 <code>operator new</code> 替换版本返回了空指针，那程序一般就会因为访问空指针而崩溃了——虽然我不能担保所有标准库的行为都是这样，但这样的行为至少是完全符合 C++ 标准的。</p><h2>布置分配和释放函数</h2><p>为了应对一些更加灵活的内存分配和释放场景，特别是考虑到有些环境完全不允许使用异常，C++ 里有所谓的布置（placement）<code>new</code> 和对应的分配和释放函数。我们可以在 <code>new</code> 时传递额外的特殊参数，编译器则会把这些额外参数传给 <code>operator new</code>，并利用重载机制找到正确的分配函数 <span class="orange">[2]</span>。</p><p>它的最常见形式在标准库的头文件 <new> 中已经定义了：</new></p><pre><code class="language-cpp">struct nothrow_t {
  explicit nothrow_t() = default;
};

extern const nothrow_t nothrow;

void* operator new(
  size_t size,
  const nothrow_t&amp;) noexcept;
void* operator new[](
  size_t size,
  const nothrow_t&amp;) noexcept;
</code></pre><p>这样，当我们使用 <code>new(std::nothrow) Obj</code> 这样的形式时，编译器会产生对 <code>operator new(size_t, const nothrow_t&amp;)</code> 的调用，而这个函数就不会抛出异常了——它会跟 <code>malloc</code> 一样，在内存分配失败时返回空指针。</p><p>讲到这里，你可能会疑惑了：我说到了布置分配函数和释放函数，但似乎我们并不需要布置释放函数啊——确实 C++ 里也没有 <code>delete(nothrow) ptr</code> 这样的语法。单单对于无异常编程的场景，布置释放函数确实意义不大。但作为一种通用机制，C++ 的设计者需要考虑其他的应用场景；特别是，当布置分配函数成功而构造函数失败的情况。回想我们讲过的 <code>new Circle(…)</code> 的过程：</p><pre><code class="language-cpp">{
  void* temp = operator new(sizeof(circle));
  try {
    circle* ptr =
      static_cast&lt;circle*&gt;(temp);
    ptr-&gt;circle(…);
    return ptr;
  }
  catch (...) {
    operator delete(ptr);
    throw;
  }
}
</code></pre><p>对于普通的 <code>new Obj</code>，在构造函数发生异常时编译器会自动调用 <code>operator delete(void*)</code>。那对于 <code>new(placementTag) Obj</code> 呢？</p><p>我想你应该已经猜到了，编译器会产生一个对 <code>operator delete(ptr, placementTag)</code> 的调用。如果对应的 <code>operator delete</code> 重载不存在，那编译器则不会产生对 <code>operator delete</code> 的调用。此时，如果相应的 <code>operator new</code> 确实分配了内存的话，我们就有了内存泄漏。所以，通常我们提供布置分配函数时，都需要提供对应的布置释放函数，来应对这种情况。</p><p>事实上，标准库对布置分配函数都提供了对应的布置释放函数，即使在布置释放函数什么事都不需要做的时候。而编译器通常也会对用户只提供布置分配函数而没有提供布置释放函数的情况进行告警。</p><h3>不分配内存的布置分配和释放函数</h3><p>除了 <code>nothrow</code> 之外，另外一种常见的布置分配和释放函数的定义如下（简洁起见，我略去了数组版本）：</p><pre><code class="language-cpp">inline void*
operator new(size_t,
             void* ptr) noexcept
{ return ptr; }

inline void
operator delete(void*,
                void*) noexcept
{}
</code></pre><p>根据这种形式，我们可以写出下面这样的代码，把对象构造在一个已经存在的缓冲区上：</p><pre><code class="language-cpp">shape* create_shape(void* buffer,
                    size_t size,
                    shape_type type)
{
  …
  switch (type) {
  case shape_type::circle:
    assert(size &gt;= sizeof(circle));
    return new(buffer) circle();
  case shape_type::triangle:
    assert(size &gt;= sizeof(triangle));
    return new(buffer) triangle();
  case shape_type::rectangle:
    assert(size &gt;= sizeof(rectangle));
    return new(buffer) rectangle();
  …
  }
}

shape_type type = …;
char buffer[200];
auto ptr = create_shape(
  buffer, sizeof buffer, type);
// 使用 ptr
ptr-&gt;~shape();
</code></pre><p>在这个 <code>create_shape</code> 的实现里，我们不在堆上创建对象，而是在一个现有的缓冲区上创建对象。这时候 <code>operator new(size_t, void*)</code> 这个重载就能用得上了，虽然它只是简单地返回缓冲区的地址。显然，释放函数确实不需要做任何事情；但是，我们仍需用 <code>ptr-&gt;~shape()</code> 这样的形式显式地在缓冲区失效前对对象进行析构。</p><p>另外注意，跟大部分其他分配函数和释放函数不同，这些函数是不能被用户提供的版本替换的。</p><h2>内存对齐的分配和释放函数</h2><p>在 C++11 之前，C++ 要产生特殊的对象对齐，只能使用编译器厂商提供的特殊说明符。比如，要把一个结构体按 32 字节对齐，在 GCC 下我们需要这样写：</p><pre><code class="language-cpp">struct S {
  float v[8];
} __attribute__((aligned(32)));
</code></pre><p>到了 MSVC，我们就得写成：</p><pre><code class="language-cpp">__declspec(align(32)) struct S {
  float v[8];
};
</code></pre><p>这当然不那么令人满意。所幸，这个问题到了 C++11 就有了很大的缓解，我们可以使用 <code>alignas</code> 关键字来跨平台地处理这个问题了：</p><pre><code class="language-cpp">struct alignas(32) S {
  float v[8];
};
</code></pre><p>但在 C++17 之前，这样的结构体碰到 <code>new</code> 和 <code>delete</code> 依然会有问题，因为 <code>new</code> 和 <code>delete</code> 没有任何机制来处理内存对齐问题。如果你用了 <code>new S</code> 这样的表达式，结果的对齐仍然不会考虑结构体的对齐要求，而只是实现里的默认对齐值，通常是 8 或 16——你没有一种通用的办法来进行控制。</p><p>C++17 对此的解决方式是引入了一堆新的使用 <code>std::align_val_t</code> 的分配和释放函数。<code>align_val_t</code> 是一个枚举类，目的是给对齐值一个强类型。标准库提供的相关分配和释放函数有以下这些（<span class="orange">[3] 和 [4]</span>）：</p><pre><code class="language-cpp">void* operator new(
  size_t size, align_val_t al);
void* operator new[](
  size_t size, align_val_t al);
void* operator new(
  size_t size, align_val_t al,
  const nothrow_t&amp;) noexcept;
void* operator new[](
  size_t size, align_val_t al,
  const nothrow_t&amp;) noexcept;
void operator delete(
  void* ptr,
  align_val_t al) noexcept;
void operator delete[](
  void* ptr,
  align_val_t al) noexcept;
void operator delete(
  void* ptr, align_val_t al,
  const nothrow_t&amp;) noexcept;
void operator delete[](
  void* ptr, align_val_t al,
  const nothrow_t&amp;) noexcept;
</code></pre><p>如果我们写出 <code>new S</code> 这样的表达式，在 C++17 里就会自动产生一个 <code>operator new(sizeof(S), std::align_val_t{32})</code> 这样的调用。系统的默认实现，或者用户提供的替换实现，都必须提供相应的对齐保证，对于 <code>new S</code> 可以保证返回的指针的二进制表示的最低 5 位为 0。</p><p>参考资料 <span class="orange">[6]</span> 里展示了一个可以直接被分配函数和释放函数调用的函数实现（C++17 提供的 <code>aligned_alloc</code> 目前在 MSVC 下没有实现，因为 Windows 下无法提供内存对齐的高效 <code>free</code> 实现 <span class="orange">[5]</span>）。</p><h2>替换分配和释放函数</h2><p>我前面已经提过，用户可以替换标准库提供的大部分分配和释放函数。作为一种可以适用多种场景、可灵活扩展的语言，我们可能出于以下的理由来替换分配和释放函数：</p><ul>
<li>用来适配特定平台或环境的内存管理器</li>
<li>用来对内存进行跟踪和排错</li>
<li>用来实现内存池</li>
<li>……</li>
</ul><p>第一种情况要根据特定的环境来考虑，这里没法展开。其他两种情况，我们后续会进行讨论。参考资料 <span class="orange">[7]</span> 里提供了一个我从 2004 年开始写的内存泄漏检测器，只要把这个文件链接到你的项目中，程序即可在退出时检查是否发生了 <code>new</code>/<code>delete</code> 不匹配导致的内存泄漏。它的原理在 <span class="orange">[1]</span> 中进行了讨论。我们后面也会讨论一个更新的内存泄漏检测器的实现。</p><p>在替换分配和释放函数时，有一个小细节需要注意一下。对于最普通的 <code>operator new(size_t)</code>，我们一般应考虑同时提供 <code>operator delete(void*)</code> 和 <code>operator delete(void*, size_t)</code>。如果不提供的话，至少 GCC 会对此进行报警（当使用了 <code>-Wextra</code> 告警选项时）。</p><p>C++ 标准里规定，如果同时提供了这两个释放函数的话，编译器会优先选择带 <code>size_t</code> 参数的重载——从理论上讲，利用 <code>size_t</code> 大小参数可以获得更高的性能。Andrei Alexandrescu 更是争辩只用指针的释放函数是一个设计错误。不过，业界的惯性是巨大的。由于 Unix 和 C 的内存管理基本上是基于 <code>malloc</code>/<code>free</code> 的模式，目前对 <code>operator delete(void*, size_t)</code> 的实现（包括标准库里的实现）也基本上只是转发到 <code>operator delete(void*)</code> 而已。</p><h3>类特定的分配和释放函数</h3><p>分配和释放函数并不一定只能进行全局的替换。我们完全可以只对某一个类（如 <code>Obj</code>）替换它的分配和释放函数，这样，只有 <code>new Obj</code> 和 <code>delete pObj</code> 这样的表达式才会使用对应的分配和释放函数。代码如下所示：</p><pre><code class="language-cpp">class Obj {
public:
  …
  static void* operator new(size_t);
  static void operator delete(
    void* ptr) noexcept;
};
</code></pre><p>你可能想，是不是可以用类特定的分配和释放函数来实现一个内存池呢？毕竟，一个类的分配大小是固定的，应该会提供很多便利性。回答是：也对，也不对。</p><p>对的原因是，以上推理本身没有问题。事实上，我在十几年前就尝试过这样的实现 <span class="orange">[8]</span>。</p><p>不对的原因是，目前大部分代码里已经不再直接使用 <code>new</code> 和 <code>delete</code> 来创建和销毁对象了。<code>make_shared</code> 函数会一次性分配对象和引用计数的空间，减少内存分配和释放的次数，因而类特定的 <code>operator new</code> 和 <code>operator delete</code> 不会被使用。<code>list</code> 和 <code>map</code> 这样的容器会把对象所需的空间和结点相关的其他信息一起分配，因而类特定的 <code>operator new</code> 和 <code>operator delete</code> 也不会被使用。而 <code>vector</code> 这样的容器会一次性分配多个对象所需的空间，同样不会使用类特定的 <code>operator new</code> 和 <code>operator delete</code>。</p><p>因此，总体来说，类特定的分配和释放函数在现代 C++ 里已经成了一个比较鸡肋的功能。我们也就不多展开讨论了。</p><p>当然，我们需要定制内存分配和释放行为的需求仍然在。对于容器，我们是有办法的，因为容器的分配器参数（<code>Allocator</code>）就是用来解决这个问题的。这个我们放在下一讲进行讨论。</p><h2>内容小结</h2><p>今天我们讨论了 <code>new</code> 和 <code>delete</code> 背后的一个细节，分配函数和释放函数。标准库里实现了这些函数，同时也允许用户对其进行替换，来定制程序的行为。</p><h2>课后思考</h2><p>考虑一下，用户通过 <code>new Obj</code> 得到的指针和 <code>operator new</code> 返回的指针相同吗？通过 <code>new Obj[n]</code> 得到的指针和 <code>operator new[]</code> 返回的指针呢？</p><p>欢迎留言和我分享你的观点。</p><h2><span class="reference">参考资料</span></h2><p><span class="reference">[1] 吴咏炜, “A cross-platform memory leak detector”. <a href="http://wyw.dcweb.cn/leakage.htm">http://wyw.dcweb.cn/leakage.htm</a></span></p><p><span class="reference">[2] cppreference.com, “new expression”. <a href="https://en.cppreference.com/w/cpp/language/new">https://en.cppreference.com/w/cpp/language/new</a></span></p><p><span class="reference">[2a] cppreference.com, “new 表达式”. <a href="https://zh.cppreference.com/w/cpp/language/new">https://zh.cppreference.com/w/cpp/language/new</a></span></p><p><span class="reference">[3] cppreference.com, “operator new, operator new[]”. <a href="https://en.cppreference.com/w/cpp/memory/new/operator_new">https://en.cppreference.com/w/cpp/memory/new/operator_new</a></span></p><p><span class="reference">[3a] cppreference.com, “operator new, operator new[]”. <a href="https://zh.cppreference.com/w/cpp/memory/new/operator_new">https://zh.cppreference.com/w/cpp/memory/new/operator_new</a></span></p><p><span class="reference">[4] cppreference.com, “operator delete, operator delete[]”. <a href="https://en.cppreference.com/w/cpp/memory/new/operator_delete">https://en.cppreference.com/w/cpp/memory/new/operator_delete</a></span></p><p><span class="reference">[4a] cppreference.com, “operator delete, operator delete[]”. <a href="https://zh.cppreference.com/w/cpp/memory/new/operator_delete">https://zh.cppreference.com/w/cpp/memory/new/operator_delete</a></span></p><p><span class="reference">[5] Microsoft, “&lt;cstdlib&gt;”. <a href="https://docs.microsoft.com/en-us/cpp/standard-library/cstdlib">https://docs.microsoft.com/en-us/cpp/standard-library/cstdlib</a></span></p><p><span class="reference">[6] 吴咏炜, “aligned_memory.cpp”. <a href="https://github.com/adah1972/nvwa/blob/master/nvwa/aligned_memory.cpp">https://github.com/adah1972/nvwa/blob/master/nvwa/aligned_memory.cpp</a></span></p><p><span class="reference">[7] 吴咏炜, “debug_new.cpp”. <a href="https://github.com/adah1972/nvwa/blob/master/nvwa/debug_new.cpp">https://github.com/adah1972/nvwa/blob/master/nvwa/debug_new.cpp</a></span></p><p><span class="reference">[8] 吴咏炜, “A cross-platform memory leak detector”. <a href="http://wyw.dcweb.cn/static_mem_pool.htm">http://wyw.dcweb.cn/static_mem_pool.htm</a></span></p>