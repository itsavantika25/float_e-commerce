const products = [
  { 
    id: 1, 
    name: "Monolith Parka", 
    category: "outerwear", 
    tags: ["new", "limited"], 
    price: 820, 
    colors: ["Onyx", "Ash"], 
    sizes: ["XS", "S", "M", "L", "XL"], 
    description: "An uncompromising shield against the elements. The Monolith Parka is engineered with a proprietary three-layer breathable membrane, featuring heat-welded seams and articulated joints for absolute freedom of movement in extreme urban environments.", 
    material: "Recycled Technical Shell / GORE-TEX Pro", 
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=600&q=80", 
    hoverImage: "https://images.unsplash.com/photo-1544022613-e87ca75a784a?auto=format&fit=crop&w=600&q=80" 
  },
  { 
    id: 2, 
    name: "Ethereal Silk Slip", 
    category: "tops", 
    tags: ["limited"], 
    price: 495, 
    colors: ["Obsidian", "Pearl"], 
    sizes: ["S", "M", "L"], 
    description: "Fluidity rendered in physical form. This piece utilizes weightless technical silk designed to trace the body's natural geometry. The bias cut ensures a dynamic drape that shifts with every step.", 
    material: "100% Technical Silk / Cupro Lining", 
    image: "https://images.unsplash.com/photo-1550614000-4b95d4ed7962?auto=format&fit=crop&w=600&q=80", 
    hoverImage: "https://images.unsplash.com/photo-1539533018447-63fcb2633013?auto=format&fit=crop&w=600&q=80" 
  },
  { 
    id: 3, 
    name: "Kinetic Cargo Trousers", 
    category: "bottoms", 
    tags: ["new"], 
    price: 350, 
    colors: ["Slate", "Olive", "Onyx"], 
    sizes: ["S", "M", "L", "XL"], 
    description: "Utility redefined through negative space. Featuring invisible magnetic hems and concealed dynamic pockets, these trousers sit precisely at the intersection of brutalist architecture and daily wear.", 
    material: "Ripstop Cotton / Stretch Nylon Blend", 
    image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=600&q=80", 
    hoverImage: "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?auto=format&fit=crop&w=600&q=80" 
  },
  { 
    id: 4, 
    name: "Thermal Ribbed Beanie", 
    category: "accessories", 
    tags: ["archive", "new"], 
    price: 85, 
    colors: ["Onyx", "Chalk"], 
    sizes: ["Universal"], 
    description: "A masterclass in textural contrast. This beanie is knit from ultra-dense heat-retaining micro-fleece layered within a brutalist ribbed structure to lock in warmth without excess volume.", 
    material: "90% Merino Wool / 10% Cashmere", 
    image: "https://images.unsplash.com/photo-1576871337622-98d48d1cf531?auto=format&fit=crop&w=600&q=80", 
    hoverImage: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=600&q=80" 
  },
  { 
    id: 5, 
    name: "Void Sculpted Vest", 
    category: "outerwear", 
    tags: ["archive"], 
    price: 520, 
    colors: ["Onyx", "Chalk"], 
    sizes: ["M", "L"], 
    description: "A tactile silhouette that profiles the negative space of the torso. Geometric baffling and asymmetrical front closures create a distinct visual tension while providing exceptional core insulation.", 
    material: "Technical Synthetics / Primaloft Gold", 
    image: "https://images.unsplash.com/photo-1545594861-3bef4369f76f?auto=format&fit=crop&w=600&q=80", 
    hoverImage: "https://images.unsplash.com/photo-1520975954732-57dd22299614?auto=format&fit=crop&w=600&q=80" 
  },
  { 
    id: 6, 
    name: "Phase Runners", 
    category: "footwear", 
    tags: ["new", "limited"], 
    price: 385, 
    colors: ["Carbon", "Phantom"], 
    sizes: ["8", "9", "10", "11"], 
    description: "Gravity negated. The Phase Runners utilize a proprietary Zero-G foam cushioning system paired with a seamless engineered knit upper, allowing the foot to breathe and flex naturally while striking the pavement.", 
    material: "Engineered Knit Mesh / EVA Foam", 
    image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=600&q=80", 
    hoverImage: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&w=600&q=80" 
  },
  { 
    id: 7, 
    name: "Brutalist Hoodie", 
    category: "tops", 
    tags: [], 
    price: 210, 
    colors: ["Bone", "Onyx"], 
    sizes: ["S", "M", "L", "XL"], 
    description: "Unstructured, raw, and unapologetic. Cut from ultra-heavyweight cotton terrain cloth, this hoodie features dropped shoulders and a dramatically oversized hood designed to warp your silhouette.", 
    material: "32oz Heavyweight French Terry Cotton", 
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=600&q=80", 
    hoverImage: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=600&q=80" 
  },
  { 
    id: 8, 
    name: "Aero Jacket", 
    category: "outerwear", 
    tags: ["limited"], 
    price: 640, 
    colors: ["Mist Grey"], 
    sizes: ["S", "M", "L"], 
    description: "Lightweight atmospheric protection distilled into its purest form. Featuring laser-cut venting and bonded seams, the Aero Jacket is practically weightless but highly resilient against sudden squalls.", 
    material: "GORE-TEX Pro / Ultralight Nylon", 
    image: "https://images.unsplash.com/photo-1562157873-818bc0726f68?auto=format&fit=crop&w=600&q=80", 
    hoverImage: "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=600&q=80" 
  },
  { 
    id: 9, 
    name: "Stratus Tee", 
    category: "tops", 
    tags: [], 
    price: 110, 
    colors: ["White", "Black"], 
    sizes: ["XS", "S", "M", "L", "XL"], 
    description: "The fundamental base layer. Woven from long-staple Pima cotton, the Stratus Tee regulates core temperature while offering an impossibly soft hand-feel that only improves with friction and time.", 
    material: "100% Pima Cotton", 
    image: "https://images.unsplash.com/photo-1509631179647-0e67664dc15f?auto=format&fit=crop&w=600&q=80", 
    hoverImage: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=80" 
  },
  { 
    id: 10, 
    name: "Altitude Trousers", 
    category: "bottoms", 
    tags: ["archive"], 
    price: 390, 
    colors: ["Ash", "Onyx"], 
    sizes: ["30", "32", "34", "36"], 
    description: "Architectural seams converge to create a perfectly tailored drape. Designed with an articulated knee and a slight taper, these trousers provide elegance without sacrificing range of motion.", 
    material: "Woven Twill / Elastane Core", 
    image: "https://images.unsplash.com/photo-1475178626620-2ce9db2deee5?auto=format&fit=crop&w=600&q=80", 
    hoverImage: "https://images.unsplash.com/photo-1502716119720-b23a93e5fe8b?auto=format&fit=crop&w=600&q=80" 
  },
  { 
    id: 11, 
    name: "Tech Messenger", 
    category: "accessories", 
    tags: ["new"], 
    price: 250, 
    colors: ["Onyx"], 
    sizes: ["Universal"], 
    description: "Asymmetric storage engineered for the commuter. Featuring silent magnetic Fidlock closures, an impenetrable waterproof lining, and an ergonomic strap that distributes heavy loads uniformly.", 
    material: "Ballistic Nylon / Polyurethane", 
    image: "https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=600&q=80", 
    hoverImage: "https://images.unsplash.com/photo-1547949003-9792a18a2601?auto=format&fit=crop&w=600&q=80" 
  },
  { 
    id: 12, 
    name: "Orbit Boots", 
    category: "footwear", 
    tags: ["limited"], 
    price: 520, 
    colors: ["Obsidian"], 
    sizes: ["8", "9", "10", "11"], 
    description: "A monolithic foundation. The Orbit Boots pair a wildly aggressive heavy-duty Vibram tread with a sleek, polished calfskin upper, balancing raw utilitarian grip with refined aesthetic lines.", 
    material: "Calfskin Leather / Vibram Outsole", 
    image: "https://images.unsplash.com/photo-1512413915873-4556488d011f?auto=format&fit=crop&w=600&q=80", 
    hoverImage: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&w=600&q=80" 
  },
  { 
    id: 13, 
    name: "Ozone Aviator", 
    category: "accessories", 
    tags: ["new"], 
    price: 310, 
    colors: ["Silver/Carbon"], 
    sizes: ["Universal"], 
    description: "Vision distilled. Micro-welded titanium frames encase polarized lenses engineered to filter harsh UV glare without compromising peripheral clarity. Weightless on the bridge of the nose.", 
    material: "Aerospace Grade Titanium / Polycarbonate", 
    image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=600&q=80", 
    hoverImage: "https://images.unsplash.com/photo-1508296695146-257a814070b4?auto=format&fit=crop&w=600&q=80" 
  },
  { 
    id: 14, 
    name: "Meridian Coat", 
    category: "outerwear", 
    tags: ["archive", "limited"], 
    price: 980, 
    colors: ["Camel", "Onyx"], 
    sizes: ["S", "M", "L"], 
    description: "A brutalist approach to the classic trench. Featuring an exaggerated storm flap, hidden placket closures, and a severe sweeping hemline that billows effortlessly as you move against the wind.", 
    material: "Heavyweight Virgin Wool Blend", 
    image: "https://images.unsplash.com/photo-1539533018447-63fcb2633013?auto=format&fit=crop&w=600&q=80", 
    hoverImage: "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=600&q=80" 
  },
  { 
    id: 15, 
    name: "Synapse Knit", 
    category: "tops", 
    tags: ["new"], 
    price: 275, 
    colors: ["Bone", "Slate"], 
    sizes: ["XS", "S", "M", "L"], 
    description: "Hyper-contoured ribbing maps the musculature of the wearer. This knit top provides a near-compressive, second-skin fit that traps body heat while wicking away moisture rapidly.", 
    material: "Viscose / Nylon / Spandex Knit", 
    image: "https://images.unsplash.com/photo-1434389678396-511ce4fb1390?auto=format&fit=crop&w=600&q=80", 
    hoverImage: "https://images.unsplash.com/photo-1502716119720-b23a93e5fe8b?auto=format&fit=crop&w=600&q=80" 
  },
  { 
    id: 16, 
    name: "Nebula Wrap Skirt", 
    category: "bottoms", 
    tags: [], 
    price: 320, 
    colors: ["Onyx"], 
    sizes: ["XS", "S", "M"], 
    description: "Asymmetrical tension creates profound elegance. A singular piece of draping fabric fastens at the hip with a brutalist metal toggle, allowing the remaining material to flow completely untethered.", 
    material: "Cupro / Tencel Technical Drape", 
    image: "https://images.unsplash.com/photo-1512436990144-78c622bcf4e5?auto=format&fit=crop&w=600&q=80", 
    hoverImage: "https://images.unsplash.com/photo-1475178626620-2ce9db2deee5?auto=format&fit=crop&w=600&q=80" 
  }
];

