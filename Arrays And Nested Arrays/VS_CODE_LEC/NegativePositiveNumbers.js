function NegativePositiveNumbers(arr){

    let result = [];

    for(let number of arr){
        if(number < 0){
            result.unshift(number);
        }else{
            result.push(number);
        }
    }

    for(let number of result){
        console.log(number);
    }

}
NegativePositiveNumbers([7, -2, 8, 9]);