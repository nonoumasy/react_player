/* eslint-disable semi */
/* eslint-disable jsx-a11y/media-has-caption */
import React, { useState, useRef } from "react"

// styles
import "./styles/app.scss"

// data
import data from "./util"

// components
import Nav from "./components/Nav"
import Song from "./components/Song"
import Player from "./components/Player"
import Library from "./components/Library"

function App() {
	const audioRef = useRef(null)
	const albumRef = useRef()
	const lyricsRef = useRef()

	const [songs, setSongs] = useState(data())
	const [currentSong, setCurrentSong] = useState(songs[0])
	const [isPlaying, setIsPlaying] = useState(false)
	const [isLibOpen, setIsLibOpen] = useState(false)
	const [isPlaylistRepeat, setIsPlaylistRepeat] = useState(false)
	const [songState, setSongState] = useState({
		currentTime: 0,
		duration: 0,
		seekbarPercentage: 0,
	})
	const [buttonStatus, setButtonStatus] = useState({
		next: true,
		previous: false,
	})

	// helpers
	const handleSongTimer = (event) => {
		const { currentTime } = event.target
		const { duration } = event.target
		const percentage = Math.round((100 * currentTime) / duration)

		setSongState({
			...songState,
			currentTime,
			duration,
			seekbarPercentage: percentage,
		})
	}

	const handleChangeSong = (direction) => {
		const index = songs.findIndex((song) => song.id === currentSong.id)

		switch (direction) {
			case "next":
				if (isPlaylistRepeat) {
					if (index === songs.length - 1) {
						setCurrentSong(songs[0])
					} else {
						setCurrentSong(songs[index + 1])
					}
					setButtonStatus({ next: true, previous: true })
				} else if (index === songs.length - 1) {
					setButtonStatus({ next: false, previous: true })
				} else {
					setCurrentSong(songs[index + 1])
					setButtonStatus({ next: true, previous: true })
				}
				break
			case "previous":
				if (isPlaylistRepeat) {
					if (index === 0) {
						setCurrentSong(songs[songs.length - 1])
					} else {
						setCurrentSong(songs[index - 1])
					}
					setButtonStatus({ next: true, previous: true })
				} else if (index === 0) {
					setButtonStatus({ next: true, previous: false })
				} else {
					setCurrentSong(songs[index - 1])
					setButtonStatus({ next: true, previous: true })
				}
				break
			default:
				break
		}
	}

	// event handlers
	const handlePlayPauseSong = () => {
		if (isPlaying) {
			audioRef.current.pause()
		} else {
			audioRef.current.play()
		}
		// eslint-disable-next-line no-shadow
		setIsPlaying((isPlaying) => !isPlaying)
	}

	return (
		// eslint-disable-next-line react/jsx-filename-extension
		<div className={`App ${isLibOpen ? "library-active" : ""}`}>
			<Nav isLibOpen={isLibOpen} setIsLibOpen={setIsLibOpen} />

			<Song
				currentSong={currentSong}
				albumRef={albumRef}
				audioRef={audioRef}
				lyricsRef={lyricsRef}
				isPlaying={isPlaying}
			/>

			<Player
				audioRef={audioRef}
				albumRef={albumRef}
				songs={songs}
				currentSong={currentSong}
				songState={songState}
				setSongState={setSongState}
				isPlaying={isPlaying}
				setIsPlaying={setIsPlaying}
				nextSong={() => handleChangeSong("next")}
				prevSong={() => handleChangeSong("previous")}
				buttonStatus={buttonStatus}
				isPlaylistRepeat={isPlaylistRepeat}
				setIsPlaylistRepeat={setIsPlaylistRepeat}
				handlePlayPauseSong={handlePlayPauseSong}
			/>

			<Library
				songs={songs}
				setSongs={setSongs}
				isPlaying={isPlaying}
				currentSong={currentSong}
				setCurrentSong={setCurrentSong}
				setIsPlaying={setIsPlaying}
				isLibOpen={isLibOpen}
				setIsLibOpen={setIsLibOpen}
				handlePlayPauseSong={handlePlayPauseSong}
			/>
			<audio
				// id="audio-1"
				ref={audioRef}
				src={currentSong.audio}
				type="audio/mpeg"
				onTimeUpdate={handleSongTimer}
				onLoadedMetadata={handleSongTimer}
				onEnded={() => handleChangeSong("next")}
			/>
		</div>
	)
}

export default App
