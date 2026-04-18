<p align="center">
  <img src="assets/logo.png" width="128" alt="Inline Ask Logo">
</p>

# Inline Ask ⚡️
<p>
  <img src="https://img.shields.io/badge/macOS-12.0+-blue?style=flat" alt="macOS Version">
  <img src="https://img.shields.io/badge/License-MIT-green?style=flat" alt="License">
</p>

**Inline Ask** is a system-wide macOS menu bar application that brings cursor-like inline AI assistance (`⌘K` style) to *any* application on your Mac. 

Say goodbye to "Apple Intelligence" and Siri. With **Inline Ask**, you can harness the cutting-edge speed of local open-source models like **Gemma 4** or connect directly to premium API providers (OpenAI, Anthropic, Gemini, Mistral, Groq), enabling deeply integrated and autonomous assistance anywhere you type.

**Tags:** `#macOS` `#AI` `#ChatGPT` `#Productivity` `#LLM` `#Menu-Bar-App` `#Gemma` `#Ollama` `#LocalAI` `#AppleIntelligenceAlternative`

---

## 🎥 Demos

<table border="0">
  <tr>
    <td width="50%"><p align="center"><b>Check Email</b></p></td>
    <td width="50%"><p align="center"><b>Execute System Commands</b></p></td>
  </tr>
  <tr>
    <td><video src="assets/mail.mp4" autoplay loop muted playsinline width="100%"></video></td>
    <td><video src="assets/file.mp4" autoplay loop muted playsinline width="100%"></video></td>
  </tr>
  <tr>
    <td width="50%"><p align="center"><b>Browse Web</b></p></td>
    <td width="50%"><p align="center"><b>Rewrite & Refine</b></p></td>
  </tr>
  <tr>
    <td><video src="assets/weather.mp4" autoplay loop muted playsinline width="100%"></video></td>
    <td><video src="assets/rephase.mp4" autoplay loop muted playsinline width="100%"></video></td>
  </tr>
</table>

*(Note: If the videos above don't render on Github locally, click on them to download or view the raw file).*

---

## ✨ Key Features
- **Universal `⌘K` Editing**: Trigger the AI directly inside Word, VS Code, Notes, or your Browser. Ask it to fix grammar, rewrite emails, or write code, and instantly inject the result into your active application.
- **Agentic Capabilities**: Inline Ask can autonomously browse the web and execute AppleScript/Bash shell commands on your machine to control your Mac (like setting brightness, managing apps, or finding files).
- **Multi-Modal Vision Support**: Paste images straight into the prompt via `Cmd+V` for instantaneous visual analysis across all providers.
- **Provider Agnostic**: Connects instantly to `Ollama`, `OpenAI`, `Anthropic`, `Google Gemini`, `Mistral`, and `Groq`. 
- **100% Local Inference Support**: Fully takes advantage of lightweight local models like **Gemma 4** via Ollama for zero-latency, offline, and private AI capabilities.

---

## 🚀 Installation

### Option 1: The Easy Way (Homebrew)
If you have [Homebrew](https://brew.sh/) installed, simply open your Terminal and run:

```bash
brew tap namikemen/inlineask
brew install inline-ask
```
*Note: This automatically bypasses Apple's Gatekeeper quarantine for you!*

### Option 2: Manual Download
1. Go to the [Releases Tab](../../releases/latest).
2. Download `InlineAsk-Release.zip`.
3. Unzip it and drag `InlineAsk.app` to your `Applications` folder.
4. **Important**: Because this app isn't signed under a paid $99/year Apple Developer account, macOS Gatekeeper will block it upon first launch. Run this single command in your Terminal to fix it:
   ```bash
   xattr -cr /Applications/InlineAsk.app
   ```
5. Double click `InlineAsk.app` to launch it. Note: you won't see a Dock icon because this is an invisible background Menu-bar agent! 

---

## 💥 Keyboard Shortcuts
- **`⌥ + Space`**: Reveal the UI on top of your screen anywhere.
- **`Cmd + ,`**: Open the Settings Window to input your API keys or switch models.
- **`Shift + Enter`**: Commit and paste the generated AI result seamlessly into the active app underneath.
