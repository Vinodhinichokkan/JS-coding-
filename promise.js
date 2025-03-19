//----------------promise--------------------------

const data = {name: "abi",age: 30};

function fetchData(){
    return new Promise((resolve,reject) =>{
        setTimeout(() =>{
            resolve(data);
        },2000);
    })
}

fetchData().then(
    data => {
        console.log("Data: ",data);
    }).catch(err =>{
        console.log("Error: ",err);
    })
