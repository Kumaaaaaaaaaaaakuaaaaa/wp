const main = document.querySelector('main')

let key = "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"

async function groqChat(q) {
 
    const jsonResponse = await fetch("https://api.groq.com/openai/v1/chat/completions", 
    {
        body: JSON.stringify({
            "model": "llama3-8b-8192",
            "messages": [{"role": "user", "content": q }],
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

