let fs = require('fs')

function printData(data) {
  console.log(data)
}

function printError(err) {
  console.log("There was an error! \n", err)
}

function readFile(fileName, callback) {
  fs.readFile(fileName, 'utf8', callback)
}

readFile('./data.json', (err, data) => {
  if(err) {
    printError(err)
  } else {
    printData(data)
  }
  console.log('I have read the file')
})

function readFilePromiseStyle(fileName) {
  return new Promise((resolve, reject) => {
    fs.readFile(fileName, 'utf8', (err, data) => {
      if(err) {
        reject(err)
      } else {
        resolve(data)
      }
    })
  })
}

readFilePromiseStyle('./data.json')
.then((data) => {
  printData(data)
  return data
})
.catch((err) => {
  printError(err)
  return 'error'
})
.then((data) => {
  console.log('I have read the file', thing)
  return data
})
