import React from 'react';

const Song = ({ currentSong, albumRef, isPlaying}) => {

  return (
    <div className="song-container">
      {isPlaying ? <img className="album_coverRotating" src={currentSong.cover} alt={currentSong.name} /> : <img className="album_cover" ref={albumRef} src={currentSong.cover} alt={currentSong.name} />}
      
      <h2>{currentSong.name}</h2>
      <h3>{currentSong.artist}</h3>
      <p className="lyrics">
        {currentSong.lyrics && currentSong.lyrics.substring(0, 80)}
      </p>
    </div>
  );
};

export default Song;
