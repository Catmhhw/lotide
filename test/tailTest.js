// const assertEqual = require('../assertEqual');
// const tail = require("../tail")

// const result = tail(["Hello", "Lighthouse", "Labs"]);
// assertEqual(result.length, 2); // ensure we get back two elements
// assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
// assertEqual(result[1], "Labs"); // ensure second element is "Labs"

const assert = require('chai').assert;
const tail = require('../tail')

describe("#tail", () => {

  it("returns 7 for [5, 6, 7]", () => {
    assert.deepEqual(tail([5, 6, 7]), [6, 7]);
  });

  it("returns 2 for [1, 5, 3, 4, 2]", () => {
    assert.deepEqual(tail([1, 5, 3, 4, 2]), [5, 3, 4, 2]); 
  });

  it("returns 'World' for ['Hello', 'World']", () => {
    assert.deepEqual(tail(['Hello', 'World']), ['World']); 
  });

});



