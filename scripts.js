/* ================================================================
   AYI GROUP Distribution SARL — Shared Scripts
   ================================================================ */

// ──────────────────────────────────────────────
//  DONNÉES PRODUITS
// ──────────────────────────────────────────────
const abroOrganic = [
  {ref:'50001751', name:'ABRO Organic New Car', format:'42g'},
  {ref:'50002486', name:'ABRO Organic Jasmine', format:'42g'},
  {ref:'50002487', name:'ABRO Organic Vanilla', format:'42g'},
  {ref:'50001754', name:'ABRO Organic Strawberry', format:'42g'},
  {ref:'50001756', name:'ABRO Organic Coconut', format:'42g'},
  {ref:'50047164', name:'ABRO Organic Watermelon', format:'42g'},
  {ref:'50001758', name:'ABRO Organic Cool Breeze', format:'42g'},
  {ref:'50001755', name:'ABRO Organic Ice', format:'42g'},
  {ref:'50047034', name:'ABRO Organic Mocha Latte', format:'42g'},
  {ref:'50001759', name:'ABRO Organic Cherry', format:'42g'},
  {ref:'50001757', name:'ABRO Organic Bubble Gum', format:'42g'},
  {ref:'50047033', name:'ABRO Organic Citrus Ice', format:'42g'},
  {ref:'50047165', name:'ABRO Organic Watermelon Sugar', format:'42g'},
].map(p => ({...p, price:'1 500 FCFA / unité', bulk:'Box de 12 : 18 000 FCFA', images:[]}));

const carrosserie = [
  {ref:'50000850', name:'Cire Auto ABRO Heavy Duty Silicone Cleaner Wax', format:'473 ml', price:'Prix à venir', bulk:null, images:[]},
  {ref:'50060150', name:'Shampoing Auto ABRO Gold Premium', format:'946 ml', price:'Prix à venir', bulk:null, images:[]},
  {ref:'50085590', name:'Cire Auto Pâte Super Gold Carnauba', format:'230 g', price:'Prix à venir', bulk:null, images:[]},
  {ref:'50085630', name:'Cire Liquide Carnauba Car Wax', format:'500 ml', price:'Prix à venir', bulk:null, images:[]},
  {ref:'50085750', name:'Nettoyant Universel ABRO Masters Clean All', format:'650 ml', price:'1 500 FCFA / unité', bulk:null, images:[]},
  {ref:'50085690', name:'Liquide de Frein ABRO Heavy Duty DOT4', format:'450 g', price:'Prix à venir', bulk:null, images:[]},
];

const dashboard = [
  {ref:'50085500', name:'Rénovateur Tableau de Bord ABRO Vanilla', format:'220 ml', price:'1 000 FCFA / unité', bulk:null, images:[]},
  {ref:'50085510', name:'Rénovateur Tableau de Bord ABRO Lilac', format:'220 ml', price:'1 000 FCFA / unité', bulk:null, images:[]},
  {ref:'60137730', name:'Rénovateur ABRO Masters Strawberry', format:'220 ml', price:'1 000 FCFA / unité', bulk:null, images:[]},
  {ref:'90139380', name:'Rénovateur ABRO Masters Lemon', format:'220 ml', price:'1 000 FCFA / unité', bulk:null, images:[]},
];

