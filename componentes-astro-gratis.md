# Componentes gratis para Astro + Netlify

Fecha de referencia: 14 de marzo de 2026

## Contexto de este proyecto

- El proyecto usa `Astro 5`, `Tailwind CSS 4` y ya tiene `swiper` instalado.
- Hoy no tiene `React`, `Vue` ni `Svelte` instalados.
- En este stack, lo mas seguro para produccion es:
  - componentes `HTML + Tailwind` de copiar/pegar
  - componentes con `JavaScript vanilla` o `Web Components`
  - usar islas de Astro solo cuando realmente haga falta interactividad

## Conclusion corta

Si quieres algo parecido a `21st.dev`, pero gratis y estable para este proyecto, usa este orden:

1. `HyperUI` para secciones, heroes, botones, cards, grids y bloques estaticos.
2. `Preline UI` para componentes mas completos, sobre todo si aceptas algo de JS.
3. `Flowbite` para UI interactiva con `vanilla JS`.
4. `daisyUI` si quieres velocidad de desarrollo y componentes por clases.
5. `Swiper` para carruseles.
6. `Motion One` o animaciones CSS para animaciones pequenas y robustas.

## Lo mejor para Astro puro

### 1. HyperUI

Link: <https://www.hyperui.dev/>

Por que si:

- Es `copy-paste`.
- No te obliga a instalar un framework UI.
- Encaja muy bien con Astro + Tailwind.
- Ideal para `hero`, `CTA`, `feature sections`, `cards`, `buttons`, `footers`, `testimonials`.

Por que es buena opcion para este proyecto:

- Tu sitio ya usa Astro + Tailwind.
- Para bloques estaticos no agrega hidratacion.
- Es de las opciones con menos riesgo de romper algo en Netlify.

Uso recomendado:

- Primera fuente para secciones visuales y bloques de landing.

### 2. Preline UI

Link: <https://preline.co/>
Docs: <https://preline.co/docs/>

Por que si:

- Tiene cientos de componentes y ejemplos gratuitos.
- Soporta HTML y funciona donde Tailwind este presente.
- Tiene carrusel, acordeones, collapse, modales, tabs, etc.

Cuidado:

- Algunos componentes requieren JS de Preline.
- Conviene usarlo solo para piezas concretas, no meterlo en todo el sitio sin criterio.

Uso recomendado:

- Segunda fuente para componentes que HyperUI no cubra bien.
- Bueno para `accordion`, `collapse`, `tabs`, `dropdowns`, `carousels`.

### 3. Flowbite

Link: <https://flowbite.com/docs/getting-started/introduction/>

Por que si:

- Es open source.
- Sus componentes interactivos usan `vanilla JavaScript`.
- Tiene botones, navbars, modales, dropdowns, tooltips, datepickers y mas.

Cuidado:

- Suele empujar mas hacia "library mode" que HyperUI.
- Si mezclas demasiados patrones de Flowbite con tu estilo actual, puedes perder consistencia visual.

Uso recomendado:

- Cuando necesites interactividad lista para usar y prefieras no meter React.

### 4. daisyUI

Link: <https://daisyui.com/components/>

Por que si:

- Muy rapido para construir interfaces.
- Componentes por clases (`btn`, `card`, `hero`, `carousel`, etc.).
- Tiene muchos componentes y temas.

Cuidado:

- Cambia bastante la semantica visual del proyecto.
- Si ya tienes un lenguaje visual definido, puede sentirse "frameworkizado".

Uso recomendado:

- Bueno para prototipar rapido o para zonas nuevas del sitio.
- Menos recomendable si quieres mantener al maximo el estilo artesanal actual sin adaptar clases.

## Carruseles: la opcion mas segura aqui

### 5. Swiper

Link: <https://swiperjs.com/>

Por que es la mejor opcion en este repo:

- Ya esta instalado en `package.json`.
- Es muy estable en produccion.
- Funciona como libreria vanilla y tambien como `Web Component`.
- Tiene soporte fuerte para touch, breakpoints, paginacion y navegacion.

Recomendacion real:

- Si solo quieres agregar carruseles, no cambies de libreria.
- Aprovecha `Swiper Element` o una integracion pequena en Astro.

Cuando usarlo:

- `hero sliders`
- carruseles de productos
- testimonios
- galerias moviles

Alternativas validas:

- `Embla Carousel` si quieres algo mas minimalista y controlado
- `Splide` si quieres otra opcion madura y ligera

## Animaciones: que no se rompan en produccion

### 6. Motion One

Link: <https://motion.dev/>

Por que si:

