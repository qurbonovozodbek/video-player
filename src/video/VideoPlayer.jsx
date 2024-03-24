import React from 'react';
import ReactPlayer from 'react-player';
import '../App.css'
import video from '../assets/video.mp4'


function VideoPlayer () {
  const handleContextMenu = (event) => {
    event.preventDefault();
  };

  return (
    <div className='container' onContextMenu={handleContextMenu}>
      <h2>Video Player</h2>
      <div className="player-wrapper">
        <ReactPlayer
          url={video}
          controls={true}
          width="600px"
          height="340px"
          config={{
            file: {
              attributes: {
                controlsList: 'nodownload'
              }
            }
          }}
        />
      </div>
    </div>
  );
};

export default VideoPlayer;
