const textToSpeech = require('@google-cloud/text-to-speech');
const fs = require('fs');
const util = require('util');
const path = require('path');

/**
 * Generates audio file from text using Google Cloud Text-to-Speech
 * @param {string} text The text to convert to speech (can be SSML)
 * @param {string} outputPath Where to save the resulting audio file
 * @param {Object} options Voice and audio configuration
 */
async function generateSpeech(text, outputPath, options = {}) {
  const client = new textToSpeech.TextToSpeechClient();

  const request = {
    input: text.trim().startsWith('<speak>') ? { ssml: text } : { text: text },
    voice: {
      languageCode: options.languageCode || 'en-US',
      name: options.voiceName || 'en-US-Studio-O',
      ssmlGender: options.ssmlGender || 'FEMALE',
    },
    audioConfig: {
      audioEncoding: 'MP3',
      pitch: options.pitch || 0,
      speakingRate: options.speakingRate || 1.0,
    },
  };

  try {
    const [response] = await client.synthesizeSpeech(request);
    const writeFile = util.promisify(fs.writeFile);
    await writeFile(outputPath, response.audioContent, 'binary');
    console.log(`Audio content written to file: ${outputPath}`);
  } catch (error) {
    console.error('ERROR:', error);
  }
}

// Example usage if run directly
if (require.main === module) {
  const args = process.argv.slice(2);
  if (args.length < 2) {
    console.log('Usage: node generate-tts.js <text_or_ssml> <output_path>');
    process.exit(1);
  }

  const text = args[0];
  const outPath = path.resolve(args[1]);
  generateSpeech(text, outPath).catch(console.error);
}

module.exports = { generateSpeech };
