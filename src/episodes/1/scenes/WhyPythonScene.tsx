import React from 'react';
import { AbsoluteFill, interpolate, useCurrentFrame, Audio, staticFile } from 'remotion';

export const WhyPythonScene: React.FC = () => {
    const frame = useCurrentFrame();

    const titleOpacity = interpolate(frame, [0, 20], [0, 1], { extrapolateRight: 'clamp' });
    const listOpacity = interpolate(frame, [30, 50], [0, 1], { extrapolateRight: 'clamp' });

    // Staggered list items
    const features = [
        { label: "Easy to Learn", start: 60, icon: "📖" },
        { label: "Dynamically Typed", start: 90, icon: "⚡" },
        { label: "Batteries Included", start: 120, icon: "🔋" },
        { label: "AI & Machine Learning", start: 150, icon: "🤖" },
        { label: "Web Development", start: 180, icon: "🌐" },
    ];

    return (
        <AbsoluteFill className="bg-[#050505] text-white flex items-center justify-center p-20">
            <Audio src={staticFile("audio/why-python.wav")} />

            {/* Background visual placeholder (from nanobanana-pro prompt) */}
            <div className="absolute inset-0 opacity-20 bg-gradient-to-tr from-cyan-900 via-black to-purple-900" />

            <div className="w-full max-w-6xl z-10 flex flex-col gap-12">
                <h2
                    style={{ opacity: titleOpacity }}
                    className="text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300"
                >
                    Why Python?
                </h2>

                <div style={{ opacity: listOpacity }} className="grid grid-cols-2 gap-8">
                    {features.map((feat, i) => {
                        const itemOpacity = interpolate(frame, [feat.start, feat.start + 15], [0, 1], { extrapolateRight: 'clamp' });
                        const itemY = interpolate(frame, [feat.start, feat.start + 15], [20, 0], { extrapolateRight: 'clamp' });

                        return (
                            <div
                                key={i}
                                style={{ opacity: itemOpacity, transform: `translateY(${itemY}px)` }}
                                className="flex items-center gap-6 p-6 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm"
                            >
                                <span className="text-5xl">{feat.icon}</span>
                                <span className="text-4xl font-light">{feat.label}</span>
                            </div>
                        );
                    })}
                </div>
            </div>
        </AbsoluteFill>
    );
};
