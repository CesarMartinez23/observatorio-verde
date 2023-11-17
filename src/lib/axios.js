import axios from 'axios'

const api = axios.create({
  baseURL: 'https://administracionov.ugb.edu.sv/api'
})

export default api