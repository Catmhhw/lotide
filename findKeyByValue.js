const assertEqual = require("./assertEqual")

const findKeyByValue = function (bestTVShowsByGenre, value) {
    const genreArray = Object.keys(bestTVShowsByGenre)
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

  module.exports = findKeyByValue;