import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import eqGif from './eq-white-playing.ddbf5d0fea2cd7639172a4fedbfd5dac.gif'

const Library = ({
  songs,
  setSongs,
  currentSong,
  setCurrentSong,
  // setIsPlaying,
  isPlaying,
  isLibOpen,
  setIsLibOpen,
  handlePlayPauseSong
}) => {

  const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
  };
  
  const onDragEnd = (result) =>  {
    // dropped outside the list
    if (!result.destination) {
      return;
    }

  const items = reorder(
    songs,
    result.source.index,
    result.destination.index
  );

    setSongs(items);
  }

  const clickHandler = (song) => {
      setCurrentSong(song)
      handlePlayPauseSong()
    }

  return (
    <div className={`library ${isLibOpen ? 'active-library' : ''}`}>
      <div className="heading-container">
        <h2>Playlist</h2>
        <button onClick={() => setIsLibOpen(false)}>
          <FontAwesomeIcon icon={faTimes} size="1x" />
        </button>
      </div>

      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="droppable">
          {(provided, snapshot) => (
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {songs.map((song, index) => (
                <Draggable key={song.id} draggableId={song.id} index={index}>
                  {(provided, snapshot) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      <div className="library-songs">
                        <div
                          className={`library-song ${song.id === currentSong.id ? 'active' : ''}`}
                          onClick={() => clickHandler(song)}
                        >
                          <div>
                            {isPlaying && <img src={eqGif} alt='sfd' className={`eqGif${song.id === currentSong.id ? 'Active' : ''}`} style={{ opacity: "100%" ? song.id === currentSong.id : "0%" }} />}
                            
                            <img src={song.cover} alt={song.name} className={`albumCover ${song.id === currentSong.id ? 'active' : ''}`} />
                          </div>
                          
                          <div className="song-description">
                            <h3>{song.name}</h3>
                            <h4>{song.artist}</h4>
                          </div>
                        </div>
                      </div>

                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
      <p className='info'>You can drag songs to reorder.</p>
        
      
    </div>
  );
};

export default Library;
