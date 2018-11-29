import request from 'superagent'

const RECEIVE_BEERS = 'RECEIVE_BEERS'

export function navigate(toPage) {
  return {
    type: 'NAVIGATE',
    page: toPage,
  }
}

export function receiveBeers(beers) {
  return {
    type: RECEIVE_BEERS,
    beers: beers
  }
}

export function getBeers() {
  return dispatch => {
    request.get('/api/v1/beers')
    .then(res => res.body)
    .then(beers => {
      dispatch(receiveBeers(beers))
    })
  }
}
