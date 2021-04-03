const sameFreq = (num1, num2) => {
  const s1 = num1.toString();
  const s2 = num2.toString();
  if(s1.length !== s2.length) return false;
  const freq = {};
  for(let i = s1.length; i--;) {
    if(freq[s1[i]]) freq[s1[i]]++;
    else freq[s1[i]] = 1;
  }
console.log(freq);
  for(let i = s2.length; i--;) {
    if(freq[s2[i]]) freq[s2[i]]--;
    else return false;
  }

  return true;
}

console.log(sameFreq(123, 321));
console.log(sameFreq(908,890));
console.log(sameFreq(1123, 123));
