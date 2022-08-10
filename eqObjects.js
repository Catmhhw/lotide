const assertEqual = require("./assertEqual")
const eqArrays = require("./eqArrays")

const eqObjects = function (object1, object2) {

    const keyOne = Object.keys(object1).sort();             // keys of the object...sort the keys so we can compare them and assign them to a variable
    const keyTwo = Object.keys(object2).sort();

    if (!eqArrays(keyOne, keyTwo)) {                        //checks if the length and the letters of the KEYS are the same
        return false;
    }
    
    for (const key in object1) {                                            //for in loop. looks at each key of object1  
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


// //Primitives As Values (Tests)
// const ab = { a: "1", b: "2" };
// const ba = { b: "2", a: "1" };
// assertEqual(eqObjects(ab, ba), true); // => true

// const abc = { a: "1", b: "2", c: "3" };
// assertEqual(eqObjects(ab, abc), false); // => false

// //Arrays As Values (Tests)
// const cd = { c: "1", d: ["2", 3] };
// const dc = { d: ["2", 3], c: "1" };
// assertEqual(eqObjects(cd, dc), true); // => trues

// const cd2 = { c: "1", d: ["2", 3, 4] };
// assertEqual(eqObjects(cd, cd2), false); // => false

module.exports = eqObjects;