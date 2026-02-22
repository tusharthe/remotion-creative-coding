import React from 'react';
import { useCurrentFrame } from 'remotion';

export const Terminal: React.FC<{
    children: React.ReactNode;
    title?: string;
}> = ({ children, title = 'terminal' }) => {
    return (
        <div className="w-full max-w-3xl rounded-xl overflow-hidden shadow-2xl bg-[#1e1e1e] border border-gray-700">
            {/* Mac-style title bar */}
            <div className="flex items-center px-4 py-2 bg-[#323232] gap-2">
                <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                    <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                    <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
                </div>
                <div className="flex-1 text-center text-xs text-gray-400 font-sans tracking-wide">
                    {title}
                </div>
            </div>
            {/* Content area */}
            <div className="p-6 font-mono text-lg text-gray-300 min-h-[300px]">
                {children}
            </div>
        </div>
    );
};

export const TerminalOutput: React.FC<{
    prompt?: string;
    command?: string;
    output?: string;
    typingSpeed?: number;
    startFrame?: number;
}> = ({ prompt = '>>>', command = '', output = '', typingSpeed = 0.5, startFrame = 0 }) => {
    const frame = useCurrentFrame();
    const currentFrame = Math.max(0, frame - startFrame);

    const charsToShow = Math.floor(currentFrame * typingSpeed);
    const displayedCommand = command.slice(0, charsToShow);
    const isCommandFinished = charsToShow >= command.length;

    // Only show output after command is finished + some delay
    const outputDelay = 5;
    const showOutput = isCommandFinished && currentFrame > (command.length / typingSpeed) + outputDelay;

    return (
        <div className="mb-4">
            <div className="flex gap-2">
                <span className="text-blue-400">{prompt}</span>
                <span>{displayedCommand}</span>
                {!isCommandFinished && (
                    <span className="w-2 h-5 bg-gray-400 animate-pulse" />
                )}
            </div>
            {showOutput && (
                <div className="mt-1 text-green-400 whitespace-pre-wrap">{output}</div>
            )}
        </div>
    );
};
