# Tarea: Transformar Sección de Recordatorios en index.astro

## Objetivo
En `src/pages/index.astro`, transformar la sección de Recordatorios (línea ~1876, el `<section>` con fondo verde) para que muestre una grilla de productos en vez de una sola imagen hardcodeada.

---

## Lógica esperada

- Importar `products` desde `../data/products.ts` (si no está importado ya)
- Filtrar los productos con `category.includes("recordatorios")`
- Mostrar los productos filtrados en un grid de **3 columnas en desktop, 2 en tablet, 1 en móvil**

---

## Estructura de cada card

Cada card debe mostrar:
- **Imagen del producto** — usar el componente `<Image>` de Astro con `width=400`, `height=400`, `format="webp"`, `loading="lazy"`
- **Nombre** — `product.name`
- **Precio** — formateado en COP: `product.price.toLocaleString('es-CO')`
- **Descripción corta** — `product.description`
- **Badge** (si existe `product.badge`) — con degradado naranja-rosa de la marca: `background: linear-gradient(to right, #FF8F8F, #F4B08A)`
- **Botón WhatsApp** — enlace a `https://wa.me/573102278592?text=Hola!%20Me%20interesa%20el%20producto%20[product.name]%20para%20un%20recordatorio` (encodeURIComponent del nombre)
- **Al hacer clic en la card**, navegar a `/productos/[product.slug]`

---

## Header de la sección (MANTENER)

Conservar tal cual:
- Chip verde: "Para tus celebraciones especiales"
- Título H2: `<span class="text-[#A9D3B3]">Recordatorios</span> mágicos`
- Párrafo introductorio actual

**Eliminar:** la imagen lateral del capibara café y los 3 bullets de checklist — reemplazarlos con la grilla de cards.

---

## Estilos (Tailwind + colores brandbook)

- Fondo de sección: mantener el gradiente verde actual (`from-green-50 via-teal-50 to-blue-50`)
- Cards: `bg-white rounded-2xl shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer`
- Precio: color `#F97316` (naranja acción de la marca), `font-bold`
- Botón WhatsApp: `bg-[#A9D3B3] text-white font-semibold px-6 py-3 rounded-full hover:scale-105 transition-all`
- Badge: texto blanco, pequeño, `rounded-full px-3 py-1`, posicionado en la esquina superior de la imagen con `absolute top-3 left-3`

---

## Notas importantes

- No hardcodear productos en el componente — siempre filtrar desde `products.ts`
- Si en el futuro se agrega un nuevo producto con `category: "recordatorios"` en `products.ts`, debe aparecer automáticamente en esta sección sin tocar el HTML
- Respetar la convención de imágenes: usar siempre el componente `<Image>` de Astro, nunca `<img>` nativo
