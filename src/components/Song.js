import React from 'react';

const Song = ({ currentSong }) => {
  return (
    <div className="song-container">
      <img src={currentSong.cover} alt={currentSong.name} />
      <h2>{currentSong.name}</h2>
      <h3>{currentSong.artist}</h3>
      {console.log(typeof currentSong.lyrics)}
      <p className="lyrics">
        {currentSong.lyrics.substring(0, 140)}
      </p>
    </div>
  );
};

export default Song;
