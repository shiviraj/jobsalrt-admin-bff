import express from "express";
import cookieParser from "cookie-parser";

import postRouter from "./router/postRouter";
import userRouter from "./router/userRouter";
import {initEncryption} from "./crypto/crypto";

const app = express()

app.use(function (req, res, next) {
  console.log(req.path, req.method, req.headers)
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization, disable-encryption, iv");
  res.header("Access-Control-Allow-Method", "GET, POST, PUT, DELETE, PATCH")
  if (req.method === "OPTIONS") return res.send({})
  next();
});

app.use(cookieParser());
app.use(express.static('./public'));
app.use(express.json({limit: '1mb'}));
app.use(express.urlencoded({extended: true}));
app.use(initEncryption)

app.use("/api/user", userRouter)
app.use("/api/posts", postRouter)

export default app
