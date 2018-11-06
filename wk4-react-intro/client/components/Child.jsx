import React from 'react'

import Fruit from './Fruit'

function Child(props) {
  console.log('child props', props)
  return (
    <div>
      <p>Hello from the child template... {props.parentName}</p>
      <Fruit fruit={props.fruit}/>
    </div>
  )
}

export default Child
