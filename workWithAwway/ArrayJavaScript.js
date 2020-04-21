function urlify(string) {
  let result = [];
  for (let i = 0; i < string.length; i++) {
    result[i] = string[i];
    if (string[i] === ' ') {
      //console.log('made it here');
      result[i] = '%20';
      //console.log(string[i]);
    }
  }
  console.log(string);
  return result.join('');
}
console.log(urlify('tauhida parveen'));
console.log(urlify('www.thinkful.com /tauh ida parv een'));
