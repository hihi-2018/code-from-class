import React from 'react'
import {connect} from 'react-redux'
import {fetchOtherPosts} from '../actions'

const LoadOtherPosts = ({dispatch}) => (
  <button onClick={() => dispatch(fetchOtherPosts(1))}>
    Fetch Other Posts
  </button>
)

export default connect()(LoadOtherPosts)
