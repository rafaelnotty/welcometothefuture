# Catálogo de Servicios — WELCOME TO THE FUTURE

Siete líneas de servicio, todas construidas a la medida y disponibles bajo
cualquiera de los modelos de cobro (riesgo compartido, suscripción o llave en
mano). Todas comparten la misma promesa: ingeniería de extremo a extremo, sin
vendor lock-in.

---

## 1. Adquisición de Datos e IoT Industrial (IIoT)

**Qué es:** telemetría de extremo a extremo, del sensor al servidor. Sabes qué
pasa en tu operación en tiempo real, esté donde esté.

- **Tecnologías:** ESP32 y familia, sensores industriales, celular (4G/LTE),
  Wi-Fi, **LoRa/LoRaWAN**, fibra óptica, Ethernet industrial.
- **Casos:** monitoreo de plantas, fincas, acueductos, bodegas y maquinaria
  remota; trazabilidad; alertas en tiempo real.
- **Entregable:** red de sensores + gateway + ingestión de datos + dashboard.
- **Para el cliente:** "Tu planta, en tiempo real —aunque esté lejos."

## 2. Inteligencia Artificial en el Borde (Edge Computing)

**Qué es:** procesamiento e inferencia local para decidir en tiempo real, sin
latencia ni dependencia de la nube.

- **Tecnologías:** edge AI en microcontroladores y SBC (OrangePi y similares),
  modelos optimizados, control en lazo cerrado local.
- **Casos:** control autónomo de procesos, decisiones que no pueden esperar a la
  nube, operación garantizada aunque caiga internet.
- **Para el cliente:** "Decisiones en milisegundos, aunque se caiga internet."

## 3. Analítica e IA para Procesos

**Qué es:** convertir los datos en estrategia: mantenimiento predictivo y
optimización autónoma de variables críticas.

- **Casos:** predicción de fallas antes de que ocurran, optimización de consumos
  y setpoints, detección de desviaciones, reportes de gestión.
- **Para el cliente:** "Deja de apagar incendios: anticípalos."

## 4. Videovigilancia Analítica (Visión Artificial)

**Qué es:** cámaras con IA entrenadas para auditar procesos y vigilar variables
de interés, no solo grabar.

- **Casos:** conteo de inventario y producción, detección de anomalías y EPP,
  control de calidad visual, auditoría de procesos, seguridad.
- **Para el cliente:** "Cámaras que entienden lo que ven."

## 5. Sistemas Hidráulicos e Hídricos

**Qué es:** optimización de redes de fluidos y estaciones de bombeo mediante
gemelos digitales y control avanzado.

- **Casos:** acueductos, riego, estaciones de bombeo, redes de distribución;
  reducción de pérdidas y de consumo energético del bombeo.
- **Para el cliente:** "Mueve cada litro al menor costo posible."

## 6. Ingeniería de Sistemas Eléctricos

**Qué es:** automatización de actuadores trifásicos, gestión de potencia y
eficiencia energética, con soporte para energía solar.

- **Casos:** control de motores y cargas trifásicas, gestión y monitoreo de
  energía, integración solar, reducción de factura eléctrica.
- **Para el cliente:** "Controla tu energía. Págale menos a la red."

## 7. Plataformas Web y Dashboards

**Qué es:** interfaces modernas y centralizadas para gestionar toda la operación
en un solo lugar.

- **Tecnologías:** stack web de alto rendimiento; dashboards en tiempo real;
  gestión administrativa y operativa.
- **Casos:** centro de mando único, reportes, M&V del modelo de riesgo
  compartido, acceso multi-sitio.
- **Para el cliente:** "Toda tu operación, en una sola pantalla."

---

## Cómo se combinan

La mayoría de los proyectos integran varias líneas. Ejemplo típico (bombeo):

```
[1] Sensores IIoT en la bomba
        │
        ▼
[2] Edge: control local del variador        [6] Gestión eléctrica trifásica
        │                                            │
        ▼                                            ▼
[3] Analítica: optimización + predictivo ───► [5] Optimización hídrica
        │
        ▼
[7] Dashboard: el cliente ve ahorro en tiempo real (y la M&V del contrato)
```

## Sectores objetivo

PyME industrial · Agroindustria y fincas productivas · Acueductos y sector
hídrico · Comercio y bodegas · Sector público local · Edificaciones y hogar
inteligente de gama media.

Ver: [metodologia-de-trabajo.md](metodologia-de-trabajo.md) ·
[../03-negocio/modelo-riesgo-compartido.md](../03-negocio/modelo-riesgo-compartido.md)
