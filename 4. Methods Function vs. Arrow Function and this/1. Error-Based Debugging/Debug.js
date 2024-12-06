// Given Code:
// const obj = {
//     name: "JavaScript",
//     getName: () => this.name,
// };
// console.log(obj.getName()); // Expected Output: "JavaScript"


// Corrected Code:
const obj = {
    name: "JavaScript",
    getName: function() {return this.name},
};
console.log(obj.getName()); // Expected Output: "JavaScript"

