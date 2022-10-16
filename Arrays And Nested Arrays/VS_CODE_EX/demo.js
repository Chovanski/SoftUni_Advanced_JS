function solve(arrOfCommands){

    let res = [];
    let num = 1;
arrOfCommands.forEach(command => {
    command === 'add' ? res.push(num) : res.pop();
    num++;
});
return res.length === 0 ? 'Empty' : res.join('\n');

}
solve();