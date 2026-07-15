# Análisis de landing page y ruta de conversión — Chiwi Colombia

Fecha: 14 de julio de 2026  
Alcance: homepage, catálogo, fichas de producto, WhatsApp, newsletter, flores preservadas y pedidos por volumen.

## Resumen ejecutivo

Chiwi ya tiene una base emocional fuerte: productos visualmente memorables, una historia de marca cálida, personalización, memoriales, envío nacional y venta conversacional por WhatsApp. La página puede convertir, pero hoy funciona más como vitrina de marca y catálogo que como un sistema de captación y cierre.

El problema central es de foco comercial. En la misma experiencia se mezclan velas kawaii, memoriales, recordatorios, temporadas y flores preservadas. Cada línea tiene un comprador, una urgencia, un ticket y una objeción diferente. La landing debe llevar a cada visitante a una ruta corta y específica, con una sola acción principal por contexto.

“Convertir 100% a leads” no es una promesa realista para tráfico frío: implicaría que toda visita deja datos, normalmente a costa de perder calidad, confianza o ventas. El objetivo correcto es maximizar la tasa de visitantes cualificados que dejan un contacto o inician una conversación, medir cada paso y mejorarla mediante pruebas. Para Chiwi, el lead principal puede ser una conversación iniciada en WhatsApp; el lead secundario, un formulario breve con teléfono y ocasión de compra.

## Diagnóstico actual

### Lo que ya funciona

- El hero comunica una promesa emocional clara: “Velitas que cuentan una historia”.
- El CTA principal dirige a WhatsApp con un mensaje prellenado.
- Existe un botón flotante de WhatsApp y medición de clics mediante GA4/Meta Pixel.
- El catálogo muestra precios en pesos colombianos, categorías, fichas individuales y productos relacionados.
- Las fichas incluyen personalización, tiempos, envíos y un CTA de pedido por WhatsApp.
- La página responde preguntas críticas: cobertura, tiempos, costo de envío y pedidos desde 5 unidades.
- La galería de pedidos reales y la sección de testimonios ayudan a vender el resultado, no solamente el objeto.
- Las flores preservadas tienen sección propia, imágenes y CTA para armar un ramo.
- La marca tiene una identidad diferenciada: kawaii, artesanal, colombiana, afectiva y personalizable.

### Fricciones y oportunidades prioritarias

| Hallazgo | Impacto comercial | Prioridad |
|---|---|---|
| El hero ofrece “crear mi vela”, “ver catálogo” y varios mensajes secundarios sin segmentar la intención | El visitante no sabe cuál es el siguiente paso más adecuado | P0 |
| El menú incluye búsqueda, carrito placeholder, blog y contacto, pero no una ruta visible para “eventos/empresas” | Se pierden leads de alto volumen y se genera expectativa de compra online | P0 |
| El carrito no funciona y su botón solo registra un `console.log` | Rompe confianza y distrae del canal real de venta | P0 |
| El newsletter solo muestra un `alert()`; no guarda correos | No existe captura real ni posibilidad de seguimiento | P0 |
| La homepage es extensa y mezcla cinco intenciones de compra | La información compite en vez de conducir | P0 |
| Las flores aparecen como una línea secundaria, aunque requieren otra propuesta de valor | Se desaprovecha una categoría con ocasión de regalo, decoración y compra recurrente | P1 |
| “Cera natural”, “dura por meses” y beneficios similares necesitan evidencia y explicación | Algunas promesas pueden generar dudas o expectativas incorrectas | P1 |
| Los testimonios usan imágenes de producto como placeholder | Reduce prueba social y autenticidad | P1 |
| Hay un popup promocional global | Puede interrumpir antes de que el visitante entienda la oferta | P1 |
| El tono es cálido, pero faltan números comerciales: precios “desde”, mínimos, fechas límite y capacidad | Dificulta calificar y cerrar pedidos | P1 |
| La página de paquetes es prácticamente un placeholder (“Ppaquetes”) | Se pierde una landing natural para combos y ticket promedio | P0 |
| El contenido SEO existe, pero no todas las páginas parecen diseñadas para capturar demanda | Tráfico orgánico puede llegar sin una oferta clara | P2 |

## Propuesta de posicionamiento

### Mensaje principal B2C

> Regalos y memoriales hechos a mano en Colombia, personalizados con tu historia y listos para emocionar.

Prueba debajo del titular:

> Desde $14.900 COP · Personalización por WhatsApp · Envíos a toda Colombia · Hecho a mano

CTA principal:

> Quiero una recomendación por WhatsApp

CTA secundario:

> Ver regalos desde $14.900

