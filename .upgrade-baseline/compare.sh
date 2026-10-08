#!/usr/bin/env bash
# Pixel-diff two snapshot dirs made by snapshot.mjs (requires ImageMagick).
# Prints the % of differing pixels per page, worst first (flagging pages whose
# height changed), and writes highlighted diffs to <candidate>/diff-<viewport>/.
#
# Usage: .upgrade-baseline/compare.sh <baseline-dir> <candidate-dir> [desktop|mobile]
set -euo pipefail

BASE="${1:?baseline dir}"
CAND="${2:?candidate dir}"
VIEW="${3:-desktop}"
FUZZ="${FUZZ:-8%}" # tolerate antialiasing / jpeg noise

mkdir -p "$CAND/diff-$VIEW"
tmp="$(mktemp -d)"
trap 'rm -rf "$tmp"' EXIT

for img in "$BASE/$VIEW"/*.png; do
  name="$(basename "$img")"
  other="$CAND/$VIEW/$name"
  [ -f "$other" ] || { echo "missing  $name"; continue; }

  read -r w1 h1 < <(identify -format '%w %h\n' "$img")
  read -r w2 h2 < <(identify -format '%w %h\n' "$other")
  w=$((w1 > w2 ? w1 : w2)); h=$((h1 > h2 ? h1 : h2))
  note=""; [ "$h1" != "$h2" ] && note="  (height $h1 -> $h2)"

  # pad both to the same canvas so full-page shots of different heights compare
  convert "$img" -background white -extent "${w}x${h}" "$tmp/a.png"
  convert "$other" -background white -extent "${w}x${h}" "$tmp/b.png"

  # compare exits 1 when images differ; AE count goes to stderr
  ae="$(compare -fuzz "$FUZZ" -metric AE "$tmp/a.png" "$tmp/b.png" "$CAND/diff-$VIEW/$name" 2>&1 >/dev/null || true)"
  LC_ALL=C awk -v ae="${ae%% *}" -v t="$((w * h))" -v n="${name%.png}$note" \
    'BEGIN { printf "%6.2f%%  %s\n", 100 * ae / t, n }'
done | LC_ALL=C sort -rn
