import "./index.css";
import { Composition, CalculateMetadataFunction, staticFile } from "remotion";
import { episodes, Episode } from "./config/episodes";
import { getAudioDurationInSeconds } from "@remotion/media-utils";

export const RemotionRoot: React.FC = () => {

  const calculateMetadata: CalculateMetadataFunction<any> = async ({ props }) => {
    // We fetch the durations of all offline audio files
    const audioFiles = [
      staticFile("audio/intro.wav"),
      staticFile("audio/why-python.wav"),
      staticFile("audio/installation.wav"),
      staticFile("audio/first-program.wav"),
      staticFile("audio/indentation.wav"),
      staticFile("audio/comments-wrapup.wav"),
    ];

    // Fallback static duration if fetching fails
    let totalDurationInSeconds = 2610 / 30; // Original hardcoded duration

    try {
      const metadataPromises = audioFiles.map((src) => getAudioDurationInSeconds(src));
      const allMetadata = await Promise.all(metadataPromises);

      totalDurationInSeconds = allMetadata.reduce(
        (sum, durationInSeconds) => sum + durationInSeconds,
        0
      );

      // Add a few seconds buffer for transitions/visual pacing
      totalDurationInSeconds += 5;
    } catch (err) {
      console.warn("Failed to dynamic calculate audio duration", err);
    }

    return {
      durationInFrames: Math.ceil(totalDurationInSeconds * 30),
    };
  };

  return (
    <>
      {episodes.map((episode) => (
        <Composition
          key={episode.id}
          id={episode.id}
          component={episode.component}
          durationInFrames={episode.durationInFrames}
          fps={episode.fps}
          width={episode.width}
          height={episode.height}
          calculateMetadata={calculateMetadata}
        />
      ))}
    </>
  );
};
