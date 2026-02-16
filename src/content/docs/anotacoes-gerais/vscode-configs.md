---
title: Configs VSCode
---

- arquivo `settings.json`

### macbook

```json
// início config diego rocketseat
"window.zoomLevel": 0.5, // 1
"editor.fontFamily": "JetBrains Mono",
"editor.fontSize": 13, // 14
// "editor.lineHeight": 1.8,
"editor.renderLineHighlight": "gutter",
"workbench.editor.labelFormat": "short",
"explorer.compactFolders": false,
// "editor.semanticHighlighting.enabled": false,
// "breadcrumbs.enabled": false,
// "workbench.activityBar.location": "hidden",
"editor.minimap.enabled": false,
// "workbench.statusBar.visible": false,
"window.commandCenter": false,
"workbench.layoutControl.enabled": false,
"explorer.fileNesting.enabled": true,
"explorer.fileNesting.patterns": {
  "package.json": "eslint*, .prettier*, tsconfig*, vite*, pnpm-lock*, package-lock*"
},
// fim config diego rocketseat
// "explorer.autoReveal": false,
"workbench.activityBar.location": "top"
```

### windows

```json
// início config diego rocketseat
// "window.zoomLevel": 1,
"editor.fontSize": 14,
// "editor.lineHeight": 1.8,
"editor.renderLineHighlight": "gutter",
"workbench.editor.labelFormat": "short",
"explorer.compactFolders": false,
// "editor.semanticHighlighting.enabled": false,
// "breadcrumbs.enabled": false,
// "workbench.activityBar.location": "hidden",
"editor.minimap.enabled": false,
// "workbench.statusBar.visible": false,
"window.commandCenter": false,
"workbench.layoutControl.enabled": false,
"explorer.fileNesting.enabled": true,
"explorer.fileNesting.patterns": {
  "package.json": "eslint*, .prettier*, tsconfig*, vite*, pnpm-lock*, package-lock*"
},
// fim config diego rocketseat
```

### ambos

```json
"files.autoSave": "afterDelay",
"workbench.iconTheme": "symbols",
"workbench.productIconTheme": "a-file-icon-vscode-product-icon-theme",
"workbench.colorTheme": "Min Dark",
// "explorer.autoReveal": false,
"workbench.activityBar.location": "top"
"editor.wordWrap": "on",
"editor.fontLigatures": "'calt', 'ss01', 'ss02', 'ss03', 'ss04', 'ss05', 'ss06', 'ss07', 'ss08', 'ss09', 'liga'",
"editor.fontFamily": "'JetBrains Mono', 'Monaspace Radon', Consolas, 'Courier New', monospace",
"editor.autoClosingBrackets": "always",
"editor.autoClosingQuotes": "always",
"editor.linkedEditing": true,
"reactSnippets.settings.importReactOnTop": false,
"tailwindCSS.lint.suggestCanonicalClasses": "ignore",
```

### Extensões