const assertArraysEqual = require("./assertArraysEqual")

//function letterPositions which will return all the indices (zero-based positions) in the string where each character is found.

//keys have to be the letters of the sentence.
//values have to be an array of the index positions.
//results[sentence[i]] accesses the dictionary of values
//sentence[i] is the index of the string(sentence).

const letterPositions = function (sentence) {
    const results = {};

    for (let i = 0; i < sentence.length; i++) {
        if (results[sentence[i]] === undefined) {
            results[sentence[i]] = [i]
        } else {
            results[sentence[i]].push(i)
        }
    }
    console.log(results)
    return results;
};

assertArraysEqual(letterPositions("hello").e, [1]);

//console.log(letterPositions("hello"))
letterPositions("hello")

module.exports = letterPositions;