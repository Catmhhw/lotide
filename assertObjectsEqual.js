const assertObjectsEqual = function (actual, expected) {
    const inspect = require('util').inspect

    if (actual === expected) {
        console.log(`✅✅✅ Assertion Passed ${inspect(actual)} === ${inspect(expected)}`);
    } else {
        console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
    }
}

const eqArrays = (arrayOne, arrayTwo) => {
    if (arrayOne.length !== arrayTwo.length) {
        return false;
    }
    for (let i = 0; i < arrayOne.length; i++) {
        if (arrayOne[i] !== arrayTwo[i]) {
            return false;
        }
    }
    return true;
}


const eqObjects = function (object1, object2) {

    const keyOne = Object.keys(object1).sort();
    const keyTwo = Object.keys(object2).sort();

    if (!eqArrays(keyOne, keyTwo)) {
        return false;
    }

    for (const key in object1) {
        console.log("object1[key]: ", key, object1[key])
        console.log("object2[key]: ", key, object2[key])
        if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
            if (!eqArrays(object1[key], object2[key])) {
                return false;
            }
        } else if (object1[key] !== object2[key]) {
            return false;
        }
    }

    return true;
}




object1 = { a: "1", b: "2" }
object2 = { a: "1", b: "2" }

assertObjectsEqual(eqObjects(object1, object2), true)


const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertObjectsEqual(eqObjects(ab, ba), true); // => true

const abc = { a: "1", b: "2", c: "3" };
assertObjectsEqual(eqObjects(ab, abc), false); // => false