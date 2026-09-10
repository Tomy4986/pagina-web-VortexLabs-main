// ============================================================
//  CONFIGURACIÓN CENTRAL EDITABLE
//  Cambiá acá los datos de la agencia, contacto, precios y portfolio.
// ============================================================

import demoConstructora from "@/assets/demo-constructora.png";
import demoAutos from "@/assets/demo-autos.png";
import demoPeluqueria from "@/assets/demo-peluqueria.png";
import demoEcommerce from "@/assets/demo-ecommerce.png";
import demoJardineria from "@/assets/demo-jardineria.png";

export const site = {
  nombre: "Vortex Labs",
  // [LOGO] — imagen del isotipo (ver src/components/Logo.tsx).
  logoIniciales: "VX",
  descripcionCorta: "Creamos experiencias web modernas para marcas que quieren crecer.",
  // Número en formato internacional, solo dígitos.
  whatsapp: "5491170174713",
  whatsappVisible: "+54 9 11 7017-4713",
  email: "[EMAIL]",
  instagram: "@vortexlabsx",
  instagramUrl: "https://www.instagram.com/vortexlabsx/",
  facebook: "Vortex Labs",
  anio: 2026,
};

export const mensajeWhatsapp =
  "Hola, estoy interesado/a en crear una página web para mi negocio. Me gustaría recibir más información.";

