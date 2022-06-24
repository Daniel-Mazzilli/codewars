// numbers to objects
function numObj(s){
    let arr = [];
    for(let i = 0; i < s.length; i++) {
        arr[i] = {};
        arr[i][s[i].toString()] = String.fromCharCode(s[i]);
    }
    return arr;
}

console.log(numObj([101,121,110,113,113,103]))


// Magic Index
// function findMagic(arr){
//   for(let i = 0; i < arr.length; i++) {
//     if(arr[i] === i) {
//         return i;
//     }
//   }
//   return -1;
// }