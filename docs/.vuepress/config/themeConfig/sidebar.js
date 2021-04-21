// ！！！注：此文件没有使用到，仅用于测试和侧边栏数据格式的参考。

// 侧边栏
module.exports = {
    '/01.前端/': [
        {
            title: '浏览器',
            collapsable: false, //是否可折叠，可选的，默认true
            children: [
                ['01.JavaScript/01.JavaScript中的名词概念', 'JavaScript中的名词概念'],
                ['01.JavaScript/02.数据类型转换', '数据类型转换'],
                ['01.JavaScript/03.ES5面向对象', 'ES5面向对象'],
                ['01.JavaScript/04.ES6面向对象', 'ES6面向对象'],
                ['01.JavaScript/05.new命令原理', 'new命令原理'],
                ['01.JavaScript/06.多种数组去重性能对比', '多种数组去重性能对比'],
            ]
        },
    ],
    // '/': [ // 在最后定义，在没有单独设置侧边栏时统一使用这个侧边栏
    //   '',
    //   'git',
    //   'github',
    //   'markdown',
    //   'study',
    //   'interview'
    //   // '/',
    //   // {
    //   //   title: 'foo', // 标题，必要的
    //   //   path: '/foo/', // 标题的路径，可选的, 应该是一个绝对路径
    //   //   collapsable: false, // 是否可折叠，可选的，默认true
    //   //   sidebarDepth: 1,    // 深度，可选的, 默认值是 1
    //   //   children: [
    //   //     ['foo/', '子页1'],
    //   //     'foo/1',
    //   //     'foo/2',
    //   //   ]
    //   // },
    //   // {
    //   //   title: 'bar',
    //   //   children: [
    //   //     ['bar/', '子页2'],
    //   //     'bar/3',
    //   //     'bar/4',
    //   //   ]
    //   // }
    // ],
}
