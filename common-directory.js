function getCommonDirectoryPath(pathes){
    let str = ``;
    let brk = `no`
    for(let i = 0; i < pathes[0].length && brk === `no`; i++){
        if(pathes[0][i] === pathes[1][i]){
            str += pathes[0][i];
        } else{
            brk = `yes`
        }
    }
    for(let j = 2; j < pathes.length; j++){
        for(let k = 0; k < str.length; k++){
           if(str[k] !== pathes[j][k]){
            str = str.slice(0, k);
            break;
           } 
        }
    }

    let indexSlash = str.lastIndexOf(`/`)
    return str.slice(0, indexSlash + 1);
}

console.log(getCommonDirectoryPath([`images/otherimages/imag`, `images/atterimages/imag`]))
console.log(getCommonDirectoryPath([`/sbcdm/y0tvs/1g0e9h/ot7yv/hz6yv`, `/o7gcr/ecz087/8140f/9yco8/sh4tm`]));


//  [/sbcdm/y0tvs/1g0e9h/ot7yv/hz6yv,/o7gcr/ecz087/8140f/9yco8/sh4tm] = /, but actual ////: expected '////' to equal '/'