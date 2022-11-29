(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{450:function(a,s,t){"use strict";t.r(s);var e=t(18),r=Object(e.a)({},(function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("p",[t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/chst365/bolgImgs/imgs/topImgs/433.jpg",alt:""}})]),a._v(" "),t("h1",{attrs:{id:"五、进阶篇-webpack-构建速度和体积优化策略"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#五、进阶篇-webpack-构建速度和体积优化策略"}},[a._v("#")]),a._v(" 五、进阶篇：webpack 构建速度和体积优化策略")]),a._v(" "),t("h2",{attrs:{id:"_1-初级分析-使用-webpack-内置的-stats"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-初级分析-使用-webpack-内置的-stats"}},[a._v("#")]),a._v(" 1. 初级分析：使用 webpack 内置的 stats")]),a._v(" "),t("h4",{attrs:{id:"stats-构建的统计信息"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#stats-构建的统计信息"}},[a._v("#")]),a._v(" stats: 构建的统计信息")]),a._v(" "),t("h3",{attrs:{id:"package-json-中使用-stats"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#package-json-中使用-stats"}},[a._v("#")]),a._v(" package.json 中使用 stats")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://upload.smart-lzgz.cn/mweb/2020%2007%2019%2015951715362102%2015948278214224%20.jpg",alt:"-w651"}})]),a._v(" "),t("h3",{attrs:{id:"node-js-中使用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#node-js-中使用"}},[a._v("#")]),a._v(" Node.js 中使用")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://upload.smart-lzgz.cn/mweb/2020%2007%2019%2015951715362115%2015948279510261%20.jpg",alt:"-w1287"}})]),a._v(" "),t("h2",{attrs:{id:"_2-速度分析-使用-speed-measure-webpack-plugin"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-速度分析-使用-speed-measure-webpack-plugin"}},[a._v("#")]),a._v(" 2. 速度分析：使用 speed-measure-webpack-plugin")]),a._v(" "),t("p",[a._v("代码示例")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("const SpeedMeasurePlugin = require('speed-measure-webpack-plugin')\n\nconst smp = new SpeedMeasurePlugin()\n\nconst webpackConfig - smp.wrap({\n    plugins: [\n        new MyPlugin(),\n        new MyOtherPlugin()\n    ]\n})\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br"),t("span",{staticClass:"line-number"},[a._v("6")]),t("br"),t("span",{staticClass:"line-number"},[a._v("7")]),t("br"),t("span",{staticClass:"line-number"},[a._v("8")]),t("br"),t("span",{staticClass:"line-number"},[a._v("9")]),t("br"),t("span",{staticClass:"line-number"},[a._v("10")]),t("br")])]),t("p",[a._v("可以看到每个 loader 和插件执行耗时\n"),t("img",{attrs:{src:"https://upload.smart-lzgz.cn/mweb/2020%2007%2019%2015951715362126%2015951689612034%20.jpg",alt:"-w546"}})]),a._v(" "),t("h3",{attrs:{id:"速度分析插件作用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#速度分析插件作用"}},[a._v("#")]),a._v(" 速度分析插件作用")]),a._v(" "),t("h4",{attrs:{id:"分析整个打包总耗时"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#分析整个打包总耗时"}},[a._v("#")]),a._v(" 分析整个打包总耗时")]),a._v(" "),t("h4",{attrs:{id:"每个插件和-loader-的耗时情况"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#每个插件和-loader-的耗时情况"}},[a._v("#")]),a._v(" 每个插件和 loader 的耗时情况")]),a._v(" "),t("h2",{attrs:{id:"_3-webpack-bundle-analyzer-分析体积"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-webpack-bundle-analyzer-分析体积"}},[a._v("#")]),a._v(" 3. webpack-bundle-analyzer 分析体积")]),a._v(" "),t("p",[a._v("代码示例")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("const BundleAnalyzerPlugin = require('webapck-bundle-analyzer').BundleAnalyzerPlugin\n\nmodule.exports = {\n    plugins: [\n        new BundleAnalyzerPlugin()\n    ]\n}\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br"),t("span",{staticClass:"line-number"},[a._v("6")]),t("br"),t("span",{staticClass:"line-number"},[a._v("7")]),t("br")])]),t("p",[a._v("构建完成后会在 8888 端口展示大小\n"),t("img",{attrs:{src:"https://upload.smart-lzgz.cn/mweb/2020%2007%2019%2015951715362141%2015951703125738%20.jpg",alt:"-w669"}})]),a._v(" "),t("h3",{attrs:{id:"可以分析哪些问题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#可以分析哪些问题"}},[a._v("#")]),a._v(" 可以分析哪些问题")]),a._v(" "),t("h4",{attrs:{id:"依赖的第三方模块文件大小"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#依赖的第三方模块文件大小"}},[a._v("#")]),a._v(" 依赖的第三方模块文件大小")]),a._v(" "),t("h4",{attrs:{id:"业务里面的组件代码大小"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#业务里面的组件代码大小"}},[a._v("#")]),a._v(" 业务里面的组件代码大小")]),a._v(" "),t("h2",{attrs:{id:"_4-使用高版本的-webpack-和-node"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-使用高版本的-webpack-和-node"}},[a._v("#")]),a._v(" 4. 使用高版本的 webpack 和 Node")]),a._v(" "),t("h3",{attrs:{id:"使用高版本的-webpack-和-node-js"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用高版本的-webpack-和-node-js"}},[a._v("#")]),a._v(" 使用高版本的 webpack 和 Node.js")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://upload.smart-lzgz.cn/mweb/2021%2009%2014%2016315995711184%2015952573215784%20.jpg",alt:"-w1236"}})]),a._v(" "),t("h3",{attrs:{id:"使用-webpack4-优化原因"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用-webpack4-优化原因"}},[a._v("#")]),a._v(" 使用 Webpack4: 优化原因")]),a._v(" "),t("p",[a._v("V8 带来的优化（for of 替代 forEach、Map 和 Set 替代 Object、includes 替代 indexOf）\n默认使用更快的 md4 hash 算法\nwebpack AST 可以直接从 loader 传递给 AST，减少解析时间\n使用字符串方法替代正则表达式\n"),t("img",{attrs:{src:"https://upload.smart-lzgz.cn/mweb/2021%2009%2014%2016315995711199%2015952580339623%20.jpg",alt:"-w351"}})]),a._v(" "),t("h2",{attrs:{id:"_5-多进程多实例构建"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-多进程多实例构建"}},[a._v("#")]),a._v(" 5.多进程多实例构建")]),a._v(" "),t("h3",{attrs:{id:"多进程-多实例构建-资源并行解析可选方案"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#多进程-多实例构建-资源并行解析可选方案"}},[a._v("#")]),a._v(" 多进程/多实例构建：资源并行解析可选方案")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://upload.smart-lzgz.cn/mweb/2021%2009%2014%2016315995711211%2015963614280857%20.jpg",alt:"-w1046"}})]),a._v(" "),t("h3",{attrs:{id:"多进程-多实例-使用-happypack-解析资源"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#多进程-多实例-使用-happypack-解析资源"}},[a._v("#")]),a._v(" 多进程/多实例：使用 HappyPack 解析资源")]),a._v(" "),t("p",[a._v("原理：每次 webpack 解析一个模块，HappyPack 会将它及它的依赖分配给 worker 线程中")]),a._v(" "),t("h4",{attrs:{id:"代码实例"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#代码实例"}},[a._v("#")]),a._v(" 代码实例")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("exports.plugins = [\n    new HappyPack({\n        id: 'jsx',\n        threads: 4,\n        loaders: ['babel-loader']\n    }),\n    new HappyPack({\n        id: 'styles',\n        threads: 2,\n        loaders: ['style-loader', 'css-loader', 'less-loader']\n    })\n]\n\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br"),t("span",{staticClass:"line-number"},[a._v("6")]),t("br"),t("span",{staticClass:"line-number"},[a._v("7")]),t("br"),t("span",{staticClass:"line-number"},[a._v("8")]),t("br"),t("span",{staticClass:"line-number"},[a._v("9")]),t("br"),t("span",{staticClass:"line-number"},[a._v("10")]),t("br"),t("span",{staticClass:"line-number"},[a._v("11")]),t("br"),t("span",{staticClass:"line-number"},[a._v("12")]),t("br"),t("span",{staticClass:"line-number"},[a._v("13")]),t("br")])]),t("p",[t("img",{attrs:{src:"https://upload.smart-lzgz.cn/mweb/2021%2009%2014%2016315995711225%2015963617670933%20.jpg",alt:"-w557"}})]),a._v(" "),t("h3",{attrs:{id:"多进程-多实例-使用-thread-loader-解析资源"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#多进程-多实例-使用-thread-loader-解析资源"}},[a._v("#")]),a._v(" 多进程/多实例：使用 thread-loader 解析资源")]),a._v(" "),t("p",[a._v("原理：每次 webpack 解析一个模块， thread-loader 会将它及它的依赖分配给 worker 线程中\n"),t("img",{attrs:{src:"https://upload.smart-lzgz.cn/mweb/2021%2009%2014%2016315995711239%2015963620661300%20.jpg",alt:"-w423"}})]),a._v(" "),t("h2",{attrs:{id:"_6-多进程-多实例-并行压缩"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_6-多进程-多实例-并行压缩"}},[a._v("#")]),a._v(" 6. 多进程/多实例：并行压缩")]),a._v(" "),t("h3",{attrs:{id:"方法一-使用-parallel-uglify-plugin-插件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#方法一-使用-parallel-uglify-plugin-插件"}},[a._v("#")]),a._v(" 方法一：使用 parallel-uglify-plugin 插件")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://upload.smart-lzgz.cn/mweb/2021%2009%2014%2016315995711252%2015963631053459%20.jpg",alt:"-w705"}})]),a._v(" "),t("h3",{attrs:{id:"方法二-uglifyjs-webpack-plugin-开启-parallel-参数"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#方法二-uglifyjs-webpack-plugin-开启-parallel-参数"}},[a._v("#")]),a._v(" 方法二：uglifyjs-webpack-plugin 开启 parallel 参数")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://upload.smart-lzgz.cn/mweb/2021%2009%2014%2016315995711265%2015963631484565%20.jpg",alt:"-w598"}})]),a._v(" "),t("h3",{attrs:{id:"方法三-terser-webpack-plugin-开启-parallel-参数"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#方法三-terser-webpack-plugin-开启-parallel-参数"}},[a._v("#")]),a._v(" 方法三：terser-webpack-plugin 开启 parallel 参数")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://upload.smart-lzgz.cn/mweb/2021%2009%2014%2016315995711278%2015963632255671%20.jpg",alt:"-w557"}})]),a._v(" "),t("h2",{attrs:{id:"_7-进一步分包-预编译资源模块"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_7-进一步分包-预编译资源模块"}},[a._v("#")]),a._v(" 7. 进一步分包：预编译资源模块")]),a._v(" "),t("h3",{attrs:{id:"分包-设置-externals"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#分包-设置-externals"}},[a._v("#")]),a._v(" 分包：设置 Externals")]),a._v(" "),t("p",[a._v("思路：将 react、react-dom 基础包通过 cdn 引入，不打入 bundle 中\n方法：使用 html-webpack-externals-plugin\n"),t("img",{attrs:{src:"https://upload.smart-lzgz.cn/mweb/2021%2009%2014%2016315995711292%2015963636390348%20.jpg",alt:"-w783"}})]),a._v(" "),t("h3",{attrs:{id:"进一步分包-预编译资源模块"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#进一步分包-预编译资源模块"}},[a._v("#")]),a._v(" 进一步分包：预编译资源模块")]),a._v(" "),t("p",[a._v("思路：将 react、react-dom、redux、react-redux 基础包和业务基础包打包成一个文件\n方法：使用 DLLPlugin 进行分包，DllReferencePlugin 对 manifest.json 引用")]),a._v(" "),t("h3",{attrs:{id:"使用-dllplugin-进行分包"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用-dllplugin-进行分包"}},[a._v("#")]),a._v(" 使用 DLLPlugin 进行分包")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://upload.smart-lzgz.cn/mweb/2021%2009%2014%2016315995711311%2015963640978232%20.jpg",alt:"-w533"}})]),a._v(" "),t("h3",{attrs:{id:"使用-dllreferenceplugin-引用-manifest-json"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用-dllreferenceplugin-引用-manifest-json"}},[a._v("#")]),a._v(" 使用 DllReferencePlugin 引用 manifest.json")]),a._v(" "),t("p",[a._v("在 webpack.config.js 引入\n"),t("img",{attrs:{src:"https://upload.smart-lzgz.cn/mweb/2021%2009%2014%2016315995711325%2015963642608636%20.jpg",alt:"-w565"}})]),a._v(" "),t("p",[a._v("引用效果\n"),t("img",{attrs:{src:"https://upload.smart-lzgz.cn/mweb/2021%2009%2014%2016315995711339%2015963642809426%20.jpg",alt:"-w800"}})]),a._v(" "),t("h2",{attrs:{id:"_8-充分利用缓存提升二次构建速度"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_8-充分利用缓存提升二次构建速度"}},[a._v("#")]),a._v(" 8. 充分利用缓存提升二次构建速度")]),a._v(" "),t("h3",{attrs:{id:"缓存"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#缓存"}},[a._v("#")]),a._v(" 缓存")]),a._v(" "),t("h4",{attrs:{id:"目的-提升二次构建速度"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#目的-提升二次构建速度"}},[a._v("#")]),a._v(" 目的：提升二次构建速度")]),a._v(" "),t("h4",{attrs:{id:"缓存思路"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#缓存思路"}},[a._v("#")]),a._v(" 缓存思路：")]),a._v(" "),t("ul",[t("li",[a._v("babel-loader 开启缓存")]),a._v(" "),t("li",[a._v("terser-webpack-plugin 开启缓存")]),a._v(" "),t("li",[a._v("使用 cache-loader 或者 hard-soure-webpack-plugin")])])])}),[],!1,null,null,null);s.default=r.exports}}]);