const arrInRange = (start, end, arr = []) => {
  if(start >= end-1) return arr;
  arr.push(start +1);
  return arrInRange(start+1, end, arr);
}

console.log(arrInRange(2, 9));
console.log(arrInRange(0, 9));
console.log(arrInRange(1, 5));
console.log(arrInRange(10, 21));
console.log(arrInRange(14, 9));
console.log(arrInRange(-14, 9));
