import React from 'react'

function Satellites(props) {
  return (
    <div>
      <p>Satellites:</p>
      <ul>
      { props.satellites.map(satellite => {
        return <li key={satellite.id}><button onClick={() => props.handleClick(satellite.id)}>{satellite.name}</button></li>
      }) }
      </ul>
    </div>
  )
}

export default Satellites
