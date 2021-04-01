const isAnagram = (str1, str2) => {
    // lets check first string and save all letter ocurrances in an object where a letter is a key, and frequency is a value
    const ocurrances = {};
    for(let i = str1.length; i--;) {
        if(ocurrances[str1[i]]) {
            ocurrances[str1[i]]++;
        } else {
            ocurrances[str1[i]] = 1;
        }
    }
    // loop over second string we are comparing with and check if every letter has an ocurrance in ocurrances object. If ocurrances of given letter is 0 - we have more of this letter in second string hence anagram is invalid, if there is no such letter in ocurrances anagram is also invalid
    for(let i = str2.length; i--;) {
        if(ocurrances[str2[i]]) {
            ocurrances[str2[i]]--;
        } else {
            return false;
        }
    }
    return true;
}

console.log(isAnagram('hello', 'olleh'));
console.log(isAnagram('hello', 'oleho'));
console.log(isAnagram('goda', 'odga'));
console.log(isAnagram('hui', 'ihg'));
