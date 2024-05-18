import React from 'react';
import './sidebar.css';
import SidebarOption from './sidebarOption.jsx';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import { useDataLayerValue } from './DataLayer.jsx';

function sidebar() {

  // const [{user,token},dispatch] = useDataLayerValue();//we can pulled out any information of datalyer here
const [{playlists},dispatch]=useDataLayerValue();
// in this we are ot getting the entire state by using the datalayer we just pulled the data of playlists it decrease overhead
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
         {playlists?.items?.map(playlist=>(
          <SidebarOption   title={playlist.name}/>

         ))}

         {/* <SidebarOption   title="Hip Hop"/>
      <SidebarOption   title="Punjabi"/>
      <SidebarOption   title="BollyWood"/> */}


     
    </div>
  )
}

export default sidebar
