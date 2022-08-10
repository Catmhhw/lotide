const assertObjectsEqual = require('./assertObjectsEqual');
const eqObjects = require('./eqObjects');

//1. take in a sentence(string) that returns an object with counts of each letter.
//2. function could return an object where each unique character encountered in the string is a property of the object and the value for that property/key should be the number of occurrences for that character.

const countLetters = function (sentence) {
    let results = {};

    for (const characters of sentence) {
        if (results[characters]) {
            results[characters] += 1;
        } else {
            results[characters] = 1;
        }
    }
    return results;
}

// let butterCheck = { b: 1, u: 1, t: 2, e: 1, r: 1 }
// assertObjectsEqual(eqObjects(countLetters('butter'), butterCheck), true);

// console.log(countLetters('butter'));
// console.log(countLetters('flour'));
// console.log(countLetters('strawberry'));

// how to do a value check on the keys
// Object.keys(car).length === Object.keys(car2).length    this checks the length of the object

module.exports = countLetters;