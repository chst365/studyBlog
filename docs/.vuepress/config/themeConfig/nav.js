// nav
module.exports = [
    { text: '首页', link: '/' },
    {
        text: '开发必备',
        link: '/basic/',
        items: [
            { text: 'Git', link: '/pages/7a6999/' },
        ]
    },
    {
        text: '前端',
        link: '/web/', //目录页链接，此处link是vdoing主题新增的配置项，有二级导航时，可以点击一级导航跳到目录页
        items: [
            // 说明：以下所有link的值只是在相应md文件定义的永久链接（不是什么特殊生成的编码）。另外，注意结尾是有斜杠的
            { text: '浏览器', link: '/pages/270f88/' },
            { text: 'webpack', link: '/pages/a1323f/' },
            { text: 'JavaScript', link: '/pages/d1b7c1/' },
            { text: 'TypeScript', link: '/pages/b3d0bc/' },
            { text: '性能', link: '/pages/ba2200/' },
            { text: '工程化', link: '/pages/cadd60/' },
            { text: 'React', link: '/pages/483d46/' }
        ],
    },
    {
        text: '杂记',
        link: '/notes/',
        items: [
        ]
    },
    {
        text: '极客时间',
        link: '/jksj/',
        items: [
            { text: '跟月影学可视化', link: '/pages/ec316a/' },
            { text: '浏览器工作原理与实践', link: '/pages/726945/' },
            { text: '透视HTTP协议', link: '/pages/fa10d0/' },
            { text: '图解 Google V8', link: '/pages/3d5565/' },
            { text: '玩转Vue 3全家桶', link: '/pages/4d5f44/' },
            { text: '重学前端', link: '/pages/1bc284/' },
            { text: '算法实战高手课', link: '/pages/0d2acb/' },
            { text: '手把手带你写一门编程语言', link: '/pages/58c1b0/' },
        ]
    },
    {
        text: '收藏',
        link: '/pages/beb6c0bd8a66cea6/',
        items: [

        ],
    },
    {
        text: '索引',
        link: '/archives/',
        items: [
            { text: '分类', link: '/categories/' },
            { text: '标签', link: '/tags/' },
            { text: '归档', link: '/archives/' },
        ],
    },
]