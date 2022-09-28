import axios from 'axios'

const api = axios.create({
  baseURL: 'https://api.twitter.com/1.1/',
  timeout: 30000
})

api.defaults.headers.post['Content-Type'] = 'application/json'

export default api
