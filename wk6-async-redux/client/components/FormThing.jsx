import React from 'react'
import {connect} from 'react-redux'

import {saveUser} from '../actions'

class FormThing extends React.Component {
    constructor(props) {
      super(props)

      this.state = {
        username: ''
      }

      this.handleSubmit = this.handleSubmit.bind(this)
      this.handleChange = this.handleChange.bind(this)
    }

    handleSubmit(e) {
      e.preventDefault()
      console.log('dispatch')
      this.props.dispatch(saveUser(this.state.username))
    }

    handleChange(e) {
      e.preventDefault()

      // Set username in state to value in text field
      // by the same name

      // let newState = {}
      // newState[e.target.name] = e.target.value
      // this.setState(newState)
      // Same same ---/\ === ----\/
      this.setState({
        [e.target.name]: e.target.value
      })
    }

    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <input name="username" onChange={this.handleChange} value={this.state.username}/>
          <button>Go!</button>
        </form>
      )
    }
}

export default connect()(FormThing)