// STATE MANAGEMENT
const state = {
  cart: [],
  wishlist: [],
  user: null,
  currentView: 'home',
  currentProduct: null,
  filters: { category: 'all', sizes: [], price: 1000, search: '' }
};

// ── UTILITIES & TOASTS ──
const showToast = (message) => {
  const container = document.getElementById('toast-container');
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.textContent = message;
  container.appendChild(toast);
  
  // Trigger reflow to animate
  requestAnimationFrame(() => {
    toast.classList.add('show');
    setTimeout(() => {
      toast.classList.remove('show');
      setTimeout(() => toast.remove(), 400);
    }, 3000);
  });
};

document.querySelectorAll('.toast-trigger').forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    showToast('Feature coming soon');
  });
});

// ── ROUTING ──
const views = ['home', 'collections', 'product', 'cart', 'checkout', 'confirmation', 'auth', 'archive', 'arrivals', 'about'];

const navigateTo = (view, data = null) => {
  if (!views.includes(view)) return;
  state.currentView = view;
  
  if (data?.productId) state.currentProduct = products.find(p => p.id === data.productId);
  
  views.forEach(v => {
    const el = document.getElementById(`view-${v}`);
    if (v === view) {
      el.classList.remove('hidden');
      requestAnimationFrame(() => el.classList.add('active'));
    } else {
      el.classList.remove('active');
      setTimeout(() => el.classList.add('hidden'), 350);
    }
  });

  document.getElementById('cart-sidebar').classList.remove('open');
  document.getElementById('search-overlay').classList.remove('open');
  
  if (view === 'collections') renderGrid();
  if (view === 'arrivals') renderArrivalsGrid();
  if (view === 'product') renderProductDetail();
  if (view === 'cart') renderCartPage();
  if (view === 'checkout') renderCheckoutSummary();
  if (view === 'home' && !window.threeRendered) initThreeJS();
  if (view === 'about') initAboutThreeJS();

  window.scrollTo({ top: 0, behavior: 'smooth' });
};

