// src/data/products.ts

// Importar todas las imágenes
import IndexGrid1 from "../assets/images/Perro_vela.jpg";
import IndexGrid2 from "../assets/images/grupo_ositos.jpg";
import IndexGrid3 from "../assets/images/capibara_beige_acostado.jpg";
import IndexGrid4 from "../assets/images/capibara_cafe.jpg";
import IndexGrid5 from "../assets/images/Pack_gatito_1.jpg";
import IndexGrid6 from "../assets/images/Pack_gatito_2.jpg";
import IndexGrid7 from "../assets/images/gatito_martina_front.webp";
import fantasmasChiwiImg from "../assets/images/fantasma_chiwi.jpg";

//Fotos Productos
//Cocker Negro
import CockerBFront from "../assets/images/perrito_cocker_negro_frente.webp";
import CockerBSide from "../assets/images/perrito_cocker_negro_lado.webp";
import CockerBBack from "../assets/images/perrito_cocker_negro_atras.webp";
//Cocker Beige
import CockerBeiFront from "../assets/images/perrito_cocker_beige_frente.webp";
import CockerBeiSide from "../assets/images/perrito_cocker_beige_lado.webp";
import CockerBeiBack from "../assets/images/perrito_cocker_beige_atras.webp";
//capíbara Mood Relax
import CapibaraAcostadoFront from "../assets/images/capibara_acostado_beige_front.webp";
import CapibaraAcostadoLeft from "../assets/images/capibara_acostado_beige_left_side.webp";
import CapibaraAcostadoRight from "../assets/images/capibara_acostado_beige_right_side.webp";
//capíbara Cute
import CapibaraCuteLeft from "../assets/images/capibara_cute_miel_left.webp";
import CapibaraCuteRight from "../assets/images/capibara_cute_miel_rigth.webp";
import CapibaraCuteNarutalFront from "../assets/images/capibara_cute_natural_front.webp";
import CapibaraCuteNarutalRight from "../assets/images/capibara_cute_natural_right.webp";
import CapibaraCuteNarutalLeft from "../assets/images/capibara_cute_natural_left.webp";
//Gatitos
import gatitoMartinaLeft from "../assets/images/gatito_martina_left.webp";
import gatitoMartinaBack from "../assets/images/gatito_martina_back.webp";
import gatitoManchasFront from "../assets/images/gatito_manchas_front.webp";
import gatitoManchasLeft from "../assets/images/gatito_manchas_left.webp";
import gatitoManchasBack from "../assets/images/gatito_manchas_back.webp";
import gatitoManchasRigth from "../assets/images/gatito_manchas_right.webp";
import gatitoMakoFront from "../assets/images/gatito_mako_front.webp";
import gatitoMakoRigth from "../assets/images/gatito_mako_right.webp";
import gatitoGordaLeft from "../assets/images/gatito_gorda_left.webp";
//Temporada octubre
import fantasmaGatito from "../assets/images/gatito_ghost_orange_back.webp";
import fantasmaPerrito from "../assets/images/perrito_ghost_purple_back.webp";
//import duoFantasma from "../assets/images/duo_halloween.webp";
import fantasmaGatitoShinny from "../assets/images/gatito_fantasma_brillante.webp";
import fantasmaGatitoLeft from "../assets/images/gatito_fantasma_left.webp";
import fantasmaGatitoFront from "../assets/images/gatito_fantasma_front.webp";
import fantasmaPerritoShinny from "../assets/images/perrito_fantasma_brillante.webp";
import fantasmaPerritoLeft from "../assets/images/perrito_fantasma_left.webp";
import fantasmaPerritoRight from "../assets/images/perrito_fantasma_right.webp";
//Ositos
import ositosTaller from "../assets/images/trio_ositos_taller.webp";
import ositosBackWhite from "../assets/images/grupo_ositos_background_white.webp";


