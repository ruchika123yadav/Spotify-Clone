
import React from 'react';
import './footer.css';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import ShuffleIcon from '@mui/icons-material/Shuffle';
import RepeatIcon from '@mui/icons-material/Repeat';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import { Grid, Slider } from '@mui/material';
import PlaylistPlayIcon from '@mui/icons-material/PlaylistPlay';
import VolumeDownIcon from '@mui/icons-material/VolumeDown';

function Footer() {
  return (
    <div className='footer'>
      {/* ALBUM AND SONG DETAILS */}
      <div className="footer-left">
        {/* <p>ALBUM</p> */}
        <img className='footer-albumPhoto'
        src='./src/ruchi.jpg'
         alt="" />
        {/* SONG INFO */}
        <div className="footer__songInfo">
            <h4>NO LIE</h4>
            <p>playing...</p>
          </div>
      </div>

      {/* PLAYER CONTROLS */}
      <div className="footer-center">
        <ShuffleIcon className='footer-green'/>
        <SkipPreviousIcon className='footer-icon'/>
        <PlayCircleOutlineIcon fontSize='large' className='footer-icon'/>
        <SkipNextIcon className='footer-icon'/>
        <RepeatIcon className='footer-green'/>
      </div>

      {/* VOLUME CONTROL */}
      <div className="footer-right">
        <Grid container spacing={2} alignItems="center">
          <Grid item>
            <PlaylistPlayIcon />
          </Grid>
          <Grid item>
            <VolumeDownIcon />
          </Grid>
          <Grid item xs>
            {/* Here is the modified Slider component */}
            <Slider
              aria-label="Volume"
              defaultValue={30}  // You can set the default value as needed
              valueLabelDisplay="auto"
            />
          </Grid>
        </Grid>
      </div>
    </div>
  )
}

export default Footer;