const parfums = [
  {ref:'FT-014', name:'Godrej AER Twist Gel — Petal Crush Pink', format:"Gel d'ambiance", price:'5 000 FCFA / unité', bulk:null, images:['assets/aer-petal.jpg']},
  {ref:'FT-015', name:'Godrej AER Power Pocket', format:'10g x 3 (paquet)', price:'2 500 FCFA / paquet', bulk:"900 FCFA le sachet à l'unité", images:['assets/aer-pocket.jpg']},
  {ref:'50081210', name:"Spray d'Ambiance ABRO Masters Vanilla", format:'300 ml', price:'1 000 FCFA / unité', bulk:null, images:[]},
  {ref:'50085730', name:"Spray d'Ambiance ABRO Strawberry", format:'300 ml', price:'1 000 FCFA / unité', bulk:null, images:[]},
  {ref:'50085740', name:"Spray d'Ambiance ABRO Lemon-Citron", format:'300 ml', price:'1 000 FCFA / unité', bulk:null, images:[]},
  {ref:'50087200', name:"Spray d'Ambiance ABRO Lavender", format:'300 ml', price:'1 000 FCFA / unité', bulk:null, images:[]},
  {ref:'50088600', name:"Spray d'Ambiance ABRO Lilac", format:'300 ml', price:'1 000 FCFA / unité', bulk:null, images:[]},
  {ref:'50092000', name:"Spray d'Ambiance ABRO Green Apple", format:'300 ml', price:'1 000 FCFA / unité', bulk:null, images:[]},
];

const entretienMaison = [
  {ref:'50000858', name:'Amidon en Aérosol ABRO Spray Starch Fresh Linen', format:'430 g', price:'1 250 FCFA / unité', bulk:null, images:[]},
  {ref:'50083280', name:'Désinfectant Toutes Surfaces ABRO Fresh Scent', format:'400 ml', price:'Prix à venir', bulk:null, images:[]},
  {ref:'50085570', name:'Insecticide foudroyant ABRO Super Blast', format:'400 ml', price:'1 500 FCFA / unité', bulk:null, images:[]},
  {ref:'50085580', name:'Insecticide nomade ABRO Super Blast', format:'300 ml', price:'1 000 FCFA / unité', bulk:null, images:[]},
  {ref:'50085720', name:'Nettoyant Fours & Grills ABRO Oven & Grill Cleaner', format:'283 g', price:'1 500 FCFA / unité', bulk:null, images:[]},
  {ref:'50087190', name:'Rénovateur de Meubles ABRO Furniture Polish', format:'300 ml', price:'1 500 FCFA / unité', bulk:null, images:[]},
];

const pursJus = [
  {ref:'FT-001', name:'Jus Pur Ananas Naturel', format:'30 cl', images:['assets/jus-groupe2.jpg','assets/fruileg-flyer.jpg']},
  {ref:'FT-002', name:'Ananas-Cassimango', format:'30 cl', images:['assets/jus-groupe2.jpg','assets/fruileg-flyer.jpg']},
  {ref:'FT-003', name:'Ananas-Passion', format:'30 cl', images:['assets/jus-groupe2.jpg','assets/fruileg-flyer.jpg']},
  {ref:'FT-004', name:'Ananas-Gingembre Lemon', format:'30 cl', images:['assets/jus-ananas-gingembre.jpg','assets/fruileg-flyer.jpg']},
  {ref:'FT-005', name:'Ananas-Mangue', format:'30 cl', images:['assets/jus-groupe3.jpg','assets/fruileg-flyer.jpg']},
  {ref:'FT-006', name:'Ananas-Menthe', format:'30 cl', images:['assets/jus-groupe3.jpg','assets/fruileg-flyer.jpg']},
].map(p => ({...p, price:'750 FCFA / unité', bulk:'Carton de 24 : 18 000 FCFA'}));

const nectars = [
  {ref:'FT-007', name:'Ananas-Betterave', format:'30 cl', images:['assets/jus-groupe1.jpg','assets/fruileg-flyer.jpg']},
  {ref:'FT-008', name:'Ananas-Mandarine', format:'30 cl', images:['assets/jus-groupe1.jpg','assets/fruileg-flyer.jpg']},
  {ref:'FT-009', name:'Ananas-Carotte', format:'30 cl', images:['assets/jus-groupe1.jpg','assets/fruileg-flyer.jpg']},
  {ref:'FT-010', name:'Ananas-Goyave', format:'30 cl', images:['assets/jus-groupe1.jpg','assets/fruileg-flyer.jpg']},
].map(p => ({...p, price:'750 FCFA / unité', bulk:'Carton de 24 : 18 000 FCFA'}));

