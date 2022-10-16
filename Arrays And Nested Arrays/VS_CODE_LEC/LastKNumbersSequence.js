function LastKNumbersSequence(n,k){

    let arr = [1];
    for(let i = 1; i < n; i++){
        arr.push(arr.slice(-k).reduce((a,b) => a + b, 0));
    }

    return arr;
}
let result = LastKNumbersSequence(6, 3);
console.log(result);