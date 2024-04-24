import React from 'react'
import DriverCard from './DriverCard'



export default function Team({teamRacers, teamName}) {

    // take props 
    // process the data in sideaffect if necessary
    // return numerous of cards

  return (
    <div className='team'>
        { teamRacers.map( e=> <DriverCard key={e.id} racerObj={e} />) }
    </div>
  )
}
