(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{450:function(s,n,a){"use strict";a.r(n);var t=a(18),e=Object(t.a)({},(function(){var s=this,n=s.$createElement,a=s._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/chst365/bolgImgs/imgs/topImgs/416.jpg",alt:""}})]),s._v(" "),a("h1",{attrs:{id:"四、类"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#四、类"}},[s._v("#")]),s._v(" 四、类")]),s._v(" "),a("h2",{attrs:{id:"类的继承和成员修饰符"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#类的继承和成员修饰符"}},[s._v("#")]),s._v(" 类的继承和成员修饰符")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("/**\n * 修饰符\n * 公共：public\n * 私有化：private\n * 被保护：protected\n * 只读：readonly\n * 静态：static\n */\nclass Dog {\n    constructor(name: string) {\n        this.name = name\n    }\n    // 公共\n    public name: string\n    run() {}\n    // 私有化\n    private pri() {}\n    // 被保护: 被保护的类，不能被声明实例化，只能被继承\n    protected pro() {}\n    // 只读： 只能读取，不能被修改，只读属性初始化的时候一定有默认值\n    readonly legs: number = 4\n    // 静态：类的静态成员，只能通过类名来调用，而不能通过子代调用，类的静态成员也可以被继承\n    static food: string = 'bones'\n}\nconsole.log(Dog.prototype)\nlet dog = new Dog('wangwang')\nconsole.log(dog)\nconsole.log(Dog.food)\n// console.log(dog.foot)\n// dog.pri()\n// dog.pri()\n// 内部属性只在实例上，不在原型上\n// 与es不同，实例属性必选有初始值，或者在构造函数中被初始化\n// 除了类的成员可以添加修饰符外，构造函数的参数也可以添加修饰符，作用是将参数自动变为实例属性，可以省略函数内部的定义\n\nclass Husky extends Dog {\n    constructor (name: string, public color: string) {\n        super(name)\n        this.color = color;\n        // this.pri()\n        this.pro()\n    }\n    // color: string\n}\nconsole.log(Husky.food)\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br"),a("span",{staticClass:"line-number"},[s._v("40")]),a("br"),a("span",{staticClass:"line-number"},[s._v("41")]),a("br"),a("span",{staticClass:"line-number"},[s._v("42")]),a("br"),a("span",{staticClass:"line-number"},[s._v("43")]),a("br"),a("span",{staticClass:"line-number"},[s._v("44")]),a("br"),a("span",{staticClass:"line-number"},[s._v("45")]),a("br"),a("span",{staticClass:"line-number"},[s._v("46")]),a("br")])]),a("h2",{attrs:{id:"抽象类与多态"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#抽象类与多态"}},[s._v("#")]),s._v(" 抽象类与多态")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("/** \n * 抽象类与多态\n * 抽象类（abstract）: 抽象类无法实例化，只能被继承\n * 抽象方法：在抽象类中，定义一个方法，不具体实现。好处是在父类声明，子类实现\n * 抽象类的好处：抽离出一些事物的共性，有利于代码的复用与扩展，抽象类也可以实现多态\n * \n * 多态：在父类声明抽象方法，在多个子类不同的实现。\n * 在程序运行时，会根据不同的对象，对应不同的方法，执行不同的操作，这样就实现运行时的绑定\n * \n*/\nabstract class Animal {\n    eat() {\n        console.log('eat')\n    }\n    // 抽象方法\n    abstract sleep(): void\n}\nclass Cat extends Animal {\n    constructor(name: string) {\n        super()\n        this.name = name\n    }\n    name: string\n    run() {}\n    sleep() {\n        console.log('cat sleep')\n    }\n}\n// 抽象类无法实例化，只能被继承\n// let animal = new Animal()\nlet cat = new Cat('miao')\ncat.eat();\n\nclass Tiger extends Animal {\n    sleep() {\n        console.log('tiger sleep')\n    }\n}\nlet tiger = new Tiger();\nlet animals: Animal[] = [cat, tiger]\nanimals.forEach(i => {\n    i.sleep()\n})\n// this类型的作用\nclass WorkFlow {\n    step1() {\n        return this;\n    }\n    step2() {\n        return this;\n    }\n}\n// this 方法的链式调用\nnew WorkFlow().step1().step2()\n\nclass Myflow extends WorkFlow {\n    next() {\n        return this;\n    }\n}\n// 这样就可以保持父类与子类接口调用的连贯性\nnew Myflow().next().step1().next().step2()\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br"),a("span",{staticClass:"line-number"},[s._v("40")]),a("br"),a("span",{staticClass:"line-number"},[s._v("41")]),a("br"),a("span",{staticClass:"line-number"},[s._v("42")]),a("br"),a("span",{staticClass:"line-number"},[s._v("43")]),a("br"),a("span",{staticClass:"line-number"},[s._v("44")]),a("br"),a("span",{staticClass:"line-number"},[s._v("45")]),a("br"),a("span",{staticClass:"line-number"},[s._v("46")]),a("br"),a("span",{staticClass:"line-number"},[s._v("47")]),a("br"),a("span",{staticClass:"line-number"},[s._v("48")]),a("br"),a("span",{staticClass:"line-number"},[s._v("49")]),a("br"),a("span",{staticClass:"line-number"},[s._v("50")]),a("br"),a("span",{staticClass:"line-number"},[s._v("51")]),a("br"),a("span",{staticClass:"line-number"},[s._v("52")]),a("br"),a("span",{staticClass:"line-number"},[s._v("53")]),a("br"),a("span",{staticClass:"line-number"},[s._v("54")]),a("br"),a("span",{staticClass:"line-number"},[s._v("55")]),a("br"),a("span",{staticClass:"line-number"},[s._v("56")]),a("br"),a("span",{staticClass:"line-number"},[s._v("57")]),a("br"),a("span",{staticClass:"line-number"},[s._v("58")]),a("br"),a("span",{staticClass:"line-number"},[s._v("59")]),a("br"),a("span",{staticClass:"line-number"},[s._v("60")]),a("br"),a("span",{staticClass:"line-number"},[s._v("61")]),a("br"),a("span",{staticClass:"line-number"},[s._v("62")]),a("br")])])])}),[],!1,null,null,null);n.default=e.exports}}]);