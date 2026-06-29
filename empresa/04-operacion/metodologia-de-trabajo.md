# Metodología de Trabajo — WELCOME TO THE FUTURE

Nuestra forma de trabajar es parte de la propuesta de valor: moderna, ágil,
transparente y orientada a resultados medibles. No "entregamos un proyecto y
desaparecemos"; acompañamos la operación a lo largo del tiempo.

## Filosofía operativa

1. **El problema primero.** Diagnóstico antes que catálogo.
2. **Medir para cobrar.** Sin baseline no hay contrato de resultados.
3. **Iterar rápido.** Pilotos pequeños que prueban valor antes de escalar.
4. **Transparencia total.** El cliente ve los mismos datos que nosotros.
5. **Documentar y liberar.** Sin cajas negras: el cliente entiende y es dueño.

## El recorrido del cliente (6 fases)

### Fase 1 — Diagnóstico
Visita y levantamiento del proceso. Identificamos el cuello de botella y las
oportunidades convertibles a dinero. **Entregable:** informe de oportunidades +
estimación de beneficio potencial.

### Fase 2 — Línea base y propuesta
Medimos el desempeño actual (consumos, paradas, mermas, producción) y firmamos la
**línea base**. Diseñamos la solución y proponemos el modelo de cobro adecuado.
**Entregable:** propuesta técnico-económica + baseline firmado.

### Fase 3 — Piloto / Prueba de valor
Implementación acotada y rápida para validar el ahorro real con bajo riesgo.
**Entregable:** piloto funcionando + datos reales de impacto.

### Fase 4 — Despliegue
Construcción a la medida: hardware, firmware, edge, analítica y dashboard.
Instalación, integración y puesta en marcha. **Entregable:** solución operativa +
documentación + capacitación al personal del cliente.

### Fase 5 — Operación y M&V
Monitoreo continuo, mantenimiento y **medición & verificación** del beneficio.
Liquidación periódica de la ganancia compartida con informes transparentes.
**Entregable:** dashboards en vivo + informes de M&V + soporte.

### Fase 6 — Optimización continua
Con los datos acumulados, mejoramos los modelos y buscamos nuevas oportunidades.
La alianza crece. **Entregable:** mejoras iterativas + nuevas fases.

```
Diagnóstico → Baseline → Piloto → Despliegue → Operación+M&V → Optimización ↺
   1            2          3          4              5                6
```

## Cómo construimos (ingeniería)

- **Hardware/firmware:** diseño a la medida sobre ESP32 y familia; firmware
  eficiente en memoria; ESP-IDF/MicroPython según el caso.
- **Edge/SBC:** Linux sobre OrangePi y similares para procesamiento local.
- **Backend:** APIs con FastAPI (Python), async por defecto.
- **Frontend:** stack web de alto rendimiento, bajo bundle, dashboards en tiempo real.
- **Datos:** ingestión de telemetría, almacenamiento y analítica.
- **Comunicaciones:** LoRa, celular, Wi-Fi, Ethernet industrial, fibra según el sitio.

## Principios de calidad

- **Edge-first y resiliente:** la operación no se detiene si cae la nube.
- **Seguridad:** datos del cliente protegidos (Ley 1581/2012); accesos controlados.
- **Mantenibilidad:** código y diseños documentados; el cliente puede auditar.
- **Eficiencia:** soluciones livianas, de bajo consumo y bajo costo operativo.
- **Sin lock-in:** tecnologías abiertas siempre que sea viable.

## Gestión del proyecto

- **Comunicación:** un punto de contacto claro; reportes periódicos.
- **Ágil y por iteraciones:** entregas incrementales, valor temprano.
- **Acuerdos de servicio (SLA):** disponibilidad y tiempos de respuesta pactados.
- **Soporte:** remoto (los equipos son telemetría) + visitas cuando se requiera.
  Un patrón propio: servidor de configuración embebido (SoftAP + web) para
  configurar y diagnosticar equipos en campo sin recompilar ni app móvil.

Ver: [catalogo-servicios.md](catalogo-servicios.md) ·
[plan-de-negocio.md](plan-de-negocio.md)
