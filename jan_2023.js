// Calculate BMI
function bmi(weight, height) {
  const bmiVal = weight / (height * height);
  if (bmiVal <= 18.5) {
    return "Underweight";
  }
  if (bmiVal <= 25) {
    return "Normal";
  }
  if (bmiVal <= 30) {
    return "Overweight";
  }
  return "Obese";
}

// Array.diff
function arrayDiff(a, b) {
  const newArr = [];
  a.forEach((e) => (!b.includes(e) ? newArr.push(e) : null));
  return newArr;
}

// Sum of Digits / Digital Root
function digitalRoot(n) {
  if (n < 10) {
    return n;
  }

  const sum = n
    .toString()
    .split("")
    .reduce((acc, e) => (acc += +e), 0);
  return digitalRoot(sum);
}

// If you can't sleep, just count sheep!!
const countSheep = (num) => {
  let str = "";
  let count = 1;
  while (count <= num) {
    str += count.toString() + " sheep...";
    count++;
  }
  return str;
};

// Is he gonna survive?
function hero(bullets, dragons) {
  return bullets / 2 >= dragons;
}

// Who likes it?
function likes(names) {
  if (names.length < 1) {
    return "no one likes this";
  }
  if (names.length === 1) {
    return `${names[0]} likes this`;
  }
  if (names.length === 2) {
    return `${names[0]} and ${names[1]} like this`;
  }
  if (names.length === 3) {
    return `${names[0]}, ${names[1]} and ${names[2]} like this`;
  }
  if (names.length > 3) {
    return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`;
  }
}

// Multiples of 3 or 5
function solution(number) {
  if (number > 0) {
    let acc = 0;
    let i = number - 1;
    while (i > 0) {
      if (i % 3 === 0 || i % 5 === 0) {
        acc += i;
      }
      i--;
    }
    return acc;
  }
  return 0;
}

// Will you make it?
const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  return distanceToPump <= mpg * fuelLeft;
};

// Moving Zeros To The End
function moveZeros(arr) {
  const newArr = [];
  const zeroArr = [];

  arr.forEach((e) => (e === 0 ? zeroArr.push(e) : newArr.push(e)));

  return [...newArr, ...zeroArr];
}

// Simple Pig Latin
function pigIt(str) {
  const arr = str.split(" ");
  const newArr = arr.map((e) => {
    if (
      (e.length === 1 && e.toLowerCase().charCodeAt() < 97) ||
      e.toLowerCase().charCodeAt() > 122
    ) {
      return e;
    }
    return e.slice(1) + e.charAt(0) + "ay";
  });
  return newArr.join(" ");
}

// Reverser use recursion
function reverser(n, res = 0) {
  if (n === 0) {
    return res;
  }

  return reverser((n - (n % 10)) / 10, res * 10 + (n % 10));
}

// console.log(reverser(1234));

// bubblesortOnce
function bubblesortOnce(array) {
  let val = array[0];
  return array.map((e, i, a) => {
    if (i === a.length - 1) {
      return val;
    }
    if (val === e) {
      if (val <= a[i + 1]) {
        val = a[i + 1];
        return e;
      } else {
        return a[i + 1];
      }
    }
    if (val !== e) {
      if (val <= a[i + 1]) {
        const val2 = val;
        val = a[i + 1];
        return val2;
      } else {
        return a[i + 1];
      }
    }
  });
}

// console.log(bubblesortOnce([9, 7, 5, 3, 1, 2, 4, 6, 8]));

// Sum of a sequence
const sequenceSum = (begin, end, step) => {
  if (begin > end) {
    return 0;
  }
  const sequence = [begin];
  let sum = begin;
  while (sequence.at(-1) + step <= end) {
    const val = sequence.at(-1) + step;
    sequence.push(val);
    sum += val;
  }
  return sum;
};

// console.log(sequenceSum(2, 6, 2));

// Sum all the arrays
function arraySum(arr) {
  let sum = 0;
  for (let e of arr) {
    if (Array.isArray(e)) {
      sum += arraySum(e);
    }
    if (typeof e === "number") {
      sum += e;
    }
  }
  return sum;
}

// console.log(arraySum([1, 2]));
// console.log(arraySum([1, 2, [1, 2]]));

// Fibonacci Recursion
const fibonacci = (n) => {
  if (n === 1 || n === 2) {
    return 1;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
};

// more complicated way
// const fibonacci = (n, n1 = 1, n2 = 1, c = 3) => {
//     if (n === 1 || n === 2) {
//       return 1;
//     }
//     if (n === c) {
//       return n1 + n2;
//     }
//     return fibonacci(n, n2, n1 + n2, c + 1);
//   };

// console.log(fibonacci(1));
// console.log(fibonacci(2));
// console.log(fibonacci(3));
// console.log(fibonacci(4));
// console.log(fibonacci(5));
// console.log(fibonacci(6));
// Recursive Replication
function replicate(times, number, arr = []) {
  if (times > 0) {
    arr.push(number);
    return replicate(times - 1, number, arr);
  }
  return arr;
}

// console.log(replicate(3, 5));

// Recursion Factorial
const factorial = (n, x = 1) => {
  let res = !n ? 1 : x * n;
  if (n > 1) {
    return factorial(n - 1, res);
  }
  return res;
};

// Factorial Factory
// function factorial(n) {
//   let counter = n;
//   let result = 1;
//   while (counter > 0) {
//     result *= counter;
//     counter--;
//   }
//   if (n < 0) {
//     return null;
//   }
//   return result;
// }

// console.log(factorial(0));
// Matrix Transpose
function transpose(matrix) {
  const newMatrix = [];
  for (let i = 0; i < matrix[0].length; i++) {
    newMatrix.push([]);
  }
  matrix.forEach((arr, i) => {
    arr.forEach((e, ii) => {
      newMatrix[ii][i] = e;
    });
  });
  return newMatrix;
}

// console.log(
//   transpose([
//     [1, 2, 3],
//     [4, 5, 6],
//   ])
// );

// Closest pair of points
function closestPair(points) {
  let smallestDistance = undefined;
  let twoPoints = [[], []];
  points.forEach((e, i) => {
    points.forEach((ie, ii) => {
      if (ii > i) {
        const xDelta = e[0] - ie[0];
        const yDelta = e[1] - ie[1];
        const distance = Math.sqrt(xDelta * xDelta + yDelta * yDelta);
        if (smallestDistance === undefined || smallestDistance > distance) {
          smallestDistance = distance;
          twoPoints = [e, ie];
        }
      }
    });
  });
  return twoPoints;
}

const arr = [
  [2, 2], // A
  [2, 8], // B
  [5, 5], // C
  [6, 3], // D
  [6, 7], // E
  [7, 4], // F
  [7, 8], // G
];

// console.log(closestPair(arr));

// Matrix Addition
function matrixAddition(a, b) {
  let result = [...a];
  for (let i = 0; i < a.length; i++) {
    for (let ii = 0; ii < a[i].length; ii++) {
      result[i][ii] = a[i][ii] + b[i][ii];
    }
  }
  return result;
}

matrixAddition(
  [
    [1, 2, 3],
    [3, 2, 1],
    [1, 1, 1],
  ],
  [
    [2, 2, 1],
    [3, 2, 3],
    [1, 1, 3],
  ]
);

// Grid index
function gridIndex(grid, indices) {
  const arr = grid.reduce((acc, e) => (acc = [...acc, ...e]), []);
  let obj = {};
  arr.forEach((e, i) => (obj[i + 1] = e));
  let str = "";
  indices.forEach((e) => (str += obj[e]));
  return str;
}

gridIndex(
  [
    ["m", "y", "e"],
    ["x", "a", "m"],
    ["p", "l", "e"],
  ],
  [1, 3, 5, 8]
);
// Reverse every other word in the string
function reverse(str) {
  return str
    .split(" ")
    .filter((e) => e !== "")
    .map((e, i) => (i % 2 !== 0 ? e.split("").reverse().join("") : e))
    .join(" ");
}

// console.log(reverse("Reverse this   string, please!"));

// Coding Meetup #6 - Higher-Order Functions Series - Can they code in the same language?
function isSameLanguage(list) {
  const language = list.reduce(
    (acc, e) =>
      !acc ? (acc = false) : acc === e.language ? e.language : false,
    list[0].language
  );
  return language ? true : false;
}

// Sort Numbers
function solution(nums) {
  if (nums === null) {
    return [];
  }
  return nums.sort((a, b) => {
    // if (a < b) {
    //   return -1;
    // }
    // if (a > b) {
    //   return 1;
    // }
    // return 0;
    return a - b;
  });
}

// console.log(solution([1, 2, 10, 50, 5]));

// JavaScript Array Filter
function getEvenNumbers(numbersArray) {
  return numbersArray.filter((e) => e % 2 === 0);
}

// Add property to every object in array
let questions = [
  {
    question: "What's the currency of the USA?",
    choices: ["US dollar", "Ruble", "Horses", "Gold"],
    corAnswer: 0,
  },
  {
    question: "Where was the American Declaration of Independence signed?",
    choices: ["Philadelphia", "At the bottom", "Frankie's Pub", "China"],
    corAnswer: 0,
  },
];

const addAnswer = (questions) => {
  questions = questions.map((e) => (e.usersAnswer = null));
};
addAnswer(questions);
// console.log(questions);

// Beginner - Lost Without a Map
function maps(x) {
  return x.map((e) => e * 2);
}

// Enumerable Magic #4 - True for None?
function none(arr, fun) {
  const vals = arr.reduce(
    (acc, e) => (!fun(e) ? [...acc, true] : [...acc, false]),
    [true]
  );
  return !vals.includes(false);
}

// Enumerable Magic #1 - True for All?
function all(arr, fun) {
  return arr.reduce((acc, e) => (acc ? (acc = fun(e)) : (acc = false)), true);
}

// Filter out the geese
function gooseFilter(birds) {
  const geese = [
    "African",
    "Roman Tufted",
    "Toulouse",
    "Pilgrim",
    "Steinbacher",
  ];
  return birds.filter((e) => !geese.includes(e));
}

// Pokemon Damage Calculator
function calculateDamage(yourType, opponentType, attack, defense) {
  let effectiveness = 1;

  const opt1 = yourType === "fire" && opponentType === "grass";
  const opt2 = yourType === "water" && opponentType === "fire";
  const opt3 = yourType === "grass" && opponentType === "water";
  const opt4 = yourType === "electric" && opponentType === "water";

  const opt5 = yourType === "grass" && opponentType === "fire";
  const opt6 = yourType === "fire" && opponentType === "water";
  const opt7 = yourType === "water" && opponentType === "grass";
  const opt8 = yourType === "water" && opponentType === "electric";
  const opt9 = yourType === opponentType;

  if (opt1 || opt2 || opt3 || opt4) {
    effectiveness = 2;
  }
  if (opt5 || opt6 || opt7 || opt8) {
    effectiveness = 0.5;
  }

  if (yourType === opponentType) {
    effectiveness = 0.5;
  }

  const damage = 50 * (attack / defense) * effectiveness;
  return damage;
}

// Dictionary from two lists
const keys = ["a", "b", "c", "d"];
const values = [1, 2, 3];

function createDict(keys, values) {
  const obj = keys.reduce((acc, e, i) => {
    const val = values[i] !== undefined ? values[i] : null;
    return (acc = { ...acc, [e]: val });
  }, {});
  return obj;
}

// console.log(createDict(keys, values));

// Duplicates. Duplicates everywhere
const table = {
  1: ["A", "B", "C"],
  2: ["A", "B", "D", "A"],
  3: ["A", "B", "D", "A"],
};

const removeDuplicateIds = (obj) => {
  for (const k in obj) {
    obj[k] = [...new Set(obj[k])];
    for (const i in obj) {
      if (+k < +i) {
        obj[k] = obj[k].filter((e) => !obj[i].includes(e));
      }
    }
  }
  return obj;
};

// console.log(removeDuplicateIds(table));

// Combine Objects
const objA = { a: 10, b: 20, c: 30 };
const objB = { a: 3, c: 6, d: 3 };
const objC = { a: 5, d: 11, e: 8 };

// ...params allows unlimited parameters
const combine = (...params) => {
  const paramKeys = [...params].reduce(
    (acc, e) => (acc = [...acc, ...Object.keys(e)]),
    []
  );

  const keySet = [...new Set(paramKeys)];

  let sumVals = {};

  for (const k of keySet) {
    for (const param of params) {
      const val = param[k] ? param[k] : 0;
      sumVals[k] ? (sumVals[k] += val) : (sumVals[k] = val);
    }
  }

  return sumVals;
};

// console.log(combine(objA, objB, objC));
