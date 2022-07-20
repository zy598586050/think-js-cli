// 该文件为模版示例文件，用于演示各项功能，请根据实际业务情况自行修改

// 演示验证器的用法
const helloValidate = {
  rule: {
    username: 'require|number', // 必填且只能是数字类型
    password: 'require'
  },
  message: {
    'username.require': '用户名不能为空', // 自定义验证提示
    password: '密码不能为空'
  },
  scene: {
    sayHello: ['username'] // 可以分场景校验，sayHello方法只校验username
  }
}

module.exports = helloValidate