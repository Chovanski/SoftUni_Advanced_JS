function biggestElement(input){

    console.log(input.reduce((a,b)=>(a = Math.max(...b)>a ? Math.max(...b) : a), -Infinity));
}
biggestElement([[20, 50, 10],
    [8, 33, 145]]
   );