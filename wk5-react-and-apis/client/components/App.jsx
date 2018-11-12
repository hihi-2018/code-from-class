import React from 'react'
import request from 'superagent'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      animals: []
    }
  }

  componentDidMount() {
    console.log('Calling the API')
    request.get('/api/v1/animals')
    .then(res => {
      console.log('Got the animals')
      this.setState({
        animals: res.body
      })
    })
  }

  render() {
    console.log('render', new Date())
    return (
      <div>
        <h1>YUS!!!!</h1>
        <ul>
          {this.state.animals.map((animal, i) => {
            return <li key={`animal-${i}`}>{animal.name}</li>
          })}
        </ul>
      </div>
    )
  }
}

export default App
