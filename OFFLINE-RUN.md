# Offline run without Bun / npm / Node

Use this when the presentation computer does not have Bun, npm, Node, or Python.

## What to copy to the USB drive

Copy these together as one folder:

```text
ai_debate_ppt/
├── dist/
├── start-offline-windows.bat
├── offline-server.ps1
├── slides-export.pptx
└── slides-export.pdf
```

## On a Windows presentation computer

1. Open the copied folder.
2. Double-click `start-offline-windows.bat`.
3. A browser should open automatically at:

```text
http://localhost:8080/
```

Keep the black terminal window open while presenting. Close it after the presentation.

## If Windows blocks the script

Right-click `start-offline-windows.bat` and choose **Run as administrator**.

If it still fails, use the backup files:

- `slides-export.pptx`
- `slides-export.pdf`

## Why this works

The `dist/` folder is already a static website. The `.bat` file starts a tiny PowerShell static server from Windows built-in tools, so the target computer does not need Bun, npm, Node, or Python.
