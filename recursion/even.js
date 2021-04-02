const even = (num) => {
  if(num < 0) num = Math.abs(num);
  if(num === 1) return false;
  if(num === 0) return true;
  return even(num-2);
}

console.log(even(4));
console.log(even(3));
console.log(even(189));
console.log(even(1890));
