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
