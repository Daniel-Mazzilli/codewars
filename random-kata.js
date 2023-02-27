// Greatest common divisor --> Need to optimize for kata
function mygcd(x, y) {
  for (let i = x > y ? y : x; i > 0; i--) {
    if ((x % i) + (y % i) === 0) {
      return i;
    }
  }
}

// console.log(mygcd(36, 12));

// Sum a list but ignore any duplicates
function sumNoDuplicates(numList) {
  const newList = [];
  numList.forEach(e => {
    if(numList.filter(el => el === e).length < 2){
      newList.push(e)
    }
  })
  return newList.reduce((acc, e) => acc += e, 0)
}

// console.log(sumNoDuplicates([1, 1, 2, 3]))

// Be Concise IV - Index of an element in an array
const find = (arr, el) => {
  const i = arr.indexOf(el);
  return i < 0? "Not found" : i;
}

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

console.log(guessWhat(37));
console.log(guessWhat(211));
console.log(guessWhat(557));

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
