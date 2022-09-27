function roadRadar(speed, area){

    let speedLimit = {
        'motorway': 130,
        'interstate': 90,
        'city': 50,
        'residential': 20
    }
    let status;
    let speeding = 0;

    if(speed <= speedLimit[area]){
        console.log(`Driving ${speed} km/h in a ${speedLimit[area]} zone`);
    }
    if(speed > speedLimit[area]){
        speeding = speed - speedLimit[area];
        
    }

    if(speeding <= 20){
        status = 'speeding';
    }else if(speeding <= 40){
        status = 'excessive speeding';
    }else{
        status = 'reckless driving';
    }
    let difference = Number(speed - speedLimit[area]);


    if(difference > 0){
        console.log(`The speed is ${difference} km/h faster than the allowed speed of ${speedLimit[area]} - ${status}`);
    }
    


    
}
roadRadar(40, 'city');
roadRadar(21, 'residential');