import express from 'express'
import logger from "../logging/logger";
import {handleError} from "../utils/errorHandlers";
import PostsService from "../services/posts";
import {POSTS_CUSTOM_ERRORS} from "../errorMaps/posts.errors";

const PostsController = () => {
  const router = express.Router()

  router.post('/posts-count', (req, res) => {
    PostsService.getPageCount(req.body)
      .then(response => res.send(response.data))
      .catch(error => {
        logger.logAPIError(req, error, POSTS_CUSTOM_ERRORS.PAGE_NOT_FOUND)
        handleError(error, res, POSTS_CUSTOM_ERRORS.PAGE_NOT_FOUND)
      })
  })

  router.post('/page/:page', (req, res) => {
    const {page = 1} = req.params
    PostsService.getPosts(page, req.body)
      .then(response => res.send(response.data))
      .catch(error => {
        logger.logAPIError(req, error, POSTS_CUSTOM_ERRORS.NOT_FOUND)
        handleError(error, res, POSTS_CUSTOM_ERRORS.NOT_FOUND)
      })
  })

  router.delete("/:url", (req, res) => {
    PostsService.deletePost(req.params.url)
      .then(response => res.send(response.data))
      .catch(error => {
        logger.logAPIError(req, error, POSTS_CUSTOM_ERRORS.PAGE_NOT_FOUND)
        handleError(error, res, POSTS_CUSTOM_ERRORS.PAGE_NOT_FOUND)
      })
  })

  router.post("", (req, res) => {
    PostsService.addPost(req.body)
      .then(response => res.send(response.data))
      .catch(error => {
        logger.logAPIError(req, error, POSTS_CUSTOM_ERRORS.PAGE_NOT_FOUND)
        handleError(error, res, POSTS_CUSTOM_ERRORS.PAGE_NOT_FOUND)
      })
  })


  return router
}

export {PostsController}
