/* 
 *Reversing an array
 write two functions, reverseArray and reverseArrayInPlace. The first, reverseArray, takes an array as argument and produces a new array that has the same elements in the inverse order. 
 The second, reverseArrayInPlace, does what the reverse method does: it modifies the array given as argument by reversing its elements. Neither may use the standard reverse method.
 */ 
 
 function reverseArray(arr) {
   const reversed = [];
   for(let id=arr.length - 1; id >= 0; id--){
     reversed.push(arr[id]);
   }
   return (reversed);
 }
 
 
console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];


function reverseArrayInPlace(arr) {
  let arrLen = arr.length - 1;
  let halfArrLen = Math.floor(arrLen/2);
  
  let swap = (index1, index2) => {
    let arrIndex1Value = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = arrIndex1Value;
  }
  
  for(let index1 = 0; index1 <= halfArrLen; index1++) {
    swap(index1, arrLen--);
  }
  
  return arr;
}

reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]


/* 
 * Authors Solution
 * function reverseArray(array) {
  let output = [];
  for (let i = array.length - 1; i >= 0; i--) {
    output.push(array[i]);
  }
  return output;
}

function reverseArrayInPlace(array) {
  for (let i = 0; i < Math.floor(array.length / 2); i++) {
    let old = array[i];
    array[i] = array[array.length - 1 - i];
    array[array.length - 1 - i] = old;
  }
  return array;
}
 *
 */
