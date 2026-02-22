# Window & UI Frames

Wrapping code in a professional-looking UI frame makes it look like it's inside a real editor or terminal.

## Mac-Style Window Frame

The "three dots" (red, yellow, green) are a classic aesthetic for coding videos.

```tsx
export const EditorWindow = ({ children, title = "index.ts" }) => {
  return (
    <div style={{
      borderRadius: 12,
      overflow: 'hidden',
      boxShadow: '0 20px 50px rgba(0,0,0,0.5)',
      background: '#1e1e1e',
      border: '1px solid #333'
    }}>
      {/* Header */}
      <div style={{
        height: 40,
        background: '#2d2d2d',
        display: 'flex',
        alignItems: 'center',
        padding: '0 15px',
        gap: 8
      }}>
        <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#ff5f56' }} />
        <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#ffbd2e' }} />
        <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#27c93f' }} />
        <div style={{ flex: 1, textAlign: 'center', color: '#888', fontSize: 14 }}>{title}</div>
      </div>
      
      {/* Content */}
      <div style={{ padding: 20 }}>
        {children}
      </div>
    </div>
  );
};
```

## Glassmorphism Backgrounds

Using a blurred, translucent background behind the code window creates a premium look.

```tsx
export const Background = () => {
  return (
    <div style={{
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      zIndex: -1
    }}>
      {/* Add some floating shapes with blur */}
      <div style={{
        position: 'absolute',
        top: '20%',
        left: '10%',
        width: 300,
        height: 300,
        borderRadius: '50%',
        background: 'rgba(255,255,255,0.1)',
        filter: 'blur(80px)'
      }} />
    </div>
  );
};
```

## Best Practices

1. **Rounded Corners**: Use `12px` to `20px` for a modern look.
2. **Shadows**: Deep, soft shadows (`blur` >= 40px) help the window pop from the background.
3. **Title Bars**: Include the file name to give context.
4. **Padding**: Don't let the code touch the edges of the frame.
