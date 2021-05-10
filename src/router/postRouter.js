import express from "express";
import {getPostsHandler} from "../handlers/postHandlers";

const router = express.Router()

router.get("/posts/page/:page", getPostsHandler)

export default router
