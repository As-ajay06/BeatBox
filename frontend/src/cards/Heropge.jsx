import { Children, use, useEffect, useState } from 'react'
import SpotifyWebApi from 'spotify-web-api-node'

const spotifyApi = new SpotifyWebApi()

function Heropage(){

    const [search , setSearch] = useState('')
    const [searchResult , setSearchResult] = useState([])

    async function accessTokenHandler(){
        const response = await fetch(`http://localhost:4000/login`,{
            method:'POST'
        })
        if(response.ok){
            const access_token = await response.json();
            spotifyApi.setAccessToken(access_token)
        }else{
            console.log("error")
        }
        // Get Elvis' albums
        
    }
    
    useEffect(() => {

        if(!search) return setSearchResult([])
        spotifyApi.searchTracks(search)
        .then((res) =>{

            setSearchResult(
                res.body.tracks.items.map(track => { 
                    return {
                        artist: track.artists[0].name,
                        uri: track.uri,
                        title: track.name,
                        image: track.album.images[0].url
                    }
                }))}
            )
        }, [search])     
        
        function playSong(){
            spotifyApi.play()
            .then(function() {
                console.log('Playback started');
            }, function(err) {
                //if the user making the request is non-premium, a 403 FORBIDDEN response code will be returned
                console.log('Something went wrong!', err);
            });
        }


    return <>
    <div className='flex'>
        <button onClick={accessTokenHandler} className='flex border-2 px-4 rounded-2xl justify-center'>Login</button>
        <button onClick={playSong} className='flex border-2 px-4 rounded-2xl justify-center'>Play</button>
    </div>
    <div>
        <input className='border-2 rounded-xl px-2 my-1 border-green-600 w-full' type='search' onChange={ (e) => setSearch(e.target.value)} placeholder='search song/artist'></input>
    </div>
    <div>
        {searchResult.map(track => (
            <TrackSearchReasult track={track} key={track.uri} />
        ))}
    </div>
    </>
}

export default Heropage

function TrackSearchReasult({track}){

    return <div className='flex p-2 m-3 bg-slate-50 align-middle cursor-pointer'>
        <img src={track.image} className='w-12 h-12 mr-2'/>
        <div>
            <div className=''>
                {track.title}
            </div>
            <div className=''>
                {track.artist}
            </div>
        </div>
    </div>
}
