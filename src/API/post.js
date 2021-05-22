import apiAdapter from './utils/apiAdapter'
import env from '../config/envConfig'

const API = apiAdapter(`${env.JOBSALRT_ADMIN_BASE_URL}`)

const BASE_PATH = '/post'

const Post = {
  getPostByUrl(url) {
    return API.get(`${BASE_PATH}/${url}`);
  },

  updatePost(url, post) {
    return API.put(`${BASE_PATH}/${url}`, post);
  },

  urlAvailable(url) {
    return API.get(`${BASE_PATH}/${url}/available`);
  },

  getUpdates(url) {
    return API.get(`${BASE_PATH}/${url}/update`);
  },

}

export {Post}
