# CLAUDE.md — WELCOME TO THE FUTURE

> Contexto del proyecto para retomar el desarrollo en cualquier sesión. Claude
> Code carga este archivo automáticamente. Última actualización: 2026-07-07.

## Qué es este proyecto

Paquete completo para **fundar la empresa WELCOME TO THE FUTURE (WTTF)** —
**empresa propia de Rafael, no un cliente**. WTTF democratiza la automatización
y optimización industrial/comercial/hogar: hardware + software + lógica a la
medida, **sin vendor lock-in** y con modelo de negocio de **riesgo compartido**
(costo de entrada ~5% + porcentaje de los ahorros reales generados). Se
constituirá como **S.A.S. en Colombia**.

El repo tiene dos pilares:
- `empresa/` — documentación corporativa (Markdown).
- `docs/` — landing de marketing bilingüe (ES/EN), estática.

## Estructura

```
.
├── CLAUDE.md                       ← este archivo (estado + contexto)
├── README.md                       índice general del paquete
├── empresa/
│   ├── 01-identidad/
│   │   ├── manifiesto.md
│   │   ├── propuesta-de-valor.md
│   │   ├── mision-vision-valores.md
│   │   ├── tono-de-voz.md
│   │   └── brand-book.md           ← tokens de marca (colores/tipos) = fuente de verdad del diseño
│   ├── 02-legal/
│   │   ├── documento-constitucion-sas.md   (borrador, requiere abogado)
│   │   ├── estatutos-sociales.md           (borrador, requiere abogado)
│   │   └── checklist-constitucion.md       (trámites Colombia: RUES, pre-RUT, Cámara, DIAN, banco, CIIU)
│   ├── 03-negocio/
│   │   ├── modelo-riesgo-compartido.md
│   │   ├── pricing.md
│   │   └── plantilla-contrato-ganancias-compartidas.md  (borrador, requiere abogado)
│   └── 04-operacion/
│       ├── catalogo-servicios.md   (las 7 líneas de servicio)
│       ├── metodologia-de-trabajo.md
│       └── plan-de-negocio.md
└── docs/
    ├── index.html                  contenido con texto ES inline + bindings Alpine
    ├── README.md
    └── assets/
        ├── css/styles.css          estilos + tokens (:root)
        ├── js/app.js               i18n (objeto I18N es/en), telemetría canvas, reveal
        ├── js/alpine.min.js        Alpine v3 AUTO-ALOJADO (no CDN)
        └── img/                    vacío (falta favicon/logo)
```

## Decisiones ya tomadas (no re-litigar sin pedir)

- **Dirección de diseño: "A — Sala de Control"** (panel SCADA premium). Se
  descartaron B (Plano Técnico/blueprint) y C (Manifiesto Disruptor).
  - Paleta: grafito `#0E1217`, acero `#161D26`, ámbar `#FFB23E`, cian `#3DD6D0`,
    texto `#E8ECF1`. Definidas en `docs/assets/css/styles.css` (`:root`) y en
    `empresa/01-identidad/brand-book.md`.
  - Tipografía: Space Mono (display), Inter (cuerpo), JetBrains Mono (datos).
  - **Elemento firma:** la "señal viva" = onda de telemetría animada en canvas
    (`#signal`) + lecturas de canal que ruedan (`initChannels` en app.js).
- **Stack web:** HTML + CSS + Alpine.js. **Sin build, sin node_modules.**
- **Bilingüe ES/EN** con toggle. Idioma por defecto detectado del navegador.
- **Formato de la documentación:** Markdown.

## Cómo ejecutar el sitio

```
cd docs
python -m http.server 8000
```
Abrir `http://localhost:8000`. (También funciona con doble clic en `index.html`
porque Alpine está auto-alojado y el texto ES está inline; el servidor es lo más
fiel a producción.)

## Convenciones / dónde tocar qué

- **Editar textos del sitio (ES y EN):** objeto `I18N` en `docs/assets/js/app.js`.
  Cada texto vive bajo una clave (`hero.lead`, `svc.1_t`, …). El `index.html`
  tiene el texto **ES escrito inline como respaldo** + `x-text="$store.i18n.t('clave')"`
  que lo sobrescribe. **Si agregas/cambias un texto, actualiza AMBOS** (la clave en
  I18N para es/en, y el respaldo inline en el HTML).
- **Colores/tipografía:** variables CSS en `:root` de `styles.css`. Mantener
  sincronizado con `brand-book.md`.