const snacks = [
  {ref:'FT-011', name:'Chips de plantain', format:'35 g', price:'150 FCFA / unité', bulk:'Paquet de 25 : 3 750 FCFA', images:['assets/chips-plantain.jpg']},
  {ref:'FT-012', name:'Chips de patate douce', format:'30 g', price:'150 FCFA / unité', bulk:'Paquet de 35 : 5 250 FCFA', images:[]},
];

const graines = [
  {ref:'FT-013', name:'Graines de Chia (Ecocircus)', format:'80 g', price:'2 000 FCFA / unité', bulk:'Paquet de 10 sachets : 20 000 FCFA', images:['assets/chia.jpg']},
];

const services = [
  {id:'s1', name:'Distribution', desc:'Distribution de produits de grande consommation auprès de points de vente et particuliers.'},
  {id:'s2', name:'Commerce général & Négoce', desc:'Achat, vente et intermédiation commerciale sur divers types de produits.'},
  {id:'s3', name:'Import - Export', desc:"Accompagnement dans vos opérations d'importation et d'exportation."},
  {id:'s4', name:'Montage de projet', desc:"Accompagnement dans la structuration et le lancement de votre projet d'entreprise."},
  {id:'s5', name:'Conseil en assurances', desc:"Orientation et conseil pour choisir les solutions d'assurance adaptées à vos besoins."},
];

// Assigner catégories et marques
abroOrganic.forEach(p => { p.cat = 'Auto · Désodorisant organique'; p.brand = 'ABRO'; });
carrosserie.forEach(p => { p.cat = 'Auto · Entretien châssis & carrosserie'; p.brand = 'ABRO'; });
dashboard.forEach(p => { p.cat = 'Auto · Rénovateur tableau de bord'; p.brand = 'ABRO'; });
parfums.forEach(p => { p.cat = "Maison · Parfum d'intérieur"; p.brand = p.ref.startsWith('FT-') ? 'Godrej AER' : 'ABRO'; });
entretienMaison.forEach(p => { p.cat = 'Maison · Entretien & protection'; p.brand = 'ABRO'; });
pursJus.forEach(p => { p.cat = 'Alimentation · Pur jus Fruileg'; p.brand = 'Fruileg'; });
nectars.forEach(p => { p.cat = 'Alimentation · Nectar Fruileg'; p.brand = 'Fruileg'; });
snacks.forEach(p => { p.cat = 'Alimentation · Snack'; p.brand = 'Fruileg'; });
graines.forEach(p => { p.cat = 'Alimentation · Graines & épices'; p.brand = 'Ecocircus'; });

// ──────────────────────────────────────────────
//  RENDU DES CARTES
// ──────────────────────────────────────────────
function mediaHTML(item) {
  const firstImg = item.images && item.images.length ? item.images[0] : null;
  const badges = (item.ref ? `<span class="badge-ref">${item.ref}</span>` : '') +
    (item.ref ? `<span class="badge-stock">En stock</span>` : '');
  if (firstImg) {
    return `<div class="card-media"><div class="card-badges">${badges}</div><img src="${firstImg}" alt="${item.name}" loading="lazy"></div>`;
  }
  return `<div class="card-media placeholder"><div class="card-badges">${badges}</div>Photo à venir</div>`;
}

function priceHTML(item) {
  if (item.price === 'Prix à venir') {
    return `<div class="price-wrap"><span class="tbd">Prix à venir</span></div>`;
  }
  return `<div class="price-wrap"><div class="price">${item.price}</div>${item.bulk ? `<div class="bulk">${item.bulk}</div>` : ''}</div>`;
}

