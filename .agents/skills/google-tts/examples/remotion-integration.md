# Basic Usage with Remotion

Integrating the generated audio into your Remotion component is straightforward.

### 1. Import the Audio
```tsx
import { Audio, staticFile } from 'remotion';

export const MyVideo = () => {
  return (
    <div>
      {/* Play the narration starting at frame 0 */}
      <Audio src={staticFile('narration.mp3')} />
      
      <h1>My Awesome Video</h1>
    </div>
  );
};
```

### 2. Matching Animation to Audio
Use the audio duration to drive your animation logic:

```tsx
import { useVideoConfig, Audio, staticFile } from 'remotion';

export const SyncVideo = () => {
  const { fps } = useVideoConfig();
  
  // Example: Audio is 5 seconds long
  const audioDurationInFrames = 5 * fps;

  return (
    <>
      <Audio src={staticFile('narration.mp3')} />
      <div
        style={{
          opacity: frame < audioDurationInFrames ? 1 : 0,
          transition: 'opacity 0.5s'
        }}
      >
        I am visible while the audio plays!
      </div>
    </>
  );
};
```

### 3. Folder Structure
Organize your assets consistently:
```text
public/
  audio/
    intro.mp3
    explanation.mp3
src/
  MyComp.tsx
scripts/
  generate-voiceovers.js
```
