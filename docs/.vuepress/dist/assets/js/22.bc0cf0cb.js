(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{446:function(n,s,a){"use strict";a.r(s);var e=a(15),t=Object(e.a)({},(function(){var n=this,s=n.$createElement,a=n._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/chst365/bolgImgs/imgs/topImgs/79.jpg",alt:""}})]),n._v(" "),a("h1",{attrs:{id:"七、类型检查机制"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#七、类型检查机制"}},[n._v("#")]),n._v(" 七、类型检查机制")]),n._v(" "),a("p",[n._v("类型检查机制：TypeScript编译器在做类型检查时，所秉承的一些原则，以及表现出的一些行为。\n作用：辅助开发，提高开发效率。\n类型检查机制通常有：")]),n._v(" "),a("ul",[a("li",[n._v("类型推断")]),n._v(" "),a("li",[n._v("类型兼容性")]),n._v(" "),a("li",[n._v("类型保护")])]),n._v(" "),a("h2",{attrs:{id:"类型推断"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#类型推断"}},[n._v("#")]),n._v(" 类型推断")]),n._v(" "),a("p",[n._v("不需要指定变量的类型（函数的返回值类型），TypeScript可以根据某些规则自动地为其推断出一个类型。\n类型推断通常分为：")]),n._v(" "),a("ul",[a("li",[n._v("基础类型推断")]),n._v(" "),a("li",[n._v("最佳通用类型推断")]),n._v(" "),a("li",[n._v("上下文类型推断")])]),n._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("/**\n * 基础类型推断\n */\nlet a = 1\nlet b = [1]\n// let c = (x = 1) => {}\nlet d = (x = 1) => x + 1\n/**\n * 最佳通用类型推断：从多个类型推断类型，TS会推荐兼容所有类型的类型\n */\n// slet e = [1, null]\n\n/**\n * 上下文类型推断：从左往右进行推断，上面是从右往左进行推断\n */\nwindow.onkeydown = (event) => {\n    // console.log(event.button)\n}\n\n/**\n * 类型断言 as\n * 使用类型断言可以增加代码的灵活性，但是不可滥用，要对上下文有充足的预判，否则会有安全隐患\n */\ninterface Foo {\n    bar: number\n}\n// let foo = {} as Foo\n// foo.bar = 1\nlet foo: Foo = {\n    bar: 1\n}\n")])]),n._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[n._v("1")]),a("br"),a("span",{staticClass:"line-number"},[n._v("2")]),a("br"),a("span",{staticClass:"line-number"},[n._v("3")]),a("br"),a("span",{staticClass:"line-number"},[n._v("4")]),a("br"),a("span",{staticClass:"line-number"},[n._v("5")]),a("br"),a("span",{staticClass:"line-number"},[n._v("6")]),a("br"),a("span",{staticClass:"line-number"},[n._v("7")]),a("br"),a("span",{staticClass:"line-number"},[n._v("8")]),a("br"),a("span",{staticClass:"line-number"},[n._v("9")]),a("br"),a("span",{staticClass:"line-number"},[n._v("10")]),a("br"),a("span",{staticClass:"line-number"},[n._v("11")]),a("br"),a("span",{staticClass:"line-number"},[n._v("12")]),a("br"),a("span",{staticClass:"line-number"},[n._v("13")]),a("br"),a("span",{staticClass:"line-number"},[n._v("14")]),a("br"),a("span",{staticClass:"line-number"},[n._v("15")]),a("br"),a("span",{staticClass:"line-number"},[n._v("16")]),a("br"),a("span",{staticClass:"line-number"},[n._v("17")]),a("br"),a("span",{staticClass:"line-number"},[n._v("18")]),a("br"),a("span",{staticClass:"line-number"},[n._v("19")]),a("br"),a("span",{staticClass:"line-number"},[n._v("20")]),a("br"),a("span",{staticClass:"line-number"},[n._v("21")]),a("br"),a("span",{staticClass:"line-number"},[n._v("22")]),a("br"),a("span",{staticClass:"line-number"},[n._v("23")]),a("br"),a("span",{staticClass:"line-number"},[n._v("24")]),a("br"),a("span",{staticClass:"line-number"},[n._v("25")]),a("br"),a("span",{staticClass:"line-number"},[n._v("26")]),a("br"),a("span",{staticClass:"line-number"},[n._v("27")]),a("br"),a("span",{staticClass:"line-number"},[n._v("28")]),a("br"),a("span",{staticClass:"line-number"},[n._v("29")]),a("br"),a("span",{staticClass:"line-number"},[n._v("30")]),a("br"),a("span",{staticClass:"line-number"},[n._v("31")]),a("br")])]),a("h2",{attrs:{id:"类型兼容性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#类型兼容性"}},[n._v("#")]),n._v(" 类型兼容性")]),n._v(" "),a("p",[n._v("当一个类型Y可以被赋值给另一个类型X时，我们就可以说类型X兼容类型Y\nX兼容Y：X(目标类型) = Y(源类型)\n口诀：\n结构之间兼容： 成员少的兼容成员多的\n函数之间兼容： 参数多的兼容参数少的")]),n._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("/**\n * 基础类型推断\n */\nlet a = 1\nlet b = [1]\n// let c = (x = 1) => {}\nlet d = (x = 1) => x + 1\n/**\n * 最佳通用类型推断：从多个类型推断类型，TS会推荐兼容所有类型的类型\n */\n// slet e = [1, null]\n\n/**\n * 上下文类型推断：从左往右进行推断，上面是从右往左进行推断\n */\n// window.onkeydown = (event) => {\n//     // console.log(event.button)\n// }\n\n/**\n * 类型断言 as\n * 使用类型断言可以增加代码的灵活性，但是不可滥用，要对上下文有充足的预判，否则会有安全隐患\n */\ninterface Foo {\n    bar: number\n}\n// let foo = {} as Foo\n// foo.bar = 1\nlet foo: Foo = {\n    bar: 1\n}\n\n/**\n * 类型兼容\n * X兼容Y：X(目标类型) = Y(源类型)\n */\n// 关闭strictNullChecks时，字符串类型可以赋值null，这时，我们就可以说字符型兼容null类型\nlet s: string = 'a'\ns = null\n\n// 接口兼容性 \n// 成员少的兼容成员多的\ninterface X {\n    a: any;\n    b: any;\n}\ninterface Y {\n    a: any;\n    b: any;\n    c: any;\n}\nlet z: X = {a: 1, b: 2}\nlet y: Y = {a: 1, b: 2, c: 3}\nx = y\n// y = x\n\n// 函数兼容性\ntype Handler = (a: number, b: number) => void\nfunction hof(handler: Handler) {\n    return handler\n}\n// 1).参数个数：目标函数的参数个数要多于源函数的参数个数\nlet handler1 = (a: number) => {}\nhof(handler1)\nlet handler3 = (a: number, b: number, c: number) => {}\n// hof(handler3)\n\n// 可选参数和剩余参数\n// 关闭strictFunctionTypes，可以兼容\nlet a1 = (p1: number, p2: number) => {}\nlet b1 = (p1?: number, p2?: number) => {}\nlet c1 = (...args: number[]) => {} \na1 = b1\na1 = c1\nb1 = c1\nb1 = a1\nc1 = a1\nc1 = b1\n\n// 2).参数类型\nlet handler4 = (a: string) => {}\n// hof(handler4)\n\ninterface Point3D {\n    x: number;\n    y: number;\n    z: number;\n}\ninterface Point2D {\n    x: number;\n    y: number;\n}\nlet p3d = (point: Point3D) => {};\nlet p2d = (point: Point2D) => {};\np3d = p2d\n// 关闭strictFunctionTypes可兼容以下\np2d = p3d\n\n// 这种函数参数之间相互赋值的情况，叫做函数参数的双向协变\n\n// 3).返回值类型\nlet h = () => ({name: 'Alice'});\nlet g = () => ({name: 'Alice', location: 'shanghai'});\nh = g\n// g = h\n\nfunction overload1(a: number, b: number): number;\nfunction overload1(a: string, b: string): string;\nfunction overload1(a: any, b: any): any {};\n\n// 枚举兼容性\nenum Fruit { Apple, Banana }\nenum Color { Red, Green }\nlet fruit: Fruit.Apple = 3\nlet no: number = Fruit.Apple\n// 枚举之间是完全不兼容的\n// let color: Color.Red = Fruit.Apple\n\n// 类兼容性\n// 如果类中含有私有成员，则这两种类就不兼容，只有父类和子类相互兼容\nclass J {\n    constructor(p: number, q: number) {}\n    id: number = 1\n    // private name: string = ''\n}\nclass K {\n    static s = 1\n    constructor(p: number) {}\n    id: number = 2\n}\nlet aa = new J(1,2);\nlet bb = new K(1);\naa = bb\nbb = aa\nclass L extends J {}\nlet cc = new L(1, 2)\naa = cc \ncc = aa\n\n// 泛型兼容性\n// 泛型接口中没有任何成员是可以相互兼容的\ninterface Empty<T> {\n    value: T\n}\n// let obj1: Empty<number> = {};\n// let obj2: Empty<string> = {};\n// obj1 = obj2\n\n// 泛型函数的定义相同，但是没有指定类型参数，他们之间也是项目兼容的\nlet log3 = <T>(x: T): T => {\n    console.log('x')\n    return x\n}\nlet log4 = <U>(y: U): U => {\n    console.log('y')\n    return y\n}\nlog3 = log4\n")])]),n._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[n._v("1")]),a("br"),a("span",{staticClass:"line-number"},[n._v("2")]),a("br"),a("span",{staticClass:"line-number"},[n._v("3")]),a("br"),a("span",{staticClass:"line-number"},[n._v("4")]),a("br"),a("span",{staticClass:"line-number"},[n._v("5")]),a("br"),a("span",{staticClass:"line-number"},[n._v("6")]),a("br"),a("span",{staticClass:"line-number"},[n._v("7")]),a("br"),a("span",{staticClass:"line-number"},[n._v("8")]),a("br"),a("span",{staticClass:"line-number"},[n._v("9")]),a("br"),a("span",{staticClass:"line-number"},[n._v("10")]),a("br"),a("span",{staticClass:"line-number"},[n._v("11")]),a("br"),a("span",{staticClass:"line-number"},[n._v("12")]),a("br"),a("span",{staticClass:"line-number"},[n._v("13")]),a("br"),a("span",{staticClass:"line-number"},[n._v("14")]),a("br"),a("span",{staticClass:"line-number"},[n._v("15")]),a("br"),a("span",{staticClass:"line-number"},[n._v("16")]),a("br"),a("span",{staticClass:"line-number"},[n._v("17")]),a("br"),a("span",{staticClass:"line-number"},[n._v("18")]),a("br"),a("span",{staticClass:"line-number"},[n._v("19")]),a("br"),a("span",{staticClass:"line-number"},[n._v("20")]),a("br"),a("span",{staticClass:"line-number"},[n._v("21")]),a("br"),a("span",{staticClass:"line-number"},[n._v("22")]),a("br"),a("span",{staticClass:"line-number"},[n._v("23")]),a("br"),a("span",{staticClass:"line-number"},[n._v("24")]),a("br"),a("span",{staticClass:"line-number"},[n._v("25")]),a("br"),a("span",{staticClass:"line-number"},[n._v("26")]),a("br"),a("span",{staticClass:"line-number"},[n._v("27")]),a("br"),a("span",{staticClass:"line-number"},[n._v("28")]),a("br"),a("span",{staticClass:"line-number"},[n._v("29")]),a("br"),a("span",{staticClass:"line-number"},[n._v("30")]),a("br"),a("span",{staticClass:"line-number"},[n._v("31")]),a("br"),a("span",{staticClass:"line-number"},[n._v("32")]),a("br"),a("span",{staticClass:"line-number"},[n._v("33")]),a("br"),a("span",{staticClass:"line-number"},[n._v("34")]),a("br"),a("span",{staticClass:"line-number"},[n._v("35")]),a("br"),a("span",{staticClass:"line-number"},[n._v("36")]),a("br"),a("span",{staticClass:"line-number"},[n._v("37")]),a("br"),a("span",{staticClass:"line-number"},[n._v("38")]),a("br"),a("span",{staticClass:"line-number"},[n._v("39")]),a("br"),a("span",{staticClass:"line-number"},[n._v("40")]),a("br"),a("span",{staticClass:"line-number"},[n._v("41")]),a("br"),a("span",{staticClass:"line-number"},[n._v("42")]),a("br"),a("span",{staticClass:"line-number"},[n._v("43")]),a("br"),a("span",{staticClass:"line-number"},[n._v("44")]),a("br"),a("span",{staticClass:"line-number"},[n._v("45")]),a("br"),a("span",{staticClass:"line-number"},[n._v("46")]),a("br"),a("span",{staticClass:"line-number"},[n._v("47")]),a("br"),a("span",{staticClass:"line-number"},[n._v("48")]),a("br"),a("span",{staticClass:"line-number"},[n._v("49")]),a("br"),a("span",{staticClass:"line-number"},[n._v("50")]),a("br"),a("span",{staticClass:"line-number"},[n._v("51")]),a("br"),a("span",{staticClass:"line-number"},[n._v("52")]),a("br"),a("span",{staticClass:"line-number"},[n._v("53")]),a("br"),a("span",{staticClass:"line-number"},[n._v("54")]),a("br"),a("span",{staticClass:"line-number"},[n._v("55")]),a("br"),a("span",{staticClass:"line-number"},[n._v("56")]),a("br"),a("span",{staticClass:"line-number"},[n._v("57")]),a("br"),a("span",{staticClass:"line-number"},[n._v("58")]),a("br"),a("span",{staticClass:"line-number"},[n._v("59")]),a("br"),a("span",{staticClass:"line-number"},[n._v("60")]),a("br"),a("span",{staticClass:"line-number"},[n._v("61")]),a("br"),a("span",{staticClass:"line-number"},[n._v("62")]),a("br"),a("span",{staticClass:"line-number"},[n._v("63")]),a("br"),a("span",{staticClass:"line-number"},[n._v("64")]),a("br"),a("span",{staticClass:"line-number"},[n._v("65")]),a("br"),a("span",{staticClass:"line-number"},[n._v("66")]),a("br"),a("span",{staticClass:"line-number"},[n._v("67")]),a("br"),a("span",{staticClass:"line-number"},[n._v("68")]),a("br"),a("span",{staticClass:"line-number"},[n._v("69")]),a("br"),a("span",{staticClass:"line-number"},[n._v("70")]),a("br"),a("span",{staticClass:"line-number"},[n._v("71")]),a("br"),a("span",{staticClass:"line-number"},[n._v("72")]),a("br"),a("span",{staticClass:"line-number"},[n._v("73")]),a("br"),a("span",{staticClass:"line-number"},[n._v("74")]),a("br"),a("span",{staticClass:"line-number"},[n._v("75")]),a("br"),a("span",{staticClass:"line-number"},[n._v("76")]),a("br"),a("span",{staticClass:"line-number"},[n._v("77")]),a("br"),a("span",{staticClass:"line-number"},[n._v("78")]),a("br"),a("span",{staticClass:"line-number"},[n._v("79")]),a("br"),a("span",{staticClass:"line-number"},[n._v("80")]),a("br"),a("span",{staticClass:"line-number"},[n._v("81")]),a("br"),a("span",{staticClass:"line-number"},[n._v("82")]),a("br"),a("span",{staticClass:"line-number"},[n._v("83")]),a("br"),a("span",{staticClass:"line-number"},[n._v("84")]),a("br"),a("span",{staticClass:"line-number"},[n._v("85")]),a("br"),a("span",{staticClass:"line-number"},[n._v("86")]),a("br"),a("span",{staticClass:"line-number"},[n._v("87")]),a("br"),a("span",{staticClass:"line-number"},[n._v("88")]),a("br"),a("span",{staticClass:"line-number"},[n._v("89")]),a("br"),a("span",{staticClass:"line-number"},[n._v("90")]),a("br"),a("span",{staticClass:"line-number"},[n._v("91")]),a("br"),a("span",{staticClass:"line-number"},[n._v("92")]),a("br"),a("span",{staticClass:"line-number"},[n._v("93")]),a("br"),a("span",{staticClass:"line-number"},[n._v("94")]),a("br"),a("span",{staticClass:"line-number"},[n._v("95")]),a("br"),a("span",{staticClass:"line-number"},[n._v("96")]),a("br"),a("span",{staticClass:"line-number"},[n._v("97")]),a("br"),a("span",{staticClass:"line-number"},[n._v("98")]),a("br"),a("span",{staticClass:"line-number"},[n._v("99")]),a("br"),a("span",{staticClass:"line-number"},[n._v("100")]),a("br"),a("span",{staticClass:"line-number"},[n._v("101")]),a("br"),a("span",{staticClass:"line-number"},[n._v("102")]),a("br"),a("span",{staticClass:"line-number"},[n._v("103")]),a("br"),a("span",{staticClass:"line-number"},[n._v("104")]),a("br"),a("span",{staticClass:"line-number"},[n._v("105")]),a("br"),a("span",{staticClass:"line-number"},[n._v("106")]),a("br"),a("span",{staticClass:"line-number"},[n._v("107")]),a("br"),a("span",{staticClass:"line-number"},[n._v("108")]),a("br"),a("span",{staticClass:"line-number"},[n._v("109")]),a("br"),a("span",{staticClass:"line-number"},[n._v("110")]),a("br"),a("span",{staticClass:"line-number"},[n._v("111")]),a("br"),a("span",{staticClass:"line-number"},[n._v("112")]),a("br"),a("span",{staticClass:"line-number"},[n._v("113")]),a("br"),a("span",{staticClass:"line-number"},[n._v("114")]),a("br"),a("span",{staticClass:"line-number"},[n._v("115")]),a("br"),a("span",{staticClass:"line-number"},[n._v("116")]),a("br"),a("span",{staticClass:"line-number"},[n._v("117")]),a("br"),a("span",{staticClass:"line-number"},[n._v("118")]),a("br"),a("span",{staticClass:"line-number"},[n._v("119")]),a("br"),a("span",{staticClass:"line-number"},[n._v("120")]),a("br"),a("span",{staticClass:"line-number"},[n._v("121")]),a("br"),a("span",{staticClass:"line-number"},[n._v("122")]),a("br"),a("span",{staticClass:"line-number"},[n._v("123")]),a("br"),a("span",{staticClass:"line-number"},[n._v("124")]),a("br"),a("span",{staticClass:"line-number"},[n._v("125")]),a("br"),a("span",{staticClass:"line-number"},[n._v("126")]),a("br"),a("span",{staticClass:"line-number"},[n._v("127")]),a("br"),a("span",{staticClass:"line-number"},[n._v("128")]),a("br"),a("span",{staticClass:"line-number"},[n._v("129")]),a("br"),a("span",{staticClass:"line-number"},[n._v("130")]),a("br"),a("span",{staticClass:"line-number"},[n._v("131")]),a("br"),a("span",{staticClass:"line-number"},[n._v("132")]),a("br"),a("span",{staticClass:"line-number"},[n._v("133")]),a("br"),a("span",{staticClass:"line-number"},[n._v("134")]),a("br"),a("span",{staticClass:"line-number"},[n._v("135")]),a("br"),a("span",{staticClass:"line-number"},[n._v("136")]),a("br"),a("span",{staticClass:"line-number"},[n._v("137")]),a("br"),a("span",{staticClass:"line-number"},[n._v("138")]),a("br"),a("span",{staticClass:"line-number"},[n._v("139")]),a("br"),a("span",{staticClass:"line-number"},[n._v("140")]),a("br"),a("span",{staticClass:"line-number"},[n._v("141")]),a("br"),a("span",{staticClass:"line-number"},[n._v("142")]),a("br"),a("span",{staticClass:"line-number"},[n._v("143")]),a("br"),a("span",{staticClass:"line-number"},[n._v("144")]),a("br"),a("span",{staticClass:"line-number"},[n._v("145")]),a("br"),a("span",{staticClass:"line-number"},[n._v("146")]),a("br"),a("span",{staticClass:"line-number"},[n._v("147")]),a("br"),a("span",{staticClass:"line-number"},[n._v("148")]),a("br"),a("span",{staticClass:"line-number"},[n._v("149")]),a("br"),a("span",{staticClass:"line-number"},[n._v("150")]),a("br"),a("span",{staticClass:"line-number"},[n._v("151")]),a("br"),a("span",{staticClass:"line-number"},[n._v("152")]),a("br"),a("span",{staticClass:"line-number"},[n._v("153")]),a("br"),a("span",{staticClass:"line-number"},[n._v("154")]),a("br"),a("span",{staticClass:"line-number"},[n._v("155")]),a("br"),a("span",{staticClass:"line-number"},[n._v("156")]),a("br"),a("span",{staticClass:"line-number"},[n._v("157")]),a("br"),a("span",{staticClass:"line-number"},[n._v("158")]),a("br")])]),a("h2",{attrs:{id:"类型保护"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#类型保护"}},[n._v("#")]),n._v(" 类型保护")]),n._v(" "),a("p",[n._v("TypeScript 能够在特定的区块中保证变量属于某种确定的类型。\n可以在此区块中放心地引用此类型的属性，或者调用此类型的方法。")]),n._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("enum Type { Strong, Week }\n\nclass Java {\n    helloJava() {\n        console.log('hello Java')\n    }\n    java: any\n}\n\nclass JavaScript {\n    helloJavaScript() {\n        console.log('hello JavaScript')\n    }\n    javascript: any\n}\n\nfunction isJava(lang: Java | JavaScript): lang is Java {\n    return (lang as Java).helloJava !== undefined\n}\nfunction getLanguage(type: Type, x: string | number) {\n    let lang = type === Type.Strong ? new Java() : new JavaScript()\n    // if ((lang as Java).helloJava) {\n    //     (lang as Java).helloJava()\n    // } else {\n    //     (lang as JavaScript).helloJavaScript()\n    // }\n\n    // instanceof\n    // if ( lang instanceof Java ) {\n    //     lang.helloJava()\n    // } else {\n    //     lang.helloJavaScript()\n    // }\n\n    // in \n    // if ('java' in lang) {\n    //     lang.helloJava()\n    // } else {\n    //     lang.helloJavaScript()\n    // }\n\n    // typeof\n    // if (typeof x === 'string') {\n    //     x.length\n    // } else {\n    //     x.toFixed(2)\n    // }\n\n    // \n    if(isJava(lang)) {\n        lang.helloJava()\n    } else {\n        lang.helloJavaScript()\n    }\n    return lang\n}\n\ngetLanguage(Type.Strong)\n")])]),n._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[n._v("1")]),a("br"),a("span",{staticClass:"line-number"},[n._v("2")]),a("br"),a("span",{staticClass:"line-number"},[n._v("3")]),a("br"),a("span",{staticClass:"line-number"},[n._v("4")]),a("br"),a("span",{staticClass:"line-number"},[n._v("5")]),a("br"),a("span",{staticClass:"line-number"},[n._v("6")]),a("br"),a("span",{staticClass:"line-number"},[n._v("7")]),a("br"),a("span",{staticClass:"line-number"},[n._v("8")]),a("br"),a("span",{staticClass:"line-number"},[n._v("9")]),a("br"),a("span",{staticClass:"line-number"},[n._v("10")]),a("br"),a("span",{staticClass:"line-number"},[n._v("11")]),a("br"),a("span",{staticClass:"line-number"},[n._v("12")]),a("br"),a("span",{staticClass:"line-number"},[n._v("13")]),a("br"),a("span",{staticClass:"line-number"},[n._v("14")]),a("br"),a("span",{staticClass:"line-number"},[n._v("15")]),a("br"),a("span",{staticClass:"line-number"},[n._v("16")]),a("br"),a("span",{staticClass:"line-number"},[n._v("17")]),a("br"),a("span",{staticClass:"line-number"},[n._v("18")]),a("br"),a("span",{staticClass:"line-number"},[n._v("19")]),a("br"),a("span",{staticClass:"line-number"},[n._v("20")]),a("br"),a("span",{staticClass:"line-number"},[n._v("21")]),a("br"),a("span",{staticClass:"line-number"},[n._v("22")]),a("br"),a("span",{staticClass:"line-number"},[n._v("23")]),a("br"),a("span",{staticClass:"line-number"},[n._v("24")]),a("br"),a("span",{staticClass:"line-number"},[n._v("25")]),a("br"),a("span",{staticClass:"line-number"},[n._v("26")]),a("br"),a("span",{staticClass:"line-number"},[n._v("27")]),a("br"),a("span",{staticClass:"line-number"},[n._v("28")]),a("br"),a("span",{staticClass:"line-number"},[n._v("29")]),a("br"),a("span",{staticClass:"line-number"},[n._v("30")]),a("br"),a("span",{staticClass:"line-number"},[n._v("31")]),a("br"),a("span",{staticClass:"line-number"},[n._v("32")]),a("br"),a("span",{staticClass:"line-number"},[n._v("33")]),a("br"),a("span",{staticClass:"line-number"},[n._v("34")]),a("br"),a("span",{staticClass:"line-number"},[n._v("35")]),a("br"),a("span",{staticClass:"line-number"},[n._v("36")]),a("br"),a("span",{staticClass:"line-number"},[n._v("37")]),a("br"),a("span",{staticClass:"line-number"},[n._v("38")]),a("br"),a("span",{staticClass:"line-number"},[n._v("39")]),a("br"),a("span",{staticClass:"line-number"},[n._v("40")]),a("br"),a("span",{staticClass:"line-number"},[n._v("41")]),a("br"),a("span",{staticClass:"line-number"},[n._v("42")]),a("br"),a("span",{staticClass:"line-number"},[n._v("43")]),a("br"),a("span",{staticClass:"line-number"},[n._v("44")]),a("br"),a("span",{staticClass:"line-number"},[n._v("45")]),a("br"),a("span",{staticClass:"line-number"},[n._v("46")]),a("br"),a("span",{staticClass:"line-number"},[n._v("47")]),a("br"),a("span",{staticClass:"line-number"},[n._v("48")]),a("br"),a("span",{staticClass:"line-number"},[n._v("49")]),a("br"),a("span",{staticClass:"line-number"},[n._v("50")]),a("br"),a("span",{staticClass:"line-number"},[n._v("51")]),a("br"),a("span",{staticClass:"line-number"},[n._v("52")]),a("br"),a("span",{staticClass:"line-number"},[n._v("53")]),a("br"),a("span",{staticClass:"line-number"},[n._v("54")]),a("br"),a("span",{staticClass:"line-number"},[n._v("55")]),a("br"),a("span",{staticClass:"line-number"},[n._v("56")]),a("br"),a("span",{staticClass:"line-number"},[n._v("57")]),a("br"),a("span",{staticClass:"line-number"},[n._v("58")]),a("br")])])])}),[],!1,null,null,null);s.default=t.exports}}]);