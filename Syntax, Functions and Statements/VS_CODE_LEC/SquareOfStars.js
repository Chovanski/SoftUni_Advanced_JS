function solve(x=5){

    let row = '*'.repeat(x).trim();
    for(let i = 0; i < x; i++){
        console.log(row);
    }
}
solve();