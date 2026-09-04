/*
=====================================================================
 MTZ CONCRETE — EASY EDIT CONFIG
=====================================================================

THIS is the file you will normally edit.

You can change:
- phone / email
- English / Spanish text
- services
- cities
- social links
- process steps
- show/hide sections
- form settings

You normally DO NOT need to touch index.html.
=====================================================================
*/

const CONFIG = {
  company: {
    brandMain: "MTZ",
    brandSub: "CONCRETE",
    name: "MTZ Concrete",

    phoneDisplay: "512-999-2415",
    phoneDial: "+15129992415",

    email: "mtzconcretetexas@gmail.com",

    seoTitle: "MTZ Concrete | Austin & Central Texas",
    seoDescription:
      "Residential and commercial concrete services across Austin, the I-35 corridor and Central Texas."
  },

  sections: {
    topStrip: true,
    hero: true,
    services: true,
    standard: true,
    projects: true,
    process: true,
    social: true,
    serviceArea: true,
    estimate: true,
    footer: true
  },

  topStrip: {
    en: "RESIDENTIAL & COMMERCIAL · FREE ESTIMATES",
    es: "RESIDENCIAL Y COMERCIAL · COTIZACIONES GRATIS"
  },

  navigation: [
    { target: "#services", en: "Services", es: "Servicios" },
    { target: "#projects", en: "Projects", es: "Proyectos" },
    { target: "#service-area", en: "Service Area", es: "Área de servicio" },
    { target: "#estimate", en: "Contact", es: "Contacto" }
  ],

  hero: {
    eyebrow: {
      en: "CONCRETE WORK FOR CENTRAL TEXAS",
      es: "TRABAJO DE CONCRETO PARA EL CENTRO DE TEXAS"
    },

    title: {
      en: "CONCRETE BUILT TO LAST",
      es: "CONCRETO HECHO PARA DURAR"
    },

    lead: {
      en: "Driveways, patios, slabs and commercial concrete with clear communication from estimate to final cleanup.",
      es: "Entradas, patios, losas y concreto comercial con comunicación clara desde la cotización hasta la limpieza final."
    },

    estimateButton: {
      en: "GET A FREE ESTIMATE",
      es: "COTIZACIÓN GRATIS"
    },

    phoneButton: {
      en: "CALL NOW",
      es: "LLAMAR AHORA"
    },

    trust: [
      { en: "RESIDENTIAL", es: "RESIDENCIAL" },
      { en: "COMMERCIAL", es: "COMERCIAL" },
      { en: "FREE ESTIMATES", es: "COTIZACIONES GRATIS" }
    ]
  },

  servicesHeader: {
    eyebrow: {
      en: "MTZ CONCRETE",
      es: "MTZ CONCRETE"
    },

    title: {
      en: "CONCRETE SERVICES",
      es: "SERVICIOS DE CONCRETO"
    },

    lead: {
      en: "New concrete, replacements and upgrades for homes, contractors and businesses.",
      es: "Concreto nuevo, reemplazos y mejoras para casas, contratistas y negocios."
    }
  },

  /*
    Add/remove services by editing this list.
  */
  services: [
    {
      icon: "house",
      title: { en: "DRIVEWAYS", es: "ENTRADAS" },
      text: {
        en: "New pours, extensions and complete driveway replacement.",
        es: "Colados nuevos, ampliaciones y reemplazo completo de entradas."
      }
    },
    {
      icon: "spark",
      title: { en: "PATIOS", es: "PATIOS" },
      text: {
        en: "Outdoor concrete made for everyday use and entertaining.",
        es: "Concreto exterior para uso diario y reuniones."
      }
    },
    {
      icon: "layers",
      title: { en: "CONCRETE SLABS", es: "LOSAS DE CONCRETO" },
      text: {
        en: "Strong, level slabs for shops, sheds and additions.",
        es: "Losas resistentes y niveladas para talleres, cobertizos y ampliaciones."
      }
    },
    {
      icon: "building",
      title: { en: "FOUNDATIONS", es: "CIMENTACIONES" },
      text: {
        en: "Careful layout and concrete work for lasting support.",
        es: "Trazado cuidadoso y concreto para soporte duradero."
      }
    },
    {
      icon: "ruler",
      title: { en: "SIDEWALKS", es: "BANQUETAS" },
      text: {
        en: "Clean walkways, approaches and accessible paths.",
        es: "Banquetas, accesos y caminos limpios y funcionales."
      }
    },
    {
      icon: "hammer",
      title: { en: "DECORATIVE CONCRETE", es: "CONCRETO DECORATIVO" },
      text: {
        en: "Texture, color and finishes that elevate the space.",
        es: "Textura, color y acabados que elevan el espacio."
      }
    }
  ],

  splitCards: {
    residential: {
      title: {
        en: "RESIDENTIAL CONCRETE",
        es: "CONCRETO RESIDENCIAL"
      },
      text: {
        en: "Driveways, patios, walkways, slabs and concrete improvements planned around your property.",
        es: "Entradas, patios, banquetas, losas y mejoras de concreto planeadas para tu propiedad."
      },
      button: {
        en: "REQUEST AN ESTIMATE",
        es: "PEDIR COTIZACIÓN"
      }
    },

    commercial: {
      title: {
        en: "COMMERCIAL CONCRETE",
        es: "CONCRETO COMERCIAL"
      },
      text: {
        en: "Concrete support for contractors, property owners and growing businesses.",
        es: "Trabajo de concreto para contratistas, propietarios y negocios en crecimiento."
      },
      button: {
        en: "DISCUSS A PROJECT",
        es: "HABLAR DEL PROYECTO"
      }
    }
  },

  standard: {
    eyebrow: {
      en: "THE MTZ STANDARD",
      es: "EL ESTÁNDAR MTZ"
    },

    title: {
      en: "BUILT AROUND RELIABLE SERVICE",
      es: "SERVICIO CONFIABLE DE PRINCIPIO A FIN"
    },

    items: [
      {
        icon: "chat",
        title: { en: "CLEAR COMMUNICATION", es: "COMUNICACIÓN CLARA" },
        text: {
          en: "You know what is happening, what comes next and who to contact.",
          es: "Sabes qué está pasando, qué sigue y con quién comunicarte."
        }
      },
      {
        icon: "calendar",
        title: { en: "RELIABLE SCHEDULING", es: "PROGRAMACIÓN CONFIABLE" },
        text: {
          en: "We set clear expectations and keep the project moving.",
          es: "Establecemos expectativas claras y mantenemos el proyecto avanzando."
        }
      },
      {
        icon: "check",
        title: { en: "CLEAN JOB SITES", es: "ÁREAS DE TRABAJO LIMPIAS" },
        text: {
          en: "We respect the property and leave the work area ready to use.",
          es: "Respetamos la propiedad y dejamos el área lista para usarse."
        }
      }
    ]
  },

  gallery: {
    eyebrow: {
      en: "PROJECT GALLERY",
      es: "GALERÍA DE PROYECTOS"
    },

    title: {
      en: "A LOOK AT OUR WORK",
      es: "UN POCO DE NUESTRO TRABAJO"
    },

    interval: 2500,

    images: [
      "assets/images/gallery/work-01.jpg",
      "assets/images/gallery/work-02.jpg",
      "assets/images/gallery/work-03.jpg",
      "assets/images/gallery/work-04.jpg",
      "assets/images/gallery/work-05.jpg",
      "assets/images/gallery/work-06.jpg",
      "assets/images/gallery/work-07.jpg",
      "assets/images/gallery/work-08.jpg",
      "assets/images/gallery/work-09.jpg",
      "assets/images/gallery/work-10.jpg",
      "assets/images/gallery/work-11.jpg",
      "assets/images/gallery/work-12.jpg",
      "assets/images/gallery/work-13.jpg",
      "assets/images/gallery/work-14.jpg",
      "assets/images/gallery/work-15.jpg",
      "assets/images/gallery/work-16.jpg"
    ]
  },

  process: {
    eyebrow: {
      en: "FROM ESTIMATE TO FINISH",
      es: "DE LA COTIZACIÓN AL FINAL"
    },

    title: {
      en: "A SIMPLE, CLEAR PROCESS",
      es: "UN PROCESO SIMPLE Y CLARO"
    },

    steps: [
      {
        number: "1",
        title: { en: "REQUEST AN ESTIMATE", es: "PIDE UNA COTIZACIÓN" },
        text: {
          en: "Tell us about the project and upload photos if you have them.",
          es: "Cuéntanos sobre el proyecto y sube fotos si las tienes."
        }
      },
      {
        number: "2",
        title: { en: "SITE VISIT", es: "VISITA AL SITIO" },
        text: {
          en: "We review the space, access and measurements in person.",
          es: "Revisamos el espacio, acceso y medidas en persona."
        }
      },
      {
        number: "3",
        title: { en: "CLEAR PROPOSAL", es: "PROPUESTA CLARA" },
        text: {
          en: "You receive the scope, price and next steps in writing.",
          es: "Recibes el alcance, precio y siguientes pasos por escrito."
        }
      },
      {
        number: "4",
        title: { en: "SCHEDULE & BUILD", es: "PROGRAMAR Y CONSTRUIR" },
        text: {
          en: "We schedule the project, complete the work and keep you updated.",
          es: "Programamos el proyecto, hacemos el trabajo y te mantenemos informado."
        }
      }
    ]
  },

  social: {
    eyebrow: {
      en: "FOLLOW MTZ CONCRETE",
      es: "SIGUE A MTZ CONCRETE"
    },

    title: {
      en: "FOLLOW OUR WORK",
      es: "SIGUE NUESTRO TRABAJO"
    },

    lead: {
      en: "Find MTZ Concrete on social media for project updates, recent work and more.",
      es: "Encuentra MTZ Concrete en redes sociales para ver proyectos, trabajos recientes y más."
    },

    /*
      Leave url: "" for visual-only.
      Paste links later when ready.
    */
    networks: [
      { number: "01", icon: "people", name: "FACEBOOK", url: "" },
      { number: "02", icon: "bubble", name: "WHATSAPP", url: "" },
      { number: "03", icon: "camera", name: "INSTAGRAM", url: "" },
      { number: "04", icon: "music", name: "TIKTOK", url: "" }
    ]
  },

  serviceArea: {
    eyebrow: {
      en: "SERVICE AREA",
      es: "ÁREA DE SERVICIO"
    },

    title: {
      en: "SERVING AUSTIN AND THE I-35 CORRIDOR",
      es: "ATENDEMOS AUSTIN Y EL CORREDOR I-35"
    },

    lead: {
      en: "Projects throughout the Austin metro, surrounding communities, New Braunfels and San Antonio.",
      es: "Proyectos en el área metropolitana de Austin, comunidades cercanas, New Braunfels y San Antonio."
    },

    cities: [
      "AUSTIN",
      "BUDA",
      "KYLE",
      "SAN MARCOS",
      "ROUND ROCK",
      "MANCHACA",
      "PFLUGERVILLE",
      "CEDAR PARK",
      "NEW BRAUNFELS",
      "SAN ANTONIO",
      "SURROUNDING AREAS"
    ]
  },

  estimate: {
    eyebrow: {
      en: "FREE ESTIMATE",
      es: "COTIZACIÓN GRATIS"
    },

    title: {
      en: "REQUEST MY FREE ESTIMATE",
      es: "SOLICITAR MI COTIZACIÓN GRATIS"
    },

    lead: {
      en: "Share the basics now. MTZ will follow up to schedule a visit and confirm the details.",
      es: "Comparte los datos básicos. MTZ te contactará para programar una visita y confirmar los detalles."
    },

    benefits: [
      { en: "Fast response", es: "Respuesta rápida" },
      { en: "No obligation", es: "Sin compromiso" },
      { en: "Photo upload available", es: "Puedes subir fotos" }
    ],

    submitButton: {
      en: "SEND ESTIMATE REQUEST",
      es: "ENVIAR SOLICITUD"
    },

    /*
      "demo" = form does not send anywhere yet.
      Later we can connect Make / Airtable / Formspree.
    */
    mode: "demo",
    endpoint: "",

    projectTypes: [
      { en: "Driveway", es: "Entrada" },
      { en: "Patio", es: "Patio" },
      { en: "Concrete Slab", es: "Losa de concreto" },
      { en: "Foundation", es: "Cimentación" },
      { en: "Sidewalk", es: "Banqueta" },
      { en: "Decorative Concrete", es: "Concreto decorativo" },
      { en: "Commercial Concrete", es: "Concreto comercial" },
      { en: "Other", es: "Otro" }
    ]
  },

  formLabels: {
    name: { en: "NAME *", es: "NOMBRE *" },
    phone: { en: "PHONE *", es: "TELÉFONO *" },
    email: { en: "EMAIL (OPTIONAL)", es: "CORREO (OPCIONAL)" },
    zip: { en: "ZIP CODE", es: "CÓDIGO POSTAL" },
    projectType: { en: "PROJECT TYPE", es: "TIPO DE PROYECTO" },
    details: { en: "PROJECT DETAILS", es: "DETALLES DEL PROYECTO" },
    photos: { en: "PROJECT PHOTOS", es: "FOTOS DEL PROYECTO" }
  },

  footer: {
    tagline: {
      en: "Residential & Commercial Concrete · Central Texas",
      es: "Concreto Residencial y Comercial · Centro de Texas"
    }
  }
};
