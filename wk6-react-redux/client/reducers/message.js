const initialState = 'Hi there'



const reducer = (state = initialState, action) => {
  switch(action.type) {
  case 'CHANGE_MESSAGE':
    return action.message
  default:
    return state
  }
}

export default reducer
