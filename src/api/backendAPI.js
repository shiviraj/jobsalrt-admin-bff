import axios from "axios";

class BackendAPI {
  constructor(url) {
    this.url = url
  }

  async post(path, payload, authorization = "a") {
    const response = await axios.post(this.url + path, payload, {headers: {Authorization: authorization,}})
    return response.data
  }

  async put(path, payload, authorization = "a") {
    const response = await axios.put(this.url + path, payload, {headers: {Authorization: authorization,}})
    return response.data
  }

  async get(path, authorization = "a") {
    const response = await axios.get(this.url + path, {headers: {Authorization: authorization}})
    return response.data
  }

  async delete(path, authorization = "a") {
    const response = await axios.delete(this.url + path, {headers: {Authorization: authorization}})
    return response.data
  }

  logIn(payload) {
    return this.post("/admin/sign-in", payload)
  }

  getUser(authorization) {
    return this.get("/admin", authorization)
  }

  getPosts(authorization, page, payload) {
    return this.post(`/posts/page/${page}`, payload, authorization)
  }

  async getPostsCount(authorization, payload) {
    return this.post('/posts/page-count', payload, authorization)
  }

  async getPost(authorization, url) {
    return this.get(`/posts/${url}`, authorization)
  }

  async updatePost(authorization, url, payload) {
    return this.put(`/posts/${url}`, payload, authorization)
  }

  async urlAvailable(authorization, url) {
    return this.get(`/posts/${url}/available`, authorization)
  }

  async addPost(authorization, payload) {
    return this.post("/posts", payload, authorization)
  }

  async deletePost(authorization, url) {
    return this.delete(`/posts/${url}`, authorization)
  }
}

export default BackendAPI
