import axios from 'axios'
import jwtDefaultConfig from './jwtDefaultConfig'

class JwtService {
  jwtConfig = { ...jwtDefaultConfig }

  isAlreadyFetchingAccessToken = false

  subscribers = []

  constructor(jwtOverrideConfig) {
    this.jwtConfig = { ...this.jwtConfig, ...jwtOverrideConfig }

    axios.interceptors.request.use(
      config => {
        const accessToken = this.getToken()
        if (accessToken) {
          config.headers.Authorization = `JWT ${localStorage.getItem('accessToken')}`
        }
        return config
      },
      error => Promise.reject(error)
    )

    axios.interceptors.response.use(
      response => response,
      error => {
        const { response } = error

        if (response && response.status === 406) {
          localStorage.removeItem('accessToken')
          window.location.href = '/login'
        }
        return Promise.reject(error)
      }
    )
  }

  setToken(token) {
    localStorage.setItem('accessToken', token)
  }

  getToken() {
    return localStorage.getItem('accessToken')
  }
}

const useJwt = new JwtService({})

export default useJwt
