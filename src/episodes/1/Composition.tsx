import { Series } from 'remotion';
import { IntroScene } from './scenes/IntroScene';
import { WhyPythonScene } from './scenes/WhyPythonScene';
import { TerminalDemoScene } from './scenes/TerminalDemoScene';
import { FirstProgramScene } from './scenes/FirstProgramScene';
import { IndentationScene } from './scenes/IndentationScene';
import { CommentsScene } from './scenes/CommentsScene';

// Total frames calculated based on audio lengths (Approximate for 30fps)
// 1. Intro: ~15s -> 450
// 2. Why Python: ~20s -> 600
// 3. Installation/Shell Intro: ~12s -> 360
// 4. Shell Demo: ~10s -> 300
// 5. First Program: ~15s -> 450
// 6. Indentation: ~12s -> 360
// 7. Comments wrapup: ~15s -> 450

export const MyComposition: React.FC = () => {
  return (
    <Series>
      <Series.Sequence durationInFrames={450}>
        <IntroScene />
      </Series.Sequence>

      <Series.Sequence durationInFrames={600}>
        <WhyPythonScene />
      </Series.Sequence>

      {/* We combine installation and shell demo here */}
      <Series.Sequence durationInFrames={300}>
        <TerminalDemoScene />
      </Series.Sequence>

      <Series.Sequence durationInFrames={450}>
        <FirstProgramScene />
      </Series.Sequence>

      <Series.Sequence durationInFrames={360}>
        <IndentationScene />
      </Series.Sequence>

      <Series.Sequence durationInFrames={450}>
        <CommentsScene />
      </Series.Sequence>

      {/* Outro could go here */}
    </Series>
  );
};
