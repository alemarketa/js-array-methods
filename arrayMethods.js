// Array Methods:
// Run ctrl+alt+N

/** at()
 * syntax: arr1.at(index)
 * takes an integer value and returns the item at that index
 * allows positive and negative integers
 * negative integers count back from the last item in the array.
 */

const musicians = ["George Ezra", "Jake Bugg", "Robbie Williams"]
console.log('last', musicians.at(-1))
console.log('middle', musicians.at(1))


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

/** every()
 * syntax: arr.every(f)
 * tests whether all elements in the array pass test 
 * returns a Boolean value.
 */

const isAdult = (value) => value >= 18; 
const ages = [12,48,45,18,19]
const agesOk = [21,18,56,90,74]

console.log('all Adult', ages.every(isAdult))
console.log('all Adult', agesOk.every(isAdult))

/** fill() 
 * changes all elements in an array to a static value
 * from a start index (default 0) to an end index (default array.length)
 * returns the modified array.
*/

const bestSongs = ["Highway to Hell", "Living after midnight", "Poker face", "Young turks",]
console.log('corrected best songs', bestSongs.fill("Another brick in the wall", 2,3))

// @todo filter, find, findIndex