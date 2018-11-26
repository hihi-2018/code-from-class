import React from 'react'
import {connect} from 'react-redux'

import Post from './Post'

const OtherPosts = (props) => (
  <div>
    {props.otherposts.map((post, i) =>
      <Post
        key={i}
        title={post.title}
      />
    )}
  </div>
)

const mapStateToProps = (state) => {
  return {
    otherposts: state.otherposts
  }
}


export default connect(mapStateToProps)(OtherPosts)
