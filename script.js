/*
=================================================================
 MTZ CONCRETE — WEBSITE LOGIC
=================================================================

Most normal website changes belong in site-config.js.

Only edit this file if you want to change HOW the website behaves.
=================================================================
*/

let currentLang = "en";

/* ------------------------------
   Small helper functions
------------------------------ */

function textByLang(value) {
  if (typeof value === "string") return value;
  return value?.[currentLang] ?? "";
}

function setText(id, value) {
  const element = document.getElementById(id);
  if (element) element.textContent = textByLang(value);
}

function telLink(number) {
  return `tel:${number}`;
}

function mailLink(email) {
  return `mailto:${email}`;
}


/* ------------------------------
   Company / SEO
------------------------------ */

function renderCompany() {
  document.title = CONFIG.company.seoTitle;

  const meta = document.getElementById("metaDescription");
  if (meta) meta.setAttribute("content", CONFIG.company.seoDescription);

  setText("brandShort", CONFIG.company.shortName);
  setText("brandName", CONFIG.company.name.replace(CONFIG.company.shortName, "").trim());

  setText("footerBrandShort", CONFIG.company.shortName);
  setText("footerBrandName", CONFIG.company.name.replace(CONFIG.company.shortName, "").trim());

  setText("copyrightName", CONFIG.company.name);

  ["navCallButton", "heroPhoneButton", "contactPhone", "footerPhone"].forEach(id => {
    const element = document.getElementById(id);
    if (element) element.href = telLink(CONFIG.company.phoneDial);
  });

  setText("heroPhoneButton", CONFIG.company.phoneDisplay);
  setText("contactPhoneText", CONFIG.company.phoneDisplay);
  setText("footerPhone", CONFIG.company.phoneDisplay);

  ["contactEmail", "footerEmail"].forEach(id => {
    const element = document.getElementById(id);
    if (element) element.href = mailLink(CONFIG.company.email);
  });

  setText("contactEmailText", CONFIG.company.email);
  setText("footerEmail", CONFIG.company.email);
}


/* ------------------------------
   Show / hide sections
------------------------------ */

function renderSectionVisibility() {
  Object.entries(CONFIG.sections).forEach(([name, visible]) => {
    const section = document.querySelector(`[data-section="${name}"]`);
    if (section) section.style.display = visible ? "" : "none";
  });
}


/* ------------------------------
   Navigation
------------------------------ */

function renderNavigation() {
  const nav = document.getElementById("navLinks");
  nav.innerHTML = "";

  CONFIG.navigation.forEach(item => {
    const link = document.createElement("a");
    link.href = item.target;
    link.textContent = textByLang(item);

    link.addEventListener("click", () => {
      nav.classList.remove("open");
    });

    nav.appendChild(link);
  });

  const call = document.getElementById("navCallButton");
  call.textContent = currentLang === "en" ? "Call Now" : "Llamar";
}


/* ------------------------------
   Hero
------------------------------ */

function renderHero() {
  setText("heroEyebrow", CONFIG.hero.eyebrow);
  setText("heroTitle", CONFIG.hero.title);
  setText("heroText", CONFIG.hero.text);
  setText("heroQuoteButton", CONFIG.hero.quoteButton);

  setText("heroCardBadge", CONFIG.hero.card.badge);
  setText("heroCardTitle", CONFIG.hero.card.title);
  setText("heroCardText", CONFIG.hero.card.text);
  setText("heroCardButton", CONFIG.hero.card.button);

  const trustRow = document.getElementById("trustRow");
  trustRow.innerHTML = "";

  CONFIG.hero.trustItems.forEach(item => {
    const div = document.createElement("div");

    const strong = document.createElement("strong");
    strong.textContent = textByLang(item.title);

    const span = document.createElement("span");
    span.textContent = textByLang(item.subtitle);

    div.append(strong, span);
    trustRow.appendChild(div);
  });
}


/* ------------------------------
   Services
------------------------------ */

function renderServices() {
  setText("servicesEyebrow", CONFIG.servicesHeader.eyebrow);
  setText("servicesTitle", CONFIG.servicesHeader.title);

  const grid = document.getElementById("servicesGrid");
  grid.innerHTML = "";

  CONFIG.services.forEach(service => {
    const card = document.createElement("article");
    card.className = "service-card reveal";

    card.innerHTML = `
      <div class="card-number">${service.number}</div>
      <h3>${textByLang(service.title)}</h3>
      <p>${textByLang(service.description)}</p>
    `;

    grid.appendChild(card);
  });
}


/* ------------------------------
   Projects
------------------------------ */

function renderProjects() {
  setText("projectsEyebrow", CONFIG.projectsHeader.eyebrow);
  setText("projectsTitle", CONFIG.projectsHeader.title);
  setText("projectsText", CONFIG.projectsHeader.text);

  const grid = document.getElementById("projectsGrid");
  grid.innerHTML = "";

  CONFIG.projects.forEach((project, index) => {
    const card = document.createElement("div");
    card.className = `project-card project-${index + 1} reveal`;

    if (project.image) {
      card.style.backgroundImage =
        `linear-gradient(to top, rgba(0,0,0,.65), transparent 65%), url("${project.image}")`;
      card.style.backgroundSize = "cover";
      card.style.backgroundPosition = "center";
    }

    const title = document.createElement("span");
    title.textContent = textByLang(project.title);

    card.appendChild(title);
    grid.appendChild(card);
  });
}


/* ------------------------------
   Service Areas
------------------------------ */

