import React from 'react';
import './sidebar.css';
import SidebarOption from './sidebarOption.jsx';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
function sidebar() {
  return (
    <div className='sidebar'>
       <img className='sidebar-logo'
       src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" 
       alt="" />

      <SidebarOption Icon={HomeIcon} title="Home"/>
      <SidebarOption Icon={SearchIcon} title="Search"/>
      <SidebarOption Icon={LibraryMusicIcon} title="Your Library"/>

      <br />
      <strong className='sidebar-title'>PLAYLISTS</strong>
         <hr /> 
         <SidebarOption   title="Hip Hop"/>
      <SidebarOption   title="Punjabi"/>
      <SidebarOption   title="BollyWood"/>


     
    </div>
  )
}

export default sidebar
