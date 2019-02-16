import request from './request.js'

export function getTypeList () {
  return request('get', '/api/getTypes')
}
export function postData (data) {
  return request('get', '/hello/name')
}
export function getWords (typeId) {
  return request('get', `/api/getWords?typeId=${typeId}`)
}
