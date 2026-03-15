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
    images/         # 69 imagenes del sitio (.webp preferido, algunas .jpg pendientes de conversion)
  components/
    Navbar.astro              # Navegacion sticky con menu movil y busqueda
    Topbar.astro              # Barra superior informativa
    Footer.astro              # Pie de pagina
    WhatsAppButton.astro      # Boton flotante de WhatsApp
    HeroSection.astro         # Banner principal con CTA ✅ extraido de index.astro
    ProductGrid.astro         # Grilla de productos destacados ✅ extraido de index.astro
    TrustSection.astro        # Indicadores de confianza / por que elegirnos ✅ extraido de index.astro
    FAQSection.astro          # Preguntas frecuentes (10 preguntas) ✅ nuevo
    TestimonialsSection.astro # Resenas y testimonios de clientes ✅ nuevo
    Halloween.astro           # Seccion de temporada Halloween
    SeasonalProductSchema.astro # Schema JSON-LD para productos de temporada
  data/
    products.ts     # Fuente de verdad del catalogo — 11 productos activos
  layouts/
    Layout.astro    # Layout base: SEO, OG tags, GA4, Schema Organization
  pages/
    index.astro         # Pagina de inicio — 1408 lineas (reducido desde ~2370)
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

### Archivos de referencia en la raiz
- `CLAUDE.md` — Este archivo. Contexto del proyecto para Claude Code.
- `agent.md` — Guia de agentes especializados disponibles en Claude Code.
- `PROMPTS.md` — Catalogo de prompts listos para ejecutar tareas comunes del proyecto.
- `brandbook.md` — Identidad visual: colores, tipografia, tono de comunicacion de Chiwi.
- `tarea.md` — Ultimo archivo de tarea especifica usado como instruccion puntual.
- `componentes-astro-gratis.md` — Referencia de componentes Astro reutilizables.

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
  weight?: string;        // Peso (comentado actualmente — no mostrar en UI)
  elaborationTime?: string;   // Tiempo de elaboracion
}
```

### Categorias disponibles
- `temporada` — Productos de temporada (Halloween, Navidad, futuros: San Valentin, Dia de la Madre)
- `kawaii` — Velas con estilo kawaii general
- `mascotas` — Personalizables con foto de mascota
- `recordatorios` — Para eventos especiales o memoriales

> Un producto puede pertenecer a multiples categorias. Ej: `["kawaii", "mascotas"]`

### Agregar un producto
1. Importar la imagen en `src/data/products.ts`
2. Agregar objeto al array `products[]` con todos los campos requeridos
3. Las rutas `/productos/[slug]` se generan automaticamente

---

## Convenciones

- **Imagenes:** Formato `.webp` preferido. Nombre descriptivo en snake_case (ej: `gatito_martina_front.webp`). Siempre incluir `alt` descriptivo con keywords. Hay 14 imagenes `.jpg` pendientes de conversion a `.webp`.
- **Precios:** En COP enteros, sin formatear (ej: `24900`). El formato lo aplica `.toLocaleString('es-CO')`.
- **Componentes:** En PascalCase, extension `.astro`.
- **Estilos:** TailwindCSS utility-first. Estilos `<style>` dentro del componente solo para animaciones o casos especiales.
- **SEO:** Cada pagina pasa `title` y `description` al `Layout.astro`. El layout genera automaticamente OG tags, Twitter Cards y URL canonica.
- **Schema:** `Layout.astro` incluye schema `Organization`. `SeasonalProductSchema.astro` se usa para productos de temporada.
- **WhatsApp:** Los links de compra usan `https://wa.me/573102278592`. Google Analytics rastrea los clics automaticamente.
- **Datos:** Nunca hardcodear productos en componentes. Siempre filtrar desde `products.ts`.

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

## Estado Actual del Proyecto

### ✅ Completado recientemente
- **Refactorizacion de `index.astro`** — reducido de ~2370 a 1312 lineas (~45% menos). Componentes extraidos: `HeroSection`, `ProductGrid`, `TrustSection`, `FAQSection`, `TestimonialsSection`, `NewsletterSection`.
- **FAQ implementado** — `FAQSection.astro` con 10 preguntas frecuentes, acordeon sin JS externo.
- **Testimonios implementados** — `TestimonialsSection.astro` con 5 testimonios (placeholders visuales — reemplazar con fotos reales de clientes cuando esten disponibles).
- **Busqueda funcional** — `index.astro` ya maneja el parametro `?search=termino`.
- **NewsletterSection implementado** — `NewsletterSection.astro` con formulario de captura, honeypot anti-bots, validacion de email y tracking Meta Pixel (Lead). ⚠️ El submit solo muestra un `alert()` nativo — no guarda emails en ningun backend. Requiere integracion con Mailchimp, Brevo o similar para ser funcional.
- **Informacion de envios en pagina de producto** — `[slug].astro` tiene acordeon nativo `<details>/<summary>` con precios, tiempos y transportadoras reales (Servientrega, Coordinadora, Interrapidisimo).

