// represent array of numbers as ranges -- this one took a while
function toRange(arr) {
  if (arr.length < 1) {
    return "";
  }
  const arrSort = arr.sort((a, b) => a - b);
  const arrUnique = [...new Set(arrSort)];
  let newArr = [];
  for (let i = 0; i < arrUnique.length; i++) {
    if (arrUnique[i] === arrUnique[i - 1] + 1) {
      newArr.push("_", arrUnique[i]);
      if (newArr.length > 4 && newArr[newArr.length - 4].includes("_")) {
        newArr[newArr.length - 4] = "";
        newArr[newArr.length - 3] = "";
      }
    } else if (i === 0 && arrUnique[i] !== arrUnique[i - 1] + 1) {
      newArr.push(arrUnique[i]);
    } else {
      newArr.push(",", arrUnique[i]);
    }
  }
  return newArr.join("");
}

// console.log(toRange([3, 5, 4, 6, 4, 7, 2, 5, 6, 9, 11, 12, 13]));

function toArray(str) {
  if (!str) {
    return [];
  }
  const newArr = str.split(",").map((e) => {
    if (e.includes("_")) {
      const eSplit = e.split("_");
      let arr = [eSplit[0]];
      for (let i = +eSplit[0]; i < +eSplit[1]; i++) {
        arr.push(i + 1);
      }
      return arr.join(", ");
    }
    return e;
  });
  return newArr
    .join(", ")
    .split(", ")
    .map((e) => +e);
}

// console.log(toArray(toRange([3, 5, 4, 6, 4, 7, 2, 5, 6, 9, 11, 12, 13])));

// two sum
// function twoSum(numbers, target) {
//     const arr = [];
//     for (let n1 = 0; n1 < numbers.length; n1++) {
//         for (let n2 = 0; n2 < numbers.length && n1 !== n2; n2++) {
//             if(numbers[n1] + numbers[n2] === target) {
//                 arr.push(n1, n2);
//                 return arr;
//             }
//         }
//     }
//     return arr;
// }

// normalizing out of range array indexes
// function normIndex(array, index) {
//     let newInd = index % (array.length);
//     if (index < 0) {
//         if (!(index % array.length)) {
//             return array[0];
//         }
//         newInd += array.length;
//     }
//     return array[newInd];
// }
// const arr = [10, 82, 51, 17, 97, 69, 22, 22, 61, 99, 87];
// console.log(normIndex(arr, - 11));

// Sort the odd
// function sortArray(arr) {
//     let obj = {};
//     let oddArr = [];
//     let finArr = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] !== 0 && !arr[i]) {
//             continue;
//         } else if (!(arr[i] % 2)) {
//             obj[i] = arr[i];
//         } else {
//             oddArr.push(arr[i]);
//         }
//     }
//     console.log(obj, oddArr)
//     oddArr.sort((a, b) => a - b);
//     for (const k in obj) {
//         finArr[k] = + obj[k];
//     }
//     for (const e of oddArr) {
//         for (let j = 0; j < arr.length; j++) {
//             if (finArr[j] === undefined) {
//                 finArr[j] = e;
//                 break;
//             }
//         }
//     }
//     return finArr;
// }

// console.log(sortArray([5, 3, 1, 8, 0]));

// Sum of prime-indexed elements
// function total(arr) {
//     let sum = 0;
//     let check;
//     for (let i = 2; i < arr.length; i++) {
//         check = `n`;
//         for (let j = 2; j < arr.length; j++) {
//             if (i === j) {
//                 continue;
//             }
//             if (!(i % j)) {
//                 check = `y`;
//                 break;
//             }
//         }
//         if (check === `n`) {
//             sum += arr[i];
//             // console.log(sum);
//         }
//     }
//     return sum;
// }

// const arr = [1, 2, 3, 4, 5, 6];
// console.log(total(arr));

// Find the odd int
// function findOdd(A) {
//     let counts = {};
//     for(const item of A) {
//         if(counts[item] === undefined) {
//             counts[item] = 1;
//         } else {
//             counts[item] ++;
//         }
//     }
//     for(const k in counts) {
//         if(counts[k] % 2) {
//             return Number(k);
//         }
//     }
// }
// console.log(findOdd([0, 1, 0, 1, 0]))

// well of ideas - sorta hard coded a bit
// function well(x){
//     let goodCount = 0;
//     for(const arr of x) {
//       for(const item of arr) {
//         if(item[0] === `g` || item[0] === `G`) {
//           goodCount ++;
//         }
//       }
//     }
//     if(goodCount > 2) {
//       return `I smell a series!`;
//     } else if (goodCount > 0) {
//       return `Publish!`;
//     }
//     return `Fail!`;
//   }

// numbers to objects
// function numObj(s){
//     let arr = [];
//     for(let i = 0; i < s.length; i++) {
//         arr[i] = {};
//         arr[i][s[i].toString()] = String.fromCharCode(s[i]);
//     }
//     return arr;
// }

// console.log(numObj([101,121,110,113,113,103]))

// Magic Index
// function findMagic(arr){
//   for(let i = 0; i < arr.length; i++) {
//     if(arr[i] === i) {
//         return i;
//     }
//   }
//   return -1;
// }
