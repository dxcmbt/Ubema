/* ============================================================
   UBEMA — script.js
   ============================================================ */

'use strict';

// ════════════════════════════════════════════════════════════════
//  DATOS — MERMELADAS
// ════════════════════════════════════════════════════════════════
const JAMS = [
  {
    id: 'j1', emoji: '🍓',
    img: 'img/MermeladaFrutilla.png',
    name: 'Frutilla',
    category: 'mermelada', filter: 'dulce',
    flavors: ['Dulce', 'Fresco', 'Clásico'],
    desc: 'Frutillas frescas cosechadas en temporada alta, cocinadas lentamente con azúcar de caña para preservar todo su color y aroma natural. La más pedida de Ubema.',
    uses: 'Perfecta con tostadas, marraquetas recién horneadas, panqueques o como relleno de tartas artesanales.'
  },
  {
    id: 'j2', emoji: '🍑',
    img: 'img/mermeladaDurazno.png',
    name: 'Durazno Amarillo',
    category: 'mermelada', filter: 'dulce',
    flavors: ['Dulce', 'Aromático', 'Suave'],
    desc: 'Duraznos amarillos de temporada pelados a mano, con una pizca de vainilla natural que eleva cada cucharada. Textura densa con trozos de fruta entera.',
    uses: 'Ideal para acompañar queso fresco, yogur natural o como relleno de alfajores y tortas caseras.'
  },
  {
    id: 'j5', emoji: '🍇',
    img: 'img/MerrmeladaCiruela.png',
    name: 'Ciruela',
    category: 'mermelada', filter: 'dulce',
    flavors: ['Dulce', 'Profundo', 'Con cuerpo'],
    desc: 'Ciruelas de cosecha propia, deshuesadas y cocidas con canela en rama. Una mermelada oscura, densa y con personalidad que no deja indiferente.',
    uses: 'Perfecta en tabla de quesos, con mantequilla en pan negro o como base de salsas para carnes rojas.'
  },
  {
    id: 'j6', emoji: '🌶️',
    img: 'img/AjiMango.png',
    name: 'Ají y Mango',
    category: 'mermelada', filter: 'especial',
    flavors: ['Agridulce', 'Picante', 'Tropical'],
    desc: 'Mango maduro con ají cristal fresco. La fusión perfecta entre lo dulce y lo picante. Una de las mermeladas más sorprendentes y comentadas de nuestro catálogo.',
    uses: 'Ideal con queso crema, carnes a la parrilla, empanadas o simplemente sobre tostadas con mantequilla.'
  },
  {
    id: 'j7', emoji: '🍒',
    img: 'img/MermeladaCereza.png',
    name: 'Cereza',
    category: 'mermelada', filter: 'acida',
    flavors: ['Ácido', 'Afrutado', 'Intenso'],
    desc: 'Cerezas de temporada corta, recogidas en su punto exacto de madurez. Color rojo rubí profundo con sabor que va de lo dulce a lo ácido en cada cucharada.',
    uses: 'Clásica sobre postres de chocolate, panqueques o con helado de vainilla artesanal de temporada.'
  },
  {
    id: 'j9', emoji: '🍅',
    img: 'img/tomateYalbahaca.png',
    name: 'Tomate y Albahaca',
    category: 'mermelada', filter: 'especial',
    flavors: ['Salado-dulce', 'Herbáceo', 'Gourmet'],
    desc: 'Nuestra mermelada más sorprendente. Tomates maduros de cosecha propia con albahaca fresca. A medio camino entre la mermelada y la salsa gourmet. Un producto de autor.',
    uses: 'Nació para tablas de quesos, pero funciona igual de bien con carnes asadas, bruschetta o pizzas artesanales.'
  },
  {
    id: 'j10', emoji: '🫐',
    img: 'img/MermeladaFrutillayArandano.png',
    name: 'Arándano y Frutilla',
    category: 'mermelada', filter: 'especial',
    flavors: ['Dulce', 'Ácido', 'Silvestre'],
    desc: 'La combinación perfecta entre la frutilla fresca y el arándano silvestre. Dos frutas del sur de Chile en un solo frasco, llenas de color y antioxidantes naturales.',
    uses: 'Ideal con yogur natural, pancakes, tostadas con queso crema o como relleno de tortas y postres artesanales.'
  },
  {
    id: 'j11', emoji: '🍑',
    img: 'img/DuraznoBetarraga.png',
    name: 'Durazno Betarraga',
    category: 'mermelada', filter: 'especial',
    flavors: ['Dulce', 'Terroso', 'Único'],
    desc: 'Una combinación sorprendente y artesanal: durazno de temporada con betarraga fresca de cosecha propia. Sabor dulce con un toque terroso y un color rojo intenso que enamora.',
    uses: 'Ideal con queso fresco, yogur natural, tostadas o como relleno gourmet en tartas y postres caseros.'
  },
  {
    id: 'j12', emoji: '🫐',
    img: 'img/MermeladaMora.png',
    name: 'Mora',
    category: 'mermelada', filter: 'acida',
    flavors: ['Ácido', 'Silvestre', 'Intenso'],
    desc: 'Moras silvestres recogidas a mano en temporada. Color púrpura profundo y sabor intenso que equilibra lo dulce y lo ácido en cada cucharada. Un clásico artesanal de Ubema.',
    uses: 'Ideal con yogur, tostadas, queso crema o como topping en helados y postres. También en tabla de quesos.'
  }
];

