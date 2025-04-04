function addBinary(a,b){
    let carry = 0;
    let result = '';
    let maxLength = Math.max(a.length,b.length);

    a = a.padStart(maxLength,'0');
    b = b.padStart(maxLength, '0');

    //Bitwise operator

    for(let i = maxLength -1; i>=0; i--){
        //a[0]='1' b[0]='1'
        // 1 + 1 + carry(0) = 2inTo 
        //sum = 2
        let sum = parseInt(a[i]) + parseInt(b[i]) + carry;

        //2/2 = 0 ,floor = 1

        carry = Math.floor(sum/2)

        //sum % 2 = 1
        //'111' + '0' = '0111'

        result = (sum % 2) + result;

        if(carry){

            //'1' + '0111' = '1011'
            result = carry + result;
        }
    }

    return result;
}
console.log(addBinary('1010','1101')); //10111

console.log(addBinary('1010','1101')); //10111

console.log(addBinary('1010','11101')); //1010111

console.log(addBinary('1011','10100'));  //11111


