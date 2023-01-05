import React, { useState, useEffect } from 'react'
import '../styles/ai-chat.css';
const AiChat = () => {
    const [prompt, setPrompt] = useState('');
    const [text, setText] = useState('');






    const generateText = async (event) => {
        event.preventDefault();

        const apiKey = process.env.REACT_APP_OPENAI

        const model = 'text-davinci-003';

        const requestOptions = {
            method: 'POST',
            headers: {
                "Content-Type": 'application/json',
                "Authorization": `Bearer ${apiKey}`
            },
            body: JSON.stringify({
                model: model,
                prompt: prompt,
                max_tokens: 100,
            })

        };

        const response = await fetch('https://api.openai.com/v1/completions',
            requestOptions);

        const responseJson = await response.text();

        const generatedText = JSON.parse(responseJson).choices[0].text;


        setText(generatedText)




    }
    return (
        <div>
            <form onSubmit={generateText} className="form">
                <label>
                    Prompt:
                    <input type="text" value={prompt} onChange={e => setPrompt(e.target.value)} />
                </label>
                <button type="submit" className="button">Generate Text</button>
            </form>
            <div className="text-container">
                <p className="text-bubble text">{text}</p>
            </div>
        </div>
    )
}

export default AiChat