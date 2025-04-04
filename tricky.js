let result = 5 + "3"
console.log(result)

let one = 5 + + "3"
console.log(one)

let two = 5 - "3"
console.log(two)

let three = 5 - - "3"
console.log(three)

//-----------------------------------------

console.log([1,2,3]+[1,3,4])  // 1,2,31,3,4

//-----------------------------------------

function getAge(...args){
    console.log(typeof args)
}
getAge(21);  // object

//----------------------------------------

let x = 10;
{
    let x = 20;
}
console.log(x);

//---------------------------

var y = 10;
{
    var y = 20;
    console.log(x);
}

console.log(x);

//------------------------------

console.log(NaN == NaN)

//------------------------

console.log(y);

var y = "Hello";
console.log(y);  //Hello
//---------------

/*console.log(+ true)  true
console.log(!sai)  false*/


//------------------------

console.log([]+[]);  // ""
console.log([1]+[]);   //  1
console.log([1]+ "abc");   //1abc

//-----------------------------

const s = [1,2];
const v = "1,1";
console.log(x == y);  //false


