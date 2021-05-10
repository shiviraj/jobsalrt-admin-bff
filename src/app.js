import express from "express";
import cookieParser from "cookie-parser";

import postRouter from "./router/postRouter";
import userRouter from "./router/userRouter";
import {decrypt} from "./crypto/crypto";

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

app.use("/api/user", userRouter)
app.use("/api", postRouter)

export default app
