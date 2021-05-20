import apiAdapter from './utils/apiAdapter'
import env from '../config/envConfig'

const API = apiAdapter(`${env.JOBSALRT_ADMIN_BASE_URL}`)

const BASE_PATH = '/posts'

const Posts = {
  getPosts(page, payload) {
    return API.post(`${BASE_PATH}/page/${page}`, payload);
  },

  getPageCount(payload) {
    return API.post(`${BASE_PATH}/page-count`, payload);
  },

  addPost(payload) {
    return API.post(`${BASE_PATH}`, payload);
  },

  deletePost(url) {
    return API.delete(`${BASE_PATH}/${url}`);
  },

}

export {Posts}
