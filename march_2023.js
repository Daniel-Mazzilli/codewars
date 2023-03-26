const divCon = (arr) => {
  return arr.reduce(
    (acc, el) => (Number.isInteger(el) ? (acc += el) : (acc -= +el)),
    0
  );
};

// Look and say numbers
function lookAndSay(data, len, arr = []) {
  if (len < 1) {
    return arr;
  }

  const newData = data.split("").reduce(
    (acc, e, i, arr) => {
      if (acc.val === e) {
        acc.count += 1;
      } else {
        if (acc.val !== "") {
          acc.string = acc.string + acc.count.toString() + acc.val;
        }
        acc.val = e;
        acc.count = 1;
      }
      if (i + 1 === arr.length) {
        acc.string += acc.count.toString() + acc.val;
      }
      return acc;
    },
    { val: "", count: 0, string: "" }
  );

  arr.push(newData.string);
  return lookAndSay(arr.at(-1), len - 1, arr);
}

// console.log(lookAndSay("1", 5));

// Number Zoo Patrol
function findNumber(array) {
  // if (!array.includes(1)) {
  //   return 1;
  // }
  // const found = array
  //   .sort((a, b) => a - b)
  //   .find((e, i, a) => e - 1 !== a[i - 1] && i > 0);
  // return found ? found - 1 : array.length + 1;
  // for (let i = 1; i < array.length + 2; i++) {
  //   if (!array.includes(i)) {
  //     return i;
  //   }
  // }
  return array.length
    ? ((array.length + 1) / 2) * (array.length + 2) -
        array.reduce((acc, el) => (acc += el))
    : 1;
}

// console.log(findNumber([7, 8, 1, 2, 4, 5, 6]));

// Loose change
function looseChange(cents) {
  cents = Math.floor(cents);
  const counts = {
    Pennies: 0,
    Nickels: 0,
    Dimes: 0,
    Quarters: 0,
  };
  while (cents > 0) {
    if (cents >= 25) {
      counts.Quarters += 1;
      cents -= 25;
    } else if (cents >= 10) {
      counts.Dimes += 1;
      cents -= 10;
    } else if (cents >= 5) {
      counts.Nickels += 1;
      cents -= 5;
    } else {
      counts.Pennies += 1;
      cents -= 1;
    }
  }
  return counts;
}

// Reverse FizzBuzz
function reverseFizzBuzz(s) {
  return [];
}

// binary swap
function binarySwap(input) {
  console.log(typeof input);
  if (typeof input === "function") {
    const newInput = input();
    return binarySwap(newInput);
  }
  if (typeof input === "object") {
    if (input.length < 2) {
      return binarySwap(...input);
    }
    return input.map((e) => binarySwap(e));
  }
  if (input == 0) {
    return 1;
  }
  if (input == 1) {
    return 0;
  }
}

// console.log(binarySwap([0, 1]));

// console.log(
//   binarySwap(function () {
//     console.log("func")
//     return 0;
//   })
// );

// console.log(reverseFizzBuzz("Fizz 688 689 FizzBuzz"))

// Friend or Foe?
function friend(friends) {
  return friends.filter((e) => e.length === 4);
}

// Backspaces in string
function cleanString(s) {
  return s
    .split("")
    .reduce(
      (acc, e) => (e === "#" ? acc.slice(0, acc.length - 1) : (acc += e)),
      ""
    );
}

// Christmas Present Calculator
function countPresents(prod, presents) {
  let prodTot = Object.values(prod).reduce(
    (acc, e) => (acc += e * 24 * 3600),
    0
  );
  let count = 0;
  presents.sort();
  for (let present of presents) {
    const valPresent = present
      .split(":")
      .reduce(
        (acc, e, i) => (acc += i === 0 ? +e * 3600 : i === 1 ? +e * 60 : +e),
        0
      );
    if (prodTot - valPresent >= 0) {
      count++;
      prodTot -= valPresent;
    } else {
      continue;
    }
  }
  return count;
}

// Gravity Flip
const flip = (d, a) => {
  if (d === "R") {
    return a.sort((a, b) => a - b);
  }
  if (d === "L") {
    return a.sort((a, b) => b - a);
  }
};

// VAPORCODE
function vaporcode(string) {
  return string.toUpperCase().replaceAll(" ", "").split("").join("  ");
}

// Flatten and sort an array
function flattenAndSort(array) {
  return array.flat().sort((a, b) => a - b);
}

// Primorial Of a Number
function numPrimorial(n) {
  const primes = [2];
  let total = 2;
  let num = 3;
  while (primes.length < n) {
    let isPrime = true;
    for (let i = num - 1; i > 1; i--) {
      if (num % i === 0) {
        isPrime = false;
      }
    }
    if (isPrime) {
      total *= num;
      primes.push(num);
    }
    num++;
  }
  return total;
}

// console.log(numPrimorial(8));

// Buying a car
function nbMonths(
  startPriceOld,
  startPriceNew,
  savingperMonth,
  percentLossByMonth
) {
  let savings = 0;
  let month = 0;
  let percentLoss = percentLossByMonth;
  while (startPriceNew > startPriceOld + savings) {
    month++;
    savings += savingperMonth;
    percentLoss += month > 1 && month % 2 === 0 ? 0.5 : 0;
    startPriceOld *= (100 - percentLoss) / 100;
    startPriceNew *= (100 - percentLoss) / 100;
  }
  return [month, Math.round(startPriceOld + savings - startPriceNew)];
}

