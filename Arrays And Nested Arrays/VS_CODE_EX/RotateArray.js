function rotateArray(arr,el){

    for(let i = 0; i<el; i++){

        arr.unshift(arr.pop());
    }
    console.log(arr.join(' '));
}
rotateArray(['1', 
'2', 
'3', 
'4'], 
2
);