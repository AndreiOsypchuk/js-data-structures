const recRange = (num) => {
  if(num === 0) return 0;
  return num + recRange(num-1);
}
console.log(recRange(3));
