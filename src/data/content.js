export const profile = {
  name: 'Federico Gabriel Gomez Caffettaro',
  shortName: 'Federico Caffettaro',
  title: 'Desarrollador Full Stack · Next.js / TypeScript / PostgreSQL (Supabase)',
  location: 'Catamarca, Argentina',
  email: 'federico.gomez.sc@gmail.com',
  phone: '+54 9 383 427-6843',
  phoneHref: 'tel:+5493834276843',
  github: 'https://github.com/Fedecaff',
  linkedin:
    'https://www.linkedin.com/in/federico-gabriel-gomez-caffettaro-109494408',
  photo: '/foto.jpg',
  cvDesign: '/CV-Federico-Caffettaro-2026-diseno.pdf',
  cvSimple: '/CV-Federico-Caffettaro-2026.pdf',
  heroLead:
    'Diseño y mantengo sistemas de gestión web en producción para comercios de alto volumen. Trabajo desde el negocio hacia el código: relevo procesos, rediseño flujos y los convierto en software que se usa todos los días.',
  seeking:
    'Hoy trabajo como freelance y busco sumarme a un equipo de desarrollo.',
}

export const heroAside = {
  kicker: 'Freelance desde ene 2026',
  title: 'Proyectos con clientes',
  items: [
    'Rotisería con 3 sucursales',
    'Somar Frutas y Verduras',
    'Food POS · Comolokeri y MediaMuzzaBar',
    'Fon.corner',
  ],
}

/** Slugs con `public/projects/<slug>/cover.webp`. Vacío = no se pide la imagen. */
export const caseCoverSlugs = []

export const nav = [
  { href: '#casos', label: 'Casos' },
  { href: '#como-trabajo', label: 'Cómo trabajo' },
  { href: '#automatizacion', label: 'IA' },
  { href: '#stack', label: 'Stack' },
  { href: '#sobre-mi', label: 'Sobre mí' },
  { href: '#contacto', label: 'Contacto' },
]

export const cases = [
  {
    slug: 'rotiseria',
    title: 'Rotisería con 3 sucursales',
    subtitle: 'Sistema de gestión integral',
    problem:
      'La dueña y las cajeras operaban caja, delivery, stock y viandas en un negocio con tres sucursales, sin un sistema único que unificara el día a día.',
    did: 'Desarrollé y mantengo el sistema operativo del negocio: caja, delivery, stock por sucursal y operación multi-sucursal. Digitalicé los turnos de caja con arqueo y cierre, las viandas por suscripción y un dashboard de ventas. Modelé la base en PostgreSQL con Row Level Security y RPCs en PL/pgSQL (más de 80 migraciones versionadas) y un agente local de impresión. Hice auditoría de seguridad, rate limiting y análisis de causa raíz de incidentes, con reportes para la dueña.',
    impact:
      'El sistema está en producción y en uso diario por la dueña y las cajeras. La operación de las tres sucursales corre sobre un mismo flujo, con cierre de caja y stock por local.',
    stack: ['Next.js 15', 'TypeScript', 'Supabase', 'Vercel'],
  },
  {
    slug: 'somar',
    title: 'Somar Frutas y Verduras',
    subtitle: 'Sistema mayorista de pedidos',
    problem:
      'El mayorista gestionaba pedidos y cuentas de clientes en Excel: difícil de mantener, fácil de desfasar y poco práctico para armar comandas iguales al remito.',
    did: 'Reemplacé el Excel por un sistema con cuenta corriente, fiado y cuenta semanal por cliente. Implementé ABM de clientes, productos y armadores, pedidos y comandas térmicas de 80 mm iguales al remito. La base es multi-tenant con RLS y funciones SECURITY DEFINER. Próximas fases: stock y pedidos por WhatsApp.',
    impact:
      'Pedidos, cuentas y comandas quedaron en un flujo único, alineado al remito real del negocio, en lugar de una planilla.',
    stack: ['Next.js 15', 'React 19', 'Supabase'],
  },
  {
    slug: 'food-pos',
    title: 'Food POS',
    subtitle: 'Punto de venta multi-tenant · Comolokeri y MediaMuzzaBar',
    problem:
      'Cada local gastronómico necesitaba caja, delivery y cocina con datos aislados, sin duplicar un sistema por comercio.',
    did: 'Evolucioné el sistema de caja de Comolokeri (caja, delivery, cocina en TV, tickets) a una plataforma multi-local con datos aislados por RLS. Incorporé módulos configurables por local (mesas, comandera, turnos de caja), cierres de caja, promos y factura C (AFIP).',
    impact:
      'Una sola plataforma sirve a más de un local, con operación aislada y módulos que se encienden según cada negocio.',
    stack: ['Next.js 15', 'Supabase Realtime'],
  },
  {
    slug: 'fon-corner',
    title: 'Fon.corner',
    subtitle: 'Relevamiento de procesos y sistema interno',
    problem:
      'Un local de reparación de celulares necesitaba pasar de procesos informales a un sistema interno, pero primero había que entender y ordenar cómo trabajaban.',
    did: 'Mi rol fue relevar y organizar la información y los flujos de trabajo del local, y traducirlos a requerimientos y pantallas. El sistema cubre caja, ventas, apertura y cierre de caja y ABM con historial, más una vitrina pública con 3D.',
    impact:
      'Los procesos del local quedaron ordenados y convertidos en un flujo de trabajo digital, listo para operarse desde la app.',
    stack: ['Next.js 15', 'Supabase'],
  },
  {
    slug: 'sihe',
    title: 'SIHE',
    subtitle: 'Sistema Integral Hídrico de Emergencia · tesis',
    problem:
      'Los bomberos de la capital catamarqueña necesitan localizar hidrantes, registrar incidencias y visualizar incendios, con roles claros entre operador y administración.',
    did: 'Desarrollé una app web con mapa de 850 hidrantes geolocalizados de la capital, fichas, incidencias con aprobación, roles y mapa de calor de incendios.',
    impact:
      'Herramienta de tesis alineada a un dominio que conozco de primera mano: recursos hídricos y respuesta a emergencias.',
    stack: ['React 19', 'TypeScript', 'Supabase', 'Leaflet'],
  },
]

