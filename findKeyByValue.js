const assertEqual = function (actual, expected) {
    if (actual === expected) {
      console.log(`✅✅✅ Assertion Passed ${actual} === ${expected}`);
    } else {
      console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
    }
  };

//Key : value
//

const findKeyByValue = function (bestTVShowsByGenre, value) {
    const genreArray = Object.keys(bestTVShowsByGenre)
    //gets a list of the keys.
    for (const genre of genreArray) {
        if (bestTVShowsByGenre[genre]  === value) {
            return genre
        } 
    }
    return undefined
}

  const bestTVShowsByGenre = { 
    sci_fi: "The Expanse",
    comedy: "Brooklyn Nine-Nine",
    drama:  "The Wire"
  };
  
  assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
  assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);