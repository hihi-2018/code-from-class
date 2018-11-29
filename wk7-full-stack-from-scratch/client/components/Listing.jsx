import React from 'react'

class Listing extends React.Component {
  render() {
    return (
      <div>
        <h1><span className="fa fa-beer"></span> Sweet As Beers <span className="fa fa-beer"></span></h1>

        <p className="welcome">Welcome! Please select from our delicious selection and don't hesitate to let us know if we can answer any of your questions.</p>

        {this.props.beers.map(beer => {
          return (<div className="beer" key={`beer-${beer.id}`}>
            <p className="name">{beer.name}</p>
            <p className="description">A {beer.style} from {beer.brewery}</p>
            <p>
              <span className="country">{beer.country}</span>
              <span className="abv">{beer.abv} abv</span>
              <a href="/designs/cart.html" className="cart-link">Add to cart</a>
            </p>
          </div>)
        })}

      </div>
    )
  }
}

export default Listing