document.querySelectorAll('.router-link').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const href = link.getAttribute('href');
    if (href === '/') navigateTo('home');
    else navigateTo(href.substring(1).split('?')[0]);
    history.pushState(null, '', href);
  });
});

window.addEventListener('popstate', () => {
  const path = window.location.pathname.substring(1) || 'home';
  navigateTo(path);
});

// ── NAVBAR & OVERLAYS ──
window.addEventListener('scroll', () => {
  const nav = document.getElementById('navbar');
  if (window.scrollY > 20) nav.classList.add('scrolled');
  else nav.classList.remove('scrolled');
  
  // Parallax for arrivals
  if (state.currentView === 'arrivals') {
    const img = document.getElementById('arrivals-parallax-img');
    if (img) {
        // Map scrollY to translate percentage
        img.style.transform = `translateY(${window.scrollY * 0.4}px)`;
    }
  }

  // 3D Scroll for About Canvas
  if (state.currentView === 'about' && window.aboutMesh) {
    window.aboutMesh.rotation.x = window.scrollY * 0.005;
    window.aboutMesh.rotation.y = window.scrollY * 0.003;
  }
});

document.getElementById('btn-search').addEventListener('click', () => {
  const overlay = document.getElementById('search-overlay');
  overlay.classList.remove('hidden');
  document.getElementById('search-input').value = '';
  document.getElementById('search-results').innerHTML = '';
  requestAnimationFrame(() => overlay.classList.add('open'));
});

