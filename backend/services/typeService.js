const query = require('../db/mysql')

const getTypes = async () => {
  let sql = `select 
    ID as id,
    NAME as name,
    VALUE as value
   from WORD_TYPE`
  let data = await query(sql)
  return data
}

const updateType = async (type) => {
  let sql = `update WORD_TYPE set NAME=?, VALUE=? where ID=?`
  let params = [type.name, type.value, type.id]
  let data = await query(sql, params)
  return
}

const addType = async (type) => {
  let sql = 'insert into WORD_TYPE(NAME, VALUE) values (?,?)'
  let params = [type.name, type.value]
  let data = await query(sql, params)
  return
}

module.exports = {
  getTypes,
  addType,
  updateType
};