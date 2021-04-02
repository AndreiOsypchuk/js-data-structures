const fibIndex = (num) => {
  if( num <= 2) return 1;
  return fibIndex(num-1) + fibIndex(num-2);
}

console.log(fibIndex(8));
