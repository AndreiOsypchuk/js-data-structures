const some = (arr, cb) => {
  if(arr.length === 0) return false;
  if(cb(arr[0])) return true;
  return some(arr.slice(1), cb);
}

console.log(some([1, 2, 3, 4], (i) => i % 2 !== 0));
console.log(some([4,6,8,9], (i) => i % 2 !== 0));
console.log(some([4,6,8], (i) => i % 2 !== 0));
console.log(some([4,8,6], (i) => i > 10));
