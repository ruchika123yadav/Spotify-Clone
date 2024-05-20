import React from 'react'
import SearchSharpIcon from '@mui/icons-material/SearchSharp';
import {  Avatar } from '@mui/material';
import './header.css';
import { useDataLayerValue } from './DataLayer.jsx';


function Header({spotify}) {
    const [{user},dispatch]=useDataLayerValue();
  return (
    <div className='header'>
        <div className="header-left">
          <SearchSharpIcon />
          <input type="text" 
          placeholder='Search for Artists,Songs and podcasts' />
         
        </div>
      <div className="header-right">
        <Avatar src={user?.images[0]?.url} alt={user?.display_name} />
        {/* This accesses the url property of the first image in the images array. Assuming each image object has a url property that points to the image file location. */}
        <h4>{user?.display_name}</h4>
      </div>

    </div>
  )
} 

export default Header

 