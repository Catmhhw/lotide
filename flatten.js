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

/////////////////

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