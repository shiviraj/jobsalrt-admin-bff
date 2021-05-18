import express from "express";
import {getUserHandler, signInHandler} from "../handlers/userHandlers";

const router = express.Router()

router.get("/validate", getUserHandler)
router.post("/sign-in", signInHandler)

export default router
