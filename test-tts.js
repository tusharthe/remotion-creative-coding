const { GoogleGenAI } = require('@google/genai');
const fs = require('fs');

async function testTTS() {
    try {
        const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

        console.log("Testing text-to-speech with @google/genai...");
        const response = await ai.models.generateContent({
            model: 'gemini-2.5-pro-preview-tts',
            contents: 'Hello, this is a test of the Gemini TTS system.',
            config: {
                responseModalities: ["AUDIO"]
            }
        });

        console.log("Response text:", response.text);
        if (response.candidates && response.candidates[0] && response.candidates[0].content.parts[0].inlineData) {
            console.log("Mime type:", response.candidates[0].content.parts[0].inlineData.mimeType);
            const base64Audio = response.candidates[0].content.parts[0].inlineData.data;
            fs.writeFileSync('test_audio.mp3', Buffer.from(base64Audio, 'base64'));
            console.log("Saved test_audio.mp3");
        } else {
            console.log("Detailed response parts:", JSON.stringify(response, null, 2));
        }

    } catch (e) {
        console.error("Error with SDK:", e.message);

        console.log("\nTrying native fetch predict endpoint...");
        try {
            const res = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-pro-preview-tts:predict?key=${process.env.GEMINI_API_KEY}`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    instances: [{ text: "Hello from native fetch" }]
                })
            });
            const data = await res.json();
            console.log("Native fetch response:", JSON.stringify(data, null, 2));
        } catch (err2) {
            console.error("Error with fetch predict:", err2.message);
        }
    }
}

testTTS();
