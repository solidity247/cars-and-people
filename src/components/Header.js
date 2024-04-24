import React from 'react'

export default function Header( { day, time } ) {
    // props = {} ---> always object of those properties, we add to Component
    // const day = propr.day

  return (
    <header>
        <h2>Welcome to the Race</h2>
        <h2>Today is: {day}</h2>
        <h3>Time right now is: {time}</h3>
    </header>
  )
}
