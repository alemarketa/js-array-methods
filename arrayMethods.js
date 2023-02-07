// Array Methods:
// Run ctrl+alt+N

/** @todo at() */

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

const sampleArray = ['hi', 'I', 'am', 'Marketa']
console.log(sampleArray.constructor)


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

const pragueDistricts = [null, 'Stare mesto', 'Vinohrady', 'Zizkov', 'Krc']
const iterator = pragueDistricts.entries()

for (let pD of iterator) {
  console.log('District', pD)
}

/** @todo every() */