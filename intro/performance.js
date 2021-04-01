const {performance} = require('perf_hooks');
const addWithLoop = (n) => {
    let acc = 0;
    for(let i = 0; i < n; i++) {
        acc += i;
    }
    return acc;
}

const addWithFormula = (n) => {
    return n * (n+1)/2;
}

const powIteration = (base, exp) => {
    let res = 1;
    for(let i = 0; i < exp; i++) {
        for(let j = 100000; j--;) {}
        res *= base;
    }
    return res;
}

const powRecursion = (base, exp) => {
    for(let i = 100000; i--;){};
    if(exp === 1) {
        return base;
    } else {
        return base * powRecursion(base, exp-1);
    }
}

const start1 = performance.now();
console.log(addWithLoop(1000000));
const end1 = performance.now();
console.log(`Loop took ${(end1 - start1)/1000} seconds to finish`);
const start2 = performance.now();
console.log(addWithFormula(1000000));
const end2 = performance.now();
console.log(`Formula took ${(end2 - start2)/1000} seconds to finish`);

const start3 = performance.now();
console.log(powIteration(100, 1000));
const end3 = performance.now();
console.log(`Iteration took ${(end3 - start3)/1000} seconds`);
const start4 = performance.now();
console.log(powRecursion(100,1000));
const end4 = performance.now();
console.log(`Recursino took ${(end4 - start4)/1000} seconds`);
