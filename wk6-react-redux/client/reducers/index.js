import {combineReducers} from 'redux'

import messageReducer from './message'
import counterReducer from './counter'

const reducers = combineReducers({
  message: messageReducer,
  counter: counterReducer,
})

export default reducers
