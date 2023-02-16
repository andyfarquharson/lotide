# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @username/lotide`

**Require it:**

`const _ = require('@andyfarquharson/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertEqual(actual, expected)`: Takes two parameters and compares them.
* `assertObjectsEqual(actual, expected)`: Takes two objects and compares them.
* `countLetters(sentence))`: Counts how many letters are in a string. 
* `countOnly(allItems, itemsToCount)`: Counts a specific item in a list.
* `findKey(object, callback)`: Uses a callback fucntion to locate specific key in an object.
* `eqObjects(object1, object2)`: Compares the values of elements in two objects.
* `findKeyByValue(object, value)`: Locates a key in an object by its value.
* `head(input)`: Returns the first element in an array.
* `letterPositions(sentence)`: Returns the value of letters in a string.
* `map(array, callback)`: Uses a callback function to create an array with values of an array.
* `middle(array)`: Returns the middle elements of an array
* `tail(input)`: Returns all but the first element of an array.
* `without(array, remove)`: Returns the initial array with one of the elements removed.
