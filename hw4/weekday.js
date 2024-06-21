//請寫一個函數 weekday(str) 可以把星期幾的英文轉換成數字（0,1,2,3,4,5,6) (Sunday 是 0)

function weekday(str){
    var dict={"sunday":"0", "monday":"1", "tuesday":"2", "wednesday":"3", "thursday":"4", "friday":"5", "saterday":"6"};
    return dict[str];
}

console.log("weekday(monday)",weekday("monday"));
