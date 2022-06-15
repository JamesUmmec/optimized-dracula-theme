# Optimized Dracula Theme

A color theme inspired by dracula color theme.

This color theme is not based on dracula color theme.
The color styles are similar with dracula color theme
but all highlighting configurations are redesigned.
All color configs are designed for a better looking in details.

This color theme extension is aimed to provide a better dev experience.
It cannot support all those commonly used languages,
but once it supports a language,
this color theme will help you to be more comfortable and productive.
The project is still under development.

![](https://github.com/JamesUmmec/imagebed/blob/main/images/20220609205328.png?raw=true)

Here are two color themes:
`Optimized Dracula Theme` and `Optimized Dracula Theme (CJK)`.
If you'd like to use CJK languages in your comments,
the CJK version of this theme is more recommended.

## Supported languages and frameworks.

Some of the languages or frameworks requires some extensions for code parsing.
Without those extensions, the code highlighting theme will not work normally.
Support status of the languages are listed as follows.

| lang     | basic | comment doc | special | require extension     |
| -------- | :---: | :---------: | :-----: | --------------------- |
| dart     |   ✔   |      ✔      |    ✔    | `Dart-Code.dart-code` |
| go       |   ✔   |     ---     |    ✔    | `golang.go`           |
| ts/js    |   ✔   |      ✔      |    ✔    | ---                   |
| rust     |  ❌   |     ❌      |   ❌    | ---                   |
| c/cpp    |  ❌   |     ❌      |   ❌    | ---                   |
| c#       |  ❌   |     ❌      |   ❌    | ---                   |
| python   |  ❌   |     ❌      |   ❌    | ---                   |
| java     |  ❌   |     ❌      |   ❌    | ---                   |
| html     |   ✔   |     ---     |   ---   | ---                   |
| vue      |   ✔   |     ---     |   ---   | ---                   |
| react    |  ❌   |     ---     |   ❌    | ---                   |
| css      |   ✔   |     ---     |   ---   | ---                   |
| scss     |   ✔   |     ---     |    ✔    | ---                   |
| less     |   ✔   |     ---     |    ✔    | ---                   |
| json     |   ✔   |     ---     |   ---   | ---                   |
| jsonc    |   ✔   |     ---     |   ---   | ---                   |
| yaml     |   ✔   |     ---     |   ---   | ---                   |
| markdown |   ✔   |     ---     |    ✔    | ---                   |

- `basic` means basic keywords, class/type, method/function highlighting.
- `comment doc` means highlighting of variables in documentation comment.
- `special` means special optimization for the language,
  such as readonly variables in `ts`/`js`,
  namespace in `ts`, and property names in `dart`.
- `required extension` means the highlighting might not be normal
  without those extensions.

> Comment documentation for golang is not supported
> by vscode `golang.go` extension yet.
> If comment doc of golang is necessary for your project,
> please consider [Goland](https://www.jetbrains.com/go/)
> by [JetBrains](https://www.jetbrains.com/).
> Or if you find an available golang comment doc extension,
> please notice the developer on
> [Github Issues](https://github.com/JamesUmmec/optimized-dracula-theme/issues).

## Related recommendations.

This extension only config color themes.
The following recommendations can provide a better dev experience
along with this color theme.

### Font family recommendations.

This extension uses [Iosevka](https://typeof.net/Iosevka/)
as the default font face for debug.
CJK users can consider [Sarasa Mono](https://picaq.github.io/sarasa/),
which is based on [Iosevka](https://typeof.net/Iosevka/).

### Icon theme recommendations.

`JonathanHarty.gruvbox-material-icon-theme`.

### Config recommendations.

You can add those code into your `.vscode/settings.json` file.

```jsonc
{
  // Workbench basic configs.
  "workbench.iconTheme": "gruvbox-material-icon-theme",
  "editor.bracketPairColorization.enabled": false,

  // Font size configs.
  "editor.lineHeight": 1.5,
  "editor.fontSize": 15,
  "editor.fontLigatures": true,

  // Minimap configs.
  "editor.minimap.enabled": true,
  "editor.minimap.maxColumn": 80,
  "editor.minimap.scale": 2,
  "editor.minimap.size": "proportional",
  "editor.minimap.renderCharacters": false,
  "editor.minimap.showSlider": "always",

  // workbench display configuration
  "workbench.tree.indent": 18,
  "workbench.tree.renderIndentGuides": "always",
  "workbench.tree.expandMode": "doubleClick"
}
```

## Cancel italic style of comments

If you do not like italic comments,
just add those code into your `.vscode/settings.json` config file.

```jsonc
"editor.tokenColorCustomizations": {
  "[Optimized Dracula Theme]": {
    "textMateRules": [
      {
        "scope": ["comment.line", "comment.block"],
        "settings": {
          "fontStyle": ""
        }
      }
    ]
  }
}
```
