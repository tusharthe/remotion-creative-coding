---
name: google-tts
description: Best practices for generating high-quality AI voiceovers using Google Cloud Text-to-Speech for video projects.
---

# Google Cloud Text-to-Speech (TTS) Skill

This skill provides best practices and specialized knowledge for integrating Google Cloud Text-to-Speech into video generation workflows, particularly with Remotion.

## Overview

Google Cloud TTS offers over 380+ voices across 50+ languages and variants, including high-fidelity Neural2 and Studio voices. In the context of video generation, TTS is used to create automated narrations that are perfectly synced with visual changes.

## Core Capabilities

- **High-Fidelity Voices**: Access to Neural2, Studio, and WaveNet voices.
- **SSML Support**: Fine-grained control over speech (pitch, rate, volume, emphasis).
- **Multi-language Narration**: Seamlessly create content in multiple languages.
- **Time-Syncing**: Ability to generate audio that matches the duration of video segments.

## Best Practices

### 1. Voice Selection
- Use **Studio** or **Neural2** voices for the most natural sound.
- For English (US), `en-US-Studio-O` or `en-US-Neural2-F` are excellent choices.
- Always preview voices to ensure the tone matches the video content.

### 2. Using SSML
Always wrap your speech in SSML tags for better control:
```xml
<speak>
  Hello! <break time="500ms"/> Welcome to this tutorial.
  <emphasis level="strong">Pay attention</emphasis> to this step.
  <prosody rate="fast">This part is a bit quick.</prosody>
</speak>
```

### 3. Workflow for Remotion
1. **Script Preparation**: Write the narration script in a structured format (JSON or Markdown).
2. **Audio Generation**: Use the provided scripts to generate `.mp3` or `.wav` files.
3. **Integration**: Import the audio files into your Remotion component using the `<Audio />` tag.
4. **Calculated Timing**: Use the `getAudioDurationInSeconds` utility to ensure your frames align with the audio length.

## Implementation Details

### Required Dependencies
```bash
npm install @google-cloud/text-to-speech
```

### Authentication
Ensure you have a Google Cloud Service Account with the `Cloud Text-to-Speech API` enabled. Set the environment variable:
`GOOGLE_APPLICATION_CREDENTIALS="path/to/your/service-account.json"`

## Helper Scripts
See `scripts/generate-tts.js` for an automated way to convert text files into high-quality audio assets.
