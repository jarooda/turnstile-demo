require("dotenv").config()
const express = require("express")
const axios = require("axios")

const port = 3000
const app = express()

app.use(express.json())
app.set("view engine", "ejs")

app.get("/", (req, res) => {
  res.render("index", {
    SITE_KEY: process.env.SITE_KEY_VISIBLE_PASS
  })
})

app.get("/block", (req, res) => {
  res.render("index", {
    SITE_KEY: process.env.SITE_KEY_VISIBLE_BLOCK
  })
})

app.get("/challenge", (req, res) => {
  res.render("index", {
    SITE_KEY: process.env.SITE_KEY_FORCE_CHALLENGE
  })
})

app.get('/invisible', (req, res) => {
  res.render('index', {
    SITE_KEY: process.env.SITE_KEY_INVISIBLE_PASS
  })
})

app.get('/invisible-block', (req, res) => {
  res.render('index', {
    SITE_KEY: process.env.SITE_KEY_INVISIBLE_BLOCK
  })
})

app.post("/login", async (req, res) => {
  const { user, password, token, success } = req.body
  const SECRET_SUCCESS = process.env.SECRET_KEY_PASS
  const SECRET_FAIL = process.env.SECRET_KEY_FAIL

  try {
    const bodyPayload = {
      secret: success ? SECRET_SUCCESS : SECRET_FAIL,
      response: token
    }
    const response = await axios.post(
      "https://challenges.cloudflare.com/turnstile/v0/siteverify",
      bodyPayload
    )

    if (response.data.success) {
      res.status(200).json({
        message: `Welcome "${user}" with password "${password}"!`,
        success: true
      })
    } else {
      console.error(response.data)
      res.status(400).json({
        message: "Turnstile verification failed",
        success: false,
        server_response: response.data
      })
    }
  } catch (error) {
    console.error(error)
    res.status(500).json({
      message: "Error verifying Turnstile token",
      success: false,
      error: error.message
    })
  }
})

app.listen(port, () => console.log(`App running on http://localhost:${port}/`))
