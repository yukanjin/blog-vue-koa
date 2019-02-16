const query = require('../db/mysql')

const getWords = async () => {
  let sql = `select 
    a.ID as id,
    a.TITLE as title,
    a.DESCRIPTION as description,
    b.id as typeId,
    b.NAME as typeName
    from WORD as a,
    word_type as b
    where a.DEL_FLAG='0' and a.type = b.ID
    order by a.UPDATE_TIME DESC;`
  let data = await query(sql)
  return data
}
const getWordsByType = async (typeId) => {
  let sql = `select 
    a.ID as id,
    a.TITLE as title,
    a.DESCRIPTION as description,
    b.id as typeId,
    b.NAME as typeName
    from WORD as a,
    word_type as b
    where a.TYPE = ? and a.DEL_FLAG='0' and a.type = b.ID
    order by a.UPDATE_TIME DESC;`
  let params = [typeId]
  let data = await query(sql, params)
  return data
}

const updateWord = async (word) => {
  let sql = `update WORD set TITLE=?, DESCRIPTION=?, CONTENT=? where ID=?`
  let params = [word.title, word.description, word.content, word.id]
  await query(sql, params)
  return
}

const addWord = async (word) => {
  let sql = 'insert into WORD(TITLE, DESCRIPTION, CONTENT) values (?,?,?)'
  let params = [word.title, word.description, word.content]
  await query(sql, params)
  return
}

module.exports = {
  getWords,
  getWordsByType,
  addWord,
  updateWord
};