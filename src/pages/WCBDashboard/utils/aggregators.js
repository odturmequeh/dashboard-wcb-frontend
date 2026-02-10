export function buildKPIs(rows) {
  const sum = (k) => rows.reduce((a, b) => a + (b[k] || 0), 0);

  const leads = sum("leads");
  const gestion_leads = sum("gestion_leads");
  const digitadas_ot = sum("digitadas_ot");
  const ventas_dig = sum("ventas_dig");
  const ventas_ins = sum("ventas_ins");

  // Calcular % de gestión
  const gestion = leads > 0 
    ? ((gestion_leads / leads) * 100).toFixed(1) 
    : "0.0";

  // Calcular % de efectividad
  const efectividad = gestion_leads > 0 
    ? ((ventas_dig / gestion_leads) * 100).toFixed(1) 
    : "0.0";

  console.log('📊 KPIs calculados:', {
    leads,
    gestion_leads,
    gestion,
    digitadas_ot,
    ventas_dig,
    ventas_ins,
    efectividad
  });

  return {
    leads,
    gestion: `${gestion}%`,        // ✅ Retornar con %
    ventas_dig,
    ventas_ins,
    efectividad,                   // Sin % aquí
  };
}
export function buildServiciosTable(data) {
  // ✅ Solo agregar la diferencia, el resto ya viene calculado
  return data.map(r => ({
    ...r,
    diferencia: (r.ventas_dig || 0) - (r.digitadas_ot || 0),
  }));
}

