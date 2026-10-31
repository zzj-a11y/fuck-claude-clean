#!/bin/bash
set -euo pipefail
: "${SITE_URL:?Set SITE_URL to your deployed website URL}"
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
APP="$ROOT/mac-app/build/Claude 环境检测.app"
mkdir -p "$APP/Contents/MacOS" "$APP/Contents/Resources" "$ROOT/mac-app/build/AppIcon.iconset"
for size in 16 32 128 256 512; do
  sips -z "$size" "$size" "$ROOT/public/icon-512.png" --out "$ROOT/mac-app/build/AppIcon.iconset/icon_${size}x${size}.png" >/dev/null
  double=$((size * 2))
  sips -z "$double" "$double" "$ROOT/public/icon-512.png" --out "$ROOT/mac-app/build/AppIcon.iconset/icon_${size}x${size}@2x.png" >/dev/null
done
iconutil -c icns "$ROOT/mac-app/build/AppIcon.iconset" -o "$APP/Contents/Resources/AppIcon.icns"
xcrun swiftc -target arm64-apple-macosx14.0 "$ROOT/mac-app/main.swift" -o "$APP/Contents/MacOS/ClaudeEnvironment" -framework Cocoa -framework WebKit
SITE_URL="$SITE_URL" APP="$APP" python3 - <<'PY'
import os, plistlib
p={'CFBundleName':'Claude 环境检测','CFBundleDisplayName':'Claude 环境检测','CFBundleExecutable':'ClaudeEnvironment','CFBundleIdentifier':'com.zzja11y.claudeenvironment','CFBundlePackageType':'APPL','CFBundleShortVersionString':'1.0','CFBundleVersion':'1','CFBundleIconFile':'AppIcon','NSHighResolutionCapable':True,'WebsiteURL':os.environ['SITE_URL'].rstrip('/')+'/zh/'}
with open(os.environ['APP']+'/Contents/Info.plist','wb') as f: plistlib.dump(p,f)
PY
codesign --force --deep --sign - "$APP"
printf 'Built %s\n' "$APP"
