function workOnStrings(a, b) {
    let strA = ``;
    let strB = ``;
    for(let i = 0; i < b.length; i++) {
        let num = 0;
        // console.log(`b[i] `, b[i])
        for(let j = 0; j < a.length; j++) {
            // console.log(`a[j] `, a[j])
            if(b[i].toLowerCase() === a[j].toLowerCase()) {
                num++;
                // console.log(`num `, num)
            }
        }
        let char = b[i];
        // console.log(`char `, char)
        while(num > 0) {
            if(char === char.toUpperCase()) {
                char = char.toLowerCase();
                num--;
                // console.log(`char `, char)
            } else if (char === char.toLowerCase()) {
                char = char.toUpperCase();
                num--;
                // console.log(`char `, char)
            }
        }
        strB += char;
        // console.log(`strB `, strB)
    }
    for(let k = 0; k < a.length; k++) {
        let num = 0;
        // console.log(`a[k] `, a[k])
        for(let l = 0; l < b.length; l++) {
            // console.log(`b[l] `, b[l])
            if(a[k].toLowerCase() === b[l].toLowerCase()) {
                num++;
                // console.log(`num `, num);
            }
        }
        let char = a[k];
        // console.log(`char `, char)
        while(num > 0) {
            if(char === char.toUpperCase()) {
                char = char.toLowerCase();
                num--;
                // console.log(`num `, num)
                // console.log(`char `, char)
            } else if(char === char.toLowerCase()) {
                char = char.toUpperCase();
                num--;
                // console.log(`num `, num)
                // console.log(`char `, char)
            }
        }
        strA += char;
        // console.log(strA)
    }
    return strA + strB;
  }