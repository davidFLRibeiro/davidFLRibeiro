//-counting sheeps exercice
const countSheep = num => {
  let sheep = [];
  for (i = 1; i <= num; i++) {
    sheep.push(`${i} Another sheep jumps over the fence`);
  }
  return sheep.map(sheep => sheep.toString());
};
console.log(countSheep(3), `All sheep jumped over the fence`);

//Power Calculator

const expoent = (a, n) => {
  if (n === 0) {
    return 1;
  } else {
    return a * expoent(a, n - 1);
  }
};
console.log(expoent(10, 2));

//reverse string

function reverse(str) {
  if (str === '') {
    return '';
  } else {
    return reverse(str.substr(1)) + str.charAt(0);
  }
}
console.log(reverse('david'));

//nth triangular number

function tri(n) {
  if (n <= 1) {
    return n;
  } else {
    return n + tri(n - 1);
  }
}

console.log(tri(4));

//fibonacci

function fibonaccilter(num) {
  if (num <= 2) {
    return 1;
  } else {
    let result = 0;
    let counter = 2;
    let prevNo = 1;
    let prevPrevNo = 1;
    while (counter < num) {
      result = prevNo + prevPrevNo;
      var temp = prevNo;
      prevNo = result;
      prevPrevNo = temp;
      counter++;
    }
  }
}
console.log(fibonaccilter());

//factorial

function factorialize(num) {
  if (num < 0) {
    return -1;
  } else if (num == 0) {
    return 1;
  } else {
    return num * factorialize(num - 1);
  }
}
console.log(factorialize(15));

// Anagrams
let anagrams = [];

let genAnagrams = (word, anagram = '', anagrams = []) => {
  if (!word) {
    anagrams.push(anagram);
    return;
  }
  for (let i = 0; i < word.length; i++) {
    anagram += word[i];
    genAnagrams(word.slice(0, i) + word.slice(i + 1), anagram, anagrams);
    anagram = anagram.slice(0, anagram.length - 1);
  }
  return [...new Set(anagrams)];
};

genAnagrams('ABC');
console.log(genAnagrams('east'));
