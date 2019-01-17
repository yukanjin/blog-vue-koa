import axios from 'axios'

export default function request (method, url, data) {
  return axios({
    method,
    url,
    data,
    baseURL: 'http://localhost:3000/'
  })
    .then(handleState)
    .catch(response => {
      showError(response.data.msg)
    })
}

function handleState (response) {
  if (response.data.code === 0) {
    return response.data
  }
  return Promise.reject(response)
}

function showError (msg) {
  window.alert(msg)
}
