const express = require('express')
const app = express()
require('dotenv').config() 

const PORT=7000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/twitter', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Document</title>
    </head>
    <body style="background-color:Black;color:white">
      <h1>hello twitter</h1>
    </body>
    </html>`
  )
})
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})
