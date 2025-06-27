// 🎭 Frasi alternative per il bottone tema (cambiano ad ogni click)
const frasi = [
  "fai tu",
  "meglio?",
  "ci hai ripensato?",
  "ottimo così",
  "fai come ti pare",
  "basta cliccare",
  "...",
  "...",
  "...",
  "...",
  "...",
  "...",
  "finito?",
  "...",
  "...",
  "...",
  "...",
  "...",
];

let indiceFrase = 0;

// 🔄 Cambia sia tema che frase del bottone
function cambiaFraseEBottone() {
  // Cambia tema tra light e dark
  const current = document.body.getAttribute('data-theme');
  const next = current === 'light' ? 'dark' : 'light';
  document.body.setAttribute('data-theme', next);
  localStorage.setItem('theme', next);

  // Cambia frase del bottone (in modo ciclico)
  indiceFrase = (indiceFrase + 1) % frasi.length;
  const bottone = document.getElementById("bottone-tema");
  if (bottone) bottone.textContent = frasi[indiceFrase];
}

// 🌓 Imposta il tema salvato o preferito all’avvio
(function () {
  const saved = localStorage.getItem('theme');
  const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  document.body.setAttribute('data-theme', saved || (prefersDark ? 'dark' : 'light'));
})();