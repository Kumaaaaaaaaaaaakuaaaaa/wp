const main = document.querySelector('main')

let key = "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"

async function groqChat(q) {
   if (!q.trim()) { 
        return "請輸入問題 感謝您! 可以嘗試輸入: 心情不好 or 如何與女友開話題 or 世界上最可愛的狗在哪?";
    }
    try{
        if(q.trim()=="心情不好"){
            return "別擔心 沒有什麼事是一支冰無法解決的! 不行的話就兩支~";
        }
        else if(q.trim()=="如何與女友開話題"){
            return "現在馬上傳給她 暖她一整天 她就會問你：她是誰? 於是你們之間就會有新的話題可以聊了";
        }
        else if(q.trim()=="世界上最可愛的狗在哪?"){
            return "在我家";
        }
   
    
    const jsonResponse = await fetch("https://api.groq.com/openai/v1/chat/completions", 
    {
        body: JSON.stringify({
            "model": "llama3-8b-8192",
            "messages": [{"role": "user", "content": q}],
            "temperature": 0.7
        }),
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',/*處理型態*/
            'Authorization': `Bearer ${key}`,
        }
    })
    const jsonData = await jsonResponse.json()
    console.log(JSON.stringify(jsonData, null, 2))
    return jsonData.choices[0].message.content
}


async function chat() {
    let qNode = document.querySelector('#question')
    let responseNode = document.querySelector('#response')
    responseNode.innerText = '詢問 ChatGPT 中，請稍等幾秒鐘 ...'
    let answer = await groqChat(qNode.value)
    responseNode.innerText = answer
}

let a ;

if (a == "喜歡什麼") {
    console.log("睡覺");
} else if (a == "不喜歡什麼") {
    console.log("起床");
} else {
   groqChat(q) ;
}

