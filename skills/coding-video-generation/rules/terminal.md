# Terminal Simulation

Terminal simulations are used to show installation commands, running scripts, or logs.

## Basic Terminal Component

```tsx
export const Terminal = ({ lines }) => {
  return (
    <div style={{
      backgroundColor: '#000',
      color: '#0f0', // Matrix green or #fff for modern
      fontFamily: 'monospace',
      padding: 20,
      borderRadius: 8,
      minHeight: 200
    }}>
      {lines.map((line, i) => (
        <div key={i}>
          <span style={{ color: '#50fa7b' }}>$</span> {line}
        </div>
      ))}
      <Cursor />
    </div>
  );
};
```

## Animating Commands

Separate the "command" typing from the "output" appearing instantly.

1.  **Frame 0-30**: Type `npm install remotion`.
2.  **Frame 31**: Show the progress bar or output text.

## Useful Libraries

- **xterm.js (Headless)**: If you need a full-blown terminal engine.
- **react-syntax-highlighter**: Can also be used for terminal bash syntax.

## Best Practices

1. **Colors**: Use standard ANSI colors (Blue for dirs, Green for success, Red for errors).
2. **Path**: Include a mock path like `~/projects/my-video` to make it look realistic.
3. **Cursor**: Use a block cursor `█` or an underline `_` for the terminal feel.
4. **Scrolling**: Automatically scroll to the bottom as new lines appear.
