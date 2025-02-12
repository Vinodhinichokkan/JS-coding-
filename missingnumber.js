 function findMissingNumber(arr){
    const n = arr.length + 1;
    const totalSum = (n*(n+1))/2;
    //sum of numbers in array
    const arraySum = arr.reduce((acc,num)=>acc + num,0);
    return totalSum - arraySum; //MissingNumber
 }
 console.log(findMissingNumber)