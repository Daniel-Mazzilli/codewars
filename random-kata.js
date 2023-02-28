// Greatest common divisor --> Need to optimize for kata
function mygcd(x, y) {
  for (let i = x > y ? y : x; i > 0; i--) {
    if ((x % i) + (y % i) === 0) {
      return i;
    }
  }
}

// console.log(mygcd(36, 12));

// Reverser
function reverse(n) {}
// console.log(reverse(123))

// Convert a Number to a String!
function numberToString(num) {
  return num.toString();
}

// Return negative
function makeNegative(num) {
  return num < 0 ? num : num * -1;
}

// Training JS #7: if..else and ternary operator
function saleHotdogs(n) {
  return n * (n < 5 ? 100 : n < 10 ? 95 : 90);
}

//Keep Hydrated!
function litres(time) {
  return Math.floor(time * 0.5);
}

// Price of Mangoes
function mango(quantity, price) {
  return (quantity - Math.floor(quantity / 3)) * price;
}

// Unfinished Loop - Bug Fixing #1
function createArray(number) {
  const newArray = [];

  for (let counter = 1; counter <= number; counter++) {
    newArray.push(counter);
  }

  return newArray;
}

// Add Length
function addLength(str) {
  return str.split(" ").map((e) => `${e} ${e.length}`);
}

//Reversed Strings
function solution(str) {
  return str.split("").reverse().join("");
}

// return to sanity
function mystery() {
  return { sanity: "Hello" };
}

// ASCII Total
function uniTotal(string) {
  return string.split("").reduce((acc, e) => (acc += e.charCodeAt(0)), 0);
}

// basic encryption
function encrypt(text, rule) {
  return text
    .split("")
    .map((e) => String.fromCharCode((e.charCodeAt(0) + rule) % 256))
    .join("");
}

// console.log(encrypt("abc", 2));

// Digital cypher
function encode(str, n) {
  return str
    .split("")
    .map(
      (e, i) => e.charCodeAt(0) - 96 + +n.toString().at(i % n.toString().length)
    );
}

// console.log(encode("scout", 1939));

// Decoding a message
function decode(message) {
  return message
    .split(" ")
    .map((e) =>
      e
        .split("")
        .map((l) =>
          String.fromCharCode(
            l.charCodeAt(0) > 109
              ? 122 - l.charCodeAt(0) + 97
              : 122 - (l.charCodeAt(0) - 97)
          )
        )
        .join("")
    )
    .join(" ");
}

// console.log(decode("r slkv mlylwb wvxlwvh gsrh nvhhztv"));

// Club Doorman
function passTheDoorMan(word) {
  return (
    (word
      .toLowerCase()
      .split("")
      .find((e, i, a) => e === a[i - 1])
      .charCodeAt(0) -
      96) *
    3
  );
}

// console.log(passTheDoorMan("yaas"));

// The Barksdale Code
function decode1(string) {
  const pairs = {
    1: 9,
    2: 8,
    3: 7,
    4: 6,
    5: 0,
    6: 4,
    7: 3,
    8: 2,
    9: 1,
    0: 5,
  };

  return string
    .split("")
    .map((e) => pairs[e])
    .join("");
}

// console.log(decode1("4103432323"));

// Even or Odd
function evenOrOdd(number) {
  return number % 2 ? "Odd" : "Even";
}

// Is n divisible by x and y?
function isDivisible(n, x, y) {
  return (n % x) + (n % y) === 0 ? true : false;
}

// Square(n) Sum
function squareSum(numbers) {
  return numbers.reduce((acc, e) => (acc += e * e), 0);
}

// Hello world
const greet = () => {
  return "hello world!";
};

// Power
function numberToPower(number, power) {
  let finVal = number;
  for (let i = power; i > 1; i--) {
    finVal *= number;
  }
  return power > 0 ? finVal : 1;
}

// Be Concise I - Ternary
function describeAge(age) {
  return (
    "You're a(n) " +
    (age > 64 ? "elderly" : age > 17 ? "adult" : age > 12 ? "teenager" : "kid")
  );
}

// Determine off spring sex
function chromosomeCheck(sperm) {
  return (
    "Congratulations! You're going to have a " +
    (sperm.includes("Y") ? "son." : "daughter.")
  );
}

// Counting sheep...
function countSheeps(arrayOfSheep) {
  return arrayOfSheep.filter((e) => e === true).length;
}

// Reverse words
function reverseWords(str) {
  return str
    .split(" ")
    .map((e) => e.split("").reverse().join(""))
    .join(" ");
}

