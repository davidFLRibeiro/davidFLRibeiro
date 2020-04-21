function filter(string) {
  const arr = [];
  for (let i = 0; i < string.length; i++) {
    arr[i] = string[i];
    console.log('made it here');
    if (string[i] <= 5) {
      arr[i] = '';
    }
  }

  return arr;
}
console.log(filter([1, 23, 4, 5, 7, 8, 456, 8, 345, 8745, 325, 324]));
