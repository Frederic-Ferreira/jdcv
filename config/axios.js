import axios from "axios"

const axiosInstance = axios.create({
  baseURL: "http://127.0.0.1:3001/api",
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 5000,
})

export default axiosInstance
