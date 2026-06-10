# Study Buddy 📚

A Claude-powered homework tutor for kids aged 8–14 that teaches children 
how to think through problems — without ever just giving them the answer.

Built by a former software engineer transitioning into AI.

## Why I built this

As a mom of two boys, I wanted a homework helper that made my kids 
smarter — not one that did their homework for them. Most AI tools just 
give answers. Study Buddy uses the Socratic method: it asks guiding 
questions, gives hints, and celebrates effort — only confirming answers 
after the child has genuinely tried.

This project is also my portfolio piece for transitioning from software test 
engineering into AI prompt engineering and evaluation design. My background 
designing test frameworks, catching edge cases, and documenting failure 
modes maps directly onto prompt engineering and AI evaluation.

## How it works

Study Buddy is built on three core design principles:

**1. Socratic teaching — never give the answer**
The system prompt instructs Claude to always ask what the child has 
already tried before offering any help. It guides with hints and 
simpler related questions rather than solutions.

**2. Conversation memory**
Every message in the session is passed to Claude as full conversation 
history. This means Study Buddy remembers context — if a child says 
"I tried 48" it knows what problem they were working on.

**3. Safety first**
The prompt explicitly handles distress signals, off-topic requests, 
and attempts to get Claude to write assignments. Study Buddy redirects 
to trusted adults when needed and stays firmly in the homework helper lane.

## Tech stack

- **Runtime:** Node.js
- **AI:** Anthropic Claude API (claude-sonnet-4-6)
- **Frontend:** Vanilla HTML + CSS + JavaScript
- **Server:** Node.js HTTP module (no frameworks)
- **Environment:** dotenv for API key management
