const averagePair = (arr, av) => {
  let left = 0;
  let right = arr.length-1;
  while(left < right) {
    let cav = (arr[left] + arr[right]) / 2;
    if(cav === av) return true;
    if(cav < av) left++;
    else right--;
  }
  return false;
}

console.log(averagePair([1,2,3], 2.5));
console.log(averagePair([1,3,3,5,6,7,10,12,19],8));
console.log(averagePair([], 4));
console.log(averagePair([1,2,3], 12));