document.getElementById('btn-close-search').addEventListener('click', () => {
  document.getElementById('search-overlay').classList.remove('open');
});

document.getElementById('btn-cart').addEventListener('click', () => {
  renderSidebarCart();
  document.getElementById('cart-sidebar').classList.add('open');
});
document.getElementById('btn-close-cart').addEventListener('click', () => {
  document.getElementById('cart-sidebar').classList.remove('open');
});

document.getElementById('btn-user').addEventListener('click', () => {
  if (state.user) showToast(`Logged in as ${state.user.name}`);
  else {
    navigateTo('auth');
    history.pushState(null, '', '/auth');
  }
});

// ── COLLECTIONS & FILTERS ──
const renderGrid = () => {
  const grid = document.getElementById('product-grid');
  grid.innerHTML = '';
  
  let currentSelection = products.filter(p => {
    const searchMatch = p.name.toLowerCase().includes(state.filters.search.toLowerCase());
    const filterCat = document.getElementById('filter-category').value;
    const catMatch = filterCat === 'all' || p.category === filterCat;
    const priceMatch = p.price <= state.filters.price;
    const sizeMatch = state.filters.sizes.length === 0 || p.sizes.some(s => state.filters.sizes.includes(s));
    
    return searchMatch && catMatch && priceMatch && sizeMatch;
  });

  const sortValue = document.getElementById('filter-sort').value;
  if (sortValue === 'price-asc') currentSelection.sort((a,b) => a.price - b.price);
  if (sortValue === 'price-desc') currentSelection.sort((a,b) => b.price - a.price);

  currentSelection.forEach((p, idx) => {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
      <div class="pc-image">
        <img src="${p.image}" alt="${p.name}">
        <img src="${p.hoverImage}" alt="${p.name}" class="pc-hover-img">
        <button class="icon-btn btn-wishlist ${state.wishlist.includes(p.id) ? 'active' : ''}" data-id="${p.id}">
          <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" stroke-width="2" fill="none"><path d="M20.8 4.6a5.5 5.5 0 0 0-7.7 0l-1.1 1-1.1-1a5.5 5.5 0 0 0-7.8 7.8l1 1 7.9 7.9 7.9-7.9 1-1a5.5 5.5 0 0 0 0-7.8z"></path></svg>
        </button>
      </div>
      <div class="pc-info">
        <div class="pc-row">
          <span class="pc-name">${p.name}</span>
          <span class="pc-price">$${p.price}</span>
        </div>
        <span class="pc-color">${p.colors.join(' / ')}</span>
        <button class="btn-pc-quick pc-add" data-id="${p.id}">+ Quick Add</button>
      </div>
    `;
    
    // Smooth scroll reveal via Observer
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    
    // 3D Card Hover Tilt
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const calcX = ((y / rect.height) - 0.5) * -16; // Max 8 deg
      const calcY = ((x / rect.width) - 0.5) * 16;
      card.style.transform = `perspective(800px) rotateX(${calcX}deg) rotateY(${calcY}deg)`;
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = `perspective(800px) rotateX(0) rotateY(0)`;
    });

    grid.appendChild(card);

    // Scroll Observer
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            entry.target.style.opacity = '1';
            entry.target.style.transform = `perspective(800px) rotateX(0) rotateY(0)`;
          }, idx * 80);
          observer.unobserve(entry.target);
        }
      });
    });
    observer.observe(card);

    // Listeners
    card.querySelector('.pc-image').addEventListener('click', () => {
        navigateTo('product', { productId: p.id });
        history.pushState(null, '', '/product');
    });

    card.querySelector('.btn-wishlist').addEventListener('click', (e) => {
      e.stopPropagation();
      const btn = e.currentTarget;
      if (state.wishlist.includes(p.id)) {
        state.wishlist = state.wishlist.filter(id => id !== p.id);
        btn.classList.remove('active');
        showToast("Removed from wishlist");
      } else {
        state.wishlist.push(p.id);
        btn.classList.add('active');
        showToast("Saved to wishlist");
      }
    });

    card.querySelector('.btn-pc-quick').addEventListener('click', (e) => {
      e.stopPropagation();
      addToCart(p);
      e.target.textContent = "ADDED ✓";
      setTimeout(() => e.target.textContent = "+ Quick Add", 1500);
    });
  });
};

const renderArrivalsGrid = () => {
  const grid = document.getElementById('arrivals-grid');
  grid.innerHTML = '';
  
  const arrivals = products.filter(p => p.tags.includes('new'));
  arrivals.forEach((p, idx) => {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
      <div class="pc-image">
        <img src="${p.image}" alt="${p.name}">
        <img src="${p.hoverImage}" alt="${p.name}" class="pc-hover-img">
      </div>
      <div class="pc-info">
        <div class="pc-row">
          <span class="pc-name">${p.name}</span>
          <span class="pc-price">$${p.price}</span>
        </div>
        <span class="pc-color">${p.colors.join(' / ')}</span>
      </div>
    `;
    card.style.opacity = '0'; card.style.transform = 'translateY(30px)';
    
    setTimeout(() => {
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        card.style.opacity = '1'; card.style.transform = `perspective(800px) rotateX(0) rotateY(0)`;
    }, idx * 100);

    card.addEventListener('click', () => {
        navigateTo('product', { productId: p.id });
        history.pushState(null, '', '/product');
    });

    grid.appendChild(card);
  });
};

