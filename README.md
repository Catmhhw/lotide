# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @catmhhw/lotide`

**Require it:**

`const _ = require('@catmhhw/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `function1(head)`: Retrieves the first element of an array.
* `function2(tail)`: Retrieves every element except the head of the array.
* `function3(middle)`: Retrieves the middle-most element(s) of the array.
* `function4(takeUntil)`: Collects items from a provided array until the callback provided returns a truthy value.
* `function5(without)`: Returns a subset of a given array while removing unwanted elements.
* `function6(map)`: Returns a new array from the results of the callback function.
* `function7(letterPositions)`: Returns all indices (zero-based positions) in the string where each character is found
* `function8(flatten)`: Rakes in an array containing elements including nested arrays of elements, and returns it as a single array (flattened version).
* `function9(findKey)`: Rakes in an object and callback. Returns the first key when the callback returns a truthy value. Returns undefined if no key found.
* `function10(findKeyByValue)`: Rakes in an object and a value. Returns the first key that contains the given value. Returns undefined if no key with given value found.
* `function11(eqObjects)`: Rakes in two objects to compare and return either true or false (based on perfect match).
* `function12(countOnly)`: Rakes in a collection of items and return counts for a specific subset of those items.
* `function13(countLetters)`: Retrieves the count of each letter in a sentence