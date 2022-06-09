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

## Supported languages and frameworks.

Some of the languages or frameworks requires some extensions for code parsing.
Without those extensions, the code highlighting theme will not work normally.

- `dart/flutter` (extension required: `Dart-Code.dart-code` and `Dart-Code.flutter`)
- `golang`, including `go.mod`, `go.sum` and `go.work`.
- `json`, including `jsonc` (Json with comments).
- `yaml`
- Git config files including `.gitignore` and `.gitattributes`.
- `.prettierignore` config files.

## Font family recommendations.

This extension uses [iosevka](https://typeof.net/Iosevka/)
as the default font face for debug.

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
