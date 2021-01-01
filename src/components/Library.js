import React from 'react';

// import LibrarySong from './LibrarySong';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const Library = ({
  songs,
  // audioRef,
  setSongs,
  currentSong,
  setCurrentSong,
  setIsPlaying,
  isLibOpen,
  setIsLibOpen,
  handlePlayPauseSong
}) => {

  // const [items, setItems] = useState([])

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

      {/* <div className="library-songs">
        {songs.map((song) => (
          <div
            className={`library-song ${song.id === currentSong.id ? 'active' : ''}`}
            onClick={() => setCurrentSong(song)}
          >
            <img src={song.cover} alt={song.name} />
            <div className="song-description">
            <h3>{song.name}</h3>
            <h4>{song.artist}</h4>
            </div>
          </div>
        ))}
      </div> */}

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
                          <img src={song.cover} alt={song.name} />
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
        
      
    </div>
  );
};

export default Library;
