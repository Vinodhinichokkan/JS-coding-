const originalString = 'HELLO';

const reversedString = reverseString(originalString);
console.log(reversedString);

function reverseString(str){
    let reversed = '';
    for(let i=str.length-1; i>=0; i--){
        reversed += str[i];
    }
    return reversed          //OLLEH

}