import { createChallenge, pbkdf2 } from 'altcha/lib'
import react from '@vitejs/plugin-react'
import type { Connect } from 'vite'
import { defineConfig } from 'vite'

const altchaChallengeHandler: Connect.NextHandleFunction = async (req, res, next) => {
  const path = req.url?.split('?')[0] ?? ''
  if (path !== '/api/challenge') {
    next()
    return
  }
  if (req.method !== 'GET' && req.method !== 'HEAD') {
    next()
    return
  }
  try {
    const challenge = await createChallenge({
      algorithm: 'PBKDF2/SHA-256',
      cost: 5000,
      deriveKey: pbkdf2.deriveKey,
    })
    res.setHeader('Content-Type', 'application/json')
    res.setHeader('Cache-Control', 'no-store')
    res.end(JSON.stringify(challenge))
  } catch (e) {
    next(e)
  }
}

function altchaChallengePlugin() {
  return {
    name: 'altcha-challenge',
    configureServer(server) {
      server.middlewares.use(altchaChallengeHandler)
    },
    configurePreviewServer(server) {
      server.middlewares.use(altchaChallengeHandler)
    },
  }
}

export default defineConfig({
  plugins: [react(), altchaChallengePlugin()],
})
