import request from 'superagent'

export const SHOW_ERROR = 'SHOW_ERROR'
export const RECEIVE_POSTS = 'RECEIVE_POSTS'
export const REQUEST_POSTS = 'REQUEST_POSTS'
export const RECEIVE_OTHER_POSTS = 'RECEIVE_OTHER_POSTS'
export const REQUEST_OTHER_POSTS = 'REQUEST_OTHER_POSTS'

export const requestPosts = () => {
  return {
    type: REQUEST_POSTS
  }
}

export const receivePosts = (posts) => {
  return {
    type: RECEIVE_POSTS,
    posts: posts.map(post => post.data)
  }
}

export const showError = (errorMessage) => {
  return {
    type: SHOW_ERROR,
    errorMessage: errorMessage
  }
}

export function fetchPosts (subreddit) {
  return (dispatch) => {
    dispatch(requestPosts())
    return request
      .get(`/api/v1/reddit/subreddit/${subreddit}`)
      .then(res => {
        dispatch(receivePosts(res.body))
      })
      .catch(err => {
        dispatch(showError(err.message))
      })
  }
}

export const requestOtherPosts = () => {
  return {
    type: REQUEST_OTHER_POSTS
  }
}

export const receiveOtherPosts = (posts) => {
  return {
    type: RECEIVE_OTHER_POSTS,
    posts: posts
  }
}

export function fetchOtherPosts (userId) {
  return (dispatch) => {
    dispatch(requestOtherPosts())
    return request
      .get(`https://jsonplaceholder.typicode.com/posts`)
      .then(res => {
        console.log(res.body)
        dispatch(receiveOtherPosts(res.body.filter(post => post.userId == userId)))
      })
      .catch(err => {
        dispatch(showError(err.message))
      })
  }
}

// This one is using fetch not superagent
export function saveUser(username) {
  console.log('saveUser')
  return (dispatch) => {
    console.log('saveUser running')
    return fetch('/api/v1/users', {method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({username: username})})
    .then(res => {
      console.log('res', res.body)
    })
    .catch(err => {
      console.log(err)
    })
  }
}

// This one is using superagent not fetch
// export function saveUser(username) {
//   return (dispatch) => {
//     return fetch('', method: 'POST')
//   }
// }
