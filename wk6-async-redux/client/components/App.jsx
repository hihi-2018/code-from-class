import React from 'react'

import ErrorMessage from './ErrorMessage'
import LoadOtherPosts from './LoadOtherPosts'
import OtherPosts from './OtherPosts'
import LoadSubreddit from './LoadSubreddit'
import SubredditList from './SubredditList'
import WaitIndicator from './WaitIndicator'
import FormThing from './FormThing'

const App = () => (
  <div className='app'>
    <ErrorMessage />
    <LoadOtherPosts />
    <OtherPosts />
    <LoadSubreddit />
    <WaitIndicator />
    <SubredditList />
    <FormThing />
  </div>
)

export default App
