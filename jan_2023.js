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
