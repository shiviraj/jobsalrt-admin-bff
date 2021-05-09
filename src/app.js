const express = require("express")
const router = require("./router/apiRoutes")
const cookieParser = require('cookie-parser');
const {decrypt} = require("./crypto/crypto");

const app = express()

app.use(cookieParser());
app.use(express.static('./public'));
app.use(express.json({limit: '1mb'}));
app.use(express.urlencoded({extended: true}));

const decryptRequestPayload = req => {
  if (req.body.payload) {
    req.payload = JSON.parse(decrypt(req.body.payload, req.headers.iv))
    console.log(req.payload)
  }

}


app.use((req, res, next) => {
  decryptRequestPayload(req)
  next()
})

app.use("/api/user", router)

module.exports = app
