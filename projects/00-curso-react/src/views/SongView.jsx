import React from 'react'


import "./styles/SongView.css"

function SongView({songs}) {
  return (
    <div className='songsview-container'>
      <a href="/" >
    <button>Volver</button>
</a>
        
        <h1>{songs.name}</h1>
        <h2>{songs.author}</h2>
        <div className='image-songsview-container'><a href={songs.link} target='_blank'><img src={songs.image} alt={songs.name + " image"}/> </a></div>

    </div>
    
  )
}

export default SongView