// ════════════════════════════════════════════════════════════════
//  DATOS — AJÍES
// ════════════════════════════════════════════════════════════════
const CHILIS = [
  {
    id: 'c1', emoji: '🌶️',
    name: 'Ají Cacho de Cabra',
    category: 'ají', filter: 'ahumado',
    flavors: ['Ahumado', 'Dulce', 'Seco'],
    desc: 'El ají chileno por excelencia. Rojo intenso, ligeramente ahumado y con sabor suave que cualquiera puede disfrutar. Ideal para quienes se inician en el mundo de los ajíes.',
    uses: 'Base del merkén, adobos, salsas criollas y cualquier preparación que pida color y sabor.'
  },
  {
    id: 'c2', emoji: '🫑',
    name: 'Ají Cristal',
    category: 'ají', filter: 'frutal',
    flavors: ['Frutal', 'Fresco', 'Jugoso'],
    desc: 'Verde translúcido y brillante. El más jugoso de todos. Sabor frutal y fresco muy popular en el sur de Chile.',
    uses: 'Fresco en ensaladas, picado en pebre, relleno con queso o simplemente asado a las brasas del asado.'
  },
  {
    id: 'c3', emoji: '🟤',
    name: 'Merkén Ubema',
    category: 'ají', filter: 'ahumado',
    flavors: ['Ahumado', 'Terroso', 'Mapuche'],
    desc: 'El condimento más emblemático de la gastronomía mapuche, preparado según receta tradicional. Ají cacho de cabra ahumado y molido con semillas de cilantro y sal de mar.',
    uses: 'Sobre huevos, mantequilla, mariscos, sopas, carnes o simplemente sobre pan con un buen aceite de oliva.'
  },
  {
    id: 'c4', emoji: '🌶️',
    name: 'Ají Amarillo',
    category: 'ají', filter: 'floral',
    flavors: ['Floral', 'Frutal', 'Cítrico'],
    desc: 'La estrella de la cocina peruana que ya es nuestra. Naranja vivo con notas florales y cítricas. Aroma que transforma cualquier plato que toca.',
    uses: 'Indispensable en ají de gallina, ceviches, salsas y guisos. También en pasta mezclado con queso crema.'
  },
  {
    id: 'c5', emoji: '🔴',
    name: 'Ají Rocoto',
    category: 'ají', filter: 'intenso',
    flavors: ['Intenso', 'Afrutado', 'Cárnico'],
    desc: 'Rojo encendido, con semillas negras y pared carnosa. Tiene un sabor profundo y afrutado muy característico de la región andina.',
    uses: 'En rellenos como el rocoto relleno peruano, salsas picantes, escabeches y para quienes saben lo que quieren.'
  },
  {
    id: 'c6', emoji: '🟫',
    name: 'Ají Panca',
    category: 'ají', filter: 'ahumado',
    flavors: ['Ahumado', 'Dulce', 'Complejo'],
    desc: 'Seco y arrugado, de color marrón oscuro. Sabor ahumado, casi achocolatado. Una joya de la despensa andina que aporta profundidad y complejidad.',
    uses: 'En adobos de cerdo, salsas para pasta, guisos de legumbres o como base de marinadas para asados.'
  },
  {
    id: 'c7', emoji: '🟠',
    name: 'Ají Habanero',
    category: 'ají', filter: 'frutal',
    flavors: ['Tropical', 'Cítrico', 'Afrutado'],
    desc: 'Anaranjado brillante con notas cítricas y tropicales muy pronunciadas. Un sabor exótico y vibrante que destaca en cualquier preparación.',
    uses: 'Salsas concentradas, marinadas o aceites saborizados. Aporta aroma tropical inconfundible.'
  },
  {
    id: 'c8', emoji: '🟢',
    name: 'Ají Verde Chileno',
    category: 'ají', filter: 'herbaceo',
    flavors: ['Herbáceo', 'Fresco', 'Vegetal'],
    desc: 'El del pebre de la abuela. Verde, fresco y con sabor herbáceo que da carácter. Recogido joven, cuando su aroma está en su punto máximo.',
    uses: 'Pebre, chancho en piedra, ensalada chilena y compañía obligada de cualquier asado que se respete.'
  }
];

