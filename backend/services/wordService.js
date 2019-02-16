const query = require('../db/mysql')

const getWords = async () => {
  let sql = `select 
    ID as id,
    TITLE as title,
    DESCRIPTION as description
   from WORD
   where DEL_FLAG=0`
  let data = await query(sql)
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
  addWord,
  updateWord
};