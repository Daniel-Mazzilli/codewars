function insideOut(x){
    let arr = x.split(` `);
    let finalArr = [];
    for(const word of arr){
        let letterArr = word.split(``);
        if(letterArr.length % 2){
            let buildArr = letterArr.splice((letterArr.length / 2).toFixed() -1 , 1);
            for(let l = 0; l < letterArr.length; l++){
                if(l < (letterArr.length / 2)){
                    buildArr.unshift(letterArr[l]);
                } else {
                    buildArr.splice((letterArr.length / 2) + 1, 0, letterArr[l]);
                }
            }
            finalArr.push(buildArr.join(``));
        } else{
            let buildArr = [];
            for(let l = 0; l < letterArr.length; l++){
                if(l < (letterArr.length / 2)){
                    buildArr.unshift(letterArr[l]);
                } else {
                    buildArr.splice((letterArr.length / 2), 0, letterArr[l]);
                }
            }
            finalArr.push(buildArr.join(``));
        }
    }
    return finalArr.join(` `);
}


console.log(insideOut('man i need a taxi up to ubud'))