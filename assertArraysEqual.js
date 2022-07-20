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
        console.log(`✅✅✅ Assertation Passed ${actual} === ${expected}`);
    } else {
        console.log(`🛑🛑🛑 Assertation Failed: ${actual} !== ${expected}`);
    }
};

// console.log(eqArrays([1, 2, 3], [1, 2, 3])) // => true
// console.log(eqArrays([1, 2, 3], [3, 2, 1])) // => false
// console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"])) // => true
// console.log(eqArrays(["1", "2", "3"], ["1", "2", 3])) // => false



console.log(assertArraysEqual([1, 2, 3], [1, 2, 3])) // => true
console.log(assertArraysEqual([1, 2, 3], [3, 2, 1])) // => false
console.log(assertArraysEqual(["1", "2", "3"], ["1", "2", "3"])) // => true
console.log(assertArraysEqual(["1", "2", "3"], ["1", "2", 3])) // => false