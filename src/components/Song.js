import React, { useEffect } from 'react';
import RabbitLyrics from 'rabbit-lyrics'

const Song = ({ currentSong, albumRef, lyricsRef, audioRef, isPlaying}) => {

  useEffect(() => {
    const r1 = () => lyricsRef.current.classList.remove("rabbit-lyrics")
    const r2 = () => lyricsRef.current.classList.remove("rabbit-lyrics--default")
    const r3 = () => lyricsRef.current.classList.remove("rabbit-lyrics--enabled")
    const r4 = () => lyricsRef.current.classList.remove("rabbit-lyrics--playing");
    // console.log('r1',  typeof r1)

    new RabbitLyrics({
      element: lyricsRef.current,
      mediaElement: audioRef.current,
      height: 120
    })

    //cleanup code
    return () => {
      r1() 
      r2() 
      r3() 
      r4()
    }
    
  }, [lyricsRef, audioRef, currentSong])
  
  return (
    <div className="song-container">
      <img className={`album${isPlaying ? 'Active' : ''}`} ref={albumRef} src={currentSong.cover} alt={currentSong.name}/>
      
      <h2>{currentSong.name}</h2>
      <h3>{currentSong.artist}</h3>
      <p 
        className="lyrics-1"
        ref={lyricsRef}>
        {currentSong.lyrics && currentSong.lyrics}
      </p>
    </div>
  );
};

export default Song;
