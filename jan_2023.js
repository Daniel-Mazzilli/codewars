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
