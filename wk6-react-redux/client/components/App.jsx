import React from 'react'
import {connect} from 'react-redux'

import {increment} from '../actions'


const App = (props) => {
  return (
    <div>
      <h1>React development has begun!</h1>
      <p>{props.message}</p>
      <p>{props.counter}</p>
      <button onClick={() => {
          props.dispatch(increment(1))
        }}>Count!!!</button>
    </div>
  )
}

function mapStateToProps(state){
  return {
    message: state.message,
    counter: state.counter
  }
}

export default connect(mapStateToProps)(App)
