# Brand Book — WELCOME TO THE FUTURE

Sistema visual de la marca. Dirección estética: **"Sala de Control"** — un panel
de instrumentos / SCADA de gama alta reinterpretado como producto premium. La
marca se ve y se siente como ingeniería real funcionando en tiempo real.

---

## 1. Logotipo

- **Nombre completo:** WELCOME TO THE FUTURE
- **Abreviatura / monograma:** **WTTF**
- **Uso:** el nombre completo en encabezados y documentos formales; `WTTF` como
  marca corta en navegación, favicon, redes y aplicaciones embebidas.

**Recomendación de construcción** (cuando se diseñe el logo definitivo):
- Monograma `WTTF` en tipografía mono/técnica, tracking amplio.
- Acompañado de un indicador de "señal viva" (•) en color ámbar que evoca un
  LED de estado encendido: `WTTF ●`.
- Versión horizontal con el nombre completo para piezas formales.

**Zona de protección:** dejar alrededor del logo un margen mínimo igual a la
altura de la letra "W". Tamaño mínimo del monograma: 24 px de alto en pantalla.

---

## 2. Paleta de color

Paleta de "panel de instrumentos": grafito profundo, acero, y acentos de
fósforo (ámbar) y dato (cian).

| Rol | Nombre | HEX | Uso |
|-----|--------|-----|-----|
| Fondo | Grafito instrumento | `#0E1217` | Fondo principal del sitio y piezas oscuras |
| Superficie | Acero | `#161D26` | Paneles, tarjetas, secciones elevadas |
| Borde/línea | Acero claro | `#243140` | Bordes, divisores, rejilla |
| Acento 1 | Ámbar fósforo | `#FFB23E` | Acento principal, CTAs, estados activos, "señal viva" |
| Acento 2 | Cian dato | `#3DD6D0` | Métricas, datos, enlaces, gráficas |
| Texto | Blanco lectura | `#E8ECF1` | Texto principal sobre fondo oscuro |
| Texto sec. | Gris lectura | `#9AA7B5` | Texto secundario, captions, labels |
| Alerta | Rojo señal | `#FF5A5A` | Errores, alarmas (uso mínimo) |
| OK | Verde señal | `#4ED98B` | Estados correctos / en línea (uso mínimo) |

**Modo claro (documentos imprimibles):** fondo blanco `#FFFFFF`, texto
`#10151C`, acentos ámbar `#C77F1A` (versión accesible sobre blanco) y cian
`#0E8F8A`. Cumplir el lineamiento de **fondo blanco** en gráficos y reportes.

**Accesibilidad:** todo texto debe cumplir contraste WCAG AA (≥ 4.5:1). El ámbar
sobre grafito y el blanco lectura sobre grafito cumplen. No usar ámbar para
texto largo sobre acero claro.

---

## 3. Tipografía

| Rol | Familia recomendada | Alternativa (web-safe / Google Fonts) | Uso |
|-----|--------------------|---------------------------------------|-----|
| Display / readout | Mono técnica | **Space Mono** / **JetBrains Mono** | Titulares, números, labels de canal |
| Cuerpo | Grotesca limpia | **Inter** / **Manrope** | Párrafos, UI, navegación |
| Datos / specs | Mono | **JetBrains Mono** | Métricas, código, fichas técnicas |

**Escala tipográfica (web, base 16px):**

| Token | Tamaño | Peso | Uso |
|-------|--------|------|-----|
| Display XL | 64–88px (clamp) | 700 | Héroe |
| H1 | 40px | 700 | Título de sección |
| H2 | 28px | 600 | Subsección |
| H3 | 20px | 600 | Tarjeta |
| Body | 17px | 400 | Párrafo |
| Small | 14px | 400 | Captions |
| Label | 12px | 500, tracking +0.12em, MAYÚSCULAS | Eyebrows, canales |

Los **labels** se escriben en mayúsculas con tracking amplio, evocando las
etiquetas de un panel de instrumentos: `CANAL 01`, `EN LÍNEA`, `LATENCIA`.

---

## 4. Elemento firma: la "señal viva"

El sello inconfundible de la marca es una **forma de onda / telemetría en
movimiento**: líneas de señal animadas y cifras que ruedan en tiempo real,
presentes en el héroe del sitio y como riel recurrente entre secciones.

Significa: *"esto es ingeniería real, funcionando ahora"*. Es la prueba visual
de la propuesta de valor.

Reglas de uso:
- Siempre en ámbar o cian sobre fondo grafito.
- Sutil, nunca caótica: ritmo calmado, como un monitor estable.
- Respeta `prefers-reduced-motion`: si el usuario lo pide, la señal se congela.

---

## 5. Iconografía e imágenes

- **Iconos:** línea de 1.5–2px, esquinas a 90° o radio mínimo, estilo esquemático
  (como símbolos de instrumentación/P&ID). Monocromos en blanco lectura o acento.
- **Fotografía:** equipos reales, placas, instalaciones, plantas; con corrección
  de color fría/grafito para integrarse a la paleta. Evitar stock genérico de
  "negocios sonriendo".
- **Gráficas y dashboards:** en piezas oscuras usar la paleta de instrumento; en
  documentos imprimibles, **fondo blanco** con texto oscuro.

---

## 6. Tokens (para implementación web)

```css
:root {
  --c-bg:        #0E1217;
  --c-surface:   #161D26;
  --c-border:    #243140;
  --c-amber:     #FFB23E;
  --c-cyan:      #3DD6D0;
  --c-text:      #E8ECF1;
  --c-text-dim:  #9AA7B5;
  --c-alert:     #FF5A5A;
  --c-ok:        #4ED98B;

  --font-display: "Space Mono", ui-monospace, monospace;
  --font-body:    "Inter", system-ui, sans-serif;
  --font-mono:    "JetBrains Mono", ui-monospace, monospace;
}
```

Ver también: [tono-de-voz.md](tono-de-voz.md) · sitio en [`/web`](../../web/)
