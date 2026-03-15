# Agentes de Claude Code — Chiwi Colombia

Guia de los agentes especializados disponibles en Claude Code y como usarlos en este proyecto.

---

## Agentes Disponibles

### 1. `general-purpose` — Agente de Proposito General
**Uso:** Investigacion compleja, busqueda de codigo, tareas de multiples pasos.

**Cuando usarlo en Chiwi:**
- Buscar un patron de codigo en multiples archivos cuando no sabes donde esta
- Investigar como integrar Mercado Pago o Wompi con Astro
- Investigar como conectar Mailchimp con un formulario de suscripcion
- Analizar dependencias antes de agregar una nueva libreria
- Buscar todos los lugares donde se deben agregar links a redes sociales

```
Ejemplo: "Encuentra todos los lugares donde se usan links de WhatsApp en el proyecto"
Ejemplo: "Investiga como integrar Mercado Pago en un sitio Astro estatico"
```

---

### 2. `Explore` — Explorador de Codigo
**Uso:** Explorar el codebase rapidamente, buscar archivos por patron, responder preguntas sobre la arquitectura.

**Niveles de profundidad:** `quick`, `medium`, `very thorough`

**Cuando usarlo en Chiwi:**
- Entender como funciona el sistema de rutas dinamicas `[slug].astro`
- Listar todos los componentes y sus dependencias antes de refactorizar
- Encontrar todos los archivos que importan `products.ts`
- Revisar que paginas tienen Schema markup implementado
- Identificar las 14 imagenes `.jpg` que deben convertirse a `.webp`
- Mapear las secciones que quedan inline en `index.astro` (temporada, mascotas)

```
Ejemplo: "Encuentra todos los componentes .astro que usan el Layout base"
Ejemplo: "Como funciona el filtrado de categorias en /productos?"
Ejemplo: "Lista todas las imagenes que no son .webp en src/assets/images/"
```

---

### 3. `Plan` — Arquitecto de Software
**Uso:** Disenar planes de implementacion, identificar archivos criticos, evaluar trade-offs.

**Cuando usarlo en Chiwi:**
- **Carrito de compras:** Planificar como agregar productos al carrito y generar mensaje WhatsApp con resumen del pedido
- **Pasarela de pagos:** Disenar la integracion de Mercado Pago o Wompi con el flujo actual
- **NewsletterSection:** Planificar formulario de captura + integracion Mailchimp con Astro SSG
- **Personalizacion interactiva:** Arquitectura del configurador visual de velas con selector de colores/disenos y preview en tiempo real
- **CMS:** Planificar migracion de `products.ts` a Sanity o Strapi
- **Temporadas:** Disenar componentes reutilizables para nuevas temporadas (San Valentin, Dia de la Madre)
- **Extraccion restante de `index.astro`** — Planificar como extraer las secciones de temporada y mascotas que quedan inline (aun ~1408 lineas)

```
Ejemplo: "Como deberia implementarse el carrito con generacion automatica de mensaje WhatsApp?"
Ejemplo: "Diseña la arquitectura del configurador visual de personalizacion de velas"
Ejemplo: "Planifica como extraer las secciones de temporada inline que quedan en index.astro"
```

---

### 4. `seo` / `seo-audit` — SEO Completo
**Uso:** Auditoria SEO completa del sitio, analisis tecnico, schema, Core Web Vitals.

**Cuando usarlo en Chiwi:**
- Auditar el sitio completo antes de un lanzamiento de temporada
- Verificar que todos los productos tienen schema `Product` correcto
- Revisar que los meta tags esten bien en todas las paginas
- Analizar Core Web Vitals post-refactorizacion (index.astro bajo de ~2370 a 1408 lineas)
- Verificar impacto SEO de los nuevos componentes: `FAQSection`, `TestimonialsSection`

```
Ejemplo: "/seo-audit https://chiwicolombia.com"
```

---

### 5. `seo-schema` — Schema Markup
**Uso:** Detectar, validar y generar datos estructurados Schema.org en formato JSON-LD.

**Cuando usarlo en Chiwi:**
- Generar schema `Product` para cada vela del catalogo (precio en COP)
- Validar el schema `Organization` en `Layout.astro`
- Agregar schema `BreadcrumbList` a las paginas de productos
- **Generar schema `FAQPage`** para el `FAQSection.astro` ya implementado
- Agregar schema `LocalBusiness` para Chiwi Colombia
- Generar schema `Review` / `AggregateRating` cuando los testimonios sean datos reales

