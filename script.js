let currentLang = "en";
let projectIndex = 0;
let projectTimer = null;
const $ = id => document.getElementById(id);
const t = value => typeof value === "string" ? value : (value?.[currentLang] || value?.en || "");

function iconSvg(name) {
  const icons = {
    house: `<svg viewBox="0 0 24 24"><path d="M3 10.5 12 3l9 7.5V21H3z"/><path d="M9 21v-7h6v7"/></svg>`,
    building: `<svg viewBox="0 0 24 24"><path d="M4 21V7h7v14M11 21V3h9v18M7 10h1M7 13h1M7 16h1M14 7h2M14 11h2M14 15h2"/></svg>`,
    check: `<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="m8 12 2.5 2.5L16 9"/></svg>`,
    people: `<svg viewBox="0 0 24 24"><path d="M8 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM3 20v-2a5 5 0 0 1 10 0v2M16 8a3 3 0 1 1 0 6M16 14c3 0 5 2 5 5"/></svg>`,
    driveway: `<svg viewBox="0 0 24 24"><path d="M5 18h14l-2-7H7z"/><path d="M7 11 9 7h6l2 4M4 18h16M8 18v2M16 18v2"/></svg>`,
    parking: `<svg viewBox="0 0 24 24"><rect x="4" y="3" width="16" height="18" rx="2"/><path d="M9 17V7h4a3 3 0 0 1 0 6H9"/></svg>`,
    layers: `<svg viewBox="0 0 24 24"><path d="m12 3 9 5-9 5-9-5zM3 12l9 5 9-5M3 16l9 5 9-5"/></svg>`,
    hammer: `<svg viewBox="0 0 24 24"><path d="m14 4 6 6M12 6l4-4 6 6-4 4M14 10l-9 9-2-2 9-9"/></svg>`,
    ruler: `<svg viewBox="0 0 24 24"><path d="m4 16 12-12 4 4L8 20zM13 7l4 4M10 10l2 2M7 13l2 2"/></svg>`,
    excavator: `<svg viewBox="0 0 24 24"><path d="M3 18h12M5 18l2-7h6l3 7M8 11V7h5l3 4M15 9l3-4 3 2-4 6M18 18h3"/><circle cx="7" cy="19" r="2"/><circle cx="14" cy="19" r="2"/></svg>`,
    pin: `<svg viewBox="0 0 24 24"><path d="M12 22s7-6 7-13a7 7 0 0 0-14 0c0 7 7 13 7 13Z"/><circle cx="12" cy="9" r="2.5"/></svg>`
  };
  return icons[name] || icons.check;
}

function renderNav() {
  [$("desktopNav"), $("mobileNav")].forEach(nav => {
    nav.innerHTML = CONFIG.navigation.map(item => `<a href="${item.target}">${t(item)}</a>`).join("");
  });
}

function renderHero() {
  $("heroEyebrow").textContent = t(CONFIG.hero.eyebrow);
  $("heroTitleLine1").textContent = t(CONFIG.hero.titleLine1);
  $("heroTitleLine2").textContent = t(CONFIG.hero.titleLine2);
  $("heroLead").textContent = t(CONFIG.hero.lead);
  $("heroEstimateButton").textContent = t(CONFIG.hero.estimateButton);
  $("heroWhatsappButton").textContent = t(CONFIG.hero.whatsappButton);
  $("heroTrust").innerHTML = CONFIG.hero.trust.map(item => `<div><span class="trust-icon">${iconSvg(item.icon)}</span><strong>${t(item)}</strong></div>`).join("");
}

function renderServices() {
  $("servicesEyebrow").textContent = t(CONFIG.servicesHeader.eyebrow);
  $("servicesTitle").textContent = t(CONFIG.servicesHeader.title);
  $("servicesLead").textContent = t(CONFIG.servicesHeader.lead);
  $("servicesGrid").innerHTML = CONFIG.services.map(item => `<article class="service-card"><div class="service-icon">${iconSvg(item.icon)}</div><h3>${t(item.title)}</h3><p>${t(item.text)}</p></article>`).join("");
}

function renderArea() {
  $("areaEyebrow").textContent = t(CONFIG.serviceArea.eyebrow);
  $("areaTitle").textContent = t(CONFIG.serviceArea.title);
  $("areaLead").textContent = t(CONFIG.serviceArea.lead);
  $("areaList").innerHTML = CONFIG.serviceArea.cities.map(city => `<div class="area-item"><span>${iconSvg("pin")}</span><strong>${city}</strong></div>`).join("");
}

