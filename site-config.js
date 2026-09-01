/*
=================================================================
 MTZ CONCRETE — EASY WEBSITE CONFIGURATION
=================================================================

THIS IS THE MAIN FILE YOU WILL EDIT MOST OF THE TIME.

You normally DO NOT need to touch index.html, styles.css or script.js
for simple changes.

Examples:
- Change phone number -> CONFIG.company.phone
- Add a city -> CONFIG.serviceAreas
- Remove a service -> delete it from CONFIG.services
- Add Facebook later -> CONFIG.social.facebook.url
- Hide a whole section -> CONFIG.sections
- Add a project photo -> CONFIG.projects

Keep quotes and commas exactly like the examples.
=================================================================
*/

const CONFIG = {

  /* =============================================================
     1. COMPANY INFORMATION
     ============================================================= */
  company: {
    shortName: "MTZ",
    name: "MTZ Concrete",

    phoneDisplay: "512-999-2415",
    phoneDial: "+15129992415",

    email: "mtzconcretetexas@gmail.com",

    seoTitle: "MTZ Concrete | Austin, TX",
    seoDescription:
      "Residential and commercial concrete services in Austin, Buda, San Marcos, Round Rock, Manchaca, San Antonio and surrounding Central Texas areas."
  },


  /* =============================================================
     2. SHOW / HIDE ENTIRE SECTIONS

     true  = visible
     false = hidden

     Example:
     social: false
     will hide the entire social media section.
     ============================================================= */
  sections: {
    hero: true,
    services: true,
    projects: true,
    areas: true,
    quote: true,
    social: true,
    footer: true
  },


  /* =============================================================
     3. NAVIGATION
     Add or remove menu links here.
     ============================================================= */
  navigation: [
    { target: "#services", en: "Services", es: "Servicios" },
    { target: "#projects", en: "Projects", es: "Proyectos" },
    { target: "#areas", en: "Service Area", es: "Área de servicio" },
    { target: "#contact", en: "Contact", es: "Contacto" }
  ],


  /* =============================================================
     4. HERO / MAIN BANNER
     ============================================================= */
  hero: {
    eyebrow: {
      en: "AUSTIN AREA CONCRETE CONTRACTOR",
      es: "CONTRATISTA DE CONCRETO EN EL ÁREA DE AUSTIN"
    },

    title: {
      en: "Concrete built to last.",
      es: "Concreto hecho para durar."
    },

    text: {
      en: "Driveways, patios, slabs, foundations and commercial concrete with clean finishes and dependable workmanship.",
      es: "Entradas, patios, losas, cimentaciones y concreto comercial con acabados limpios y trabajo confiable."
    },

    quoteButton: {
      en: "Get a Free Estimate",
      es: "Cotización Gratis"
    },

    trustItems: [
      {
        title: { en: "Residential", es: "Residencial" },
        subtitle: { en: "Concrete work", es: "Trabajos de concreto" }
      },
      {
        title: { en: "Commercial", es: "Comercial" },
        subtitle: { en: "Reliable execution", es: "Ejecución confiable" }
      },
      {
        title: { en: "Central Texas", es: "Centro de Texas" },
        subtitle: { en: "Wide service area", es: "Amplia cobertura" }
      }
    ],

    card: {
      badge: { en: "FREE ESTIMATES", es: "COTIZACIONES GRATIS" },

      title: {
        en: "Have a concrete project?",
        es: "¿Tienes un proyecto de concreto?"
      },

      text: {
        en: "Tell us what you need and send project photos. We’ll help you with the next step.",
        es: "Cuéntanos qué necesitas y envíanos fotos del proyecto. Te ayudamos con el siguiente paso."
      },

      button: {
        en: "Request Estimate",
        es: "Pedir Cotización"
      }
    }
  },


  /* =============================================================
     5. SERVICES

     TO ADD A SERVICE:
     Copy one block and change number/title/description.

     TO REMOVE ONE:
     Delete its full { ... } block.
     ============================================================= */
  servicesHeader: {
    eyebrow: { en: "WHAT WE DO", es: "LO QUE HACEMOS" },

    title: {
      en: "Concrete services for homes and businesses.",
      es: "Servicios de concreto para hogares y negocios."
    }
  },

  services: [
    {
      number: "01",
      title: { en: "Driveways", es: "Entradas" },
      description: {
        en: "New pours, replacements and extensions with a clean, durable finish.",
        es: "Colados nuevos, reemplazos y ampliaciones con acabado limpio y durable."
      }
    },

    {
      number: "02",
      title: { en: "Patios & Walkways", es: "Patios y Banquetas" },
      description: {
        en: "Functional outdoor spaces designed for everyday use and long-term performance.",
        es: "Espacios exteriores funcionales diseñados para el uso diario y larga duración."
      }
    },

    {
      number: "03",
      title: { en: "Slabs & Foundations", es: "Losas y Cimentaciones" },
      description: {
        en: "Concrete slabs and foundation work for residential and light commercial projects.",
        es: "Losas y trabajos de cimentación para proyectos residenciales y comerciales."
      }
    },

    {
      number: "04",
      title: { en: "Commercial Concrete", es: "Concreto Comercial" },
      description: {
        en: "Concrete solutions for commercial spaces, additions and jobsite needs.",
        es: "Soluciones de concreto para espacios comerciales, ampliaciones y necesidades de obra."
      }
    },

    {
      number: "05",
      title: { en: "Decorative Concrete", es: "Concreto Decorativo" },
      description: {
        en: "Finished concrete options that add texture, character and curb appeal.",
        es: "Opciones de acabado que agregan textura, carácter y mejor apariencia."
      }
    },

    {
      number: "06",
      title: { en: "Pool Decks", es: "Áreas de Alberca" },
      description: {
        en: "Clean concrete surfaces built for pool areas and backyard projects.",
        es: "Superficies de concreto limpias para albercas y proyectos de patio."
      }
    }
  ],


  /* =============================================================
     6. PROJECTS / PHOTOS

     image:
       "" = use clean placeholder background
       "assets/images/my-photo.jpg" = use a real photo

     Example:
     image: "assets/images/driveway-01.jpg"
     ============================================================= */
  projectsHeader: {
    eyebrow: { en: "RECENT WORK", es: "TRABAJOS RECIENTES" },

    title: {
      en: "Real projects. Clean work.",
      es: "Proyectos reales. Trabajo limpio."
    },

    text: {
      en: "Real MTZ project photos can be added here at any time.",
      es: "Aquí se pueden agregar fotos reales de proyectos MTZ cuando quieras."
    }
  },

  projects: [
    {
      title: { en: "Driveway", es: "Entrada" },
      image: ""
    },
    {
      title: { en: "Patio", es: "Patio" },
      image: ""
    },
    {
      title: { en: "Commercial", es: "Comercial" },
      image: ""
    },
    {
      title: { en: "Slab", es: "Losa" },
      image: ""
    }
  ],


  /* =============================================================
     7. SERVICE AREA

     ADDING A CITY:
     Add another line, for example:
     "New Braunfels",

     REMOVING A CITY:
     Delete its line.
     ============================================================= */
  areasHeader: {
    eyebrow: { en: "SERVICE AREA", es: "ÁREA DE SERVICIO" },

    title: {
      en: "Serving Austin and surrounding Central Texas communities.",
      es: "Atendemos Austin y comunidades cercanas del Centro de Texas."
    },

    text: {
      en: "MTZ Concrete serves residential and commercial customers across the Austin area and beyond.",
      es: "MTZ Concrete atiende clientes residenciales y comerciales en el área de Austin y más allá."
    }
  },

  serviceAreas: [
    "Austin",
    "Buda",
    "San Marcos",
    "Round Rock",
    "Manchaca",
    "Kyle",
    "Pflugerville",
    "Georgetown",
    "Dripping Springs",
    "San Antonio",
    "Central Texas"
  ],


  /* =============================================================
     8. QUOTE FORM
     ============================================================= */
  quote: {
    eyebrow: { en: "FREE ESTIMATE", es: "COTIZACIÓN GRATIS" },

    title: {
      en: "Tell us about your project.",
      es: "Cuéntanos sobre tu proyecto."
    },

    text: {
      en: "Fill this out and we’ll have the information needed to follow up.",
      es: "Llena este formulario y tendremos la información necesaria para contactarte."
    },

    phoneLabel: {
      en: "Call or text",
      es: "Llama o manda mensaje"
    },

    submitButton: {
      en: "Send Estimate Request",
      es: "Enviar Solicitud"
    },

    /*
      FORM MODE:
      "demo"      = design only
      "formspree" = connect later using endpoint
      "custom"    = connect later to Make/Airtable/API
    */
    mode: "demo",

    endpoint: "",

    projectTypes: [
      { en: "Driveway", es: "Entrada" },
      { en: "Patio / Walkway", es: "Patio / Banqueta" },
      { en: "Slab / Foundation", es: "Losa / Cimentación" },
      { en: "Commercial", es: "Comercial" },
      { en: "Decorative Concrete", es: "Concreto Decorativo" },
      { en: "Pool Deck", es: "Área de Alberca" },
      { en: "Other", es: "Otro" }
    ]
  },


  /* =============================================================
     9. SOCIAL MEDIA

     Right now these can remain visual-only.

     Later:
     1. Paste the real URL.
     2. Set enabled: true.

     Example:
     facebook: {
       enabled: true,
       url: "https://facebook.com/..."
     }
     ============================================================= */
  socialHeader: {
    eyebrow: {
      en: "FOLLOW MTZ CONCRETE",
      es: "SIGUE A MTZ CONCRETE"
    },

    title: {
      en: "See more of our work.",
      es: "Mira más de nuestro trabajo."
    }
  },

  social: {
    facebook: {
      name: "Facebook",
      icon: "f",
      enabled: false,
      url: ""
    },

    whatsapp: {
      name: "WhatsApp",
      icon: "◉",
      enabled: false,
      url: ""
    },

    instagram: {
      name: "Instagram",
      icon: "◎",
      enabled: false,
      url: ""
    },

    tiktok: {
      name: "TikTok",
      icon: "♪",
      enabled: false,
      url: ""
    }
  },


  /* =============================================================
     10. FOOTER
     ============================================================= */
  footer: {
    tagline: {
      en: "Residential & Commercial Concrete • Central Texas",
      es: "Concreto Residencial y Comercial • Centro de Texas"
    }
  },


  /* =============================================================
     11. TRANSLATIONS FOR STATIC FORM LABELS
     ============================================================= */
  translations: {
    form: {
      name: { en: "Name", es: "Nombre" },
      phone: { en: "Phone", es: "Teléfono" },
      city: {
        en: "City / Project Location",
        es: "Ciudad / Ubicación del proyecto"
      },
      projectType: {
        en: "Project Type",
        es: "Tipo de proyecto"
      },
      details: {
        en: "Project Details",
        es: "Detalles del proyecto"
      },
      photos: {
        en: "Project Photos",
        es: "Fotos del proyecto"
      }
    }
  }
};
