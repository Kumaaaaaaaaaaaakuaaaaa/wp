//印出所有小於 n 的質數總和 sumPrime(n)

function sumPrime(n){
    let sum = 0;
    for(let i = 3;i < n;i++){
        let a =true;
        for(let j = 2;j < i;j++){
            if(i % j == 0){
                a = false;
                break;
            }
        }
        if (a){
            sum += i;
        }
    }
    return sum;
}

console.log("sumPrime(10)",sumPrime(10));
console.log("sumPrime(20)",sumPrime(20));
