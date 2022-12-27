import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:5000',
})

export const insertNumber = payload => api.post(`/fib`, payload)

const apis = {
    insertNumber,
}

export default apis