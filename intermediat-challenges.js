
// Magic Index
function findMagic(arr){
  for(let i = 0; i < arr.length; i++) {
    if(arr[i] === i) {
        return i;
    }
  }
  return -1;
}