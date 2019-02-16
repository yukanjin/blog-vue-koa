const { getWords, getWordsByType, addWord, updateWord } = require('../services/wordService');
const Result = require('../classes/Result');

module.exports = [
  {
    method: 'get',
    path: '/api/getWords',
    handler: async (ctx, next) => {
      try {
        var query = ctx.query
        var responseData = query.typeId !== '0' ? await getWordsByType(query.typeId) : await getWords()
        ctx.response.body = new Result(0, '查询成功', responseData)
      } catch (e) {
        ctx.response.body = new Result(1, '查询失败')
      }
    }
  },
  {
    method: 'post',
    path: '/api/addWord',
    handler: async (ctx, next) => {
      var query = ctx.request.query
      try {
        await addWord(query)
        ctx.response.body = new Result(0, '添加成功')
      } catch (e) {
        ctx.response.body = new Result(1, '添加失败')
      }
    }
  },
  {
    method: 'post',
    path: '/api/updateWord',
    handler: async (ctx, next) => {
      var query = ctx.request.query
      try {
        await updateWord(query)
        ctx.response.body = new Result(0, '修改成功')
      } catch (e) {
        ctx.response.body = new Result(1, '修改失败')
      }
      
    }
  }
]