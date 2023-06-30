// 8 Double Char
function doubleChar(str) {
  return str.split("").map(e => e+e).join("")
}

// 8 L1: Set Alarm
function setAlarm(employed, vacation){
  return employed && !vacation
}

// 8 Get the mean of an array
function getAverage(marks){
  return Math.floor(marks.reduce((acc, e) => acc + e, 0) / marks.length)
}

// 6 Find the unique number
function findUniq(arr) {
 if(arr.filter(e => e === arr[0]).length < 2){
  return arr[0]
 }
  for (let i = 1; i < arr.length; i++) {
    if (arr[0] !== arr[i]) {
      return arr[i];
    }
  }
}

// console.log(findUniq([ 1, 1, 1, 2, 1, 1 ]));

// 6 Your order, please
function order(words) {
  const arr = words.split(" ");
  return arr.map((e, i) => arr.find((word) => word.includes(i + 1))).join(" ");
}

// console.log(order("is2 Thi1s T4est 3a"))

// 6 Detect Pangram
function isPangram(string) {
  const arr = [...new Set(string.toLowerCase().split("").sort())];
  const aIndex = arr.indexOf("a");
  const zIndex = arr.indexOf("z");

  return zIndex - aIndex === 25 ? true : false;
}
// console.log(isPangram("The quick brown fox jumps over the lazy dog"));

// 6 Unique In Order
const uniqueInOrder = (iterable) => {
  if (typeof iterable === "string") {
    iterable = iterable.split("");
  }
  return iterable.reduce(
    (acc, e, i, a) => (i > 0 && a[i - 1] === e ? acc : [...acc, e]),
    []
  );
};
// console.log(uniqueInOrder("ABBCcAD"));

// 6 Convert string to camel case
function toCamelCase(str) {
  return str
    .replaceAll("-", " ")
    .replaceAll("_", " ")
    .split(" ")
    .map((e, i) => (i !== 0 ? e.charAt(0).toUpperCase() + e.slice(1) : e))
    .join("");
}
// function toCamelCase(str) {
//   let newStr = "";
//   let cap = false;
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === "-" || str[i] === "_") {
//       cap = true;
//     } else {
//       cap ? newStr += str[i].toUpperCase() : newStr += str[i];
//       cap = false;
//     }
//   }
//   return newStr;
// }
// console.log(toCamelCase("the-Wtealth_sarrior"));

// 6 Persistent Bugger
function persistence(num, count = 0) {
  if (num < 10) {
    return count;
  }
  num = num
    .toString()
    .split("")
    .reduce((acc, e) => +e * acc, 1);
  return persistence(num, count + 1);
}
// function persistence(num) {
//   let count = 0;
//   while (num > 9) {
//     num = num
//       .toString()
//       .split("")
//       .reduce((acc, e) => +e * acc, 1);
//     count++;
//   }
//   return count;
// }
// console.log(persistence(999));

// 6 Find The Parity Outlier
function findOutlier(integers) {
  const obj = integers.reduce(
    (acc, e) =>
      e % 2 === 0
        ? { ...acc, even: acc["even"] + 1, lastEven: e }
        : { ...acc, odd: acc["odd"] + 1, lastOdd: e },
    { even: 0, odd: 0, lastEven: null, lastOdd: null }
  );
  return obj.even < obj.odd ? obj.lastEven : obj.lastOdd;
}

// function findOutlier(integers) {
//   const even = [];
//   const odd = [];
//   for (let i = 0; i < integers.length; i++) {
//     if (integers[i] % 2 === 0) {
//       even.push(integers[i]);
//     } else {
//       odd.push(integers[i]);
//     }
//   }
//   return even.length > 1 ? odd[0] : even[0];
// }

// console.log(findOutlier([1, 5, 6, 3, 9]));

// 8 Volume of a Cuboid
function getVolumeOfCuboid(length, width, height) {
  return length * width * height;
}
// 6 Duplicate Encoder
function duplicateEncode(word) {
  const wordArr = word.toLowerCase().split("");

  const obj = wordArr.reduce(
    (acc, e) => (acc[e] ? { ...acc, [e]: ")" } : { ...acc, [e]: "(" }),
    {}
  );

  return wordArr.map((e) => obj[e]).join("");
}

// 6 Bit Counting
const countBits = (n, count = 0) => {
  if (n < 1) {
    return count;
  }
  let val = 1;
  while (val * 2 <= n) {
    val *= 2;
  }
  return countBits(n - val, count + 1);
};

// console.log(countBits(4));

// 8 Count the Monkeys!
function monkeyCount(n) {
  const arr = [];
  for (let i = n; i > 0; i--) {
    arr.unshift(i);
  }
  return arr;
}

// 8 Remove exclamation marks
function removeExclamationMarks(s) {
  return s.replaceAll("!", "");
}

// 6 Take a Ten Minutes Walk
function isValidWalk(walk) {
  if (walk.length !== 10) {
    return false;
  }
  const count = walk.reduce(
    (acc, e) => {
      return { ...acc, [e]: acc[e] + 1 };
    },
    {
      ["n"]: 0,
      ["s"]: 0,
      ["e"]: 0,
      ["w"]: 0,
    }
  );
  if (count.n !== count.s || count.w !== count.e) {
    return false;
  }
  return true;
}

// 6 Counting Duplicates
function duplicateCount(text) {
  const obj = text
    .split("")
    .map((e) => e.toLowerCase())
    .reduce(
      (acc, e) =>
        acc[e]
          ? acc.duplicates.includes(e)
            ? { ...acc, [e]: acc[e] + 1 }
            : { ...acc, [e]: acc[e] + 1, duplicates: [...acc.duplicates, e] }
          : { ...acc, [e]: 1 },
      { duplicates: [] }
    );
  return obj.duplicates.length;
}
// console.log(duplicateCount("aabbcde"));

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
