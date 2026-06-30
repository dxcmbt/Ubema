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
    name: 'Frutilla Clásica',
    category: 'mermelada', filter: 'dulce',
    flavors: ['Dulce', 'Fresco', 'Clásico'],
    desc: 'Frutillas frescas cosechadas en temporada alta, cocinadas lentamente con azúcar de caña para preservar todo su color y aroma natural. La más pedida de Ubema.',
    uses: 'Perfecta con tostadas, marraquetas recién horneadas, panqueques o como relleno de tartas artesanales.'
  },
  {
    id: 'j2', emoji: '🍑',
    name: 'Durazno y Vainilla',
    category: 'mermelada', filter: 'dulce',
    flavors: ['Dulce', 'Aromático', 'Suave'],
    desc: 'Duraznos de temporada pelados a mano, con una pizca de vainilla natural que eleva cada cucharada. Textura densa con trozos de fruta entera.',
    uses: 'Ideal para acompañar queso fresco, yogur natural o como relleno de alfajores y tortas caseras.'
  },
  {
    id: 'j3', emoji: '🍊',
    name: 'Naranja y Jengibre',
    category: 'mermelada', filter: 'acida',
    flavors: ['Cítrico', 'Picante suave', 'Intenso'],
    desc: 'Naranjas de cáscara fina con jengibre fresco rallado. Un sabor que despierta el paladar. Cocción lenta en cobre para una consistencia perfecta.',
    uses: 'Excelente con panes de masa madre, quesos maduros o para glasear carnes de cerdo y pollo a la parrilla.'
  },
  {
    id: 'j4', emoji: '🫐',
    name: 'Murta Silvestre',
    category: 'mermelada', filter: 'acida',
    flavors: ['Ácido', 'Silvestre', 'Profundo'],
    desc: 'Recogida a mano en los bosques nativos del sur de Chile. La murta tiene un sabor único y profundamente local, imposible de replicar con fruta de invernadero.',
    uses: 'Combina excepcionalmente con queso de cabra, tostadas con mantequilla o como topping en helados artesanales.'
  },
  {
    id: 'j5', emoji: '🍇',
    name: 'Ciruela Negra',
    category: 'mermelada', filter: 'dulce',
    flavors: ['Dulce', 'Profundo', 'Con cuerpo'],
    desc: 'Ciruelas negras de cosecha propia, deshuesadas y cocidas con canela en rama. Una mermelada oscura, densa y con personalidad que no deja indiferente.',
    uses: 'Perfecta en tabla de quesos, con mantequilla en pan negro o como base de salsas para carnes rojas.'
  },
  {
    id: 'j6', emoji: '🌶️',
    name: 'Ají y Mango',
    category: 'mermelada', filter: 'especial',
    flavors: ['Agridulce', 'Picante', 'Tropical'],
    desc: 'Mango maduro con ají cristal fresco. La fusión perfecta entre lo dulce y lo picante. Una de las mermeladas más sorprendentes y comentadas de nuestro catálogo.',
    uses: 'Ideal con queso crema, carnes a la parrilla, empanadas o simplemente sobre tostadas con mantequilla.'
  },
  {
    id: 'j7', emoji: '🍒',
    name: 'Guinda Amarga',
    category: 'mermelada', filter: 'acida',
    flavors: ['Ácido', 'Afrutado', 'Intenso'],
    desc: 'Guindas de temporada corta, recogidas en su punto exacto de madurez. Color rojo rubí profundo con sabor que va de lo dulce a lo ácido en cada cucharada.',
    uses: 'Clásica sobre postres de chocolate, panqueques o con helado de vainilla artesanal de temporada.'
  },
  {
    id: 'j8', emoji: '🍋',
    name: 'Limón de Pica',
    category: 'mermelada', filter: 'acida',
    flavors: ['Cítrico', 'Intenso', 'Refrescante'],
    desc: 'Con los famosos limones de Pica, de cáscara delgada y jugo abundante. Poca azúcar para que la fruta brille sola. Una mermelada de carácter que no da tregua.',
    uses: 'Perfecta en tostadas, como relleno de tartitas o para refrescar un yogur natural en el desayuno.'
  },
  {
    id: 'j9', emoji: '🍅',
    name: 'Tomate y Albahaca',
    category: 'mermelada', filter: 'especial',
    flavors: ['Salado-dulce', 'Herbáceo', 'Gourmet'],
    desc: 'Nuestra mermelada más sorprendente. Tomates maduros de cosecha propia con albahaca fresca. A medio camino entre la mermelada y la salsa gourmet. Un producto de autor.',
    uses: 'Nació para tablas de quesos, pero funciona igual de bien con carnes asadas, bruschetta o pizzas artesanales.'
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
  { id: 'h1',  emoji: '🥬', name: 'Lechugas',          category: 'hortaliza', filter: 'otono-invierno',  season: 'Otoño · Invierno',  desc: 'Lechugas frescas de hoja suave y crujiente, cosechadas en temporada fría cuando concentran mejor su sabor y textura.' },
  { id: 'h2',  emoji: '🍅', name: 'Tomates',            category: 'hortaliza', filter: 'otono-invierno',  season: 'Otoño · Invierno',  desc: 'Tomates de temporada con todo su color y jugosidad, cultivados en el campo Ubema sin prisa.' },
  { id: 'h3',  emoji: '🟣', name: 'Betarraga',          category: 'hortaliza', filter: 'otono-invierno',  season: 'Otoño · Invierno',  desc: 'Betarragas dulces y terrosas, perfectas para ensaladas, jugos y acompañamientos nutritivos.' },
  { id: 'h4',  emoji: '🥦', name: 'Repollo',            category: 'hortaliza', filter: 'otono-invierno',  season: 'Otoño · Invierno',  desc: 'Repollo verde firme y fresco, ideal para ensaladas, rellenos y guisos de temporada.' },
  { id: 'h5',  emoji: '🟣', name: 'Repollo Morado',    category: 'hortaliza', filter: 'otono-invierno',  season: 'Otoño · Invierno',  desc: 'Repollo morado vibrante con sabor ligeramente más dulce que el verde, excelente en encurtidos y ensaladas.' },
  { id: 'h6',  emoji: '🫘', name: 'Habas',              category: 'hortaliza', filter: 'otono-invierno',  season: 'Otoño · Invierno',  desc: 'Habas tiernas y nutritivas, recogidas en su punto justo para aprovechar todo su sabor y textura cremosa.' },
  { id: 'h7',  emoji: '🌿', name: 'Cebollín',           category: 'hortaliza', filter: 'otono-invierno',  season: 'Otoño · Invierno',  desc: 'Cebollines frescos y aromáticos, corte a corte durante toda la temporada fría.' },
  { id: 'h8',  emoji: '🌿', name: 'Apio',               category: 'hortaliza', filter: 'otono-invierno',  season: 'Otoño · Invierno',  desc: 'Apio crujiente y aromático, perfecto para caldos, ensaladas y como base de sofritos.' },
  { id: 'h9',  emoji: '🌿', name: 'Perejil',            category: 'hortaliza', filter: 'otono-invierno',  season: 'Otoño · Invierno',  desc: 'Perejil fresco de hoja plana, aromático y lleno de sabor, indispensable en la cocina.' },
  { id: 'h10', emoji: '🥦', name: 'Coliflor',           category: 'hortaliza', filter: 'otono-invierno',  season: 'Otoño · Invierno',  desc: 'Coliflor blanca y compacta, cosechada en temporada fría cuando alcanza su mejor calidad.' },
  { id: 'h11', emoji: '🌶️', name: 'Ají Negro',          category: 'hortaliza', filter: 'primavera-verano', season: 'Primavera · Verano', desc: 'Ají negro de sabor único e intenso, cultivado en temporada cálida con todo el carácter de nuestra tierra.' },
  { id: 'h12', emoji: '🌶️', name: 'Ají Blanco',         category: 'hortaliza', filter: 'primavera-verano', season: 'Primavera · Verano', desc: 'Ají blanco de sabor suave y aromático, especial para dar toque de la cosecha de primavera-verano.' },
  { id: 'h13', emoji: '🌿', name: 'Chascu',             category: 'hortaliza', filter: 'primavera-verano', season: 'Primavera · Verano', desc: 'Hierba autóctona de sabor intenso y profundo, parte de la tradición culinaria del sur de Chile.' },
  { id: 'h14', emoji: '🧅', name: 'Cebolla',            category: 'hortaliza', filter: 'primavera-verano', season: 'Primavera · Verano', desc: 'Cebollas de primavera recién cosechadas, dulces y tiernas, perfectas para todo tipo de preparaciones.' },
  { id: 'h15', emoji: '🌿', name: 'Porros',             category: 'hortaliza', filter: 'primavera-verano', season: 'Primavera · Verano', desc: 'Porros frescos de temporada, de sabor suave y delicado, ideales para sopas y guisos.' },
  { id: 'h16', emoji: '🍅', name: 'Tomates',            category: 'hortaliza', filter: 'primavera-verano', season: 'Primavera · Verano', desc: 'Tomates de verano maduros bajo el sol, jugosos y llenos de sabor en su mejor momento.' },
  { id: 'h17', emoji: '🥒', name: 'Pepinos',            category: 'hortaliza', filter: 'primavera-verano', season: 'Primavera · Verano', desc: 'Pepinos frescos y crujientes de temporada de verano, perfectos para ensaladas y encurtidos.' },
  { id: 'h18', emoji: '🥕', name: 'Zanahorias',         category: 'hortaliza', filter: 'primavera-verano', season: 'Primavera · Verano', desc: 'Zanahorias dulces y coloridas recién sacadas de la tierra, con toda su frescura y nutrientes.' },
  { id: 'h19', emoji: '🌿', name: 'Pasto Verde',        category: 'hortaliza', filter: 'primavera-verano', season: 'Primavera · Verano', desc: 'Hierba fresca de primavera, aromática y versátil para múltiples usos culinarios.' },
  { id: 'h20', emoji: '🟩', name: 'Zapallo Italiano',  category: 'hortaliza', filter: 'primavera-verano', season: 'Primavera · Verano', desc: 'Zapallo italiano tierno y brillante de temporada alta, delicado y muy versátil en la cocina.' },
  { id: 'h21', emoji: '🥬', name: 'Lechugas',           category: 'hortaliza', filter: 'primavera-verano', season: 'Primavera · Verano', desc: 'Lechugas de verano con hojas amplias y frescas, perfectas para ensaladas del mediodía.' },
  { id: 'h22', emoji: '🌿', name: 'Cilantro',           category: 'hortaliza', filter: 'primavera-verano', season: 'Primavera · Verano', desc: 'Cilantro fresco y aromático de temporada, indispensable en salsas, pebres y ensaladas chilenas.' }
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
  card.innerHTML = `
    <div class="card-emoji-area">
      ${item.emoji}
      <div class="category-badge">${filterLabel(item.filter)}</div>
    </div>
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
  card.innerHTML = `
    <div class="card-emoji-area">
      ${item.emoji}
      <div class="category-badge season-badge">${item.season}</div>
    </div>
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
  modalBody.innerHTML = `
    <div class="modal-emoji-banner">${item.emoji}</div>
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
  modalBody.innerHTML = `
    <div class="modal-emoji-banner">${item.emoji}</div>
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
