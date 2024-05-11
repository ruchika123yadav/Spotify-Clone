import React from 'react'
import './player.css';
import SideBar from './sidebar.jsx';
import Body from './body.jsx';
import Footer from './footer.jsx';

const Player = ({spotify}) => {
  return (
    <div className='player'>
      Player
      <div className="player-body">
        <SideBar/>
        <Body/>
 {/* side Baar  */}
 {/* Body */}
 
 </div>

 {/* footer */}
 <Footer/>

    </div>
   )
}

export default Player