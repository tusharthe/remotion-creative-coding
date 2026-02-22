# Typing Animations

Static code blocks are boring. Typing animations simulate someone writing the code, which increases engagement.

## Character-by-Character Animation

Use `interpolate` or a simple `slice` based on the frame to simulate typing.

```tsx
import { useCurrentFrame, interpolate } from 'remotion';

export const TypingCode = ({ code }) => {
  const frame = useCurrentFrame();
  
  // Total characters to show based on frame
  const charsToShow = Math.floor(
    interpolate(frame, [0, 60], [0, code.length], {
      extrapolateRight: 'clamp',
    })
  );

  const displayedCode = code.slice(0, charsToShow);

  return (
    <pre>
      <code>{displayedCode}</code>
      <Cursor />
    </pre>
  );
};

const Cursor = () => {
  const frame = useCurrentFrame();
  const opacity = frame % 30 < 15 ? 1 : 0;
  return <span style={{ opacity, borderLeft: '3px solid white', marginLeft: 2 }}>&nbsp;</span>;
};
```

## Line-by-Line Reveal

For longer snippets, revealing a full line at a time can be better than character-by-character.

```tsx
export const LineReveal = ({ lines }) => {
  const frame = useCurrentFrame();
  const linesToShow = Math.floor(frame / 10);
  
  return (
    <div>
      {lines.slice(0, linesToShow).map((line, i) => (
        <div key={i} style={{ opacity: 1, transform: 'translateY(0)' }}>
          {line}
        </div>
      ))}
    </div>
  );
};
```

## Best Practices

1. **Realistic Speed**: Typing shouldn't be too fast to read, but not too slow to be boring (approx. 5-10 characters per second).
2. **Variable Speed**: Use easing or slightly vary speed to make it look "human".
3. **Cursor**: Always include a blinking cursor at the end of the text.
4. **Scroll**: If the code is long, ensure the "window" scrolls automatically to keep the cursor in view.
