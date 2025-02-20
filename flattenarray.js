const nestedArray = [1,[2,[3,4],5],6,[7,[8,9]]];


function flattenArray(arr){
    let flatArr = [];

    arr.forEach(item => {
        if (Array.isArray(item)){
            flatArr = flatArr.concat(flattenArray(item))
        }else{
            flatArr.push(item);
        }
    });
    return flatArr;
}

console.log(flattenArray(nestedArray))

//[1,2,3,4,5,6,7,8,9]


