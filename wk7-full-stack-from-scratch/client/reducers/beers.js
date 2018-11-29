const initialState = []

function reducer(state = initialState, action) {
  switch (action.type) {
    case 'RECEIVE_BEERS':
      return action.beers

    default:
      return state
  }
}

export default reducer