function renderAreas() {
  setText("areasEyebrow", CONFIG.areasHeader.eyebrow);
  setText("areasTitle", CONFIG.areasHeader.title);
  setText("areasText", CONFIG.areasHeader.text);

  const list = document.getElementById("areasList");
  list.innerHTML = "";

  CONFIG.serviceAreas.forEach(area => {
    const span = document.createElement("span");
    span.textContent = area;
    list.appendChild(span);
  });

  const finalItem = document.createElement("span");
  finalItem.textContent =
    currentLang === "en" ? "Surrounding Areas" : "Áreas Cercanas";
  list.appendChild(finalItem);
}


/* ------------------------------
   Quote Form
------------------------------ */

function renderQuote() {
  setText("quoteEyebrow", CONFIG.quote.eyebrow);
  setText("quoteTitle", CONFIG.quote.title);
  setText("quoteText", CONFIG.quote.text);
  setText("contactPhoneLabel", CONFIG.quote.phoneLabel);
  setText("submitButton", CONFIG.quote.submitButton);

  const select = document.getElementById("projectTypeSelect");
  select.innerHTML = "";

  CONFIG.quote.projectTypes.forEach(type => {
    const option = document.createElement("option");
    option.value = type.en;
    option.textContent = textByLang(type);
    select.appendChild(option);
  });

  const note = document.getElementById("formNote");

  if (CONFIG.quote.mode === "demo") {
    note.textContent =
      currentLang === "en"
        ? "Form layout is ready. Connect it to Airtable, Make, Formspree or your preferred system when you are ready."
        : "El formulario ya está diseñado. Cuando quieras, conéctalo a Airtable, Make, Formspree o tu sistema preferido.";
  } else {
    note.textContent =
      currentLang === "en"
        ? "Your request will be sent when you submit this form."
        : "Tu solicitud se enviará al mandar este formulario.";
  }
}


/* ------------------------------
   Social Media
------------------------------ */

function renderSocial() {
  setText("socialEyebrow", CONFIG.socialHeader.eyebrow);
  setText("socialTitle", CONFIG.socialHeader.title);

  const grid = document.getElementById("socialGrid");
  grid.innerHTML = "";

  Object.values(CONFIG.social).forEach(network => {
    const hasLink = network.enabled && network.url;

    const card = document.createElement(hasLink ? "a" : "div");
    card.className = "social-card";

    if (hasLink) {
      card.href = network.url;
      card.target = "_blank";
      card.rel = "noopener noreferrer";
    }

    const statusText = hasLink
      ? (currentLang === "en" ? "Open profile" : "Abrir perfil")
      : (currentLang === "en" ? "Visual for now" : "Visual por ahora");

    card.innerHTML = `
      <div class="social-icon">${network.icon}</div>
      <div>
        <strong>${network.name}</strong>
        <span>${statusText}</span>
      </div>
    `;

    grid.appendChild(card);
  });
}


/* ------------------------------
   Footer
------------------------------ */

function renderFooter() {
  setText("footerTagline", CONFIG.footer.tagline);
}


/* ------------------------------
   Static translations
------------------------------ */

function renderStaticTranslations() {
  document.querySelectorAll("[data-i18n]").forEach(element => {
    const path = element.dataset.i18n.split(".");

    let value = CONFIG.translations;

    path.forEach(part => {
      value = value?.[part];
    });

    if (value) {
      element.textContent = textByLang(value);
    }
  });
}


/* ------------------------------
   Full website render
------------------------------ */

function renderWebsite() {
  document.documentElement.lang = currentLang;

  renderCompany();
  renderSectionVisibility();
  renderNavigation();
  renderHero();
  renderServices();
  renderProjects();
  renderAreas();
  renderQuote();
  renderSocial();
  renderFooter();
  renderStaticTranslations();

  document.getElementById("langToggle").textContent =
    currentLang === "en" ? "ES" : "EN";

  initRevealAnimations();
}


/* ------------------------------
   Language switch
------------------------------ */

document.getElementById("langToggle").addEventListener("click", () => {
  currentLang = currentLang === "en" ? "es" : "en";
  renderWebsite();
});


/* ------------------------------
   Mobile Menu
------------------------------ */

document.getElementById("menuBtn").addEventListener("click", () => {
  document.getElementById("navLinks").classList.toggle("open");
});


/* ------------------------------
   Quote Form behavior
------------------------------ */

document.getElementById("quoteForm").addEventListener("submit", async event => {
  event.preventDefault();

  if (CONFIG.quote.mode === "demo") {
    alert(
      currentLang === "en"
        ? "The form is currently in demo mode."
        : "El formulario está actualmente en modo demo."
    );
    return;
  }

  if (!CONFIG.quote.endpoint) {
    alert(
      currentLang === "en"
        ? "Add your form endpoint in site-config.js first."
        : "Primero agrega el endpoint del formulario en site-config.js."
    );
    return;
  }

  const formData = new FormData(event.currentTarget);

  try {
    const response = await fetch(CONFIG.quote.endpoint, {
      method: "POST",
      body: formData
    });

    if (!response.ok) throw new Error("Submission failed");

    alert(
      currentLang === "en"
        ? "Thank you! Your request was sent."
        : "¡Gracias! Tu solicitud fue enviada."
    );

    event.currentTarget.reset();
  } catch (error) {
    alert(
      currentLang === "en"
        ? "There was a problem sending the form."
        : "Hubo un problema al enviar el formulario."
    );
  }
});


/* ------------------------------
   Reveal animation
------------------------------ */

let observer;

function initRevealAnimations() {
  if (observer) observer.disconnect();

  observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    { threshold: 0.10 }
  );

  document.querySelectorAll(".reveal").forEach(element => {
    observer.observe(element);
  });
}


/* ------------------------------
   Current year
------------------------------ */

document.getElementById("year").textContent = new Date().getFullYear();


/* ------------------------------
   Start website
------------------------------ */

renderWebsite();
