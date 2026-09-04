/*
=====================================================================
 MTZ CONCRETE — SITE LOGIC
=====================================================================
Most edits belong in site-config.js.
=====================================================================
*/

let currentLang = "en";

const $ = (id) => document.getElementById(id);

function text(value) {
  if (typeof value === "string") return value;
  return value?.[currentLang] ?? "";
}

function setText(id, value) {
  const el = $(id);
  if (el) el.textContent = text(value);
}

function iconSvg(name) {
  const icons = {
    house: `<svg viewBox="0 0 24 24"><path d="M3 10.5 12 3l9 7.5V21H3z"/><path d="M9 21v-7h6v7"/></svg>`,
    spark: `<svg viewBox="0 0 24 24"><path d="m12 2 1.6 5.2L19 9l-5.4 1.8L12 16l-1.6-5.2L5 9l5.4-1.8z"/><path d="m19 15 .8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8z"/></svg>`,
    layers: `<svg viewBox="0 0 24 24"><path d="m12 3 9 5-9 5-9-5z"/><path d="m3 12 9 5 9-5"/><path d="m3 16 9 5 9-5"/></svg>`,
    building: `<svg viewBox="0 0 24 24"><path d="M4 21V7h7v14"/><path d="M11 21V3h9v18"/><path d="M7 10h1M7 13h1M7 16h1M14 7h2M14 11h2M14 15h2"/></svg>`,
    ruler: `<svg viewBox="0 0 24 24"><path d="m4 16 12-12 4 4L8 20z"/><path d="m13 7 4 4M10 10l2 2M7 13l2 2"/></svg>`,
    hammer: `<svg viewBox="0 0 24 24"><path d="m14 4 6 6"/><path d="m12 6 4-4 6 6-4 4"/><path d="m14 10-9 9-2-2 9-9"/></svg>`,
    chat: `<svg viewBox="0 0 24 24"><path d="M4 5h16v11H8l-4 4z"/></svg>`,
    calendar: `<svg viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M8 3v4M16 3v4M3 10h18"/><path d="M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01"/></svg>`,
    check: `<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="m8 12 2.5 2.5L16 9"/></svg>`,
    people: `<svg viewBox="0 0 24 24"><path d="M8 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/><path d="M3 20v-2a5 5 0 0 1 10 0v2"/><path d="M16 8a3 3 0 1 1 0 6"/><path d="M16 14c3 0 5 2 5 5"/></svg>`,
    bubble: `<svg viewBox="0 0 24 24"><path d="M21 12a8 8 0 0 1-12 7l-5 1 1-4a8 8 0 1 1 16-4Z"/></svg>`,
    camera: `<svg viewBox="0 0 24 24"><rect x="3" y="6" width="18" height="15" rx="2"/><path d="m8 6 1-3h6l1 3"/><circle cx="12" cy="13" r="4"/></svg>`,
    music: `<svg viewBox="0 0 24 24"><path d="M14 4v11"/><path d="M14 6c2 2 4 3 6 3"/><circle cx="10" cy="17" r="3"/></svg>`,
    pin: `<svg viewBox="0 0 24 24"><path d="M12 22s7-6 7-13a7 7 0 0 0-14 0c0 7 7 13 7 13Z"/><circle cx="12" cy="9" r="2.5"/></svg>`
  };

  return icons[name] || icons.check;
}

function renderCompany() {
  document.title = CONFIG.company.seoTitle;
  const meta = $("metaDescription");
  if (meta) meta.content = CONFIG.company.seoDescription;

  ["brandMain", "footerBrandMain"].forEach(id => setText(id, CONFIG.company.brandMain));
  ["brandSub", "footerBrandSub"].forEach(id => setText(id, CONFIG.company.brandSub));
  setText("copyrightName", CONFIG.company.name);

  const phoneIds = ["heroPhoneButton", "estimatePhone", "footerPhone"];
  phoneIds.forEach(id => {
    const el = $(id);
    if (el) el.href = `tel:${CONFIG.company.phoneDial}`;
  });

  setText("heroPhoneText", CONFIG.hero.phoneButton);
  setText("estimatePhoneText", CONFIG.company.phoneDisplay);
  setText("footerPhone", CONFIG.company.phoneDisplay);

  ["estimateEmail", "footerEmail"].forEach(id => {
    const el = $(id);
    if (el) el.href = `mailto:${CONFIG.company.email}`;
  });

  setText("estimateEmailText", CONFIG.company.email);
  setText("footerEmail", CONFIG.company.email);
}

function renderSections() {
  Object.entries(CONFIG.sections).forEach(([key, visible]) => {
    const el = document.querySelector(`[data-section="${key}"]`);
    if (el) el.style.display = visible ? "" : "none";
  });
}

function renderTopStrip() {
  setText("topStripText", CONFIG.topStrip);

  document.querySelectorAll(".top-lang").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.lang === currentLang);
  });
}

