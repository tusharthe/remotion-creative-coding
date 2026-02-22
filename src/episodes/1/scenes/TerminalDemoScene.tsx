import React from 'react';
import { AbsoluteFill, Audio, staticFile } from 'remotion';
import { Terminal, TerminalOutput } from '../../../components/Terminal';

export const TerminalDemoScene: React.FC = () => {
    return (
        <AbsoluteFill className="bg-[#111] flex items-center justify-center p-20">
            <Audio src={staticFile("audio/installation.wav")} />

            <Terminal title="python3">
                <TerminalOutput
                    command='print("Hello, Python!")'
                    output='Hello, Python!'
                    startFrame={30}
                    typingSpeed={0.3}
                />
                <TerminalOutput
                    command='2 + 2'
                    output='4'
                    startFrame={150}
                    typingSpeed={0.3}
                />
                <TerminalOutput
                    prompt='>>>'
                    command=''
                    startFrame={250}
                />
            </Terminal>
        </AbsoluteFill>
    );
};
