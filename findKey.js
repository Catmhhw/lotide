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

const findKey = function (object, callback) {
    for (key in object) {
        // console.log(object[key])
        // console.log(callback(object[key]))
        if (callback(object[key]) === true) {
            break
        }
    }
    console.log(key)
    return key
}

findKey({
    "Blue Hill": { stars: 1 },
    "Akaleri":   { stars: 3 },
    "noma":      { stars: 2 },
    "elBulli":   { stars: 3 },
    "Ora":       { stars: 2 },
    "Akelarre":  { stars: 3 }
  }, x => x.stars === 2) // => "noma"

//   assertArraysEqual()

//   Implement the function findKey which takes in an object and a callback. It should scan the object and return the first key 
//   for which the callback returns a truthy value. If no key is found, then it should return undefined.