function stringConversion(input) {
    return input.map(String).join('');
}

const input=["Hello", 42, true]
console.log(stringConversion(input));