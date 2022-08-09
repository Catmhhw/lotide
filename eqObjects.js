const assertEqual = function (actual, expected) {
    if (actual === expected) {
        console.log(`✅✅✅ Assertion Passed ${actual} === ${expected}`);
    } else {
        console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
    }
};

//checks to see if the arrays are the same.

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

/////////////////////////////////////////////////


const eqObjects = function (object1, object2) {

    const keyOne = Object.keys(object1).sort();             // keys of the object...sort the keys so we can compare them and assign them to a variable
    //console.log(keyOne)
    const keyTwo = Object.keys(object2).sort();
    //console.log(keyTwo)

    // const valueOne = Object.values(object1).sort();         // values of the object (of each key)...sorts the values.
    // //console.log(valueOne)
    // const valueTwo = Object.values(object2).sort();
    // //console.log(valueTwo)

    if (!eqArrays(keyOne, keyTwo)) {  //is the length and the letters of the KEYS the same? 
        return false;
    }

    // Within a loop
    // check to see if both values are arrays using Array.isArray()
    // if it is an Array pass them to "eqArrays" and ensure it returns true...
    // else : they are primitives and continue to use === to compare the two values.
    
    for (const key in object1) {                                            //for in loop. looks at each key of object1  
        console.log("object1[key]: ", key, object1[key])
        console.log("object2[key]: ", key, object2[key])
        if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {   //check to see if they are an array
            if (!eqArrays(object1[key], object2[key])) {
                return false;
            }
        } else if (object1[key] !== object2[key]) {
            return false;
        }
    }

    return true;
};


//Primitives As Values (Tests)
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab, ba), true); // => true

const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc), false); // => false

//Arrays As Values (Tests)
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false); // => false

module.exports = eqObjects;