const assertEqual = function (actual, expected) {
    if (actual === expected) {
        console.log(`✅✅✅ Assertion Passed ${actual} === ${expected}`);
    } else {
        console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
    }
};
//***line 10 if false / check negatives first***
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

/////////////////////////////////////////////////

const eqObjects = function (object1, object2) {
    const keyOne = Object.keys(object1).sort();
    const keyTwo = Object.keys(object2).sort();
    // keys of the object...sort the keys so we can compare them and assign them to a variable
    const valueOne = Object.values(object1).sort();
    const valueTwo = Object.values(object2).sort();
    // same thing but with values instead.
    //Array.isArray()
    // ***if the length of object1 is the same of the object2
    // if (object1.isArray && object2.isArray) {
    //     return false
    // }

    if (object1.length !== object2.length) {
        return false;
    }

    if (!eqArrays(keyOne, keyTwo)) {
        return false;
    }

    if (!eqArrays(valueOne, valueTwo)) {
        return false;
    }

    return true

};

object1 = { a: "1", b: "2" }
object2 = { a: "1", b: "2" }
assertEqual(eqObjects(object1, object2), true)


const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab, ba), true); // => true


const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc), false); // => false