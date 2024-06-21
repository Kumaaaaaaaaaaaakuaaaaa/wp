//請寫一個 min(a,b) 函數傳回 a, b 裡較小的那個數字

function min(a,b){
    if(a>b) return b;
    else if(a<b) return a;
    else return "same";
}
console.log("min(15,90)",min(15,90));
console.log("min(15,90)",min(105,90));
console.log("min(15,90)",min(16,16));