function renderGrid(items, containerId) {
  const el = document.getElementById(containerId);
  if (!el) return;
  el.innerHTML = items.map((p, idx) => `
    <div class="card animate-in" data-brand="${p.brand || ''}" data-status="${p.price === 'Prix à venir' ? 'a-venir' : 'disponible'}" onclick="showProduct('${p.ref || p.id}')" style="animation-delay:${(idx * 0.04).toFixed(2)}s">
      ${mediaHTML(p)}
      <div class="card-body">
        <h3>${p.name}</h3>
        <span class="format">${p.format || ''}</span>
        <div class="card-footer">
          ${priceHTML(p)}
          <button class="add-btn" onclick="event.stopPropagation(); addToCart('${p.ref || p.id}')">+ Ajouter</button>
        </div>
      </div>
    </div>
  `).join('');
}

// Rendu de toutes les grilles (safe — skips missing containers)
function renderAllGrids() {
  renderGrid(abroOrganic, 'grid-abro-organic');
  renderGrid(carrosserie, 'grid-carrosserie');
  renderGrid(dashboard, 'grid-dashboard');
  renderGrid(parfums, 'grid-parfums');
  renderGrid(entretienMaison, 'grid-entretien-maison');
  renderGrid(pursJus, 'grid-purs-jus');
  renderGrid(nectars, 'grid-nectars');
  renderGrid(snacks, 'grid-snacks');
  renderGrid(graines, 'grid-graines');

  const svcEl = document.getElementById('grid-services');
  if (svcEl) {
    svcEl.innerHTML = services.map((s, i) => `
      <div class="service-card animate-in" style="animation-delay:${i * 0.06}s">
        <span class="num">0${i + 1}</span>
        <h3>${s.name}</h3>
        <p>${s.desc}</p>
        <button class="add-btn" onclick="addToCart('${s.id}')">Demander ce service</button>
      </div>
    `).join('');
  }
}

// ──────────────────────────────────────────────
//  PANIER (persisted in localStorage)
// ──────────────────────────────────────────────
const allItems = [...abroOrganic, ...carrosserie, ...dashboard, ...parfums, ...entretienMaison, ...pursJus, ...nectars, ...snacks, ...graines, ...services.map(s => ({...s, ref: s.id}))];
let cart = JSON.parse(localStorage.getItem('ayi_cart') || '[]');

function saveCart() { localStorage.setItem('ayi_cart', JSON.stringify(cart)); }

function addToCart(ref) {
  const item = allItems.find(i => (i.ref || i.id) === ref);
  if (!item) return;
  cart.push({...item});
  saveCart();
  updateCart();
  showToast('✓ ' + item.name + ' ajouté à votre demande');
}

function removeFromCart(index) { cart.splice(index, 1); saveCart(); updateCart(); }

function updateCart() {
  const countEl = document.getElementById('cart-count');
  if (countEl) countEl.textContent = cart.length;
  const itemsEl = document.getElementById('drawer-items');
  if (!itemsEl) return;
  if (cart.length === 0) {
    itemsEl.innerHTML = '<div class="drawer-empty">Votre liste de demande est vide.</div>';
  } else {
    itemsEl.innerHTML = cart.map((item, i) =>
      `<div class="drawer-item"><span>${item.name}</span><button class="rm" onclick="event.stopPropagation();removeFromCart(${i})">Retirer</button></div>`
    ).join('');
  }
}

function openDrawer() { document.getElementById('drawer').classList.add('open'); document.getElementById('overlay').classList.add('open'); }
function closeDrawer() { document.getElementById('drawer').classList.remove('open'); document.getElementById('overlay').classList.remove('open'); }

function showToast(msg) {
  const t = document.getElementById('toast');
  if (!t) return;
  t.textContent = msg; t.classList.add('show');
  clearTimeout(t._timeout); t._timeout = setTimeout(() => t.classList.remove('show'), 2400);
}

// ──────────────────────────────────────────────
//  FILTRES
// ──────────────────────────────────────────────
const activeFilters = { brand: 'all', status: 'all' };

