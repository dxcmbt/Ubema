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
    id: 'c1', emoji: '🌶️', img: 'img/pastaAji.png',
    name: 'Ají Cacho de Cabra',
    category: 'ají', filter: 'ahumado',
    flavors: ['Ahumado', 'Dulce', 'Seco'],
    desc: 'El ají chileno por excelencia. Rojo intenso, ligeramente ahumado y con sabor suave que cualquiera puede disfrutar. Ideal para quienes se inician en el mundo de los ajíes.',
    uses: 'Base del merkén, adobos, salsas criollas y cualquier preparación que pida color y sabor.'
  },
  {
    id: 'c2', emoji: '🫑', img: 'img/AjiCristal.png',
    name: 'Ají Cristal',
    category: 'ají', filter: 'frutal',
    flavors: ['Frutal', 'Fresco', 'Jugoso'],
    desc: 'Verde translúcido y brillante. El más jugoso de todos. Sabor frutal y fresco muy popular en el sur de Chile.',
    uses: 'Fresco en ensaladas, picado en pebre, relleno con queso o simplemente asado a las brasas del asado.'
  },
  {
    id: 'c3', emoji: '🟤', img: 'img/MerkenUbema.png',
    name: 'Merkén Ubema',
    category: 'ají', filter: 'ahumado',
    flavors: ['Ahumado', 'Terroso', 'Mapuche'],
    desc: 'El condimento más emblemático de la gastronomía mapuche, preparado según receta tradicional. Ají cacho de cabra ahumado y molido con semillas de cilantro y sal de mar.',
    uses: 'Sobre huevos, mantequilla, mariscos, sopas, carnes o simplemente sobre pan con un buen aceite de oliva.'
  },
  {
    id: 'c5', emoji: '🔴', img: 'img/AjiRocoto.png',
    name: 'Ají Rocoto',
    category: 'ají', filter: 'intenso',
    flavors: ['Intenso', 'Afrutado', 'Cárnico'],
    desc: 'Rojo encendido, con semillas negras y pared carnosa. Tiene un sabor profundo y afrutado muy característico de la región andina.',
    uses: 'En rellenos como el rocoto relleno peruano, salsas picantes, escabeches y para quienes saben lo que quieren.'
  },
  {
    id: 'c6', emoji: '🟢', img: 'img/AjiVerde.png',
    name: 'Pasta de Ají Verde',
    category: 'ají', filter: 'herbaceo',
    flavors: ['Herbáceo', 'Fresco', 'Natural'],
    desc: 'Pasta artesanal de ají verde 100% natural de Rucapequén. Elaborada sin conservantes. Sabor intenso y fresco, ideal para quienes buscan el sabor auténtico del campo.',
    uses: 'Perfecta para acompañar asados, empanadas, choripanes o para darle un toque picante y fresco a cualquier guiso casero.'
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

  function startAuto() { timer = setInterval(next, 7000); }
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
//  CARRUSEL NOSOTROS
// ════════════════════════════════════════════════════════════════
function initNosotrosCarousel() {
  const slides = document.querySelectorAll('.nos-slide');
  const dots   = document.querySelectorAll('.nos-dot');
  const btnPrev = document.getElementById('nosPrev');
  const btnNext = document.getElementById('nosNext');
  if (!slides.length || !btnPrev || !btnNext) return;

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

  function startAuto() { timer = setInterval(next, 6000); }
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

  const carousel = document.getElementById('nosotrosCarousel');
  if (carousel) {
    carousel.addEventListener('mouseenter', stopAuto);
    carousel.addEventListener('mouseleave', startAuto);
  }

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
  const waBtn = `<a href="${waURL(item.name, item.category)}" target="_blank" rel="noopener" class="card-wa-btn" aria-label="Consultar ${item.name} por WhatsApp">${WA_SVG}</a>`;
  const mediaArea = item.img
    ? `<div class="card-img-area"><img src="${item.img}" alt="${item.name}" class="card-product-img" /><div class="category-badge">${filterLabel(item.filter)}</div>${waBtn}</div>`
    : `<div class="card-emoji-area">${item.emoji}<div class="category-badge">${filterLabel(item.filter)}</div>${waBtn}</div>`;
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
  card.querySelector('.card-wa-btn').addEventListener('click', e => e.stopPropagation());
  return card;
}

function createChiliCard(item) {
  const card = document.createElement('div');
  card.className = 'product-card';
  card.dataset.filter = item.filter;
  const waBtn = `<a href="${waURL(item.name, item.category)}" target="_blank" rel="noopener" class="card-wa-btn" aria-label="Consultar ${item.name} por WhatsApp">${WA_SVG}</a>`;
  const mediaArea = item.img
    ? `<div class="card-img-area"><img src="${item.img}" alt="${item.name}" class="card-product-img" /><div class="category-badge flavor-badge">${item.flavors[0]}</div>${waBtn}</div>`
    : `<div class="card-emoji-area">${item.emoji}<div class="category-badge flavor-badge">${item.flavors[0]}</div>${waBtn}</div>`;
  card.innerHTML = `
    ${mediaArea}
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
  card.querySelector('.card-wa-btn').addEventListener('click', e => e.stopPropagation());
  return card;
}

function createHortalizaCard(item) {
  const card = document.createElement('div');
  card.className = 'product-card';
  card.dataset.filter = item.filter;
  const waBtn = `<a href="${waURL(item.name, item.category)}" target="_blank" rel="noopener" class="card-wa-btn" aria-label="Consultar ${item.name} por WhatsApp">${WA_SVG}</a>`;
  const mediaArea = item.img
    ? `<div class="card-img-area"><img src="${item.img}" alt="${item.name}" class="card-product-img" /><div class="category-badge season-badge">${item.season}</div>${waBtn}</div>`
    : `<div class="card-emoji-area">${item.emoji}<div class="category-badge season-badge">${item.season}</div>${waBtn}</div>`;
  card.innerHTML = `
    ${mediaArea}
    <div class="card-body">
      <span class="card-label">Hortaliza · Ubema</span>
      <p class="card-name">${item.name}</p>
      <p class="card-desc">${item.desc.substring(0, 95)}…</p>
    </div>
  `;
  card.addEventListener('click', () => openModalHortaliza(item));
  card.querySelector('.card-wa-btn').addEventListener('click', e => e.stopPropagation());
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
// ════════════════════════════════
const modalOverlay = document.getElementById('productModal');
const modalBody    = document.getElementById('modalBody');
const modalClose   = document.getElementById('modalClose');

const WA_NUMBER = '56958942951';

const WA_SVG = `<svg viewBox="0 0 32 32" fill="white" xmlns="http://www.w3.org/2000/svg"><path d="M16 0C7.163 0 0 7.163 0 16c0 2.822.737 5.478 2.027 7.788L0 32l8.418-2.007A15.93 15.93 0 0016 32c8.837 0 16-7.163 16-16S24.837 0 16 0zm0 29.268a13.23 13.23 0 01-6.74-1.842l-.483-.285-5.003 1.193 1.218-4.874-.315-.5A13.19 13.19 0 012.732 16C2.732 8.682 8.682 2.732 16 2.732S29.268 8.682 29.268 16 23.318 29.268 16 29.268zm7.258-9.898c-.398-.199-2.353-1.16-2.718-1.292-.365-.133-.63-.199-.895.199-.265.398-1.027 1.292-1.259 1.558-.232.265-.464.299-.862.1-.398-.199-1.68-.619-3.2-1.975-1.183-1.055-1.981-2.358-2.213-2.756-.232-.398-.025-.613.174-.811.179-.178.398-.464.597-.696.199-.232.265-.398.398-.663.133-.265.066-.497-.033-.696-.1-.199-.895-2.157-1.226-2.953-.323-.775-.65-.67-.895-.683-.232-.012-.497-.015-.762-.015-.265 0-.696.1-1.061.497-.365.398-1.393 1.36-1.393 3.317 0 1.957 1.426 3.848 1.625 4.113.199.265 2.807 4.286 6.803 6.01.951.41 1.693.655 2.272.839.954.304 1.823.261 2.51.158.765-.114 2.353-.962 2.685-1.89.332-.928.332-1.724.232-1.89-.1-.166-.365-.265-.763-.464z"/></svg>`;

function waURL(productName, category) {
  let displayName;
  if (category === 'mermelada') {
    displayName = `la Mermelada de ${productName}`;
  } else if (category === 'ají') {
    displayName = `el ${productName}`;
  } else if (category === 'hortaliza') {
    displayName = `la ${productName}`;
  } else {
    displayName = productName;
  }
  const msg = `Buenas Tardes, ¿esta disponible ${displayName}?`;
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`;
}

function openModal(item) {
  const banner = item.img
    ? `<div class="modal-img-banner"><img src="${item.img}" alt="${item.name}" /></div>`
    : `<div class="modal-emoji-banner">${item.emoji}</div>`;
  const categoryLabel = item.category === 'ají' ? 'Ají · Ubema' : 'Mermelada artesanal · Ubema';
  modalBody.innerHTML = `
    ${banner}
    <div class="modal-content-inner">
      <p class="modal-category">${categoryLabel}</p>
      <h2 class="modal-name">${item.name}</h2>
      <p class="modal-desc">${item.desc}</p>
      <div class="modal-details">
        ${item.flavors.map(f => `<span class="modal-chip">${f}</span>`).join('')}
      </div>
      <div class="modal-uses">
        <strong>💡 Usos recomendados</strong>
        ${item.uses}
      </div>
      <a href="${waURL(item.name, item.category)}" target="_blank" rel="noopener" class="btn-modal-wa">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor"><path d="M16 0C7.163 0 0 7.163 0 16c0 2.822.737 5.478 2.027 7.788L0 32l8.418-2.007A15.93 15.93 0 0016 32c8.837 0 16-7.163 16-16S24.837 0 16 0zm0 29.268a13.23 13.23 0 01-6.74-1.842l-.483-.285-5.003 1.193 1.218-4.874-.315-.5A13.19 13.19 0 012.732 16C2.732 8.682 8.682 2.732 16 2.732S29.268 8.682 29.268 16 23.318 29.268 16 29.268zm7.258-9.898c-.398-.199-2.353-1.16-2.718-1.292-.365-.133-.63-.199-.895.199-.265.398-1.027 1.292-1.259 1.558-.232.265-.464.299-.862.1-.398-.199-1.68-.619-3.2-1.975-1.183-1.055-1.981-2.358-2.213-2.756-.232-.398-.025-.613.174-.811.179-.178.398-.464.597-.696.199-.232.265-.398.398-.663.133-.265.066-.497-.033-.696-.1-.199-.895-2.157-1.226-2.953-.323-.775-.65-.67-.895-.683-.232-.012-.497-.015-.762-.015-.265 0-.696.1-1.061.497-.365.398-1.393 1.36-1.393 3.317 0 1.957 1.426 3.848 1.625 4.113.199.265 2.807 4.286 6.803 6.01.951.41 1.693.655 2.272.839.954.304 1.823.261 2.51.158.765-.114 2.353-.962 2.685-1.89.332-.928.332-1.724.232-1.89-.1-.166-.365-.265-.763-.464z"/></svg>
        Consultar disponibilidad de ${item.name}
      </a>
    </div>
  `;

  navbar.classList.add('modal-open');
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
      <a href="${waURL(item.name, item.category)}" target="_blank" rel="noopener" class="btn-modal-wa">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor"><path d="M16 0C7.163 0 0 7.163 0 16c0 2.822.737 5.478 2.027 7.788L0 32l8.418-2.007A15.93 15.93 0 0016 32c8.837 0 16-7.163 16-16S24.837 0 16 0zm0 29.268a13.23 13.23 0 01-6.74-1.842l-.483-.285-5.003 1.193 1.218-4.874-.315-.5A13.19 13.19 0 012.732 16C2.732 8.682 8.682 2.732 16 2.732S29.268 8.682 29.268 16 23.318 29.268 16 29.268zm7.258-9.898c-.398-.199-2.353-1.16-2.718-1.292-.365-.133-.63-.199-.895.199-.265.398-1.027 1.292-1.259 1.558-.232.265-.464.299-.862.1-.398-.199-1.68-.619-3.2-1.975-1.183-1.055-1.981-2.358-2.213-2.756-.232-.398-.025-.613.174-.811.179-.178.398-.464.597-.696.199-.232.265-.398.398-.663.133-.265.066-.497-.033-.696-.1-.199-.895-2.157-1.226-2.953-.323-.775-.65-.67-.895-.683-.232-.012-.497-.015-.762-.015-.265 0-.696.1-1.061.497-.365.398-1.393 1.36-1.393 3.317 0 1.957 1.426 3.848 1.625 4.113.199.265 2.807 4.286 6.803 6.01.951.41 1.693.655 2.272.839.954.304 1.823.261 2.51.158.765-.114 2.353-.962 2.685-1.89.332-.928.332-1.724.232-1.89-.1-.166-.365-.265-.763-.464z"/></svg>
        Consultar disponibilidad de ${item.name}
      </a>
    </div>
  `;

  navbar.classList.add('modal-open');
  modalOverlay.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  navbar.classList.remove('modal-open');
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
  initNosotrosCarousel();
  renderCatalog(JAMS,      'jamGrid',      createJamCard);
  renderCatalog(CHILIS,    'chiliGrid',    createChiliCard);
  renderCatalog(HORTALIZAS,'hortalizaGrid',createHortalizaCard);
  initFilters('jammFilters',      'jamGrid');
  initFilters('chiliFilters',     'chiliGrid');
  initFilters('hortalizaFilters', 'hortalizaGrid');
  initReveal();
})();