export function waLink(mensaje: string = mensajeWhatsapp) {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(mensaje)}`;
}

export const nav = [
  { label: "Inicio", to: "/" },
  { label: "Servicios", to: "/servicios" },
  { label: "Planes", to: "/planes" },
  { label: "Portafolio", to: "/portfolio" },
  { label: "Nosotros", to: "/nosotros" },
  { label: "FAQ", to: "/faq" },
  { label: "Contacto", to: "/contacto" },
] as const;

export type Gem = "emerald" | "amber" | "violet" | "cyan" | "blue" | "rose";

export const servicios: {
  icono: string;
  titulo: string;
  texto: string;
  gem: Gem;
}[] = [
  {
    icono: "◈",
    titulo: "Desarrollo de páginas web",
    texto: "Páginas web modernas, rápidas y adaptadas a la identidad de cada negocio.",
    gem: "emerald",
  },
  {
    icono: "◍",
    titulo: "Dominio profesional",
    texto: "Te ayudamos a conseguir y configurar tu dominio personalizado.",
    gem: "amber",
  },
  {
    icono: "✉",
    titulo: "Email profesional",
    texto:
      "Configuramos correos profesionales para que tu negocio se comunique con una dirección personalizada. Zoho como opción.",
    gem: "violet",
  },
  {
    icono: "✦",
    titulo: "Chat con inteligencia artificial",
    texto:
      "Agregamos asistentes con IA capaces de responder preguntas frecuentes y ayudar a tus clientes. Tilegra como tecnología utilizada.",
    gem: "cyan",
  },
  {
    icono: "✆",
    titulo: "Integración con WhatsApp",
    texto: "Facilitamos que tus visitantes puedan contactarte directamente desde la página.",
    gem: "blue",
  },
  {
    icono: "⌗",
    titulo: "Formularios de contacto",
    texto: "Recibí consultas de clientes directamente desde tu sitio.",
    gem: "rose",
  },
  {
    icono: "▤",
    titulo: "Diseño responsive",
    texto: "La página se adapta correctamente a celulares, tablets y computadoras.",
    gem: "emerald",
  },
  {
    icono: "⚙",
    titulo: "Mantenimiento",
    texto: "Nos encargamos de realizar cambios, actualizaciones y mejoras cuando las necesites.",
    gem: "violet",
  },
];

export const planes = [
  {
    nombre: "Landing Page",
    precio: "$180.000",
    precioUSD: "USD 120",
    destacado: false,
    items: [
      "Sitio de 1 página",
      "Diseño responsive",
      "Propuesta de valor",
      "Sección de servicios",
      "Formulario de contacto",
      "Botón flotante de WhatsApp",
      "Código optimizado",
    ],
  },
  {
    nombre: "Sitio Institucional",
    precio: "$380.000",
    precioUSD: "USD 254",
    destacado: true,
    items: [
      "Hasta 5 páginas",
      "Inicio, Nosotros, Servicios/Catálogo y Contacto",
      "Chatbot con IA entrenado con los datos de tu empresa",
      "Diseño responsive",
      "Formulario de contacto",
      "Botón flotante de WhatsApp",
    ],
  },
  {
    nombre: "Sitio Completo / Catálogo",
    precio: "$580.000",
    precioUSD: "USD 387",
    destacado: false,
    items: [
      "Más de 6 páginas",
      "Catálogo dinámico con filtros avanzados (autos, propiedades, productos)",
      "Blog / sección de recursos",
      "Integraciones múltiples",
      "Diseño responsive",
      "Formulario de contacto",
    ],
  },
];

export const opcionesEmpaquetado = [
  {
    nombre: "Opción A — Web + Configuración Profesional",
    precio: "+$103.600",
    precioUSD: "+USD 100",
    recomendado: false,
    items: [
      "Sitio web base",
      "Google Search Console",
      "Google Analytics 4",
      "Optimización SEO On-Page",
      "Google Business Profile",
      "Indexación manual del dominio",
    ],
  },
  {
    nombre: 'Opción B — Servicio "Llave en Mano"',
    precio: "+$253.600",
    precioUSD: "+USD 250",
    recomendado: true,
    items: [
      "Todo lo de la Opción A",
      "Registro y gestión de dominio propio",
      "Cuentas de correo profesional (Zoho Mail)",
      "Infraestructura de hosting global (Cloudflare)",
    ],
  },
];

export const mantenimiento = {
  titulo: "Soporte & Mantenimiento",
  precioAnual: "$240.000 / año",
  precioAnualUSD: "USD 240 / año",
  precioMensual: "$25.000 / mes",
  precioMensualUSD: "USD 25 / mes",
  items: [
    "Renovación de dominio",
    "Cambios menores de texto o imágenes (hasta 1 hora/mes)",
    "Monitoreo de disponibilidad",
    "Gestión de registros DNS",
    "Mantenimiento de cuentas profesionales",
  ],
};

export const b2b = {
  titulo: "Tarifa especial para alianzas B2B",
  texto:
    "Para diseñadores gráficos y community managers: desarrollo en marca blanca a tarifa mayorista de $180.000 – $200.000 ARS (USD 180 – USD 200) por proyecto institucional. El partner presupuesta al cliente final y conserva la diferencia como margen directo.",
};

export const resumenPaquetes = [
  { servicio: "Landing Page", base: "$180.000", setup: "$283.600", llaveEnMano: "$433.600" },
  { servicio: "Sitio Institucional", base: "$380.000", setup: "$483.600", llaveEnMano: "$633.600" },
  {
    servicio: "Sitio Completo / Catálogo",
    base: "$580.000",
    setup: "$683.600",
    llaveEnMano: "$833.600",
  },
];

export const categoriasPortfolio = [
  "Todos",
  "Landing pages",
  "Negocios",
  "Tiendas",
  "Servicios",
  "Otros",
] as const;

export const portfolio: {
  nombre: string;
  tipo: string;
  categoria: string;
  descripcion: string;
  imagen: string;
  gem: Gem;
  link?: string;
}[] = [
  {
    nombre: "Constructora — Demo",
    tipo: "Empresa constructora",
    categoria: "Servicios",
    descripcion:
      "Sitio institucional con proyectos, servicios, proceso de trabajo y solicitud de presupuesto.",
    imagen: demoConstructora,
    gem: "emerald",
    link: "https://ingeniero-constructora-moia.tomas-gomezbaiardi.workers.dev",
  },
  {
    nombre: "Peluqueria — Demo",
    tipo: "Peluqueria",
    categoria: "Servicios",
    descripcion:
      "Transformamos tu estilo con cortes, coloración y tratamientos personalizados para resaltar la mejor versión de tu cabello.",
    imagen: demoPeluqueria,
    gem: "emerald",
    link: "https://barberia-demo.tomas-gomezbaiardi.workers.dev",
  },
  {
    nombre: "E-commerce — Demo",
    tipo: "Tienda online",
    categoria: "Tiendas",
    descripcion:
      "Descubre una experiencia de compra rápida y segura con envíos a todo el país y los mejores productos al alcance de un clic.",
    imagen: demoEcommerce,
    gem: "emerald",
    link: "https://e-commerse.tomas-gomezbaiardi.workers.dev",
  },
  {
    nombre: "Agencia de autos — Demo",
    tipo: "Asesoramiento de vehículos",
    categoria: "Negocios",
    descripcion:
      "Sitio con catálogo de vehículos, servicios, preguntas frecuentes y contacto directo.",
    imagen: demoAutos,
    gem: "violet",
    link: "https://agencia-de-autos-demo.tomas-gomezbaiardi.workers.dev",
  },
  {
    nombre: "Jardinería — Demo",
    tipo: "Empresa jardinera",
    categoria: "Landing pages",
    descripcion:
      "Transformamos y cuidamos espacios al aire libre para convertir la naturaleza en un refugio vivo de diseño, serenidad y bienestar..",
    imagen: demoJardineria,
    gem: "emerald",
    link: "https://jardineria.tomas-gomezbaiardi.workers.dev",
  },
];

export const faqs = [
  {
    q: "¿Cuánto tarda en hacerse una página web?",
    a: "Depende del tamaño y las funcionalidades. Una página sencilla suele estar lista en pocos días, y un proyecto más completo puede llevar algunas semanas. Al definir la propuesta te damos un plazo estimado.",
  },
  {
    q: "¿Puedo pedir cambios durante el desarrollo?",
    a: "Sí. Hay una instancia de revisión en la que vemos la página juntos y ajustamos textos, imágenes y detalles de diseño antes de publicarla.",
  },
  {
    q: "¿Tengo que comprar el dominio?",
    a: "Podés comprarlo vos y quedar como titular, o encargarte de la compra con nuestra ayuda. El costo del dominio lo cobra el proveedor, no nosotros.",
  },
  {
    q: "¿Pueden encargarse ustedes del dominio?",
    a: "Sí. Te asesoramos para elegirlo, ayudamos con la compra y lo dejamos configurado y funcionando con tu página.",
  },
  {
    q: "¿Puedo tener un email profesional?",
    a: "Sí. Configuramos correos con tu propio dominio, por ejemplo contacto@tunegocio.com. Zoho es una de las opciones que utilizamos.",
  },
  {
    q: "¿Puedo agregar WhatsApp?",
    a: "Sí. Integramos botones y un botón flotante para que tus clientes te escriban con un solo toque, con un mensaje inicial ya escrito.",
  },
  {
    q: "¿Puedo agregar un chatbot con IA?",
    a: "Sí. Podemos sumar un asistente con inteligencia artificial que responda preguntas frecuentes y oriente a tus clientes. Tilegra es una de las tecnologías que usamos.",
  },
  {
    q: "¿La página funciona en celulares?",
    a: "Siempre. Todas las páginas se diseñan pensando primero en el celular, y también se ven perfectas en tablet y computadora.",
  },
  {
    q: "¿Qué pasa después de publicar la página?",
    a: "Dejamos todo configurado y funcionando: dominio, formularios y WhatsApp. Además te acompañamos en los primeros días para resolver dudas.",
  },
  {
    q: "¿Ofrecen mantenimiento?",
    a: "Sí. Podemos encargarnos de cambios, actualizaciones y mejoras cuando las necesites.",
  },
  {
    q: "¿Puedo contratar solamente la página web?",
    a: "Claro. Podés empezar solo con la página y sumar dominio, email profesional o chat con IA más adelante.",
  },
];

export const beneficios = [
  {
    titulo: "Diseño personalizado",
    texto: "No utilizamos una solución genérica para todos los negocios.",
    gem: "emerald" as Gem,
  },
  {
    titulo: "Pensado para celulares",
    texto: "La mayoría de tus clientes navegará desde su teléfono.",
    gem: "cyan" as Gem,
  },
  {
    titulo: "Contacto fácil",
    texto: "WhatsApp y formularios integrados para facilitar las consultas.",
    gem: "amber" as Gem,
  },
  {
    titulo: "Imagen profesional",
    texto: "Una presencia digital que represente correctamente a tu negocio.",
    gem: "violet" as Gem,
  },
  {
    titulo: "Soluciones completas",
    texto: "Podemos ayudarte con web, dominio, email profesional, IA e integraciones.",
    gem: "blue" as Gem,
  },
  {
    titulo: "Atención personalizada",
    texto: "Trabajamos directamente con cada cliente para entender qué necesita.",
    gem: "rose" as Gem,
  },
];

export const proceso = [
  {
    titulo: "Nos contás tu idea",
    texto: "Conocemos tu negocio, tus objetivos y qué necesitás resolver con la página.",
  },
  {
    titulo: "Definimos la propuesta",
    texto: "Establecemos qué tendrá la página y qué funcionalidades necesita.",
  },
  {
    titulo: "Diseñamos y desarrollamos",
    texto: "Creamos la página siguiendo la identidad de tu negocio.",
  },
  {
    titulo: "Revisamos juntos",
    texto: "Podés pedir cambios y ajustes hasta que quede como querés.",
  },
  {
    titulo: "Publicamos tu página",
    texto: "Configuramos dominio, formularios, WhatsApp y todo lo necesario.",
  },
  {
    titulo: "Te acompañamos",
    texto: "Ofrecemos soporte y mantenimiento después de la publicación.",
  },
];

export const problemas = [
  { texto: "No tenés una página web profesional.", gem: "rose" as Gem },
  {
    texto: "Tus clientes solo pueden encontrarte por Instagram.",
    gem: "amber" as Gem,
  },
  {
    texto: "No mostrás correctamente tus productos o servicios.",
    gem: "violet" as Gem,
  },
  {
    texto: "Los clientes no encuentran fácilmente cómo contactarte.",
    gem: "cyan" as Gem,
  },
  {
    texto: "Tu negocio no transmite todo el profesionalismo que debería.",
    gem: "blue" as Gem,
  },
  {
    texto: "Perdés oportunidades de clientes fuera del horario comercial.",
    gem: "rose" as Gem,
  },
];
