//請寫一個 filter(a, f) 函數可以根據 f 成功或失敗過濾掉那些不合的內容
//例如 filter([1,2,3,4], function (x) { return x%2 == 1; }) 會傳回 [1,3]

function filter(a, f) {
    let result = [];
    for (let i = 0; i < a.length; i++) {
        if (f(a[i])) {
            result.push(a[i]);
        }
    }
    return result;
}

// 示例用法
let arr = [1, 2, 3, 4];
let filteredArr = filter(arr, function (x) { return x % 2 === 1; });
console.log(filteredArr); // 输出 [1, 3]


