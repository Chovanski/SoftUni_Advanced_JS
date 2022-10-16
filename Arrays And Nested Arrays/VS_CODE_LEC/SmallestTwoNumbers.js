function smallestTwoNumbers(input){

    console.log(input.sort((x,y) => x - y)
                    .slice(0,2)
                   .join(' '));
}
smallestTwoNumbers([30, 15, 50, 5]);