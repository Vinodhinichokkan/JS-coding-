//------------convert Roman to INT-------------

function romanToInt(roman){
    const romanMap = {
        'I' : 1,
        'V' : 5,
        'x' : 10,
        'L' : 50,
        'C' : 100,
        'D' : 500,
        'M' : 1000
    }
    let total = 0; 
    let prevalue = 0;
    for (let i = roman.length - 1; i>=0; i--){
        const currentvalue = romanMap[roman[i]];
        if(currentvalue < prevalue){
            total -=currentvalue;
        }else{
            total += currentvalue
        }
        prevalue = currentvalue
    }
    return total;
}

console.log(romanToInt('LVIII')); // 58
console.log(romanToInt('MCMXCIV'));  //1994
