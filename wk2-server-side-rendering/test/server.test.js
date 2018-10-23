let request = require('supertest')
let cheerio = require('cheerio')
let server = require('../server')

test('home page title is correct', function(done){
  // Arrange
  let expected = 'Welcome to my website  (Main layout)'

  // Act
  request(server).get('/').end(function(err, res){
    // Assert
    expect(err).toBeNull()

    let $ = cheerio.load(res.text)
    let actual = $('h1').first().text()

    // Assert
    expect(actual).toEqual(expected)

    done()
  })

})


test('home page title has the name in it', function(done){
  // Arrange
  let name = 'Robbie'
  let expected = `Welcome to my website ${name} (Main layout)`

  // Act
  request(server).get(`/?name=${name}`).end(function(err, res){
    // Assert
    expect(err).toBeNull()

    let $ = cheerio.load(res.text)
    let actual = $('h1').first().text()

    // Assert
    expect(actual).toEqual(expected)

    done()
  })

})
