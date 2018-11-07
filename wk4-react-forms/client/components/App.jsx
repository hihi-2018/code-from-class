import React from 'react'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      name: '',
      email: ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e) {
    let newState = {}
    newState[e.target.name] = e.target.value

    // Have a play with this new syntax
    // let newState = {
    //   [e.target.name]: e.target.value
    // }

    console.log('Change', newState)

    this.setState(newState)
  }

  handleSubmit(e) {
    e.preventDefault()

    console.log('submit', this.state)
  }

  render() {
    return (
      <React.Fragment>
        <h1>React development has begun!</h1>
        <form onSubmit={this.handleSubmit}>
          <input name="name" type="text" onChange={this.handleChange}/><br/><br/>
          <input name="email" type="text" onChange={this.handleChange}/><br/><br/>
          <input type="submit" />
        </form>
      </React.Fragment>
    )
  }
}

export default App
