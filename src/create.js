const {resolve} = require('path')
const fs = require('fs')
// 改变命令行文字颜色的库
const chalk = require('chalk')

// 完成文件拷贝
const create = (name,type) => {
  try{
    fs.writeFileSync(getUrl(type,name).dir,fs.readFileSync(getUrl(type,name).src))
    console.log(chalk.green(`[${name}.js]创建成功`))
  }catch(error){
    throw new Error(error)
  }
}

// 判断并生成目录地址
const getUrl = (type,name) => {
  let str = Object.keys(type)[0]
  if(str == 'controller'){
    return {
      // 要写入的文件路径
      dir: `${resolve('./')}/app/controller/${name}.js`,
      // 要读取的文件路径
      src: `${__dirname}/template/controller/index.js`
    }
  }else if(str == 'validate'){
    return {
      // 要写入的文件路径
      dir: `${resolve('./')}/app/validate/${name}.js`,
      // 要读取的文件路径
      src: `${__dirname}/template/validate/index.js`
    }
  }else if(str == 'middleware'){
    return {
      // 要写入的文件路径
      dir: `${resolve('./')}/app/middleware/${name}.js`,
      // 要读取的文件路径
      src: `${__dirname}/template/middleware/index.js`
    }
  }else if(str == 'router'){
    return {
      // 要写入的文件路径
      dir: `${resolve('./')}/route/${name}.js`,
      // 要读取的文件路径
      src: `${__dirname}/template/router/index.js`
    }
  }
}


module.exports = create