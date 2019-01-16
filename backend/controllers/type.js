const { getTypes, addType } = require('../services/typeService');

module.exports = [
  {
    method: 'get',
    path: '/api/getTypes',
    handler: async (ctx, next) => {
      var responseData = await getTypes()
      ctx.response.body = responseData
    }
  },
  {
    method: 'post',
    path: '/api/addType',
    handler: async (ctx, next) => {
      var query = ctx.request.query
      var responseData = await addType(query)
      ctx.response.body = responseData
    }
  }
]