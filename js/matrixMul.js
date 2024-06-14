//寫一個函數做矩陣相乘 matrixMul(a,b)

function matrixMul(a, b) {
    let c = [];
    for (let i = 0; i < a.length; i++) {
        c[i] = [0, 0];
        for (let j = 0; j < a[i].length; j++) {
            for(let k = 0;k < a.length; k++){
                c[i][j] += a[i][k] * b[k][j];
            }
        }
    }
    return c;
}

console.log(matrixMul([[[2],[3]], [[6],[7]]] , [[[4], [5]], [[8],[9]]]));
