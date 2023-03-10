// Look and say numbers
function lookAndSay(data, len) {}

// console.log(lookAndSay("1", 5));

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
