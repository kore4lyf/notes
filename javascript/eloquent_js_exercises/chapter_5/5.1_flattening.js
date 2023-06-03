/* 
 * Flattening
 Use the reduce method in combination with the concat method to “flatten” an array of arrays into a single array that has all the elements of the original arrays.
 *
 */
 
function flatten(arrayOfArray) {
  return arrayOfArray.reduce((flat, array) => flat.concat(array));
}
 
let arrays = [[1, 2, 3], [4, 5], [6]];
// → [1, 2, 3, 4, 5, 6]
console.log(flatten(arrays))

/* 
 * Authors Solution
 let arrays = [[1, 2, 3], [4, 5], [6]];
 console.log(arrays.reduce((flat, current) => flat.concat(current), []));
 // → [1, 2, 3, 4, 5, 6]
 * 
 */