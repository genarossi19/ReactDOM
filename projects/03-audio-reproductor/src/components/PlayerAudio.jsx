import React from 'react'
import Player from "@madzadev/audio-player";
import {tracks} from'../data/tracks'

function PlayerAudio() {
  return (
      <div>
      <h1>PlayerAudio</h1>
      <Player trackList={tracks}
        includeTags={false}
      />
      </div>
    
  )
}

export default PlayerAudio