function renderNav() {
  const desktop = $("desktopNav");
  const mobile = $("mobileNav");

  desktop.innerHTML = "";
  mobile.innerHTML = "";

  CONFIG.navigation.forEach(item => {
    [desktop, mobile].forEach(target => {
      const a = document.createElement("a");
      a.href = item.target;
      a.textContent = text(item);
      a.addEventListener("click", () => $("mobileMenu").classList.remove("open"));
      target.appendChild(a);
    });
  });

  setText("navCall", currentLang === "en" ? "Get Estimate" : "Cotización");
}

function renderHero() {
  setText("heroEyebrow", CONFIG.hero.eyebrow);
  setText("heroTitle", CONFIG.hero.title);
  setText("heroLead", CONFIG.hero.lead);
  setText("heroEstimateButton", CONFIG.hero.estimateButton);

  const trust = $("heroTrust");
  trust.innerHTML = "";

  CONFIG.hero.trust.forEach(item => {
    const div = document.createElement("div");
    div.textContent = text(item);
    trust.appendChild(div);
  });
}

function renderServices() {
  setText("servicesEyebrow", CONFIG.servicesHeader.eyebrow);
  setText("servicesTitle", CONFIG.servicesHeader.title);
  setText("servicesLead", CONFIG.servicesHeader.lead);

  const grid = $("servicesGrid");
  grid.innerHTML = "";

  CONFIG.services.forEach(item => {
    const card = document.createElement("article");
    card.className = "service-card";

    card.innerHTML = `
      <div class="icon-box">${iconSvg(item.icon)}</div>
      <h3>${text(item.title)}</h3>
      <p>${text(item.text)}</p>
    `;

    grid.appendChild(card);
  });

  setText("residentialTitle", CONFIG.splitCards.residential.title);
  setText("residentialText", CONFIG.splitCards.residential.text);
  setText("residentialButton", CONFIG.splitCards.residential.button);

  setText("commercialTitle", CONFIG.splitCards.commercial.title);
  setText("commercialText", CONFIG.splitCards.commercial.text);
  setText("commercialButton", CONFIG.splitCards.commercial.button);

  document.querySelectorAll("[data-icon]").forEach(el => {
    el.innerHTML = iconSvg(el.dataset.icon);
  });
}

function renderStandard() {
  setText("standardEyebrow", CONFIG.standard.eyebrow);
  setText("standardTitle", CONFIG.standard.title);

  const grid = $("standardGrid");
  grid.innerHTML = "";

  CONFIG.standard.items.forEach(item => {
    const card = document.createElement("article");
    card.className = "standard-card";

    card.innerHTML = `
      <div class="standard-icon">${iconSvg(item.icon)}</div>
      <h3>${text(item.title)}</h3>
      <p>${text(item.text)}</p>
    `;

    grid.appendChild(card);
  });
}

let projectIndex = 0;
let projectTimer = null;

function renderGallery() {
  setText("galleryEyebrow", CONFIG.gallery.eyebrow);
  setText("galleryTitle", CONFIG.gallery.title);

  const slider = $("projectSlider");
  const slides = $("projectSlides");
  const dots = $("projectDots");
  const total = CONFIG.gallery.images.length;

  if (!slider || !slides || !dots || !total) return;

  slides.innerHTML = CONFIG.gallery.images.map((src, index) => `
    <figure class="project-slide${index === 0 ? " is-active" : ""}" data-slide="${index}">
      <div class="project-slide-bg" style="background-image:url('${src}')"></div>
      <img src="${src}" alt="MTZ Concrete project ${index + 1}" loading="${index < 2 ? "eager" : "lazy"}">
    </figure>
  `).join("");

  dots.innerHTML = CONFIG.gallery.images.map((_, index) => `
    <button class="project-dot${index === 0 ? " is-active" : ""}" type="button" data-slide-to="${index}" aria-label="View project ${index + 1}"></button>
  `).join("");

  $("projectTotal").textContent = String(total).padStart(2, "0");
  projectIndex = 0;

  const show = index => {
    projectIndex = (index + total) % total;
    slider.querySelectorAll(".project-slide").forEach((slide, i) => slide.classList.toggle("is-active", i === projectIndex));
    slider.querySelectorAll(".project-dot").forEach((dot, i) => dot.classList.toggle("is-active", i === projectIndex));
    $("projectCurrent").textContent = String(projectIndex + 1).padStart(2, "0");
  };

  const start = () => {
    clearInterval(projectTimer);
    projectTimer = setInterval(() => show(projectIndex + 1), CONFIG.gallery.interval || 2500);
  };

  const move = direction => {
    show(projectIndex + direction);
    start();
  };

  $("projectPrev").onclick = () => move(-1);
  $("projectNext").onclick = () => move(1);

  dots.querySelectorAll(".project-dot").forEach(dot => {
    dot.onclick = () => {
      show(Number(dot.dataset.slideTo));
      start();
    };
  });

  slider.onmouseenter = () => clearInterval(projectTimer);
  slider.onmouseleave = start;

  let touchStartX = 0;
  slider.ontouchstart = event => {
    touchStartX = event.touches[0].clientX;
    clearInterval(projectTimer);
  };

  slider.ontouchend = event => {
    const distance = event.changedTouches[0].clientX - touchStartX;
    if (Math.abs(distance) > 45) show(projectIndex + (distance < 0 ? 1 : -1));
    start();
  };

  start();
}

