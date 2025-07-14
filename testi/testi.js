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


// 🔗 Scroll fluido + effetto pulse per note e ritorno
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function (e) {
    const targetId = this.getAttribute('href');
    const target = document.querySelector(targetId);
    if (target) {
      e.preventDefault();

      // Scroll centrato
      target.scrollIntoView({ behavior: 'smooth', block: 'center' });

      // Rimuove classe precedente se presente (per ri-triggerare animazione)
      target.classList.remove('pulse');

      // Forza reflow per riapplicare animazione (hack JS)
      void target.offsetWidth;

      // Aggiunge la classe per l'effetto pulse
      target.classList.add('pulse');
    }
  });
});
// 🖥️ Inserimento dinamico dell'interfaccia condivisa
document.addEventListener("DOMContentLoaded", () => {
  const interfaccia = document.getElementById("interfaccia-condivisa");
  if (interfaccia) {
    interfaccia.innerHTML = `
      <div class="theme-toggle-wrapper">
        <button class="toggle-button" id="bottone-tema" onclick="cambiaFraseEBottone()">fai tu</button>
      </div>
      <div class="back-button-wrapper">
        <a class="toggle-button" href="../../../../index.html">← torna alla home</a>
      </div>


    `
    ;
  }





  
});