function applyFilters() {
  let visibleCount = 0;
  document.querySelectorAll('.card').forEach(card => {
    const brand = card.getAttribute('data-brand') || '';
    const status = card.getAttribute('data-status') || '';
    const brandOk = activeFilters.brand === 'all' || brand === activeFilters.brand;
    const statusOk = activeFilters.status === 'all' || status === activeFilters.status;
    const show = brandOk && statusOk;
    card.classList.toggle('filtered-out', !show);
    if (show) visibleCount++;
  });
  document.querySelectorAll('.rayon').forEach(rayon => {
    const anyVisible = rayon.querySelectorAll('.card:not(.filtered-out)').length > 0;
    rayon.classList.toggle('filtered-empty', !anyVisible);
  });
  const countEl = document.getElementById('filter-count');
  if (countEl) countEl.textContent = visibleCount + ' article(s)';
}

// ──────────────────────────────────────────────
//  SCROLL SPY (home page only)
// ──────────────────────────────────────────────
function initScrollSpy() {
  const tabLinks = document.querySelectorAll('#tabs a');
  if (tabLinks.length === 0) return;

  // Highlight current page tab
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  const pageMap = {
    'index.html': '#home',
    'auto.html': '#auto',
    'maison.html': '#maison',
    'alimentation.html': '#alimentation',
    'services.html': '#services',
    'contact.html': '#contact',
  };
  const activeHref = pageMap[currentPath] || pageMap['index.html'];
  tabLinks.forEach(a => {
    a.classList.toggle('active', a.getAttribute('href') === activeHref);
  });

  // Scroll shadow on header
  const header = document.getElementById('main-header');
  if (header) {
    const onScroll = () => header.classList.toggle('scrolled', window.scrollY > 10);
    window.addEventListener('scroll', onScroll, {passive: true});
    onScroll();
  }
}

// ──────────────────────────────────────────────
//  FICHE PRODUIT
// ──────────────────────────────────────────────
const genericDesc = {
  "Auto · Désodorisant organique": "Désodorisant voiture en canette, à base d'ingrédients organiques, pour une odeur fraîche et durable dans l'habitacle. Distribué par AYI Group.",
  'Auto · Entretien châssis & carrosserie': "Produit d'entretien professionnel pour la carrosserie et le châssis, à utiliser selon les instructions du fabricant ABRO. Distribué par AYI Group.",
  'Auto · Rénovateur tableau de bord': 'Rénovateur et protecteur pour tableau de bord et surfaces plastiques intérieures, finition mate ou brillante selon usage. Distribué par AYI Group.',
  "Maison · Parfum d'intérieur": "Parfum d'ambiance pour la maison ou la voiture, diffusion longue durée. Distribué par AYI Group.",
  'Maison · Entretien & protection': "Produit d'entretien et de protection pour la maison, gamme ABRO. Distribué par AYI Group.",
  'Alimentation · Pur jus Fruileg': 'Pur jus de fruits 100% naturel, pasteurisé, sans eau ajoutée, sans conservateurs ni colorants chimiques. Marque Fruileg, distribué par AYI Group.',
  'Alimentation · Nectar Fruileg': 'Nectar de fruits et légumes pressés, marque Fruileg, distribué par AYI Group.',
  'Alimentation · Snack': "Snack croustillant, friture à l'huile végétale. Distribué par AYI Group.",
  'Alimentation · Graines & épices': 'Graines de chia 100% bio : facilite la digestion, aide à réguler le cholestérol et la tension, riche en fibres. Produit du Cameroun (Ecocircus), distribué par AYI Group.',
};

