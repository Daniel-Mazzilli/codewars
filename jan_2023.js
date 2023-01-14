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

console.log(combine(objA, objB, objC));
