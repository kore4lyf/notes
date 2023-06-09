/*
 * Looping a triangle 
 * Write a loop that makes seven calls to 
 * console.log to output the following triangle:
 * #
 * ##
 * ###
 * ####
 * #####
 * ######
 * #######
 * It may be useful to know that you can find 
 * the length of a string by writing .length after it.
 * let abc = "abc";
 * console.log(abc.length);
 * // → 3
 */
 
const LEN = 6;
let hash = "#";
let index = 0;

while (index <= LEN) {
  console.log(hash);
  hash += '#';
  index++;
}


/* 
 * Solution from the Author
 * for (let line = "#"; line.length < 8; line += "#")
 * console.log(line);
 */
 