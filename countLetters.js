const assertEqual = function (actual, expected) {
    if (actual === expected) {
      console.log(`✅✅✅ Assertion Passed ${actual} === ${expected}`);
    } else {
      console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
    }
  };

// const assertObjectsEqual = function (actual, expected) {
//     const inspect = require('util').inspect

//     if (actual === expected) {
//         console.log(`✅✅✅ Assertion Passed ${inspect(actual)} === ${inspect(expected)}`);
//     } else {
//         console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
//     }
// }

////////////////////

//1. take in a sentence(string) that returns an object with counts of each letter.
//2. function could return an object where each unique character encountered in the string is a property of the object
//   and the value for that property/key should be the number of occurrences for that character.

const countLetters = function (sentence) {
    let results = {};

    for (const characters of sentence) {
        if (results[characters]) {
            results[characters] += 1;
        } else {
            results[characters] = 1;
        }
        //console.log(characters);
    }
    return results;
}


//assertObjectEqual(countLetters('butter'), butterCheck);

console.log(countLetters('butter'));
console.log(countLetters('flour'));
console.log(countLetters('strawberry'));

// how to do a value check on the keys
// Object.keys(car).length === Object.keys(car2).length    this checks the length of the object

module.exports = countLetters;