/* WELCOME TO THE FUTURE — i18n, telemetría viva, reveal on scroll */

const I18N = {
  es: {
    "nav.philosophy": "Filosofía",
    "nav.services": "Servicios",
    "nav.model": "Modelo",
    "nav.method": "Cómo trabajamos",
    "nav.portfolio": "Portafolio",
    "nav.cta": "Hablemos",

    "hero.status": "SISTEMA EN LÍNEA",
    "hero.title_a": "Bienvenido al futuro de tu ",
    "hero.title_b": "operación",
    "hero.lead": "Construimos el hardware, el software y la lógica que convierten el problema que hoy frena tu productividad en una ventaja medible. A tu medida, sin candados de proveedor y pagado con resultados.",
    "hero.cta": "Hablemos de tu proceso",
    "hero.cta2": "Ver qué resolvemos",

    "tel.bar": "TELEMETRÍA · DEMO EN VIVO",
    "tel.ch1": "TEMPERATURA",
    "tel.ch2": "PRESIÓN",
    "tel.ch3": "POTENCIA",
    "tel.ch4": "AHORRO",

    "philo.eyebrow": "LA IDEA",
    "philo.big_a": "Democratizamos la automatización. ",
    "philo.big_hl": "Rompemos la dependencia",
    "philo.big_b": " de las grandes marcas.",
    "philo.lead": "Durante décadas, automatizar fue un privilegio: licencias, hardware propietario y candados de proveedor. Nosotros construimos tecnología abierta, a la medida, por una fracción del costo — y solo ganamos cuando tú ganas.",
    "philo.c1_t": "Sin cajas negras",
    "philo.c1_p": "Tú eres dueño de tu operación, de tus datos y de tu futuro. Tecnología abierta y documentada.",
    "philo.c2_t": "A tu medida",
    "philo.c2_p": "No configuramos un producto cerrado: diseñamos hardware, firmware y software para tu proceso real.",
    "philo.c3_t": "Riesgo compartido",
    "philo.c3_p": "Costo de entrada mínimo y nuestra ganancia atada a los ahorros reales. Si tú no ganas, no cobramos.",

    "svc.eyebrow": "QUÉ RESOLVEMOS",
    "svc.title": "Siete líneas de ingeniería, una sola promesa",
    "svc.1_t": "Adquisición de Datos e IoT Industrial",
    "svc.1_p": "Telemetría de extremo a extremo, del sensor al servidor. Tu planta en tiempo real, esté donde esté.",
    "svc.1_tag": "Celular · Wi-Fi · LoRa · Ethernet",
    "svc.2_t": "IA en el Borde (Edge Computing)",
    "svc.2_p": "Decisiones locales en tiempo real, sin latencia ni dependencia de la nube. Opera aunque caiga internet.",
    "svc.2_tag": "Edge AI · Tiempo real",
    "svc.3_t": "Analítica e IA para Procesos",
    "svc.3_p": "Mantenimiento predictivo y optimización autónoma de variables críticas. Anticipa, no apagues incendios.",
    "svc.3_tag": "Predictivo · Optimización",
    "svc.4_t": "Videovigilancia Analítica",
    "svc.4_p": "Cámaras con IA que auditan procesos, cuentan inventarios y detectan anomalías. Cámaras que entienden.",
    "svc.4_tag": "Visión artificial",
    "svc.5_t": "Sistemas Hidráulicos e Hídricos",
    "svc.5_p": "Optimización de redes de fluidos y estaciones de bombeo con gemelos digitales y control avanzado.",
    "svc.5_tag": "Bombeo · Acueductos",
    "svc.6_t": "Ingeniería de Sistemas Eléctricos",
    "svc.6_p": "Automatización trifásica, gestión de potencia y eficiencia energética con soporte para energía solar.",
    "svc.6_tag": "Trifásico · Solar",
    "svc.7_t": "Plataformas Web y Dashboards",
    "svc.7_p": "Interfaces modernas y centralizadas: toda tu operación, en una sola pantalla.",
    "svc.7_tag": "Dashboards en vivo",

    "model.eyebrow": "EL MODELO",
    "model.title": "No vendemos cajas negras. Construimos alianzas.",
    "model.entry_t": "Costo de entrada",
    "model.entry_p": "Instalación e integración por cerca del 5% de lo que cobraría un fabricante de gama alta. Que el costo nunca sea la barrera.",
    "model.gain_stat": "%",
    "model.gain_t": "Ganancia compartida",
    "model.gain_p": "Nuestra utilidad es un porcentaje de los ahorros y beneficios reales que generamos. Incentivos 100% alineados.",
    "model.formula_a": "Si tú no ahorras,",
    "model.formula_b": " nosotros no ganamos.",

    "method.eyebrow": "CÓMO TRABAJAMOS",
    "method.title": "Del diagnóstico al ahorro medible",
    "method.1_t": "Diagnóstico", "method.1_p": "Visitamos tu proceso y encontramos el cuello de botella convertible en dinero.",
    "method.2_t": "Línea base", "method.2_p": "Medimos y firmamos tu desempeño actual: la referencia para calcular el ahorro.",
    "method.3_t": "Piloto", "method.3_p": "Implementación acotada y rápida que prueba el valor con bajo riesgo.",
    "method.4_t": "Despliegue", "method.4_p": "Hardware, firmware, edge, analítica y dashboard a la medida, instalados y en marcha.",
    "method.5_t": "Operación y M&V", "method.5_p": "Monitoreo, soporte y verificación transparente del beneficio. Liquidación periódica.",
    "method.6_t": "Optimización", "method.6_p": "Con los datos, mejoramos y abrimos nuevas oportunidades. La alianza crece.",

    "port.eyebrow": "PORTAFOLIO · I+D PROPIO",
    "port.title": "Esto no es una promesa: ya está construido",
    "port.lead": "WTTF no arranca de cero. Estos son desarrollos propios de I+D — la misma ingeniería, el mismo estándar y las mismas manos que van a entrar a tu operación.",
    "port.1_s": "I+D EN CAMPO",
    "port.1_t": "HidroTwin — Gemelo digital de redes de agua",
    "port.1_p": "Plataforma integral creada desde cero: solver hidráulico de red por nodos, análisis de bombas en paralelo, motor analítico SCADA y nodos IoT propios ESP32-C6 con telemetría celular LTE. Del modelo matemático al hardware instalado.",
    "port.1_tag": "Solver hidráulico",
    "port.2_s": "PATRÓN PROBADO",
    "port.2_t": "Configuración en campo, sin recompilar",
    "port.2_p": "El propio equipo levanta su red Wi-Fi y sirve un panel de configuración: el técnico se conecta desde el celular, ajusta parámetros, corre diagnósticos en vivo y reinicia. Sin apps, sin cables, sin tocar el código.",
    "port.2_tag1": "Servidor web embebido",
    "port.2_tag2": "Diagnóstico en vivo",
    "port.3_s": "VALIDADO EN HARDWARE",
    "port.3_t": "Firmware que sobrevive al mundo real",
    "port.3_p": "Firmware a la medida en C y MicroPython: aprovisionamiento en flash, criba de calidad de lotes de hardware y depuración a nivel de radio. Cuando una placa de bajo costo falla, encontramos el porqué — y lo resolvemos en firmware.",
    "port.3_tag": "QA de hardware",
    "port.4_s": "OPERATIVO",
    "port.4_t": "Del borde a la pantalla",
    "port.4_p": "Gateways en Linux embebido (OrangePi), backends asíncronos en Python (FastAPI) y dashboards e informes autocontenidos que funcionan hasta sin internet. Este mismo sitio es la muestra: sin frameworks pesados, carga instantánea.",
    "port.5_s": "I+D ACTIVO",
    "port.5_t": "Edge AI y visión artificial",
    "port.5_p": "Clasificación e inferencia en tiempo real corriendo localmente en SBC ARM (OrangePi 5 Pro, Jetson): modelos entrenados con Keras/TensorFlow y desplegados optimizados sobre Linux. La base de las cámaras que entienden lo que ven.",
    "port.6_s": "FABRICADO",
    "port.6_t": "Hardware completo, de la placa a la carcasa",
    "port.6_p": "Dispositivos IoT terminados, no prototipos sueltos: electrónica, firmware, conectividad celular y carcasa en CAD paramétrico (FreeCAD + Python) impresa en 3D, con pasacables y slots de antena, lista para instalarse en campo.",
    "port.6_tag1": "Impresión 3D",
    "port.6_tag2": "Diseño paramétrico",
    "port.stack": "Python · FastAPI · TensorFlow/Keras · OpenCV · C/C++ (ESP-IDF) · MicroPython · ESP32 S2/S3/C3/C6 · LTE 4G · LoRa · ESP-NOW · Linux embebido (OrangePi/Jetson) · SCADA (Wonderware) · IEC 61850 · MODBUS · Docker · GCP · FreeCAD + impresión 3D",
    "port.founder_eyebrow": "QUIÉN ESTÁ DETRÁS",
    "port.founder_t": "De la subestación al firmware, una sola cadena",
    "port.founder_p": "WTTF nace de la trayectoria de Rafael Rincón Villamizar: ingeniero eléctrico y de telecomunicaciones, magíster en ingeniería (IA, datos y control inteligente) y 15 años liderando infraestructura crítica de agua, energía y vialidad — del diseño de subestaciones AT/MT y el SCADA de una planta de potabilización, al firmware del sensor y el dashboard analítico. Los ingenieros OT no suelen programar; los developers no han visto una subestación. Aquí ambos mundos operan en unas mismas manos: por eso podemos prometer cero cajas negras.",
    "port.f1_l": "años en infraestructura crítica",
    "port.f2_l": "de la subestación al software",
    "port.f3_l": "IA, datos y control inteligente",
    "port.f4_l": "países con proyectos ejecutados",
    "port.cv_btn": "Ver CV completo",

    "cta.title": "Piensa en ese problema que hoy te frena. Eso es lo que resolvemos.",
    "cta.lead": "Cuéntanos tu proceso y diseñamos una propuesta a tu medida, con costo de entrada mínimo y pago por resultados.",
    "cta.btn": "Hablemos de tu proceso",
    "cta.contact": "Escríbenos:",

    "footer.tag": "Democratizando la automatización industrial.",
    "footer.disclaimer": "Sitio de demostración · Empresa en constitución (S.A.S.)"
  },
  en: {
    "nav.philosophy": "Philosophy",
    "nav.services": "Services",
    "nav.model": "Model",
    "nav.method": "How we work",
    "nav.portfolio": "Portfolio",
    "nav.cta": "Let's talk",

    "hero.status": "SYSTEM ONLINE",
    "hero.title_a": "Welcome to the future of your ",
    "hero.title_b": "operation",
    "hero.lead": "We build the hardware, software and logic that turn the problem slowing you down today into a measurable advantage. Custom-built, no vendor lock-in, and paid for with results.",
    "hero.cta": "Let's talk about your process",
    "hero.cta2": "See what we solve",

    "tel.bar": "TELEMETRY · LIVE DEMO",
    "tel.ch1": "TEMPERATURE",
    "tel.ch2": "PRESSURE",
    "tel.ch3": "POWER",
    "tel.ch4": "SAVINGS",

    "philo.eyebrow": "THE IDEA",
    "philo.big_a": "We democratize automation. ",
    "philo.big_hl": "We break the dependency",
    "philo.big_b": " on the big vendors.",
    "philo.lead": "For decades, automation was a privilege: licenses, proprietary hardware and vendor lock-in. We build open, custom technology for a fraction of the cost — and we only win when you win.",
    "philo.c1_t": "No black boxes",
    "philo.c1_p": "You own your operation, your data and your future. Open, documented technology.",
    "philo.c2_t": "Built for you",
    "philo.c2_p": "We don't configure a closed product: we design hardware, firmware and software for your real process.",
    "philo.c3_t": "Shared risk",
    "philo.c3_p": "Minimal entry cost and our profit tied to real savings. If you don't win, we don't charge.",

    "svc.eyebrow": "WHAT WE SOLVE",
    "svc.title": "Seven engineering lines, one promise",
    "svc.1_t": "Data Acquisition & Industrial IoT",
    "svc.1_p": "End-to-end telemetry, from sensor to server. Your plant in real time, wherever it is.",
    "svc.1_tag": "Cellular · Wi-Fi · LoRa · Ethernet",
    "svc.2_t": "Edge AI (Edge Computing)",
    "svc.2_p": "Local real-time decisions, no latency, no cloud dependency. Keeps running even if the internet goes down.",
    "svc.2_tag": "Edge AI · Real time",
    "svc.3_t": "Analytics & AI for Processes",
    "svc.3_p": "Predictive maintenance and autonomous optimization of critical variables. Anticipate, don't firefight.",
    "svc.3_tag": "Predictive · Optimization",
    "svc.4_t": "Analytic Video Surveillance",
    "svc.4_p": "AI cameras that audit processes, count inventory and detect anomalies. Cameras that understand.",
    "svc.4_tag": "Computer vision",
    "svc.5_t": "Hydraulic & Water Systems",
    "svc.5_p": "Optimization of fluid networks and pumping stations with digital twins and advanced control.",
    "svc.5_tag": "Pumping · Water networks",
    "svc.6_t": "Electrical Systems Engineering",
    "svc.6_p": "Three-phase automation, power management and energy efficiency with solar support.",
    "svc.6_tag": "Three-phase · Solar",
    "svc.7_t": "Web Platforms & Dashboards",
    "svc.7_p": "Modern, centralized interfaces: your whole operation on a single screen.",
    "svc.7_tag": "Live dashboards",

    "model.eyebrow": "THE MODEL",
    "model.title": "We don't sell black boxes. We build alliances.",
    "model.entry_t": "Entry cost",
    "model.entry_p": "Installation and integration for about 5% of what a high-end manufacturer would charge. So cost is never the barrier.",
    "model.gain_stat": "%",
    "model.gain_t": "Shared gains",
    "model.gain_p": "Our profit is a share of the real savings and benefits we generate. Incentives 100% aligned.",
    "model.formula_a": "If you don't save,",
    "model.formula_b": " we don't earn.",

    "method.eyebrow": "HOW WE WORK",
    "method.title": "From diagnosis to measurable savings",
    "method.1_t": "Diagnosis", "method.1_p": "We visit your process and find the bottleneck that converts into money.",
    "method.2_t": "Baseline", "method.2_p": "We measure and sign off your current performance: the reference to calculate savings.",
    "method.3_t": "Pilot", "method.3_p": "A focused, fast deployment that proves value at low risk.",
    "method.4_t": "Rollout", "method.4_p": "Custom hardware, firmware, edge, analytics and dashboard, installed and running.",
    "method.5_t": "Operation & M&V", "method.5_p": "Monitoring, support and transparent verification of the benefit. Periodic settlement.",
    "method.6_t": "Optimization", "method.6_p": "With the data, we improve and open new opportunities. The alliance grows.",

    "port.eyebrow": "PORTFOLIO · IN-HOUSE R&D",
    "port.title": "Not a promise: it's already built",
    "port.lead": "WTTF doesn't start from scratch. These are our own R&D builds — the same engineering, the same standard and the same hands that will walk into your operation.",
    "port.1_s": "FIELD R&D",
    "port.1_t": "HidroTwin — Digital twin for water networks",
    "port.1_p": "A full platform built from scratch: node-based hydraulic network solver, parallel-pump analysis, an analytic SCADA engine and our own ESP32-C6 IoT nodes with cellular LTE telemetry. From the math model to the hardware in the field.",
    "port.1_tag": "Hydraulic solver",
    "port.2_s": "PROVEN PATTERN",
    "port.2_t": "Field configuration, no recompiling",
    "port.2_p": "The device brings up its own Wi-Fi network and serves a configuration panel: the technician connects from a phone, tunes parameters, runs live diagnostics and reboots. No apps, no cables, no code changes.",
    "port.2_tag1": "Embedded web server",
    "port.2_tag2": "Live diagnostics",
    "port.3_s": "HARDWARE-VALIDATED",
    "port.3_t": "Firmware that survives the real world",
    "port.3_p": "Custom firmware in C and MicroPython: flash provisioning, quality screening of hardware batches and radio-level debugging. When a low-cost board fails, we find out why — and fix it in firmware.",
    "port.3_tag": "Hardware QA",
    "port.4_s": "OPERATIONAL",
    "port.4_t": "From the edge to the screen",
    "port.4_p": "Embedded Linux gateways (OrangePi), asynchronous Python backends (FastAPI) and self-contained dashboards and reports that work even without internet. This very site is the proof: no heavy frameworks, instant load.",
    "port.5_s": "ACTIVE R&D",
    "port.5_t": "Edge AI & computer vision",
    "port.5_p": "Real-time classification and inference running locally on ARM SBCs (OrangePi 5 Pro, Jetson): models trained with Keras/TensorFlow and deployed optimized on Linux. The foundation of cameras that understand what they see.",
    "port.6_s": "FABRICATED",
    "port.6_t": "Complete hardware, from board to enclosure",
    "port.6_p": "Finished IoT devices, not loose prototypes: electronics, firmware, cellular connectivity and a parametric-CAD enclosure (FreeCAD + Python) 3D-printed with cable glands and antenna slots, ready to install in the field.",
    "port.6_tag1": "3D printing",
    "port.6_tag2": "Parametric design",
    "port.stack": "Python · FastAPI · TensorFlow/Keras · OpenCV · C/C++ (ESP-IDF) · MicroPython · ESP32 S2/S3/C3/C6 · 4G LTE · LoRa · ESP-NOW · Embedded Linux (OrangePi/Jetson) · SCADA (Wonderware) · IEC 61850 · MODBUS · Docker · GCP · FreeCAD + 3D printing",
    "port.founder_eyebrow": "WHO'S BEHIND IT",
    "port.founder_t": "From the substation to the firmware, one single chain",
    "port.founder_p": "WTTF is born from the track record of Rafael Rincón Villamizar: electrical & telecommunications engineer, MSc in engineering (AI, data and intelligent control) and 15 years leading critical water, energy and road infrastructure — from HV/MV substation design and the SCADA of a water treatment plant, to the sensor's firmware and the analytics dashboard. OT engineers rarely code; developers have rarely seen a substation. Here both worlds run in the same hands: that's why we can promise zero black boxes.",
    "port.f1_l": "years in critical infrastructure",
    "port.f2_l": "from substation to software",
    "port.f3_l": "AI, data & intelligent control",
    "port.f4_l": "countries with delivered projects",
    "port.cv_btn": "View full CV",

    "cta.title": "Think about the problem holding you back today. That's what we solve.",
    "cta.lead": "Tell us about your process and we'll design a custom proposal — minimal entry cost, paid for with results.",
    "cta.btn": "Let's talk about your process",
    "cta.contact": "Write to us:",

    "footer.tag": "Democratizing industrial automation.",
    "footer.disclaimer": "Demo site · Company being incorporated (S.A.S.)"
  }
};

