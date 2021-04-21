// nav
module.exports = [
    { text: '首页', link: '/' },
    {
        text: '前端',
        link: '/web/', //目录页链接，此处link是vdoing主题新增的配置项，有二级导航时，可以点击一级导航跳到目录页
        items: [
            // 说明：以下所有link的值只是在相应md文件定义的永久链接（不是什么特殊生成的编码）。另外，注意结尾是有斜杠的
            { text: '浏览器', link: '/pages/270f88/' },
            { text: 'webpack', link: '/pages/a1323f/' },
            { text: 'TypeScript', link: '/pages/b3d0bc/' }
        ],
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