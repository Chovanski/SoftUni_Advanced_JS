function SumFirstLast(arr){

    let first = arr.shift();
    let last = arr.pop();

    let result =Number(first) + Number(last);
    console.log(result);

}
SumFirstLast(['20', '30', '40']);