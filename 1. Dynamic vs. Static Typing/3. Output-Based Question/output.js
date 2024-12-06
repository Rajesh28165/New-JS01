function calculateSum(input) {
    const num = input.map(item => Number(item))
    return num.reduce((sum,n)=>sum+n,0);
}

const input = ["10", 20, "30"]
console.log(calculateSum(input))