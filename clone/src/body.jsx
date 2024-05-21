import React from 'react'
import './body.css';
import Header from './Header.jsx'
import { useDataLayerValue } from './DataLayer.jsx';
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
import FavoriteIcon from '@mui/icons-material/Favorite';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import SongRow from './SongRow.jsx';

function body({ spotify }) {
  const [{ discover_weekly }, dispatch] = useDataLayerValue();
  return (
    <div className='body'>
      <Header spotify={spotify} />

      <div className="body-info">
        <img src={discover_weekly?.images[0]?.url} alt="" />

        <div className="body-infoText">
          <strong>PLAYLIST</strong>
          <h2>Discover Weekly</h2>
          <p> {discover_weekly?.description}</p>
        </div>
      </div>
      {/* List of Songs */}
      <div className="body-songs">

        <div className="body-icons">
          <PlayCircleFilledIcon className='body-shuffle' />
          <FavoriteIcon fontSize='large'/>
          <MoreHorizIcon />

        </div>
         {discover_weekly?.tracks.items.map((item, index) => (
          <SongRow key={index} track={item.track} />
        ))}
                  {/* items.track accesses the track property of each item in the array. This implies that each item in discover_weekly.tracks.items is an object that includes a property named track */}

       </div>

    </div>
  )
}

export default body


 

