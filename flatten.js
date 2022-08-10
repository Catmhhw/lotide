const assertArraysEqual = require("./assertArraysEqual")

const flatten = (array) => {
    let newArray = []
    let stringArray = array.join().split(",")
    console.log(stringArray)
    for (let i = 0; i < stringArray.length; i++) {
        newArray.push(parseInt(stringArray[i]));
    }
    return newArray
}

assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]) 
console.log(flatten([1, 2, [3, 4], 5, [6]])) // => [1, 2, 3, 4, 5, 6]

module.exports = flatten;