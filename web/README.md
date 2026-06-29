# Sitio Web — WELCOME TO THE FUTURE

Landing bilingüe (ES/EN), estática, sin build. Dirección estética **"Sala de
Control"** (ver [`../empresa/01-identidad/brand-book.md`](../empresa/01-identidad/brand-book.md)).

## Stack

- HTML + CSS puro (variables/tokens de marca).
- **Alpine.js** (CDN) para i18n y reactividad mínima.
- **Canvas** vanilla para la "señal viva" del héroe.
- Sin dependencias de build, sin node_modules.

## Ejecutar localmente

```
cd web
python -m http.server 8000
```

Abrir `http://localhost:8000`.

## Estructura

```
web/
├── index.html
└── assets/
    ├── css/styles.css      tokens + estilos
    ├── js/app.js           i18n (ES/EN), telemetría, reveal on scroll
    └── img/                (vacío; favicon/logo a futuro)
```

## Internacionalización

Todos los textos viven en el objeto `I18N` en `assets/js/app.js` (`es` / `en`).
El idioma se detecta del navegador y se cambia con el toggle ES/EN. Para editar
contenido, modificar las cadenas en ese objeto.

## Accesibilidad y rendimiento

- Respeta `prefers-reduced-motion` (congela animaciones).
- Contraste AA en texto principal.
- Carga mínima: una sola hoja CSS + un JS + Alpine desde CDN.

## Pendientes / siguientes pasos

- [ ] Logo y favicon definitivos (monograma `WTTF ●`).
- [ ] Formulario de contacto real (hoy abre el cliente de correo).
- [ ] Casos de éxito cuando existan.
- [ ] Self-host de fuentes y Alpine para no depender de CDN (opcional).
- [ ] Meta Open Graph / imagen para compartir.
