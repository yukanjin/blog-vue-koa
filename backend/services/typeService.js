const query = require('../db/mysql')
const Result = require('../classes/Result')

const getTypes = async () => {
  let sql = "select * from WORD_TYPE"
  let data = await query(sql)
  return new Result('0', '查询成功', data)
}

const updateType = async (type) => {
  let sql = `update WORD_TYPE set NAME=?, VALUE=? where ID=?`
  let params = [type.name, type.value, type.id]
  let data = await query(sql, params)
  return new Result('0', '修改成功')
}

const addType = async (type) => {
  let sql = 'insert into WORD_TYPE(NAME, VALUE) values (?,?)'
  let params = [type.name, type.value]
  let data = await query(sql, params)
  return new Result('0', '添加成功')
}

module.exports = {
  getTypes,
  addType,
  updateType
};