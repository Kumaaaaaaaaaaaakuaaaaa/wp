//寫一個函數判斷 n 是否為質數 isPrime(n)

function isPrime(n){
    for(let i = 2;i<n;i++){
        if(n % i == 0){
            return false;
        }
    }
    return true;
}

console.log("isPrime(10)",isPrime(10));
console.log("isPrime(11)",isPrime(11));
