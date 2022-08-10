const assertArraysEqual = require("./assertArraysEqual")

//Implement without which will return a subset of a given array, removing unwanted elements.
const without = (firstArr, secondArr) => {
    let newArray = []
    let x = 0
    for (let i = 0; i < firstArr.length; i++) {
        for (let j = 0; j < secondArr.length; j++) {
            if (firstArr[i] === secondArr[j]) {
                x = 1
            }
        }
        if (x === 0) {
            newArray.push(firstArr[i])
        }
        x = 0
    }
    return (newArray)
}

console.log(without([1, 2, 3], [1])) // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])) // => ["1", "2"]


const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);

module.exports = without;