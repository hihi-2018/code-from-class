import React from 'react'
import {Link} from 'react-router-dom'

import {list_of_animals as animals} from '../../data/animals.json'

// class AnimalList extends React.Component {
// function AnimalList() {
const AnimalList = () => {
  let animalNames = animals.map(a => a.animal)
  return (
      <div>
        <h2>Animals!</h2>
        <ul>
          {animalNames.map(name => {
            return (
              <li key={name}>
                <Link to={'/' + name + '/nouns'}>{name}</Link>
              </li>
            )
          })}
        </ul>
      </div>
  )
}

export default AnimalList
