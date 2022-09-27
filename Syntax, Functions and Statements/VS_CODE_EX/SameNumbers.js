function SameNumbers(num){

    let NumAsString = num.toString();
    let firstDigit = NumAsString[0];
    
    let sum = 0;
    let isSame = true;
    for(let i = 0; i < NumAsString.length; i++){
        if(NumAsString[i] !== firstDigit){
            isSame = false;
        }
        sum += Number(NumAsString[i]);
    }

    console.log(isSame);
    console.log(sum);

}
SameNumbers(2222222);
SameNumbers(1234);