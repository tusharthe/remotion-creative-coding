import React from 'react';
import { AbsoluteFill, Audio, staticFile } from 'remotion';
import { CodeBlock } from '../../../components/CodeBlock';

const code = `# This is a single-line comment

"""
This is a multi-line comment.
Useful for documentation!
"""

x = 10 # Inline comment after code`;

export const CommentsScene: React.FC = () => {
    return (
        <AbsoluteFill className="bg-[#050505] flex items-center justify-center p-20">
            <Audio src={staticFile("audio/comments-wrapup.wav")} />

            <div className="w-full max-w-4xl relative flex flex-col gap-12">
                <div className="mb-2">
                    <h2 className="text-3xl font-bold text-gray-200 mb-2">Comments & Keywords</h2>
                    <p className="text-xl text-gray-500">Leaving notes for yourself or other developers</p>
                </div>

                <CodeBlock
                    code={code}
                    language="python"
                    startFrame={20}
                    typingSpeed={0.8}
                />

                {/* Floating Keywords (Animated later or static for now) */}
                <div className="flex gap-4 mt-8 flex-wrap">
                    {['if', 'for', 'def', 'class', 'True', 'False', 'None'].map((kw, i) => (
                        <span
                            key={i}
                            className="px-4 py-2 bg-blue-900/40 text-blue-300 font-mono text-xl rounded-lg border border-blue-500/30"
                        >
                            {kw}
                        </span>
                    ))}
                </div>
            </div>
        </AbsoluteFill>
    );
};
