import {resolve} from "node:path"
import {readFileSync, writeFileSync} from "fs-extra"

// Path of input and output.
const rawPath = resolve(__dirname, "./themes/raw-color-theme.json")
const cjkPath = resolve(__dirname, "./themes/cjk-color-theme.json")

// Remove comments of jsonc and parse pure json.
const raw = JSON.parse(
  readFileSync(rawPath)
    .toString()
    .replace(/\/\*[^]*?\*\//g, "")
    .replace(/\/\/.*/g, "")
)

// Set necessary properties.
const tokenColors = raw["tokenColors"] as []
for (const tokenColor of tokenColors) {
  if (tokenColor["name"] === "normal comments") {
    // @ts-ignore
    tokenColor["settings"]["fontStyle"] = ""
    break
  }
}

// Add comments at the beginning of output file.
raw["tokenColors"] = tokenColors
const withComment =
  "// CJK version of the color theme.\n" +
  "// See comments in ./raw-color-theme.json for more details.\n" +
  JSON.stringify(raw)

// Write into output file and log success.
writeFileSync(cjkPath, withComment)
console.log("[v] successfully publish into theme/cjk-color-theme.json")
