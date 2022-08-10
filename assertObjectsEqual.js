const eqObjects = require('./eqObjects')

const assertObjectsEqual = function (actual, expected) {
    const inspect = require('util').inspect

    if (actual === expected) {
        console.log(`✅✅✅ Assertion Passed ${inspect(actual)} === ${inspect(expected)}`);
    } else {
        console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
    }
}

// object1 = { a: "1", b: "2" }
// object2 = { a: "1", b: "2" }
// assertObjectsEqual(eqObjects(object1, object2), true)


// const ab = { a: "1", b: "2" };
// const ba = { b: "2", a: "1" };
// assertObjectsEqual(eqObjects(ab, ba), true); // => true

// const abc = { a: "1", b: "2", c: "3" };
// assertObjectsEqual(eqObjects(ab, abc), false); // => false

module.exports = assertObjectsEqual