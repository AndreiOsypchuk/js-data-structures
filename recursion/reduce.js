const reduce = (arr, i = 0) => {
  if (i < arr.length) return arr[i] + reduce(arr, i+1);
  return 0;
};

console.log(reduce([1, 2, 3, 23, 43, 23, 23]));
console.log(reduce([1, 2, 3]));
