// // there are import theree way
// //[1]when export is default then any name used
// import add from "./math.js";
// console.log(add(1, 2));

// //[2] when export is named then same name used compulsory and there is need to {} curly braces
// import { add, mul } from "./math.js";
// console.log(add(2, 1));
// console.log(mul(2, 3));

// //[3] aliasing import
// import * as math from "./math.js";
// console.log(math.add(1, 2));
// console.log(math.sub(2, 1));
// console.log(math.mul(3, 1));
