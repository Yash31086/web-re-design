const fs = require('fs');
const path = require('path');

const dir = process.cwd();
const files = fs.readdirSync(dir).filter(f => f.endsWith('.html') || f.endsWith('.cjs'));

for (const file of files) {
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  
  const original = content;
  
  // Fix mailto links with article.html
  content = content.replace(/https:\/\/czarconsultancy\.com\/article\.html/g, 'https://czarconsultancy.com/article');
  
  // Fix generate_articles.cjs regex strings
  if (file === 'generate_articles.cjs') {
    content = content.replace(/\/article\.html\(/g, '/article(');
  }
  
  if (original !== content) {
    fs.writeFileSync(filePath, content);
    console.log(`Updated ${file}`);
  }
}
