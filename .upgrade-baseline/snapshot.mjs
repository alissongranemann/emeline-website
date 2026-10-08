// Snapshot every page listed in urls.txt from a given base URL: saves the
// HTTP status, the server-rendered HTML and full-page desktop/mobile
// screenshots taken after scroll-triggered reveals and lazy images settle.
//
// Usage: node .upgrade-baseline/snapshot.mjs <base-url> <out-dir>
//   e.g. node .upgrade-baseline/snapshot.mjs https://emelineabreunutri.com.br .upgrade-baseline/prod
//        node .upgrade-baseline/snapshot.mjs http://localhost:9000 .upgrade-baseline/local
import { chromium } from "playwright-core"
import { mkdir, readFile, writeFile } from "node:fs/promises"
import { dirname, join } from "node:path"
import { fileURLToPath } from "node:url"

const [base, out] = process.argv.slice(2)
if (!base || !out) {
  console.error("usage: snapshot.mjs <base-url> <out-dir>")
  process.exit(1)
}

const PROD = "https://emelineabreunutri.com.br"
const here = dirname(fileURLToPath(import.meta.url))
const urls = (await readFile(join(here, "urls.txt"), "utf8")).trim().split("\n")

const viewports = {
  desktop: { width: 1440, height: 900 },
  mobile: { width: 412, height: 915, isMobile: true, hasTouch: true },
}

for (const dir of ["html", ...Object.keys(viewports)]) {
  await mkdir(join(out, dir), { recursive: true })
}

const nameFor = path => path.replace(/^\/|\/$/g, "").replace(/\//g, "_") || "index"

const settle = async page => {
  // walk down the page so IntersectionObserver-driven content shows up
  await page.evaluate(async () => {
    const step = window.innerHeight / 2
    for (let y = 0; y < document.body.scrollHeight; y += step) {
      window.scrollTo(0, y)
      await new Promise(r => setTimeout(r, 120))
    }
    window.scrollTo(0, 0)
  })
  await page.waitForLoadState("networkidle")
  await page.waitForFunction(() =>
    [...document.images].every(img => img.complete)
  )
  await page.waitForTimeout(1500) // fade-in transitions
}

const browser = await chromium.launch({ channel: "chrome" })
const status = []

for (const url of urls) {
  const path = url.slice(PROD.length) || "/"
  const name = nameFor(path)
  const target = new URL(path, base).href

  const res = await fetch(target)
  await writeFile(join(out, "html", `${name}.html`), await res.text())
  status.push(`${res.status} ${path}`)

  for (const [view, viewport] of Object.entries(viewports)) {
    const context = await browser.newContext({
      viewport: { width: viewport.width, height: viewport.height },
      isMobile: viewport.isMobile,
      hasTouch: viewport.hasTouch,
      reducedMotion: "no-preference",
    })
    const page = await context.newPage()
    await page.goto(target, { waitUntil: "networkidle" })
    await settle(page)
    await page.screenshot({
      path: join(out, view, `${name}.png`),
      fullPage: true,
      animations: "disabled",
      mask: [page.locator("iframe")], // YouTube embed varies between loads
    })
    await context.close()
  }
  console.log(res.status, name)
}

await writeFile(join(out, "status.txt"), status.join("\n") + "\n")
await browser.close()
