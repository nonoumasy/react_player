import React, { useRef, useEffect } from 'react';
import RabbitLyrics from 'rabbit-lyrics'

const Song = ({ currentSong, albumRef, lyricsRef, audioRef, isPlaying}) => {
  

  // console.log('lyricsRef', lyricsRef.current)
  // console.log('audioRef', audioRef.current)

  useEffect(() => {
    lyricsRef.current.classList.remove("rabbit-lyrics");
    lyricsRef.current.classList.remove("rabbit-lyrics--default");
    lyricsRef.current.classList.remove("rabbit-lyrics--enabled");
    lyricsRef.current.classList.remove("rabbit-lyrics--playing");

    new RabbitLyrics({
      element: lyricsRef.current,
      mediaElement: audioRef.current,
      height: 120,
    })
    
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