// Filter event listeners
const filterInputs = document.querySelectorAll('#filter-category, #filter-sort');
filterInputs.forEach(el => el.addEventListener('change', renderGrid));

document.getElementById('filter-price').addEventListener('input', (e) => {
  document.getElementById('price-val').innerText = e.target.value;
  state.filters.price = parseInt(e.target.value);
  renderGrid();
});

document.querySelectorAll('.filter-sizes .pill').forEach(btn => {
  btn.addEventListener('click', (e) => {
    const size = e.target.dataset.size;
    if (state.filters.sizes.includes(size)) {
      state.filters.sizes = state.filters.sizes.filter(s => s !== size);
      e.target.classList.remove('active');
    } else {
      state.filters.sizes.push(size);
      e.target.classList.add('active');
    }
    renderGrid();
  });
});

document.getElementById('search-input').addEventListener('input', (e) => {
  const val = e.target.value.toLowerCase();
  const resContainer = document.getElementById('search-results');
  resContainer.innerHTML = '';
  
  if (val.length === 0) return;
  const limits = products.filter(p => p.name.toLowerCase().includes(val)).slice(0, 4);
  
  limits.forEach(p => {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `<img src="${p.image}" style="width:100%; aspect-ratio:3/4; object-fit:cover;">
                      <div style="padding:10px 0;"><div style="font-size:12px; font-weight:500;">${p.name}</div><div style="font-size:11px; color:var(--text-secondary);">$${p.price}</div></div>`;
    card.addEventListener('click', () => {
      document.getElementById('search-overlay').classList.remove('open');
      navigateTo('product', { productId: p.id });
    });
    resContainer.appendChild(card);
  });
});