### ⚠️ Problemas tecnicos pendientes
- **`index.astro` tiene 1312 lineas** — sigue siendo reducible. Quedan inline: secciones de temporada (Navidad/Halloween), seccion de Mascotas, seccion de Recordatorios.
- **14 imagenes en `.jpg`** — deben convertirse a `.webp`: `Perro_vela.jpg`, `grupo_ositos.jpg`, `capibara_beige.jpg`, `capibara_cafe.jpg`, `capibara_beige_acostado.jpg`, `capibara_cafe_acostado.jpg`, `fantasma_chiwi.jpg`, `velita_mafi.jpg`, `vela_gatito_personalizada_1.jpg`, `vela_gatito_personalizada_2.jpg`, `Pack_gatito_1.jpg`, `Pack_gatito_2.jpg`, `Logo variante horizontal.jpg`, `Logo_png.jpg`.
- **`NewsletterSection.astro` sin backend** — el formulario captura el email pero solo muestra un `alert()` nativo. Requiere integracion con Mailchimp, Brevo, ConvertKit o similar para realmente guardar los correos. Hasta tanto, ningun email se almacena.
- **Testimonios con imagenes placeholder** — `TestimonialsSection.astro` usa fotos de productos. Reemplazar con fotos reales de clientes cuando esten disponibles.

### Funcionalidades ausentes (por orden de impacto)
| Funcionalidad              | Estado                        | Impacto         |
|----------------------------|-------------------------------|-----------------|
| Pasarela de pagos          | Ausente                       | 🔥🔥🔥 MUY ALTO |
| Carrito de compras         | Placeholder (icono sin logica)| 🔥🔥🔥 ALTO     |
| Redes sociales (links)     | Ausente                       | 🔥🔥🔥 ALTO     |
| Email marketing / backend  | Sin backend (alert solamente) | 🔥🔥🔥 ALTO     |
| Programa de fidelizacion   | Ausente                       | 🔥🔥🔥 ALTO     |
| Personalizacion interactiva| Ausente                       | 🔥🔥🔥 MUY ALTO |
| Testimonios reales         | Placeholders (fotos producto) | 🔥🔥🔥 ALTO     |
| Pagina "Sobre Nosotros"    | Ausente                       | 🔥🔥 MEDIO      |
| CMS para productos         | Ausente                       | 🔥🔥 MEDIO      |
| Guia de regalos            | Ausente                       | 🔥🔥 MEDIO      |
| Informacion de envios      | ✅ Implementado               | —               |
| FAQ                        | ✅ Implementado               | —               |

---

## Roadmap de Mejoras

### Prioridad CRITICA (implementar primero)
1. **Testimonios reales** — Reemplazar placeholders de `TestimonialsSection.astro` con fotos y nombres de clientes reales (pedirlos por WhatsApp)
2. **Pasarela de pagos** — Integrar Mercado Pago o Wompi (favoritos en Colombia)
3. **Email marketing backend** — Conectar `NewsletterSection.astro` (ya existe el formulario) a Mailchimp, Brevo o ConvertKit para guardar los correos. Sin esto los emails se pierden.
4. **Redes sociales** — Agregar iconos en `Footer.astro` y `Navbar.astro`; Pixel de Facebook/Instagram

### Prioridad ALTA (1-2 meses)
6. **Carrito de compras funcional** — Agregar multiples productos, generar mensaje WhatsApp automatico con resumen
7. **Personalizacion interactiva** — Selector visual de colores/disenos con preview en tiempo real
8. **Ofertas y paquetes** — Combos, descuentos por volumen, cupon de primera compra
9. **Google Shopping** — Feed de productos para anuncios

### Prioridad MEDIA (3-6 meses)
10. **Continuar refactorizacion de `index.astro`** — Extraer secciones de temporada y mascotas
11. **Crear `NewsletterSection.astro`** — Captura de email con incentivo de descuento
12. **Blog activo** — Publicacion regular: cuidado de velas, procesos, ideas de regalo
13. **Panel de administracion** — CMS headless (Sanity/Strapi) para gestionar productos sin tocar codigo
14. **Programa de fidelizacion** — Puntos, descuentos recurrentes, club VIP
15. **Pagina "Sobre Nosotros"** — Historia de la marca, valores, equipo
16. **Performance** — Convertir 14 JPGs restantes a WebP, CDN para assets

### Quick Wins (1-2 dias, alto impacto)
- Reemplazar fotos placeholder en testimonios con imagenes reales de clientes
- Agregar iconos de redes sociales en Footer
- Conectar `NewsletterSection.astro` a Mailchimp o Brevo (formulario ya existe)
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

- El carrito de compras (icono en Navbar) es un **placeholder** — no tiene funcionalidad implementada. Los pedidos se gestionan por WhatsApp.
- Ionicons se carga desde CDN (unpkg), no instalado como paquete.
- Las imagenes de Halloween estan en el componente `Halloween.astro` separado del catalogo principal.
- `weight` de los productos esta comentado en todos los items — no mostrar en UI por ahora.
- Google Analytics ya esta configurado con GA4 (G-TZ1ZSKVDEL) y rastrea clics de WhatsApp automaticamente.
- Los testimonios actuales en `TestimonialsSection.astro` usan **fotos de productos como placeholder** — reemplazar con fotos de clientes reales cuando esten disponibles.
- `NewsletterSection.astro` existe y esta incluido en `index.astro`, pero **no guarda ningun correo** — el `submit` solo ejecuta un `alert()`. Sin integracion a un backend (Mailchimp/Brevo), el formulario es decorativo.
- Consultar `PROMPTS.md` para tareas comunes listas para ejecutar.
- Consultar `agent.md` para saber que agente especializado usar en cada tarea.
- Consultar `brandbook.md` para colores, tipografia y tono de comunicacion.
