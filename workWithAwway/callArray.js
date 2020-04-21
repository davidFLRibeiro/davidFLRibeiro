const Array = require('./Array');

function main() {
  console.log('made it here');
  Array.SIZE_RATIO = 3;

  let arr = new Array();
  console.log(arr);
  arr.push(3);
  arr.push(5);
  arr.push(15);
  arr.push(19);
  arr.push(45);
  arr.push(10);
  console.log(arr);
  arr.pop();
  arr.pop();
  arr.pop();
  console.log('pop', arr);
  console.log(arr.get(0));
  arr.pop();
  arr.pop();
  arr.pop();
  arr.push(99);
  console.log(arr.get('jhon'));
}
main();
