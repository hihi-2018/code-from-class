import React from 'react'
import ReactDOM from 'react-dom'

import App from './components/App'

// function App (props) {
//   console.log('parent props', props)
//   return (
//     <div>
//       hello {props.name}
//       <Child parentName={props.name} fruit={props.fruit}/>
//     </div>
//   )
// }

// function Child(props) {
//   console.log('child props', props)
//   return (
//     <div>
//       <p>Hello from the child template... {props.parentName}</p>
//       <Fruit fruit={props.fruit}/>
//     </div>
//   )
// }

// function Fruit(props) {
//   return (
//     <ul>
//       {props.fruit.map(item => {
//         return <li>{item}</li>
//       })}
//     </ul>
//   )
// }

const data = {name: 'humans', fruit: ['apples', 'oranges', 'bananas', 'pears']}
// const view = App(data)

// Old way with Handlebars + Express
// Compiles template AND sends as response
// res.render('hello', data)

const placeToMount = document.getElementById('root')

// ReactDOM.render(<App name={data.name} fruit={data.fruit} />, placeToMount)
ReactDOM.render(<App {...data} />, placeToMount)
