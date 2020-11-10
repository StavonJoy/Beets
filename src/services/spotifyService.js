import SpotifyWebApi from 'spotify-web-api-js'
const spotifyApi = new SpotifyWebApi();
const baseUrl = "https://api.spotify.com/v1/search"

export function getNowPlaying(){
  return spotifyApi.getMyCurrentPlaybackState()
  .catch (err => console.log('THIS RIGHT HERE' + err))
}


export function songSearch(formData){
        // call token function save as tokenvariable
    const token = spotifyApi.getAccessToken()
  return fetch(`${baseUrl}/q=name:${formData}&type=track`, 
  {headers: {'Authorization': `Bearer ${token}`}})
  .then(res => res.json())
  .catch (err => console.log(err))
}