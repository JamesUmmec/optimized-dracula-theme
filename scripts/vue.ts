import {resolve} from "node:path"
import {readFileSync, writeFileSync} from "fs-extra"

// Path of input and output.
const rawPath = resolve(__dirname, "../themes/raw-color-theme.json")
const vuePath = resolve(__dirname, "../themes/vue-color-theme.json")

// Remove comments of jsonc and parse pure json.
const raw = JSON.parse(
  readFileSync(rawPath)
    .toString()
    .replace(/\/\*[^]*?\*\//g, "")
    .replace(/\/\/.*/g, "")
)

// Cancel sematic highlight of "property".
// @ts-ignore
raw["semanticTokenColors"]["property"] = undefined
writeFileSync(
  vuePath,
  "// Special vue version of the color theme.\n" + JSON.stringify(raw)
)

// Log success when finished.
console.log("[v] successfully publish into theme/vue-color-theme.json")
