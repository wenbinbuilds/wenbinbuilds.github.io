import assert from 'node:assert/strict';
const origin = process.env.PORTFOLIO_ORIGIN || 'http://localhost:3000';
const routes = [
  '/',
  '/about',
  '/experience',
  '/projects',
  '/resume',
  '/contact',
  '/projects/wxo-agent-evaluator',
  '/projects/dormdash',
  '/projects/search-engine',
  '/projects/mapreduce',
  '/projects/lessons-learned-agent',
  '/projects/full-stack-social-app',
  '/projects/pipeline-cache-simulators',
  '/projects/cnn-vision-transformer',
  '/projects/electronic-trading-simulator',
];
const checked = new Set();
for (const path of routes) {
  const response = await fetch(new URL(path, origin));
  assert.equal(response.status, 200, `${path} responds successfully`);
  const html = await response.text();
  assert.equal(
    (html.match(/<h1(?:\s|>)/g) || []).length,
    1,
    `${path} has one h1`,
  );
  assert.equal(
    (html.match(/<main(?:\s|>)/g) || []).length,
    1,
    `${path} has one main landmark`,
  );
  assert.match(
    html,
    /<title>[^<]*Wenbin Liao[^<]*<\/title>/,
    `${path} has a page title`,
  );
  assert.match(
    html,
    /name="description" content="[^"]+"/,
    `${path} has a description`,
  );
  assert.match(html, /name="viewport"/, `${path} has a responsive viewport`);
  assert.match(html, /id="main-content"/, `${path} has a skip-link target`);
  assert.match(
    html,
    /https:\/\/www.linkedin.com\/in\/wenbinliao/,
    `${path} has LinkedIn`,
  );
  assert.match(html, /https:\/\/github.com\/wizice325/, `${path} has GitHub`);
  assert.match(
    html,
    /mailto:wenbinl@umich.edu|href="\/contact"/,
    `${path} offers verified contact`,
  );
  assert.doesNotMatch(html, /tel:/, `${path} has no telephone link`);
  assert.doesNotMatch(
    html,
    /Building your site|Your site is taking shape/,
    `${path} has no starter content`,
  );
  for (const match of html.matchAll(/(?:href|src)="(\/[^"#]*)"/g)) {
    const url = match[1].replaceAll('&amp;', '&');
    if (!checked.has(url)) {
      checked.add(url);
      const linked = await fetch(new URL(url, origin));
      assert.ok(
        linked.ok,
        `${path} link/asset ${url} returned ${linked.status}`,
      );
    }
  }
  console.log(
    `PASS ${path}: response, landmarks, metadata, social links, assets`,
  );
}
for (const path of ['/missing-page', '/projects/not-a-project']) {
  const response = await fetch(new URL(path, origin));
  assert.equal(response.status, 404, `${path} should return 404`);
  assert.match(
    await response.text(),
    /This path ends here/,
    'custom not-found page',
  );
  console.log(`PASS ${path}: 404 page`);
}
console.log(
  `Checked ${routes.length} pages, two missing routes, and ${checked.size} unique internal links/assets.`,
);
