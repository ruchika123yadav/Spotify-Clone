import React from 'react'
import './body.css';
import Header from './Header.jsx'

function body({spotify}) {
  return (
    <div className='body'>
       <Header spotify={spotify} />
    </div>
  )
}

export default body
