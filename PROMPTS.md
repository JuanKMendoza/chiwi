# PROMPTS.md — Chiwi Colombia
> Catálogo de prompts listos para ejecutar con Claude Code.
> Copia el prompt de la sección que necesites, pégalo en Claude Code y ejecútalo.
> Cada prompt está autocontenido y referencia los archivos exactos del proyecto.

---

## 🎨 LANDING — GRID DE PRODUCTOS

### Restaurar layout bento en ProductGrid y hacer la selección de productos configurable
```
Modifica `src/components/ProductGrid.astro` para:
  (1) Reemplazar el filtro automático `featured: true` por una lista manual de slugs
  (2) Restaurar el layout bento en desktop donde un producto ocupa el doble de ancho
  (3) NO tocar nada del carrusel móvil (swiper) — dejarlo exactamente como está

════════════════════════════════════════
PASO 1 — Reemplazar el filtro automático por slugs manuales
════════════════════════════════════════
En el frontmatter de ProductGrid.astro, ELIMINA esta línea:
  const featuredProducts = products.filter((p) => p.featured);

Y REEMPLÁZALA por estas dos constantes configurables:

  // ──────────────────────────────────────────────────
  // CONFIGURACIÓN MANUAL DEL GRID — edita aquí
  // Slugs de los productos que aparecen en la landing
  // (el orden en el array = el orden visual en el grid)
  const GRID_SLUGS: string[] = [
    "perrito-cocker",
    "familia-de-ositos",
    "capibara-mood-relax",
    "capibara-cute",
    "cajita-recuerdame",
    "gatito-personalizado",
  ];

  // Slug del producto que ocupará el doble de ancho en desktop (bento)
  // Debe estar incluido en GRID_SLUGS
  const WIDE_SLUG = "familia-de-ositos";
  // ──────────────────────────────────────────────────

  const featuredProducts = GRID_SLUGS
    .map((slug) => products.find((p) => p.slug === slug))
    .filter(Boolean) as (typeof products[number])[];

IMPORTANTE: renombrar la variable interna no es necesario — puede seguir
llamándose `featuredProducts` para no tener que cambiar el resto del template.

════════════════════════════════════════
PASO 2 — Restaurar el layout bento desktop (lg:col-span-2)
════════════════════════════════════════
En el bloque "Grid Desktop" (el div con clase "hidden sm:grid grid-cols-1
sm:grid-cols-2 lg:grid-cols-4 gap-6"), dentro del `.map()`, añade la clase
condicional `lg:col-span-2` al `<article>` cuando el producto es el WIDE_SLUG.

Reemplaza el opening tag del <article> que actualmente es:
  <article
    class="flex flex-col"
    ...
  >

Por:
  <article
    class={`flex flex-col${product.slug === WIDE_SLUG ? " lg:col-span-2" : ""}`}
    itemscope
    itemtype="https://schema.org/Product"
  >

El producto ancho también necesita una imagen más alta para aprovechar el espacio.
En la <Image> del Grid Desktop, añade la clase condicional de altura:
  class={`w-full ${product.slug === WIDE_SLUG ? "h-80 lg:h-96" : "h-64"} object-cover rounded-xl transition-transform group-hover:scale-105`}

════════════════════════════════════════
PASO 3 — Actualizar el Schema JSON-LD al final del componente
════════════════════════════════════════
El bloque <script type="application/ld+json" ...> al final del componente
referencia `featuredProducts` — como el nombre de variable no cambió, este
bloque no necesita modificaciones. Verificar igualmente que no haya errores
de TypeScript por el `.filter(Boolean)` usando el cast `as`.

════════════════════════════════════════
PASO 4 — NO modificar el carrusel móvil
════════════════════════════════════════
El bloque "Carrusel móvil" (div con clase "block sm:hidden" que contiene el
<swiper-container>) ya usa `featuredProducts` y con el cambio del Paso 1
automáticamente mostrará los mismos productos que el grid desktop.
NO cambiar ninguna clase, atributo ni lógica del swiper.

════════════════════════════════════════
PASO 5 — Cómo cambiar los productos del grid en el futuro
════════════════════════════════════════
Para cambiar qué productos aparecen en la landing:
- Edita el array GRID_SLUGS en el frontmatter de ProductGrid.astro
- El orden del array determina el orden visual (de izquierda a derecha, arriba a abajo)
- Para cambiar cuál producto ocupa el doble de ancho, cambia el valor de WIDE_SLUG
- Si quieres que ningún producto sea ancho, deja WIDE_SLUG = "" (string vacío)
- Los slugs disponibles están en src/data/products.ts

════════════════════════════════════════
PASO 6 — Verificar
════════════════════════════════════════
Después de los cambios:
- Ejecuta `pnpm build` y confirma que no hay errores
- En desktop (>= 1024px): el producto "familia-de-ositos" debe ocupar 2 columnas
  y los demás 1 columna cada uno, sobre un grid de 4 columnas
- En mobile (< 640px): el swiper debe seguir funcionando igual que antes
- Confirma que los 6 productos del GRID_SLUGS aparecen en el orden esperado
```

