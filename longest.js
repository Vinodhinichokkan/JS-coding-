function findLongestWord(sentence){

    //split the sentence using space as delimeter
    const words = sentence.split(' ');

    let LongestWord = '';

    for (const word of words){
        if(word.length > LongestWord.length){
            LongestWord = word;
         }
    }
    return LongestWord;
}

const sentence = 'Subscribe to Abi for more updates'
console.log(findLongestWord(sentence));
