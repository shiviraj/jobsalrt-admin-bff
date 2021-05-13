import express from "express";
import {getPostHandler, getPostsHandler, getPostsPageCountHandler, updatePostHandler} from "../handlers/postHandlers";

const router = express.Router()

router.post("/page/:page", getPostsHandler)
router.post("/page-count", getPostsPageCountHandler)

router.get("/:url", getPostHandler)
router.put("/:url", updatePostHandler)

export default router
