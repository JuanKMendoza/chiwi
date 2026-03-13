# CLAUDE.md — Chiwi Colombia

## Descripcion del Proyecto

**Chiwi Colombia** es un sitio de e-commerce de velas artesanales kawaii personalizadas, hechas a mano en Colombia. El sitio muestra el catálogo de productos, ofrece blog con contenido SEO y dirige a los clientes a comprar via WhatsApp.

- Sitio: https://chiwicolombia.com
- WhatsApp: +57-310-227-8592
- Google Analytics: G-TZ1ZSKVDEL

---

## Stack Tecnologico

| Herramienta      | Version  | Uso                            |
|------------------|----------|--------------------------------|
| Astro            | ^5.x     | Framework principal (SSG)      |
| TailwindCSS      | ^4.x     | Estilos (via plugin Vite)      |
| TypeScript       | incluido | Tipado de datos y componentes  |
| Sharp            | ^0.34    | Procesamiento de imagenes      |
| Swiper           | ^12.x    | Carruseles de imagenes         |
| Ionicons         | 7.1.0    | Iconos (CDN, via script)       |
| pnpm             | -        | Gestor de paquetes             |

### Stack Recomendado para Mejoras Futuras

| Herramienta          | Uso                                      |
|----------------------|------------------------------------------|
| Mercado Pago / Wompi | Pasarela de pagos (mas facil en Colombia)|
| Sanity / Strapi      | CMS headless para gestionar productos    |
| SendGrid / Mailchimp | Email marketing                          |
| Cloudinary           | Gestion y optimizacion de imagenes CDN   |
| Vercel Analytics     | Metricas de performance                  |

---

## Comandos

```bash
pnpm dev       # Servidor de desarrollo en localhost:4321
pnpm build     # Compilar para produccion (genera /dist)
pnpm preview   # Preview del build de produccion
```

---

## Estructura del Proyecto

```
src/
  assets/
    fonts/          # Fuente Quicksand Variable
    images/         # Todas las imagenes del sitio (.webp, .jpg, .png)
  components/
    Navbar.astro         # Navegacion sticky con menu movil y busqueda
    Topbar.astro         # Barra superior informativa
    Footer.astro         # Pie de pagina
    WhatsAppButton.astro # Boton flotante de WhatsApp
    Halloween.astro      # Seccion de temporada Halloween
    SeasonalProductSchema.astro # Schema JSON-LD para productos de temporada
  data/
    products.ts     # Fuente de verdad del catalogo de productos
  layouts/
    Layout.astro    # Layout base: SEO, OG tags, GA4, Schema Organization
  pages/
    index.astro         # Pagina de inicio (⚠️ ver nota de refactorizacion)
    productos/
      index.astro        # Catalogo con filtros por categoria
      [slug].astro       # Pagina individual de producto (ruta dinamica)
    blog/
      index.astro
      velas-aromaticas.astro
      regalos-personalizados.astro
      regalos-kawaii.astro
      velas-creativas.astro
    paquetes.astro
    contacto.astro
    privacidad.astro
  styles/
    global.css      # Estilos globales, fuente Quicksand
```

---

## Gestion de Productos

Los productos se administran **exclusivamente** en `src/data/products.ts`.

### Interface Product

```ts
interface Product {
  id: number;
  slug: string;           // URL: /productos/[slug]
  name: string;
  price: number;          // En pesos colombianos (COP), sin puntos
  category: ("temporada" | "kawaii" | "mascotas" | "recordatorios")[];
  image: ImageMetadata;   // Imagen principal
  images?: ImageMetadata[];  // Galeria de imagenes
  alt: string;            // Texto alternativo SEO
  featured: boolean;      // Muestra badge "Popular"
  description: string;    // Descripcion corta (hover en grilla)
  longDescription?: string;  // Descripcion larga (pagina individual)
  badge?: string;         // Badge especial (ej: "Edicion Limitada")
  features?: string[];    // Lista de caracteristicas
  relatedProducts?: string[];  // Slugs de productos relacionados
  size?: string;          // Dimensiones
  weight?: string;        // Peso (comentado actualmente)
  elaborationTime?: string;   // Tiempo de elaboracion
}
```

### Categorias disponibles
- `temporada` — Productos de temporada (Halloween, Navidad, futuros: San Valentin, Dia de la Madre)
- `kawaii` — Velas con estilo kawaii general
- `mascotas` — Personalizables con foto de mascota
- `recordatorios` — Para eventos especiales o memoriales

### Agregar un producto
1. Importar la imagen en `src/data/products.ts`
2. Agregar objeto al array `products[]` con todos los campos requeridos
3. Las rutas `/productos/[slug]` se generan automaticamente

---

## Convenciones

- **Imagenes:** Formato `.webp` preferido. Nombre descriptivo en snake_case (ej: `gatito_martina_front.webp`). Siempre incluir `alt` descriptivo con keywords. Algunas imagenes aun estan en `.jpg` — convertir a `.webp` cuando se reemplacen.
- **Precios:** En COP enteros, sin formatear (ej: `24900`). El formato lo aplica `.toLocaleString('es-CO')`.
- **Componentes:** En PascalCase, extension `.astro`.
- **Estilos:** TailwindCSS utility-first. Estilos `<style>` dentro del componente solo para animaciones o casos especiales.
- **SEO:** Cada pagina pasa `title` y `description` al `Layout.astro`. El layout genera automaticamente OG tags, Twitter Cards y URL canonica.
- **Schema:** `Layout.astro` incluye schema `Organization`. `SeasonalProductSchema.astro` se usa para productos de temporada.
- **WhatsApp:** Los links de compra usan `https://wa.me/573102278592`. Google Analytics rastrea los clics automaticamente.

