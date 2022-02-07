// FUNCTION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log("✅✅✅ Assertation Passed: " + actual + " === " + expected);
  } else {
    console.log("🛑🛑🛑 Assertation Failed: " + actual + " !== " + expected);
  }

};

//TEST CODE
assertEqual("Lighthouse", "Bootcamp");
assertEqual(50, 50);
assertEqual('ethan', 'ethan');
assertEqual(10, 100);