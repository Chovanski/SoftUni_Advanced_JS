function ProcessOddPositions(input){

    return input
           .filter((n,i) => i % 2 !== 0)
           .map(n => n * 2)
           .reverse()
           .join(' ');
}
let result = ProcessOddPositions([10,15,20,25]);
console.log(result);