import axios from 'axios'

const api = axios.create({
  baseURL: 'https://upx6-backend.herokuapp.com',
  timeout: 30000
})

api.defaults.headers.post['Content-Type'] = 'application/json'

export default api
