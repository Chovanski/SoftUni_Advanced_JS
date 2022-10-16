function solve(arr,step){

    // let res = [];
    // for(let i = 0; i < arr.length; i+=step){
    //     res.push(arr[i]);
    // }
    // return res;
   return ( arr.filter((element, i) => {
        if(i % step === 0){
            return element;
        }
    }))
    
}
solve(['5', 
'20', 
'31', 
'4', 
'20'], 
2
);