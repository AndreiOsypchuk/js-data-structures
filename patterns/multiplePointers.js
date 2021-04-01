const findPair = (arr) => {
    let left = 0;
    let right = arr.length -1;
    while(left < right) {
        let sum = arr[left] + arr[right];
        if(sum === 0) {
            return [arr[left], arr[right]];
        } else if(sum < 0) {
            left++;
        } else{ 
            right--;
        }
    }

    return undefined;
}

const uniqueValuesCounter = (arr) => {
    let count = 0;
    let ahead = 1;
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] !== arr[ahead])
            count++;
        ahead++;
    }
    return count;
}

//console.log(findPair([-4, -3, -2, 0, 2, 3, 4]));
//console.log(findPair([-10, -9, -7, -3, -2, 0, 1, 2, 3, 4, 5, 6, 8]));

//console.log(uniqueValuesCounter([1, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 5, 6, 7]));

function areThereDuplicates(...args) {
    const sorted = args.sort((a, b) => a < b);
    let ahead = 1;
    for(let i = 0; i < args.length; i++) {
        if(args[i] === args[ahead]) {
            return true;
        }
    }
    return false;
}

const averagePair = (arr, av) => {
    let left = 0;
    let right = arr.length - 1;
    while(left < right) {
        const cav = (arr[left] + arr[right]) / 2;
        if(cav === av) {
            return true;
        } else if (cav > av) {
            right--;
        } else {
            left++;
        }
    }
    return false;
}

function isSubsequence(first, second) {
  // good luck. Add any arguments you deem necessary.
  let firstPointer = 0;
  let secondPointer = 0;
  while(firstPointer < first.length) {
      if(first[firstPointer] === second[secondPointer]) {
          firstPointer++;
      }
      secondPointer++;
  }
  return firstPointer === first.length;
}
console.log(isSubsequence('jello', 'jello d'));
//console.log(areThereDuplicates(1, 2, 3,2, 4));
console.log(averagePair([1,2,3,4],2.5));
console.log(averagePair([1,2,4,5,6,7], 5));
console.log(averagePair([1,2,4,5,6,7], 5.2));
