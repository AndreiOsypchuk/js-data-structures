const isAnagram = (str1, str2) => {
  const freq = {};
  for(let i = str1.length; i--;) {
    if(freq[str1[i]]) {
      freq[str1[i]]++;
    } else {
      freq[str1[i]] = 1;
    }
  }

  for(let i = str2.length; i--;) {
    if(freq[str2[i]]) {
      freq[str2[i]]--;
    } else {
      return false;
    }
  }
  return true;
}

console.log(isAnagram('ana', 'aan'));
console.log(isAnagram('andrei', 'ierdan'))
console.log(isAnagram('thing', 'thingg'));
