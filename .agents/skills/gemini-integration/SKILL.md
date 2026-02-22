---
name: gemini-integration
description: Best practices for integrating Google Gemini AI into your development workflow and video generation pipeline.
metadata:
  tags: gemini, ai, llm, automation, multimodal
---

## When to use

Use this skill when you need to automate content generation, analyze code, or create dynamic scripts for Remotion videos using Google's Gemini models, specifically **Gemini 3.1 Pro**.

## Key Capabilities

1. **Advanced Reasoning (Gemini 3.1 Pro)**: Leverage the model's 77.1% ARC-AGI-2 score for solving complex logic patterns and technical challenges.
2. **Long Context & Output**: Utilize the 1M token input window and the expanded 64k token output capacity for generating entire codebase segments or long video scripts without truncation.
3. **Multimodal & Creative**: Generate website-ready animated SVGs and immersive 3D experiences directly from text prompts.
4. **Content Generation**: Use Gemini to write scripts, generate funny analogies for code, or summarize technical docs.

## Implementation Guide

### 1. API Setup
Ensure you have a `GEMINI_API_KEY` in your environment. Use `@google/generative-ai` for Node.js integrations.

### 2. Integration Patterns
- **Scripting**: Fetch narrated text from Gemini before rendering.
- **Asset Generation**: Use Gemini to describe images that Nano Banana Pro then generates.

## Best Practices

- **Context Windows**: Provide relevant codebase context to Gemini for better technical accuracy.
- **Safety Settings**: Configure safety settings to ensure generated content is appropriate for your audience.
- **Streaming**: Use streaming responses for a better developer experience during CLI tasks.
