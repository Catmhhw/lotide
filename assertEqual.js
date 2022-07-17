const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log("✅✅✅ " + "Assertation Passed: " + actual + " === " + expected);
    return true;
  }
  console.log("🛑🛑🛑 " + "Assertation Failed: " + actual + " !== " + expected);
  return false;
};

assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);