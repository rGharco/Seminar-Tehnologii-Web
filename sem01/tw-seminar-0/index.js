import express from 'express';

const app = express();
const PORT = process.env.PORT || 3000;

// Servește fișiere statice din directorul public
app.use(express.static('public'));

// Rută de sănătate
app.get('/ping', (req, res) => {
  res.type('text/plain').send('pong');
});

// API pentru timp curent
app.get('/api/time', (req, res) => {
  res.json({ now: new Date().toISOString() });
});

// Pornire server
app.listen(PORT, () => {
  console.log(`Server pornit: http://localhost:${PORT}`);
});