// ════════════════════════════════════════════════════════════════
//  DATOS — HORTALIZAS
// ════════════════════════════════════════════════════════════════
const HORTALIZAS = [
  { id: 'h1',  emoji: '🥬', img: 'img/lechuga.png',  name: 'Lechugas',  category: 'hortaliza', filter: 'otono-invierno',  season: 'Otoño · Invierno',  desc: 'Lechugas frescas de hoja suave y crujiente, cosechadas en temporada fría cuando concentran mejor su sabor y textura.' },
  { id: 'h2',  emoji: '🍅', img: 'img/tomates.png',  name: 'Tomates',   category: 'hortaliza', filter: 'otono-invierno',  season: 'Otoño · Invierno',  desc: 'Tomates de temporada con todo su color y jugosidad, cultivados en el campo Ubema sin prisa.' },
  { id: 'h3',  emoji: '🟣', img: 'img/betarrafga.png', name: 'Betarraga', category: 'hortaliza', filter: 'otono-invierno',  season: 'Otoño · Invierno',  desc: 'Betarragas dulces y terrosas, perfectas para ensaladas, jugos y acompañamientos nutritivos.' },
  { id: 'h4',  emoji: '🥦', img: 'img/repollo.png',  name: 'Repollo',   category: 'hortaliza', filter: 'otono-invierno',  season: 'Otoño · Invierno',  desc: 'Repollo verde firme y fresco, ideal para ensaladas, rellenos y guisos de temporada.' },
  { id: 'h8',  emoji: '🌿', img: 'img/apio.png',     name: 'Apio',      category: 'hortaliza', filter: 'otono-invierno',  season: 'Otoño · Invierno',  desc: 'Apio crujiente y aromático, perfecto para caldos, ensaladas y como base de sofritos.' },
  { id: 'h9',  emoji: '🌿', img: 'img/perejil.png',  name: 'Perejil',   category: 'hortaliza', filter: 'otono-invierno',  season: 'Otoño · Invierno',  desc: 'Perejil fresco de hoja plana, aromático y lleno de sabor, indispensable en la cocina.' },
  { id: 'h10', emoji: '🥦', img: 'img/coliflor.png', name: 'Coliflor',  category: 'hortaliza', filter: 'otono-invierno',  season: 'Otoño · Invierno',  desc: 'Coliflor blanca y compacta, cosechada en temporada fría cuando alcanza su mejor calidad.' },
  { id: 'h14', emoji: '🧅', img: 'img/cebolla.png',  name: 'Cebolla',   category: 'hortaliza', filter: 'primavera-verano', season: 'Primavera · Verano', desc: 'Cebollas de primavera recién cosechadas, dulces y tiernas, perfectas para todo tipo de preparaciones.' },
  { id: 'h16', emoji: '🍅', img: 'img/tomates.png',  name: 'Tomates',   category: 'hortaliza', filter: 'primavera-verano', season: 'Primavera · Verano', desc: 'Tomates de verano maduros bajo el sol, jugosos y llenos de sabor en su mejor momento.' },
  { id: 'h17', emoji: '🥒', img: 'img/pepino.png',   name: 'Pepinos',   category: 'hortaliza', filter: 'primavera-verano', season: 'Primavera · Verano', desc: 'Pepinos frescos y crujientes de temporada de verano, perfectos para ensaladas y encurtidos.' }
];


