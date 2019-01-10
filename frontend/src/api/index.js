import request from './request.js'

export function getTypeList (data) {
  return request('post', '/typeList', data)
}
export function postData (data) {
  return request('get', '/hello/name')
}
// export function getTypeList (data) {
//   return request('http://localhost:3000/typeList', {}, { method: "get", params: data })
// }