document.addEventListener("alpine:init", () => {
  Alpine.store("i18n", {
    lang: (navigator.language || "es").toLowerCase().startsWith("en") ? "en" : "es",
    set(l) { this.lang = l; document.documentElement.lang = l; },
    t(key) { return (I18N[this.lang] && I18N[this.lang][key]) || I18N.es[key] || key; }
  });
  document.documentElement.lang = Alpine.store("i18n").lang;
});

/* ---------- Live telemetry canvas (interactiva) ----------
   Con prefers-reduced-motion NO hay animación continua, pero el panel sigue
   vivo: responde al puntero (cursor de osciloscopio) y al clic (pulso). */
function initTelemetry() {
  const canvas = document.getElementById("signal");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const waves = [
    { color: "#FFB23E", amp: 0.22, freq: 1.4, speed: 0.6, phase: 0, width: 2 },
    { color: "#3DD6D0", amp: 0.16, freq: 2.6, speed: -0.9, phase: 1.5, width: 1.5 },
    { color: "#4ED98B", amp: 0.09, freq: 4.1, speed: 1.3, phase: 3.0, width: 1 }
  ];

  let pointer = null;   // posición del cursor sobre el canvas (px CSS)
  let energy = 0;       // pulso al hacer clic, decae en el loop
  let lastT = 0;

  function resize() {
    const dpr = window.devicePixelRatio || 1;
    const r = canvas.getBoundingClientRect();
    canvas.width = r.width * dpr;
    canvas.height = r.height * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    draw(lastT);
  }

  function waveY(wv, nx, t, w, h) {
    let amp = wv.amp * (0.6 + 0.4 * Math.sin(nx * Math.PI * 2 + t * 0.5));
    if (pointer) {
      const d = (nx * w - pointer.x) / (w * 0.09);
      amp *= 1 + 1.2 * Math.exp(-d * d);
    }
    amp *= 1 + energy;
    return h / 2 + Math.sin(nx * Math.PI * 2 * wv.freq + wv.phase + t * wv.speed) * h * amp;
  }

  function draw(t) {
    lastT = t;
    const w = canvas.clientWidth, h = canvas.clientHeight;
    ctx.clearRect(0, 0, w, h);
    waves.forEach(wv => {
      ctx.beginPath();
      ctx.lineWidth = wv.width;
      ctx.strokeStyle = wv.color;
      ctx.globalAlpha = 0.9;
      ctx.shadowColor = wv.color;
      ctx.shadowBlur = 8;
      for (let x = 0; x <= w; x += 3) {
        const y = waveY(wv, x / w, t, w, h);
        x === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
      }
      ctx.stroke();
    });
    ctx.globalAlpha = 1; ctx.shadowBlur = 0;

    if (pointer) {
      ctx.strokeStyle = "rgba(232,236,241,0.35)";
      ctx.lineWidth = 1;
      ctx.setLineDash([4, 4]);
      ctx.beginPath(); ctx.moveTo(pointer.x, 0); ctx.lineTo(pointer.x, h); ctx.stroke();
      ctx.setLineDash([]);
      const nx = pointer.x / w;
      waves.forEach(wv => {
        ctx.beginPath();
        ctx.fillStyle = wv.color;
        ctx.arc(pointer.x, waveY(wv, nx, t, w, h), 3.5, 0, Math.PI * 2);
        ctx.fill();
      });
      ctx.font = "11px 'JetBrains Mono', monospace";
      ctx.fillStyle = "rgba(232,236,241,0.75)";
      const label = "t+" + (nx * 10).toFixed(2) + " s";
      ctx.fillText(label, pointer.x + 70 > w ? pointer.x - 62 : pointer.x + 8, 14);
    }
  }

  canvas.addEventListener("pointermove", e => {
    const r = canvas.getBoundingClientRect();
    pointer = { x: e.clientX - r.left, y: e.clientY - r.top };
    if (reduce) draw(lastT);
  });
  canvas.addEventListener("pointerleave", () => { pointer = null; if (reduce) draw(lastT); });
  canvas.addEventListener("pointerdown", () => {
    energy = 0.9;
    if (reduce) { draw(lastT); setTimeout(() => { energy = 0; draw(lastT); }, 350); }
  });

  resize();
  window.addEventListener("resize", resize);

  if (reduce) return;   // sin loop continuo: solo redibuja ante interacción
  let start = null;
  function loop(ts) {
    if (!start) start = ts;
    energy *= 0.94;
    if (energy < 0.01) energy = 0;
    draw((ts - start) / 1000);
    requestAnimationFrame(loop);
  }
  requestAnimationFrame(loop);
}

