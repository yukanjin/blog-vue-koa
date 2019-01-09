import request from './request.js'

export function getTypeList (data) {
  return request('/typeList', data)
}
export function postData (data) {
  return request('/hello', data)
}
// export function getTypeList (data) {
//   return request('http://localhost:3000/typeList', {}, { method: "get", params: data })
// }
