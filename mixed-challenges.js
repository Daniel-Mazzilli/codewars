
let person = {name:"Sally", city:"Glasgow", favourite_products:"toasters"}

function personalise( campaign, person){
  while(campaign.includes(`<NAME>`)){
    campaign = campaign.replace(`<NAME>`, person.name);   
  }
  while(campaign.includes(`<CITY>`)){
    campaign = campaign.replace(`<CITY>`, person.city);   
  }
  while(campaign.includes(`<FAVOURITE PRODUCTS>`)){
    campaign = campaign.replace(`<FAVOURITE PRODUCTS>`, person.favourite_products);   
  }
  return campaign;
}
let message = `"Hello <NAME>","how is the weather in <CITY> today?","We wanted to let you know that <FAVOURITE PRODUCTS> are on sale today only!"`

console.log(personalise(message, person))


// // Find the Capitals

// function capital(capitals) {
//   let arr = [];
//   for(const cap of capitals) {
//     console.log(cap)
//       if(cap[`state`]) {
//         arr.push(`The capital of ${cap[`state`]} is ${cap[`capital`]}`);
//       } else if(cap[`country`]) {
//         arr.push(`The capital of ${cap[`country`]} is ${cap[`capital`]}`);
//       }
//     }
//     return arr;
// }

// console.log(capital([{"state" : 'Maine', capital: 'Augusta'}, {country: 'Spain', "capital" : "Madrid"}]))


// conv hash to array
// function convertHashToArray(hash){
//   arr = Object.entries(hash);
//   arr.sort();
//   return arr;
// }
// Consecutive Vowels in a String
// function getTheVowels(word) {
//   let count = 0;
//   let vow = [`a`, `e`, `i`, `o`, `u`];
//   for(let i = 0; word.length > 0; i++){
//     let location = word.indexOf(vow[i])
//     if (i === 4){
//       i = -1;
//     }
//     if(location === -1){
//       break;
//     } else{
//       count ++;
//       word = word.slice(location)
//     }
//   }
//   return count;
// }

// console.log(getTheVowels(`agrtertyfikfmroyrntbvsukldkfa`))
// Is my string repeating the same character over and over ?
// function hasOneChar(s) {
//     let arr = s.split(``);
//     arr.sort();
//     if(arr.length > 1){
//       if(arr[0] !== arr[1] || arr[arr.length-2] !== arr[arr.length-1]){
//       return false;
//       }
//     }
//     return true;
//   }

// simple string characters

// function solve(s){
//     let up = 0;
//     let low = 0;
//     let num = 0;
//     let other = 0;
//     let arr = [];
//     for(let i = 0; i < s.length; i++){
//         if(1 / Number(s[i])){
//             console.log(`num `, s[i])
//             num++;
//         } else if(`*'&~!@#$%^()-_+={[}]\|?/>.<,:;"`.includes(s[i])){
//             console.log(`other `, s[i])
//             other++;
//         } else if(s[i] === s[i].toUpperCase()){
//             console.log(`up `, s[i])
//             up++;
//         } else if(s[i] === s[i].toLowerCase()){
//             console.log(`low `, s[i])
//             low++;
//         }
//     }
//     arr.push(up, low, num, other);
//     return arr;
// }

// console.log(solve(`"@mw>0=QD-iAx!rp9TaG?o&M%l$34L.nbft"`))

// Unique string characters

// function solve(a, b){
//     let str = ``;
//     for(let i = 0; i < a.length; i++){
//         if(b.indexOf(a[i]) === -1){
//             str += a[i];
//         }
//     }
//     for(let i = 0; i < b.length; i++){
//         if(a.indexOf(b[i]) === -1){
//             str += b[i];
//         }
//     }
//     return str;
// };

// console.log(solve(`xyab`, `xzca`))

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