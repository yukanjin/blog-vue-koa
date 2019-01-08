module.exports = [
  {
    method: 'get',
    path: '/hello',
    handler: (ctx, next) => {
      ctx.response.body = 'hello'
    }
  },
  {
    method: 'get',
    path: '/home',
    handler: (ctx, next) => {
      ctx.response.body = 'home'
    }
  },
]