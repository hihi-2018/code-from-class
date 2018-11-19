import {createStore, combineReducers} from 'redux'

import wombatReducer from './reducers/wombats'
import aardvarkReducer from './reducers/aardvarks'

import {addWombatAction, updateWombatAction} from './actions/wombats'

const store = createStore(combineReducers({
    wombats: wombatReducer,
    aardvarks: aardvarkReducer
  }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

document.addEventListener('DOMContentLoaded', () => {
  render()
  store.subscribe(render)
})

function render () {
  const state = store.getState()
  const wombats = state.wombats
  document.getElementById('app').innerHTML = renderWombats(wombats)

  wombats.forEach(wombat => {
    document.getElementById("update-" + wombat).addEventListener('click', () => {
      let newWombat = document.getElementById('updated-' + wombat).value

      store.dispatch(updateWombatAction(wombat, newWombat))
    })
  })
}

function renderWombats (wombats) {
  let output = '<ul>'
  for (const wombat of wombats) {
    output += "<li>" + wombat + "<input id='updated-" + wombat + "' type='text'/><button id='update-" + wombat + "'>Save</button></li>"
  }
  output += '</ul>'

  return output

  // Produces <ul><li>Gertrude</li><li>Bartholemew</li></ul>
}
