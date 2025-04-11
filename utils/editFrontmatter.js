/**
 * 批量添加和修改front matter ，需要配置 ./config.yml 文件。
 */
const fs = require('fs'); // 文件模块
const path = require('path'); // 路径模块
const matter = require('gray-matter'); // front matter解析器 https://github.com/jonschlinkert/gray-matter
const jsonToYaml = require('json2yaml');
const yamlToJs = require('yamljs');
const inquirer = require('inquirer'); // 命令行操作
const chalk = require('chalk'); // 命令行打印美化
const readFileList = require('./modules/readFileList');
const { type, repairDate } = require('./modules/fn');
const log = console.log;

const configPath = path.join(__dirname, 'config.yml'); // 配置文件的路径

main();

/**
 * 主体函数
 */
async function main() {
  const { unified } = await import('unified');
  const { default: remarkParse } = await import('remark-parse');
  const { visit } = await import('unist-util-visit');
  const promptList = [{
    type: "confirm",
    message: chalk.yellow('批量操作frontmatter有修改数据的风险，确定要继续吗？'),
    name: "edit",
  }];
  let edit = true;

  await inquirer.prompt(promptList).then(answers => {
    edit = answers.edit;
  });

  if (!edit) { // 退出操作
    return;
  }

  const config = yamlToJs.load(configPath); // 解析配置文件的数据转为js对象

  if (type(config.path) !== 'array') {
    log(chalk.red('路径配置有误，path字段应该是一个数组'));
    return;
  }

  if (config.path[0] !== 'docs') {
    log(chalk.red("路径配置有误，path数组的第一个成员必须是'docs'"));
    return;
  }

  const filePath = path.join(__dirname, '..', ...config.path); // 要批量修改的文件路径
  const files = readFileList(filePath); // 读取所有md文件数据

  files.forEach(file => {
    let dataStr = fs.readFileSync(file.filePath, 'utf8');// 读取每个md文件的内容
    let title = '';
    // 解析 Markdown 并遍历 AST
    const tree = unified().use(remarkParse).parse(dataStr);
    visit(tree, 'heading', (node) => {
      if (node.depth === 1) {
        const text = node.children.map(child => child.value).join('');
        title = text;
      }
    });
    const fileMatterObj = matter(dataStr); // 解析md文件的front Matter。 fileMatterObj => {content:'剔除frontmatter后的文件内容字符串', data:{<frontmatter对象>}, ...}
    let matterData = fileMatterObj.data; // 得到md文件的front Matter
    matterData.title = title.replace('面试官：', '');
    let mark = false;
    // 删除操作
    if (config.delete) {
      if (type(config.delete) !== 'array') {
        log(chalk.yellow('未能完成删除操作，delete字段的值应该是一个数组！'));
      } else {
        config.delete.forEach(item => {
          if (matterData[item]) {
            delete matterData[item];
            mark = true;
          }
        });

      }
    }

    // 添加、修改操作
    if (type(config.data) === 'object') {
      Object.assign(matterData, config.data); // 将配置数据合并到front Matter对象
      mark = true;
    }

    // 有操作时才继续
    if (mark) {
      if (matterData.date && type(matterData.date) === 'date') {
        matterData.date = repairDate(matterData.date); // 修复时间格式
      }
      var tempData = null;
      if (jsonToYaml.stringify(fileMatterObj.content).indexOf('![](https://cdn.jsdelivr.net/gh/chst365/bolgImgs/imgs/topImgs') != -1) {
        tempData = jsonToYaml.stringify(matterData).replace(/\n\s{2}/g, "\n").replace(/"/g, "") + '---\r\n' + fileMatterObj.content;
      } else {
        tempData = jsonToYaml.stringify(matterData).replace(/\n\s{2}/g, "\n").replace(/"/g, "") + '---\r\n' + '![](https://cdn.jsdelivr.net/gh/chst365/bolgImgs/imgs/topImgs/' + Math.floor(Math.random() * 453 + 1) + '.jpg)' + '\r\n' + fileMatterObj.content;
      }
      const newData = tempData;
      fs.writeFileSync(file.filePath, newData); // 写入
      log(chalk.green(`update frontmatter：${file.filePath} `));
    }

  });
}
