// Require file system access
fs = require('fs');

// Read file buffer 
imgReadBuffer = fs.readFileSync('test-pattern.jpg');


// Encode image buffer to hex
imgHexEncode = imgReadBuffer.toString('hex');

// Output encoded data to console
//console.log(imgHexEncode);

console.log(imgReadBuffer)