// nav
module.exports = [
    { text: '首页', link: '/' },
    {
        text: '开发必备',
        // link: '/basic/',
        items: [
            { text: 'Git', link: '/pages/7a6999/' },
            { text: '网络', link: '/pages/857e93/' },
            { text: '操作系统', link: '/pages/d8e2cc/' },
        ]
    },
    {
        text: '前端',
        // link: '/web/', //目录页链接，此处link是vdoing主题新增的配置项，有二级导航时，可以点击一级导航跳到目录页
        items: [
            // 说明：以下所有link的值只是在相应md文件定义的永久链接（不是什么特殊生成的编码）。另外，注意结尾是有斜杠的
            { text: '浏览器', link: '/pages/270f88/' },
            { text: 'webpack', link: '/pages/a1323f/' },
            { text: 'JavaScript', link: '/pages/d1b7c1/' },
            { text: 'TypeScript', link: '/pages/b3d0bc/' },
            { text: '性能', link: '/pages/ba2200/' },
            { text: '工程化', link: '/pages/cadd60/' },
            { text: 'React', link: '/pages/483d46/' },
            { text: '编程题', link: '/pages/35ccf0/' },
            { text: 'React技术揭秘', link: '/pages/d382d4/' },
            { text: '算法', link: '/pages/e1c67e/' }
        ],
    },
    {
        text: '后端',
        // link: '/basic/',
        items: [
            { text: 'Node', link: '/pages/25e852/' }
        ]
    },
    {
        text: '工具',
        // link: '/pages/3f2100/',
        items: [
            { text: '编码解码', link: '/pages/3b717c/' },
        ]
    },
    {
        text: '面试官',
        // link: '/pages/3f2100/',
        items: [
            { text: 'NodeJS系列', link: '/pages/fad688/' },
            { text: 'Linux系列', link: '/pages/e6ba8c/' },
            { text: 'JavaScript系列', link: '/pages/e82029/' },
            { text: 'HTTP系列', link: '/pages/40b80c/' },
            { text: 'GIT系列', link: '/pages/d342ad/' },
            { text: 'ES6系列', link: '/pages/6450fd/' },
            { text: '设计模式系列', link: '/pages/1e8180/' },
            { text: 'CSS系列', link: '/pages/27a5c3/' },
            { text: '小程序系列', link: '/pages/d1a4f9/' },
            { text: '数据结构与算法系列', link: '/pages/c3a1ba/' },
            { text: 'React系列', link: '/pages/7be89d/' },
            { text: 'Vue3系列', link: '/pages/3aee03/' },
            { text: 'Vue系列', link: '/pages/d0513f/' },
            { text: 'TypeScript系列', link: '/pages/9fc1d5/' },
            { text: 'Webpack系列', link: '/pages/6d6201/' },
        ]
    },
    // {
    //     text: '收藏',
    //     link: '/pages/beb6c0bd8a66cea6/',
    //     items: [

    //     ],
    // },
    {
        text: '索引',
        link: '/archives/',
        items: [
            { text: '分类', link: '/categories/' },
            { text: '标签', link: '/tags/' },
            { text: '归档', link: '/archives/' },
        ],
    },
];