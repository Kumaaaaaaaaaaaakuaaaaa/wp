//請寫一個函數 countChar(str) 可以算出一個字串中，每個字出現幾次。
//例如： “aabccadeaac" => { a: 5, b:1, c:3, d:1, e:1}

function countChar(str){
    let countChar=[];
    for(var i of str){
        if(countChar[i]) countChar[i]++;
        else countChar[i] = 1;
    }
    return countChar;
}
console.log(countChar("dgffdffdfbdv"));
