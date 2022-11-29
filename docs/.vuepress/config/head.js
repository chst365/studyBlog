// head
module.exports = [
    // 注入到页面<head> 中的标签，格式[tagName, { attrName: attrValue }, innerHTML?]
    ['link', { rel: 'icon', href: '/img/logo.png' }], //favicons，资源放在public文件夹
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    [
        'meta',
        {
            name: 'keywords',
            content: '前端博客,个人技术博客,前端,前端开发,前端框架,web前端,前端面试题,技术文档,学习,面试,JavaScript,js,ES6,TypeScript,vue,python,css3,html5,Node,git,github,markdown',
        },
    ],
    ['meta', { name: 'baidu_union_verify', content: '336dc4617aeb18a987511364008d0e6a' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'apple-touch-icon', size: '152x152', href: '/img/apple-touch-icon.png' }],
    ['link', { rel: 'mask-icon', href: '/img/360x360.png', color: '#3eaf7c' }],
    ['meta', { name: 'msapplication-TileImage', content: '/img/192x192.png' }],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }],
    // ['meta', { name: 'baidu-site-verification', content: '7F55weZDDc' }], // 百度统计的站长验证
    ['meta', { name: 'theme-color', content: '#11a8cd' }], // 移动浏览器主题颜色
    // [
    //     'script',
    //     {
    //         'data-website-id': 'd37fd1ba-3ce4-4443-b8d7-88c163c8f9c2',
    //         async: 'async',
    //         src: 'https://umami.smart-lzgz.cn/umami.js',
    //     },
    // ],
    [
        'script',
        {
            src: '/js/matomo.js',
        }
    ]
    // [
    //     'script',
    //     {
    //         'data-ad-client': 'ca-pub-7828333725993554',
    //         async: 'async',
    //         src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js',
    //     },
    // ], // 网站关联Google AdSense 与 html格式广告支持
];
