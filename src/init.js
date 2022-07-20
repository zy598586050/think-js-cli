const {resolve} = require('path')
// 改变命令行文字颜色的库
const chalk = require('chalk')
// 用户与命令行交互的工具
const Prompt = require('inquirer')
// 用于克隆仓库的逻辑代码
const clone = require('./clone')
// 项目克隆的地址
const url1 = 'zy598586050/think-js'
const url2 = 'zy598586050/think-js-pro'

// 询问
const inquiry = name => [{
  type: 'confirm',
  name: 'isInit',
  message: `您确定要在 ${chalk.green('['+name+']')} 文件夹下创建项目？`,
  prefix: '😉'
},{
  name: 'projectType',
  type: 'list',
  message: '请选择项目类型',
  choices: ['1.基础框架','2.带案例的框架'],
  prefix: '✅'
}]

// 初始化项目方法
const init = async (name = '') => {
  try{
    const { isInit,projectType } = await Prompt.prompt(inquiry(name ? name : '当前'))
    if(isInit){
      if(projectType == '1.基础框架'){
        await clone(url1,`${resolve('./')}/${name}`)
      }else{
        await clone(url2,`${resolve('./')}/${name}`)
      }
    }else{
      console.log(chalk.red('初始化项目提前结束'))
    }
  }catch(error){
    console.log(chalk.red(error))
  }
}

module.exports = init