function showProduct(ref) {
  const item = allItems.find(i => (i.ref || i.id) === ref);
  if (!item) return;

  document.getElementById('detail-crumb').textContent = item.cat || 'Service';
  document.getElementById('detail-name').textContent = item.name;
  document.getElementById('detail-desc').textContent = item.desc || genericDesc[item.cat] || 'Description à venir.';

  const media = document.getElementById('detail-media');
  const thumbsWrap = document.getElementById('detail-thumbs');
  const images = item.images && item.images.length ? item.images : [];
  if (images.length) {
    media.classList.remove('placeholder');
    media.innerHTML = '<img src="' + images[0] + '" alt="' + item.name + '" id="detail-main-img">';
    thumbsWrap.innerHTML = images.length > 1
      ? images.map((src, i) => '<img src="' + src + '" class="thumb ' + (i === 0 ? 'active' : '') + '" onclick="setMainImage(' + i + ')" loading="lazy">').join('')
      : '';
    window.currentGalleryImages = images;
  } else {
    media.classList.add('placeholder');
    media.textContent = 'Photo à venir';
    thumbsWrap.innerHTML = '';
    window.currentGalleryImages = [];
  }

  const meta = document.getElementById('detail-meta');
  meta.innerHTML = [
    item.ref ? '<span>Réf. ' + item.ref + '</span>' : '',
    item.format ? '<span>' + item.format + '</span>' : '',
    item.ref ? '<span class="stock">En stock</span>' : ''
  ].join('');

  const priceBox = document.getElementById('detail-price');
  if (item.price === 'Prix à venir' || !item.price) {
    priceBox.innerHTML = '<span class="tbd">Prix à venir — nous contacter</span>';
  } else {
    priceBox.innerHTML = '<div class="unit">' + item.price + '</div>' + (item.bulk ? '<div class="bulk">' + item.bulk + '</div>' : '');
  }

  document.getElementById('detail-cta').onclick = function() { addToCart(ref); };

  document.querySelectorAll('.page-section, .hero, .stats-bar, .filter-bar, .cat-grid-wrap, .about-section, .category-hero').forEach(function(s) { s.style.display = 'none'; });
  document.getElementById('product-detail').style.display = 'block';
  window.scrollTo(0, 0);
  history.pushState(null, '', '#produit-' + ref);
}

function setMainImage(index) {
  const images = window.currentGalleryImages || [];
  if (!images[index]) return;
  document.getElementById('detail-main-img').src = images[index];
  document.querySelectorAll('.thumb').forEach(function(t, i) { t.classList.toggle('active', i === index); });
}

function showCatalogueSections() {
  document.getElementById('product-detail').style.display = 'none';
  document.querySelectorAll('.page-section, .hero, .stats-bar, .filter-bar, .cat-grid-wrap, .about-section, .category-hero').forEach(function(s) { s.style.display = ''; });
}

function backToCatalog() {
  showCatalogueSections();
  history.pushState(null, '', '#');
  window.scrollTo(0, 0);
}

// ──────────────────────────────────────────────
//  INIT
// ──────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', function() {
  renderAllGrids();
  updateCart();
  initScrollSpy();

  // Filter bar sticky offset
  const header = document.getElementById('main-header');
  if (header) {
    var updateHeaderHeight = function() {
      document.documentElement.style.setProperty('--header-h', header.offsetHeight + 'px');
    };
    updateHeaderHeight();
    window.addEventListener('resize', updateHeaderHeight);
  }

  // Filter button handlers
  document.querySelectorAll('.filter-btn').forEach(function(btn) {
    btn.addEventListener('click', function() {
      var type = btn.getAttribute('data-type');
      var value = btn.getAttribute('data-value');
      document.querySelectorAll('.filter-btn[data-type="' + type + '"]').forEach(function(b) { b.classList.remove('active'); });
      btn.classList.add('active');
      activeFilters[type] = value;
      applyFilters();
    });
  });
  applyFilters();

  // Hash-based product loading
  var hash = location.hash;
  if (hash.startsWith('#produit-')) showProduct(hash.replace('#produit-', ''));

  // Hash change handler
  window.addEventListener('hashchange', function() {
    if (!location.hash.startsWith('#produit-')) showCatalogueSections();
  });
});
