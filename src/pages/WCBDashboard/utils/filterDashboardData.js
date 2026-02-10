export function filterDashboardData(data, filters) {
  const keysToFilter = [
    "unidad",
    "tab",
    "tipo_lead",
    "canal",
    "segmento",
    "detalle_segmento",
    "base",
    "aliado",
    "canal_trafico",
    "medio",
    "fuente",
  ];

  return data.filter(row => {
    // Filtros por igualdad
    for (const key of keysToFilter) {
      if (filters[key] && row[key] !== filters[key]) {
        return false;
      }
    }

    // Filtros por fecha
    if (filters.desde && row.fecha < filters.desde) return false;
    if (filters.hasta && row.fecha > filters.hasta) return false;

    return true;
  });
}