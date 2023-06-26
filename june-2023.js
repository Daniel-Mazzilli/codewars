// 8 Rock Paper Scissors!

const rps = (p1, p2) => {
  if (p1 === p2) {
    return "Draw!";
  }
  if (
    (p1[0] === "s" && p2[0] === "r") ||
    (p1[0] === "p" && p2[0] === "s") ||
    (p1[0] === "r" && p2[0] === "p")
  ) {
    return "Player 2 won!";
  }
  //   if (
  //     (p2[0] === "s" && p1[0] === "r") ||
  //     (p2[0] === "p" && p1[0] === "s") ||
  //     (p2[0] === "r" && p1[0] === "p")
  //   ) {
  //     return "Player 1 won!";
  //   }
  return "Player 1 won!";
};

// 8 Sentence Smash
function smash(words) {
  return words.join(" ");
}

// 8 DNA to RNA Conversion
function DNAtoRNA(dna) {
  return dna
    .split("")
    .map((e) => (e === "T" ? "U" : e))
    .join("");
}

// 8 Calculate average
function findAverage(array) {
  return array.length ? array.reduce((acc, e) => acc + e, 0) / array.length : 0;
}

// 8 Fake Binary
function fakeBin(x) {
  return x
    .split("")
    .map((e) => (5 > +e ? "0" : "1"))
    .join("");
}

// 8 Transportation on vacation
function rentalCarCost(d) {
  const tot = 40 * d;
  return d > 6 ? tot - 50 : d > 2 ? tot - 20 : tot;
}

// 8 Count by X
function countBy(x, n) {
  let z = [];
  for (let i = x; i <= x * n; i += x) {
    z.push(i);
  }
  return z;
}

// 8 Convert a string to an array
function stringToArray(string) {
  return string.split(" ");
}

// 8 Reversed sequence
const reverseSeq = (n) => {
  const arr = [];
  for (let i = n; i > 0; i--) {
    arr.push(i);
  }
  return arr;
};

// 8 How good are you really?
function betterThanAverage(classPoints, yourPoints) {
  return (
    classPoints.reduce((acc, e) => acc + e, 0) / classPoints.length < yourPoints
  );
}

// 7 What dominates your array?

function dominator(arr) {
  arr.sort();
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[Math.floor(arr.length / 2) + i]) {
      return arr[i];
    }
  }
  return -1;
}

// console.log(dominator([3, 4, 11, 3, 2, 3, 1, 3, 3]));
