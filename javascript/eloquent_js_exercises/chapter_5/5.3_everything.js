/* 
 * Everything
 Analogous to the some method, arrays also have an every method. This one returns true when the given function returns true for every element in the array. 
 In a way, some is a version of the || operator that acts on arrays, and every is like the && operator.
Implement every as a function that takes an array and a predicate function as parameters. 
Write two versions, one using a loop and one using the some method.
 * 
 */ 

function every(array, test) {
  if(!array.length) return true;
  else if(array.length -1 === 0) return test(array[array.length - 1]);
   else {
     let nextArray = [...array];
     nextArray.pop();
     return test(array[array.length - 1]) && every(nextArray, test) 
   }
}

console.log(every([1, 3, 5], n => n < 10));
// → true
console.log(every([2, 4, 16], n => n < 10));
// → false
console.log(every([], n => n < 10));
// → true


/* 
 * Authors Solution
 function every(array, predicate) {
  for (let element of array) {
    if (!predicate(element)) return false;
  }
  return true;
}

function every2(array, predicate) {
  return !array.some(element => !predicate(element));
}

console.log(every([1, 3, 5], n => n < 10));
// → true
console.log(every([2, 4, 16], n => n < 10));
// → false
console.log(every([], n => n < 10));
// → true 
 * 
 */