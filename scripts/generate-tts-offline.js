const say = require('say');
const fs = require('fs');
const path = require('path');
const util = require('util');

const scenes = [
    {
        id: 'intro',
        text: `
      Welcome to the Python Master Class. Whether you want to build web apps, dive into data science, or train the next big A I model, it all starts right here. 
      Python is the world's most dominant programming language, known for its elegant, readable syntax. 
      It actually started as a hobby project by Guido van Rossum in the late 1980s and was named after Monty Python's Flying Circus—not the snake!
    `
    },
    {
        id: 'why-python',
        text: `
      Why should you learn Python? First, it's incredibly easy to learn with an English-like syntax. 
      It's interpreted, meaning no compiling, and dynamically typed. It has batteries included—meaning its standard library is huge. 
      And what can you build? Everything. From backend web servers and desktop apps to massive Machine Learning models.
    `
    },
    {
        id: 'installation',
        text: `
      To get started, simply download Python from python dot org. Make sure you check Add Python to PATH during installation. 
      Once installed, you can open your terminal and type python to enter the interactive shell.
    `
    },
    {
        id: 'shell-demo',
        text: `
      The shell is perfect for testing quick logic and doing math on the fly. 
      Look how simple it is to print a message or evaluate an expression.
    `
    },
    {
        id: 'first-program',
        text: `
      But for real projects, you'll save your code in files with a dot P Y extension. 
      And when writing Python, there are a few golden rules: 
      It is case-sensitive, statements simply end at the line break—no nasty semicolons required—and most importantly, indentation matters.
    `
    },
    {
        id: 'indentation',
        text: `
      Python uses indentation, typically four spaces, to define code blocks instead of curly braces. 
      If you mix tabs and spaces, or forget to indent, your code will crash. 
      Indentation is not optional—it's part of the language!
    `
    },
    {
        id: 'comments-wrapup',
        text: `
      To leave notes for yourself or other developers, use the hash symbol for single-line comments, or triple quotes for multi-line explanations. 
      Finally, keep in mind there are reserved keywords in Python—like if, for, def, class, True, and False—that you cannot use as variable names.
    `
    },
    {
        id: 'outro',
        text: `
      And that's your first taste of Python. In the next chapter, we're going to dive into Variables and Data Types. 
      Make sure to subscribe, and I'll see you there!
    `
    }
];

const exportAudio = util.promisify(say.export.bind(say));

async function run() {
    const outputDir = path.resolve(__dirname, '../public/audio');
    if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir, { recursive: true });
    }

    // Use default voice on Windows. Can specify voice name (e.g., 'Microsoft David Desktop') if known.
    const voice = null;
    const speed = 1.0;

    for (const scene of scenes) {
        const outPath = path.join(outputDir, `${scene.id}.wav`);
        const cleanText = scene.text.replace(/<[^>]*>?/gm, '').trim(); // Remove any leftover SSML tags just in case

        console.log(`Generating audio for ${scene.id}...`);
        try {
            await exportAudio(cleanText, voice, speed, outPath);
            console.log(`Audio successfully written to: ${outPath}`);
        } catch (err) {
            console.error(`Error generating audio for ${scene.id}:`, err);
        }
    }
}

if (require.main === module) {
    run().then(() => console.log('Successfully generated all offline TTS files.')).catch(console.error);
}

module.exports = { run };