- **Animaciones:** respetar `prefers-reduced-motion` (ya implementado en app.js y CSS).
- **Mejora progresiva:** el sitio debe verse aunque falle el JS. No volver a meter
  todo el contenido detrás de JS ni reintroducir `x-cloak` global (eso causó la
  pantalla en blanco que ya se corrigió).
- **Estilo de código y comunicación:** ver `~/.claude/CLAUDE.md` global de Rafael
  (español, conciso, sin over-engineering, frontend de alto rendimiento/bajo bundle).

## Estado actual (2026-06-28)

HECHO:
- [x] Los 4 pilares de documentación de `empresa/` completos.
- [x] Sitio web Dirección A, bilingüe, con telemetría animada.
- [x] Bug de "pantalla en blanco" corregido (Alpine local + texto inline + sin x-cloak).
- [x] Verificado: JS pasa `node --check`; assets sirven 200.
- [x] Sección **Portafolio · I+D propio** (`#portfolio`, entre Método y CTA):
      6 fichas LAB-01..06 (HidroTwin gemelo digital, portal de configuración
      embebido, firmware ESP-IDF/MicroPython con QA de hardware, edge Linux +
      FastAPI + dashboards offline-first, Edge AI/visión en SBC ARM, hardware
      completo con carcasa FreeCAD/3D), franja de stack y bloque "Quién está
      detrás". Enfoque honesto: I+D propio, NO casos de clientes (esos siguen
      pendientes para cuando existan). Claves `port.*` en I18N + respaldo ES inline.
- [x] **Integración del CV real** (2026-07-07): el bloque de fundador usa el perfil
      del CV en https://rafael_rincon_villamizar.welcometothefuture.online/
      (Rafael Rincón Villamizar, Ing. Eléctrico+Telecom, MsC., 15 años en
      infraestructura crítica, OT+IT) con 4 stats y botón `#link_cv` "Ver CV
      completo". Ojo: esa URL devuelve 403 sin User-Agent de navegador.
- [x] **Efectos de scroll** (app.js `initScrollFx` + `initReveal`): barra de
      progreso de lectura (`.scroll-progress`), reveals escalonados (delay 70ms
      que se limpia en `transitionend` para no retrasar hovers), parallax suave
      del panel de telemetría y resaltado de sección activa en el nav.
- [x] **Telemetría interactiva**: cursor de osciloscopio (línea + puntos por onda
      + lectura `t+x.xx s`) al pasar el puntero, pulso al clic. Con
      `prefers-reduced-motion` NO hay loop continuo pero el panel responde a la
      interacción y los canales actualizan cada 6 s (antes quedaba 100% estático,
      que era la queja en sistemas Linux con animaciones desactivadas).

PENDIENTE / PRÓXIMOS PASOS:
- [ ] **Logo y favicon** definitivos (monograma `WTTF ●`). Carpeta `docs/assets/img/` vacía.
- [ ] **Formulario de contacto real** (hoy el CTA abre `mailto:rafaelnotty@gmail.com`).
- [ ] **Rellenar los `[corchetes]`** de los documentos legales (ciudad, capital,
      accionistas, % y plazos) y **llevarlos a un abogado/contador**.
- [ ] (Opcional) Auto-alojar las fuentes de Google para 100% offline.
- [ ] (Opcional) Meta Open Graph + imagen para compartir en redes.
- [ ] (Opcional) Generar PDFs con estética de marca de la documentación.
- [x] Deploy por **GitHub Pages** desde la carpeta `docs/` (rama `main`). Falta el
      paso manual una sola vez: Settings → Pages → Source: Deploy from a branch →
      `main` / `docs`. URL: https://rafaelnotty.github.io/welcometothefuture/
- [ ] (Futuro) Casos de éxito reales cuando existan; sección de testimonios.

## Advertencias importantes

- ⚠️ **Los documentos legales (`02-legal/` y la plantilla de contrato en
  `03-negocio/`) son borradores plantilla y NO sustituyen asesoría jurídica.**
  Requieren revisión de un abogado y un contador en Colombia antes de firmarse o
  radicarse. Cada archivo lo indica en su encabezado.
- Las cifras financieras del plan de negocio y del pricing son **parámetros de
  referencia**, no datos reales todavía.

## Git / remoto

Repo en GitHub: https://github.com/rafaelnotty/welcometothefuture (rama `main`).
El sitio se publica desde `docs/` vía GitHub Pages (deploy por rama, sin Actions).

Nota: el token configurado **no tiene scope `workflow`**, así que no se pueden
pushear archivos en `.github/workflows/`. Por eso se usa Pages por rama (`/docs`)
y no un workflow de Actions. Si en el futuro se quiere CI, añadir el scope
`workflow` al PAT primero.
