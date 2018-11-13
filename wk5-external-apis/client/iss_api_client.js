import request from 'superagent'

// This is a common pattern to change the API URL in different environments - Test vs Prod
// const base_url = process.env.NODE_ENV === 'production' ? 'https://api.wheretheiss.at/v1' : 'https://test.api.wheretheiss.at/v1'

// const base_url = 'https://api.wheretheiss.at/v1'
const base_url = 'http://localhost:3000/v1'

export function getSatellites() {
  return request.get(base_url + '/satellites')
  .then(res => {
    return res.body
  })
  .then(satellites => {
    console.log(satellites)
    return satellites
  })
}

export function getSatellite(id) {
  return request.get(base_url + '/satellites/' + id)
  .then(res => res.body)
  .then(satellite => {
    console.log(satellite)
    return satellite
  })
}
