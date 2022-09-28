(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{435:function(s,a,t){"use strict";t.r(a);var e=t(15),n=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("p",[t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/chst365/bolgImgs/imgs/topImgs/162.jpg",alt:""}})]),s._v(" "),t("h1",{attrs:{id:"一、基础篇-webpack-与构建发展简史"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#一、基础篇-webpack-与构建发展简史"}},[s._v("#")]),s._v(" 一、基础篇：webpack 与构建发展简史")]),s._v(" "),t("h2",{attrs:{id:"_1-webpack"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-webpack"}},[s._v("#")]),s._v(" 1 webpack")]),s._v(" "),t("h3",{attrs:{id:"_1-1-为什么需要构建工具"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-为什么需要构建工具"}},[s._v("#")]),s._v(" 1.1 为什么需要构建工具")]),s._v(" "),t("ul",[t("li",[s._v("转换 ES6 语法")]),s._v(" "),t("li",[s._v("转换 JSX")]),s._v(" "),t("li",[s._v("CSS 前缀补全/预处理器")]),s._v(" "),t("li",[s._v("压缩混淆")]),s._v(" "),t("li",[s._v("图片压缩")])]),s._v(" "),t("p",[t("img",{attrs:{src:"https://upload.smart-lzgz.cn/mweb/2020%2007%2019%2015951715952571%2015908308033915%20.jpg",alt:"-w433"}})]),s._v(" "),t("h3",{attrs:{id:"_1-2-前端构建演变之路"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-前端构建演变之路"}},[s._v("#")]),s._v(" 1.2 前端构建演变之路")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://upload.smart-lzgz.cn/mweb/2020%2007%2019%2015951715952584%2015908310673899%20.jpg",alt:"-w634"}})]),s._v(" "),t("p",[s._v("YUI: 2008 年\ngrunt:\nfis3: 百度（已不维护）")]),s._v(" "),t("h3",{attrs:{id:"_1-3-为什么选择-webpack"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-为什么选择-webpack"}},[s._v("#")]),s._v(" 1.3 为什么选择 webpack")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://upload.smart-lzgz.cn/mweb/2020%2007%2019%2015951715952596%2015908315906993%20.jpg",alt:"-w806"}})]),s._v(" "),t("p",[s._v("官网："),t("a",{attrs:{href:"https://webpack.js.org/",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://webpack.js.org/"),t("OutboundLink")],1)]),s._v(" "),t("ul",[t("li",[s._v("社区生态丰富")]),s._v(" "),t("li",[s._v("配置灵活和插件化拓展")]),s._v(" "),t("li",[s._v("官方更新迭代速度快")])]),s._v(" "),t("h2",{attrs:{id:"_2-初始-webpack"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-初始-webpack"}},[s._v("#")]),s._v(" 2 初始 webpack")]),s._v(" "),t("h3",{attrs:{id:"_2-1-配置文件名称"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-配置文件名称"}},[s._v("#")]),s._v(" 2.1 配置文件名称")]),s._v(" "),t("p",[s._v("webpack 默认配置文件： webpack.config.js\n可以通过 webpack --config 指定配置文件")]),s._v(" "),t("h3",{attrs:{id:"_2-2-webpack-配置组成"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-webpack-配置组成"}},[s._v("#")]),s._v(" 2.2 webpack 配置组成")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("module.exports = {\n    entry: './src/index.js',                        // 打包的入口文件\n    output: './dist/main.js',                       // 打包的输出\n    mode: 'production',                             // 环境\n    module: {\n        rules: [                                    // Loader 配置\n            { test: /\\.txt$/, use: 'raw-loader' }\n        ]\n    },\n    plugins: [                                      // 插件配置\n        new HtmlwebpackPlugin({\n            template: './src/index.html'\n        })\n    ]\n};\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br")])]),t("h3",{attrs:{id:"_2-3-零配置-webpack-包含哪些内容"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-零配置-webpack-包含哪些内容"}},[s._v("#")]),s._v(" 2.3 零配置 webpack 包含哪些内容")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("module.exports = {\n    entry: './src/index.js',                        // 指定默认的 entry 为： ./src/index.js\n    output: './dist/main.js',                       // 指定默认的 output 为：./dist/main.js\n    mode: 'production',\n    module: {\n        rules: [                                    // Loader 配置\n            { test: /\\.txt$/, use: 'raw-loader' }\n        ]\n    },\n    plugins: [                                      // 插件配置\n        new HtmlwebpackPlugin({\n            template: './src/index.html'\n        })\n    ]\n}\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br")])]),t("h2",{attrs:{id:"_3-环境搭建"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-环境搭建"}},[s._v("#")]),s._v(" 3 环境搭建")]),s._v(" "),t("h3",{attrs:{id:"_3-1-安装-node-js-和-npm"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-安装-node-js-和-npm"}},[s._v("#")]),s._v(" 3.1 安装 Node.js 和 NPM")]),s._v(" "),t("ul",[t("li",[s._v("安装 nvm ("),t("a",{attrs:{href:"https://github.com/nvm-sh/nvm",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://github.com/nvm-sh/nvm"),t("OutboundLink")],1),s._v(")\n"),t("ul",[t("li",[s._v("通过 curl 安装："),t("code",[s._v("curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.34.0/install.sh | bash")])]),s._v(" "),t("li",[s._v("通过 wget 安装："),t("code",[s._v("wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.34.0/install.sh | bash")])])])]),s._v(" "),t("li",[s._v("安装 Node.js 和 NPM\n"),t("ul",[t("li",[t("code",[s._v("nvm install v10.15.3")])]),s._v(" "),t("li",[s._v("检查是否安装成功："),t("code",[s._v("node -v, npm -v")])])])])]),s._v(" "),t("h3",{attrs:{id:"_3-2-安装-webpack-和-webpack-cli"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-安装-webpack-和-webpack-cli"}},[s._v("#")]),s._v(" 3.2 安装 webpack 和 webpack-cli")]),s._v(" "),t("ul",[t("li",[s._v("创建空目录和 package.json\n"),t("ul",[t("li",[t("code",[s._v("mkdir my-project")])]),s._v(" "),t("li",[t("code",[s._v("cd my-project")])]),s._v(" "),t("li",[t("code",[s._v("npm init -y")]),s._v("(-y 默认选择 yes)")])])]),s._v(" "),t("li",[s._v("安装 webpack 和 webpack-cli\n"),t("ul",[t("li",[t("code",[s._v("npm install webpack webpack-cli --save-dev")]),s._v("(--save-dev 依赖只会安装在 dev 里面)")]),s._v(" "),t("li",[s._v("检查是否安装成功："),t("code",[s._v("./node_modules/.bin/webpack -v")])])])])]),s._v(" "),t("h3",{attrs:{id:"_3-3-一个最简单的例子"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-一个最简单的例子"}},[s._v("#")]),s._v(" 3.3 一个最简单的例子")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://upload.smart-lzgz.cn/mweb/2020%2007%2019%2015951715952607%2015908353544440%20.jpg",alt:"-w1198"}})]),s._v(" "),t("h3",{attrs:{id:"_3-3-通过-npm-script-运行-webpack"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-通过-npm-script-运行-webpack"}},[s._v("#")]),s._v(" 3.3 通过 npm script 运行 webpack")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://upload.smart-lzgz.cn/mweb/2020%2007%2019%2015951715952623%2015908360917183%20.jpg",alt:"-w1176"}})])])}),[],!1,null,null,null);a.default=n.exports}}]);