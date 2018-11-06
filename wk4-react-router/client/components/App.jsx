import React from 'react'
// Import the non-default module called HashRouter but call it Router
import {HashRouter as Router, Route} from 'react-router-dom'

import Home from './Home'
import AnimalList from './AnimalList'
import AnimalNouns from './AnimalNouns'

const App = () => {
  return (
    <Router>
      <React.Fragment>
        <Route exact path="/" component={Home}/>
        <Route path="/animals" component={AnimalList}/>
        <Route path="/:animal/nouns" component={AnimalNouns}/>
      </React.Fragment>
    </Router>
  )
}

export default App
// module.exports = App
// module.exports = {
//   App:App
// }
