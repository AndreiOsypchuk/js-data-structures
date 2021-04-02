const util = require('util');
const stringifyNums = (obj) => {
  let res = {};
  for(let key in obj) {
    if(typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
      res[key] = stringifyNums(obj[key]);
    } else if(typeof obj[key] === 'number') {
      obj[key] = obj[key].toString();
    } else {
      res[key] = obj[key];
    }
  }
  return obj;
}

const obj1 = {
  thing: {
    a: {
      b: {
        c: 123,
        b: 'hello',
        d: ['asdf']
      }
    },
    b: 2,
    c: 'asdf'
  },
  a: 0
}

console.log(util.inspect(stringifyNums(obj1), true, null));
