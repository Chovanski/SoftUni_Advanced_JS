function townsToJSON(data){

    let first = data.shift();
    let obj = {};
    let arr = [];

    for(let line of data){
        let [townF,latitude,longitudeF] = line.split(' | ');
        townF = townF.split('| ');
        let town = townF[1];
        longitudeF = longitudeF.split(' |');
        latitude = Number(latitude).toFixed(2);
        Number.parseFloat(Number(latitude).toFixed(2));
        let longitude = Number(longitudeF[0]).toFixed(2);
        Number.parseFloat(longitude);
        obj = {
            Town: town,
            Latitude: Number(latitude),
            Longitude: Number(longitude),
        };
        arr.push(obj);
        
    }
    console.log(JSON.stringify(arr));
}
townsToJSON(['| Town | Latitude | Longitude |',
'| Sofia | 42.696552 | 23.32601 |',
'| Beijing | 39.913818 | 116.363625 |']
)