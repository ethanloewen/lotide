# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @ethanloewen/lotide`

**Require it:**

`const _ = require('@ethanloewen/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head(array)`: Returns the first element in an array.
* `tail(array)`: Returns everything expect the first element.
* `middle(array)`: Returns the middle element of an array. If the length is even it will return the middle two elements.
* `assertEqual(actual, expected)`: Checks if an outcome is what was expected.
* `eqArrays(array1, array2)`: Checks if two arrays are equal.
* `assertArraysEqual(actual, expected)`: Checks if a resulting array is what was expected.
* `eqObjects(object1, object2)`: Checks if two objects are equal.
* `assertObjectsEqual(actual, expected)`: Checks if a resulting object is what was expected.
* `countLetters(string)`: Returns an object with the count of each letter in the string.
* `countOnly(array, object)`: Returns an object with the count of each item from your input object. Items will only be counted if they are 'true' in the input object;
* `findKey(object, callback)`: Scans the object and returns the first key for which the callback returns a truthy value.
* `findKeyByValue(object, value)`: Returns the first key that contains the given value.
* `flatten(array)`: Returns a flattened version of the array (removes 1 level of nested arrays).
* `letterPositions(string)`: Retuns an object of the indices in a string where each character is found.
* `map(array, callback)`: Returns an array modified by the callback function, where the callback function is called on each element in the input array.
* `takeUntil(array, callback)`: Runs a callback function on each element of the input array until a truthy value is met.
* `without(array1, array2)`: Removes the items in array2 from array1 and returns the modified array.