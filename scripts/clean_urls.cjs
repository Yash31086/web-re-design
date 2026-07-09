const fs = require('fs');
const path = require('path');

const dir = process.cwd();
const files = fs.readdirSync(dir).filter(f => f.endsWith('.html') || f.endsWith('.cjs'));

let updatedCount = 0;

for (const file of files) {
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  
  const original = content;
  
  // Replace href="/some-page.html" with href="/some-page"
  // Replaces optional anchor tags as well, e.g. href="/page.html#section" -> href="/page#section"
  content = content.replace(/href="(\/?[a-zA-Z0-9_-]+)\.html(#.*?)?"/g, 'href="$1$2"');
  
  if (original !== content) {
    fs.writeFileSync(filePath, content);
    console.log(`Updated ${file}`);
    updatedCount++;
  }
}

console.log(`\nDone cleaning URLs. Updated ${updatedCount} files.`);
