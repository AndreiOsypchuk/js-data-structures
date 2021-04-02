const collectStrings = (obj) => {
  let res = [];
  for(let key in obj) {
    if(typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
      res = res.concat(collectStrings(obj[key]));
    } else if(typeof obj[key] === 'string') {
      res.push(obj[key]);
    }
  }
  return res;
}

const obj1 = {
  name: 'andrei',
  email: 'andrei@gmail.com',
  things: {
    thing: 'asd',
    thinsg: 'hello',
    notstrig: 123
  }
}

console.log(collectStrings(obj1));

