import React from 'react'
import { connect } from 'react-redux'

import { navigate } from '../actions'

class Cart extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      items: [...props.items]
    }

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e) {
    let index = Number(e.target.name.replace('item-',''))
    let items = [...this.state.items]
    items[index].quantity = e.target.value

    this.setState({
      items: items
    })
  }

  render() {
    return (
      <div className="cart">

        <h1><span className="fa fa-beer"></span> Sweet As Beers <span className="fa fa-beer"></span></h1>

        <p className="welcome">Thirsty? Sweet! You're one step closer to a quenching.</p>

        <table>
          <thead>
            <tr>
              <th>Beer</th>
              <th>Quantity</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>
            {this.state.items.map((item,i) => {
              return (
                <tr key={`cart-item-${i}`}>
                  <td>{item.beer.name}</td>
                  <td><input className="update-input" name={ `item-${i}` } value={item.quantity} onChange={this.handleChange}/></td>
                  <td><button><span className="fa fa-trash fa-2x"></span></button></td>
                </tr>
              )
            })}
          </tbody>
        </table>

        <p className="actions">
          <a href="#" onClick={e => { e.preventDefault(); this.props.dispatch(navigate('listing')) }}>Continue shopping</a>
          <button>Update</button>
          <button className="button-primary">Checkout</button>
        </p>

      </div>
    )
  }
}

export default connect()(Cart)
