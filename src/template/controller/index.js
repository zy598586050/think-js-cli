// 该文件为模版示例文件，用于演示各项功能，请根据实际业务情况自行修改
const Controller = require('think-js-lib').Controller

class HelloController extends Controller{
    // 用于演示参数获取和数据库查询
    async sayHello(ctx){
        let params = this.getParams(ctx)
        let result = await this.Db('user').where('name',params.name).select()
        return this.showSuccess(result)
    }

    // 带搜索条件分页查询的常用写法
    async sayHello2(ctx){
      let params = this.getParams(ctx)
      let model = this.Db('article')
      // 是否带了作者的筛选条件
      if(params.author){
        model = model.where('avatar',params.author)
      }

      // .... 各种筛选条件

      // 查询
      let result = await model.page(params.current,params.size).select()
      // 带搜索条件的文章总数
      let totalCount = await model.count()
      return this.showSuccess({
        list: result,
        totalCount
      })
    }

    // 用于演示Redis的使用
    async sayHello3(){
      let token = await this.RDb().get('token')
      if(token){
        return this.showSuccess(true)
      }else{
        this.ApiException('没有token')
      }
    }
    
}

module.exports = HelloController