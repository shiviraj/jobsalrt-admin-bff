const BackendAPI = require("../api/backendAPI");
const {decrypt, encrypt} = require("../crypto/crypto");

const API = new BackendAPI(process.env.BACKEND_URL || "http://localhost:8080")

const sendData = (body, req, defaultToken) => {
  return {payload: encrypt(JSON.stringify(body), req, defaultToken)}
};

const signInHandler = async (req, res) => {
  try {
    req.payload = JSON.parse(decrypt(req, true))
    const {isOk, data} = await API.logIn(req.payload)
    if (!isOk) return res.sendStatus(401)
    req.headers.authorization = data.token
    res.cookie("authorization", data.token)
    res.send(sendData(data, req, true))
  } catch (err) {
    console.log(err)
    res.sendStatus(404)
  }
}

const getUserHandler = async (req, res) => {
  try {
    const {isOk, data} = await API.getUser(req.cookies.authorization)
    if (!isOk) return res.sendStatus(401)
    const {name, email, token} = data
    res.send(sendData({name, email, token}, req))
  } catch (err) {
    console.log(err)
    res.sendStatus(404)
  }
}

module.exports = {signInHandler, getUserHandler}
