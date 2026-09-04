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

function brandIconSvg(name) {
  const brands = {
    facebook: `<svg class="brand-logo" viewBox="0 0 24 24" aria-hidden="true" focusable="false" style="fill:currentColor;stroke:none"><path style="fill:currentColor;stroke:none" d="M12 2.04C6.5 2.04 2 6.53 2 12.06c0 5 3.66 9.15 8.44 9.9v-7H7.9v-2.9h2.54V9.85c0-2.51 1.49-3.89 3.78-3.89 1.09 0 2.23.19 2.23.19v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.9h-2.33v7A10 10 0 0 0 22 12.06C22 6.53 17.5 2.04 12 2.04Z"/></svg>`,
    whatsapp: `<svg class="brand-logo" viewBox="0 0 24 24" aria-hidden="true" focusable="false" style="fill:currentColor;stroke:none"><path style="fill:currentColor;stroke:none" d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.009-.371-.011-.57-.011-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479s1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.262.489 1.693.625.712.226 1.36.194 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.981.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.9 6.99c-.003 5.45-4.437 9.884-9.892 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.481-8.413Z"/></svg>`,
    instagram: `<svg class="brand-logo" viewBox="0 0 24 24" aria-hidden="true" focusable="false" style="fill:currentColor;stroke:none"><path style="fill:currentColor;stroke:none" d="M7.8 2h8.4A5.8 5.8 0 0 1 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8A5.8 5.8 0 0 1 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8A3.6 3.6 0 0 0 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6A3.6 3.6 0 0 0 16.4 4H7.6m9.65 1.5A1.25 1.25 0 1 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10m0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z"/></svg>`,
    tiktok: `<svg class="brand-logo" viewBox="0 0 24 24" aria-hidden="true" focusable="false" style="fill:currentColor;stroke:none"><path style="fill:currentColor;stroke:none" d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07Z"/></svg>`
  };

  return brands[name] || "";
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

function renderGallery() {
  setText("galleryEyebrow", CONFIG.gallery.eyebrow);
  setText("galleryTitle", CONFIG.gallery.title);
  setText("galleryLead", CONFIG.gallery.lead);
  setText("galleryButton", CONFIG.gallery.button);
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

  const SOCIAL_LOGOS = {
    "FACEBOOK": "facebook.svg",
    "WHATSAPP": "whatsapp.svg",
    "INSTAGRAM": "instagram.svg",
    "TIKTOK": "tiktok.svg",
    "GOOGLE REVIEWS": "google-reviews.svg"
  };

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

    const logo = SOCIAL_LOGOS[network.name.toUpperCase()] || "";

    card.innerHTML = `
      <span class="social-number">${network.number}</span>

      <div class="social-icon">
        ${
          logo
            ? `<img
                class="social-brand-logo"
                src="./${logo}"
                alt="${network.name}"
              >`
            : ""
        }
      </div>

      <h3>${network.name}</h3>
      <p>MTZ CONCRETE</p>
    `;

    grid.appendChild(card);
  });
}
