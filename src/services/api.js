import axios from 'axios'
export const api = axios.create({
  baseURL: 'https://rocketnotes-api-cqx2.onrender.com',
})