- Ligera.
- Buena para animaciones de entrada, hover, reveals y microinteracciones.
- Mucho mas razonable para Astro que meter una libreria React-only.

### 7. CSS + View Transitions de Astro

Docs Astro: <https://docs.astro.build/>

Por que si:

- Para fades, reveals, hover states y transiciones simples, CSS sigue siendo la opcion mas robusta.
- Si el efecto puede vivir sin JS, esa deberia ser tu primera eleccion.

## Fuentes adicionales utiles para bloques gratis

### Mamba UI

Link: <https://www.mambaui.com/components>

Bueno para:

- `hero`
- `testimonial`
- `faq`
- `feature`
- `footer`
- `contact`

Ventaja:

- Copy-paste rapido en HTML/Tailwind.

### Meraki UI

Link: <https://merakiui.com/components/>

Bueno para:

- heroes
- CTA
- botones
- forms
- footers
- testimonials

Ventaja:

- Tiene muchos bloques de marketing listos para adaptar.

## Que evitar en este proyecto

Evita como primera opcion:

- librerias centradas en `React-only`
- componentes pensados para `Next.js`
- colecciones que dependen demasiado de hooks o client-side state

Ejemplos de cuidado:

- `21st.dev`
- `Aceternity UI`
- `Magic UI`
- muchos templates de `shadcn/ui`

No es que sean malos. El problema es este proyecto:

- hoy es Astro puro
- no tiene React instalado
- meter React solo para un boton, hero o card es mala relacion costo/beneficio

Si algun dia quieres usar esos marketplaces:

- instala React en Astro
- trata esas piezas como `islands`
- hidrata solo componentes interactivos con `client:load`, `client:visible` o `client:idle`

## Regla practica para que no falle en Netlify

### Opcion A: la mas segura

Usa componentes `HTML + Tailwind + CSS`.

Resultado:

- cero problemas de SSR/hydration
- build simple
- deploy simple en Netlify

### Opcion B: segura para interactividad

Usa `vanilla JS`, `Swiper`, `Flowbite` o `Preline` en componentes concretos.

Resultado:

- bajo riesgo
- facil de depurar
- no obliga a agregar framework UI

### Opcion C: valida pero solo si de verdad la necesitas

Usa componentes React dentro de Astro como islas.

Resultado:

- mas flexible
- mas peso
- mas riesgo de inconsistencias si el componente viene muy acoplado a otro ecosistema

## Recomendacion final para este proyecto

La combinacion mas solida para `chiwi` hoy es:

1. `HyperUI` para heroes, secciones, CTA, botones y bloques visuales.
2. `Swiper` para carruseles, porque ya esta instalado.
3. `Preline UI` o `Flowbite` solo para componentes interactivos puntuales.
4. `CSS` y `Motion One` para animaciones.

## Implementacion recomendada

### Para heroes, secciones y botones

- Buscar primero en `HyperUI`
- Si no encuentras una variante buena, revisar `Mamba UI` o `Meraki UI`

### Para carruseles

- Usar `Swiper`
- No meter otra libreria si no hay una razon fuerte

### Para animaciones

- Primero CSS
- Luego `Motion One` si necesitas secuencias o control fino

### Para modales, acordeones, tabs, dropdowns

- `Preline UI` o `Flowbite`

## Notas de Astro y Netlify verificadas

Segun la documentacion oficial de Astro:

- Astro soporta mezclar componentes de framework cuando hace falta.
- La interactividad se controla con directivas como `client:load`, `client:visible` y `client:only`.
- Si el sitio es estatico, no necesitas adapter de Netlify solo para desplegarlo.
- El adapter `@astrojs/netlify` solo hace falta para rendering on-demand o features de servidor.

Eso significa:

- tu caso actual favorece componentes estaticos o JS ligero
- no hace falta complejizar el stack para agregar buenos bloques visuales

## Fuentes

- Astro docs: <https://docs.astro.build/>
- Astro framework components e islands: <https://docs.astro.build/en/guides/framework-components/>
- Astro Netlify deploy/integration: <https://docs.astro.build/en/guides/deploy/netlify/>
- HyperUI: <https://www.hyperui.dev/>
- Preline UI: <https://preline.co/>
- Preline docs: <https://preline.co/docs/>
- Flowbite intro: <https://flowbite.com/docs/getting-started/introduction/>
- daisyUI components: <https://daisyui.com/components/>
- Swiper: <https://swiperjs.com/>
- Swiper Element: <https://swiperjs.com/element>
- Mamba UI: <https://www.mambaui.com/components>
- Meraki UI: <https://merakiui.com/components/>
