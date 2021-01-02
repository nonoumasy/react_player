import React from 'react';

const Song = ({ currentSong, albumRef, isPlaying}) => {

  return (
    <div className="song-container">
      <img className={`album${isPlaying ? 'Active' : ''}`} ref={albumRef} src={currentSong.cover} alt={currentSong.name}/>
      
      <h2>{currentSong.name}</h2>
      <h3>{currentSong.artist}</h3>
      <p className="lyrics">
        {currentSong.lyrics && currentSong.lyrics.substring(0, 120)}
      </p>
    </div>
  );
};

export default Song;