// ════════════════════════════════════════════════════════════════
//  NAV
// ════════════════════════════════════════════════════════════════
const navbar    = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const navLinks  = document.getElementById('navLinks');

window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 40);
});

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

navLinks.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => navLinks.classList.remove('open'));
});

// ════════════════════════════════════════════════════════════════
//  CARRUSEL HERO
// ════════════════════════════════════════════════════════════════
function initCarousel() {
  const slides = document.querySelectorAll('.hero-slide');
  const dots   = document.querySelectorAll('.carousel-dot');
  const btnPrev = document.getElementById('carouselPrev');
  const btnNext = document.getElementById('carouselNext');
  if (!slides.length) return;

  let current = 0;
  let timer;

  function goTo(idx) {
    slides[current].classList.remove('active');
    dots[current].classList.remove('active');
    current = (idx + slides.length) % slides.length;
    slides[current].classList.add('active');
    dots[current].classList.add('active');
  }

  function next() { goTo(current + 1); }
  function prev() { goTo(current - 1); }

  function startAuto() { timer = setInterval(next, 5000); }
  function stopAuto()  { clearInterval(timer); }

  btnNext.addEventListener('click', () => { stopAuto(); next(); startAuto(); });
  btnPrev.addEventListener('click', () => { stopAuto(); prev(); startAuto(); });

  dots.forEach(dot => {
    dot.addEventListener('click', () => {
      stopAuto();
      goTo(parseInt(dot.dataset.index));
      startAuto();
    });
  });

  const carousel = document.getElementById('heroCarousel');
  carousel.addEventListener('mouseenter', stopAuto);
  carousel.addEventListener('mouseleave', startAuto);

  startAuto();
}

// ════════════════════════════════════════════════════════════════
//  REVEAL ON SCROLL
// ════════════════════════════════════════════════════════════════
function initReveal() {
  const els = document.querySelectorAll('.reveal');
  const obs = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add('visible'), i * 90);
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  els.forEach(el => obs.observe(el));
}

// ════════════════════════════════════════════════════════════════
//  RENDER TARJETAS
// ════════════════════════════════════════════════════════════════
function filterLabel(filter) {
  return { dulce: '🍬 Dulce', acida: '🍋 Ácida', especial: '⭐ Especial' }[filter] || filter;
}

function createJamCard(item) {
  const card = document.createElement('div');
  card.className = 'product-card';
  card.dataset.filter = item.filter;
  const mediaArea = item.img
    ? `<div class="card-img-area"><img src="${item.img}" alt="${item.name}" class="card-product-img" /><div class="category-badge">${filterLabel(item.filter)}</div></div>`
    : `<div class="card-emoji-area">${item.emoji}<div class="category-badge">${filterLabel(item.filter)}</div></div>`;
  card.innerHTML = `
    ${mediaArea}
    <div class="card-body">
      <span class="card-label">Mermelada artesanal · Ubema</span>
      <p class="card-name">${item.name}</p>
      <p class="card-desc">${item.desc.substring(0, 95)}…</p>
      <div class="card-tags">
        ${item.flavors.map(f => `<span class="tag tag-flavor">${f}</span>`).join('')}
      </div>
    </div>
  `;
  card.addEventListener('click', () => openModal(item));
  return card;
}

function createChiliCard(item) {
  const card = document.createElement('div');
  card.className = 'product-card';
  card.dataset.filter = item.filter;
  card.innerHTML = `
    <div class="card-emoji-area">
      ${item.emoji}
      <div class="category-badge flavor-badge">${item.flavors[0]}</div>
    </div>
    <div class="card-body">
      <span class="card-label">Ají · Ubema</span>
      <p class="card-name">${item.name}</p>
      <p class="card-desc">${item.desc.substring(0, 95)}…</p>
      <div class="card-tags">
        ${item.flavors.map(f => `<span class="tag tag-flavor">${f}</span>`).join('')}
      </div>
    </div>
  `;
  card.addEventListener('click', () => openModal(item));
  return card;
}

