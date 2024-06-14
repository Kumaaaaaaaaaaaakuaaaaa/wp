//寫一個函數做矩陣相加 matrixAdd(a,b)

function matrixAdd(a,b){
    let c = [];
    for(let i = 0; i<a.length; i++){
        c[i] = [];
        for(let j = 0; j<a[i].length; j++){
            c[i][j] = a[i][j] + b[i][j];
        }
    }
    return c;
}

console.log(matrixAdd([[100],[50]], [[350],[700]]));
