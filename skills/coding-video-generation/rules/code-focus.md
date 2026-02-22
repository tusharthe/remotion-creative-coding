# Code Focus & Zooming

In educational videos, it's crucial to point the user's eye to what's important.

## Dimming Unfocused Lines

A common technique is to reduce the opacity of lines that aren't being discussed.

```tsx
export const FocusLine = ({ children, isFocused }) => {
  return (
    <div style={{
      opacity: isFocused ? 1 : 0.3,
      filter: isFocused ? 'none' : 'blur(1px)',
      transition: 'opacity 0.3s ease, filter 0.3s ease'
    }}>
      {children}
    </div>
  );
};
```

## Zooming and Panning

Use `transform: scale()` or the `spring` function to zoom into a specific area.

```tsx
import { spring, useCurrentFrame, useVideoConfig } from 'remotion';

export const ZoomContainer = ({ children, zoomFrame, zoomScale = 1.5, targetY = 0 }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const zoom = spring({
    frame: frame - zoomFrame,
    fps,
    config: { stiffness: 100 },
  });

  const scale = 1 + (zoom * (zoomScale - 1));
  const translateY = -(zoom * targetY);

  return (
    <div style={{
      transform: `scale(${scale}) translateY(${translateY}px)`,
      transformOrigin: 'center top'
    }}>
      {children}
    </div>
  );
};
```

## Best Practices

1. **Subtle Motion**: Avoid jarring jumps. Use `spring` or `easing.out` for smooth transitions.
2. **Context**: Don't zoom so much that the user loses context of where they are in the file.
3. **Highlights**: Use a subtle background highlight (e.g., `rgba(255, 255, 255, 0.1)`) for the active line even without dimming others.
4. **Callouts**: Combine zooming with arrows or text bubbles for complex explanations.
