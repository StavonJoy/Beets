import React from 'react'


const NowPlaying = (props) => {
    const notChecked = props.nowPlayingNotChecked;
    return ( 
        <div className="nowplaying">
            <button className="btn btn-dark" data-container="body" data-toggle="popover" data-placement="bottom" data-content="Play music on Spotify to use this feature!" onClick={()=> props.handleGetNowPlaying()}>
                Check Now Playing
            </button>
            {notChecked ?
            <div>
            <h4>{ props.nowPlayingName }</h4>
            <h6>{ props.nowPlayingArtist }</h6>            
                <a href={props.nowPlayingLink}>
            <img alt='album art' src={props.nowPlayingAlbumArt ? props.nowPlayingAlbumArt : ''} style={{ height: 150 }}/>
            </a>
            </div> :
            <div></div>
            }
        </div>
     );
}
 
export default NowPlaying;