// ── PRODUCT DETAIL PAGE ──
const renderProductDetail = () => {
  if (!state.currentProduct) return;
  const p = state.currentProduct;
  
  document.getElementById('pd-image').src = p.image;
  document.getElementById('pd-name').textContent = p.name;
  document.getElementById('pd-price').textContent = `$${p.price.toFixed(2)}`;
  
  const colorsEl = document.getElementById('pd-colors');
  colorsEl.innerHTML = '';
  p.colors.forEach((c, idx) => {
    const dot = document.createElement('div');
    dot.className = `swatch ${idx === 0 ? 'active' : ''}`;
    dot.style.background = c.toLowerCase() === 'onyx' || c.toLowerCase() === 'black' ? '#222' : 
                           c.toLowerCase() === 'bone' || c.toLowerCase() === 'white' ? '#ddd' : '#666';
    dot.title = c;
    dot.addEventListener('click', () => {
      colorsEl.querySelectorAll('.swatch').forEach(s => s.classList.remove('active'));
      dot.classList.add('active');
    });
    colorsEl.appendChild(dot);
  });

  const sizesEl = document.getElementById('pd-sizes');
  sizesEl.innerHTML = '';
  p.sizes.forEach((s, idx) => {
    const pill = document.createElement('button');
    pill.className = `pill ${idx === 0 ? 'active' : ''}`;
    pill.textContent = s;
    pill.addEventListener('click', () => {
      sizesEl.querySelectorAll('.pill').forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
    });
    sizesEl.appendChild(pill);
  });

  document.getElementById('pd-qty-val').textContent = '1';
  document.getElementById('pd-desc').textContent = p.description;
  document.getElementById('pd-material').textContent = p.material;

  // Fill "You May Also Like"
  const relGrid = document.getElementById('pd-related-grid');
  relGrid.innerHTML = '';
  const related = products.filter(rp => rp.category === p.category && rp.id !== p.id).slice(0, 4);
  related.forEach(rp => {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `<img src="${rp.image}" style="width:100%; aspect-ratio:3/4; object-fit:cover;">
                      <div style="padding:10px 0;"><div style="font-size:12px; font-weight:500;">${rp.name}</div><div style="font-size:11px; color:var(--text-secondary);">$${rp.price}</div></div>`;
    card.addEventListener('click', () => { navigateTo('product', { productId: rp.id }); window.scrollTo({top:0}); });
    relGrid.appendChild(card);
  });
};

document.getElementById('pd-qty-sub').addEventListener('click', () => {
  let v = parseInt(document.getElementById('pd-qty-val').textContent);
  if (v > 1) document.getElementById('pd-qty-val').textContent = v - 1;
});
document.getElementById('pd-qty-add').addEventListener('click', () => {
  let v = parseInt(document.getElementById('pd-qty-val').textContent);
  document.getElementById('pd-qty-val').textContent = v + 1;
});

document.getElementById('btn-pd-add').addEventListener('click', (e) => {
  const p = state.currentProduct;
  const qty = parseInt(document.getElementById('pd-qty-val').textContent);
  const size = document.querySelector('#pd-sizes .pill.active')?.textContent || 'Universal';
  addToCart(p, size, qty);
  
  e.target.textContent = "ADDED ✓";
  setTimeout(() => e.target.textContent = "ADD TO CART", 1500);
});

// ── CART & CHECKOUT ──
const updateCartBadge = () => {
  const badge = document.getElementById('cart-badge');
  const count = state.cart.reduce((t, i) => t + i.qty, 0);
  if (count > 0) {
    badge.textContent = count;
    badge.classList.remove('hidden');
    
    const icon = document.querySelector('#btn-cart svg');
    icon.classList.remove('bounce-anim');
    void icon.offsetWidth; // trigger reflow
    icon.classList.add('bounce-anim');
  } else {
    badge.classList.add('hidden');
  }
};

const addToCart = (product, size = 'Universal', qty = 1) => {
  const existing = state.cart.find(i => i.id === product.id && i.size === size);
  if (existing) existing.qty += qty;
  else state.cart.push({ ...product, size, qty });
  
  updateCartBadge();
  showToast(`${product.name} added to cart`);
  
  // Update UI if panels are open
  if (document.getElementById('cart-sidebar').classList.contains('open')) renderSidebarCart();
  if (state.currentView === 'cart') renderCartPage();
};

const removeFromCart = (index) => {
  state.cart.splice(index, 1);
  updateCartBadge();
  if (document.getElementById('cart-sidebar').classList.contains('open')) renderSidebarCart();
  if (state.currentView === 'cart') renderCartPage();
};

