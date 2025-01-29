function isPalindrome(str){
    function reverseString(str){
        let reversed = '';

        for(let i=str.length-1; i>=0; i--){
            reversed += str[i]
        }
        return reversed;
    }
    const newStr = str.toLowerCase();
    return newStr === reverseString(newStr)
}

console.log(isPalindrome('level')) //True
console.log(isPalindrome('hello'))  //False
