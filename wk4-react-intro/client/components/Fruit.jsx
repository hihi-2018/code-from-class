import React from 'react'

function Fruit(props) {
  return (
    <ul>
      {props.fruit.map((item,i) => {
        return <li key={`fruit-numer-${i}`}>{item}</li>
      })}
    </ul>
  )
}

export default Fruit
