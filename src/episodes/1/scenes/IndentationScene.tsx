import React from 'react';
import { AbsoluteFill, useCurrentFrame, Audio, staticFile } from 'remotion';
import { CodeBlock } from '../../../components/CodeBlock';

const code = `if True:
    print("This is indented")
    print("Same block")

print("Not indented")`;

export const IndentationScene: React.FC = () => {
    const frame = useCurrentFrame();

    // Highlight effect around frames 150-250
    const isHighlighting = frame > 150 && frame < 300;

    return (
        <AbsoluteFill className="bg-[#0a0a0a] flex items-center justify-center p-20">
            <Audio src={staticFile("audio/indentation.wav")} />

            <div className="w-full max-w-4xl relative">
                <div className="mb-6">
                    <h2 className="text-3xl font-bold text-gray-200 mb-2">The Golden Rule: Indentation</h2>
                    <p className="text-xl text-gray-500">Python uses 4 spaces instead of curly braces { }</p>
                </div>

                <div style={{ opacity: isHighlighting ? 1 : 1 }} className="transition-opacity duration-300">
                    {/* We pass the full code, but we'll use CSS to dim parts of it if needed, 
               or just let the voiceover explain it while the code sits on screen */}
                    <CodeBlock
                        code={code}
                        language="python"
                        startFrame={30}
                        typingSpeed={0.5}
                    />
                </div>

                {/* Visual Focus Box showing the 4 spaces */}
                {isHighlighting && (
                    <div
                        className="absolute border-4 border-yellow-400 bg-yellow-400/20 rounded-md"
                        style={{
                            top: '190px', // Approximate position of the indent
                            left: '30px',
                            width: '80px',
                            height: '80px',
                            animation: 'pulse 2s infinite'
                        }}
                    />
                )}
            </div>
        </AbsoluteFill>
    );
};
