/*
 * 
Write a function countBs that takes a string as its only argument and returns a number that indicates how many uppercase “B” characters there are in the string.

Next, write a function called countChar that behaves like countBs, except it takes a second argument that indicates the character that is to be counted (rather than counting only uppercase “B” characters). Rewrite countBs to make use of this new function.
 */
 
 
 function countChar(str, char) {
   const strLen = str.length;
   let counter = 0;
   
   for(let id=0; id <strLen; id++) {
     if (str[id] === char) counter++;
   }
   return counter;
 }
 
 function countBs(str) {
   const strLen = str.length;
   let counter = 0;
   
   for(let id=0; id <strLen; id++) {
     if (str[id] === "B") counter++;
   }
   return counter;
 }
 
console.log(countBs("BBC"));
// → 2
console.log(countChar("kakkerlak", "k"));
// → 4

/* 
 * Authors Solutions
function countChar(string, ch) {
  let counted = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i] == ch) {
      counted += 1;
    }
  }
  return counted;
}

function countBs(string) {
  return countChar(string, "B");
}

console.log(countBs("BBC"));
// → 2
console.log(countChar("kakkerlak", "k"));
// → 4
*/