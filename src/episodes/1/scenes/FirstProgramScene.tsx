import React from 'react';
import { AbsoluteFill, Audio, staticFile } from 'remotion';
import { CodeBlock } from '../../../components/CodeBlock';

const code = `# Save as hello.py
print("Hello, World!")
print("Welcome to Python programming")`;

export const FirstProgramScene: React.FC = () => {
    return (
        <AbsoluteFill className="bg-[#0a0a0a] flex items-center justify-center p-20">
            <Audio src={staticFile("audio/first-program.wav")} />

            <div className="w-full max-w-4xl">
                <div className="mb-6">
                    <h2 className="text-2xl font-bold text-gray-400 mb-2">hello.py</h2>
                    <hr className="border-gray-800" />
                </div>

                <CodeBlock
                    code={code}
                    language="python"
                    startFrame={60}
                    typingSpeed={0.2}
                />
            </div>
        </AbsoluteFill>
    );
};
