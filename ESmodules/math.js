// //there are theree way to exports module using es module
// //[1] export default
// export default add;
// const add = (a, b) => {
//   return a + b;
// };
// export default add;

// //[2] named export
// // there are same name as it's function compulsory
// export const add = (a, b) => {
//   return a + b;
// };

// export const mul = (a, b) => {
//   return a * b;
// };

// //[3] multiple like alising modules
const add = (a, b) => {
  return a + b;
};
const sub = (a, b) => {
  return a - b;
};
const mul = (a, b) => {
  return a * b;
};

export { add, sub, mul };
