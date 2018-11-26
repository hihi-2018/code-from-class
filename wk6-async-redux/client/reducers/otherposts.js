import {RECEIVE_OTHER_POSTS} from '../actions'

function reducer (state = [], action) {
  switch (action.type) {
    case RECEIVE_OTHER_POSTS:
      return action.posts

    default:
      return state
  }
}

export default reducer
