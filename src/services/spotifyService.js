import SpotifyWebApi from 'spotify-web-api-js'
const spotifyApi = new SpotifyWebApi();

export function getNowPlaying(){
    return spotifyApi.getMyCurrentPlaybackState()
      }

export async function testElvis() {
    return await spotifyApi.getArtistAlbums('43ZHCT0cAZBISjO8DG9PnE');
}

//does this function need a spotify token?
export async function searchArtistNames(){
    return await spotifyApi.searchArtists('Love')
    .then(function(data) {
      console.log('Search artists by "Love"', data.body);
    }, function(err) {
      console.error(err);
    });
}