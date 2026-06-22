const express = require('express')
const app = express()
require('dotenv').config() 

const PORT=8000

const githubData={
  "login": "Talib1007",
  "id": 130248106,
  "node_id": "U_kgDOB8Ntqg",
  "avatar_url": "https://avatars.githubusercontent.com/u/130248106?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/Talib1007",
  "html_url": "https://github.com/Talib1007",
  "followers_url": "https://api.github.com/users/Talib1007/followers",
  "following_url": "https://api.github.com/users/Talib1007/following{/other_user}",
  "gists_url": "https://api.github.com/users/Talib1007/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/Talib1007/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/Talib1007/subscriptions",
  "organizations_url": "https://api.github.com/users/Talib1007/orgs",
  "repos_url": "https://api.github.com/users/Talib1007/repos",
  "events_url": "https://api.github.com/users/Talib1007/events{/privacy}",
  "received_events_url": "https://api.github.com/users/Talib1007/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": "Mohd Talib",
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 4,
  "public_gists": 0,
  "followers": 0,
  "following": 0,
  "created_at": "2023-04-08T19:09:15Z",
  "updated_at": "2026-06-18T16:58:57Z"
}

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

app.get('/github',(req,res)=>{
  res.json(githubData);
})
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})
