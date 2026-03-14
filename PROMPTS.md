# PROMPTS.md — Chiwi Colombia
> Catálogo de prompts listos para ejecutar con Claude Code.
> Copia el prompt de la sección que necesites, pégalo en Claude Code y ejecútalo.
> Cada prompt está autocontenido y referencia los archivos exactos del proyecto.

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

### Marcar producto como destacado / quitar destacado
```
En `src/data/products.ts`, cambia el campo `featured` del producto "[NOMBRE O SLUG]" a [true | false].
```

### Agregar productos relacionados
```
En `src/data/products.ts`, agrega al producto "[SLUG]" los siguientes slugs en el campo `relatedProducts`:
[slug-1, slug-2, slug-3]
```

---

## 🏗️ REFACTORIZACIÓN

### Extraer HeroSection de index.astro
```
En `src/pages/index.astro`, extrae la sección Hero (desde el primer <section> con clase "relative min-h-[90vh]"
hasta su cierre </section>) y crea el componente `src/components/HeroSection.astro`.
- El componente recibe las props que necesite via Astro.props
- Reemplaza el bloque en index.astro por <HeroSection />
- Agrega el import correspondiente en index.astro
- No hardcodees datos que deberían venir de products.ts
```

### Extraer ProductGrid de index.astro
```
En `src/pages/index.astro`, extrae la grilla de productos destacados y crea `src/components/ProductGrid.astro`.
- El componente debe importar y filtrar productos desde `../data/products.ts` (featured: true)
- Reemplaza el bloque en index.astro por <ProductGrid />
- Agrega el import correspondiente
- Mantén toda la lógica de datos en products.ts, no hardcodees productos
```

### Extraer TrustSection de index.astro
```
Extrae la sección de "Por qué elegirnos" / indicadores de confianza de `src/pages/index.astro`
y crea el componente `src/components/TrustSection.astro`.
- Reemplaza el bloque en index.astro por <TrustSection />
- Agrega el import correspondiente
```

### Extraer NewsletterSection de index.astro
```
Extrae la sección de captura de email / newsletter de `src/pages/index.astro`
y crea el componente `src/components/NewsletterSection.astro`.
- Si no existe la sección, créala con: campo de email, botón de suscripción con color de marca (#F97316),
  texto de incentivo (ej: "Suscríbete y recibe 10% de descuento en tu primera compra")
- Reemplaza o inserta en index.astro como <NewsletterSection />
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

### Actualizar meta description de una página
```
En `src/pages/[ARCHIVO].astro`, actualiza el prop `description` que se pasa al componente <Layout>:
Nueva descripción (máx 160 caracteres): "[NUEVA DESCRIPCIÓN]"
Asegúrate de que incluya la keyword principal y un llamado a la acción.
```

---

## 🎨 COMPONENTES Y UI

### Agregar testimonio a TestimonialsSection
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

### Crear sección FAQ
```
Crea el componente `src/components/FAQSection.astro` con las siguientes 10 preguntas frecuentes de Chiwi Colombia:
1. ¿Cuánto tiempo tarda en llegar mi pedido?
2. ¿Cómo hago mi pedido?
3. ¿Puedo personalizar cualquier vela?
4. ¿Hacen envíos a toda Colombia?
5. ¿Cuál es el costo del envío?
6. ¿Las velas tienen olor?
7. ¿Cuánto dura encendida una vela Chiwi?
8. ¿Puedo pedir una vela con la foto de mi mascota?
9. ¿Aceptan devoluciones?
10. ¿Tienen descuentos para pedidos al por mayor?

Estilo: acordeón expandible (sin JavaScript externo), colores de marca (naranja #F97316, rosa #FF8F8F).
Después agrégala a `src/pages/index.astro` o crea `src/pages/faq.astro` según corresponda.
```

### Agregar badge de temporada a producto
```
En `src/data/products.ts`, agrega el campo `badge: "[TEXTO DEL BADGE]"` al producto con slug "[SLUG]".
Ejemplo de badges: "Edición Limitada", "Nuevo", "Más vendido", "Solo por temporada"
```

---

## 🐛 FIXES Y MANTENIMIENTO

### Convertir imagen JPG a WebP en el código
```
En `src/data/products.ts` o en el componente donde se use, reemplaza la referencia a la imagen
`[nombre.jpg]` por `[nombre.webp]`. La imagen .webp ya está disponible en src/assets/images/.
Verifica que el nombre del archivo WebP sea correcto antes de hacer el cambio.
```

### Arreglar búsqueda en index.astro
```
En `src/pages/index.astro`, implementa el manejo del parámetro de búsqueda:
- Leer `Astro.url.searchParams.get('search')` al inicio del frontmatter
- Si hay un término de búsqueda, filtrar los productos mostrados cuyo `name`, `description`
  o `category` contengan el término (case-insensitive)
- Mostrar un mensaje "Resultados para: [término]" sobre la grilla si hay búsqueda activa
- Si no hay resultados, mostrar "No encontramos productos para '[término]'.
  ¿Hablamos por WhatsApp?" con link a wa.me/573102278592
```

### Verificar que el build no tenga errores
```
Ejecuta `pnpm build` en la raíz del proyecto y reporta:
1. Si hubo errores, muéstralos y propone solución
2. Si fue exitoso, muestra el tamaño del bundle generado
3. Verifica que todas las rutas dinámicas /productos/[slug] se generaron correctamente
```

---

## 📊 ANALYTICS Y TRACKING

### Agregar evento GA4 a un botón
```
En [ARCHIVO.astro], agrega tracking de Google Analytics GA4 (ya configurado con G-TZ1ZSKVDEL)
al botón "[DESCRIPCIÓN DEL BOTÓN]":
- Evento: gtag('event', '[NOMBRE_EVENTO]', { event_category: '[CATEGORÍA]', event_label: '[ETIQUETA]' })
- Dispáralo en el onclick del elemento
- Sigue el patrón de tracking de WhatsApp ya implementado en el proyecto
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

### Agregar sección de envíos en página de producto
```
En `src/pages/productos/[slug].astro`, agrega debajo de los botones de compra una sección
"Información de envío" con:
- Tiempo estimado: 3-7 días hábiles (Bogotá 2-3 días)
- Carriers: Servientrega, Coordinadora, Interrapidísimo
- Costo: desde $8.000 COP (varía según ciudad)
- Empaque: caja protegida con burbuja para garantizar que llegue perfecta
- Estilo: acordeón o tarjeta simple con ícono de camión (Ionicons: car-outline o bicycle-outline)
```
