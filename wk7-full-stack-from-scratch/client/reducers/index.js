import { combineReducers } from 'redux'
import beers from './beers'
import page from './page'
import cart from './cart'

export default combineReducers({
  beers,
  page,
  cart,
})
