import axios from 'axios'

export const apiGetSecurities = () => {
  return axios.get('/securities')
}
