import axios from 'axios'

const isDevelopment = process.env.NODE_ENV === 'development'

export const http = axios.create({
	baseURL: isDevelopment ? 'http://localhost:3030' : 'https://api.github.com'
})
