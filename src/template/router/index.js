// 该文件为模版示例文件，用于演示各项功能，请根据实际业务情况自行修改

const checkLogin = require('@/middleware/checkLogin.js')

// 用于演示路由的定义方式
module.exports = (route) => {
    // hello接口 分组且挂载了路由中间件
    route.group('/api/v1',(router) => {
        router.get('/hello','hello/sayHello')
    },checkLogin)

    // 视图页，也可单独挂载路由中间件 checkLogin2
    route.get('/','hello/showIndex')
}