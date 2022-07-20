#!/usr/bin/env node

const program = require('commander')
const create = require('../src/create')

program.command('create [文件名称]')
.description('用于快速创建模版代码')
.option('-c, --controller','生成一个控制器')
.option('-v, --validate','生成一个验证器')
.option('-m, --middleware','生成一个路由中间件')
.option('-r, --router','生成一个路由文件')
.action((name,type) => {
  create(name,type)
})