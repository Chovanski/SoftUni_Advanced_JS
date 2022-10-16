let name = 'Ivan';
let age = 5;

let myObj = {name,
    age,
    result: [1,2,3,4],
    cat: {
        name: 'Sharo',
        age: 7
    }};

let myObjJSON = JSON.stringify(myObj,null,2);
console.log(myObjJSON);

let parsedObj = JSON.parse(myObjJSON);

console.log(parsedObj.age);