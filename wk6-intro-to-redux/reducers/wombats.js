const initialWombatState = ['Gertrude', 'Bartholemew']

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
      // let newWombats = [...state.wombat]
      // newWombats.push(action.wombat)
      return [...state.wombats, action.wombat]
    case 'DEL_WOMBAT':
      return state.wombats.filter((wombat) => wombat !== action.wombat)
    case 'UPDATE_WOMBAT':
      return state.wombats.map((wombat) => {
          if(wombat === action.wombat) {
            return action.newWombat
          } else {
            return wombat
          }
        })
    default:
      return state
  }
}

export default wombatReducer
