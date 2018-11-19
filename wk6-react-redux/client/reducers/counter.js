const initialState = 0

const reducer = (state = initialState, action) => {
  switch(action.type) {
  case 'INCREMENT':
    return state + action.count
  default:
    return state
  }
}

export default reducer
