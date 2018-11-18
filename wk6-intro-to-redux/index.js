import {createStore} from 'redux'

const initialWombatState = {
  wombats: ['Gertrude', 'Bartholemew']
}

const wombatReducer = (state = initialWombatState, action) => {

  // action_looks_like = {
  //   type: 'ADD_WOMBAT',
  //   wombat: 'Harrison'
  // }

  // action_looks_like = {
  //   type: 'DEL_WOMBAT',
  //   wombat: 'Bartholemew'
  // }

  // if(action.type == 'ADD_WOMBAT') {
  //   return {
  //     wombats: [...state.wombats, action.wombat]
  //   }
  // } else if(action.type == 'DEL_WOMBAT') {
  //   return {
  //     wombats: state.wombats.filter((wombat) => wombat !== action.wombat)
  //   }
  // } else {
  //   return state
  // }


  switch (action.type) {
    case 'ADD_WOMBAT':
      return {
        // let newWombats = [...state.wombat]
        // newWombats.push(action.wombat)
        wombats: [...state.wombats, action.wombat]
      }
    case 'DEL_WOMBAT':
      return {
        wombats: state.wombats.filter((wombat) => wombat !== action.wombat)
      }
    default:
      return state
  }
}

const store = createStore(wombatReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

document.addEventListener('DOMContentLoaded', () => {
  render()
  store.subscribe(render)
  store.dispatch(
    {
    type: 'ADD_WOMBAT',
    wombat: 'Harrison'
    }
  )
})

function render () {
  const state = store.getState()
  const wombats = state.wombats
  document.getElementById('app').innerHTML = renderWombats(wombats)
}

function renderWombats (wombats) {
  let output = '<ul>'
  for (const wombat of wombats) {
    output += `<li>${wombat}</li>`
  }
  output += '</ul>'

  console.log('Rendering: ', output)

  return output

  // Produces <ul><li>Gertrude</li><li>Bartholemew</li></ul>
}
