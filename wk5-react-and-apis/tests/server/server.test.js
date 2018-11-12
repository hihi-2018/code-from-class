let request = require('supertest')

let server = require('../../server/server')

jest.mock('../../server/db/animals', () => {
  return {
    getAnimals: () => Promise.resolve([
      { name: 'Cat' },
      { name: 'Dog' },
    ])
  }
})

test('Check that /animals is good', () => {
  // Arrange
  let expected = 'Dog'

  return request(server)
  .get('/api/v1/animals')
  .then(res => {
    // Act
    let actual = res.body[1].name

    // Assert
    expect(actual).toEqual(expected)
  })
})
