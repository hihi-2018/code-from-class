import React from 'react'
import {Link} from 'react-router-dom'

import {list_of_animals as animals} from '../../data/animals.json'

const AnimalNouns = (props) => {
  let animalToFind = props.match.params.animal
  let foundAnimal = animals.find(animalData => animalData.animal === animalToFind)

  console.log(foundAnimal)

  return (
      <div>
        <h1>{animalToFind}</h1>
        <ul>
          {foundAnimal.nouns.map(n => <li key={n}>{n}</li>)}
        </ul>
        <Link to="/animals">Back</Link>
      </div>
  )
}

export default AnimalNouns
