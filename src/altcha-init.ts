import 'altcha';
import 'altcha/altcha.css';

const challengeUrl =
  import.meta.env.VITE_ALTCHA_CHALLENGE_URL || '/api/challenge';

function init() {
  const el = document.getElementById('consultAltcha');
  if (!el) return;
  el.setAttribute('challenge', challengeUrl);
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
