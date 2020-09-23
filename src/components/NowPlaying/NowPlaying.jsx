import React from 'react'
// import * as spotifyService from '../../services/spotifyService'
import './NowPlaying.css'

const NowPlaying = (props) => {
    const notChecked = props.nowPlayingNotChecked;
    return ( 
            <div className="nowplaying">
                        {notChecked ?
                        <div>
                        { props.nowPlayingName }
                        <br></br>
                        { props.nowPlayingArtist }
                        <br></br>
                            <a href={props.nowPlayingLink}>
                        <img alt='album art' src={props.nowPlayingAlbumArt ? props.nowPlayingAlbumArt : ''} style={{ height: 150 }}/>
                        </a>
                        </div> :
                        <div></div>
                        }
                        <button className="btn btn-dark" onClick={()=> props.handleGetNowPlaying()}>
                            Check Now Playing
                        </button>
                    </div>
     );
}
 
export default NowPlaying;
