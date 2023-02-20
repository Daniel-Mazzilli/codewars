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

console.log(wave("hello world"));

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
