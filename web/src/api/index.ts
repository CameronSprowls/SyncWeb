import axios, { AxiosInstance, AxiosRequestConfig } from 'axios'

export class API {
  authenticated: AxiosInstance

  constructor (baseURL: string) {
    const settings = {
      baseURL,
      headers: {
        'Content-Type': 'application/json',
      },
    } as AxiosRequestConfig

    this.authenticated = axios.create({
      ...settings,
    })

  // this.authenticated.interceptors.request.use(async config => {
  //   try {
  //     const session = await Auth.currentSession()
  //     const token = session.getAccessToken()
  //     const jwt = token.getJwtToken()

  //     config.headers.Authorization = `Bearer ${jwt}`
  //     return config
  //   } catch {
  //     return config
  //   }
  // }
  // )
}
}

const baseURL = process.env.VUE_APP_API_URL
export default new API(baseURL)