# Syntax Highlighting in Remotion

High-quality code videos require accurate and beautiful syntax highlighting. Using `shiki` is highly recommended as it uses the same engine as VS Code.

## Recommended Tools

- **Shiki**: Best for realistic VS Code themes.
- **Prism.js**: Good for simple highlights but less accurate than Shiki.
- **@remotion/code**: Useful for basic animations but often needs custom styling.

## Shiki Integration Pattern

Since Shiki is asynchronous, you should use `delayRender()` or pre-calculate the highlighted HTML.

```tsx
import { useEffect, useState } from 'react';
import { continueRender, delayRender } from 'remotion';
import { getHighlighter } from 'shiki';

const handle = delayRender();

export const CodeBlock = ({ code, language }) => {
  const [html, setHtml] = useState('');

  useEffect(() => {
    getHighlighter({
      themes: ['github-dark'],
      langs: [language],
    }).then((highlighter) => {
      const highlighted = highlighter.codeToHtml(code, {
        lang: language,
        theme: 'github-dark',
      });
      setHtml(highlighted);
      continueRender(handle);
    });
  }, [code, language]);

  return <div dangerouslySetInnerHTML={{ __html: html }} />;
};
```

## Best Practices

1. **Font Choice**: Use a high-quality monospace font like `JetBrains Mono`, `Fira Code`, or `Roboto Mono`.
2. **Font Size**: Keep it above `24px` for 1080p videos to ensure readability.
3. **Contrast**: Ensure the background of the code block has enough contrast with the rest of the video.
4. **Line Numbers**: Use line numbers if you are referencing specific lines in your narration.
