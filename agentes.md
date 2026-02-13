# Chiwi Colombia - Documentación del Proyecto 🕯️✨

## Descripción General

**Chiwi Colombia** es un sitio web de e-commerce para una tienda de **velas artesanales kawaii personalizadas** hechas a mano en Colombia. El proyecto está construido con tecnologías web modernas y se enfoca en ofrecer productos únicos y memorables.

---

## 🎯 Propósito del Negocio

El sitio vende:

- **Velas kawaii personalizadas** (gatitos, perritos, capibaras, ositos)
- **Memoriales para mascotas** - Productos especiales para recordar a mascotas queridas
- **Regalos especiales** (cajitas recuerdo, paquetes premium)
- **Ediciones limitadas temáticas** (Halloween, Navidad, eventos especiales)

### Propuesta de Valor

- ✨ **100% Hechas a mano** - Cada vela es única y artesanal
- 🎨 **Personalizables** - Los clientes pueden solicitar diseños personalizados
- 💚 **Cera natural** - Productos ecológicos y de calidad
- 🌙 **Ediciones limitadas** - Productos exclusivos y coleccionables

---

## 🛠️ Stack Tecnológico

### Framework Principal

- **Astro 5.16.15** - Framework web moderno para sitios de alto rendimiento
  - SSG (Static Site Generation) para SEO óptimo
  - Hidratación parcial para mejor performance
  - Soporte multi-framework

### Styling

- **TailwindCSS 4.1.13** - Framework CSS utility-first
- **@tailwindcss/vite 4.1.13** - Integración con Vite
- **@tailwindcss/typography 0.5.19** - Estilos tipográficos

### Interactividad

- **React 19.2.1** - Biblioteca para componentes interactivos
- **React DOM 19.2.1** - Renderizado de componentes React
- **@astrojs/react 4.4.2** - Integración de React con Astro

### Gráficos 3D

- **Three.js 0.181.2** - Biblioteca para gráficos 3D
- **@react-three/fiber 9.4.2** - Renderer React para Three.js
- **@react-three/drei 10.7.7** - Helpers y abstracciones para R3F

### UI Components

- **Swiper 12.0.2** - Carruseles y sliders modernos

### Optimización

- **Sharp 0.34.4** - Procesamiento y optimización de imágenes
- Formato WebP para imágenes
- Lazy loading automático

---

## 📁 Estructura del Proyecto

```
chiwi/
├── src/
│   ├── pages/              # Páginas del sitio (routing automático)
│   │   ├── index.astro           # Página principal (Home)
│   │   ├── contacto.astro        # Formulario de contacto
│   │   ├── paquetes.astro        # Página de paquetes
│   │   ├── privacidad.astro      # Política de privacidad
│   │   ├── productos/            # Páginas individuales de productos
│   │   └── blog/                 # Artículos del blog (5 posts)
│   ├── components/         # Componentes reutilizables (7 componentes)
│   ├── layouts/            # Layouts base (1 layout principal)
│   ├── assets/             # Imágenes y recursos (52 archivos)
│   ├── data/               # Datos estructurados
│   └── styles/             # Estilos globales
├── public/                 # Archivos estáticos públicos (5 archivos)
├── .astro/                 # Cache de Astro
├── node_modules/           # Dependencias
├── astro.config.mjs        # Configuración de Astro
├── tailwind.config.mjs     # Configuración de Tailwind
├── tsconfig.json           # Configuración de TypeScript
├── package.json            # Dependencias y scripts
└── pnpm-lock.yaml          # Lock file de pnpm
```

---

## ✨ Características Principales

### 1. Hero Section Impactante

- Imagen de fondo de alta calidad con gradientes
- Animaciones de entrada (fade-in, slide-up)
- Elementos flotantes decorativos (emojis animados)
- Badge superior con mensaje de valor
- Título con gradiente animado
- Características destacadas en pills
- Doble CTA: WhatsApp + Ver catálogo
- Flecha scroll animada

### 2. Sección de Confianza

- Contadores animados de métricas:
  - 500+ velas creadas
  - 200+ clientes felices
  - 15+ diseños únicos
  - 100% hechas a mano

### 3. Catálogo de Productos

- **Grid Desktop**: Layout responsive (1/2/4 columnas)
- **Carrusel Móvil**: Swiper con paginación
- Markup Schema.org para SEO
- Imágenes optimizadas (WebP, lazy loading)
- Hover effects y transiciones
- Botones CTA "Ver detalles"
- Precios en COP (pesos colombianos)

