//寫一個函數 gcd(a,b) 傳回 a, b 兩數字的最大公因數。

function gcd(a,b){
    if(b == 0) return a;
    else return gcd(b,a%b); 
}

console.log(gcd(3,11));
