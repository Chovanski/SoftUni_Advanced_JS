function solve(argument){

    let final;
    let result = typeof(argument);

    if(result === "number"){
        final = Math.PI * Math.pow(argument,2);
        console.log(final.toFixed(2));
    }else{
        console.log(`We can not calculate the circle area, because we receieve a ${result}.`);
    }
}
solve(5);