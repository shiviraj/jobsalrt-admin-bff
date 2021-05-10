import axios from "axios";

class BackendAPI {
  constructor(url) {
    this.url = url
  }

  logIn(payload) {
    return this.post("/admin/sign-in", payload)
  }

  getUser(authorization) {
    return this.get("/admin", authorization)
  }

  getPosts(authorization, page) {
    return this.get(`/posts/page/${page}`, authorization)
  }

  async post(path, payload, authorization = "a") {
    const response = await axios.post(this.url + path, payload, {headers: {Authorization: authorization,}})
    return response.data
  }

  async get(path, authorization = "a") {
    const response = await axios.get(this.url + path, {headers: {Authorization: authorization}})
    return response.data
  }
}

export default BackendAPI
