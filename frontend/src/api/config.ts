import axios from 'axios'

const MOCK_JWT_TOKEN = 'mock_jwt_token'

axios.defaults.baseURL = 'http://localhost:3001/api'
axios.defaults.headers.common.Authorization = `BEARER ${MOCK_JWT_TOKEN}`
