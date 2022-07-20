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

//////////////////////////////////

const middle = (array) => {
    if (array.length <= 2){
        console.log([])
        return;
    }
    if (array.length % 2 !== 0) {
        console.log(Math.floor(array.length / 2) + 1)
    } else {
        console.log(Math.floor(array.length / 2), Math.floor(array.length / 2) + 1)
    }
}


middle([1]) // => []
middle([1, 2]) // => []

middle([1, 2, 3]) // => [2]
middle([1, 2, 3, 4, 5]) // => [3]

middle([1, 2, 3, 4]) // => [2, 3]
middle([1, 2, 3, 4, 5, 6]) // => [3, 4]
