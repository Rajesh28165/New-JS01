// Given Code:
// function createIncrementers() {
//     let result = [];
//     for (var i = 0; i < 3; i++) {
//         result.push(() => i);
//     }
//     return result;
// }
// console.log(createIncrementers()[0]());

// Corrected Code:

function createIncrementers() {
    let result = [];
    for (let i = 0; i < 3; i++) {
        result.push(() => i);
    }
    return result;
}
console.log(createIncrementers()[0]()); // Expected Output: 0



