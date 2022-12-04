import axios from 'axios'

// Axios config for requests
const api = axios.create({
  baseURL: 'https://upx6-backend-i5t5txbvxa-rj.a.run.app',
  timeout: 30000
})

api.defaults.headers.post['Content-Type'] = 'application/json'

export default api
