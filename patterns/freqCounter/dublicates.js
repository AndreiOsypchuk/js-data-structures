const duplicates = (...args) => {
  let freq = {};
  for(let i = args.length; i--;) {
    let key = args[i];
    if(!freq[key]) freq[key] = 1;
    else return true;
  }
  return false;
}

console.log(duplicates(1,2,2,3));
console.log(duplicates('a', 'b', 'c'));

  