### 4. SEO Optimizado

- Meta tags descriptivos
- Schema.org markup para productos
- Estructura semántica HTML5
- URLs limpias y descriptivas
- Sitemap automático (Astro)
- Open Graph tags

### 5. Integración WhatsApp

- Botón principal con mensaje pre-rellenado
- Link directo al número de contacto
- Iconos de WhatsApp con animaciones

---

## 🎨 Estilo Visual

### Paleta de Colores

- **Gradiente Principal**: `from-orange-500 to-pink-500`
- **Fondos**: `from-orange-50 to-pink-50`
- **Texto**: Grises (`gray-900`, `gray-600`)
- **Acentos**: Naranja y rosa en varios tonos

### Tipografía

- Font-family: Sistema (sans-serif)
- Tamaños responsivos: `text-3xl` a `text-7xl` para títulos
- Font-weight: Bold para títulos, semibold para precios

### Animaciones

- **Elementos flotantes**: Keyframe animations
- **Hover effects**: Scale, translate, shadow
- **Transiciones**: `transition-all duration-300`
- **Contadores**: JavaScript animado
- **Gradientes**: Animación de background

### Componentes UI

- **Botones**: Rounded-full con gradientes
- **Cards**: Rounded-xl con sombras
- **Badges**: Pills con backdrop-blur
- **Icons**: Ion Icons

---

## 📊 Productos Destacados

| Producto                  | Precio (COP) | Descripción                          |
| ------------------------- | ------------ | ------------------------------------ |
| Perrito Cocker            | $21,900      | Vela personalizada kawaii de perrito |
| Familia de Ositos         | $14,900      | Set de velas decorativas             |
| Capibara Mood Relax       | $15,900      | Vela kawaii de capibara acostado     |
| Capibara Cute             | $15,900      | Vela artesanal de capibara           |
| Cajita Recuerdame         | $32,900      | Kit completo con empaque especial    |
| Cajita Recuerdame Premium | $32,900      | Regalo especial con empaque premium  |
| Gatito Personalizado      | $24,900      | Vela kawaii de gatito personalizada  |

---

## 🌐 Configuración de Despliegue

### Dominio

- **URL Principal**: https://chiwicolombia.com
- **Trailing Slash**: Configurado en "ignore"
- **Build Format**: Directory (para URLs limpias)

### Scripts Disponibles

```json
{
  "dev": "astro dev", // Servidor de desarrollo
  "build": "astro build", // Build de producción
  "preview": "astro preview" // Preview del build
}
```

---

## 🔧 Configuración Técnica

### Astro Config

- Site URL configurada para SEO
- Integración React habilitada
- Vite con plugin de Tailwind
- Build format: directory

### Características de Rendimiento

- **Static Site Generation (SSG)**: Páginas pre-renderizadas
- **Optimización de imágenes**: Sharp + WebP
- **Code splitting**: Automático por Astro
- **CSS optimizado**: Tailwind con purge
- **Lazy loading**: Imágenes y componentes

---

## 📱 Responsive Design

### Breakpoints

- **Mobile**: < 640px (sm)
- **Tablet**: 640px - 1024px (md/lg)
- **Desktop**: > 1024px (xl)

### Adaptaciones

- Grid cambia de 1 a 4 columnas
- Carrusel solo en móvil
- Texto responsive (3xl a 7xl)
- Padding y spacing adaptativo

---

## 🎯 Flujo de Usuario

1. **Landing** → Hero con propuesta de valor
2. **Scroll** → Métricas de confianza
3. **Explorar** → Catálogo de productos
4. **Interés** → Click en "Ver detalles"
5. **Conversión** → WhatsApp para pedido personalizado

---

## 📈 Métricas de Negocio

- **500+** velas creadas
- **200+** clientes felices
- **15+** diseños únicos
- **100%** hechas a mano

---

## 🔗 Enlaces Importantes

- **WhatsApp**: +57 310 227 8592
- **Mensaje predeterminado**: "Hola! Quiero conocer sus velas personalizadas"

---

## 📝 Notas Técnicas

- El proyecto usa **pnpm** como package manager
- TypeScript configurado para type checking
- Git configurado con .gitignore
- VSCode workspace con 2 archivos de configuración
- Total de 73 archivos en src/

---

_Última actualización: Febrero 2026_