---

## Configuracion Astro

```js
// astro.config.mjs
site: "https://chiwicolombia.com"
trailingSlash: "ignore"
build.format: "directory"
```

TailwindCSS se integra via plugin de Vite (`@tailwindcss/vite`), **no** via integracion de Astro.

---

## Estado Actual y Problemas Conocidos

### Problemas tecnicos
- **`index.astro` tiene ~2370 lineas / ~81KB** — demasiado grande, causa tiempos de carga lentos y es dificil de mantener. Debe refactorizarse en componentes separados (ver seccion Refactorizacion).
- **Algunas imagenes estan en `.jpg`** — deben convertirse a `.webp` para mejorar performance (ej: `Perro_vela.jpg`, `grupo_ositos.jpg`, `capibara_beige.jpg`).
- **Busqueda** — El Navbar redirige a `/?search=termino` pero `index.astro` debe manejar ese parametro correctamente.

### Funcionalidades ausentes (por orden de impacto)
| Funcionalidad              | Estado      | Impacto     |
|----------------------------|-------------|-------------|
| Carrito de compras         | Placeholder | 🔥🔥🔥 ALTO |
| Pasarela de pagos          | Ausente     | 🔥🔥🔥 MUY ALTO |
| Testimonios / resenas      | Ausente     | 🔥🔥🔥 ALTO |
| Email marketing / captura  | Ausente     | 🔥🔥🔥 ALTO |
| Redes sociales (links)     | Ausente     | 🔥🔥🔥 ALTO |
| Informacion de envios      | Ausente     | 🔥🔥🔥 ALTO |
| FAQ                        | Ausente     | 🔥🔥 MEDIO  |
| Pagina "Sobre Nosotros"    | Ausente     | 🔥🔥 MEDIO  |
| CMS para productos         | Ausente     | 🔥🔥 MEDIO  |
| Personalizacion interactiva| Ausente     | 🔥🔥🔥 MUY ALTO |
| Guia de regalos            | Ausente     | 🔥🔥 MEDIO  |
| Programa de fidelizacion   | Ausente     | 🔥🔥🔥 ALTO |

---

## Refactorizacion Pendiente de `index.astro`

El archivo `src/pages/index.astro` debe dividirse en estos componentes independientes:

```
src/components/
  HeroSection.astro          # Banner principal con CTA
  TrustSection.astro         # Indicadores de confianza / por que elegirnos
  ProductGrid.astro          # Grilla de productos destacados
  SeasonalSection.astro      # Seccion de temporada (ya existe Halloween.astro)
  TestimonialsSection.astro  # Resenas y testimonios de clientes (nuevo)
  NewsletterSection.astro    # Captura de email / pop-up de descuento (nuevo)
```

**Al refactorizar:** Mantener toda la logica de datos en `products.ts`, no hardcodear productos en los componentes.

---

## Roadmap de Mejoras (segun plan-mejora.md)

### Prioridad CRITICA (implementar primero)
1. **Prueba social** — Agregar seccion de testimonios con fotos de clientes reales
2. **Pasarela de pagos** — Integrar Mercado Pago o Wompi (favoritos en Colombia)
3. **Email marketing** — Pop-up de descuento por suscripcion + Mailchimp
4. **Redes sociales** — Agregar iconos en header/footer; Pixel de Facebook/Instagram
5. **Sistema de envios** — Informacion clara de costos, carriers y tiempos

### Prioridad ALTA (1-2 meses)
6. **Carrito de compras funcional** — Agregar multiples productos, generar mensaje WhatsApp automatico con resumen
7. **Personalización interactiva** — Selector visual de colores/disenos con preview en tiempo real
8. **Ofertas y paquetes** — Combos, descuentos por volumen, cupon de primera compra
9. **Google Shopping** — Feed de productos para anuncios

### Prioridad MEDIA (3-6 meses)
10. **Refactorizacion de `index.astro`** — Dividir en componentes
11. **Blog activo** — Publicacion regular: cuidado de velas, procesos, ideas de regalo
12. **Panel de administracion** — CMS headless (Sanity/Strapi) para gestionar productos sin tocar codigo
13. **Programa de fidelizacion** — Puntos, descuentos recurrentes, club VIP
14. **Performance** — Convertir JPGs restantes a WebP, CDN para assets, lazy loading agresivo

### Quick Wins (1-2 dias, alto impacto)
- Agregar testimonios de clientes actuales (pedir por WhatsApp)
- Agregar iconos de redes sociales en Footer
- Crear FAQ basico con 10 preguntas comunes
- Mejorar los CTAs con textos mas persuasivos

---

## Metricas a Monitorear (GA4 ya configurado)

- Tasa de conversion (visitantes → clics WhatsApp)
- Clic en boton WhatsApp por producto
- Tiempo en pagina de producto
- Tasa de rebote
- Paginas por sesion
- Trafico por canal (organico, directo, social)

---

## Notas Importantes

- El carrito de compras (icono en Navbar) es un **placeholder** — no tiene funcionalidad implementada aun. Los pedidos se gestionan por WhatsApp.
- La busqueda en Navbar redirige a `/?search=termino` — asegurarse de que `index.astro` maneje ese parametro.
- Ionicons se carga desde CDN (unpkg), no instalado como paquete.
- Las imagenes de Halloween estan en el componente `Halloween.astro` separado del catalogo principal.
- `weight` de los productos esta comentado en todos los items — no mostrar en UI por ahora.
- Google Analytics ya esta configurado con GA4 (G-TZ1ZSKVDEL) y rastrea clics de WhatsApp automaticamente.
