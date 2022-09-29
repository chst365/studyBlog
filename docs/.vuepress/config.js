const head = require('./config/head.js');
const plugins = require('./config/plugins.js');
const themeConfig = require('./config/themeConfig.js');

module.exports = {
    theme: 'vdoing',
    // base: './',
    title: "chst365's blog",
    markdown: {
        lineNumbers: true, // 代码行号
    },
    head,
    plugins,
    themeConfig,
};