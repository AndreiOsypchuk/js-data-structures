const maxSubSum = (arr, window) => {
  if(window > arr.length) return null;
  let max = 0;
  for(let i = window; i--;) {
    max += arr[i];
  }

  let temp = max;
  for(let i = window; i < arr.length; i++) {
    temp = temp - arr[i - window] + arr[i];
    max = Math.max(max, temp);
  }
  return max;
}

console.log(maxSubSum([100,200,300,400], 2));
console.log(maxSubSum([1,2,3,4,5,6,7], 3));
console.log(maxSubSum([1,3,5,2,4,3,5,6,9,9,7,9],2));
