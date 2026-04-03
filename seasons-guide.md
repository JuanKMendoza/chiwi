# Guia: Modificar Fechas de Temporadas — Chiwi Colombia

## Como funciona el sistema de temporadas

Las secciones de temporada (Dia del Nino, Dia de las Madres, Halloween, Navidad) se **muestran y ocultan automaticamente** segun la fecha del navegador del visitante. No requieren hacer rebuild del sitio.

---

## Donde se modifican las fechas

**Archivo:** `src/pages/index.astro`
**Linea aproximada:** 628

```js
var seasons = [
  { id: "halloween",  sm: 10, sd: 1,  em: 10, ed: 31 },
  { id: "navidad",    sm: 11, sd: 15, em: 12, ed: 31 },
  { id: "dia-ninos",  sm: 4,  sd: 1,  em: 4,  ed: 30 },
  { id: "dia-madres", sm: 5,  sd: 1,  em: 5,  ed: 31 },
];
```

---

## Significado de cada campo

| Campo | Nombre        | Descripcion              | Ejemplo  |
|-------|---------------|--------------------------|----------|
| `sm`  | start month   | Mes en que inicia        | `4` = abril |
| `sd`  | start day     | Dia del mes en que inicia| `1` = dia 1 |
| `em`  | end month     | Mes en que termina       | `5` = mayo  |
| `ed`  | end day       | Dia del mes en que termina| `31` = dia 31 |

> Los meses van de 1 (enero) a 12 (diciembre).

---

## Temporadas actuales y sus fechas

| Temporada      | ID            | Desde         | Hasta         |
|----------------|---------------|---------------|---------------|
| Halloween      | `halloween`   | 1 de octubre  | 31 de octubre |
| Navidad        | `navidad`     | 15 de noviembre| 31 de diciembre|
| Dia del Nino   | `dia-ninos`   | 1 de abril    | 30 de abril   |
| Dia de las Madres | `dia-madres`| 1 de mayo    | 31 de mayo    |

---

## Ejemplos de modificacion

### Extender Dia del Nino hasta el 15 de mayo
```js
{ id: "dia-ninos",  sm: 4,  sd: 1,  em: 5,  ed: 15 },
```

### Iniciar Halloween desde el 15 de septiembre
```js
{ id: "halloween",  sm: 9,  sd: 15, em: 10, ed: 31 },
```

### Iniciar Navidad desde el 1 de noviembre
```js
{ id: "navidad",    sm: 11, sd: 1,  em: 12, ed: 31 },
```

### Extender Dia de las Madres hasta el 10 de mayo
```js
{ id: "dia-madres", sm: 5,  sd: 1,  em: 5,  ed: 10 },
```

---

## Como agregar una nueva temporada

Sigue estos 4 pasos:

**1. Agregar la entrada de fechas** en el array `seasons` de `index.astro`:
```js
{ id: "san-valentin", sm: 2, sd: 1, em: 2, ed: 14 },
```

**2. Crear el componente** `src/components/seasons/SeasonSanValentin.astro`
Usa como base el archivo `SeasonDiaNinos.astro` y adapta los colores y textos.

**3. Importar el componente** en el frontmatter de `index.astro`:
```ts
import SeasonSanValentin from "../components/seasons/SeasonSanValentin.astro";
```

**4. Agregar el bloque HTML** en `index.astro` junto a los otros bloques de temporada:
```astro
<div data-season="san-valentin" class="season-block" hidden>
  <SeasonSanValentin />
</div>
```

---

## Notas importantes

- El sistema detecta la fecha del **navegador del visitante** — no del servidor.
- Si quieres que una temporada este **siempre visible** (para pruebas), quita el atributo `hidden` del bloque `<div data-season="...">` temporalmente.
- Si la temporada cruza fin de año (ej: del 15 dic al 5 ene), necesitaras ajustar la logica del script en `index.astro` ya que actualmente compara mes/dia de forma lineal.
