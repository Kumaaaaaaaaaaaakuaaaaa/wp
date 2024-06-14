//寫一個函數做向量相加 vectorAdd(a,b)

function vectorAdd(a, b){
    let c = [];
    for(let i=0;i<a.length;i++){
        c[i] = a[i] + b[i]; 
    }
    return c;
}

console.log(vectorAdd([75,654],[852,-52]));
