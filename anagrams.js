function areAnagrams(str1, str2) {
    // Remove non-alphanumeric characters and convert to lowercase
    str1 = str1.replace(/\s+/g, '').toLowerCase();
    str2 = str2.replace(/\s+/g, '').toLowerCase();

    // If lengths are different, they can't be anagrams
    if (str1.length !== str2.length) {
        return false;
    }

    // Sort the characters and compare
    return str1.split('').sort().join('') === str2.split('').sort().join('');
}

// Example usage
console.log(areAnagrams("listen", "silent")); // true
console.log(areAnagrams("hello", "world")); // false 