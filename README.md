# Inline Ask
A lightning-fast, system-wide AI-assistant that runs directly over your apps on macOS.

This repository holds the release binaries and the Homebrew Tap for installation.

## 🚀 Installation

### Option 1: The Easy Way (Homebrew)
If you have [Homebrew](https://brew.sh/) installed, simply open your Terminal and run:

```bash
brew tap YOUR-GITHUB-USERNAME/inlineask
brew install inline-ask
```
*Note: This automatically bypasses Apple's Gatekeeper quarantine for you!*

### Option 2: Manual Download
1. Go to the [Releases Tab](../../releases/latest).
2. Download `InlineAsk-Release.zip`.
3. Unzip it and drag `InlineAsk.app` to your `Applications` folder.
4. **Important**: Because this app isn't signed under a paid $99/year Apple Developer account, Gatekeeper will block it. Run this single command in your Terminal to fix it:
   ```bash
   xattr -cr /Applications/InlineAsk.app
   ```
5. Double click `InlineAsk.app` to launch it. Note: you might not see a Dock icon because this is a Menu-bar agent! 

## 💥 Keyboard Shortcuts
- **`⌥ + Space` (Option + Space):** Reveal the UI on top of your screen anywhere.
- **`Cmd + ,`**: Open the Settings Window to input your API keys.
- **`Shift + Enter`**: Paste your result instantly into the app you are currently using.
