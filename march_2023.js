// Look and say numbers
function lookAndSay(data, len) {}

// console.log(lookAndSay("1", 5));

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
