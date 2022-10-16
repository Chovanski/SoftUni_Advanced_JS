function solve(arr){

    let res = [];
    let biggestOne = arr.shift();
    res.push(biggestOne);

    for(let num of arr){
        if(num >= biggestOne){
            res.push(num);
            biggestOne = num;
        }
    }
    return res;
    console.log(res);
}
solve([1, 
    3, 
    8, 
    4, 
    10, 
    12, 
    3, 
    2, 
    24]
    );