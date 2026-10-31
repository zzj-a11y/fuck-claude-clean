import { test } from 'node:test';
import { readFileSync } from 'node:fs';
import assert from 'node:assert/strict';
test('page layout excludes advertising and tracking scripts', () => {
 const s = readFileSync('src/layouts/BaseLayout.astro','utf8');
 assert.doesNotMatch(s, /googletagmanager|adsbygoogle|scripts\/track/);
});
test('detector excludes sponsor placements', () => {
 const s = readFileSync('src/components/Detector.astro','utf8');
 assert.doesNotMatch(s, /<Sponsors|<ResultSponsor/);
});
