const BackendAPI = require("../api/backendAPI");
const {encrypt} = require("../crypto/crypto");

const API = new BackendAPI(process.env.BACKEND_URL || "http://localhost:8080")

const sendData = (body, req) => {
  return {payload: encrypt(body, req.headers.iv)}
};

const signInHandler = async (req, res) => {
  try {
    const {isOk, data} = await API.logIn(req.payload)
    if (!isOk) return res.sendStatus(401)
    res.cookie("authorization", data.token)
    res.send(sendData({isLoggedIn: true}, req))
  } catch (err) {
    res.sendStatus(404)
  }
}

const getUserHandler = async (req, res) => {
  try {
    const {isOk, data} = await API.getUser(req.cookies.authorization)
    if (!isOk) return res.sendStatus(401)
    res.send(sendData({name: data.name, email: data.email, token: data.token}, req))
  } catch (err) {
    res.sendStatus(404)
  }
}

module.exports = {signInHandler, getUserHandler}
