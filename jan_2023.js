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
