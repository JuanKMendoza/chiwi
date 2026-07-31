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
import CockerBPhoto from "../assets/images/perrito_cocker_negro_con_foto.webp";
//Cocker Beige
import CockerBeiFront from "../assets/images/perrito_cocker_beige_frente.webp";
import CockerBeiSide from "../assets/images/perrito_cocker_beige_lado.webp";
import CockerBeiBack from "../assets/images/perrito_cocker_beige_atras.webp";
import CockerBeiPhoto from "../assets/images/perrito_cocker_beige_con_foto.webp";
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
//Pack gatitos
import packGatito from "../assets/images/pack_gatitos_fondo_beige.webp";
import packGatitoModelo1 from "../assets/images/pack_gatitos_modelo_1.webp";
import packGatitoModelo2 from "../assets/images/pack_gatitos_modelo_2.webp";
//Navidad
import christmasProduct1 from "../assets/images/farolito_solo.webp";
import christmasProduct3 from "../assets/images/bolitas_velitas_con_nombres.webp";
// Flores preservadas
import bouquetSurtido from "../assets/images/flores/bouquet_surtido_preservado.webp";
import bouquetSurtidoDetalle from "../assets/images/flores/bouquet_surtido_detalle.webp";
import ramoGypso from "../assets/images/flores/ramo_gypso_preservado.webp";
import ramoGypsoColores from "../assets/images/flores/ramo_gypso_colores.webp";
import ramoStatis from "../assets/images/flores/ramo_statis_lila_amarillo_verde.webp";
import ramoStatisSurtido from "../assets/images/flores/ramo_statis_surtido_colores.webp";
import ramoStatisVertical from "../assets/images/flores/ramo_statis_multicolor_vertical.webp";
import ramoAster from "../assets/images/flores/ramo_aster_preservado.webp";
import ramoAsterSurtido from "../assets/images/flores/ramo_aster_surtido.webp";
import ramoCaspia from "../assets/images/flores/ramo_caspia_preservada.webp";
import ramoCaspiaColores from "../assets/images/flores/ramo_caspia_colores.webp";
import ramoRuscus from "../assets/images/flores/ramo_ruscus_preservado.webp";
import ramoRuscusColores from "../assets/images/flores/ramo_ruscus_rosa_verde.webp";
import ramoEucalipto from "../assets/images/flores/ramo_eucalipto_preservado.webp";
import ramoCecilitas from "../assets/images/flores/ramo_cecilitas_colores.webp";
import ramoCecilitasRosa from "../assets/images/flores/ramo_cecilitas_rosa_verde.webp";
import ramoCecilitasVertical from "../assets/images/flores/ramo_cecilitas_multicolor_vertical.webp";

