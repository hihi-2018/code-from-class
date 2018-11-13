import React from 'react'
import Satellites from './Satellites'
import Satellite from './Satellite'
import {getSatellites, getSatellite} from '../iss_api_client'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      satellites: [],
      selectedSatellite: {}
    }

    this.handleClick = this.handleClick.bind(this)
  }

  componentDidMount() {
    getSatellites()
    .then(satellites => {
      this.setState({
        satellites: satellites
      })
    })
  }

  handleClick(id) {
    getSatellite(id)
    .then(selectedSatellite => {
      this.setState({
        selectedSatellite: selectedSatellite
      })
    })
  }

  render() {
    return (
      <div>
        <h1>React development has begun!</h1>
        { this.state.satellites.length > 0 && <Satellites satellites={this.state.satellites} handleClick={this.handleClick}/>}
        { this.state.selectedSatellite && <Satellite satellite={this.state.selectedSatellite} />}
      </div>
    )
  }
}

export default App
