require('dotenv').config();
const express = require('express');
//  import express from 'express'

const app = express();

const githubData = {
  "login": "aslam8801",
  "id": 235190780,
  "node_id": "U_kgDODgS5_A",
  "avatar_url": "https://avatars.githubusercontent.com/u/235190780?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/aslam8801",
  "html_url": "https://github.com/aslam8801",
  "followers_url": "https://api.github.com/users/aslam8801/followers",
  "following_url": "https://api.github.com/users/aslam8801/following{/other_user}",
  "gists_url": "https://api.github.com/users/aslam8801/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/aslam8801/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/aslam8801/subscriptions",
  "organizations_url": "https://api.github.com/users/aslam8801/orgs",
  "repos_url": "https://api.github.com/users/aslam8801/repos",
  "events_url": "https://api.github.com/users/aslam8801/events{/privacy}",
  "received_events_url": "https://api.github.com/users/aslam8801/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": null,
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 6,
  "public_gists": 0,
  "followers": 0,
  "following": 0,
  "created_at": "2025-09-29T21:16:25Z",
  "updated_at": "2025-09-29T21:16:25Z"
}

const PORT = process.env.PORT || 3000;
app.get("/", (req, res) => {
    res.send("Welcome Back, Champ");
})

app.get("/twitter", (req, res)=>{
    res.send('<a href="https://github.com/aslam8801">GitHub</a>')
})

app.get("/github", (req, res)=>{
    res.json(githubData);
})

app.listen(PORT, ()=>{
    console.log(`App listening at port${PORT}`);
});

console.log(process.env.PORT);