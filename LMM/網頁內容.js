// 獲取頁面元素
const qNode = document.querySelector('#question');
const responseNode = document.querySelector('#response');

import Groq from "groq-sdk";

const groq = new Groq({ apiKey:	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 });

export async function main() {
  const chatCompletion = await getGroqChatCompletion();
  // Print the completion returned by the LLM.
  console.log(chatCompletion.choices[0]?.message?.content || "");
}

export async function getGroqChatCompletion() {
  return groq.chat.completions.create({
    messages: [
      {
        role: "user",
        content: "Explain the importance of fast language models",
      },
    ],
    model: "llama3-8b-8192",
  });
}

});
