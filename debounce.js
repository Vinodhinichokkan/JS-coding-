function debounce(func,delay){
    let timeoutId;

    return function(...args){
        if(timeoutId) clearTimeout(timeoutId);

        timeoutId = setTimeout(()=>{
            func.apply(this,args)
        },delay);
    }
};

function search(query){
    console.log("searching for:",query);
}

const debounceSearch = debounce(search,2000);

debounceSearch("apple");
debounceSearch("apple pie");
debounceSearch("apple pie recipe");  //searching for: apple pie recipe