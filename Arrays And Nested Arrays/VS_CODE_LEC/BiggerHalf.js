function BiggerHalf(input){

    input.sort((a,b) => a-b);

   return input.slice(input.length/2);
}
let result = BiggerHalf([4, 7, 2, 5]);
console.log(result);