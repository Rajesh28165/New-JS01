// (==) do type coercion (it is only checking matching value not data type)
// (===) strictly check value and data type both

console.log(5=="5") // true
console.log(5==5) // true

console.log(5==="5") // false
console.log(5===5) // true