const tail = require('../tail');
const assertEqual = require('../assertEqual');

//Testing
const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2); // ensure we get back two elements
assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(result[1], "Labs"); // ensure second element is "Labs"

//Checking that the original array is the same
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3);

const elo = tail(["diamond"]);
assertEqual(elo.length, 0);

const empty = tail([]);
assertEqual(empty.length, 0);