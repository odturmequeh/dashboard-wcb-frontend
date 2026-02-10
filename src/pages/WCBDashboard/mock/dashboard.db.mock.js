const dashboardDB = [
  {
    fecha: "2025-01-01",
    unidad: "Hogar",
    tab: "Servicios",

    // DIMENSIONES
    tipo_lead: "BO",
    canal: "Web",
    segmento: "Masivo",
    detalle_segmento: "Residencial",
    base: "Base A",
    aliado: "Claro",
    canal_trafico: "Paid",
    medio: "Google",
    fuente: "Search",

    // MÉTRICAS
    leads: 238,
    gestion: 227,
    digitadas_ot: 238,
    instaladas_ot: 227,
    ventas_dig: 333,
    ventas_ins: 336,
  },

  {
    fecha: "2025-01-01",
    unidad: "Hogar",
    tab: "Servicios",

    tipo_lead: "BO",
    canal: "Call Center",
    segmento: "Masivo",
    detalle_segmento: "Residencial",
    base: "Base B",
    aliado: "Claro",
    canal_trafico: "Orgánico",
    medio: "Direct",
    fuente: "Direct",

    leads: 180,
    gestion: 165,
    digitadas_ot: 180,
    instaladas_ot: 165,
    ventas_dig: 210,
    ventas_ins: 205,
  },

  {
    fecha: "2025-01-02",
    unidad: "Hogar",
    tab: "Servicios",

    tipo_lead: "AG",
    canal: "Web",
    segmento: "Pyme",
    detalle_segmento: "Negocio",
    base: "Base A",
    aliado: "Aliado X",
    canal_trafico: "Paid",
    medio: "Facebook",
    fuente: "Social",

    leads: 241,
    gestion: 232,
    digitadas_ot: 241,
    instaladas_ot: 232,
    ventas_dig: 318,
    ventas_ins: 326,
  },

  // 👉 replicas esto con combinaciones distintas
];

export default dashboardDB;