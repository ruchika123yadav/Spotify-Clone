import Login from './login.jsx';
import './App.css';
import React, { useEffect, useState } from 'react';
import { getTokenFromUrl } from './spotify.jsx';
import SpotifyWebApi from  "spotify-web-api-js"; // this is a package that we installed to interact with spotify 
import Player from './Player.jsx';


const spotify = new SpotifyWebApi(); // this is an instance of the spotify web api

function App() {

  const [token, setToken] = useState(null)

  // Run code based on a given condition 
  useEffect(() => {
    const hash = getTokenFromUrl();// we give all authentication work to spotify and asked for the token
    // console.log('I HAVE A TOKEN >>>', token); // it will show the token in the console, which shouldn't be shown to the user as it is a security risk.
    window.location.hash = ""; // this will remove the token from the url

    const _token = hash.access_token; // this will get the access token from the response

    if (_token) {
      setToken(_token);
      spotify.setAccessToken(_token); // this will give the access token to the spotify instance
      spotify.getMe().then(user => {
        console.log('person: ', user);
      })
    }


  }, [])
 
  return (
    <div className='app'>
      {
        token ? (
          <Player/>
        ) : (
          <Login/>
        )
      }
    </div>
  )
}

export default App
