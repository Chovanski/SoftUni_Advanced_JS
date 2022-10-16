function carFactory(car){

    if(car.wheelsize % 2 == 0){
        car.wheelsize = car.wheelsize - 1;
    }

    let automobile = {
        model: car.model,
        engine:{
            power: car.power,
            volume: car.volume,
        },
        carriage:{
            type: car.carriage,
            color: car.color,
        },
        wheels:[
            car.wheelsize,
            car.wheelsize,
            car.wheelsize,
            car.wheelsize,
        ],
    };
    if(car.power <= 90){
        automobile.engine.power = 90;
        automobile.engine.volume = 1800;
    }else if(car.power > 90 && car.power <= 120){
        automobile.engine.power = 120;
        automobile.engine.volume = 2400;
    }else if(car.power > 120 && car.power <= 200){
        automobile.engine.power = 200;
        automobile.engine.volume = 3500;
    }
    return automobile;
}
carFactory({ model: 'VW Golf II',
power: 90,
color: 'blue',
carriage: 'hatchback',
wheelsize: 14 }
)