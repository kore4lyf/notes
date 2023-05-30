/*
 * Chessboard 
 * Write a program that creates a string that 
 * represents an 8×8 grid, using newline characters 
 * to separate lines. At each position of the grid 
 * there is either a space or a "#" character. 
 * The characters should form a chessboard. Passing 
 * this string to console.log should show something 
 * like this:
 *  # # # #
 * # # # #
 *  # # # #
 * # # # #
 *  # # # #
 * # # # #
 *  # # # #
 * # # # #
 * When you have a program that generates this pattern,
 * define a binding size = 8 and change the program so
 * that it works for any size, outputting a grid of 
 * the given width and height.
 */
 

// Creates a chessboard of height (height represent the total
// height of the chessboard), width
// (width represent the total number of symbols on a line) and
// uses white space and a symbol (s) (symbol represent spots 
// on the chessboard.
function createChessboard (width = 4, height = 8, symbol = "#") {
  let chessMap = "";
  let widthStep = 1;
  let heightStep = 1;
  
  while (true) {
    if (widthStep > width) {
      heightStep++;
      if(heightStep > height) {
        break;
      }
      widthStep = 1;
      chessMap += "\n";
    }
    chessMap += heightStep % 2 === 0 ? "# " : " #";!
    widthStep++;
    }
    return chessMap;
}

console.log(createChessboard(4, 8));


/* 
 * Author's Solution
let size = 8;

let board = "";

for (let y = 0; y < size; y++) {
  for (let x = 0; x < size; x++) {
    if ((x + y) % 2 == 0) {
      board += " ";
    } else {
      board += "#";
    }
  }
  board += "\n";
}

console.log(board);
*/