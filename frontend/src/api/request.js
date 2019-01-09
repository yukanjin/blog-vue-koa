import axios from 'axios'
// import qs from 'qs'

export default function request (url, data, params) {
  return axios({
    method: 'GET',
    url,
    data,
    baseURL: '/api'
  })
    .then(handleState)
    .catch(response => {
      return response.data
    })
}

function handleState (response) {
  if (response.data.code === null) {
    return response.data
  }
  return Promise.reject(response)
}
