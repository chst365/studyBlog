(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{332:function(a,t,s){"use strict";s.r(t);var r=s(3),e=Object(r.a)({},(function(){var a=this,t=a._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("p",[t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/chst365/bolgImgs/imgs/topImgs/56.jpg",alt:""}})]),a._v(" "),t("h1",{attrs:{id:"四、进阶篇-编写可维护的-webpack-构建配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#四、进阶篇-编写可维护的-webpack-构建配置"}},[a._v("#")]),a._v(" 四、进阶篇：编写可维护的 webpack 构建配置")]),a._v(" "),t("h2",{attrs:{id:"_1-构建配置包设计"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-构建配置包设计"}},[a._v("#")]),a._v(" 1. 构建配置包设计")]),a._v(" "),t("h3",{attrs:{id:"构建配置抽离成-npm-包的意义"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#构建配置抽离成-npm-包的意义"}},[a._v("#")]),a._v(" 构建配置抽离成 npm 包的意义")]),a._v(" "),t("h4",{attrs:{id:"通用性"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#通用性"}},[a._v("#")]),a._v(" 通用性")]),a._v(" "),t("ul",[t("li",[a._v("业务开发者无需关注构建配置")]),a._v(" "),t("li",[a._v("统一团队构建脚本")])]),a._v(" "),t("h4",{attrs:{id:"可维护性"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#可维护性"}},[a._v("#")]),a._v(" 可维护性")]),a._v(" "),t("ul",[t("li",[a._v("构建配置合理的拆分")]),a._v(" "),t("li",[a._v("README 文档、ChangeLog 文档等")])]),a._v(" "),t("h4",{attrs:{id:"质量"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#质量"}},[a._v("#")]),a._v(" 质量")]),a._v(" "),t("ul",[t("li",[a._v("冒烟测试、单元测试、测试覆盖率")]),a._v(" "),t("li",[a._v("持续集成")])]),a._v(" "),t("h3",{attrs:{id:"构建配置管理的可选方案"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#构建配置管理的可选方案"}},[a._v("#")]),a._v(" 构建配置管理的可选方案")]),a._v(" "),t("h4",{attrs:{id:"通过多个配置文件管理不同环境的构建-webpack-config-参数进行控制"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#通过多个配置文件管理不同环境的构建-webpack-config-参数进行控制"}},[a._v("#")]),a._v(" 通过多个配置文件管理不同环境的构建，webpack --config 参数进行控制")]),a._v(" "),t("h4",{attrs:{id:"将构建配置设计成一个库-比如-hjs-webpack、neutrino、webpack-blocks"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#将构建配置设计成一个库-比如-hjs-webpack、neutrino、webpack-blocks"}},[a._v("#")]),a._v(" 将构建配置设计成一个库，比如：hjs-webpack、Neutrino、webpack-blocks")]),a._v(" "),t("h4",{attrs:{id:"抽成一个工具进行管理-比如-create-react-app、kyt、nwb"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#抽成一个工具进行管理-比如-create-react-app、kyt、nwb"}},[a._v("#")]),a._v(" 抽成一个工具进行管理，比如：create-react-app、kyt、nwb")]),a._v(" "),t("h4",{attrs:{id:"将所有的配置放在一个文件-通过-env-参数控制分支选择"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#将所有的配置放在一个文件-通过-env-参数控制分支选择"}},[a._v("#")]),a._v(" 将所有的配置放在一个文件，通过 --env 参数控制分支选择")]),a._v(" "),t("h3",{attrs:{id:"构建配置包设计"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#构建配置包设计"}},[a._v("#")]),a._v(" 构建配置包设计")]),a._v(" "),t("h4",{attrs:{id:"通过多个配置文件管理不同环境的-webpack-配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#通过多个配置文件管理不同环境的-webpack-配置"}},[a._v("#")]),a._v(" 通过多个配置文件管理不同环境的 webpack 配置")]),a._v(" "),t("ul",[t("li",[a._v("基础配置：webpack.base.js")]),a._v(" "),t("li",[a._v("开发环境：webpack.dev.js")]),a._v(" "),t("li",[a._v("生产环境：webpack.prod.js")]),a._v(" "),t("li",[a._v("SSR 环境：webpack.ssr.js")]),a._v(" "),t("li",[a._v("......")])]),a._v(" "),t("h4",{attrs:{id:"抽离成一个-npm-包统一管理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#抽离成一个-npm-包统一管理"}},[a._v("#")]),a._v(" 抽离成一个 npm 包统一管理")]),a._v(" "),t("ul",[t("li",[a._v("规范：Git commit 日志、README、ESLint 规范、Semver 规范")]),a._v(" "),t("li",[a._v("质量：冒烟测试、单元测试、测试覆盖率和 CI")])]),a._v(" "),t("h4",{attrs:{id:"通过-webpack-merge-组合配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#通过-webpack-merge-组合配置"}},[a._v("#")]),a._v(" 通过 webpack-merge 组合配置")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v('> merge = require("webpack-merge") ...\n> merge(\n... { a: [1], b: 5, c: 20 },\n... { a: [2], b: 10, d: 421 }\n... )\n{ a: [ 1, 2 ], b: 10, c: 20, d: 421 }\n')])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br"),t("span",{staticClass:"line-number"},[a._v("6")]),t("br")])]),t("p",[a._v("合并配置：module.exports = merge(baseConfig, devConfig)")]),a._v(" "),t("h2",{attrs:{id:"_2-功能模块设计和目录结构"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-功能模块设计和目录结构"}},[a._v("#")]),a._v(" 2. 功能模块设计和目录结构")]),a._v(" "),t("h3",{attrs:{id:"功能模块设计"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#功能模块设计"}},[a._v("#")]),a._v(" 功能模块设计")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://upload.smart-lzgz.cn/mweb/2020%2007%2019%2015951717541966%2015939431602866%20.jpg",alt:"-w834"}})]),a._v(" "),t("h3",{attrs:{id:"目录结构设计"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#目录结构设计"}},[a._v("#")]),a._v(" 目录结构设计")]),a._v(" "),t("h4",{attrs:{id:"lib-放置源代码"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#lib-放置源代码"}},[a._v("#")]),a._v(" lib 放置源代码")]),a._v(" "),t("h4",{attrs:{id:"test-放置测试代码"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#test-放置测试代码"}},[a._v("#")]),a._v(" test 放置测试代码")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("|- /test\n|- /lib\n    |- webpack.dev.js\n    |- webpack.prod.js\n    |- webpack.ssr.js\n    |- webpack.base.js\n|- README.md\n|- CHANGELOG.md\n|- .eslinrc.js\n|- package.json\n|- index.js\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br"),t("span",{staticClass:"line-number"},[a._v("6")]),t("br"),t("span",{staticClass:"line-number"},[a._v("7")]),t("br"),t("span",{staticClass:"line-number"},[a._v("8")]),t("br"),t("span",{staticClass:"line-number"},[a._v("9")]),t("br"),t("span",{staticClass:"line-number"},[a._v("10")]),t("br"),t("span",{staticClass:"line-number"},[a._v("11")]),t("br")])]),t("h2",{attrs:{id:"_3-使用-eslint-规范构建脚本"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-使用-eslint-规范构建脚本"}},[a._v("#")]),a._v(" 3.使用 ESLint 规范构建脚本")]),a._v(" "),t("h4",{attrs:{id:"使用-eslint-config-airbnb-base"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用-eslint-config-airbnb-base"}},[a._v("#")]),a._v(" 使用 eslint-config-airbnb-base")]),a._v(" "),t("h4",{attrs:{id:"eslint-fix-可以自动处理空格"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#eslint-fix-可以自动处理空格"}},[a._v("#")]),a._v(" eslint --fix 可以自动处理空格")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v('module.exports = {\n"parser": "babel-eslint", "extends": "airbnb-base", "env": {\n"browser": true,\n"node": true }\n};\n')])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br")])]),t("h2",{attrs:{id:"_4-冒烟测试-smoke-testing"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-冒烟测试-smoke-testing"}},[a._v("#")]),a._v(" 4.冒烟测试（smoke testing）")]),a._v(" "),t("h4",{attrs:{id:"冒烟测试是指对提交测试的软件在进行详细深入的测试之前而进行的预测试-这种测试的主要目的是暴露导致软件需要重新发布的基本功能失效等严重问题。"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#冒烟测试是指对提交测试的软件在进行详细深入的测试之前而进行的预测试-这种测试的主要目的是暴露导致软件需要重新发布的基本功能失效等严重问题。"}},[a._v("#")]),a._v(" 冒烟测试是指对提交测试的软件在进行详细深入的测试之前而进行的预测试，这种测试的主要目的是暴露导致软件需要重新发布的基本功能失效等严重问题。")]),a._v(" "),t("h3",{attrs:{id:"冒烟测试执行"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#冒烟测试执行"}},[a._v("#")]),a._v(" 冒烟测试执行")]),a._v(" "),t("h4",{attrs:{id:"构建是否成功"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#构建是否成功"}},[a._v("#")]),a._v(" 构建是否成功")]),a._v(" "),t("h4",{attrs:{id:"每次构建完成-build-目录是否有内容输出"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#每次构建完成-build-目录是否有内容输出"}},[a._v("#")]),a._v(" 每次构建完成 build 目录是否有内容输出")]),a._v(" "),t("ul",[t("li",[a._v("是否有 JS、CSS 等静态资源文件")]),a._v(" "),t("li",[a._v("是否有 HTML 文件")])]),a._v(" "),t("h4",{attrs:{id:"判读构建是否成功"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#判读构建是否成功"}},[a._v("#")]),a._v(" 判读构建是否成功")]),a._v(" "),t("p",[a._v("在示例项目里面运行构建，看看是否有报错")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://upload.smart-lzgz.cn/mweb/2020%2007%2019%2015951717541978%2015945642762851%20.jpg",alt:"-w579"}})]),a._v(" "),t("h4",{attrs:{id:"判读基本功能是否正常"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#判读基本功能是否正常"}},[a._v("#")]),a._v(" 判读基本功能是否正常")]),a._v(" "),t("p",[a._v("编写 mocha 测试用例")]),a._v(" "),t("ul",[t("li",[a._v("是否有 JS、CSS 等静态资源文件")]),a._v(" "),t("li",[a._v("是否有 HTML 文件")])]),a._v(" "),t("p",[t("img",{attrs:{src:"https://upload.smart-lzgz.cn/mweb/2020%2007%2019%2015951717541991%2015945644443464%20.jpg",alt:"-w490"}})]),a._v(" "),t("h2",{attrs:{id:"_5-单元测试与测试覆盖率"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-单元测试与测试覆盖率"}},[a._v("#")]),a._v(" 5. 单元测试与测试覆盖率")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://upload.smart-lzgz.cn/mweb/2020%2007%2019%2015951717542002%2015946528680854%20.jpg",alt:""}})]),a._v(" "),t("h3",{attrs:{id:"编写单元测试用例"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#编写单元测试用例"}},[a._v("#")]),a._v(" 编写单元测试用例")]),a._v(" "),t("p",[a._v("技术选型： Mocha + Chai\n测试代码： describe,it,except\n测试命令： mocha add.test.js")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("add.test.js\n\nconst expect = require('chai').expect;\n\nconst add = require('../src/add');\n\ndescribe('use expect: src/add.js', () => { it('add(1, 2) === 3', () => {\nexpect(add(1, 2).to.equal(3)); });\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br"),t("span",{staticClass:"line-number"},[a._v("6")]),t("br"),t("span",{staticClass:"line-number"},[a._v("7")]),t("br"),t("span",{staticClass:"line-number"},[a._v("8")]),t("br")])]),t("h3",{attrs:{id:"单元测试接入"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#单元测试接入"}},[a._v("#")]),a._v(" 单元测试接入")]),a._v(" "),t("ul",[t("li",[t("ol",[t("li",[a._v("安装 mocha + chai\n"),t("code",[a._v("npm i mocha chai -D")])])])]),a._v(" "),t("li",[t("ol",{attrs:{start:"2"}},[t("li",[a._v("新建 test 目录，并增加 xx.test.js 测试文件")])])]),a._v(" "),t("li",[t("ol",{attrs:{start:"3"}},[t("li",[a._v("在 package.json 中的 scripts 字段增加 test 命令")])]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v('"scripts": {\n    "test": "node_modules/mocha/bin/_mocha"\n}\n')])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br")])])]),a._v(" "),t("li",[t("ol",{attrs:{start:"4"}},[t("li",[a._v("执行测试命令\n"),t("code",[a._v("npm run test")])])])])]),a._v(" "),t("h2",{attrs:{id:"_6-持续集成和-travisci"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_6-持续集成和-travisci"}},[a._v("#")]),a._v(" 6. 持续集成和 TravisCI")]),a._v(" "),t("h3",{attrs:{id:"持续集成的作用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#持续集成的作用"}},[a._v("#")]),a._v(" 持续集成的作用")]),a._v(" "),t("h4",{attrs:{id:"优点"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#优点"}},[a._v("#")]),a._v(" 优点：")]),a._v(" "),t("ul",[t("li",[a._v("快速发现错误")]),a._v(" "),t("li",[a._v("防止分支大幅偏离主干")])]),a._v(" "),t("p",[a._v("核心措施是，代码集成到主干之前，必须通过自动化测试，只要有一个测试用例失败，就不能集成。\n"),t("img",{attrs:{src:"https://upload.smart-lzgz.cn/mweb/2020%2007%2019%2015951717542015%2015947370663565%20.jpg",alt:"-w785"}})]),a._v(" "),t("h3",{attrs:{id:"github-最流行的-ci"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#github-最流行的-ci"}},[a._v("#")]),a._v(" Github 最流行的 CI")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://upload.smart-lzgz.cn/mweb/2020%2007%2019%2015951717542026%2015947372518621%20.jpg",alt:"-w707"}})]),a._v(" "),t("h3",{attrs:{id:"接入-travis-ci"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#接入-travis-ci"}},[a._v("#")]),a._v(" 接入 Travis CI")]),a._v(" "),t("ul",[t("li",[t("ol",[t("li",[a._v("https://travis-ci.org/ 使用 GitHub 账号登录")])])]),a._v(" "),t("li",[t("ol",{attrs:{start:"2"}},[t("li",[a._v("在 https://travis-ci.org/account/repositories 为项目开启")])])]),a._v(" "),t("li",[t("ol",{attrs:{start:"3"}},[t("li",[a._v("项目根目录下新增 .travis.yml")])])])]),a._v(" "),t("h3",{attrs:{id:"travis-yml-文件内容"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#travis-yml-文件内容"}},[a._v("#")]),a._v(" travis.yml 文件内容")]),a._v(" "),t("h4",{attrs:{id:"install-安装项目依赖"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#install-安装项目依赖"}},[a._v("#")]),a._v(" install 安装项目依赖")]),a._v(" "),t("h4",{attrs:{id:"script-运行测试用例"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#script-运行测试用例"}},[a._v("#")]),a._v(" script 运行测试用例")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://upload.smart-lzgz.cn/mweb/2020%2007%2019%2015951717542036%2015947376396099%20.jpg",alt:"-w369"}})]),a._v(" "),t("h2",{attrs:{id:"_7-发布到-npm"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_7-发布到-npm"}},[a._v("#")]),a._v(" 7. 发布到 npm")]),a._v(" "),t("h3",{attrs:{id:"发布到-npm"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#发布到-npm"}},[a._v("#")]),a._v(" 发布到 npm")]),a._v(" "),t("h4",{attrs:{id:"添加用户-npm-add-user"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#添加用户-npm-add-user"}},[a._v("#")]),a._v(" 添加用户： npm add user")]),a._v(" "),t("h4",{attrs:{id:"升级版本"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#升级版本"}},[a._v("#")]),a._v(" 升级版本")]),a._v(" "),t("ul",[t("li",[a._v("升级补丁版本号： npm version patch")]),a._v(" "),t("li",[a._v("升级小版本号：npm version minor")]),a._v(" "),t("li",[a._v("升级大版本号：npm version major")])]),a._v(" "),t("h4",{attrs:{id:"发布版本-npm-publish"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#发布版本-npm-publish"}},[a._v("#")]),a._v(" 发布版本：npm publish")]),a._v(" "),t("h2",{attrs:{id:"_8-git-commit-规范和-changelog-生成"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_8-git-commit-规范和-changelog-生成"}},[a._v("#")]),a._v(" 8. Git | Commit 规范和 changelog 生成")]),a._v(" "),t("p",[a._v("良好的 Git commit 规范优势：")]),a._v(" "),t("ul",[t("li",[a._v("加快 Code Review 的流程")]),a._v(" "),t("li",[a._v("根据 Git Commit 的元数据生成 Changelog")]),a._v(" "),t("li",[a._v("后续维护者可以知道 Feature 被修改的原因")])]),a._v(" "),t("h3",{attrs:{id:"技术方案"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#技术方案"}},[a._v("#")]),a._v(" 技术方案")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://upload.smart-lzgz.cn/mweb/2020%2007%2019%2015951717542048%2015948258897669%20.jpg",alt:"-w1312"}})]),a._v(" "),t("h3",{attrs:{id:"提交格式要求"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#提交格式要求"}},[a._v("#")]),a._v(" 提交格式要求")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://upload.smart-lzgz.cn/mweb/2020%2007%2019%2015951717542058%2015948260268687%20.jpg",alt:"-w905"}}),a._v(" "),t("img",{attrs:{src:"https://upload.smart-lzgz.cn/mweb/2020%2007%2019%2015951717542070%2015948260461242%20.jpg",alt:"-w832"}})]),a._v(" "),t("h3",{attrs:{id:"本地开发阶段增加-precommit-钩子"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#本地开发阶段增加-precommit-钩子"}},[a._v("#")]),a._v(" 本地开发阶段增加 precommit 钩子")]),a._v(" "),t("h4",{attrs:{id:"安装-husky"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装-husky"}},[a._v("#")]),a._v(" 安装 husky")]),a._v(" "),t("p",[t("code",[a._v("npm install husky --save-dev")])]),a._v(" "),t("h4",{attrs:{id:"通过-commitmsg-钩子校验信息"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#通过-commitmsg-钩子校验信息"}},[a._v("#")]),a._v(" 通过 commitmsg 钩子校验信息")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v('"scripts": {\n"commitmsg": "validate-commit-msg", "changelog": "conventional-changelog -p\nangular -i CHANGELOG.md -s -r 0" },\n"devDependencies": { "validate-commit-msg": "^2.11.1", "conventional-changelog-cli": "^1.2.0", "husky": "^0.13.1"\n}\n')])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br")])]),t("h4",{attrs:{id:"changelog-生成"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#changelog-生成"}},[a._v("#")]),a._v(" Changelog 生成")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://upload.smart-lzgz.cn/mweb/2020%2007%2019%2015951717542081%2015948265411095%20.jpg",alt:"-w1217"}})]),a._v(" "),t("h2",{attrs:{id:"_9-语义化版本-semantic-versioning-规范格式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_9-语义化版本-semantic-versioning-规范格式"}},[a._v("#")]),a._v(" 9. 语义化版本 （Semantic | Versioning）规范格式")]),a._v(" "),t("h3",{attrs:{id:"开源项目版本信息案例"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#开源项目版本信息案例"}},[a._v("#")]),a._v(" 开源项目版本信息案例")]),a._v(" "),t("ul",[t("li",[a._v("软件的版本通常由三位组成，形如：X.Y.Z")]),a._v(" "),t("li",[a._v("版本是严格递增的，此处：16.2.0 -> 16.3.0 -> 16.3.1")]),a._v(" "),t("li",[a._v("在发布重要版本是，可以发布 alpha, rc 等先行版本\n"),t("img",{attrs:{src:"https://upload.smart-lzgz.cn/mweb/2020%2007%2019%2015951717542093%2015948268693759%20.jpg",alt:"-w609"}})])]),a._v(" "),t("h3",{attrs:{id:"遵守-semver-规范的优势"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#遵守-semver-规范的优势"}},[a._v("#")]),a._v(" 遵守 semver 规范的优势")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://upload.smart-lzgz.cn/mweb/2020%2007%2019%2015951717542104%2015948270347385%20.jpg",alt:"-w1170"}})]),a._v(" "),t("h4",{attrs:{id:"优势"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#优势"}},[a._v("#")]),a._v(" 优势：")]),a._v(" "),t("ul",[t("li",[a._v("避免出现循环依赖")]),a._v(" "),t("li",[a._v("依赖冲突减少")])]),a._v(" "),t("h3",{attrs:{id:"语义化版本-semantic-versioning-规范格式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#语义化版本-semantic-versioning-规范格式"}},[a._v("#")]),a._v(" 语义化版本(Semantic Versioning)规范格式")]),a._v(" "),t("h4",{attrs:{id:"主版本号-当你做了不兼容的-api-修改"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#主版本号-当你做了不兼容的-api-修改"}},[a._v("#")]),a._v(" 主版本号：当你做了不兼容的 API 修改，")]),a._v(" "),t("h4",{attrs:{id:"次版本号-当你做了向下兼容的功能性新增"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#次版本号-当你做了向下兼容的功能性新增"}},[a._v("#")]),a._v(" 次版本号：当你做了向下兼容的功能性新增，")]),a._v(" "),t("h4",{attrs:{id:"修订号-当你做了向下兼容的问题修正。"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#修订号-当你做了向下兼容的问题修正。"}},[a._v("#")]),a._v(" 修订号：当你做了向下兼容的问题修正。")]),a._v(" "),t("h3",{attrs:{id:"先行版本号"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#先行版本号"}},[a._v("#")]),a._v(" 先行版本号")]),a._v(" "),t("h4",{attrs:{id:"先行版本号可以作为发布正式版之前的版本-格式是在修订版本号后面加上一个连接-号-再加上一连串以点-分割的标识符-标识符可以由英文、数字和连接号-0-9a-za-z-组成。"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#先行版本号可以作为发布正式版之前的版本-格式是在修订版本号后面加上一个连接-号-再加上一连串以点-分割的标识符-标识符可以由英文、数字和连接号-0-9a-za-z-组成。"}},[a._v("#")]),a._v(" 先行版本号可以作为发布正式版之前的版本，格式是在修订版本号后面加上一个连接 号(-)，再加上一连串以点(.)分割的标识符，标识符可以由英文、数字和连接号 ([0-9A-Za-z-])组成。")]),a._v(" "),t("ul",[t("li",[a._v("alpha:是内部测试版，一般不向外部发布，会有很多 Bug。一般只有测试人员使用。")]),a._v(" "),t("li",[a._v("beta:也是测试版，这个阶段的版本会一直加入新的功能。在 Alpha 版之后推出")]),a._v(" "),t("li",[a._v("rc:Release Candidate) 系统平台上就是发行候选版本。RC 版不会再加入新的功能了，主 要着重于除错。")])])])}),[],!1,null,null,null);t.default=e.exports}}]);