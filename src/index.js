import {exec} from "child_process";
import axios from "axios";
import app from './app'
import logger from './logging/logger'

const BFF_PORT = process.env.PORT || 3001
const BFF_HOST = process.env.HOST || "localhost"

app.listen(BFF_PORT, () => {
  const url = `http://${BFF_HOST}:${BFF_PORT}`
  logger.info(`BFF server is ready at: ${url} 🔥🔥🔥`)
})

const command = `export HEROKU_API_KEY=${process.env.HEROKU_API_KEY}; heroku restart -a ${process.env.HEROKU_APP_NAME}`

setInterval(() => {
  axios.post("https://jobsalrt-admin.herokuapp.com/api/user/sign-in", {
    email: "example@email.com",
    password: "password"
  })
    .catch(() => ({}))

  const date = new Date()
  if (![0, 6].includes(date.getUTCDay()) && date.getUTCHours() === 11)
    axios.get("https://shivi-stocks.herokuapp.com/").catch(() => ({}))

  exec(command);

}, 600000)
