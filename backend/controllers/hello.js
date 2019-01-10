const sayHello = require('../services/helloService');
const getTypelist = require('../services/typelistService');

module.exports = [
  {
    method: 'get',
    path: '/hello/:name',
    handler: (ctx, next) => {
      var responseData = sayHello(ctx.params.name)
      ctx.response.body = {
        data: responseData
      }
    }
  },
  {
    method: 'get',
    path: '/home',
    handler: (ctx, next) => {
      ctx.response.body = 'home'
    }
  },
  {
    method: 'post',
    path: '/typeList',
    handler: (ctx, next) => {
      ctx.response.body = getTypelist()
    }
  },
]