### Mensaje para mascotas y memoriales

> Convierte la historia de tu peludito en un recuerdo que puedas conservar.

CTA:

> Enviar foto de mi peludito

La conversación debe pedir una foto, ciudad, fecha en que lo necesita y presupuesto aproximado. Eso convierte WhatsApp en un asesoramiento guiado, no en un chat abierto sin contexto.

### Mensaje para eventos y empresas

> Recordatorios personalizados y detalles corporativos hechos a mano, con asesoría, muestras y descuentos por cantidad.

CTA:

> Cotizar mi pedido por cantidad

El comprador mayorista necesita ver mínimo de unidades, rangos de precio, tiempos de producción, personalización disponible, empaque, factura si aplica, despacho y fecha límite. No debe recorrer el mismo catálogo de regalos individuales.

### Mensaje para flores preservadas

> Flores naturales preservadas que conservan su belleza por meses, sin agua y listas para regalar o decorar.

CTA:

> Armar mi ramo según mi presupuesto

La oferta debe aclarar disponibilidad por color, tamaño, duración esperada, cuidados, ciudad de entrega y si se puede combinar con velas.

## Arquitectura de landing recomendada

La homepage debe tener un objetivo principal: iniciar una conversación cualificada o llevar a una categoría con intención clara. Recomiendo esta secuencia:

1. **Barra superior de confianza**: “Envíos a toda Colombia · Pedidos personalizados por WhatsApp · Respuesta en horario de atención”. Evitar que el primer mensaje sea únicamente el cobro del envío.
2. **Hero segmentado**: titular, prueba de precio/tiempo, CTA principal y cuatro accesos de intención: “Regalo”, “Mi mascota”, “Evento/empresa”, “Flores preservadas”.
3. **Selector “¿Qué estás buscando?”**: cuatro tarjetas con una foto, ocasión, rango de precio y CTA. Esto reduce la carga mental.
4. **Productos más fáciles de comprar**: 4–6 best sellers, con precio, ocasión, tiempo, badge de disponibilidad y CTA “Pedir por WhatsApp”.
5. **Oferta de entrada**: un producto o combo de bajo riesgo, por ejemplo “detalle desde $14.900” o “pack desde $X”. Debe ser real, con stock y fecha de vigencia.
6. **Personalización en tres pasos**: elige diseño, envía foto/mensaje, recibe confirmación y fecha de entrega.
7. **Prueba social verificable**: fotos reales de clientes, ciudad, ocasión y resultado. Idealmente con permiso y enlace a Instagram.
8. **Sección B2B/volumen**: 5, 10, 20, 50+ unidades; ejemplos de recordatorios, empaque, tiempos y formulario de cotización.
9. **Flores preservadas**: propuesta separada, cuidado, duración, colores y combos vela + flores.
10. **Objeciones**: precio, envío, tiempo, personalización, cambios, seguridad del pago, cuidado de la vela y qué ocurre después de escribir.
11. **CTA final y CTA sticky en móvil**: “Cuéntanos qué necesitas y te recomendamos una opción en menos de 10 minutos” — solo si ese tiempo de respuesta es operativamente posible.

## Rutas de conversión por tipo de comprador

### 1. Regalo individual

Anuncio o búsqueda → landing de ocasión → 3 productos recomendados → ficha con precio y fecha → WhatsApp prellenado → datos de entrega → pago/confirmación.

Datos mínimos: ocasión, fecha, ciudad, producto, presupuesto y nombre del destinatario.

### 2. Mascota personalizada

Contenido social/SEO → landing de mascota → ejemplos antes/después → cómo funciona → precio “desde” → carga o envío de foto por WhatsApp → cotización → abono/pago → aprobación visual si aplica.

El CTA no debe decir solo “comprar”; debe decir “Enviar foto para cotizar”.

### 3. Memorial

Contenido emocional → landing memorial → tono cuidadoso, ejemplos, materiales, empaque y tiempos → WhatsApp con mensaje sensible → asesoría humana. Evitar popups agresivos y urgencia artificial en esta ruta.

### 4. Evento o empresa

Página “Eventos y empresas” → formulario corto → respuesta con catálogo PDF o WhatsApp → cotización escalonada → muestra/prototipo → anticipo → producción → despacho.

Campos recomendados: nombre, empresa, WhatsApp, cantidad, ciudad, fecha del evento, presupuesto por unidad, tipo de personalización y factura requerida.

### 5. Flores preservadas

Anuncio o categoría → filtros por ocasión, color y presupuesto → ficha con cuidados y disponibilidad → selección de bouquet → WhatsApp → confirmación de stock, envío y empaque.

