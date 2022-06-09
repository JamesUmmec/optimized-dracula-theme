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

## Supported languages and frameworks.

Some of the languages or frameworks requires some extensions for code parsing.
Without those extensions, the code highlighting theme will not work normally.
Support status of the languages are listed as follows.

| lang  | basic | comment doc | special | require extension     |
| ----- | :---: | :---------: | :-----: | --------------------- |
| dart  |   ✔   |      ✔      |    ✔    | `Dart-Code.dart-code` |
| go    |   ✔   |     ---     |    ✔    | `golang.go`           |
| ts/js |   ✔   |      ✔      |    ✔    | ---                   |
| html  |  ❌   |     ❌      |   ❌    | ---                   |
| vue   |  ❌   |     ❌      |   ❌    | ---                   |
| css   |   ✔   |     ---     |   ❌    | ---                   |
| scss  |  ❌   |     ❌      |   ❌    | ---                   |
| less  |  ❌   |     ❌      |   ❌    | ---                   |
| json  |   ✔   |     ---     |   ---   | ---                   |
| jsonc |   ✔   |     ---     |   ---   | ---                   |
| yaml  |   ✔   |     ---     |   ---   | ---                   |

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

## Build script and CJK support (developer).

CJK (Chinese, Japanese and Korean) characters
have different features from the alphabetical writing systems.
So that there are some different settings, but most of the settings
are same as the raw config file.
So here is a [build script](./build-cjk.ts) to make special configs for
CJK mode and generate the CJK color theme file.
The script file must be executed before publishing
or something error may occurred.

### (for Chinese readers) 为何要做 CJK 版本

对于中文母语者而言用中文写注释更方便也更高效，可以达到更高的信息熵。
中文方块字斜体并不美观，且中文自身和字母代码就已经有一定区分度，不必斜体修饰。
因此在 CJK 版本中所有注释都是不加斜体修饰的。

### (for Japanese readers) CJK バージョンの説明

> Machine translated, may not be accurate.
> 翻訳されたマシンにはエラーが含まれる場合があります。

斜めの変更は、漢字と仮名を引き起こす可能性があります。
日本語とコードレターには、斜めの変更なしに、ある程度の区別自体があります。
したがって、CJK バージョンのすべてのメモは変更されていません。

### (for Korean readers) CJK 버전 설명

> Machine translated, may not be accurate.
> 기계가 번역되어 정확하지 않을 수 있습니다.

북한의 편지 및 코드 텍스트 자체는 높은 차이를 가지고 있습니다.
따라서 CJK 버전의 모든 메모는 수정되지 않았습니다.
