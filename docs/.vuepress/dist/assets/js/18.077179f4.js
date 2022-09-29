(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{341:function(n,s,a){"use strict";a.r(s);var e=a(4),r=Object(e.a)({},(function(){var n=this,s=n._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[s("p",[s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/chst365/bolgImgs/imgs/topImgs/311.jpg",alt:""}})]),n._v(" "),s("h1",{attrs:{id:"三、接口"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#三、接口"}},[n._v("#")]),n._v(" 三、接口")]),n._v(" "),s("h2",{attrs:{id:"对象类型接口"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#对象类型接口"}},[n._v("#")]),n._v(" 对象类型接口")]),n._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[n._v("interface List {\n    // 只读属性：不可更改\n    readonly id: number;\n    name: string;\n    // 字符串索引签名\n    [x: string]: any;\n    // 可选属性 \n    age?: number\n}\ninterface Result {\n    data: List[]\n}\nfunction render(result: Result) {\n    result.data.forEach((value) => {\n        console.log(value.id, value.name)\n        if (value.age) {\n            console.log(value.age)\n        }\n    })\n}\nlet result = {\n    data: [\n        {id: 1, name: 'A', sex: 'male'},\n        {id: 2, name: 'B'}\n    ]\n}\n// 字面量形式，编译类型检查会报错\n// 绕过类型检查的方式：\n// 1. 通过给一个变量\n// 2. 使用类型断言\n// 3. 使用字符串索引签名\n// \n// 类型断言有两种写法:建议用写法一，写法二在react里面有冲突\n// 写法一：\nrender({\n    data: [\n        {id: 1, name: 'A', sex: 'male'},\n        {id: 2, name: 'B'}\n    ]\n} as Result)  \n// 写法二：\nrender(<Result>{\n    data: [\n        {id: 1, name: 'A', sex: 'male'},\n        {id: 2, name: 'B'}\n    ]\n})  \nrender(result)\n// 数字索引字符串数组\ninterface StringArray {\n    [index: number]: string\n}\nlet charts: StringArray = ['A', 'B']\n// 字符串索引字符串数组\ninterface Names {\n    [x: string]: any;\n    // y:number;\n    [z: number]: string\n}\n")])]),n._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[n._v("1")]),s("br"),s("span",{staticClass:"line-number"},[n._v("2")]),s("br"),s("span",{staticClass:"line-number"},[n._v("3")]),s("br"),s("span",{staticClass:"line-number"},[n._v("4")]),s("br"),s("span",{staticClass:"line-number"},[n._v("5")]),s("br"),s("span",{staticClass:"line-number"},[n._v("6")]),s("br"),s("span",{staticClass:"line-number"},[n._v("7")]),s("br"),s("span",{staticClass:"line-number"},[n._v("8")]),s("br"),s("span",{staticClass:"line-number"},[n._v("9")]),s("br"),s("span",{staticClass:"line-number"},[n._v("10")]),s("br"),s("span",{staticClass:"line-number"},[n._v("11")]),s("br"),s("span",{staticClass:"line-number"},[n._v("12")]),s("br"),s("span",{staticClass:"line-number"},[n._v("13")]),s("br"),s("span",{staticClass:"line-number"},[n._v("14")]),s("br"),s("span",{staticClass:"line-number"},[n._v("15")]),s("br"),s("span",{staticClass:"line-number"},[n._v("16")]),s("br"),s("span",{staticClass:"line-number"},[n._v("17")]),s("br"),s("span",{staticClass:"line-number"},[n._v("18")]),s("br"),s("span",{staticClass:"line-number"},[n._v("19")]),s("br"),s("span",{staticClass:"line-number"},[n._v("20")]),s("br"),s("span",{staticClass:"line-number"},[n._v("21")]),s("br"),s("span",{staticClass:"line-number"},[n._v("22")]),s("br"),s("span",{staticClass:"line-number"},[n._v("23")]),s("br"),s("span",{staticClass:"line-number"},[n._v("24")]),s("br"),s("span",{staticClass:"line-number"},[n._v("25")]),s("br"),s("span",{staticClass:"line-number"},[n._v("26")]),s("br"),s("span",{staticClass:"line-number"},[n._v("27")]),s("br"),s("span",{staticClass:"line-number"},[n._v("28")]),s("br"),s("span",{staticClass:"line-number"},[n._v("29")]),s("br"),s("span",{staticClass:"line-number"},[n._v("30")]),s("br"),s("span",{staticClass:"line-number"},[n._v("31")]),s("br"),s("span",{staticClass:"line-number"},[n._v("32")]),s("br"),s("span",{staticClass:"line-number"},[n._v("33")]),s("br"),s("span",{staticClass:"line-number"},[n._v("34")]),s("br"),s("span",{staticClass:"line-number"},[n._v("35")]),s("br"),s("span",{staticClass:"line-number"},[n._v("36")]),s("br"),s("span",{staticClass:"line-number"},[n._v("37")]),s("br"),s("span",{staticClass:"line-number"},[n._v("38")]),s("br"),s("span",{staticClass:"line-number"},[n._v("39")]),s("br"),s("span",{staticClass:"line-number"},[n._v("40")]),s("br"),s("span",{staticClass:"line-number"},[n._v("41")]),s("br"),s("span",{staticClass:"line-number"},[n._v("42")]),s("br"),s("span",{staticClass:"line-number"},[n._v("43")]),s("br"),s("span",{staticClass:"line-number"},[n._v("44")]),s("br"),s("span",{staticClass:"line-number"},[n._v("45")]),s("br"),s("span",{staticClass:"line-number"},[n._v("46")]),s("br"),s("span",{staticClass:"line-number"},[n._v("47")]),s("br"),s("span",{staticClass:"line-number"},[n._v("48")]),s("br"),s("span",{staticClass:"line-number"},[n._v("49")]),s("br"),s("span",{staticClass:"line-number"},[n._v("50")]),s("br"),s("span",{staticClass:"line-number"},[n._v("51")]),s("br"),s("span",{staticClass:"line-number"},[n._v("52")]),s("br"),s("span",{staticClass:"line-number"},[n._v("53")]),s("br"),s("span",{staticClass:"line-number"},[n._v("54")]),s("br"),s("span",{staticClass:"line-number"},[n._v("55")]),s("br"),s("span",{staticClass:"line-number"},[n._v("56")]),s("br"),s("span",{staticClass:"line-number"},[n._v("57")]),s("br"),s("span",{staticClass:"line-number"},[n._v("58")]),s("br"),s("span",{staticClass:"line-number"},[n._v("59")]),s("br")])]),s("h2",{attrs:{id:"函数类型接口"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#函数类型接口"}},[n._v("#")]),n._v(" 函数类型接口")]),n._v(" "),s("h3",{attrs:{id:"函数定义"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#函数定义"}},[n._v("#")]),n._v(" 函数定义")]),n._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[n._v("// 函数定义\nfunction sub(x: number, y: number) {\n    return x - y\n}\n\nlet sub2: (x: number, y: number) => number \n\ntype sub3 = (x: number, y: number) => number\n\ninterface sub4 {\n    (x: number, y: number): number\n}\n\n// 可选参数\nfunction sub5(x: number, y?: number) {\n    return y ? x - y : x;\n}\nsub5(1)\n\n// 在必选参数前的默认参数是不可省略的，必选传入明确的undefined,来获取默认值\n// 在必选参数后的默认参数是可以不传的\nfunction sub6(x: number, y = 0, z: number, q = 1) {\n    return x + y + z + q\n}\nconsole.log(sub6(1, undefined, 3))\n\n// 当参数不确定的时候，可以使用剩余参数\nfunction sub7(x: number, ...rest: number[]) {\n    // 数组的reduce方法求和\n    return x + rest.reduce((pre, cur) => pre + cur)\n}\nconsole.log(sub7(1, 2, 3, 4, 5))\n\n// 函数重返\nfunction sub8(...rest: number[]): number;\nfunction sub8(...rest: string[]): string;\nfunction sub8(...rest: any[]): any {\n    let first = rest[0];\n    if (typeof first === 'string') {\n        return rest.join('')\n    }\n    if (typeof first === 'number') {\n        return rest.reduce((pre, cur) => pre + cur)\n    }\n} \nconsole.log(sub8(1, 2, 3))\nconsole.log(sub8('a', 'b', 'c'))\n")])]),n._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[n._v("1")]),s("br"),s("span",{staticClass:"line-number"},[n._v("2")]),s("br"),s("span",{staticClass:"line-number"},[n._v("3")]),s("br"),s("span",{staticClass:"line-number"},[n._v("4")]),s("br"),s("span",{staticClass:"line-number"},[n._v("5")]),s("br"),s("span",{staticClass:"line-number"},[n._v("6")]),s("br"),s("span",{staticClass:"line-number"},[n._v("7")]),s("br"),s("span",{staticClass:"line-number"},[n._v("8")]),s("br"),s("span",{staticClass:"line-number"},[n._v("9")]),s("br"),s("span",{staticClass:"line-number"},[n._v("10")]),s("br"),s("span",{staticClass:"line-number"},[n._v("11")]),s("br"),s("span",{staticClass:"line-number"},[n._v("12")]),s("br"),s("span",{staticClass:"line-number"},[n._v("13")]),s("br"),s("span",{staticClass:"line-number"},[n._v("14")]),s("br"),s("span",{staticClass:"line-number"},[n._v("15")]),s("br"),s("span",{staticClass:"line-number"},[n._v("16")]),s("br"),s("span",{staticClass:"line-number"},[n._v("17")]),s("br"),s("span",{staticClass:"line-number"},[n._v("18")]),s("br"),s("span",{staticClass:"line-number"},[n._v("19")]),s("br"),s("span",{staticClass:"line-number"},[n._v("20")]),s("br"),s("span",{staticClass:"line-number"},[n._v("21")]),s("br"),s("span",{staticClass:"line-number"},[n._v("22")]),s("br"),s("span",{staticClass:"line-number"},[n._v("23")]),s("br"),s("span",{staticClass:"line-number"},[n._v("24")]),s("br"),s("span",{staticClass:"line-number"},[n._v("25")]),s("br"),s("span",{staticClass:"line-number"},[n._v("26")]),s("br"),s("span",{staticClass:"line-number"},[n._v("27")]),s("br"),s("span",{staticClass:"line-number"},[n._v("28")]),s("br"),s("span",{staticClass:"line-number"},[n._v("29")]),s("br"),s("span",{staticClass:"line-number"},[n._v("30")]),s("br"),s("span",{staticClass:"line-number"},[n._v("31")]),s("br"),s("span",{staticClass:"line-number"},[n._v("32")]),s("br"),s("span",{staticClass:"line-number"},[n._v("33")]),s("br"),s("span",{staticClass:"line-number"},[n._v("34")]),s("br"),s("span",{staticClass:"line-number"},[n._v("35")]),s("br"),s("span",{staticClass:"line-number"},[n._v("36")]),s("br"),s("span",{staticClass:"line-number"},[n._v("37")]),s("br"),s("span",{staticClass:"line-number"},[n._v("38")]),s("br"),s("span",{staticClass:"line-number"},[n._v("39")]),s("br"),s("span",{staticClass:"line-number"},[n._v("40")]),s("br"),s("span",{staticClass:"line-number"},[n._v("41")]),s("br"),s("span",{staticClass:"line-number"},[n._v("42")]),s("br"),s("span",{staticClass:"line-number"},[n._v("43")]),s("br"),s("span",{staticClass:"line-number"},[n._v("44")]),s("br"),s("span",{staticClass:"line-number"},[n._v("45")]),s("br"),s("span",{staticClass:"line-number"},[n._v("46")]),s("br"),s("span",{staticClass:"line-number"},[n._v("47")]),s("br")])])])}),[],!1,null,null,null);s.default=r.exports}}]);