import React from 'react'

function Satellite(props) {
  let satellite = props.satellite
  console.log(satellite)
  let satelliteData = Object.keys(satellite).map(key => {
    return [key, satellite[key]]
  })
  console.log(satelliteData)

  return (
    <div>
      <p>Satellite:</p>
      <ul>
      { satelliteData.map((item,i) => {
        return <li key={`key-${i}`}>{item[0]}: {item[1]}</li>
      }) }
      </ul>
    </div>
  )
}

export default Satellite
