function rotateArray(arr,k){
    k = k% arr.length;  //2 % 5 = 2

    //reverse the entire array
    //start = 0 end = 4
    //[1,2,3,4,5] = [5,4,3,2,1]

    reverse (arr, 0, arr.length-1);

    //reverse the first elements
    //k-1 = 2-1 = 1
    //start = 0 end = 1
    //[5,4,3,2,1] = [4,5,3,2,1]

    reverse(arr, 0, k-1)

    //reverse the remaining elements
    //start = 2 end = 4
    //[4,5,3,2,1] = [4,5,1,2,3]

    reverse(arr, k, arr.length-1)

    return arr;
}
function reverse (arr, start, end){
    while (start < end){
        // swap elements at the start and end

        [arr[start],arr[end]] = [arr[end],arr[start]];

        start++;
        end--;
    }
} 
console.log(rotateArray([1,2,3,4,5],3));  //[3,4,5,1,2]