function renderProcess() {
  setText("processEyebrow", CONFIG.process.eyebrow);
  setText("processTitle", CONFIG.process.title);

  const grid = $("processGrid");
  grid.innerHTML = "";

  CONFIG.process.steps.forEach(step => {
    const card = document.createElement("article");
    card.className = "process-card";

    card.innerHTML = `
      <div class="process-number">${step.number}</div>
      <h3>${text(step.title)}</h3>
      <p>${text(step.text)}</p>
    `;

    grid.appendChild(card);
  });
}

function renderSocial() {
  setText("socialEyebrow", CONFIG.social.eyebrow);
  setText("socialTitle", CONFIG.social.title);
  setText("socialLead", CONFIG.social.lead);

  const grid = $("socialGrid");
  grid.innerHTML = "";

  CONFIG.social.networks.forEach(network => {
    const hasUrl = Boolean(network.url);
    const card = document.createElement(hasUrl ? "a" : "div");
    card.className = "social-card";

    if (hasUrl) {
      card.href = network.url;
      card.target = "_blank";
      card.rel = "noopener noreferrer";
    }

    card.innerHTML = `
      <span class="social-number">${network.number}</span>
      <div class="social-icon">${iconSvg(network.icon)}</div>
      <h3>${network.name}</h3>
      <p>MTZ CONCRETE</p>
    `;

    grid.appendChild(card);
  });
}

function renderArea() {
  setText("areaEyebrow", CONFIG.serviceArea.eyebrow);
  setText("areaTitle", CONFIG.serviceArea.title);
  setText("areaLead", CONFIG.serviceArea.lead);

  const list = $("areaList");
  list.innerHTML = "";

  CONFIG.serviceArea.cities.forEach(city => {
    const item = document.createElement("div");
    item.className = "area-item";
    item.innerHTML = `
      <div class="area-pin">${iconSvg("pin")}</div>
      <span>${city}</span>
    `;
    list.appendChild(item);
  });
}

function renderEstimate() {
  setText("estimateEyebrow", CONFIG.estimate.eyebrow);
  setText("estimateTitle", CONFIG.estimate.title);
  setText("estimateLead", CONFIG.estimate.lead);
  setText("estimateSubmit", CONFIG.estimate.submitButton);

  const benefits = $("estimateBenefits");
  benefits.innerHTML = "";

  CONFIG.estimate.benefits.forEach(item => {
    const div = document.createElement("div");
    div.textContent = text(item);
    benefits.appendChild(div);
  });

  document.querySelectorAll("[data-label]").forEach(el => {
    const key = el.dataset.label;
    el.textContent = text(CONFIG.formLabels[key]);
  });

  const select = $("projectTypeSelect");
  select.innerHTML = "";

  CONFIG.estimate.projectTypes.forEach(item => {
    const option = document.createElement("option");
    option.value = item.en;
    option.textContent = text(item);
    select.appendChild(option);
  });

  $("formNote").textContent =
    CONFIG.estimate.mode === "demo"
      ? (
          currentLang === "en"
            ? "The form design is ready. Connect it to Make, Airtable or another backend when you are ready."
            : "El formulario ya está listo. Después puedes conectarlo a Make, Airtable u otro sistema."
        )
      : "";
}

function renderFooter() {
  setText("footerTagline", CONFIG.footer.tagline);
}

function renderAll() {
  document.documentElement.lang = currentLang;

  renderCompany();
  renderSections();
  renderTopStrip();
  renderNav();
  renderHero();
  renderServices();
  renderStandard();
  renderGallery();
  renderProcess();
  renderSocial();
  renderArea();
  renderEstimate();
  renderFooter();
}

document.querySelectorAll(".top-lang").forEach(btn => {
  btn.addEventListener("click", () => {
    currentLang = btn.dataset.lang;
    renderAll();
  });
});

$("menuButton").addEventListener("click", () => {
  $("mobileMenu").classList.toggle("open");
});

$("estimateForm").addEventListener("submit", async event => {
  event.preventDefault();

  if (CONFIG.estimate.mode === "demo") {
    alert(
      currentLang === "en"
        ? "The estimate form is currently in demo mode."
        : "El formulario de cotización está actualmente en modo demo."
    );
    return;
  }

  if (!CONFIG.estimate.endpoint) return;

  try {
    const body = new FormData(event.currentTarget);
    const response = await fetch(CONFIG.estimate.endpoint, {
      method: "POST",
      body
    });

    if (!response.ok) throw new Error("Failed");

    alert(currentLang === "en" ? "Request sent." : "Solicitud enviada.");
    event.currentTarget.reset();
  } catch {
    alert(
      currentLang === "en"
        ? "There was a problem sending your request."
        : "Hubo un problema enviando tu solicitud."
    );
  }
});

$("year").textContent = new Date().getFullYear();

renderAll();
