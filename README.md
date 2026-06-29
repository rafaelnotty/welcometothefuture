# WELCOME TO THE FUTURE

Paquete completo para la fundación de la empresa: documentación corporativa
(identidad, legal, negocio, operación) y sitio web de marketing.

> **Estado:** borrador de trabajo. Los documentos legales son plantillas
> profesionales que **deben ser revisadas por un abogado y un contador en
> Colombia** antes de firmarse o radicarse. No constituyen asesoría legal.

> 📌 **Para retomar el desarrollo:** lee [`CLAUDE.md`](CLAUDE.md) — contiene el
> estado del proyecto, las decisiones tomadas, convenciones y los pasos
> pendientes.

## Estructura

```
.
├── empresa/                 Documentación corporativa
│   ├── 01-identidad/        Marca, manifiesto, propuesta de valor, tono, brand book
│   ├── 02-legal/            Constitución S.A.S., estatutos, checklist de trámites
│   ├── 03-negocio/          Modelo riesgo compartido, pricing, contrato de utilidad compartida
│   └── 04-operacion/        Catálogo de servicios, metodología, plan de negocio
└── docs/                     Sitio web (HTML + CSS + Alpine.js, ES/EN)
```

## Cómo navegar

| Quiero... | Ir a |
|-----------|------|
| Entender la esencia de la marca | [`empresa/01-identidad/manifiesto.md`](empresa/01-identidad/manifiesto.md) |
| Constituir legalmente la empresa | [`empresa/02-legal/checklist-constitucion.md`](empresa/02-legal/checklist-constitucion.md) |
| Entender cómo ganamos dinero | [`empresa/03-negocio/modelo-riesgo-compartido.md`](empresa/03-negocio/modelo-riesgo-compartido.md) |
| Ver qué vendemos | [`empresa/04-operacion/catalogo-servicios.md`](empresa/04-operacion/catalogo-servicios.md) |
| Ver el sitio | abrir [`docs/index.html`](docs/index.html) en el navegador |

## El sitio web

Estático, sin build. Para verlo:

```
cd docs
python -m http.server 8000
```

Luego abrir `http://localhost:8000`.
