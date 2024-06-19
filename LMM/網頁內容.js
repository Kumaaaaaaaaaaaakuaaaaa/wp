const main = document.querySelector('main')

let key = "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"

async function groqChat(q) {

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