function createHortalizaCard(item) {
  const card = document.createElement('div');
  card.className = 'product-card';
  card.dataset.filter = item.filter;
  const mediaArea = item.img
    ? `<div class="card-img-area"><img src="${item.img}" alt="${item.name}" class="card-product-img" /><div class="category-badge season-badge">${item.season}</div></div>`
    : `<div class="card-emoji-area">${item.emoji}<div class="category-badge season-badge">${item.season}</div></div>`;
  card.innerHTML = `
    ${mediaArea}
    <div class="card-body">
      <span class="card-label">Hortaliza · Ubema</span>
      <p class="card-name">${item.name}</p>
      <p class="card-desc">${item.desc.substring(0, 95)}…</p>
    </div>
  `;
  card.addEventListener('click', () => openModalHortaliza(item));
  return card;
}

function renderCatalog(items, gridId, cardFn) {
  const grid = document.getElementById(gridId);
  grid.innerHTML = '';
  items.forEach(item => grid.appendChild(cardFn(item)));
}

// ════════════════════════════════════════════════════════════════
//  FILTROS
// ════════════════════════════════════════════════════════════════
function initFilters(filterId, gridId) {
  const bar = document.getElementById(filterId);
  if (!bar) return;
  bar.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      bar.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const f = btn.dataset.filter;
      document.querySelectorAll(`#${gridId} .product-card`).forEach(card => {
        card.classList.toggle('hidden', f !== 'all' && card.dataset.filter !== f);
      });

      // Hacer scroll para que la barra de filtros quede justo bajo el navbar
      // y los productos sean visibles inmediatamente debajo
      const navbarHeight = 68;
      const barTop = bar.getBoundingClientRect().top + window.scrollY - navbarHeight - 16;
      window.scrollTo({ top: barTop, behavior: 'smooth' });
    });
  });
}

// ════════════════════════════════════════════════════════════════
//  MODAL
// ════════════════════════════════════════════════════════════════
const modalOverlay = document.getElementById('productModal');
const modalBody    = document.getElementById('modalBody');
const modalClose   = document.getElementById('modalClose');

function openModal(item) {
  const banner = item.img
    ? `<div class="modal-img-banner"><img src="${item.img}" alt="${item.name}" /></div>`
    : `<div class="modal-emoji-banner">${item.emoji}</div>`;
  modalBody.innerHTML = `
    ${banner}
    <div class="modal-content-inner">
      <p class="modal-category">${item.category === 'ají' ? 'Ají · Ubema' : 'Mermelada artesanal · Ubema'}</p>
      <h2 class="modal-name">${item.name}</h2>
      <p class="modal-desc">${item.desc}</p>
      <div class="modal-details">
        ${item.flavors.map(f => `<span class="modal-chip">${f}</span>`).join('')}
      </div>
      <div class="modal-uses">
        <strong>💡 Usos recomendados</strong>
        ${item.uses}
      </div>
    </div>
  `;

  modalOverlay.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function openModalHortaliza(item) {
  const banner = item.img
    ? `<div class="modal-img-banner"><img src="${item.img}" alt="${item.name}" /></div>`
    : `<div class="modal-emoji-banner">${item.emoji}</div>`;
  modalBody.innerHTML = `
    ${banner}
    <div class="modal-content-inner">
      <p class="modal-category">Hortaliza · Ubema</p>
      <h2 class="modal-name">${item.name}</h2>
      <p class="modal-desc">${item.desc}</p>
      <div class="modal-details">
        <span class="modal-chip season">🌱 ${item.season}</span>
      </div>
    </div>
  `;

  modalOverlay.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  modalOverlay.classList.remove('active');
  document.body.style.overflow = '';
}

modalClose.addEventListener('click', closeModal);
modalOverlay.addEventListener('click', e => { if (e.target === modalOverlay) closeModal(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

// (formulario eliminado — contacto vía redes sociales)

// ════════════════════════════════════════════════════════════════
//  INIT
// ════════════════════════════════════════════════════════════════
(function init() {
  initCarousel();
  renderCatalog(JAMS,      'jamGrid',      createJamCard);
  renderCatalog(CHILIS,    'chiliGrid',    createChiliCard);
  renderCatalog(HORTALIZAS,'hortalizaGrid',createHortalizaCard);
  initFilters('jammFilters',      'jamGrid');
  initFilters('chiliFilters',     'chiliGrid');
  initFilters('hortalizaFilters', 'hortalizaGrid');
  initReveal();
})();
