import React from 'react'
import './player.css';
import SideBar from './sidebar.jsx';
import Body from './body.jsx';
import Footer from './footer.jsx';

const Player = ({spotify}) => {
  return (
    <div className='player'>
       
      <div className="player-body">
        <SideBar/>
        <Body spotify={spotify}/>
 {/* side Baar  */}
 {/* Body */}
 
 </div>

 {/* footer */}
 <Footer/>

    </div>
   )
}

export default Player