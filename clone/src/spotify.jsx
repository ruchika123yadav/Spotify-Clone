// https://developer.spotify.com/documentation/web-playback-sdk/quick-start/#
export const authEndpoint = "https://accounts.spotify.com/authorize";
// Replace with your app's client ID, redirect URI and desired scopes

 const clientId = "06a195ae6dfc4af0bafee23fe9b944b0";
 
// for getting the client id i firsst made the Spotify Developer account. and then Create an App after that i get this id which is basically shown in the url



const redirectUri = "http://localhost:5174/";


const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",
];
// In a real application, you might use these scopes when working with the Spotify API to request specific permissions or access certain features of the user's Spotify account. 

export const loginUrl=`${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join( "%20")}&response_type=token&show_dialog=true`;
//  here token is just like a string which represents your authentication