require('dotenv').config()

const express = require('express')
const app = express()
const cors = require('cors')
const SpotifyWebApi = require('spotify-web-api-node')



const spotifyApi = new SpotifyWebApi();

app.use(cors())

const port = 4000


// create this a middleware

app.use( async (req ,res, next) => {

  const client_id = process.env.CLIENT_ID
  const clientSecret = process.env.CLIENT_SECRET

  const body = new URLSearchParams();
  body.append('grant_type', 'client_credentials');
  body.append('client_id', client_id);
  body.append('client_secret' , clientSecret)

  // getting token

  const response = await fetch('https://accounts.spotify.com/api/token', 
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: body
    }

  )
  if(response.ok){
    const data = await response.json();
    req.data = data
    next()
  }
  else{
    console.log('err')
  }
  
})


// login route
app.post('/login' , async (req ,res ) => {
  
  const  response  = req.data;
  const access_token = response.access_token
  
  // SEND RESPONCE
  res.json(
    access_token
  )
  res.redirect('http://localhost:5173')
  
  
  
})



app.listen(port, () => {
  console.log(`listening on ${port}`)
})

// many other routes