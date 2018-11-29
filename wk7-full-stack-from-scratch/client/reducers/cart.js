const initialState = [
  {
    beer: {
      id: 1,
      name: 'HBIB Ginger Fusion',
      brewery: 'Hawkes Bay Independent Brewery',
      country: 'New Zealand',
      style: 'Ginger Beer',
      abv: '5%'
    },
    quantity: 2
  },
  {
    beer: {
      id: 2,
      name: 'Mangose & Melons',
      brewery: 'Baylands Brewery',
      country: 'New Zealand',
      style: 'Fruit Gose',
      abv: '4%'
    },
    quantity: 12
  }
]

function reducer(state = initialState, action) {
  switch (action.type) {
    case 'RECEIVE_CART':
      return action.cart

    default:
      return state
  }
}

export default reducer
