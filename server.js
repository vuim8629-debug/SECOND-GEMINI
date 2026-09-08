import express from 'express';
import compression from 'compression';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;
const HOST = '0.0.0.0';

// Enable Gzip/Brotli response compression
app.use(compression());

// Security & performance headers middleware
app.use((req, res, next) => {
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('X-Frame-Options', 'SAMEORIGIN');
  res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
  res.setHeader('Permissions-Policy', 'camera=(), microphone=(), geolocation=()');
  next();
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'healthy', timestamp: new Date().toISOString() });
});

// Long-term immutable caching for web fonts
app.use('/fonts', express.static(path.join(__dirname, 'fonts'), {
  maxAge: '365d',
  immutable: true,
}));

// Serve root static assets (favicons, images, robots.txt) with proper cache control
app.use(express.static(__dirname, {
  maxAge: '1h',
  setHeaders: (res, filePath) => {
    if (filePath.endsWith('.html')) {
      res.setHeader('Cache-Control', 'public, max-age=0, must-revalidate');
    } else if (filePath.match(/\.(woff2?|svg|png|jpg|webp|avif|ico)$/)) {
      res.setHeader('Cache-Control', 'public, max-age=86400, stale-while-revalidate=604800');
    }
  }
}));

// Also serve static assets from dist/ directory if built
app.use(express.static(path.join(__dirname, 'dist'), {
  maxAge: '1h'
}));

// Fallback for single-page app routing (matches _redirects: /* /index.html 200)
app.use((req, res) => {
  res.setHeader('Cache-Control', 'public, max-age=0, must-revalidate');
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, HOST, () => {
  console.log(`IAKOPA static server running at http://${HOST}:${PORT}`);
});
