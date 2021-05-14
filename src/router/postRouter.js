import express from "express";
import {
  getPostHandler,
  getPostsHandler,
  getPostsPageCountHandler,
  getUrlAvailableHandler,
  updatePostHandler,addPostsHandler
} from "../handlers/postHandlers";

const router = express.Router()

router.post("", addPostsHandler)
router.post("/page/:page", getPostsHandler)
router.post("/page-count", getPostsPageCountHandler)
router.get("/:url", getPostHandler)
router.put("/:url", updatePostHandler)
router.get("/:url/available", getUrlAvailableHandler)

export default router
