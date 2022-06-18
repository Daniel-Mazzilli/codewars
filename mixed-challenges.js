// Unique string characters

function solve(a, b){
    let str = ``;
    for(let i = 0; i < a.length; i++){
        if(b.indexOf(a[i]) === -1){
            str += a[i];
        }
    }
    for(let i = 0; i < b.length; i++){
        if(a.indexOf(b[i]) === -1){
            str += b[i];
        }
    }
    return str;
};

console.log(solve(`xyab`, `xzca`))

// The First Non Repeated Character In A String

// function firstNonRepeated(s) {
//     for(let i = 0; i < s.length; i++){
//         let unique = `yes`;
//         for(let j = 0; j < s.length; j++){
//             if(i === j) {
//                 continue;
//             } else if(s[i] === s[j]) {
//                 unique = null;
//                 break;
//             }
//         }
//         if(unique) {
//             return s[i];
//         }
//     }
//     return null;
// }

// console.log(firstNonRepeated(`teeter`))
// Return String of First Characters

// function makeString(s){
//     let arr = s.split(` `);
//     let str = ``;
//     for(const word of arr){
//         str += word[0];
//     }
//     return str;
// }
// console.log(makeString(`Hello Dan Hi Hello`));

// let arr = [1, 2, 3, 4, 5, 6];
// for(i = 1; i < arr.length; i += 2){
//     console.log(i, arr[i]);
// }


// String.prototype.isUpperCase = function(str) {
//     return this == this.toUpperCase()
//   }
// console.log('C'.isUpperCase())

// function twoSort(s) {
//     let sorting= s.sort()
//     let toSpliceUp = s[0].split('').join("***")
//       return(toSpliceUp)
//     }
// console.log(twoSort([`Bitcon`, `take`, `over`, `the`, `small`, `world`, `of`, `programming`]))


// function shortcut (string) {
//     let str = `aeiou`;
//     for(let i = 0; i < string.length; i++){
//         for(let j = 0; j < str.length; j++){
//             console.log(string[i], str[j])
//             if(string[i] === str[j]){
//                 string = string.slice(0, i) + string.slice(i + 1);
//                 i--;
//             }
//         }
//     }
//     return string;
//   }


// console.log(shortcut(`daniel`))
// function repeatStr (n, s) {
//     let str = s
//     while(n-1 > 0){
//         str += s;
//         n--;
//     }
//     return str;
//   }

//   console.log(repeatStr(4, `Dan`))