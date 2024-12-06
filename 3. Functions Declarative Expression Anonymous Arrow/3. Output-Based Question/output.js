function HOF(arr,cond) {
    return arr.map(cond)
}

const input = [1,2,3];

const output = HOF(input,x=>x*2);

console.log(output)