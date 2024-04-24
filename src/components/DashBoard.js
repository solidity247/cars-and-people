import React from 'react'
import Team from './Team'

export default function DashBoard({teamsInfo}) {

    console.log(teamsInfo)
    // teamsInfo = []

  return (
    <div>
        {teamsInfo.map(t=> <Team teamRacers={t} />) }
    </div>
  )
}
