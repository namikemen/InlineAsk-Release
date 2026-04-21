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
    <td width="50%"><p align="center"><b>Browse Web</b></p></td>
    <td width="50%"><p align="center"><b>Rewrite & Refine</b></p></td>
  </tr>
  <tr>
    <td><img src="assets/weather.gif" width="100%" alt="Browse Web Demo"></td>
    <td><img src="assets/rephase.gif" width="100%" alt="Rewrite & Refine Demo"></td>
  </tr>
  <tr>
    <td width="50%"><p align="center"><b>Check Email</b></p></td>
    <td width="50%"><p align="center"><b>Execute System Commands</b></p></td>
  </tr>
  <tr>
    <td><img src="assets/mail.gif" width="100%" alt="Check Email Demo"></td>
    <td><img src="assets/file.gif" width="100%" alt="Execute System Commands Demo"></td>
  </tr>
</table>

*(Note: If the videos above don't render on Github locally, click on them to download or view the raw file).*

---

## ✨ Key Features
- **Universal `⌘K` Editing**: Trigger the AI directly inside Word, VS Code, Notes, or your Browser. Ask it to fix grammar, rewrite emails, translate, or write code, and instantly inject the result into your active application.
- **Agentic Capabilities**: Inline Ask can autonomously browse the web and execute AppleScript/Bash shell commands on your machine to control your Mac (like setting brightness, managing apps, or finding files).
- **Multi-Modal Vision Support**: Paste images straight into the prompt via `Cmd+V` for instantaneous visual analysis across all providers.
- **Provider Agnostic**: Connects instantly to `Ollama`, `OpenAI`, `Anthropic`, `Google Gemini`, `Mistral`, and `Groq`. (**Recommendation**: Use the **Mistral Free API** for an excellent zero-cost cloud experience).
- **100% Local Inference Support**: Fully takes advantage of lightweight local models via Ollama for zero-latency, offline, and private AI capabilities. (**Recommendation**: Use **Gemma 4 (Quantized)** for the best balance of speed and intelligence).

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

## ⚙️ Setup Guide

### Local (Recommended): Ollama + Gemma
For private and fast local inference, install Ollama and use a small Gemma model.

1. Install Ollama:
   - macOS: [https://ollama.com/download](https://ollama.com/download) or:
   ```bash
   brew install ollama
   ```
   - Windows: install from [https://ollama.com/download](https://ollama.com/download), then open **PowerShell**.
2. Start Ollama (if it is not already running).
3. Pull a lightweight model (recommended for most laptops):
   ```bash
   ollama pull gemma3:2b
   ```
   You can also try a 3B-class model if your machine can handle it.
4. Open Inline Ask settings (`Cmd + ,` on macOS, or Settings from the app menu on Windows) and set provider/model to Ollama + your pulled model.

### API Providers: Add Key in Settings
If you prefer cloud models (OpenAI, Anthropic, Gemini, Mistral, Groq):

1. Open settings (`Cmd + ,` on macOS, or Settings from the app menu on Windows).
2. Select your provider.
3. Paste your API key in the corresponding key field.
4. Save and run a quick prompt to confirm it works.

---

## 💥 Keyboard Shortcuts
- **`⌥ + Space`**: Reveal the UI on top of your screen anywhere.
- **`Cmd + ,`**: Open the Settings Window to input your API keys or switch models.
- **`Shift + Enter`**: Commit and paste the generated AI result seamlessly into the active app underneath.

---

## 🛠 Development Status & Feedback
**Inline Ask** is currently in **active development**. Agentic capabilities (like autonomous web browsing and system command execution) are still being refined.

We highly encourage you to provide feedback and **recommend new features!** 🚀
If you have suggestions, encounter bugs, or want to see a specific capability added, please feel free to [open an issue](../../issues/new). Your input is essential to making this tool better.

