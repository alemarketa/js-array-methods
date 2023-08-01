// Array Methods:
// Run ctrl+alt+N

/** at()
 * syntax: arr1.at(index)
 * takes an integer value and returns the item at that index
 * allows positive and negative integers
 * negative integers count back from the last item in the array.
 */

const musicians = ["George Ezra", "Jake Bugg", "Robbie Williams"];
console.log("last", musicians.at(-1));
console.log("middle", musicians.at(1));

/** concat()
 * syntax: arr1.concat(arr2, arr3, ... arrX)
 * ### concatenates (joins) two or more arrays
 * ### returns a new array, containing the joined arrays
 * ### does not change the existing arrays.
 */

const arr1 = ["Bulbasaur", "Ivysaur"];
const arr2 = ["Venosaur", "Charmander"];
const arr3 = ["Charmeleon", "Charizard"];

const arr4 = arr1.concat(arr2, arr3);
console.log("arr4", arr4);

/** constructor
 * returns the function that created the Array prototype
 * returns: function Array() { [native code] }
 */

const sampleArray = ["hi", "I", "am", "Marketa"];
console.log(sampleArray.constructor);

/** copyWithin()
 *  syntax: arr.copyWithin(target[Rq], start[Op], end[Op])
 *  ### copies array elements to another position in the array
 *  ### overwrites the existing values
 *  ### does not add items to the array.
 */

const fruits = [
  "Mangosteen",
  "Yellow Kiwi",
  "Snake Fruit",
  "Red Banana",
  "Apple",
  "Pear",
];
fruits.copyWithin(1, 0, 3); // 1 - index to copy elements to; 0 - start index of fruit to copy, default is zero; 2 - end index until to copy, default array length
console.log("fruits", fruits);

/** entries()
 * returns an Array Iterator object with key/value pairs.
 * method does not change the original array.
 */

const pragueDistricts = [null, "Stare mesto", "Vinohrady", "Zizkov", "Krc"];
const iterator = pragueDistricts.entries();

for (let pD of iterator) {
  console.log("District", pD);
}

/** every()
 * syntax: arr.every(f)
 * tests whether all elements in the array pass test
 * returns a Boolean value.
 */

const isAdult = (value) => value >= 18;
const ages = [12, 48, 45, 18, 19];
const agesOk = [21, 18, 56, 90, 74];

console.log("all Adult", ages.every(isAdult));
console.log("all Adult", agesOk.every(isAdult));

/** fill()
 * changes all elements in an array to a static value
 * from a start index (default 0) to an end index (default array.length)
 * returns the modified array.
 */

const bestSongs = [
  "Highway to Hell",
  "Living after midnight",
  "Poker face",
  "Young turks",
];
console.log(
  "corrected best songs",
  bestSongs.fill("Another brick in the wall", 2, 3)
);

/** filter()
 * syntax: arr.filter( e => f)
 * method creates a shallow copy (changing copy = changing source) of a given array
 * filtered down to just the elements(e) from the given array that pass the test
 * implemented by the provided function(f).
 */

let words = ["slovo", "palabra", "word", "parole"];
console.log(
  "more than 4 letters:",
  words.filter((word) => word.length > 4)
);

/** find()
 * syntax: arr.find(e => f)
 * returns the first element in the array that satisfies the testing function.
 * If no values satisfy the testing function, undefined is returned.
 */

let arr5 = [12, 45, 78, 11];
console.log(
  "first in arr bigger than 10:",
  arr5.find((n) => n > 10)
);
console.log(
  "first in arr smaller than 10:",
  arr5.find((n) => n < 10)
);

/** findIndex()
 * syntax: arr.findIndex(e => f)
 * returns the index of the first element in an array that satisfies testing function.
 * If no elements satisfy the testing function, -1 is returned.
 * It is case insensitive
 */

let arr6 = [12, 45, 78, 11];
console.log(
  "firstIndex in arr bigger than 10:",
  arr6.findIndex((n) => n > 10)
);
console.log(
  "firstIndex in arr smaller than 10:",
  arr6.findIndex((n) => n < 10)
);

let fields = ["name", "email", "scorePercent", "completedDate"];
let parts = ["scorePercent", "asc"];
console.log("test", !fields.findIndex(parts[0]));

if (fields.length > 0 && !fields.findIndex(parts[0])) {
  console.log("test", 1);
} else {
  console.log("test", 2);
}

/** findLast()
 * syntax: arr.findLast(e => f)
 * iterates the array in reverse order
 * returns the value of the first element that satisfies the testing function
 * if no elements satisfy the testing function, undefined is returned.
 */

let arrayOfNumbers = [5, 12, 50, 130, 44];
let found = arrayOfNumbers.findLast((element) => element > 45);

console.log("found element: ", found);

/** findLastIndex()
 * syntax: arr.findLastIndex(e => f)
 * iterates the array in reverse order
 * returns the index of the first element that satisfies the testing function
 * if no elements satisfy the testing function, -1 is returned.
 */

const arrayOfNumbers2 = [5, 12, 50, 130, 44];

const isLargeNumber = (element) => element > 45;

console.log(
  "index of found element: ",
  arrayOfNumbers2.findLastIndex(isLargeNumber)
);

/** flat()
 * syntax: arr.flat() / arr.flat(depth)
 * creates a new array with all sub-array elements concatenated into it recursively
 * up to the specified depth.
 */

const arrNested = [0, 1, 2, [3, 4]];
const arrDeepNested = [0, 1, 2, [[[3, 4]]]];

// Expected output: Array [0, 1, 2, 3, 4]
console.log("flattened array ", arrNested.flat());
// Expected output: Array [0, 1, 2, Array [3, 4]]
console.log("flattened deep array ", arrDeepNested.flat(2));

// @todo:  flatMap(), forEach(), from()
// I am testing git rebase 