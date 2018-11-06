import React from 'react'

import Child from './Child'

class App extends React.Component {
  constructor(props) {
    super(props)
  }

  // console.log('parent props', props)
  render() {
    return (
      <div>
        hello {this.props.name.length > 4 && this.props.name}
        <Child parentName={this.props.name} fruit={this.props.fruit}/>
      </div>
    )
  }
}

export default App

// module.exports = HelloTemplate
// module.exports = {
//   HelloTemplate: HelloTemplate
// }
