var functions = require('./functions')

var types = {
  o: { name: 'Engie' },
  a: ['one', 'two', 'three'],
  s: 'this is a string',
  n: 4,
  bo: true,
  nu: null,
  un: undefined,
  fu: function() { console.log('hi') },
}


console.log('I am an object ' + typeof types.o)
console.log('I am an array? ' + typeof types.a)
console.log('I am an string ' + typeof types.s)
console.log('I am an number? float? integer? ' + typeof types.n)
console.log('I am an boolean ' + typeof types.bo)
console.log('I am an null? ' + typeof types.nu)
console.log('I am an undefined ' + typeof types.un)
console.log('I am an function ' + typeof types.fu)


var obj = {
  1: 'Engie',
  0: 'Kelly',
  0: 'Not Kelly'
}

var arr = ['Engie', 'Kelly']

console.log(obj[0])
console.log(arr[0])

console.log('--------')
console.log('')
console.log('')
console.log('')


// sayHello()
// anotherHello()

// function sayHello() {
//   console.log('sayHello')
// }

var anotherHello = function() {
  console.log('anotherHello')
}

function runIt(it, thisthing) {
  it()
  thisthing('hi there!')
}

console.log('say hello:', functions.sayHello)
console.log('say hello:', functions.byebye)

// runIt(sayHello, console.log)