const getCartTotal = () => state.cart.reduce((t, i) => t + (i.price * i.qty), 0);

const renderSidebarCart = () => {
  const container = document.getElementById('sidebar-items');
  container.innerHTML = '';
  
  if (state.cart.length === 0) {
    container.innerHTML = '<p style="color:var(--text-secondary); text-align:center;">Your bag is empty.</p>';
    document.getElementById('sb-subtotal').textContent = '$0.00';
    return;
  }

  state.cart.forEach((item, idx) => {
    const el = document.createElement('div');
    el.className = 'cart-item';
    el.innerHTML = `
      <img src="${item.image}" class="ci-img">
      <div class="ci-details">
        <div class="ci-header">
          <span style="font-size:12px; font-weight:500;">${item.name}</span>
          <button class="btn-remove" data-idx="${idx}">Remove</button>
        </div>
        <span style="font-size:10px; color:var(--text-secondary); margin-bottom:auto;">Size: ${item.size} | Qty: ${item.qty}</span>
        <span style="font-size:12px;">$${item.price.toFixed(2)}</span>
      </div>
    `;
    el.querySelector('.btn-remove').addEventListener('click', () => removeFromCart(idx));
    container.appendChild(el);
  });
  
  document.getElementById('sb-subtotal').textContent = `$${getCartTotal().toFixed(2)}`;
};

const renderCartPage = () => {
  const container = document.getElementById('cart-page-list');
  container.innerHTML = '';
  
  const total = getCartTotal();
  document.getElementById('cp-subtotal').textContent = `$${total.toFixed(2)}`;
  document.getElementById('cp-tax').textContent = `$${(total * 0.08).toFixed(2)}`;
  document.getElementById('cp-total').textContent = `$${(total * 1.08).toFixed(2)}`;

  if (state.cart.length === 0) {
    container.innerHTML = '<p style="color:var(--text-secondary);">Your bag is empty. <a href="/collections" class="router-link" style="text-decoration:underline;">Continue shopping.</a></p>';
    return;
  }

  state.cart.forEach((item, idx) => {
    const el = document.createElement('div');
    el.className = 'cart-item';
    el.innerHTML = `
      <img src="${item.image}" class="ci-img">
      <div class="ci-details">
        <div class="ci-header">
          <span style="font-size:15px; font-weight:500;">${item.name}</span>
          <button class="btn-remove" data-idx="${idx}">Remove</button>
        </div>
        <span style="font-size:11px; color:var(--text-secondary); margin-bottom:auto;">Size: ${item.size} | Qty: ${item.qty}</span>
        <span style="font-size:15px;">$${item.price.toFixed(2)}</span>
      </div>
    `;
    el.querySelector('.btn-remove').addEventListener('click', () => removeFromCart(idx));
    container.appendChild(el);
  });
};

document.getElementById('btn-cp-checkout').addEventListener('click', () => {
  navigateTo('checkout');
  history.pushState(null, '', '/checkout');
});

const renderCheckoutSummary = () => {
  const sumList = document.getElementById('ck-summary-list');
  sumList.innerHTML = '';
  
  state.cart.forEach((item) => {
    const el = document.createElement('div');
    el.className = 'cart-item';
    el.style.borderBottom = 'none'; el.style.paddingBottom = '10px';
    el.innerHTML = `
      <img src="${item.image}" style="width:60px; height:80px; object-fit:cover;">
      <div class="ci-details">
        <span style="font-size:12px; font-weight:500;">${item.name}</span>
        <span style="font-size:10px; color:var(--text-secondary);">Qty: ${item.qty}</span>
        <span style="font-size:12px; margin-top:auto;">$${(item.price * item.qty).toFixed(2)}</span>
      </div>
    `;
    sumList.appendChild(el);
  });
  const total = getCartTotal() * 1.08;
  document.getElementById('ck-total').textContent = `$${total.toFixed(2)}`;
};

document.getElementById('ck-card').addEventListener('input', (e) => {
  let val = e.target.value.replace(/\D/g, '').match(/.{1,4}/g);
  e.target.value = val ? val.join(' ') : '';
});

