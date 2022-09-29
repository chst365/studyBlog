(window.webpackJsonp=window.webpackJsonp||[]).push([[97],{420:function(_,t,v){"use strict";v.r(t);var a=v(4),s=Object(a.a)({},(function(){var _=this,t=_._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[t("p",[t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/chst365/bolgImgs/imgs/topImgs/83.jpg",alt:""}})]),_._v(" "),t("h2",{attrs:{id:"_1-先来先服务调度算法-fcfs"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-先来先服务调度算法-fcfs"}},[_._v("#")]),_._v(" 1. 先来先服务调度算法(FCFS)")]),_._v(" "),t("p",[t("strong",[_._v("特点")])]),_._v(" "),t("ul",[t("li",[_._v("最简单")]),_._v(" "),t("li",[_._v("用于：作业调度、进程调度")]),_._v(" "),t("li",[_._v("在作业调度中，每次调度从后备作业队列中选择一个或多个最先进入该队列的作业，将它们调入内存，分配资源、创建进程，放入就绪队列")]),_._v(" "),t("li",[_._v("在进程调度中，每次调度从就绪队列中选择一个最先进入该队列的进程，为其分配处理机，使之投入运行，该进程一直运行到完成或发生某事件而阻塞后才放弃处理机。")])]),_._v(" "),t("h2",{attrs:{id:"_2-短作业-进程-优先调度算法-sj-p-f"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-短作业-进程-优先调度算法-sj-p-f"}},[_._v("#")]),_._v(" 2. 短作业（进程）优先调度算法 SJ(P)F")]),_._v(" "),t("p",[t("strong",[_._v("特点")])]),_._v(" "),t("ul",[t("li",[_._v("对象：短作业或短进程")]),_._v(" "),t("li",[_._v("用于：作业调度、进程调度")]),_._v(" "),t("li",[_._v("短作业优先调度（SJF）从后备队列中选择一个或多个估计运行时间最短的作业，调入内存运行")]),_._v(" "),t("li",[_._v("短进程优先调度（SPF）从就绪队列中选出一个估计运行时间最短的进程，分配处理机，使它立即执行并完成，或遇某事件被阻塞放弃处理机时再重新调度")])]),_._v(" "),t("h2",{attrs:{id:"_3-高优先权优先调度算法-fpf"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-高优先权优先调度算法-fpf"}},[_._v("#")]),_._v(" 3. 高优先权优先调度算法 FPF")]),_._v(" "),t("p",[t("strong",[_._v("特点")])]),_._v(" "),t("ul",[t("li",[_._v("为照顾紧迫型作业，使之在进入系统后便优先处理")]),_._v(" "),t("li",[_._v("用于：在批处理系统中作为作业调度算法；在多种操作系统中作为进程调度算法；实时系统")]),_._v(" "),t("li",[_._v("在作业调度中，系统将从后备队列中选择多个优先权最高的作业装入内存")]),_._v(" "),t("li",[_._v("在进程调度中，给就绪队列中优先权最高的进程分配处理机")])]),_._v(" "),t("p",[_._v("在进程调度中，将算法分为两种：")]),_._v(" "),t("ul",[t("li",[t("strong",[_._v("非抢占式优先权算法")]),_._v(" "),t("ul",[t("li",[_._v("系统一旦把处理机分给就绪队列中优先权最高的进程后，该进程便一直执行下去，直到完成；若因某事件使其放弃处理机时，系统将处理机重新分给另一优先权最高的进程。")]),_._v(" "),t("li",[_._v("用于：批处理系统、对于某些实时性不严的实时系统")])])]),_._v(" "),t("li",[t("strong",[_._v("抢占式优先权调度算法")]),_._v(" "),t("ul",[t("li",[_._v("系统同样把处理机分给优先权最高的进程，使之执行。但在执行期间，若出现另一优先权更高的进程，进程调度就立即停止当前进程的执行，重新将处理机分给优先权最高的进程。\n每当系统中出现一个新的就绪进程时，将与当前正执行进程的优先权进行比较，若当前>=新，继续执行，当前<新，则立即停止当前进程，做进程切换，使新进程执行")]),_._v(" "),t("li",[_._v("用于：要求比较严格的实时系统、对性能要求较高的批处理、分时系统")])])])]),_._v(" "),t("h3",{attrs:{id:"优先级倒置现象"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#优先级倒置现象"}},[_._v("#")]),_._v(" 优先级倒置现象")]),_._v(" "),t("p",[_._v("一个低优先级的任务占用一个被高优先级任务所需的共享资源。高优先任务由于拿不到资源而处于受阻状态，直等到低优先级任务释放资源为止。而低优先级获得的CPU时间少，若此时有优先级处于两者间的任务，且不需那个共享资源，则中优先级任务反而超过这两任务而获得CPU时间。\n若高优先级等待资源时不是阻塞等待，而是忙循环，则可能永远无法获得资源。因此，此时低优先级进程无法与高优先级进程争夺CPU时间，而无法执行，进而无法释放资源，导致高优先级任务无法获得资源而继续推进")]),_._v(" "),t("h4",{attrs:{id:"优先级反转案例"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#优先级反转案例"}},[_._v("#")]),_._v(" 优先级反转案例")]),_._v(" "),t("p",[_._v("不同优先级线程对共享资源的访问的同步机制。优先级为高和低的线程tall和线程low需访问共享资源，优先级为中等的线程mid不访问该资源。当low正访问该资源时，tall等该资源的互斥锁，但此时low被mid抢先，导致mid运行tall阻塞。")]),_._v(" "),t("h4",{attrs:{id:"优先级倒置解决方案"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#优先级倒置解决方案"}},[_._v("#")]),_._v(" 优先级倒置解决方案")]),_._v(" "),t("ul",[t("li",[_._v("设置优先级上限：给临界区一个高优先级，进入临界区的进程将获得这个高优先级，若其他试图进入临界区进程的优先级低于这个高优先级，那么优先级反转就不会发生")]),_._v(" "),t("li",[_._v("优先级继承：当一高优先级进程等待一个低优先级进程占用的资源时，低优先级进程将暂时获得高优先级进程的优先级别，释放资源时，低优先级进程回到原来的优先级别。嵌入式系统VxWorks就采用此策略。\n这里还有一个八卦，1997年的美国的火星探测器（使用的就是vxworks)就遇到一个优先级反转问题引起的故障。简单说下，火星探测器有一个信息总线，有一个高优先级的总线任务负责总线数据的存取，访问总线都需要通过一个互斥锁（共享资源出现了）；还有一个低优先级的，运行不是很频繁的气象搜集任务，它需要对总线写数据，也就同样需要访问互斥锁；最后还有一个中优先级的通信任务，它的运行时间比较长。平常这个系统运行毫无问题，但是有一天，在气象任务获得互斥锁往总线写数据的时候，一个中断发生导致通信任务被调度就绪，通信任务抢占了低优先级的气象任务，而无巧不成书的是，此时高优先级的总线任务正在等待气象任务写完数据归还互斥锁，但是由于通信任务抢占了CPU并且运行时间比较长，导致气象任务得不到CPU时间也无法释放互斥锁，本来是高优先级的总线任务也无法执行，总线任务无法及时执行的后果被探路者认为是一个严重错误，最后就是整个系统被重启。Vxworks允许优先级继承，然而遗憾的工程师们将这个选项关闭了。")]),_._v(" "),t("li",[_._v("临界区禁止中断：通过禁止中断来保护临界区。\n采用此策略的系统只有两种优先级：可抢占优先级和中断禁止优先级。\n前者为一般进程运行时的优先级，后者为运行于临界区的优先级。\n火星探路者正是由于在临界区中运行的气象任务被中断发生的通信任务所抢占才导致故障，如果有临界区的禁止中断保护，此一问题也不会发生。")])]),_._v(" "),t("h2",{attrs:{id:"_4-高响应比优先调度算法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-高响应比优先调度算法"}},[_._v("#")]),_._v(" 4. 高响应比优先调度算法")]),_._v(" "),t("p",[_._v("在批处理系统中，短作业优先算法是一种比较好的算法，但在长作业中就不一定。若能为每个作业引入动态优先权，并使作业的优先级随等待时间的增加而以速率a提高，则长作业在等待一段时间后，必有机会分得处理机。\n"),t("img",{attrs:{src:"https://img-blog.csdn.net/20180922085248936?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM1NjQyMDM2/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70",alt:""}}),_._v("\n使用时，每进行调度前，都需先做响应比的计算，会增加系统开销")]),_._v(" "),t("h2",{attrs:{id:"_5-时间片轮转法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-时间片轮转法"}},[_._v("#")]),_._v(" 5. 时间片轮转法")]),_._v(" "),t("p",[_._v("系统将所有的就绪进程按先来先服务的原则排成一个队列，每次调度时，把CPU分给队首进程，并令其执行一个时间片。时间片大小从几ms到几百ms。\n当执行的时间片用完时，由一个计时器发出时钟中断请求，调度程序据此信号来停止该进程的执行，并将它送到就绪队列末尾；把处理机分给就绪队列中新的队首进程，也让它执行一个时间片。\n这样能保证就绪队列中所有进程在一定时间内都能获取一时间片的处理机执行时间。即系统能在给定时间内响应所有用户的请求。")]),_._v(" "),t("h2",{attrs:{id:"_6-多级反馈队列调度算法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_6-多级反馈队列调度算法"}},[_._v("#")]),_._v(" 6. 多级反馈队列调度算法")]),_._v(" "),t("p",[_._v("短进程优先调度算法，仅照顾短进程而忽略长进程，若未指明进程长度，则短进程优先和基于长进程的抢占式调度都无法使用。\n而多级反馈队列调度则不必事先指定各进程所需的执行时间，且满足各类型进程的需要。\n因而被公认目前一种较好的进程调度算法。\n过程如下：")]),_._v(" "),t("ul",[t("li",[_._v("设置多个就绪队列，为每个队列赋予不同优先级。第一个队列优先级最高，第二个次之，其他优先级逐个降低。\n赋予各队列中进程执行时间片的大小也不同，优先权越高的队列，时间片越小，如第二队列的时间片比第一个的长一倍，以此类推。")]),_._v(" "),t("li",[_._v("当一新进程进入内存后，先将它放入第一队列末尾，按FCFS原则排队调度。当轮到该进程执行时，若它能在时间片内完成，便可撤离系统；\n若它在一时间片内完不成，调度程序将该进程转入第二队列末尾，再同样按FCFS等待调度执行，依次类推。")]),_._v(" "),t("li",[_._v("当第一队列空闲时，调度程序才调度第二队列的进程执行，依次类推。\n若处理机正在第i队列的某进程服务时，有一新进程进入高优先级队列（第1列），则此时新进程将抢占此处理机，由调度程序把正在运行的进程放到第i队列末尾")])]),_._v(" "),t("p",[t("img",{attrs:{src:"https://img-blog.csdn.net/20180922085249110?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM1NjQyMDM2/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70",alt:""}})]),_._v(" "),t("h2",{attrs:{id:"批处理系统、分时系统和实时系统中-各采用哪几种进程-作业-调度算法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#批处理系统、分时系统和实时系统中-各采用哪几种进程-作业-调度算法"}},[_._v("#")]),_._v(" 批处理系统、分时系统和实时系统中，各采用哪几种进程（作业）调度算法")]),_._v(" "),t("h4",{attrs:{id:"批处理系统常用调度算法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#批处理系统常用调度算法"}},[_._v("#")]),_._v(" 批处理系统常用调度算法")]),_._v(" "),t("ul",[t("li",[_._v("先来先服务：FCFS")]),_._v(" "),t("li",[_._v("最短作业优先")]),_._v(" "),t("li",[_._v("最短剩余时间优先")]),_._v(" "),t("li",[_._v("响应比最高者优先")])]),_._v(" "),t("h4",{attrs:{id:"分时系统常用调度算法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#分时系统常用调度算法"}},[_._v("#")]),_._v(" 分时系统常用调度算法")]),_._v(" "),t("ul",[t("li",[_._v("轮转调度")]),_._v(" "),t("li",[_._v("优先级调度")]),_._v(" "),t("li",[_._v("多级队列调度")]),_._v(" "),t("li",[_._v("彩票调度")])]),_._v(" "),t("h4",{attrs:{id:"实时系统常用调度算法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#实时系统常用调度算法"}},[_._v("#")]),_._v(" 实时系统常用调度算法")]),_._v(" "),t("ul",[t("li",[_._v("单比率调度")]),_._v(" "),t("li",[_._v("限期调度")]),_._v(" "),t("li",[_._v("最少裕度法")])])])}),[],!1,null,null,null);t.default=s.exports}}]);