/* ---------- Rolling channel readouts ---------- */
function initChannels() {
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const set = (id, v) => { const el = document.getElementById(id); if (el) el.textContent = v; };
  const rnd = (a, b, d = 1) => (a + Math.random() * (b - a)).toFixed(d);
  function tick() {
    set("ch-temp", rnd(58, 64, 1));
    set("ch-pres", rnd(3.8, 4.4, 2));
    set("ch-pow", rnd(780, 840, 0));
    set("ch-save", rnd(18, 27, 1));
  }
  tick();
  // cambio discreto de texto, no es animación: con reduced-motion solo baja el ritmo
  setInterval(tick, reduce ? 6000 : 2200);
}

/* ---------- Reveal on scroll (escalonado) ---------- */
function initReveal() {
  const els = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window)) { els.forEach(e => e.classList.add("in")); return; }
  const io = new IntersectionObserver((entries) => {
    let i = 0;
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.style.transitionDelay = (i++ * 70) + "ms";
        e.target.addEventListener("transitionend", () => { e.target.style.transitionDelay = ""; }, { once: true });
        e.target.classList.add("in");
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });
  els.forEach(e => io.observe(e));
}

/* ---------- Efectos de scroll: barra de progreso, parallax, nav activo ---------- */
function initScrollFx() {
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const bar = document.createElement("div");
  bar.className = "scroll-progress";
  bar.setAttribute("aria-hidden", "true");
  document.body.appendChild(bar);

  const tel = document.querySelector(".telemetry");
  let raf = null;
  function paint() {
    raf = null;
    const max = document.documentElement.scrollHeight - window.innerHeight;
    bar.style.transform = "scaleX(" + (max > 0 ? window.scrollY / max : 0) + ")";
    if (tel && !reduce) {
      tel.style.transform = "translateY(" + Math.min(window.scrollY * 0.06, 40) + "px)";
    }
  }
  window.addEventListener("scroll", () => { if (!raf) raf = requestAnimationFrame(paint); }, { passive: true });
  paint();

  // resaltar en el nav la sección visible
  const links = [...document.querySelectorAll(".nav-links a.link")];
  const map = new Map();
  links.forEach(a => {
    const sec = document.querySelector(a.getAttribute("href"));
    if (sec) map.set(sec, a);
  });
  if ("IntersectionObserver" in window && map.size) {
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          links.forEach(l => l.classList.remove("active"));
          map.get(e.target).classList.add("active");
        }
      });
    }, { rootMargin: "-40% 0px -55% 0px" });
    map.forEach((_, sec) => io.observe(sec));
  }
}

document.addEventListener("DOMContentLoaded", () => {
  initTelemetry();
  initChannels();
  initReveal();
  initScrollFx();
});
