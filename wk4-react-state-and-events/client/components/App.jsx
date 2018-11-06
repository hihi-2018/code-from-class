import React from 'react'

import UserArea from './UserArea'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      counter: 0
    }

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(event) {
    event.preventDefault()

    this.setState({
      counter: this.state.counter + 1
    })
  }

  render() {
    return (
      <div>
        <h1>React development has begun!</h1>
        <p>Count is: {this.state.counter}</p>
        <UserArea userAreaHandleClick={this.handleClick}/>
      </div>
    )
  }
}

export default App
