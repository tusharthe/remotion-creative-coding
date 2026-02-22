
const fs = require('fs');
const util = require('util');
const path = require('path');

async function generateSpeech(text, outputPath, options = {}) {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    console.error("ERROR: GEMINI_API_KEY environment variable is not set.");
    return;
  }

  const voiceName = options.voiceName || 'Aoede';  // Gemini TTS voices: Aoede, Charon, Fenrir, Kore, Puck

  const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-tts:generateContent?key=${apiKey}`;

  let cleanText = text.trim();
  if (cleanText.startsWith('<speak>')) {
    cleanText = cleanText.replace(/<\/?speak>/g, '').trim();
  }

  const requestBody = {
    contents: [{
      parts: [{ text: cleanText }]
    }],
    generationConfig: {
      responseModalities: ["AUDIO"],
      speechConfig: {
        voiceConfig: {
          prebuiltVoiceConfig: {
            voiceName: voiceName
          }
        }
      }
    }
  };

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(requestBody)
    });

    if (!response.ok) {
      const errBody = await response.text();
      throw new Error(`API Error ${response.status}: ${errBody}`);
    }

    const data = await response.json();

    if (data.candidates && data.candidates[0].content && data.candidates[0].content.parts[0].inlineData) {
      const audioData = data.candidates[0].content.parts[0].inlineData.data;
      const buffer = Buffer.from(audioData, 'base64');

      const fs = require('fs');
      fs.writeFileSync(outputPath, buffer);
      console.log(`Audio content written to file: ${outputPath}`);
    } else {
      console.error("ERROR: No inlineData found in response:", JSON.stringify(data, null, 2));
    }

  } catch (error) {
    console.error('ERROR during generation:', error);
  }
}

const scenes = [
  {
    id: 'intro',
    text: `<speak>
      Welcome to the Python Master Class. Whether you want to build web apps, dive into data science, or train the next big AI model, it all starts right here. 
      Python is the world's most dominant programming language, known for its elegant, readable syntax. 
      It actually started as a hobby project by Guido van Rossum in the late 1980s and was named after Monty Python's Flying Circus—not the snake!
    </speak>`
  },
  {
    id: 'why-python',
    text: `<speak>
      Why should you learn Python? First, it's incredibly easy to learn with an English-like syntax. 
      It's interpreted, meaning no compiling, and dynamically typed. It has 'batteries included'—meaning its standard library is huge. 
      And what can you build? Everything. From backend web servers and desktop apps to massive Machine Learning models.
    </speak>`
  },
  {
    id: 'installation',
    text: `<speak>
      To get started, simply download Python from python.org. Make sure you check 'Add Python to PATH' during installation. 
      Once installed, you can open your terminal and type 'python' to enter the interactive shell.
    </speak>`
  },
  {
    id: 'shell-demo',
    text: `<speak>
      The shell is perfect for testing quick logic and doing math on the fly. 
      Look how simple it is to print a message or evaluate an expression.
    </speak>`
  },
  {
    id: 'first-program',
    text: `<speak>
      But for real projects, you'll save your code in files with a dot P Y extension. 
      And when writing Python, there are a few golden rules: 
      It is case-sensitive, statements simply end at the line break—no nasty semicolons required—and most importantly, indentation matters.
    </speak>`
  },
  {
    id: 'indentation',
    text: `<speak>
      Python uses indentation, typically four spaces, to define code blocks instead of curly braces. 
      If you mix tabs and spaces, or forget to indent, your code will crash. 
      Indentation is not optional—it's part of the language!
    </speak>`
  },
  {
    id: 'comments-wrapup',
    text: `<speak>
      To leave notes for yourself or other developers, use the hash symbol for single-line comments, or triple quotes for multi-line explanations. 
      Finally, keep in mind there are reserved keywords in Python—like if, for, def, class, True, and False—that you cannot use as variable names.
    </speak>`
  },
  {
    id: 'outro',
    text: `<speak>
      And that's your first taste of Python. In the next chapter, we're going to dive into Variables and Data Types. 
      Make sure to subscribe, and I'll see you there!
    </speak>`
  }
];

async function run() {
  const outputDir = path.resolve(__dirname, '../public/audio');
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

  for (const scene of scenes) {
    const outPath = path.join(outputDir, `${scene.id}.mp3`);
    await generateSpeech(scene.text, outPath);
    console.log(`Waiting 21s to respect Gemini API rate limits (3 requests per minute)...`);
    await sleep(21000); // 3 requests per minute limit = wait 21 seconds
  }
}

if (require.main === module) {
  run().catch(console.error);
}

module.exports = { generateSpeech };
