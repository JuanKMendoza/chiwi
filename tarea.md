# Tarea: Rediseñar Sección de Recordatorios — Layout 3 Columnas Asimétrico

## Objetivo
Reemplazar la sección de Recordatorios en `src/pages/index.astro` (la `<section>` con fondo verde, ~línea 1876) con un nuevo layout de 3 columnas asimétrico con imágenes superpuestas. Mantener los colores actuales de Chiwi (verdes, `#A9D3B3`). NO usar colores del proyecto de referencia.

---

## Imágenes a usar

Agregar estas importaciones en el frontmatter de `index.astro` (junto a las demás importaciones de imágenes al inicio del archivo):

```typescript
import fotoArtesano from "../assets/images/foto_artesano_chiwi.webp";
import recordatorioMalu from "../assets/images/recordatorio_malu.webp";
import recordatorioDiaMujer from "../assets/images/recordatorio_dia_mujer.webp";
```

Si `Indexrecordatorios` (capibara café) ya no se usa en ningún otro lugar del archivo, eliminar su importación.

---

## Estructura del layout (3 columnas en desktop, 1 en móvil)

```
[sección fondo verde]
  [container: grid 3 cols en desktop]
  │
  ├── [wrapper: columna 1, se alinea al fondo, con margen negativo derecho]
  │     ├── Imagen 1: foto_artesano_chiwi.webp  (landscape)
  │     └── Título H2: chip + "Recordatorios mágicos"
  │
  ├── Imagen 2: recordatorio_malu.webp  (portrait vertical, columna central)
  │
  └── [about-content: columna 3]
        ├── Subtítulo H3
        ├── Párrafo de texto
        ├── Botón WhatsApp
        └── Imagen 3: recordatorio_dia_mujer.webp  (landscape ancho, margen negativo izquierdo)
```

---

## HTML exacto a implementar

Reemplazar todo el contenido interno de la `<section>` de Recordatorios con esto:

```astro
<section class="relative py-20 overflow-hidden bg-white">
  <div class="absolute inset-0 bg-gradient-to-br from-green-50 via-teal-50 to-blue-50 opacity-50"></div>

  <div class="relative w-full max-w-7xl mx-auto px-4">
    <div class="grid grid-cols-1 lg:grid-cols-3 items-start gap-8 lg:gap-12">

      <!-- Columna 1: Imagen artesano + título (se superpone a col 2 en desktop) -->
      <div class="lg:self-end lg:-mr-36 z-10">
        <div class="relative overflow-hidden rounded-2xl rounded-tl-[120px] shadow-xl max-w-max">
          <Image
            src={fotoArtesano}
            alt="Artesana Chiwi creando recordatorios personalizados a mano"
            class="w-full h-full object-cover"
            width={600}
            height={480}
            loading="lazy"
            decoding="async"
            format="webp"
            quality={85}
          />
        </div>
        <div class="mt-5 lg:-mr-20">
          <span class="inline-block bg-green-100 text-green-600 px-4 py-2 rounded-full text-sm font-semibold mb-3">
            Para tus celebraciones especiales
          </span>
          <h2 class="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            <span class="text-[#A9D3B3]">Recordatorios</span> mágicos
          </h2>
        </div>
      </div>

      <!-- Columna 2: Imagen portrait vertical (centro) -->
      <div class="relative overflow-hidden rounded-tr-[100px] rounded-bl-[100px] shadow-2xl">
        <Image
          src={recordatorioMalu}
          alt="Recordatorio personalizado Malu - vela artesanal kawaii hecha a mano"
          class="w-full h-full object-cover"
          width={500}
          height={700}
          loading="lazy"
          decoding="async"
          format="webp"
          quality={85}
        />
      </div>

      <!-- Columna 3: Texto + botón + imagen ancha inferior -->
      <div class="flex flex-col items-start space-y-5">
        <h3 class="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
          Cada recuerdo cuenta una historia única
        </h3>
        <p class="text-lg text-gray-700 leading-relaxed">
          Convierte cada celebración en un recuerdo inolvidable. Nuestras velitas
          personalizadas llenan de luz y magia cumpleaños, baby showers, bodas y
          mucho más.
        </p>
        <a
          href="https://wa.me/573102278592?text=Hola!%20Me%20interesa%20crear%20recordatorios%20personalizados"
          target="_blank"
          rel="noopener noreferrer"
          class="group flex items-center gap-3 bg-[#A9D3B3] text-white font-semibold px-8 py-4 rounded-full shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300"
        >
          <ion-icon name="gift-outline" class="text-xl group-hover:animate-bounce"></ion-icon>
          Crear recuerdos brillantes
          <ion-icon name="arrow-forward-outline" class="text-lg group-hover:translate-x-1 transition-transform"></ion-icon>
        </a>

        <!-- Imagen ancha inferior (se superpone hacia col 2 en desktop) -->
        <div class="relative overflow-hidden rounded-2xl rounded-br-[100px] shadow-xl lg:mt-4 lg:-ml-44 w-full">
          <Image
            src={recordatorioDiaMujer}
            alt="Recordatorio Día de la Mujer - velas artesanales personalizadas"
            class="w-full h-full object-cover"
            width={850}
            height={420}
            loading="lazy"
            decoding="async"
            format="webp"
            quality={85}
          />
        </div>
      </div>

    </div>
  </div>
</section>
```

---

## Notas importantes

- Usar siempre `<Image>` de Astro, nunca `<img>` nativo
- Los márgenes negativos (`lg:-mr-36`, `lg:-ml-44`, `lg:-mr-20`) solo aplican en desktop (prefijo `lg:`) — en móvil el layout es una columna simple sin solapamientos
- Verificar que `<Image>` esté importado al inicio del archivo: `import { Image } from 'astro:assets';`
- Si `Indexrecordatorios` (la imagen de capibara café que se usaba antes) ya no aparece en ningún otro lugar del archivo, eliminar su importación del frontmatter para mantener el código limpio
