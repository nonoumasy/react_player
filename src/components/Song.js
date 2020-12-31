import React, {useRef} from 'react';

const Song = ({ currentSong, albumRef}) => {

  return (
    <div className="song-container">
      <img className="album_cover" ref={albumRef} src={currentSong.cover} alt={currentSong.name} />
      <h2>{currentSong.name}</h2>
      <h3>{currentSong.artist}</h3>
      <p className="lyrics">
        {currentSong.lyrics && currentSong.lyrics.substring(0, 80)}
      </p>
    </div>
  );
};

export default Song;
