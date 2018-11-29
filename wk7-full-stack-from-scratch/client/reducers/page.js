const initialState = 'listing'

function reducer(state = initialState, action) {
  switch (action.type) {
    case 'NAVIGATE':
      return action.page

    default:
      return state
  }
}

export default reducer
