function storeCatalogue(data){

let obj = {};

for(let line of data){
    let [product,price] = line.split(' : ');
    price = Number(price);
    obj[product] = price;
}

let sorted = Object.entries(obj).sort((a,b) => a[0].localeCompare(b[0]));
let alpha = "";
for(let [product, price] of sorted){
    if(alpha != product[0]){
        console.log(product[0]);
        alpha = product[0];
    }
    console.log(` ${product}: ${price}`);
}


    

}
storeCatalogue(['Appricot : 20.4',
'Fridge : 1500',
'TV : 1499',
'Deodorant : 10',
'Boiler : 300',
'Apple : 1.25',
'Anti-Bug Spray : 15',
'T-Shirt : 10']
);