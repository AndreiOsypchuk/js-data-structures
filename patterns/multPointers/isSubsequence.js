const isSubs = (first, second) => {
  let firstPtr = 0;
  let secondPtr = 0;
  while(firstPtr !== first.length && secondPtr < second.length) {
    if(first[firstPtr] === second[secondPtr]) {
      firstPtr++;
    }
    secondPtr++;
  }

  return firstPtr === first.length;
}

console.log(isSubs('andrei', 'andaasdlkrei'));
console.log(isSubs('hui', 'hhhasdfasdfasdfaiu'));

