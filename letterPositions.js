const eqArrays = (arrayOne, arrayTwo) => {
    if (arrayOne.length === arrayTwo.length) {
        for (let i = 0; i < arrayOne.length; i++) {
            if (arrayOne[i] !== arrayTwo[i]) {
                return false;
            }
        }
        return true;
    }
    return false;
}

const assertArraysEqual = (actual, expected) => {
    if (eqArrays(actual, expected)) {
        console.log(`✅✅✅ Assertion Passed ${actual} === ${expected}`);
    } else {
        console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
    }
};

/////////////////////////////////////////////////
//function letterPositions which will return all the indices (zero-based positions) in the string where each character is found.

//keys have to be the letters of the sentence.
//
//values have to be an array of the index positions.
//results[sentence[i]] accesses the dictionary of values
//sentence[i] is the index of the string(sentence).
//

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