export const processSteps = [
  {
    title: 'Relevamiento',
    text: 'Analizo cómo opera cada cliente, mapeo procesos y detecto cuellos de botella antes de escribir código.',
  },
  {
    title: 'Rediseño de flujos',
    text: 'Rediseño el trabajo del negocio para que el software cubra el día a día real, no un flujo teórico.',
  },
  {
    title: 'Desarrollo',
    text: 'Modelo datos, construyo el producto y dejo migraciones versionadas, con foco en seguridad y operación.',
  },
  {
    title: 'Puesta en producción',
    text: 'Me encargo del go-live: deploy, impresión, roles y el corte entre el proceso viejo y el sistema nuevo.',
  },
  {
    title: 'Soporte y mejora continua',
    text: 'Acompaño el uso real: incidentes, causa raíz, ajustes y evolución a partir de lo que pasa en el mostrador.',
  },
]

export const iaPractice = {
  title: 'Agentes de IA, con criterio',
  text: 'Integro agentes de IA al desarrollo de forma estructurada: defino especificaciones y tareas acotadas, reparto el trabajo entre agentes y uso agentes separados para auditar seguridad, detectar bugs y revisar código. La revisión y la validación final son siempre mías.',
}

export const automation = {
  title: 'Automatización con IA',
  text: 'Implemento automatización de flujos con n8n, agentes de IA e integración de LLMs para clientes. En curso: toma de pedidos por WhatsApp con LLM.',
  items: ['n8n', 'Agentes de IA', 'Integración de LLMs', 'WhatsApp Cloud API'],
}

export const stackAreas = [
  {
    title: 'Frontend',
    items: ['React', 'Next.js (App Router)', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'HTML', 'CSS'],
  },
  {
    title: 'Backend / DB',
    items: [
      'Supabase (PostgreSQL, Auth, RLS, PL/pgSQL)',
      'Node.js',
      'Express',
      'Prisma',
      'MySQL',
      'API REST',
    ],
  },
  {
    title: 'Infra / Deploy',
    items: ['Vercel', 'Netlify', 'Railway', 'Migraciones versionadas', 'Impresión térmica'],
  },
  {
    title: 'Automatización / IA',
    items: ['n8n', 'Agentes de IA', 'Integración de LLMs', 'WhatsApp Cloud API', 'Cursor'],
  },
  {
    title: 'Herramientas',
    items: ['Git', 'GitHub', 'Postman', 'VS Code', 'Chart.js', 'Leaflet', 'Java y Python (formación académica)'],
  },
]

export const about = {
  paragraphs: [
    'Soy desarrollador full stack freelance desde enero de 2026. Diseño, desarrollo y mantengo sistemas de gestión web que comercios de Catamarca usan todos los días: una rotisería con tres sucursales, un mayorista de frutas y verduras, y un punto de venta multi-tenant para gastronomía.',
    'Mi enfoque es entender el negocio antes de escribir código: relevo cómo trabaja el cliente, detecto dónde se pierde tiempo y reemplazo planillas y papel por software a medida. Después acompaño la puesta en marcha y el soporte.',
    'En paralelo curso la Tecnicatura en Desarrollo de Software en el Instituto Superior San Martín (3.er año, desde 2024).',
  ],
  firefighter: {
    title: 'Bombero aeroportuario · PFA',
    period: 'Desde marzo de 2019 · Aeropuerto de Catamarca',
    text: 'Soy bombero aeroportuario de la Policía Federal Argentina. Guardias de respuesta a emergencias aeronáuticas: decisiones bajo presión, trabajo en equipo y protocolos. Eso lo traigo al desarrollo: respuesta rápida ante incidentes y responsabilidad sobre sistemas que no pueden fallar en el momento de mayor demanda.',
  },
}

export const seo = {
  title: 'Federico Caffettaro · Desarrollador Full Stack',
  description:
    'Desarrollador Full Stack en Catamarca. Next.js, TypeScript y PostgreSQL (Supabase). Sistemas de gestión en producción para comercios. Hoy trabajo como freelance y busco sumarme a un equipo de desarrollo.',
}
