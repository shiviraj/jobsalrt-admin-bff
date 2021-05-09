const axios = require("axios")

const isOk = status => status >= 200 && status < 300

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

  async post(path, payload, authorization = "a") {
    const response = await axios.post(this.url + path, payload, {headers: {Authorization: authorization,}})
    return {isOk: isOk(response.status), data: response.data}
  }

  async get(path, authorization = "a") {
    const response = await axios.get(this.url + path, {headers: {Authorization: authorization}})
    return {isOk: isOk(response.status), data: response.data}
  }
}

module.exports = BackendAPI