export interface Product {
  id: number;
  slug: string;
  name: string;
  price: number;
  category: ("temporada" | "kawaii" | "mascotas" | "recordatorios")[]; // Array de categorías
  image: ImageMetadata;
  images?: ImageMetadata[]; // Múltiples imágenes para la galería
  alt: string;
  featured: boolean;
  description: string;
  longDescription?: string; // Descripción larga para página individual
  badge?: string;
  features?: string[];
  relatedProducts?: string[]; // Array de slugs de productos relacionados
  size?: string;
  weight?: string;
  elaborationTime?: string;
}

export const products: Product[] = [
  {
    id: 1,
    slug: "gatito-personalizado",
    name: "Gatito Personalizado",
    price: 25000,
    category: ["kawaii","mascotas"],
    image: IndexGrid7,
    images: [IndexGrid7, gatitoMartinaLeft,gatitoMartinaBack,gatitoManchasFront,gatitoManchasLeft,gatitoManchasBack,gatitoManchasRigth,gatitoMakoFront,gatitoMakoRigth,gatitoGordaLeft],
    alt: "Gatito Personalizado - Vela kawaii hecha a mano en Colombia",
    featured: true,
    description:
      "Vela con diseño personalizable de gatito, ideal para amantes de los gatitos",
    longDescription:
      "¿Tienes un gatito especial? Esta vela puede personalizarse con los colores y rasgos de tu felino favorito. Perfecta para amantes de los gatitos que quieren inmortalizar a su compañero peludo en una pieza artesanal única.",
    features: [
      "Personalización de colores según tu gatito",
      "Puedes enviar foto de referencia",
      "Detalles pintados a mano",
      "Expresión kawaii adorable",
      "Incluye tarjeta con nombre del gatito",
      //"Opción de collar o accesorios personalizados",
    ],
    size: "Altura: 6.5cm, Ancho: 4cm",
    //weight: "130g",
    elaborationTime: "2-3 días hábiles (por personalización)",
    relatedProducts: ["perrito-cocker", "capibara-mood-relax"],
  },
  {
    id: 2,
    slug: "perrito-cocker",
    name: "Perrito Cocker",
    price: 14900,
    category: ["kawaii", "mascotas", "recordatorios"], // Ahora puede tener múltiples
    image: IndexGrid1,
    images: [
      CockerBFront,
      CockerBSide,
      CockerBBack,
      CockerBeiFront,
      CockerBeiSide,
      CockerBeiBack,
    ], // Por ahora solo 3, luego agregas más
    alt: "Perrito Cocker - Vela personalizada kawaii hecha a mano en Colombia",
    featured: true,
    description:
      "Adorable vela con diseño de perrito Cocker, perfecta para amantes de estos peluditos",
    longDescription:
      "Esta hermosa vela artesanal captura la ternura de un Cocker Spaniel en todo su esplendor. Cada detalle está pintado a mano con dedicación, desde sus orejitas caídas hasta su expresión dulce. Perfecta para decorar cualquier espacio o regalar a un amante de los peluditos.",
    features: [
      "Cera 100% natural y biodegradable",
      "Pintado y personalizado a imagen te tu peludito o llevalo en color natural",
      "Pintado a mano con pinturas no tóxicas",
      "Ideal para un detalle, recordatorio o para decorar tus espacios",
      "Aromas a tu elección (opcional)",
    ],
    size: "Altura: 8cm, Ancho: 6cm",
    //weight: "120g aproximadamente",
    elaborationTime: "2-3 días hábiles",
    relatedProducts: ["capibara-cafe", "gatito-personalizado"],
  },
  {
    id: 3,
    slug: "fantasma-gatito-halloween",
    name: "Fantasma Gatito Halloween",
    price: 18900,
    category: ["temporada"],
    image: fantasmaGatito,
    images: [fantasmaGatito,fantasmaGatitoShinny,fantasmaGatitoFront,fantasmaGatitoLeft],
    alt: "Fantasma Gatito - Vela Halloween que brilla en la oscuridad",
    featured: true,
    description:
      "Edición especial Halloween: gatito fantasma con pintura fotoluminiscente",
    badge: "Edición Limitada",
    longDescription:
      "Edición limitada para Halloween. Este adorable gatito fantasma cobra vida en la oscuridad gracias a su pintura fotoluminiscente especial. Perfecto para decorar en octubre y crear un ambiente mágico y tierno a la vez.",
    features: [
      "Diseño exclusivo fantasmal",
      "Pintura fotoluminiscente (brilla en la oscuridad)",
      "Edición limitada de octubre",
      "Diseño exclusivo de temporada",
      "Se carga con luz natural o artificial",
      "Color verde fluorescente característico",
    ],
    size: "Altura: 6cm, Ancho: 6cm",
    //weight: "140g",
    elaborationTime: "1 día hábil",
    relatedProducts: ["fantasma-perrito-halloween", "gatito-personalizado"],
  },
  {
    id: 4,
    slug: "fantasma-perrito-halloween",
    name: "Fantasma Perrito Halloween",
    price: 18900,
    category: ["temporada"],
    image: fantasmaPerrito,
    images: [fantasmaPerrito,fantasmaPerritoShinny,fantasmaPerritoRight,fantasmaPerritoLeft],
    alt: "Fantasma Perrito - Vela Halloween que brilla en la oscuridad",
    featured: true,
    description:
      "Edición especial Halloween: perrito fantasma que brilla en la noche",
    badge: "Edición Limitada",
    longDescription:
      "La versión perruna de nuestra colección Halloween. Este tierno perrito fantasma ilumina tus noches de octubre con su brillo fotoluminiscente. Disponible solo durante la temporada de Halloween.",
    features: [
      "Diseño exclusivo fantasmal",
      "Pintura fotoluminiscente (brilla en la oscuridad)",
      "Edición limitada de octubre",
      "Diseño exclusivo de temporada",
      "Se carga con luz natural o artificial",
      "Color verde fluorescente característico",
      "Amigable y no da miedo",
    ],
    size: "Altura: 6.3cm, Ancho: 5cm",
    //weight: "145g",
    elaborationTime: "1 día hábil",
    relatedProducts: ["fantasma-gatito-halloween", "perrito-cocker"],
  },
  {
    id: 5,
    slug: "cajita-recuerdo",
    name: "Cajita Recuerdo",
    price: 34000,
    category: ["recordatorios"],
    image: IndexGrid5,
    images: [IndexGrid5],
    alt: "Cajita Recuerdo - Kit completo con vela personalizada hecha a mano",
    featured: true,
    description:
      "Pack completo con vela personalizada y empaque especial para ocasiones únicas",
    longDescription:
      "Nuestro pack más completo para celebraciones especiales. Incluye una vela personalizada, caja de presentación decorada, tarjeta personalizable y detalles adicionales. Ideal para baby showers, cumpleaños, bautizos o cualquier ocasión que quieras hacer memorable.",
    features: [
      "Vela personalizada según tu preferencia",
      "Caja decorativa de presentación",
      "Tarjeta personalizable incluida",
      "Lazo y detalles decorativos",
      "Opción de agregar nombre o fecha",
      "Empaque listo para regalo",
    ],
    size: "Caja: 15cm x 15cm x 10cm",
    weight: "300g el pack completo",
    elaborationTime: "4-5 días hábiles",
    relatedProducts: ["cajita-recuerdo-premium", "gatito-personalizado"],
  },
  {
    id: 6,
    slug: "capibara-mood-relax",
    name: "Capibara Mood Relax",
    price: 15900,
    category: ["kawaii", "recordatorios"],
    image: CapibaraAcostadoRight,
    images: [
      CapibaraAcostadoRight,
      CapibaraAcostadoFront,
      CapibaraAcostadoLeft,
      IndexGrid3,
    ],
    alt: "Capibara Mood Relax - Vela kawaii artesanal hecha en Colombia",
    featured: true,
    description:
      "Tierna vela de capibara en posición relajada, color beige natural",
    longDescription:
      "Nuestro capibara más relajado te invita a tomarte las cosas con calma. Esta vela captura la esencia tranquila de estos adorables animales en una posición de descanso total. El color beige natural le da un toque minimalista y elegante.",
    features: [
      "Diseño único de capibara en Mood relajado",
      "Elige tu color favorito",
      "Cera premium",
      "Detalles pintados a mano",
      "Ideal para adornar tu habitación, Oficina, o Espacio de estudio",
      "Descuentos por compras en volumen para recordatorios",
    ],
    size: "Largo: 7cm, Alto: 3.8cm",
    //weight: "150g",
    elaborationTime: "2-3 días hábiles",
    relatedProducts: ["capibara-cute", "familia-de-ositos"],
  },
  {
    id: 7,
    slug: "capibara-cute",
    name: "Capibara Cute",
    price: 15900,
    category: ["kawaii", "recordatorios"],
    image: IndexGrid4,
    images: [
      IndexGrid4,
      CapibaraCuteLeft,
      CapibaraCuteRight,
      CapibaraCuteNarutalFront,
      CapibaraCuteNarutalLeft,
      CapibaraCuteNarutalRight,
    ],
    alt: "Capibara Cute - Vela artesanal kawaii hecha a mano en Colombia",
    featured: true,
    description: "Vela capibara en tono café, diseño minimalista y kawaii",
    longDescription:
      "La versión café de nuestro capibara favorito. Con un tono cálido y acogedor, esta vela aporta calidez a cualquier espacio. Su diseño minimalista pero expresivo la convierte en el regalo perfecto para amantes de estos tiernos roedores.",
    features: [
      "Expresión kawaii característica",
      "Elige tu color favorito",
      "Cera premium",
      "Detalles pintados a mano",
      "Ideal para adornar tu habitación, Oficina, o Espacio de estudio",
      "Descuentos por compras en volumen para recordatorios",
    ],
    size: "Altura: 6cm, Ancho: 3.5cm",
    //weight: "140g",
    elaborationTime: "2-3 días hábiles",
    relatedProducts: ["capibara-mood-relax", "perrito-cocker"],
  },
  {
    id: 8,
    slug: "familia-de-ositos",
    name: "Familia de Ositos",
    price: 14900,
    category: ["kawaii"],
    image: ositosBackWhite,
    images: [ositosBackWhite, ositosTaller],
    alt: "Familia de Ositos - Velas decorativas kawaii hechas a mano en Colombia",
    featured: true,
    description:
      "Set de velas con diseño de familia de ositos, ideal para regalar",
    longDescription:
      "Un adorable set de tres ositos que representan el amor familiar. Cada osito está elaborado con cera natural y pintado a mano. Perfectos para decorar una habitación infantil o como regalo para celebrar la unión familiar.",
    features: [
      "Set de 3 ositos",
      "Cera 100% natural",
      "Colores pastel suaves",
      "Pintados a mano individualmente",
    ],
    size: "Altura c/u: 3.5cm, Ancho c/u: 2.5cm",
    //weight: "200g el set completo",
    elaborationTime: "1-2 días hábiles",
    relatedProducts: ["perrito-cocker", "capibara-beige-acostado"],
  },
  {
    id: 9,
    slug: "cajita-recuerdo-premium",
    name: "Cajita Recuerdo Premium",
    price: 29900,
    category: ["recordatorios"],
    image: IndexGrid6,
    images: [IndexGrid6],
    alt: "Cajita Recuerdo Premium - Regalo especial con vela personalizada",
    featured: false,
    description:
      "Versión premium de nuestro pack de recuerdo con detalles exclusivos",
    longDescription:
      "La versión deluxe de nuestro pack de recuerdo. Incluye acabados premium, caja de madera grabada y detalles exclusivos que hacen de este regalo algo verdaderamente especial e inolvidable.",
    features: [
      "Caja de madera con grabado láser",
      "Vela con acabados premium",
      "Tarjeta en papel especial",
      "Detalles decorativos exclusivos",
      "Incluye mensaje personalizado",
      "Certificado de autenticidad",
    ],
    size: "Caja: 18cm x 18cm x 12cm",
    weight: "400g",
    elaborationTime: "5-7 días hábiles",
    relatedProducts: ["cajita-recuerdo", "gatito-personalizado"],
  },
];

// Función helper para obtener producto por slug
export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

// Función helper para obtener productos relacionados
export function getRelatedProducts(product: Product): Product[] {
  if (!product.relatedProducts) return [];
  return products.filter((p) => product.relatedProducts?.includes(p.slug));
}
