function timeToWalk(steps,footprint,speed){

      let distanceInMetres = steps * footprint;
      let speedMetersInSec = speed / 3.6;
      let time = distanceInMetres / speedMetersInSec;
      let rest = Math.floor(distanceInMetres / 500);

      let timeInMin = Math.floor(time / 60);
      let timeInSec = Number((time - (timeInMin * 60)).toFixed(0));
      let timeInHours = Math.floor(time / 3600);
      timeInMin += rest;
      timeInHours += Math.floor(timeInMin / 60);
      timeInMin = timeInMin % 60;

      let formattedHours = timeInHours < 10 ? `0${timeInHours}` : `${timeInHours}`;
      let formattedMin = timeInMin < 10 ? `0${timeInMin}` : `${timeInMin}`;
      let formattedSec = timeInSec < 10 ? `0${timeInSec}` : `${timeInSec}`;
      console.log(`${formattedHours}:${formattedMin}:${formattedSec}`);
      
}
timeToWalk(4000, 0.60, 5);
timeToWalk(2564, 0.70, 5.5)