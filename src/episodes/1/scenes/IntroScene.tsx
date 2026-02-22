import React from 'react';
import { AbsoluteFill, interpolate, useCurrentFrame, Audio, staticFile } from 'remotion';

export const IntroScene: React.FC = () => {
    const frame = useCurrentFrame();
    // No config needed currently

    const opacity = interpolate(frame, [0, 20], [0, 1], {
        extrapolateRight: 'clamp',
    });

    const titleScale = interpolate(frame, [0, 50], [0.8, 1], {
        extrapolateRight: 'clamp',
    });

    return (
        <AbsoluteFill className="bg-neutral-900 flex items-center justify-center overflow-hidden">
            <Audio src={staticFile("audio/intro.wav")} />

            {/* Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-blue-900/20" />

            <div
                style={{ opacity, transform: `scale(${titleScale})` }}
                className="z-10 text-center"
            >
                <h1 className="text-8xl font-black text-white tracking-tighter mb-4">
                    PYTHON <span className="text-blue-500">MASTER</span> CLASS
                </h1>
                <p className="text-3xl text-gray-400 font-light tracking-widest uppercase">
                    Chapter 1: Introduction to Python
                </p>
            </div>

            {/* Decorative Python Logo (Placeholder/CSS) */}
            <div
                className="absolute -bottom-20 -right-20 w-96 h-96 opacity-10 bg-blue-500 blur-[100px] rounded-full"
            />
        </AbsoluteFill>
    );
};
