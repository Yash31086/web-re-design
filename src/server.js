import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;
const ACCESS_KEY = process.env.WEB3FORMS_ACCESS_KEY || '67f3d90b-c48c-4c8f-bef3-fd00b18e92fd';

app.use(express.json());
app.use(express.static(path.resolve(__dirname, '..', 'public')));
app.use(express.static(path.resolve(__dirname, '..')));

// Clean URL routing - serve .html files without extension
app.use((req, res, next) => {
  const filePath = path.resolve(__dirname, '..', req.path.slice(1) + '.html');

  // Skip if it's an API route or has a file extension
  if (req.path.startsWith('/api/') || req.path.includes('.')) {
    return next();
  }

  // Try to serve the .html file
  if (fs.existsSync(filePath)) {
    return res.sendFile(filePath);
  }

  // Fallback for client-side routes like /services/registration
  return res.sendFile(path.resolve(__dirname, '..', 'index.html'));
});

app.post('/api/web3forms', async (req, res) => {
  const payload = {
    access_key: ACCESS_KEY,
    ...req.body
  };

  try {
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify(payload)
    });
    const data = await response.json();
    res.status(response.status).json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: 'Form submission failed.' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
