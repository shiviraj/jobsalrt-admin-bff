import express from 'express'
import UserService from "../services/user";
import logger from "../logging/logger";
import {USER_CUSTOM_ERRORS} from "../errorMaps/user.errors";
import {handleError} from "../utils/errorHandlers";

const UserController = () => {
  const router = express.Router()

  router.get('/validate', (req, res) => {
    UserService.validate()
      .then(response => res.send(response.data))
      .catch(error => {
        logger.logAPIError(req, error, USER_CUSTOM_ERRORS.UNAUTHORIZED)
        handleError(error, res, USER_CUSTOM_ERRORS.UNAUTHORIZED)
      })
  })

  router.post('/sign-in', (req, res) => {
    UserService.signIn(req.body)
      .then(response => res.send(response.data))
      .catch(error => {
        logger.logAPIError(req, error, USER_CUSTOM_ERRORS.UNAUTHORIZED)
        handleError(error, res, USER_CUSTOM_ERRORS.UNAUTHORIZED)
      })
  })

  return router
}

export {UserController}