document.getElementById('btn-ck-pay').addEventListener('click', () => {
  const email = document.getElementById('ck-email');
  const card = document.getElementById('ck-card');
  const err = document.getElementById('ck-error');
  
  if (!email.value || !card.value) {
    err.textContent = "Please fill all required fields.";
    err.classList.remove('hidden');
    return;
  }
  
  err.classList.add('hidden');
  document.getElementById('order-num').textContent = `#FLT-${Math.floor(100000 + Math.random() * 900000)}`;
  
  // clear cart
  state.cart = [];
  updateCartBadge();
  
  navigateTo('confirmation');
  history.pushState(null, '', '/confirmation');
});

// ── AUTH LOGIC ──
document.querySelectorAll('.auth-tab').forEach(tab => {
  tab.addEventListener('click', (e) => {
    document.querySelectorAll('.auth-tab').forEach(t => t.classList.remove('active'));
    e.target.classList.add('active');
  });
});

document.getElementById('auth-toggle-pwd').addEventListener('click', (e) => {
  e.preventDefault();
  const pwd = document.getElementById('auth-password');
  if (pwd.type === 'password') pwd.type = 'text';
  else pwd.type = 'password';
});

document.getElementById('btn-auth-submit').addEventListener('click', (e) => {
  e.preventDefault();
  const email = document.getElementById('auth-email').value;
  if (!email) return;
  state.user = { name: email.split('@')[0], email };
  localStorage.setItem('float_user', JSON.stringify(state.user));
  showToast(`Welcome back, ${state.user.name}`);
  navigateTo('home');
  history.pushState(null, '', '/');
});


// ── THREE.JS HERO CANVAS ──
function initThreeJS() {
  window.threeRendered = true;
  const canvas = document.getElementById('three-canvas');
  if (!canvas) return;

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
  camera.position.z = 5;

  const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);

  const geometry = new THREE.TorusKnotGeometry(1.2, 0.35, 200, 20);
  const material = new THREE.MeshBasicMaterial({ color: 0xffffff, wireframe: true, transparent: true, opacity: 0.15 });
  const torusKnot = new THREE.Mesh(geometry, material);
  scene.add(torusKnot);

  // Initial routing triggers sometimes before correct dims
  window.addEventListener('resize', () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
  });

  // Mouse Parallax Tilting
  let targetX = 0;
  let targetY = 0;
  
  document.getElementById('view-home').addEventListener('mousemove', (e) => {
    targetX = (e.clientX / window.innerWidth - 0.5) * 0.3; // Max ~15deg
    targetY = (e.clientY / window.innerHeight - 0.5) * 0.3;
  });

  const animate = function () {
    requestAnimationFrame(animate);
    // Base auto rotation
    torusKnot.rotation.x += 0.002;
    torusKnot.rotation.y += 0.002;
    
    // Parallax easing
    scene.rotation.y += (targetX - scene.rotation.y) * 0.05;
    scene.rotation.x += (targetY - scene.rotation.x) * 0.05;
    
    if (state.currentView === 'home') renderer.render(scene, camera);
  };
  animate();
}

function initAboutThreeJS() {
  if (window.aboutThreeRendered) return;
  window.aboutThreeRendered = true;
  
  const canvas = document.getElementById('about-canvas');
  if (!canvas) return;

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
  camera.position.z = 8;

  const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);

  // Wireframe Icosahedron Geometry for About Page
  const geometry = new THREE.IcosahedronGeometry(3, 1);
  const material = new THREE.MeshBasicMaterial({ color: 0xffffff, wireframe: true, transparent: true, opacity: 0.1 });
  const mesh = new THREE.Mesh(geometry, material);
  scene.add(mesh);

  window.aboutMesh = mesh; // Saved refernce for scroll listener hooks

  window.addEventListener('resize', () => {
    if (state.currentView === 'about') {
        renderer.setSize(window.innerWidth, window.innerHeight);
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
    }
  });

  const animate = function () {
    requestAnimationFrame(animate);
    // Base idle rotation
    mesh.rotation.y += 0.001;
    mesh.rotation.x += 0.0005;
    if (state.currentView === 'about') {
        renderer.render(scene, camera);
    }
  };
  animate();
}

// ── INIT ──
window.addEventListener('DOMContentLoaded', () => {
  // Check auth
  const savedUser = localStorage.getItem('float_user');
  if (savedUser) state.user = JSON.parse(savedUser);
  
  // Router start
  const path = window.location.pathname.substring(1) || 'home';
  navigateTo(path);
});
