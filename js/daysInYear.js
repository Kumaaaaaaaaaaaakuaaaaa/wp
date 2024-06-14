//請寫一個函數 daysInYear(n) 傳回西元 n 年應該有幾天
//例如 daysInYear(1991) => 365
//daysInYear(2004) => 366
//daysInYear(1900) => 365
//daysInYear(2000) => 366 # 對 400 取餘數為 0

function daysInYear(n){
    let day = 365;
    if(n%400 == 0 || n%4==0 & n%100 != 0){
        day = 366;
    }
    return day;
}

console.log(daysInYear(2001));