export interface Product {
  id: number;
  slug: string;
  name: string;
  price: number;
  discountPercent?: number;
  category: ("temporada" | "kawaii" | "mascotas" | "recordatorios" | "flores")[]; // Array de categorías
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
    price: 36000,
    //discountPercent: 0,
    category: ["kawaii", "mascotas"],
    image: IndexGrid7,
    images: [
      IndexGrid7,
      gatitoMartinaLeft,
      gatitoMartinaBack,
      gatitoManchasFront,
      gatitoManchasLeft,
      gatitoManchasBack,
      gatitoManchasRigth,
      gatitoMakoFront,
      gatitoMakoRigth,
      gatitoGordaLeft,
    ],
    alt: "Gatito Personalizado - Vela kawaii hecha a mano en Colombia",
    featured: true,
    description: "Vela con diseño personalizable de gatito, ideal para amantes de los gatitos",
    longDescription:
      "¿Tienes un gatito especial? Esta vela puede personalizarse con los colores y rasgos de tu felino favorito. Perfecta para amantes de los gatitos que quieren inmortalizar a su compañero peludo en una pieza artesanal única.",
    features: [
      "Personalización de colores según tu gatito",
      "Puedes enviar foto de referencia",
      "Detalles pintados a mano",
      "Expresión adorable",
      "Incluye tarjeta con nombre del gatito y foto tipo Polaroid",
      "Aromas a tu elección (opcional)",
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
    name: "Perrito Cocker Personalizado",
    price: 24900,
    category: ["kawaii", "mascotas", "recordatorios"], // Ahora puede tener múltiples
    image: IndexGrid1,
    images: [
      CockerBFront,
      CockerBSide,
      CockerBBack,
      CockerBPhoto,
      CockerBeiFront,
      CockerBeiSide,
      CockerBeiBack,
      CockerBeiPhoto,
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
      "Incluye tarjeta con nombre del gatito y foto tipo Polaroid",
      "Ideal para un detalle, recordatorio o para decorar tus espacios",
      "Aromas a tu elección (opcional)",
    ],
    size: "Altura: 8cm, Ancho: 6cm",
    //weight: "120g aproximadamente",
    elaborationTime: "2-3 días hábiles",
    relatedProducts: ["capibara-cafe", "gatito-personalizado"],
  },
  {
    id: 9,
    slug: "farolitos-navideños",
    name: "Farolitos Navideños",
    price: 16000,
    category: ["temporada"],
    image: christmasProduct1,
    images: [christmasProduct1],
    alt: "Farolitos Navideños- Paquete de Siete Farolitos con diseños unicos",
    featured: true,
    description:
      "Edición especial Navidad: Farolitos trazados con diseños unicos, se pueden personalizar con los nombres te tus personas favoritas.",
    badge: "Edición Limitada",
    longDescription:
      "Perfectos para iluminar tu noche de velitas. Son 7, cada uno trae trazado una imagen y un deseo especial: Amor, Felicidad, Paz, Prosperidad, Esperanza, Unión y gratitud.",
    features: [
      "Diseño exclusivo hecho a mano",
      "Pack con 7 diseños y deseos de Navidad distintos",
      "Material resistente y ecológico",
    ],
    size: "Altura: 17cm, Ancho: 9cm",
    //weight: "140g",
    elaborationTime: "3 días hábiles - Pidelos antes de la noche de velitas!",
    relatedProducts: ["pack-bolitas-navideñas"],
  },
  {
    id: 10,
    slug: "pack-bolitas-navideñas",
    name: "Pre-Venta Pack Bolitas Navideñas",
    price: 25000,
    category: ["temporada"],
    image: christmasProduct3,
    images: [christmasProduct3],
    alt: "Pack Navideño - Bolitas con Velita en forma de Arbol Navideño",
    featured: true,
    description:
      "Este hermoso Pack te sorprendera con una Velita aromatizada en forma de Arbol junto a 4 Bolitas de Navidad Personalizadas.",
    badge: "Edición Limitada",
    longDescription:
      "Este hermoso Pack te sorprendera con una Velita aromatizada en forma de Arbol junto a 4 Bolitas de Navidad transparentes rellenas de pequeñas bolitas blancas y personalizadas con los nombres de tus personas favoritas en ellas.",
    features: [
      "Diseños exclusivo hechos a mano",
      "Personaliza las bolitas con el nombre que desees",
      "Velita en forma de Arbolito con aroma Navideño",
    ],
    size: "Altura: 6cm, Ancho: 6cm",
    //weight: "140g",
    elaborationTime: "Entregas a partir del 20 Noviembre",
    relatedProducts: ["farolitos-navideños"],
  },
  {
    id: 3,
    slug: "fantasma-gatito-halloween",
    name: "Fantasma Gatito Halloween",
    price: 18900,
    category: ["temporada"],
    image: fantasmaGatito,
    images: [fantasmaGatito, fantasmaGatitoShinny, fantasmaGatitoFront, fantasmaGatitoLeft],
    alt: "Fantasma Gatito - Vela Halloween que brilla en la oscuridad",
    featured: true,
    description: "Edición especial Halloween: gatito fantasma con pintura fotoluminiscente",
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
    images: [fantasmaPerrito, fantasmaPerritoShinny, fantasmaPerritoRight, fantasmaPerritoLeft],
    alt: "Fantasma Perrito - Vela Halloween que brilla en la oscuridad",
    featured: true,
    description: "Edición especial Halloween: perrito fantasma que brilla en la noche",
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
    slug: "cajita-recuerdame",
    name: "Cajita Recuerdame",
    price: 32900,
    category: ["recordatorios"],
    image: packGatito,
    images: [packGatito, packGatitoModelo2, packGatitoModelo1],
    alt: "Cajita Recuerdo - Kit completo con vela personalizada hecha a mano",
    featured: true,
    description: "Pack completo con vela personalizada y empaque especial para ocasiones únicas",
    longDescription:
      "Nuestro pack incluye una velita de Gatito personalizada, caja de presentación decorada, tarjetita  y suculentas de cera. Ideal para que hagas un homenaje al peludito que siempre te ha acompañado",
    features: [
      "Vela personalizada según tu preferencia",
      "Caja decorativa de presentación",
      "Tarjeta personalizable incluida y foto de tu peludito tipo Polaroid",
      "Lazo y detalles decorativos",
      "Incluye suculentas de cera",
    ],
    size: "Caja: 15cm x 15cm x 10cm",
    //weight: "300g el pack completo",
    elaborationTime: "1-2 días hábiles",
    relatedProducts: ["gatito-personalizado"],
  },
  {
    id: 6,
    slug: "capibara-mood-relax",
    name: "Capibara Mood Relax",
    price: 15900,
    category: ["kawaii", "recordatorios"],
    image: CapibaraAcostadoRight,
    images: [CapibaraAcostadoRight, CapibaraAcostadoFront, CapibaraAcostadoLeft, IndexGrid3],
    alt: "Capibara Mood Relax - Vela kawaii artesanal hecha en Colombia",
    featured: true,
    description: "Tierna vela de capibara en posición relajada, color beige natural",
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
    description: "Set de velas con diseño de familia de ositos, ideal para regalar",
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
    id: 11,
    slug: "ramo-gypso-preservado",
    name: "Ramo de Gypso Preservado",
    price: 16000,
    category: ["flores"],
    image: ramoGypso,
    images: [ramoGypso, ramoGypsoColores],
    alt: "Ramo de gypso preservado natural para regalar y decorar en Colombia",
    featured: true,
    description:
      "Ramo delicado de gypso preservado, perfecto para detalles romanticos y decoracion suave.",
    longDescription:
      "Un ramillete delicado, luminoso y facil de combinar. El gypso preservado no necesita agua y conserva su encanto por meses, ideal para decorar tu espacio, complementar un regalo o armar un detalle personalizado con flores naturales.",
    badge: "Natural preservada",
    features: [
      "Flor natural preservada",
      "No necesita agua",
      "Dura por meses con cuidados simples",
      "Ideal para regalar o decorar",
      "Puedes combinarla con otras referencias",
    ],
    size: "Ramo pequeno/mediano, tamano variable por tallo",
    elaborationTime: "Disponible segun stock; preparacion 1-2 dias habiles",
    relatedProducts: ["bouquet-surtido-preservado", "ramo-statis-preservado"],
  },
  {
    id: 12,
    slug: "ramo-statis-preservado",
    name: "Ramo de Statis Preservado",
    price: 16000,
    category: ["flores"],
    image: ramoStatis,
    images: [ramoStatis, ramoStatisSurtido, ramoStatisVertical],
    alt: "Ramo de statis preservado en tonos lila amarillo y verde",
    featured: true,
    description: "Flores de statis preservadas con color vibrante para regalos que duran mas.",
    longDescription:
      "El statis preservado suma color, textura y volumen sin perder ese look natural que enamora. Es una opcion preciosa para detalles de cumpleanos, decoracion de escritorio o ramos personalizados con paletas suaves o vibrantes.",
    badge: "Dura por meses",
    features: [
      "Flor natural preservada",
      "Disponible en tonos segun stock",
      "No necesita agua",
      "Perfecta para ramos surtidos",
      "Empaque protegido para envio",
    ],
    size: "Ramo mediano, volumen variable por tallo",
    elaborationTime: "Disponible segun stock; preparacion 1-2 dias habiles",
    relatedProducts: ["ramo-gypso-preservado", "ramo-caspia-preservada"],
  },
  {
    id: 13,
    slug: "ramo-aster-preservado",
    name: "Ramo de Aster Preservado",
    price: 16000,
    category: ["flores"],
    image: ramoAster,
    images: [ramoAster, ramoAsterSurtido],
    alt: "Ramo de aster preservado natural en tonos calidos",
    featured: false,
    description:
      "Aster preservado con textura botanica, ideal para detalles naturales y duraderos.",
    longDescription:
      "El aster preservado aporta un toque organico y silvestre a cualquier rincon. Funciona muy bien solo o combinado con gypso, statis y follajes para crear un ramo lleno de vida que no necesita mantenimiento diario.",
    badge: "Natural preservada",
    features: [
      "Flor natural preservada",
      "Textura botanica y silvestre",
      "No necesita agua",
      "Ideal para combinar en bouquets",
      "Preparado con empaque de regalo",
    ],
    size: "Ramo pequeno/mediano, tamano variable por tallo",
    elaborationTime: "Disponible segun stock; preparacion 1-2 dias habiles",
    relatedProducts: ["bouquet-surtido-preservado", "ramo-ruscus-preservado"],
  },
  {
    id: 14,
    slug: "ramo-caspia-preservada",
    name: "Ramo de Caspia Preservada",
    price: 16000,
    category: ["flores"],
    image: ramoCaspia,
    images: [ramoCaspia, ramoCaspiaColores],
    alt: "Ramo de caspia preservada de colores para regalar",
    featured: false,
    description: "Caspia preservada con volumen ligero para armar ramos llenos de color.",
    longDescription:
      "La caspia preservada es perfecta cuando quieres un detalle colorido, liviano y con mucha presencia visual. Sus ramitas finas crean volumen sin sentirse pesado, ideal para decorar o acompanar una velita especial.",
    badge: "Dura por meses",
    features: [
      "Flor natural preservada",
      "Disponible en colores segun stock",
      "No necesita agua",
      "Aporta volumen a bouquets",
      "Puedes pedir mezcla de tonos",
    ],
    size: "Ramo mediano, volumen variable por tallo",
    elaborationTime: "Disponible segun stock; preparacion 1-2 dias habiles",
    relatedProducts: ["ramo-statis-preservado", "bouquet-surtido-preservado"],
  },
  {
    id: 15,
    slug: "ramo-ruscus-preservado",
    name: "Ramo de Ruscus Preservado",
    price: 16000,
    category: ["flores"],
    image: ramoRuscus,
    images: [ramoRuscus, ramoRuscusColores],
    alt: "Ramo de ruscus preservado natural en tonos verdes y rosados",
    featured: false,
    description: "Follaje de ruscus preservado para dar estructura y color a tus arreglos.",
    longDescription:
      "El ruscus preservado es el follaje ideal para elevar un ramo: da forma, color y una sensacion natural preciosa. Es una opcion versatil para decorar jarrones, complementar flores o crear arreglos duraderos.",
    badge: "Natural preservada",
    features: [
      "Follaje natural preservado",
      "No necesita agua",
      "Perfecto para decorar jarrones",
      "Combina con flores de colores",
      "Empaque protegido para envio",
    ],
    size: "Ramo mediano, tamano variable por tallo",
    elaborationTime: "Disponible segun stock; preparacion 1-2 dias habiles",
    relatedProducts: ["ramo-eucalipto-preservado", "ramo-aster-preservado"],
  },
  {
    id: 16,
    slug: "ramo-eucalipto-preservado",
    name: "Ramo de Eucalipto Preservado",
    price: 16000,
    category: ["flores"],
    image: ramoEucalipto,
    images: [ramoEucalipto],
    alt: "Ramo de eucalipto preservado en tonos verdes y naturales",
    featured: true,
    description: "Eucalipto preservado elegante para decorar espacios con un toque botanico.",
    longDescription:
      "El eucalipto preservado trae calma, textura y una estetica natural muy facil de integrar en cualquier espacio. Es ideal para jarrones, escritorios, mesas auxiliares o como base para un bouquet personalizado.",
    badge: "Dura por meses",
    features: [
      "Follaje natural preservado",
      "No necesita agua",
      "Estetica elegante y botanica",
      "Ideal para decoracion de hogar",
      "Puedes combinarlo con gypso o statis",
    ],
    size: "Ramo mediano/grande, tamano variable por tallo",
    elaborationTime: "Disponible segun stock; preparacion 1-2 dias habiles",
    relatedProducts: ["ramo-ruscus-preservado", "bouquet-surtido-preservado"],
  },
  {
    id: 17,
    slug: "mini-rosas-preservadas",
    name: "Mini Rosas Preservadas",
    price: 16000,
    category: ["flores"],
    image: ramoCecilitas,
    images: [ramoCecilitas, ramoCecilitasRosa, ramoCecilitasVertical],
    alt: "Mini rosas y flores preservadas de colores para regalar",
    featured: true,
    description:
      "Mini flores preservadas llenas de color para detalles romanticos y personalizados.",
    longDescription:
      "Un detalle dulce y colorido para regalar sin que se marchite rapido. Estas mini flores preservadas son perfectas para armar ramilletes pequenos, complementar una velita o crear un detalle lleno de ternura.",
    badge: "Lista para regalar",
    features: [
      "Flores naturales preservadas",
      "No necesitan agua",
      "Colores disponibles segun stock",
      "Ideales para detalles romanticos",
      "Puedes pedir combinacion personalizada",
    ],
    size: "Ramo pequeno/mediano, tamano variable por tallo",
    elaborationTime: "Disponible segun stock; preparacion 1-2 dias habiles",
    relatedProducts: ["ramo-gypso-preservado", "bouquet-surtido-preservado"],
  },
  {
    id: 18,
    slug: "bouquet-surtido-preservado",
    name: "Bouquet Surtido Preservado",
    price: 16000,
    category: ["flores"],
    image: bouquetSurtido,
    images: [bouquetSurtido, bouquetSurtidoDetalle],
    alt: "Bouquet surtido de flores naturales preservadas listo para regalar",
    featured: true,
    description:
      "Bouquet de flores preservadas con mezcla de colores, texturas y empaque especial.",
    longDescription:
      "Un bouquet colorido, alegre y listo para sorprender. Mezclamos flores y follajes preservados segun disponibilidad para crear un arreglo unico que dura por meses y llega preparado para regalar.",
    badge: "Favorito floral",
    features: [
      "Mezcla de flores naturales preservadas",
      "No necesita agua",
      "Paleta de color personalizable segun stock",
      "Empaque especial para regalo",
      "Ideal para cumpleanos, amor, gracias o decoracion",
    ],
    size: "Bouquet mediano, volumen variable segun mezcla",
    elaborationTime: "Disponible segun stock; preparacion 1-2 dias habiles",
    relatedProducts: [
      "ramo-gypso-preservado",
      "ramo-eucalipto-preservado",
      "mini-rosas-preservadas",
    ],
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

export function hasDiscount(product: Product): boolean {
  return typeof product.discountPercent === "number" && product.discountPercent > 0;
}

export function getDiscountedPrice(product: Product): number {
  if (!hasDiscount(product)) return product.price;
  return Math.round(product.price * (1 - (product.discountPercent as number) / 100));
}
