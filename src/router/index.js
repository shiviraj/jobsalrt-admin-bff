import express from 'express'
import {UserController} from '../controllers/user'
import {PostsController} from '../controllers/posts'
import {PostController} from '../controllers/post'

const router = express.Router()

router.use("/user", UserController())
router.use("/posts", PostsController())
router.use("/post", PostController())

export const getRouter = () => router
