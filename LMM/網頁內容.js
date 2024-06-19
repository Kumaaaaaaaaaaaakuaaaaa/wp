const main = document.querySelector('main')

let key = "fc10882a83710937fbdb936f9ab8213912dfb96e"
async function groqChat(q) {
    // 使用 fetch 函數向 API 發送 POST 請求
    const jsonResponse = await fetch("https://api.groq.com/openai/v1/chat/completions", 
    {
        // 將請求內容轉換為 JSON 字串格式
        body: JSON.stringify({
            "model": "llama3-8b-8192", // 指定模型
            "messages": [{"role": "user", "content": q}], // 傳遞用戶的訊息
            "temperature": 0.7 // 設定溫度，影響回答的變化程度
        }),
        method: 'POST', // 設定請求方法為 POST
        headers: {
            'Content-Type': 'application/json', // 設定內容類型為 JSON
            'Authorization': `Bearer ${key}`, // 使用 Bearer token 進行授權
        }
    })
    // 將回應轉換為 JSON 格式
    const jsonData = await jsonResponse.json()
    console.log(JSON.stringify(jsonData, null, 2)) // 在控制台打印格式化後的 JSON 數據
    return jsonData.choices[0].message.content // 返回 API 回答的內容
}

async function chat() {
    let qNode = document.querySelector('#question') // 獲取問題元素
    let responseNode = document.querySelector('#response') // 獲取回答元素
    responseNode.innerText = '詢問 ChatGPT 中，請稍等幾秒鐘 ...' // 顯示等待訊息
    let answer = await groqChat(qNode.value) // 等待 groqChat 函數的回答
    responseNode.innerText = answer // 將回答顯示在回答元素中
}
