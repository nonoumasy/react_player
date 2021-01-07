/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPlay,
  faPause,
  faAngleLeft,
  faAngleRight,
} from '@fortawesome/free-solid-svg-icons';
import { playAudio } from '../utilities/playAudio';

const Player = ({
  isPlaying,
  currentSong,
  nextSong,
  prevSong,
  buttonStatus,
  audioRef,
  songState,
  setSongState,
  handlePlayPauseSong,
}) => {
  // helpers
  const getNormalTime = (time) => {
    if (time) {
      return (
        `${Math.floor(time / 60)}:${(`0${Math.floor(time % 60)}`).slice(-2)}`
      );
    }
    return '0:00';
  };

  const handleSeekBarDrag = (event) => {
    // eslint-disable-next-line no-param-reassign
    audioRef.current.currentTime = event.target.value;
    setSongState({ ...songState, currentTime: event.target.value });
  };

  useEffect(() => {
    if (isPlaying) {
      playAudio(isPlaying, audioRef);
    }
  }, [currentSong, isPlaying, audioRef]);

  // styles
  const trackAnimation = {
    transform: `translateX(${songState.seekbarPercentage}%)`,
  };

  return (
    <div className="player">

      <div className="time-control">
        <p>{getNormalTime(songState.currentTime)}</p>
        <div
          style={{
            background: '#01A4C3',
          }}
          className="track"
        >
          <input
            type="range"
            min={0}
            max={songState.duration}
            value={songState.currentTime}
            onChange={handleSeekBarDrag}
          />
          <div style={trackAnimation} className="animate-track" />
        </div>
        <p>{getNormalTime(songState.duration)}</p>
      </div>

      <div className="play-control">
        <button type="button" disabled={!buttonStatus.previous}>
          <FontAwesomeIcon
            className="skip-back"
            size="2x"
            icon={faAngleLeft}
            onClick={prevSong}
          />
        </button>
        <button type="button">
          <FontAwesomeIcon
            className="play"
            size="2x"
            icon={isPlaying ? faPause : faPlay}
            onClick={handlePlayPauseSong}

          />
        </button>
        <button type="button" disabled={!buttonStatus.next}>
          <FontAwesomeIcon
            className="skip-forward"
            size="2x"
            icon={faAngleRight}
            onClick={nextSong}
          />
        </button>
      </div>
    </div>
  );
};

export default Player;
