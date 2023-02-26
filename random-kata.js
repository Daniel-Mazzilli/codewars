// Greatest common divisor --> Need to optimize for kata
function mygcd(x, y) {
  for (let i = x > y ? y : x; i > 0; i--) {
    if ((x % i) + (y % i) === 0) {
      return i;
    }
  }
}

// console.log(mygcd(36, 12));

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
        const pair = e.split(",");
        for (let i = 0; i < pair[0]; i++) {
          newStr += pair[1].replaceAll('"', "");
        }
      });
  }
  return newStr !== "" ? newStr : str;
};

const string = "aaaaaaaabaaaa";
const string1 = "aaaaaaaaaaaaaaaaaaaaaaaaaabaaaaaaaaaaaaaaaaaa";
const string2 = "abcde";

// console.log(compress(string2));
console.log(decompress('[[26,"a"],[1,"b"],[18,"a"]]'));
console.log(decompress("abcde"));

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
