const { getTypes, addType } = require('../services/typeService');

module.exports = [
  {
    method: 'get',
    path: '/api/getTypes',
    handler: async (ctx, next) => {
      var responseData = await getTypes()
      ctx.response.body = new Result(0, '查询成功', responseData)
    }
  },
  {
    method: 'post',
    path: '/api/addType',
    handler: async (ctx, next) => {
      var query = ctx.request.query
      await addType(query)
      ctx.response.body = new Result(0, '添加成功')
    }
  }
]