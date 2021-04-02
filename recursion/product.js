const productOfArray = (arr, i = 0) => {
  if(i < arr.length) {
    return arr[i] * productOfArray(arr, ++i);
  }
  return 1;
}

console.log(productOfArray([1, 2, 3]));
console.log(productOfArray([1, 2, 3, 10]));