// console.log(nbMonths(2000, 8000, 1000, 1.5));

// Can Santa save Christmas?
function determineTime(durations) {
  return (
    durations.reduce((acc, e) => {
      const time = e.split(":");
      return acc + +time[0] * 3600 + +time[1] * 60 + +time[2];
    }, 0) <=
    24 * 3600
  );
}

// Total amount of points
function points(games) {
  return games.reduce((acc, e) => {
    const score = e.split(":");
    return +score[0] > +score[1]
      ? (acc += 3)
      : +score[0] === +score[1]
      ? (acc += 1)
      : acc;
  }, 0);
}

// Deodorant Evaporator
function evaporator(content, evap_per_day, threshold) {
  const thresholdMl = (content * threshold) / 100;
  let days = 0;

  while (content > thresholdMl) {
    days++;
    content = (content * (100 - evap_per_day)) / 100;
  }

  return days;
}

// Get Nth Even Number
function nthEven(n) {
  return (n - 1) * 2;
}

// Over the road
function overTheRoad(address, n) {
  const slots = (address + 1) / 2;
  return n * 2 - (slots - 1) * 2;
}

// cat years, dog years
const humanYearsCatYearsDogYears = (humanYears) => {
  const catYears = 15 + (humanYears > 1 ? 9 + (humanYears - 2) * 4 : 0);
  const dogYears = 15 + (humanYears > 1 ? 9 + (humanYears - 2) * 5 : 0);
  return [humanYears, catYears, dogYears];
};

// multiplication table
function multiTable(number) {
  let str = "";
  for (let i = 1; i < 11; i++) {
    str += `${i} * ${number} = ${i * number}`;
    if (i < 10) {
      str += "\n";
    }
  }
  return str;
}

// console.log(multiTable(5));

// Recursion 101
function solve(a, b) {
  // step I
  if (a * b === 0) {
    return [a, b];
  }
  // step II
  if (a >= 2 * b) {
    a = a - 2 * b;
    return solve(a, b);
  }
  /// step III
  if (b >= 2 * a) {
    b = b - 2 * a;
    return solve(a, b);
  }
  return [a, b];
}

// Tribonacci Sequence
function tribonacci(signature, n, max = n, output = []) {
  if (output.length === max) {
    return output;
  }
  if (max - n < 3) {
    output.push(signature[max - n]);
  } else {
    output.push(output.at(-3) + output.at(-2) + output.at(-1));
  }

  return tribonacci(signature, n - 1, max, output);
}

// console.log(tribonacci([0, 1, 2], 10));

// Shortest Word
function findShort(s) {
  return s
    .split(" ")
    .reduce(
      (acc, e, i) => (i < 1 ? e.length : e.length < acc ? e.length : acc),
      0
    );
}

// Descending Order
function descendingOrder(n) {
  return +n
    .toString()
    .split("")
    .sort((a, b) => b - a)
    .join("");
}

// Sum Arrays
function sum(numbers) {
  return numbers.reduce((acc, e) => (acc += e), 0);
}

// Beginner - Reduce but Grow
function grow(x) {
  return x.reduce((acc, e) => (acc *= e));
}

// Find Maximum and Minimum Values of a List
const min = (list) => {
  return Math.min(...list);
};

const max = (list) => {
  return Math.max(...list);
};

// Convert a Boolean to a String
function booleanToString(b) {
  return b ? "true" : "false";
}

// You Can't Code Under Pressure #1
function doubleInteger(i) {
  return i * 2;
}

//Beginner Series #1 School Paperwork
function paperwork(n, m) {
  return n > 0 && m > 0 ? n * m : 0;
}

// MakeUpperCase
function makeUpperCase(str) {
  return str.toUpperCase();
}

// How many lightsabers do you own?
function howManyLightsabersDoYouOwn(name) {
  return name === "Zach" ? 18 : 0;
}

// Simple multiplication
function simpleMultiplication(number) {
  return number % 2 === 0 ? number * 8 : number * 9;
}

// Third Angle of a Triangle
function otherAngle(a, b) {
  return 180 - a - b;
}

// Convert a String to a Number!
const stringToNumber = (str) => {
  return +str;
};

// Convert number to reversed array of digits
function digitize(n) {
  return n
    .toString()
    .split("")
    .map((e) => +e)
    .reverse();
}

// Basic Mathematical Operations
function basicOp(operation, value1, value2) {
  if (operation === "/") {
    return value1 / value2;
  }
  if (operation === "*") {
    return value1 * value2;
  }
  if (operation === "-") {
    return value1 - value2;
  }
  if (operation === "+") {
    return value1 + value2;
  }
}

// Returning Strings
function greet(name) {
  return `Hello, ${name} how are you doing today?`;
}

// Invert values
function invert(array) {
  return array.map((e) => -e);
}

// Beginner Series #2 Clock
function past(h, m, s) {
  return (h * 3600 + m * 60 + s) * 1000;
}

// Are You Playing Banjo?
function areYouPlayingBanjo(name) {
  return name.charAt(0).toLowerCase() === "r"
    ? name + " plays banjo"
    : name + " does not play banjo";
}

// You only need one - Beginner
function check(a, x) {
  return a.includes(x);
}
