cask "inline-ask" do
  version "1.0.0"
  sha256 "da5bc52a00b2953b4f9c7f4f71374f1b4963f8a646753b009fc4954c73bddc20"

  # Replace YOUR-GITHUB-USERNAME with your actual GitHub name after you upload!
  url "https://github.com/YOUR-GITHUB-USERNAME/homebrew-inlineask/releases/download/v#{version}/InlineAsk-Release.zip"
  name "Inline Ask"
  desc "A seamless macOS system-wide AI assistant"
  homepage "https://github.com/YOUR-GITHUB-USERNAME/homebrew-inlineask"

  app "InlineAsk.app"

  # This removes the Gatekeeper quarantine flag automatically during install
  postflight do
    system_command "xattr",
                   args: ["-cr", "#{appdir}/InlineAsk.app"],
                   sudo: false
  end

  zap trash: [
    "~/.inline-ask-config.json",
  ]
end
