// eslint-disable-next-line import/prefer-default-export
export const playAudio = (isPlaying, audioRef) => {
  if (isPlaying) {
    const playPromise = audioRef.current.play();
    if (playPromise !== undefined) {
      playPromise.then(() => audioRef.current.play());
    }
  }
};
