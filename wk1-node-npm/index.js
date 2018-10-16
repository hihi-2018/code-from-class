// map, filter, find, reduce
firstArr = [1,2,3,4,5,6]

newArr = firstArr.map(function(item) {
  return item * 2
})

function map(arr, func) {
  var resultArr = []
  for(var i = 0; i < arr.length; i++) {
    var item = arr[i]
    var newItem = func(item)
    resultArr.push(newItem)
  }
  return resultArr
}


function filter(arr, func) {
  var resultArr = []
  for(var i = 0; i < arr.length; i++) {
    var item = arr[i]
    if(func(item)) {
      resultArr.push(newItem)
    }
  }
  return resultArr
}

function find(arr, func) {
  var resultArr = []
  for(var i = 0; i < arr.length; i++) {
    var item = arr[i]
    if(func(item)) {
      return item
    }
  }
  return resultArr
}

function find(arr, func) {
  return filter(arr, func)[0]
}


otherNewArr = map(firstArr, function(item){
  return item * 2
})

console.log(newArr)
console.log(otherNewArr)

// [2,4,6,8,10,12]
