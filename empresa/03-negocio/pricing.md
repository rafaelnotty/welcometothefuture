# Política de Precios — WELCOME TO THE FUTURE

> Marco interno para cotizar. Los números son **parámetros de referencia**;
> ajustar por proyecto. Todo en COP salvo indicación.

## Estructura general de una cotización

```
Precio cliente = Costo de entrada (bajo)  +  Ganancia compartida (variable)
                 └── cubre costos directos     └── % de ahorros/beneficios reales
                     de despliegue                 (utilidad principal)
```

## 1. Costo de entrada

Objetivo: ~**5% del costo de una implementación equivalente con fabricante de
gama alta**. Debe, como mínimo, **cubrir costos directos** del despliegue:

| Componente | Qué incluye |
|------------|-------------|
| Hardware/BOM | Microcontroladores (ESP32 y familia), sensores, gabinetes, fuentes, cableado, módulos de comunicación (celular/LoRa/Ethernet) |
| Ingeniería de despliegue | Diseño a medida, firmware, integración, instalación, puesta en marcha |
| Logística | Desplazamientos, viáticos del montaje |
| Margen de seguridad | 10–20% sobre costos directos para imprevistos |

**Regla:** el costo de entrada nunca debe dejar pérdida en el despliegue. Lo
"barato" es frente al gigante, no frente a nuestro costo real.

## 2. Ganancia compartida (parte variable)

Porcentaje sobre el beneficio económico verificable del periodo.

| Tipo de proyecto | Rango sugerido del % | Vigencia típica |
|------------------|----------------------|-----------------|
| Eficiencia energética / hídrica | 20% – 40% del ahorro | 24 – 60 meses |
| Aumento de producción / reducción de mermas | 10% – 25% del beneficio | 24 – 48 meses |
| Mantenimiento predictivo (paradas evitadas) | 15% – 30% | 24 – 36 meses |
| Optimización de procesos (mixto) | 15% – 30% | 24 – 48 meses |

Factores que suben el %: mayor riesgo asumido por nosotros, menor costo de
entrada, mayor inversión propia en hardware.
Factores que lo bajan: cliente paga más CAPEX inicial, beneficio muy grande y
estable, contrato de larga duración.

## 3. Modelos alternativos de cobro

| Modelo | Cuándo | Referencia |
|--------|--------|-----------|
| **Suscripción (monitoreo/dashboard)** | Telemetría + dashboards + soporte | Cuota mensual por sitio/equipo (ej. $X/equipo/mes) |
| **Mantenimiento predictivo SaaS** | Analítica continua | Mensual por activo monitoreado |
| **Llave en mano** | Cliente prefiere pagar todo | Costo total + margen 30–50% |
| **Desarrollo / I+D** | Prototipos, integraciones únicas | Por hora de ingeniería u obra cierta |
| **Consultoría / diagnóstico** | Auditoría inicial, estudio de viabilidad | Tarifa fija o por hora |

## 4. Tarifa de ingeniería (referencia interna)

Definir una **tarifa hora de ingeniería** para cotizar desarrollo y para valorar
el aporte propio en proyectos de riesgo compartido. Diferenciar perfiles:

- Ingeniería senior (firmware/edge/IA): $$$
- Desarrollo software/web: $$
- Instalación/campo: $

> Completar con valores reales según mercado y estructura de costos.

## 5. Ejemplo ilustrativo (eficiencia en bombeo)

- Costo equivalente con fabricante de gama alta: **$100.000.000**.
- **Costo de entrada cliente (5%): $5.000.000** (cubre ESP32, sensores, variador,
  instalación, dashboard).
- Ahorro energético medido: **$4.000.000/mes**.
- **% pactado: 30% → $1.200.000/mes** para WTTF.
- En 24 meses: WTTF recibe ~**$28.800.000** + el costo de entrada; el cliente
  ahorra **$96.000.000** netos en el periodo y queda dueño del sistema.

*Números ilustrativos; cada caso depende de baseline y tarifas reales.*

## 6. Reglas de oro

1. Nunca cotizar la parte variable sin **baseline medido y firmado**.
2. El costo de entrada **siempre** cubre costos directos.
3. Preferir proyectos con **beneficio convertible a COP** de forma clara.
4. Empezar pequeño con clientes nuevos (proyecto piloto) para construir confianza
   y validar el baseline.
5. Documentar todo en el contrato: ver
   [plantilla-contrato-ganancias-compartidas.md](plantilla-contrato-ganancias-compartidas.md).
