#!/usr/bin/env node

const program = require('commander')
const init = require('../src/init')

program.command('init [项目名称]')
.description('初始化一个项目')
.action(name => {
  init(name)
})