import request from './request.js'

export function getTypeList () {
  return request('get', '/api/getTypes')
}
export function postData (data) {
  return request('get', '/hello/name')
}
// export function getTypeList (data) {
//   return request('http://localhost:3000/typeList', {}, { method: "get", params: data })
// }