---

## 📦 PRODUCTOS

### Agregar un nuevo producto al catálogo
```
Agrega un nuevo producto a `src/data/products.ts` con los siguientes datos:
- Nombre: [NOMBRE DEL PRODUCTO]
- Precio: [PRECIO EN COP, sin puntos, ej: 35000]
- Categoría: [temporada | kawaii | mascotas | recordatorios]
- Slug: [url-del-producto, ej: gatito-luna]
- Descripción corta: [una línea]
- Descripción larga: [2-3 párrafos]
- Badge (opcional): [ej: "Edición Limitada"]
- Featured: [true | false]
- Tiempo de elaboración: [ej: "3-5 días hábiles"]
- Tamaño: [ej: "8 cm de altura"]
- Imagen: [nombre-archivo.webp] — la imagen ya está en src/assets/images/

Usa la interfaz Product definida en CLAUDE.md. No hardcodees nada en los componentes.
```

### Actualizar precio de un producto
```
En `src/data/products.ts`, actualiza el precio del producto con slug "[SLUG]" a [NUEVO PRECIO EN COP].
Recuerda que los precios son enteros sin formato (ej: 29900), el formato lo aplica .toLocaleString('es-CO') en el componente.
```

### Agregar una nueva temporada
```
Agrega una nueva temporada al sistema de visibilidad automática. Lee CLAUDE.md antes de empezar.

DATOS DE LA NUEVA TEMPORADA:
- ID: [id-temporada]           — en kebab-case, ej: "san-valentin"
- Nombre: [Nombre legible]
- Inicio: mes [MM] día [DD]
- Fin: mes [MM] día [DD]
- Productos: [slug-1, slug-2, slug-3]

PASOS A EJECUTAR:

1. En `src/data/seasons.ts`, agrega una nueva entrada al array `seasons[]`:
   {
     id: "[id-temporada]",
     name: "[Nombre legible]",
     startMonth: MM, startDay: DD,
     endMonth: MM, endDay: DD,
     productSlugs: ["slug-1", "slug-2", "slug-3"],
   }

2. Crea `src/components/seasons/SeasonNombre.astro` siguiendo el patrón de
   `SeasonDiaNinos.astro` — importa productos desde products.ts y filtra por slugs.
   Diseño: revisar brandbook.md para la paleta de colores de esta temporada.

3. En `src/pages/index.astro`:
   - Agrega el import: import SeasonNombre from "../components/seasons/SeasonNombre.astro"
   - Agrega el bloque: <div data-season="[id-temporada]" class="season-block" hidden><SeasonNombre /></div>
   - En el script cliente, agrega al array seasons:
     { id: "[id-temporada]", sm: MM, sd: DD, em: MM, ed: DD }

4. Ejecuta `pnpm build` para verificar que no hay errores.

5. Actualiza CLAUDE.md: agrega la nueva temporada en la estructura de componentes/seasons/
   y en el array de seasons.ts, y en "✅ Completado recientemente".
```

---

## ✍️ CONTENIDO Y SEO

### Escribir artículo de blog
```
Crea un nuevo artículo de blog para Chiwi Colombia en `src/pages/blog/[nombre-slug].astro`.
Tema: [TEMA DEL ARTÍCULO]
- Extensión: 800-1200 palabras
- Tono: cálido, kawaii, cercano, dirigido a mujeres colombianas de 18-35 años
- Incluye: H1, H2s con keywords, párrafos cortos, al menos 1 CTA a WhatsApp
- Keywords principales: [KEYWORD 1], [KEYWORD 2]
- Referencia el producto relacionado: [SLUG DEL PRODUCTO] (si aplica)
- Sigue la estructura de los artículos existentes en src/pages/blog/ para mantener consistencia
- El Layout debe recibir title y description optimizados para SEO
```

