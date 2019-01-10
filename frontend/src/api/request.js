import axios from 'axios'
// import qs from 'qs'

export default function request (method, url, data, params) {
  return axios({
    method,
    url,
    data,
    baseURL: 'http://localhost:3000/'
  })
    .then(handleState)
    .catch(response => {
      return response.data
    })
}

function handleState (response) {
  return response.data
  // if (response.data.code === null) {
  //   return response.data
  // }
  // return Promise.reject(response)
}
