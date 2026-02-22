# 🎬 Remotion Learning Journey

Welcome to my programmatic video creation lab! This repository is a playground where I'm mastering **Remotion** – building high-quality, data-driven videos using nothing but React code.

<p align="center">
  <a href="https://github.com/remotion-dev/logo">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="https://github.com/remotion-dev/logo/raw/main/animated-logo-banner-dark.apng">
      <img alt="Animated Remotion Logo" src="https://github.com/remotion-dev/logo/raw/main/animated-logo-banner-light.gif">
    </picture>
  </a>
</p>

## 🚀 What I’m Learning

- **Programmatic Video**: Creating dynamic videos using React components.
- **Advanced Animations**: Smooth transitions and keyframe-based motion.
- **Audio Integration**: Synchronizing visuals with high-quality AI-generated audio.
- **Automation**: Rendering videos via CLI and automating asset generation.
- **Reusable Templates**: Building a system for scalable video production.

## 📂 Projects

| Project Name | Description | Status |
|-------------|------------|--------|
| **Python Masterclass** | Full-production tutorial with code animations & terminal simulations | ✅ Done |
| **Intro Video** | Simple animated intro using text and transitions | ✅ Done |
| **Stats Video** | Dynamic data-driven video example | 🚧 In Progress |
| **Instagram Reel** | Short vertical video template | 📅 Planned |

## 🛠️ Tech Stack & Features

*   **Core**: React 19, Remotion 4.0, TypeScript.
*   **Styling**: Tailwind CSS 4.0 for modern, glassmorphic interfaces.
*   **AI Integration**: 
    *   **Google Gemini 1.5 Flash**: Used for script generation and content strategy.
    *   **Google Cloud TTS**: Professional-grade voiceovers generated programmatically.
*   **Visual Components**:
    *   `Terminal.tsx`: Realistic typing effects and shell simulation.
    *   `CodeBlock.tsx`: Beautiful syntax highlighting powered by PrismJS.

## ⚙️ How to Run

### 1. Installation
First, install the necessary dependencies:
```bash
npm install
```

### 2. Configure Environment
Create a `.env` file based on `.env.example` and add your Google Cloud credentials for TTS:
```bash
GOOGLE_APPLICATION_CREDENTIALS="path/to/your/service-account.json"
```

### 3. Start Development Studio
Open the Remotion Studio to preview and iterate on your videos:
```bash
npm run dev
```

### 4. Rendering
To render a specific composition (e.g., Episode-1-Intro) to a video file:
```bash
npx remotion render Episode-1-Intro out/episode-1.mp4
```

## 📌 Goal

To master programmatic video creation and build a production-ready pipeline for automated educational content.

---

✨ This repo is part of my journey in creative coding and video automation.