function renderGallery() {
  $("galleryEyebrow").textContent = t(CONFIG.gallery.eyebrow);
  $("galleryTitle").textContent = t(CONFIG.gallery.title);
  const total = CONFIG.gallery.images.length;
  $("projectTotal").textContent = String(total).padStart(2, "0");
  $("projectSlides").innerHTML = CONFIG.gallery.images.map((src, i) => `<figure class="project-slide${i === 0 ? " is-active" : ""}"><img src="${src}" alt="MTZ Concrete project ${i + 1}" loading="${i < 3 ? "eager" : "lazy"}"></figure>`).join("");
  $("projectDots").innerHTML = CONFIG.gallery.images.map((_, i) => `<button class="project-dot${i === 0 ? " is-active" : ""}" data-index="${i}" aria-label="Project ${i + 1}"></button>`).join("");

  const show = index => {
    projectIndex = (index + total) % total;
    document.querySelectorAll(".project-slide").forEach((el, i) => el.classList.toggle("is-active", i === projectIndex));
    document.querySelectorAll(".project-dot").forEach((el, i) => el.classList.toggle("is-active", i === projectIndex));
    $("projectCurrent").textContent = String(projectIndex + 1).padStart(2, "0");
  };
  const start = () => { clearInterval(projectTimer); projectTimer = setInterval(() => show(projectIndex + 1), CONFIG.gallery.interval || 2500); };
  const move = amount => { show(projectIndex + amount); start(); };

  $("projectPrev").onclick = () => move(-1);
  $("projectNext").onclick = () => move(1);
  document.querySelectorAll(".project-dot").forEach(dot => dot.onclick = () => { show(Number(dot.dataset.index)); start(); });

  const slider = $("projectSlider");
  slider.onmouseenter = () => clearInterval(projectTimer);
  slider.onmouseleave = start;
  let x = 0;
  slider.ontouchstart = e => { x = e.touches[0].clientX; clearInterval(projectTimer); };
  slider.ontouchend = e => { const d = e.changedTouches[0].clientX - x; if (Math.abs(d) > 45) show(projectIndex + (d < 0 ? 1 : -1)); start(); };
  start();
}

function renderCompany() {
  document.title = CONFIG.company.seoTitle;
  $("metaDescription").content = CONFIG.company.seoDescription;
  $("navPhoneText").textContent = CONFIG.company.phoneDisplay;
  $("navPhone").href = `tel:${CONFIG.company.phoneDial}`;
  $("estimatePhoneText").textContent = CONFIG.company.phoneDisplay;
  $("estimatePhone").href = `tel:${CONFIG.company.phoneDial}`;
  $("estimateEmailText").textContent = CONFIG.company.email;
  $("estimateEmail").href = `mailto:${CONFIG.company.email}`;
  $("heroWhatsapp").href = `https://wa.me/${CONFIG.company.phoneDial.replace(/\D/g, "")}`;
}

function renderSocial() {
  $("socialIcons").innerHTML = CONFIG.social.map(item => {
    const tag = item.url ? "a" : "div";
    const attrs = item.url ? ` href="${item.url}" target="_blank" rel="noopener"` : "";
    return `<${tag} class="social-icon"${attrs} title="${item.name}"><img src="${item.icon}" alt="${item.name}"></${tag}>`;
  }).join("");
}

function renderStats() {
  const projects = document.querySelector("#projects");
  if (!projects || document.querySelector("#mtzStats")) return;

  const section = document.createElement("section");
  section.id = "mtzStats";
  section.className = "mtz-stats";

  section.innerHTML = `
    <div class="mtz-stats-inner">
      ${CONFIG.stats.map(item => `
        <div class="mtz-stat">
          ${
            item.value !== null
              ? `<strong class="mtz-counter" data-target="${item.value}" data-suffix="${item.suffix || ""}">0</strong>
                 <span>${t(item.label)}</span>`
              : `<strong class="mtz-stat-text">${t(item.text)}</strong>`
          }
        </div>
      `).join("")}
    </div>
  `;

  projects.parentNode.insertBefore(section, projects);

  const counters = section.querySelectorAll(".mtz-counter");

  const observer = new IntersectionObserver(entries => {
    if (!entries[0].isIntersecting) return;

    counters.forEach(counter => {
      const target = Number(counter.dataset.target);
      const suffix = counter.dataset.suffix || "";
      const duration = 1600;
      const start = performance.now();

      function animate(now) {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        counter.textContent = Math.floor(target * eased) + suffix;

        if (progress < 1) requestAnimationFrame(animate);
      }

      requestAnimationFrame(animate);
    });

    observer.disconnect();
  }, { threshold: 0.35 });

  observer.observe(section);
}

function renderLanguage() {
function renderLanguage() {
  document.documentElement.lang = currentLang;
  $("topStripText").textContent = t(CONFIG.topStrip);
  document.querySelectorAll(".top-lang").forEach(btn => btn.classList.toggle("active", btn.dataset.lang === currentLang));
  renderNav(); renderHero(); renderServices(); renderArea(); renderGallery();
}

$("menuButton").onclick = () => $("mobileMenu").classList.toggle("open");
document.addEventListener("click", e => { if (e.target.closest("#mobileNav a")) $("mobileMenu").classList.remove("open"); });
document.querySelectorAll(".top-lang").forEach(btn => btn.onclick = () => { currentLang = btn.dataset.lang; renderLanguage(); });
$("estimateForm").addEventListener("submit", e => { e.preventDefault(); $("formNote").textContent = currentLang === "en" ? "Thank you. Your request is ready to be connected to the quote system." : "Gracias. Tu solicitud está lista para conectarse al sistema de cotizaciones."; });

renderCompany();
renderStats();
renderSocial();
renderLanguage();
$("year").textContent = new Date().getFullYear();
