import app from './app'
import logger from './logging/logger'
import axios from "axios";

const BFF_PORT = process.env.PORT || 3001
const BFF_HOST = "localhost"

app.listen(BFF_PORT, () => {
  const url = `http://${BFF_HOST}:${BFF_PORT}`
  logger.info(`BFF server is ready at: ${url} 🔥🔥🔥`)
})

setInterval(() => {
  axios.post("https://jobsalrt-admin.herokuapp.com/api/user/sign-in", {
    email: "example@email.com",
    password: "password"
  })
    .catch(() => ({}))
}, 600000)
