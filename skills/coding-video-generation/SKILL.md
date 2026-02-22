---
name: coding-video-generation
description: Best practices for generating high-quality coding videos with code animations, terminal simulations, and syntax highlighting.
metadata:
  tags: remotion, coding, syntax-highlighting, shiki, code-animation, terminal
---

## When to use

Use this skill when you need to create videos that showcase code, programming tutorials, or technical demos. It provides patterns for syntax highlighting, typing animations, and terminal simulations in Remotion.

## Features

### 1. Syntax Highlighting
For the best results, use `shiki` with Remotion. It provides VS Code-like highlighting and supports themes.
Load [./rules/syntax-highlighting.md](./rules/syntax-highlighting.md) for implementation details.

### 2. Typing Animations
Don't just show the whole code block. Animate it line by line or character by character to keep engagement.
Load [./rules/typing-animation.md](./rules/typing-animation.md) for animation patterns.

### 3. Window & UI Frames
Wrap your code in a beautiful window frame (e.g., Mac style dots) and use gradients for backgrounds.
Load [./rules/window-frames.md](./rules/window-frames.md) for styling ideas.

### 4. Code Focus & Zooming
When explaining a specific line, dim the rest of the code or zoom in.
Load [./rules/code-focus.md](./rules/code-focus.md) for focus techniques.

### 5. Terminal Simulation
Show CLI commands and outputs using a terminal component.
Load [./rules/terminal.md](./rules/terminal.md) for terminal components.

## How to use

Read individual rule files for detailed explanations and code examples:

- [rules/syntax-highlighting.md](rules/syntax-highlighting.md) - Integrating Shiki/Prism for code highlighting.
- [rules/typing-animation.md](rules/typing-animation.md) - Creating realistic typing effects and cursors.
- [rules/window-frames.md](rules/window-frames.md) - Adding Mac-style or custom window controls.
- [rules/terminal.md](rules/terminal.md) - Simulating terminal output and shells.
- [rules/code-focus.md](rules/code-focus.md) - Techniques for highlighting and zooming on code lines.
