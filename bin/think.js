#!/usr/bin/env node

// 添加命令的库
const program = require('commander')
// 改变命令行文字颜色的库
const chalk = require('chalk')

const { promisify } = require('util')
const asyncFiglet = promisify(require('figlet'))

// 打印ThinkJS-CLI
async function run(){
  const data = await asyncFiglet('ThinkJS-CLI')
  console.log('\r')
  console.log(data)
}
run()

// 拿到 package.json 中的版本号 用于 think-cli -V 显示
program.version(require('../package').version)
.command('help [命令名称]')
.description('用于查看某个命令的解释')
.action(name => {
  if(name == 'init'){
    console.log(chalk.green('从 github 中拷贝标准项目模版到本地'))
  }else if(name == 'create'){
    console.log(chalk.green('用于快速构建模版代码'))
  }
})

// 初始化项目
require('./think-init')
// 创建模版代码
require('./think-create')

program.parse(process.argv)