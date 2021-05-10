import {API, sendData} from "./util/utils";

const {decrypt} = require("../crypto/crypto");


const signInHandler = async (req, res) => {
  try {
    req.payload = JSON.parse(decrypt(req, true))
    const data = await API.logIn(req.payload)
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
    const {name, email, token} = await API.getUser(req.cookies.authorization)
    res.send(sendData({name, email, token}, req))
  } catch (err) {
    console.log(err)
    res.sendStatus(404)
  }
}

export {signInHandler, getUserHandler}
