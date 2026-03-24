// cambiamento frasi sottotitolo
const frasiSottotitolo = [
    "qui ci poteva stare qualcosa di intelligente, invece no",
    "poteva iniziare con una citazione, non è successo.",
    "in teoria dovrei darti una ragione per leggere",
    "ho dimenticato cosa volevo scrivere qui",
    "se capisci, spiegamelo",
    "poteva essere peggio: poteva essere motivazionale",
    "forse era meglio un video di gatti",
    "questo spazio era vuoto. ora è confuso",
  ];

  const fraseScelta = frasiSottotitolo[Math.floor(Math.random() * frasiSottotitolo.length)];
  document.getElementById("sottotitolo-rotante").textContent = fraseScelta;


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




// 📖 Funzione per aprire un testo casuale
function apriTestoRandom() {
  const testi = [
    "testi/2026/marzo/Attrito_della_consapevolezza/attrito_della_consapevolezza.html",
    "testi/2025/LUGLIO/Non e tutta una questione di fede/non e tutta una questione di fede.html",
    "testi/2025/LUGLIO/non voglio essere salvato da una frase fatta/non voglio essere salvato da una frase fatta.html",
    "testi/2025/LUGLIO/Il cane piu addestrato del cortile/Il cane piu addestrato del cortile.html",
    "testi/2025/GIUGNO/Il rumore sordo e prolungato della battaglia/Il rumore sordo e prolungato della battaglia.html",
    "testi/2025/GIUGNO/Nominare i rapporti di potere/Nominare i rapporti di potere.html",
    "testi/2025/GIUGNO/Uomo di merda/Uomo di merda.html",
    "testi/2025/GIUGNO/Gabbia luminosa/Una gabbia luminosa.html",
    "testi/2025/GIUGNO/non sono un medico/Non sono un medico non voglio essere un paziente.html",
    "testi/2025/maggio/Dopo ventitré pagine non mi fido più nemmeno di me stesso/Dopo ventitré pagine non mi fido più nemmeno di me stesso.html",
    "testi/2025/maggio/Voglio_lo_stipendio_per_andare_all_assemblea_di_quartiere/vogliolostipendio.html",

    "testi/2025/maggio/Cronache di uno che si è smentito da solo/Cronache di uno che si è smentito da solo.html",
    "testi/2025/maggio/Radici concettuali non pervenute/Radici concettuali non pervenute.html"
   

  ];

  const overlay = document.getElementById("overlay-random");
  const box = document.getElementById("box-random");
  overlay.style.display = "flex";
  overlay.classList.remove("hide");
  box.textContent = "Vediamo cosa ti capita...";

  setTimeout(() => {
    box.textContent = "Ecco qualcosa. Senza fretta.";
  }, 1400);

  // Dissolvenza in uscita dopo 2.2s
  setTimeout(() => {
    overlay.classList.add("hide");
  }, 2200);

  // Reindirizza dopo 3s
  setTimeout(() => {
    const randomIndex = Math.floor(Math.random() * testi.length);
    window.location.href = testi[randomIndex];
  }, 3000);
}

// ✅ Rendi cliccabili solo i link nei box, non l'intero box
document.querySelectorAll('.anteprima-box').forEach(box => {
  box.addEventListener('click', e => {
    // Se l'elemento cliccato è un link, lascia passare il click
    if (e.target.tagName.toLowerCase() === 'a') return;
    // Altrimenti, previene l'azione di default
    e.preventDefault();
  });
});

