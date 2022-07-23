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