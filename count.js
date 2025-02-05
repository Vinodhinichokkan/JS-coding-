// count the occurences of each character in a string

function countCharacterOccurences(str){
    const Counts = {};
    for(let char of str){
        if(Counts[char]){
            Counts[char]++;
        }else{
            Counts[char]=1;
        }
    }
    return Counts;
}

//const inputString = 'google'   //{ g: 2, o: 2, l: 1, e: 1 }

const inputString = 'HELLO WORLD' // { H: 1, E: 1, L: 3, O: 2, ' ': 1, W: 1, R: 1, D: 1 }

const CharacterCounts = countCharacterOccurences(inputString);

console.log(CharacterCounts)


