// Given Problem
// function calculateArea(length, width) {
//     return length * width;
// }
// console.log(calculateArea(10, "5")); // Expected: Error-free calculation


// Corrected Code:
function calculateArea(length, width) {
    return length*Number(width);
}
console.log(calculateArea(10,'5'))