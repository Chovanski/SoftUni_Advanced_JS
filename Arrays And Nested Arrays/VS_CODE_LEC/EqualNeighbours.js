function equalNeighbours(arr){


    let count = 0;
    arr.forEach(element => {
        element.reduce((a,b)=>{
            if(a === b){
                count += 1;
            }
            return b;
        })
    });

    for(let i = 0; i < arr.length - 1; i++){
        arr[i].forEach((_,j) =>{
            if(arr[i][j] === arr[i + 1][j]){
                count += 1;
            }
        })
    }
    console.log(count);
}
equalNeighbours([['2', '3', '4', '7', '0'],
['4', '0', '5', '3', '4'],
['2', '3', '5', '4', '2'],
['9', '8', '7', '5', '4']]
)