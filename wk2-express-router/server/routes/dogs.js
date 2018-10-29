let express = require('express')
let router = express.Router()
let fs = require('fs')

let puppyDataNoTwo = require('../../data.json')

router.get('/', (req, res) => {
  fs.readFile('./data.json', 'utf8', (err, data) => {
    if (err) {
      console.log('Errror', err)
      res.send('There was an error')
    } else {
      // console.log('data', typeof data)
      let puppyData = JSON.parse(data)
      // console.log('puppyData', typeof puppyData)
      console.log('puppyData ', puppyData)
      console.log('puppyData ', JSON.stringify(puppyData, null, 4))
      console.log('stringify ', JSON.stringify(puppyData))
      res.send('OK')
    }
  })
})

module.exports = router
