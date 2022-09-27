function wordUppercase(input){

   return input.match(/\w+/g).join(', ').toUpperCase()
}
console.log(wordUppercase('Hi, how are you?'));