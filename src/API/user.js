import apiAdapter from './utils/apiAdapter'
import env from '../config/envConfig'

const API = apiAdapter(`${env.JOBSALRT_ADMIN_BASE_URL}`)

const BASE_PATH = '/admin'

const User = {
  validate() {
    return API.get(`${BASE_PATH}`);
  },
  signIn(payload) {
    return API.post(`${BASE_PATH}/sign-in`, payload);
  },
}

export {User}
