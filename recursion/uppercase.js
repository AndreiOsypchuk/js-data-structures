const uppercase = (arr) => {
  if (arr.length === 1) {
    arr[0] = arr[0][0].toUpperCase() + arr[0].slice(1);
    return arr;
  }
  arr[0] = arr[0][0].toUpperCase() + arr[0].slice(1);
  return [arr[0], ...uppercase(arr.slice(1))];
};

console.log(uppercase(['andrei', 'goear', 'asdf']));