Crear además rutas para “ramo para cumpleaños”, “flores para escritorio”, “flores preservadas para pareja” y “combo vela + flores”.

## Mejoras de copy y oferta

- Sustituir CTAs genéricos como “Ver catálogo” por acciones con resultado: “Ver regalos desde $14.900”, “Enviar foto de mi mascota”, “Cotizar 10+ unidades” y “Armar mi ramo”.
- Mostrar precio desde el primer bloque. Si el precio depende de personalización, mostrar rango y qué lo modifica.
- Mostrar fecha estimada de entrega calculada por ciudad y fecha del pedido; para productos personalizados, separar “tiempo de elaboración” de “tiempo de transporte”.
- Usar una garantía operativa honesta: “Te confirmamos diseño, precio y fecha antes de producir”. No prometer satisfacción, duración o entrega que no esté respaldada.
- Aclarar formas de pago, anticipo, cambios y cancelaciones. WhatsApp funciona mejor cuando el siguiente paso no es ambiguo.
- Para mayoristas, mostrar descuentos por escalones: 5–9, 10–19, 20–49 y 50+. Definirlos internamente y publicarlos solo cuando sean sostenibles.
- Cambiar “newsletter” por un beneficio concreto: “Recibe el catálogo de temporada y un cupón de bienvenida”. Si no existe backend, retirar el formulario hasta conectarlo.
- Crear un lead magnet B2B: “Catálogo de recordatorios + tabla de cantidades + tiempos de producción”.

## Captura y calificación de leads

### Canal principal: WhatsApp

Cada CTA debe llevar parámetros de origen y un mensaje distinto. Ejemplos:

- “Hola Chiwi, busco un regalo. Mi presupuesto es ___, lo necesito en ___ para la ciudad de ___.”
- “Hola Chiwi, quiero una vela de mi mascota. Te envío la foto; mi ciudad es ___ y la necesito para ___.”
- “Hola Chiwi, necesito ___ unidades para un evento el ___. Es para ___ y mi presupuesto por unidad es ___.”
- “Hola Chiwi, quiero un ramo preservado en tonos ___, presupuesto ___, para entregar en ___.”

No pedir diez datos antes de abrir WhatsApp. Pedir tres o cuatro datos útiles y completar el resto en la conversación.

### Canal secundario: formulario propio

Crear un endpoint real con consentimiento, aviso de privacidad, página de gracias y respuesta automática. Campos mínimos: nombre, WhatsApp, ciudad, intención, fecha y mensaje. El email debe ser opcional para no frenar la conversión de una audiencia que compra por WhatsApp.

### CRM mínimo

Registrar cada lead en una hoja, CRM o backend con:

- fecha, fuente, campaña y landing;
- tipo de comprador;
- producto o categoría;
- ciudad y fecha requerida;
- cantidad y valor estimado;
- estado: nuevo, contactado, cotizado, anticipo, ganado, perdido;
- motivo de pérdida;
- fecha del próximo seguimiento.

Un lead no vale solo por hacer clic. El indicador clave debe ser conversación cualificada, cotización enviada, anticipo y venta.

## Embudo y métricas

Medir por dispositivo, ciudad, fuente y categoría:

1. Visita a landing.
2. Clic en CTA.
3. WhatsApp abierto.
4. Conversación con datos completos.
5. Cotización enviada.
6. Anticipo o pago.
7. Pedido entregado.
8. Recompra o referido.

Eventos recomendados: `cta_click`, `whatsapp_open`, `lead_qualified`, `quote_requested`, `quote_sent`, `deposit_paid`, `purchase`, `newsletter_subscribe`, `b2b_form_submit` y `purchase_category`.

El tracking actual de WhatsApp y GA4 es un buen inicio, pero `InitiateCheckout` no debería representar indistintamente una consulta, una cotización y una compra. Separar eventos mejora la lectura de campañas.

## Plan de implementación por fases

### Fase 0 — Correcciones críticas, 1–3 días

- Desactivar o transformar el botón de carrito placeholder.
- Corregir la página `/paquetes` y convertirla en landing de combos/eventos.
- Retirar el newsletter decorativo o conectarlo a Brevo, Mailchimp o un backend real.
- Definir un único CTA principal para móvil y desktop.
- Auditar todos los enlaces de WhatsApp y sus mensajes prellenados.
- Corregir inconsistencias de carruseles, alt text, textos y promesas de oferta.
- Confirmar que popup, CTA sticky, navegación y formularios sean cómodos en móvil.

### Fase 1 — Base de conversión, 1–2 semanas

