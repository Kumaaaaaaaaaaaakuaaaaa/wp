//寫一個函數 lcm(a,b) 傳回 a, b 兩數字的最小公倍數。

function gcd(a,b){
    if(b == 0) return a;
    else return gcd(b,a%b); 
}

function lcm(a,b){
    return (a*b) / gcd(a,b);
}

console.log(lcm(15,24));
