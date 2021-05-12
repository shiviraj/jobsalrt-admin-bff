import express from "express";
import {getPostsHandler, getPostsPageCountHandler} from "../handlers/postHandlers";

const router = express.Router()

router.post("/page/:page", getPostsHandler)
router.post("/pageCount", getPostsPageCountHandler)

export default router
