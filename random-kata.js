// All Star Code Challenge #18
function strCount(str, letter) {
    return str.split("").filter(e => e === letter).length
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
