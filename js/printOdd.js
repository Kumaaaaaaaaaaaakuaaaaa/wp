//印出小於 n 的所有奇數 printOdd(n)

function printOdd(n){
    for(let i = 1;i<n;i++){
        if(i % 2 != 0) console.log(i);
    }
}
printOdd(100);
