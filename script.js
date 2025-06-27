
const frasi = [
    "fai tu",
    "meglio?",
    "ci hai ripensato?",
    "ottimo così",
    "basta cliccare",
    "...",
    "fai come ti pare",
  ];

  let indiceFrase = 0;

  function cambiaFraseEBottone() {
    // Cambia tema
    const current = document.body.getAttribute('data-theme');
    const next = current === 'light' ? 'dark' : 'light';
    document.body.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);

    // Cambia frase del bottone
    indiceFrase = (indiceFrase + 1) % frasi.length;
    document.getElementById("bottone-tema").textContent = frasi[indiceFrase];
  }

  // Imposta tema all'avvio
  (function () {
    const saved = localStorage.getItem('theme');
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    document.body.setAttribute('data-theme', saved || (prefersDark ? 'dark' : 'light'));
  })();
