import Axios, { AxiosInstance } from 'axios'

const axios: AxiosInstance = Axios.create({
  baseURL: process.env.VUE_APP_API_BASE_URL as string,
  timeout: process.env.VUE_APP_AXIOS_TIMEOUT_MS as any,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'Accept-Language': process.env.VUE_APP_DEFAULT_LOCALE as string,
  },
})

export const updateLanguage = ({ locale }: { locale: string }): void => {
  axios.defaults.headers.common['Accept-Language'] = locale
}

export const updateToken = (token: string): void => {
  if (token) axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
  else delete axios.defaults.headers.common['Authorization']
}

axios.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(error)
)

export default axios
