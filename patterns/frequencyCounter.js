const same = (arr1, arr2) => {
    if(arr1.length !== arr2.length) return false;
    const elements = {};
    for(let i = arr1.length; i--;) {
        let key = arr1[i] * arr1[i];
        if(elements[key]) {
            elements[key]++;
        } else {
            elements[key] = 1;
        }
    }
    for(let i = arr2.length; i--;) {
        if(elements[arr2[i]]) {
            elements[arr2[i]]--;
        } else {
            return false;
        }
    }
    return true;
}

const sameFreqNum = (num1, num2) => {
    const s1 = num1.toString();
    const s2 = num2.toString();
    const freq = {};
    for(let i = s1.length; i--;) {
        if(freq[s1[i]]) {
            freq[s1[i]]++;
        } else {
            freq[s1[i]] = 1;
        }
    }

    for(let i = s2.length; i--;) {
        if(freq[s2[i]]) {
            freq[s2[i]]--;
        } else {
            return false;
        }
    }
    return true;
}

function areThereDuplicates(...args) {
  // good luck. (supply any arguments you deem necessary.)
    let freq = {};
    for(let i = args.length; i--;) {
        if(!freq[args[i]]) {
            freq[args[i]] = 1;
        } else {
            return false;
        }
    }
    return true;
}


console.log(same([1, 2], [1, 4]));
console.log(same([2,3,5], [0,9,25]));

console.log(sameFreqNum(1234, 4321));
console.log(sameFreqNum(1234, 5422));
