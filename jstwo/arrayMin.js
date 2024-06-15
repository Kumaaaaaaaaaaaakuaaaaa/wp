//請寫一個 arrayMin(a) 函數傳回陣列 a 裡最小的那個數字

function arrayMin(a){
    var min=a[0];
    for(let i=1; i<a.length; i++){
        if(a[i] < min) min = a[i];
    }
    return min;
}
console.log("arrayMin[15, 48, 65, 90]",arrayMin([15, 48, 65, 90, 2]));
