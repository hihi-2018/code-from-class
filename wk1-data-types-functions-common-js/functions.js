function sayHello() {
  console.log('sayHello')
}

function sayBye() {
  console.log('sayBye')
}

module.exports = {
  sayHello,
  byebye: sayBye
}
