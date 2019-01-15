import request from './request.js'

export function getTypeList (data) {
  return request('get', '/api/list', data)
}
export function postData (data) {
  return request('get', '/hello/name')
}
// export function getTypeList (data) {
//   return request('http://localhost:3000/typeList', {}, { method: "get", params: data })
// }
