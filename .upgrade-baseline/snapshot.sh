#!/usr/bin/env bash
# Snapshot every page listed in urls.txt from a given base URL:
# saves the HTTP status, the raw HTML and desktop/mobile screenshots.
#
# Usage: .upgrade-baseline/snapshot.sh <base-url> <out-dir>
#   e.g. .upgrade-baseline/snapshot.sh https://emelineabreunutri.com.br .upgrade-baseline/prod
#        .upgrade-baseline/snapshot.sh http://localhost:9000 .upgrade-baseline/local
set -euo pipefail

BASE="${1:?base url}"
OUT="${2:?out dir}"
HERE="$(cd "$(dirname "$0")" && pwd)"
CHROME="${CHROME:-google-chrome}"
PROD="https://emelineabreunutri.com.br"

mkdir -p "$OUT/html" "$OUT/desktop" "$OUT/mobile"
: > "$OUT/status.txt"

shot() { # url width height file
  "$CHROME" --headless=new --disable-gpu --hide-scrollbars --no-first-run \
    --virtual-time-budget=8000 --window-size="$2,$3" \
    --screenshot="$4" "$1" >/dev/null 2>&1 || echo "screenshot failed: $1" >&2
}

while read -r url; do
  path="${url#"$PROD"}"
  name="$(echo "${path:-/}" | sed 's#^/##; s#/$##; s#/#_#g')"
  name="${name:-index}"
  # curl sends raw UTF-8 otherwise, and Netlify answers 400 to accented slugs
  target="$BASE$(python3 -c 'import sys, urllib.parse; print(urllib.parse.quote(sys.argv[1]))' "$path")"

  code="$(curl -sS -L -o "$OUT/html/$name.html" -w '%{http_code}' "$target" || echo ERR)"
  echo "$code $path" >> "$OUT/status.txt"

  shot "$target" 1440 5000 "$OUT/desktop/$name.png"
  shot "$target" 412 9000 "$OUT/mobile/$name.png"
  echo "$code $name"
done < "$HERE/urls.txt"
