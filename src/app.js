const express = require("express")
const router = require("./router/apiRoutes")
const cookieParser = require('cookie-parser');
const {decrypt} = require("./crypto/crypto");

const app = express()

app.use(cookieParser());
app.use(express.static('./public'));
app.use(express.json({limit: '1mb'}));
app.use(express.urlencoded({extended: true}));

const decryptRequestPayload = (req, res) => {
  if (req.path === "/api/user/sign-in") return
  if (req.body.payload) {
    const payload = req.headers.encryption === "true" ? decrypt(req) : req.body.payload;
    req.payload = JSON.parse(payload);
  }
  req.headers.authorization = req.cookies.authorization
}


app.use((req, res, next) => {
  decryptRequestPayload(req, res)
  next()
})

app.use("/api/user", router)

module.exports = app
