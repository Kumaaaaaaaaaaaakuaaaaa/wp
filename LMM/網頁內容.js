// 獲取頁面元素
const qNode = document.querySelector('#question');
const responseNode = document.querySelector('#response');

// 定義 API 金鑰和 groqChat 函數
let key = "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";
async function groqChat(q) {
    try {
        const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${key}`,
            },
            body: JSON.stringify({
                "model": "llama3-8b-8192",
                "messages": [{"role": "user", "content": q}],
                "temperature": 0.7
            }),
        });
        if (!response.ok) {
            throw new Error('API 請求失敗');
        }
        const jsonData = await response.json();
        return jsonData.choices[0].message.content;
    } catch (error) {
        console.error('groqChat 函數錯誤:', error);
        throw error; // 將錯誤傳遞給 chat 函數
    }
}

// 定義 chat 函數來處理問題和回答
async function chat() {
    responseNode.innerText = '詢問 ChatGPT 中，請稍等幾秒鐘 ...';
    try {
        const answer = await groqChat(qNode.value);
        responseNode.innerText = answer;
    } catch (error) {
        responseNode.innerText = '抱歉，無法獲取回答。';
    }
}

// 為問題輸入框綁定事件，當按下 Enter 鍵時觸發 chat 函數
qNode.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        chat();
    }
});