```
Ejemplo: "Genera schema FAQPage con las 10 preguntas de FAQSection.astro"
Ejemplo: "Genera schema Product para el Gatito Personalizado con precio en COP"
Ejemplo: "Valida el schema Organization de Layout.astro"
```

---

### 6. `seo-content` — Calidad de Contenido
**Uso:** Evaluar E-E-A-T, legibilidad, profundidad de contenido, deteccion de contenido delgado.

**Cuando usarlo en Chiwi:**
- Revisar los 5 articulos del blog (`/blog/*`) para mejorar su calidad SEO
- Evaluar las descripciones de productos (`longDescription`) para conversion y SEO
- Planificar nuevos articulos de blog: "Como cuidar tus velas artesanales", "Proceso de creacion", "Ideas de regalo"
- Optimizar para SEO local: "velas artesanales Bogota", "velas kawaii Colombia"

```
Ejemplo: "Analiza el contenido del blog /blog/velas-aromaticas.astro para E-E-A-T"
Ejemplo: "Sugiere estructura para articulo 'Historia detras de cada diseno Chiwi'"
```

---

### 7. `seo-images` — Optimizacion de Imagenes
**Uso:** Verificar alt text, tamanos de archivos, formatos, lazy loading, CLS.

**Cuando usarlo en Chiwi:**
- Auditar que todos los `alt` de productos tengan keywords relevantes
- **Identificar y planificar conversion de las 14 imagenes `.jpg` pendientes** a `.webp`
- Revisar que se use `loading="lazy"` en imagenes fuera del viewport
- Detectar imagenes que podrian causar CLS (Cumulative Layout Shift)

```
Ejemplo: "Audita los alt text de todos los productos en products.ts"
Ejemplo: "Encuentra todas las imagenes .jpg en src/assets que deberian ser .webp"
```

---

### 8. `seo-technical` — SEO Tecnico
**Uso:** Crawlability, indexabilidad, seguridad, estructura de URLs, mobile, Core Web Vitals.

**Cuando usarlo en Chiwi:**
- Verificar que el `robots.txt` y `sitemap.xml` estan correctos
- Auditar la estructura de URLs de productos (`/productos/[slug]`)
- **Analizar performance mobile** (critico: 60%+ del trafico llega por WhatsApp desde movil)
- Verificar que la refactorizacion de `index.astro` no rompio el rendimiento
- Verificar que los nuevos componentes (`FAQSection`, `TestimonialsSection`) esten correctamente indexados

---

### 9. `seo-sitemap` — Sitemap
**Uso:** Validar o generar sitemaps XML.

**Cuando usarlo en Chiwi:**
- Generar `sitemap.xml` con todas las rutas del sitio
- Verificar que los productos nuevos queden incluidos
- Actualizar el sitemap despues de agregar paginas nuevas

---

### 10. `seo-page` — Analisis de Pagina Individual
**Uso:** Analisis SEO profundo de una sola pagina.

**Cuando usarlo en Chiwi:**
- Analizar la pagina de inicio (`/`) post-refactorizacion
- Revisar la pagina de un producto especifico antes de publicarlo
- Optimizar una pagina de blog especifica
- **Revisar la nueva `FAQSection`** — verificar que el contenido esta correctamente estructurado para SEO

```
Ejemplo: "/seo-page /productos/gatito-personalizado"
Ejemplo: "/seo-page /blog/velas-aromaticas"
```

---

### 11. `seo-geo` — Optimizacion para IA
**Uso:** Optimizar para AI Overviews, ChatGPT, Perplexity. Generative Engine Optimization.

**Cuando usarlo en Chiwi:**
- Evaluar si Chiwi aparece en busquedas de IA sobre "velas artesanales Colombia"
- Optimizar el contenido del blog para ser citado por modelos de IA
- Verificar accesibilidad de crawlers de IA (GPTBot, ClaudeBot)
- Preparar el sitio para aparecer en respuestas de IA sobre "regalos personalizados kawaii"

---

### 12. `interface-design` — Diseno de Interfaz
**Uso:** Disenar dashboards, paneles, apps y herramientas interactivas.

