// 该文件为模版示例文件，用于演示各项功能，请根据实际业务情况自行修改

// 演示校验接口是否携带token
const checkLogin = (ctx,next,error) => {
  const token = ctx.header?.authorization?.split('Bearer ')[1] || ''
  if(ctx.validateToken(token)){
    // 向下执行不拦截
    next()
  }else{
    // 拦截并抛出异常
    error('非法请求,或Token过期')
  }
}

module.exports = checkLogin