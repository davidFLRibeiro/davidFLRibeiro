/*Imagine you have 2 arrays which have already been sorted. Write an algorithm to merge the 2 arrays into a single array, which should also be sorted.

Input:[1, 3, 6, 8, 11] and [2, 3, 5, 8, 9, 10]
Output:[1, 2, 3, 3, 5, 6, 8, 8, 9, 10, 11] */

function merge(array) {
  let a = array.concat();
  for (let i = 0; i < a.length; i++) {
    for (let j = i + 1; j < a.length; ++j) {
      if (a[i] === a[j]) a.splice(j--, 1);
    }
  }
  return a;
}
let array1 = [1, 3, 6, 8, 11];
let array2 = [2, 3, 5, 8, 9, 10];

console.log(merge(array1.concat(array2)));
