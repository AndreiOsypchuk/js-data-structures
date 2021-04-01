const sumOfSome = (arr, num) => {
    
    let max = 0;
    let temp = 0;
    // finding the sum of first window and saving it as a current max
    for(let i = 0; i < num; i++) {
        max += arr[i];
    }
    // temp is going to be the one we are moving forward by one
    temp = max;
    // subtracting the first number from the window and adding new number to the end and calculating their sum
    // if sum is bigger than max max = new sum;
    for(let i = num; i < arr.length; i++) {
        temp = temp - arr[i - num] + arr[i];
        max = Math.max(max, temp);
    }
    return max;
}


console.log(sumOfSome([1, 2, 3, 4, 5, 12, 4, 0, 100, 1, 3, 4, 3], 2));