- Rediseñar hero con selector de intención.
- Crear páginas: `/regalos`, `/mascotas`, `/memoriales`, `/eventos`, `/flores-preservadas`.
- Crear formulario B2B y página de gracias.
- Reorganizar productos destacados por ocasión, no únicamente por categoría.
- Añadir precios desde, tiempos, fecha de entrega y formas de pago.
- Sustituir placeholders por testimonios reales y fotos autorizadas.
- Implementar eventos de embudo y tablero semanal.

### Fase 2 — Cierre y ticket promedio, 2–4 semanas

- Crear combos: vela + flores, pack de recordatorios, regalo completo y memorial con empaque.
- Incorporar recomendaciones de complemento en fichas de producto.
- Preparar guiones de respuesta y seguimiento de WhatsApp.
- Crear descuentos por cantidad y reglas de anticipo.
- Probar catálogo descargable para empresas.
- Agregar recuperación de conversaciones sin respuesta y seguimiento a cotizaciones.

### Fase 3 — Optimización continua, desde el mes 2

- Test A/B de titular, oferta, precio desde, foto y CTA.
- Test de campaña separando regalo, mascota, memorial, flores y B2B.
- Analizar pérdidas por precio, envío, tiempos, respuesta y disponibilidad.
- Priorizar producción según margen, conversión y repetición.
- Crear programas de referidos para clientes y alianzas con veterinarias, floristerías, organizadores de eventos y empresas.

## Recomendaciones de ventas por WhatsApp

1. Responder con saludo, nombre y pregunta de calificación, no con un catálogo enorme.
2. Recomendar máximo tres opciones según ocasión y presupuesto.
3. Mostrar foto, precio, tiempo, envío y siguiente paso en el mismo mensaje.
4. Confirmar ciudad y fecha antes de prometer disponibilidad.
5. En productos personalizados, confirmar foto, colores, texto y aprobación.
6. En mayoristas, enviar una cotización con vigencia, cantidades, tiempos, empaque y condiciones de pago.
7. Hacer seguimiento a las 24 horas y antes de la fecha límite, con permiso y sin spam.
8. Después de la entrega, pedir foto/testimonio y ofrecer recompra, referido o próxima temporada.

## Prioridad de experimentos

1. Hero con selector de intención vs. hero actual.
2. CTA “Enviar foto” vs. “Crear mi vela personalizada”.
3. Precio desde + fecha de entrega visible vs. solo catálogo.
4. Pop-up al entrar vs. pop-up con intención de salida.
5. Galería de producto vs. foto de cliente con contexto.
6. Formulario corto de B2B vs. WhatsApp genérico.
7. Combo vela + flores vs. productos separados.

No cambiar cinco elementos a la vez. Cada prueba debe tener una hipótesis, un periodo suficiente y un criterio de éxito. El objetivo no es aumentar clics baratos, sino leads cualificados y ventas rentables.

## Checklist de aceptación

- [ ] En cinco segundos se entiende qué vende Chiwi, para quién y cuál es el siguiente paso.
- [ ] Cada intención principal tiene una landing, una promesa y un CTA propio.
- [ ] Se ve precio o rango, tiempo, envío y forma de pedido sin buscar demasiado.
- [ ] Ningún botón promete una funcionalidad que no existe.
- [ ] WhatsApp recibe contexto suficiente para responder rápido.
- [ ] Los leads de retail y mayoristas quedan separados.
- [ ] El newsletter guarda contactos con consentimiento o no se muestra.
- [ ] Hay testimonios reales, permisos y evidencia de pedidos entregados.
- [ ] Se miden clic, conversación, cotización, anticipo, venta y recompra.
- [ ] La experiencia móvil tiene CTA sticky, botones grandes y carga rápida.
- [ ] Las promociones tienen vigencia, stock y condiciones claras.
- [ ] La operación puede cumplir la promesa de tiempo y respuesta.

## Conclusión

Chiwi no necesita parecer una tienda genérica. Su ventaja es la personalización emocional y la conversación humana. La conversión crecerá cuando la web haga tres cosas con precisión: identificar qué desea el visitante, demostrar que Chiwi puede entregarlo en la fecha y presupuesto correctos, y abrir una conversación con contexto suficiente para cerrar.

La primera intervención debe ser comercial, no decorativa: eliminar falsas funcionalidades, convertir paquetes y mayoristas en una ruta propia, hacer real la captura de datos y rediseñar el hero alrededor de cuatro intenciones. Después, el crecimiento vendrá de medir cada paso, responder mejor por WhatsApp y crear ofertas específicas para ocasiones de regalo, mascotas, memoriales, flores y pedidos por cantidad.