// Sum a list but ignore any duplicates
function sumNoDuplicates(numList) {
  const newList = [];
  numList.forEach((e) => {
    if (numList.filter((el) => el === e).length < 2) {
      newList.push(e);
    }
  });
  return newList.reduce((acc, e) => (acc += e), 0);
}

// console.log(sumNoDuplicates([1, 1, 2, 3]))

// Be Concise IV - Index of an element in an array
const find = (arr, el) => {
  const i = arr.indexOf(el);
  return i < 0 ? "Not found" : i;
};

// Guess Number
const guessWhat = (n) => {
  if (n === 1) {
    return 0;
  }

  const arr = [];
  for (let i = 2; i <= n; i++) {
    if (arr.length < 4) {
      arr.push(i);
      continue;
    }

    let add = true;

    for (let i2 of arr) {
      for (let num = i2 * i2; num <= i; num *= i2) {
        if (num === i) {
          arr.push(i);
          add = false;
        }
      }
      for (let i3 of arr) {
        if (i2 !== i3 && i % (i2 * i3) === 0) {
          add = false;
        }
      }
    }

    add ? arr.push(i) : null;
  }
  const noDuplicates = [...new Set(arr)];
  return noDuplicates.length;
};

// console.log(guessWhat(37));
// console.log(guessWhat(211));
// console.log(guessWhat(557));

// Basic Compression
const compress = (str) => {
  const newArr = [];
  str.split("").reduce((acc, e, i, a) => {
    if (i === 0) {
      acc = 1;
    } else if (e === a[i - 1]) {
      acc += 1;
    } else if (e !== a[i - 1]) {
      newArr.push([acc, `"${a[i - 1]}"`]);
      acc = 1;
    }

    if (i === a.length - 1) {
      newArr.push([acc, `"${e}"`]);
    }

    return acc;
  }, 0);

  const compressed = "[[" + newArr.join("],[") + "]]";
  return compressed.length < str.length ? compressed : str;
};

const decompress = (str) => {
  let newStr = "";
  if (str.includes("[")) {
    str
      .substring(2, str.length - 2)
      .split("],[")
      .forEach((e) => {
        const index = e.indexOf(",");
        for (let i = 0; i < e.substring(0, index); i++) {
          newStr += e.substring(index + 2, e.length - 1);
        }
      });
  }
  return newStr !== "" ? newStr : str;
};

// const string = "aaaaaaaabaaaa";
// const string1 = "aaaaaaaaaaaaaaaaaaaaaaaaaabaaaaaaaaaaaaaaaaaa";
// const string2 = "abcde";

// console.log(compress(string2));
// console.log(decompress('[[26,"a"],[1,"b"],[18,"a"]]'));
// console.log(decompress("abcde"));

// Rock Paper Scissors Lizard Spock
function rpsls(pl1, pl2) {
  const res1 = "Player 1 Won!";
  const res2 = "Player 2 Won!";
  const res3 = "Draw!";
  const combinations = {
    scissors: {
      paper: res1,
      lizard: res1,
    },
    paper: {
      rock: res1,
      spock: res1,
    },
    rock: {
      lizard: res1,
      scissors: res1,
    },
    lizard: {
      spock: res1,
      paper: res1,
    },
    spock: {
      scissors: res1,
      rock: res1,
    },
  };

  if (pl1 === pl2) {
    return res3;
  }
  return combinations[pl1][pl2] ? combinations[pl1][pl2] : res2;
}

// console.log(rpsls("Lizard", "Rock"))

// wave
function wave(str) {
  const arr = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] === " ") {
      continue;
    }
    arr.push(str.slice(0, i) + str.charAt(i).toUpperCase() + str.slice(i + 1));
  }
  return arr;
}

// console.log(wave("hello world"));

// No ifs no buts
function noIfsNoButs(a, b) {
  let str = "is equal to";
  switch (a === b) {
    case true:
      break;
    case false:
      switch (a - b < 0) {
        case false:
          str = "is greater than";
          break;
        case true:
          str = "is smaller than";
          break;
      }
  }
  return `${a} ${str} ${b}`;
}

// console.log(noIfsNoButs(45, 51));

// All Star Code Challenge #18
function strCount(str, letter) {
  return str.split("").filter((e) => e === letter).length;
}

// console.log(strCount("Hello", "l"));

// noisy cell counts
const cleanedCounts = (data) => {
  return data.reduce(
    (acc, val, i) =>
      i > 0 && val < acc[i - 1] ? [...acc, val + 1] : [...acc, val],
    []
  );
};

// console.log(cleanedCounts([1, 1, 2, 2, 1, 2, 2, 2, 2]));
