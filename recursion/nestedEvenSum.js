const nestedEvenSum = (obj, sum = 0) => {
  for(let key in obj) {
    if(typeof obj[key] === 'object') {
      sum += nestedEvenSum(obj[key]);
    } else if(typeof obj[key] === 'number') {
      sum += obj[key] % 2 === 0 ? obj[key] : 0;
    }
  }
  return sum;
}


const obj1 = {
  thing: 'hello',
  a: {
    b: {
      c: {
        d: {
          e: 3,
          f: {
            g: {
              h: 4
            }
          }
        }
      }
    }
  },
  b: 3,
  c: {
    a: 'thing',
    b: 10
  }
};

console.log(nestedEvenSum(obj1));
