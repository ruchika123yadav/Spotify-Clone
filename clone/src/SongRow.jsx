import React from 'react'
import './songRow.css'

function SongRow({track}) {
  return (
    <div className='songRow'>
        <img className="songRow-album" src={track.album.images[0].url} alt="songs" />
      <div className="songRow-info">
        <h2>{track.name}</h2>
        <p>
          {track.artists.map((artist) => artist.name).join(", ")} -{" "}
          {track.album.name}
        </p>
      </div>
    </div>
  )
}

export default SongRow