### Optimizar descripción SEO de un producto
```
En `src/data/products.ts`, mejora el campo `longDescription` del producto "[SLUG]" para SEO:
- Debe tener 150-200 palabras
- Incluir naturalmente las keywords: [KEYWORD 1], [KEYWORD 2]
- Mencionar: hecho a mano en Colombia, personalizado, regalo perfecto
- Tono emocional y descriptivo, no técnico
- Mantener mención del precio y tiempo de elaboración
```

---

## 🎨 COMPONENTES Y UI

### Agregar testimonio real
```
En `src/components/TestimonialsSection.astro`, agrega el siguiente testimonio al array `testimonials`:
- Quote: "[TEXTO DEL TESTIMONIO]"
- Nombre: "[NOMBRE DEL CLIENTE]"
- Ciudad: "[CIUDAD], Colombia"
- Producto comprado: "[NOMBRE DEL PRODUCTO]"
- Imagen: usar una imagen existente de src/assets/images/ como placeholder (la real llega después)

Mantén el estilo visual de los otros testimonios.
```

### Agregar ícono de red social al Footer
```
En `src/components/Footer.astro`, agrega el ícono de [Instagram | TikTok | Facebook | Pinterest] con:
- URL: [URL DE LA RED SOCIAL]
- Ícono: usar Ionicons (ya está cargado vía CDN). El ícono es: [logo-instagram | logo-tiktok | logo-facebook | logo-pinterest]
- Color: usar el color de la marca (#F97316 naranja o #FF8F8F rosa)
- Abrir en nueva pestaña (target="_blank" rel="noopener noreferrer")
Sigue el estilo de los íconos ya existentes en el Footer.
```

---

## 🐛 FIXES Y MANTENIMIENTO

### Convertir imagen JPG a WebP en el código
```
En `src/data/products.ts` o en el componente donde se use, reemplaza la referencia a la imagen
`[nombre.jpg]` por `[nombre.webp]`. La imagen .webp ya está disponible en src/assets/images/.
Verifica que el nombre del archivo WebP sea correcto antes de hacer el cambio.
```

### Verificar que el build no tenga errores
```
Ejecuta `pnpm build` en la raíz del proyecto y reporta:
1. Si hubo errores, muéstralos y propone solución
2. Si fue exitoso, muestra el tamaño del bundle generado
3. Verifica que todas las rutas dinámicas /productos/[slug] se generaron correctamente
```

---

## 🚀 NUEVAS FUNCIONALIDADES

### Crear página "Sobre Nosotros"
```
Crea `src/pages/sobre-nosotros.astro` para Chiwi Colombia con:
- Historia de la marca: nació en Colombia, pasión por lo kawaii y lo artesanal
- Valores: hecho a mano, personalizado, con amor
- Foto del equipo (usar imagen placeholder de src/assets/images/ hasta tener la real)
- CTA final a WhatsApp para pedir
- SEO: title y description optimizados, keywords "velas artesanales colombia", "quienes somos chiwi"
- Agregar el link "Sobre Nosotros" al Navbar.astro en el menú de navegación
```

### Implementar carrito básico con mensaje WhatsApp
```
Implementa un carrito de compras simple en Chiwi Colombia:
- Estado del carrito en localStorage (clave: "chiwi-cart")
- Botón "Agregar al carrito" en cada product card (ya existe el ícono en Navbar)
- Panel lateral (drawer) que muestre los productos agregados con cantidad y precio
- Botón "Pedir por WhatsApp" que genere un mensaje con el resumen del carrito:
  "Hola! Quiero pedir:\n[lista de productos]\nTotal: $[total]"
  y abra wa.me/573102278592?text=[mensaje encoded]
- Usa solo Vanilla JS y Tailwind, sin librerías externas
- Actualiza el contador del ícono del carrito en Navbar.astro
```

### Conectar NewsletterSection a backend de email
```
Conecta el formulario de `src/components/NewsletterSection.astro` a [Mailchimp | Brevo | ConvertKit]
para guardar los correos de suscriptores. Actualmente el submit solo ejecuta un alert().

PASOS:
1. Crear endpoint en `src/pages/api/newsletter.ts` (Astro API route, SSR)
2. El endpoint recibe { email } por POST, valida formato, y llama a la API de [SERVICIO ELEGIDO]
3. Retorna { success: true } o { error: "mensaje" } en JSON
4. En NewsletterSection.astro, reemplaza el alert() por un fetch() al endpoint
5. Mostrar mensaje de éxito/error en la UI sin recargar la página

API KEY del servicio: [AGREGAR API KEY AQUÍ — no commitear al repositorio, usar .env]
Variable de entorno: NEWSLETTER_API_KEY
```
