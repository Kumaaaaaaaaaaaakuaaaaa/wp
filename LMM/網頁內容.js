const main = document.querySelector('main')

let key = "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"

async function groqChat(q) {   /*定義Q*/
    try {
        const jsonResponse = await fetch("https://api.groq.com/openai/v1/chat/completions", {
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
        if (!jsonResponse.ok) {
            throw new Error(`API 請求失敗，狀態碼: ${jsonResponse.status}`);
        }
        const jsonData = await jsonResponse.json();
        console.log(JSON.stringify(jsonData, null, 2));
        return jsonData.choices[0].message.content;
    } catch (error) {
        console.error('發生錯誤:', error);
        // 處理錯誤，例如顯示錯誤消息
        return `發生錯誤: ${error.message}`;
    }
}

let a ;

if (a == "喜歡什麼") {
    console.log("睡覺");
} else if (a == "不喜歡什麼") {
    console.log("起床");
} else {
   groqChat(q) ;
}

