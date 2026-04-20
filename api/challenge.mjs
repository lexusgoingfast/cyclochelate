import { createChallenge, pbkdf2 } from 'altcha/lib';

export default async function handler(req, res) {
  if (req.method !== 'GET' && req.method !== 'HEAD') {
    res.statusCode = 405;
    res.end();
    return;
  }
  const challenge = await createChallenge({
    algorithm: 'PBKDF2/SHA-256',
    cost: 5000,
    deriveKey: pbkdf2.deriveKey,
  });
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Cache-Control', 'no-store');
  res.statusCode = 200;
  res.end(JSON.stringify(challenge));
}