**Cuando usarlo en Chiwi:**
- **Carrito de compras:** Panel lateral (drawer) con resumen, cantidades y boton "Pedir por WhatsApp"
- **Configurador visual de velas:** Interfaz de personalizacion con selector de colores, texto y preview en tiempo real
- **Panel de administracion:** Dashboard para gestionar productos, pedidos e inventario
- **NewsletterSection:** Diseno del pop-up o seccion de descuento por suscripcion
- **Pagina "Sobre Nosotros":** Layout para historia de la marca con fotos y timeline

```
Ejemplo: "Diseña la UI del carrito lateral (drawer) para Chiwi con boton de WhatsApp"
Ejemplo: "Diseña el pop-up de descuento por suscripcion al newsletter de Chiwi"
```

---

### 13. `claude-code-guide` — Guia de Claude Code
**Uso:** Preguntas sobre caracteristicas de Claude Code, hooks, comandos, MCP servers.

**Cuando usarlo:**
- "Como configuro un hook para formatear codigo automaticamente?"
- "Como uso MCP servers con este proyecto?"
- "Como agrego atajos de teclado personalizados?"

---

## Flujos Recomendados por Tarea

### Agregar un nuevo producto de temporada
1. Editar `products.ts` con el nuevo producto (imagen en `.webp`)
2. `seo-schema` → Generar schema Product para el nuevo item
3. `seo-images` → Verificar alt texts de las nuevas imagenes

### Implementar el carrito de compras (Prioridad ALTA)
1. `Plan` → Disenar la arquitectura: estado, componente Drawer, generacion de mensaje WhatsApp
2. `interface-design` → Disenar la UI del carrito
3. Implementar con Claude Code
4. `seo-technical` → Verificar que no afecta el SEO ni la performance

### Integrar pasarela de pagos (Prioridad CRITICA)
1. `general-purpose` → Investigar integracion Mercado Pago / Wompi con Astro SSG
2. `Plan` → Disenar el flujo completo: producto → carrito → checkout → pago
3. `interface-design` → Disenar la UI del checkout
4. Implementar con Claude Code

### Implementar email marketing / NewsletterSection (Prioridad CRITICA)
1. `general-purpose` → Investigar integracion Mailchimp con Astro SSG (formularios estaticos)
2. `Plan` → Disenar el componente `NewsletterSection.astro`
3. `interface-design` → Disenar el pop-up de descuento por suscripcion
4. Crear el componente y agregarlo a `index.astro`
5. `seo-technical` → Verificar que no afecta Core Web Vitals ni CLS

### Reemplazar testimonios placeholder con reales (Quick Win)
1. Recopilar fotos y comentarios de clientes reales por WhatsApp
2. Agregar imagenes a `src/assets/images/` en formato `.webp`
3. Actualizar el array `testimonials` en `TestimonialsSection.astro`
4. `seo-schema` → Agregar schema `Review` / `AggregateRating`

### Agregar redes sociales (Quick Win — 30 min)
1. Agregar iconos en `Footer.astro` (Ionicons: logo-instagram, logo-tiktok, etc.)
2. `Explore` → Verificar si hay otros lugares donde deban aparecer
3. `seo-technical` → Verificar que los links tienen `rel="noopener noreferrer"`

### Optimizar SEO del sitio
1. `seo-audit` → Auditoria completa
2. `seo-technical` → Problemas tecnicos especificos
3. `seo-images` → Corregir las 14 imagenes `.jpg` y alt texts faltantes
4. `seo-content` → Mejorar calidad del blog (5 articulos existentes)
5. `seo-schema` → Agregar schema FAQPage al `FAQSection.astro` ya implementado

### Crear nueva pagina de blog
1. `seo-content` → Analizar keywords y estructura del articulo
2. `seo-geo` → Optimizar para busquedas de IA
3. Crear el archivo en `src/pages/blog/` (ver ejemplos existentes)
4. `seo-page` → Revision final de la pagina creada

### Continuar refactorizacion de index.astro (1408 lineas restantes)
1. `Explore` → Mapear las secciones que quedan inline (temporada, mascotas, recordatorios)
2. `Plan` → Disenar la extraccion sin romper funcionalidad ni imports
3. Extraer cada seccion en su componente correspondiente
4. `seo-technical` → Verificar que el rendimiento no empeoro

### Implementar pasarela de pagos (largo plazo)
1. `general-purpose` → Investigar integracion Mercado Pago / Wompi con Astro SSG
2. `Plan` → Disenar flujo: producto → carrito → checkout → pago
3. `interface-design` → UI del checkout
4. Implementar y testear
