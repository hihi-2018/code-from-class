const db = require('./connection')

function getCart(id) {
  const cartDetails = {}
  return db('cart_items').join('beers', 'cart_items.beer_id', 'beers.id').where('cart_items.cart_id', id)
  .then(cartItems => {
    cartDetails.items = cartItems.map(cartItem => {
      return {
        beer: {
          id: cartItem.beer_id,
          name: cartItem.name,
          brewery: cartItem.brewery,
          country: cartItem.country,
          style: cartItem.style,
          abv: cartItem.abv,
        },
        quantity: cartItem.quantity
      }
    })
    console.log(cartDetails)
    return cartDetails
  })
}
//
// { id: 4,
//        cart_id: 1,
//        beer_id: 4,
//        quantity: 1,
//        name: 'Bach Brewing Kingtide IPA',
//        brewery: 'Bach Brewing',
//        country: 'New Zealand',
//        style: 'IPA',
//        abv: '7%' } ] }
//
// beer: {
//   id: 1,
//   name: 'HBIB Ginger Fusion',
//   brewery: 'Hawkes Bay Independent Brewery',
//   country: 'New Zealand',
//   style: 'Ginger Beer',
//   abv: '5%'
// },
// quantity: 2

function createCart() {
  return db('carts').insert({})
}

function addToCart(cartId, beerId, quantity) {
  return db('cart_items').where('beer_id', beerId).where('cart_id', cartId).first()
  .then(existingCartItem => {
    if(!existingCartItem) {
      return db('cart_items').insert({ cart_id: cartId, beer_id: beerId, quantity: 0 })
    } else {
      return [existingCartItem.id]
    }
  })
  .then(existingCartItemIds => {
    return db('cart_items').where('id', existingCartItemIds[0]).first()
  })
  .then(existingCartItem => {
    return db('cart_items').update({ quantity: existingCartItem.quantity + quantity })
  })
}

module.exports = {
  getCart,
  createCart,
  addToCart,
}
