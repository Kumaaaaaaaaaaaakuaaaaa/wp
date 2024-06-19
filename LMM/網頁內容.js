// 獲取頁面元素
const qNode = document.querySelector('#question');
const responseNode = document.querySelector('#response');

// 定義 API 金鑰和 groqChat 函數
let key = "fc10882a83710937fbdb936f9ab8213912dfb96e";
async function groqChat(q) {
    // ...您現有的 groqChat 函數代碼...
}

// 定義 chat 函數來處理問題和回答
async function chat() {
    try {
        // 顯示等待訊息
        responseNode.innerText = '詢問 ChatGPT 中，請稍等幾秒鐘 ...';
        // 獲取回答並顯示
        let answer = await groqChat(qNode.value);
        responseNode.innerText = answer;
    } catch (error) {
        // 處理錯誤情況
        responseNode.innerText = '抱歉，無法獲取回答。';
        console.error('問題發送錯誤:', error);
    }
}

// 為問題輸入框綁定事件，當按下 Enter 鍵時觸發 chat 函數
qNode.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        chat();
    }
});// 獲取頁面元素
const qNode = document.querySelector('#question');
const responseNode = document.querySelector('#response');

// 定義 API 金鑰和 groqChat 函數
let key = "您的API金鑰";
async function groqChat(q) {
    // ...您現有的 groqChat 函數代碼...
}

// 定義 chat 函數來處理問題和回答
async function chat() {
    try {
        // 顯示等待訊息
        responseNode.innerText = '詢問 ChatGPT 中，請稍等幾秒鐘 ...';
        // 獲取回答並顯示
        let answer = await groqChat(qNode.value);
        responseNode.innerText = answer;
    } catch (error) {
        // 處理錯誤情況
        responseNode.innerText = '抱歉，無法獲取回答。';
        console.error('問題發送錯誤:', error);
    }
}

// 為問題輸入框綁定事件，當按下 Enter 鍵時觸發 chat 函數
qNode.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        chat();
    }
});// 獲取頁面元素
const qNode = document.querySelector('#question');
const responseNode = document.querySelector('#response');

// 定義 API 金鑰和 groqChat 函數
let key = "您的API金鑰";
async function groqChat(q) {
    // ...您現有的 groqChat 函數代碼...
}

// 定義 chat 函數來處理問題和回答
async function chat() {
    try {
        // 顯示等待訊息
        responseNode.innerText = '詢問 ChatGPT 中，請稍等幾秒鐘 ...';
        // 獲取回答並顯示
        let answer = await groqChat(qNode.value);
        responseNode.innerText = answer;
    } catch (error) {
        // 處理錯誤情況
        responseNode.innerText = '抱歉，無法獲取回答。';
        console.error('問題發送錯誤:', error);
    }
}

// 為問題輸入框綁定事件，當按下 Enter 鍵時觸發 chat 函數
qNode.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        chat();
    }
});// 獲取頁面元素
const qNode = document.querySelector('#question');
const responseNode = document.querySelector('#response');

// 定義 API 金鑰和 groqChat 函數
let key = "您的API金鑰";
async function groqChat(q) {
    // ...您現有的 groqChat 函數代碼...
}

// 定義 chat 函數來處理問題和回答
async function chat() {
    try {
        // 顯示等待訊息
        responseNode.innerText = '詢問 ChatGPT 中，請稍等幾秒鐘 ...';
        // 獲取回答並顯示
        let answer = await groqChat(qNode.value);
        responseNode.innerText = answer;
    } catch (error) {
        // 處理錯誤情況
        responseNode.innerText = '抱歉，無法獲取回答。';
        console.error('問題發送錯誤:', error);
    }
}

// 為問題輸入框綁定事件，當按下 Enter 鍵時觸發 chat 函數
qNode.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        chat();
    }
});
