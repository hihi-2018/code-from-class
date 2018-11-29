import React from "react";
import { connect } from "react-redux"

import { getBeers } from "../actions"

import Listing from "./Listing"
import Cart from "./Cart"

export class App extends React.Component {
  componentDidMount() {
    console.log('mount')
    this.props.dispatch(getBeers())
  }

  render() {
    return (
      <div>
        <button onClick={() => this.props.dispatch(getBeers())}>Go</button>
        {this.props.page === 'cart' && <Cart items={this.props.cart}/>}
        {this.props.page === 'listing' && <Listing beers={this.props.beers}/>}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    beers: state.beers,
    page: state.page,
    cart: state.cart,
  }
}

export default connect(mapStateToProps)(App)
