import React from 'react'

export default function DriverCard(prop) {
    // prop - some object with component attribiures and children if any
    console.log(prop.racerObj);

    const componentData = prop.racerObj
  
    return (
    <div className="card">
        <h3>{componentData.racerName}</h3>
        <h4>{componentData.car}</h4>
    </div>
  )
}
