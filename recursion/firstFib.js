const firstFib = (n) => {
  if(n === 1) return [0, 1];
  let sequence = firstFib(n-1);
  sequence.push(sequence[sequence.length-1] + sequence[sequence.length-2]);
  return sequence;
}

console.log(firstFib(8));
console.log(firstFib(10));
