import express from "express";
import {
  addPostsHandler,
  deletePostHandler,
  getPostHandler,
  getPostsHandler,
  getPostsPageCountHandler,
  getUrlAvailableHandler,
  updatePostHandler
} from "../handlers/postHandlers";

const router = express.Router()

router.post("", addPostsHandler)
router.post("/page/:page", getPostsHandler)
router.post("/posts-count", getPostsPageCountHandler)
router.get("/:url", getPostHandler)
router.put("/:url", updatePostHandler)
router.delete("/:url", deletePostHandler)
router.get("/:url/available", getUrlAvailableHandler)

export default router
