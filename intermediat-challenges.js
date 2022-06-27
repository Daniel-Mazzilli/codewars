// Find the odd int
function findOdd(A) {
    let counts = {};
    for(const item of A) {
        if(counts[item] === undefined) {
            counts[item] = 1;
        } else {
            counts[item] ++;
        }
    }
    for(const k in counts) {
        if(counts[k] % 2) {
            return Number(k);
        }
    }
}
console.log(findOdd([0, 1, 0, 1, 0]))

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