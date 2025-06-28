require('dotenv').config();
const express = require('express');
const jwt = require('jsonwebtoken');
const cors = require('cors');

const app = express();
app.use(cors({ origin: 'http://localhost:3000' }));
app.use(express.json());

const PORT = process.env.PORT || 5000;
const { JWT_SECRET, JWT_ISSUER, JWT_AUDIENCE } = process.env;

app.post('/api/auth/login', (req, res) => {
  const { username, password } = req.body;
  if (username === 'user' && password === 'password') {
    const payload = { sub: username, role: 'User' };
    const token = jwt.sign(payload, JWT_SECRET, {
      issuer: JWT_ISSUER,
      audience: JWT_AUDIENCE,
      expiresIn: '2h'
    });
    return res.json({ token });
  }
  return res.status(401).json({ message: 'Credenciales inválidas' });
});

app.get('/api/secure', (req, res) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) return res.sendStatus(401);
  const token = authHeader.split(' ')[1];
  try {
    const decoded = jwt.verify(token, JWT_SECRET, {
      issuer: JWT_ISSUER,
      audience: JWT_AUDIENCE
    });
    return res.json({ user: decoded.sub, date: new Date() });
  } catch (err) {
    return res.sendStatus(401);
  }
});

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});