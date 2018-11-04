const React = require('react')
const ReactDOM = require('react-dom')

function helloTemplate (props) {
  console.log('parent props', props)
  return (
    <div>
      hello {props.name}
      <ChildTemplate parentName={props.name} fruit={props.fruit}/>
    </div>
  )
}

function ChildTemplate(props) {
  console.log('child props', props)
  return (
    <div>
      <p>Hello from the child template... {props.parentName}</p>
      <Fruit fruit={props.fruit}/>
    </div>
  )
}

function Fruit(props) {
  return (
    <ul>
      {props.fruit.map(item => {
        return <li>{item}</li>
      })}
    </ul>
  )
}

const data = {name: 'humans', fruit: ['apples', 'oranges', 'bananas', 'pears']}
const view = helloTemplate(data)

// Old way with Handlebars + Express
// Compiles template AND sends as response
// res.render('hello', data)

const placeToMount = document.getElementById('root')

ReactDOM.render(view, placeToMount)
