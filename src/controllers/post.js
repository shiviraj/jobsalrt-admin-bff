import express from 'express'
import logger from "../logging/logger";
import {POSTS_CUSTOM_ERRORS} from "../errorMaps/posts.errors";
import {handleError} from "../utils/errorHandlers";
import PostService from "../services/post";

const PostController = () => {
  const router = express.Router()

  router.get("/:url", (req, res) => {
    PostService.getPostByUrl(req.params.url)
      .then(response => res.send(response.data))
      .catch(error => {
        logger.logAPIError(req, error, POSTS_CUSTOM_ERRORS.PAGE_NOT_FOUND)
        handleError(error, res, POSTS_CUSTOM_ERRORS.PAGE_NOT_FOUND)
      })
  })

  router.put("/:url", (req, res) => {
    PostService.updatePost(req.params.url, req.body)
      .then(response => res.send(response.data))
      .catch(error => {
        logger.logAPIError(req, error, POSTS_CUSTOM_ERRORS.PAGE_NOT_FOUND)
        handleError(error, res, POSTS_CUSTOM_ERRORS.PAGE_NOT_FOUND)
      })
  })

  router.get("/:url/available", (req, res) => {
    PostService.urlAvailable(req.params.url)
      .then(response => res.send(response.data))
      .catch(error => {
        logger.logAPIError(req, error, POSTS_CUSTOM_ERRORS.PAGE_NOT_FOUND)
        handleError(error, res, POSTS_CUSTOM_ERRORS.PAGE_NOT_FOUND)
      })
  })

  router.get("/:url/update", (req, res) => {
    PostService.getUpdates(req.params.url)
      .then(response => res.send(response.data))
      .catch(error => {
        logger.logAPIError(req, error, POSTS_CUSTOM_ERRORS.PAGE_NOT_FOUND)
        handleError(error, res, POSTS_CUSTOM_ERRORS.PAGE_NOT_FOUND)
      })
  })

  return router
}

export {PostController}
