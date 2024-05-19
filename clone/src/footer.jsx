import React from 'react';
import './footer.css';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import ShuffleIcon from '@mui/icons-material/Shuffle';
import RepeatIcon from '@mui/icons-material/Repeat';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import {Grid,Slider} from '@mui/material';
import PlaylistPlayIcon from '@mui/icons-material/PlaylistPlay';
import VolumeDownIcon from '@mui/icons-material/VolumeDown';

function footer() {
  return (
    <div className='footer'>

      {/* we use the spec box to equally space them out */}
        <div className="footer-left">
          {/* ALBUM AND SONG DETAILS */}
          <p>ALNUM</p>
        </div>

        <div className="footer-center">
           {/* PLAYER CONTROL */}
           <ShuffleIcon className='footer-greeen'/>
          <SkipPreviousIcon className='footer-icon'/>
           <PlayCircleOutlineIcon fontSize='large' className='footer-icon'/>
           <SkipNextIcon className='footer-icon'/>
           <RepeatIcon className='fotter-green'/>
        </div>

        <div className="fotter-right">
           {/* VOLUME CONTROL */}
           <Grid container spacing={2}>
          <Grid item>
            <PlaylistPlayIcon />
          </Grid>
          <Grid item>
            <VolumeDownIcon />
          </Grid>
          <Grid item xs>
           <Slider/>
          </Grid>
        </Grid>
        </div>

    </div>
  )
}

export default footer
