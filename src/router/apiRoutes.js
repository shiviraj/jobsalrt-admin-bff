const express = require("express")
const {signInHandler, getUserHandler} = require("../handlers/userHandlers");

const router = express.Router()

router.get("", getUserHandler)
router.post("/sign-in", signInHandler)

module.exports = router
