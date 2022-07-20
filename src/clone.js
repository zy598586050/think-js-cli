// node的 util 模块 promisify 可以把回调 promise 化
const { promisify } = require('util')
// 进度条显示库
const ora = require('ora')
// 改变命令行文字颜色的库
const chalk = require('chalk')
// 下载git仓库的工具
const download = promisify(require('download-git-repo'))

/*
* url 仓库地址
* dir 文件夹
* options 配置项
*/
const clone = async (url,dir,options = {}) => {
  const process = ora(`初始化开始 ${chalk.blue(url)}`)
  process.start()
  process.color = 'yellow'
  process.text = `正在初始化项目... ${chalk.yellow(url)}`
  try{
    await download(url,dir,options)
    process.color = 'green'
    process.text = `初始化项目成功 ${chalk.green(dir)}`
    process.succeed()
  }catch(error){
    process.color = 'red'
    process.text = '初始化项目失败'
    process.fail()
    throw new Error(error)
  }
}

module.exports = clone