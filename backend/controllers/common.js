const getList = require('../services/listService');

module.exports = [
  {
    method: 'get',
    path: '/api/list',
    handler: (ctx, next) => {
      var { type, keyword } = ctx.request.query
      var responseData = getList(type, keyword)
      ctx.response.body = {
        data: responseData
      }
    }
  }
]