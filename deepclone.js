function deepClone(obj){
    if(obj == null||typeof obj !== 'object'){
        return obj;
    }
    //Handle Array Case

    if(Array.isArray(obj)){
        const arrCopy = [];
        for (let i=0; i<obj.length; i++){
            arrCopy[i] = deepClone(obj[i]);
        }
        return arrCopy;
    }

    //Handle object case
    const objCopy = {};
    for (const key in obj){
        if (obj.hasOwnProperty(key)){
            obj[key] = deepClone(objCopy[key]);
        }
    }
    return objCopy;
}

const obj = {
    name :"Abi",
    age : 25,
    address :{
        city : "Bangalore",
        zip : 560037
    },
    hobbies:["reading","cooking"],
    greet : function(){
        console.log("Hello!");
    }
};

const clonedObj = deepClone(obj);
console.log(clonedObj)

obj.address.city = "Los Angeles";
obj.hobbies.push('Swimming');

console.log(obj.address.city);
console.log(clonedObj.address.city);

console.log(obj.hobbies);
console.log(clonedObj.hobbies);