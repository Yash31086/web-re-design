import express from 'express';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.static(path.resolve(__dirname, '..', 'dist')));
app.use(express.static(path.resolve(__dirname, '..')));

// Clean URL routing - serve .html files without extension
app.use((req, res, next) => {
  const filePath = path.resolve(__dirname, '..', 'dist', req.path.slice(1) + '.html');

  // Skip if it's an API route or has a file extension
  if (req.path.startsWith('/api/') || req.path.includes('.')) {
    return next();
  }

  // Try to serve the .html file from dist
  if (fs.existsSync(filePath)) {
    return res.sendFile(filePath);
  }

  // Fallback for client-side routes
  return res.sendFile(path.resolve(__dirname, '..', 'dist', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
