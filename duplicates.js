//Example 1 =>Using SET

function removeDuplicates(arr){
    return[...new Set(arr)];
}
const array = [1, 2, 3, 3, 4, 5, 5, 6, 8, 8, 8];
console.log(removeDuplicates(array));

//o/p---------->[1, 2, 3, 4, 5, 6, 8]

//Example 2 =>Using FILTER and INDEX OF

function removeDuplicates(arr){
    return arr.filter((val,index,self)=>self.indexOf (val)== index)
}
const num = [1, 2, 3, 3, 4, 5, 5, 6, 8, 8, 8];
console.log(removeDuplicates(num));

//o/p---------->[1, 2, 3, 4, 5, 6, 8]

//Example 3 =>Using REDUCE

function removeDuplicates(arr){
    return arr.reduce((unique,item) => {
        return unique.includes(item) ? unique : [...unique, item];
    }, [])
}
const value = [1, 2, 3, 3, 4, 5, 5, 6, 8, 8, 8];
console.log(removeDuplicates(value));

//o/p---------->[1, 2, 3, 4, 5, 6, 8]
