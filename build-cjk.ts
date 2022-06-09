import {resolve} from "node:path"
import {readFileSync, writeFileSync} from "fs-extra"

/** Raw file for non CJK languages. */
const rawPath = resolve(__dirname, "./themes/raw-color-theme.json")

/** File of the CJK version of this color theme. */
const cjkPath = resolve(__dirname, "./themes/cjk-color-theme.json")

/** Comment removed JSON object from {@link rawPath} file. */
const raw = JSON.parse(
  readFileSync(rawPath)
    .toString()
    .replace(/\/\*[^]*?\*\//g, "")
    .replace(/\/\/.*/g, "")
)

/** Content under key `"tokenColors"`, and type it as an array. */
const tokenColors = raw["tokenColors"] as []

// Edit `tokenColors[<?>].settings.fontStyle` to
// cancel italic decoration for CJK version.
for (const tokenColor of tokenColors) {
  if (tokenColor["name"] === "normal comments") {
    // @ts-ignore
    tokenColor["settings"]["fontStyle"] = ""
    break
  }
}

// Set the value before writing into aimed file.
raw["tokenColors"] = tokenColors

// Add comment into CJK version theme json file.
const withComment =
  "// CJK version of the color theme.\n" +
  "// See comments in ./raw-color-theme.json for more details.\n" +
  JSON.stringify(raw)

// Write into aimed file.
writeFileSync(cjkPath, withComment)
console.log("[v] successfully publish into theme/cjk-color-theme.json")
