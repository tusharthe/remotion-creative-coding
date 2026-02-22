import React from 'react';
import { useCurrentFrame } from 'remotion';
import Prism from 'prismjs';

// Import CSS for prism (we'll use Tomorrow Night which is close to github-dark)
import 'prismjs/themes/prism-tomorrow.css';
// Import languages you need
import 'prismjs/components/prism-python';
import 'prismjs/components/prism-bash';
import 'prismjs/components/prism-javascript';

export const CodeBlock: React.FC<{
    code: string;
    language: string;
    typingSpeed?: number; // chars per frame
    startFrame?: number;
}> = ({ code, language, typingSpeed = 0.5, startFrame = 0 }) => {
    const frame = useCurrentFrame();

    const currentFrame = Math.max(0, frame - startFrame);
    const charsToShow = Math.floor(currentFrame * typingSpeed);
    const displayedCode = code.slice(0, Math.min(charsToShow, code.length));

    const isFinished = charsToShow >= code.length;
    const showCursor = !isFinished || (frame % 30 < 15);

    // Fallback to plain text if language is not supported
    const grammar = Prism.languages[language] || Prism.languages.plain;
    const html = Prism.highlight(displayedCode, grammar, language);

    return (
        <div className="relative font-mono text-xl p-6 rounded-lg bg-[#1d1f21] shadow-2xl border border-gray-800">
            <pre className={`language-${language} m-0 p-0 bg-transparent! text-base`} style={{ margin: 0, padding: 0, backgroundColor: 'transparent' }}>
                <code
                    className={`language-${language}`}
                    dangerouslySetInnerHTML={{ __html: html }}
                />
                {showCursor && !isFinished && (
                    <span className="inline-block w-[2px] h-[1.1em] bg-blue-400 ml-[1px] animate-pulse align-middle" />
                )}
            </pre>
        </div>
    );
};
