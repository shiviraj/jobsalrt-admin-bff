import {API} from "./util/utils";

const signInHandler = async (req, res) => {
  try {
    const data = await API.logIn(req.body)
    setTimeout(() => {
      if (!data.token) return res.sendStatus(401)
      req.headers.authorization = data.token
      res.cookie("authorization", data.token)
      res.send(data)
    }, 2000)
  } catch (err) {
    console.log(err)
    res.sendStatus(404)
  }
}

const getUserHandler = async (req, res) => {
  try {
    const {name, email, token} = await API.getUser(req.headers.authorization)
    res.send({name, email, token})
  } catch (err) {
    console.log(err)
    res.sendStatus(404)
  }
}

export {signInHandler, getUserHandler}
