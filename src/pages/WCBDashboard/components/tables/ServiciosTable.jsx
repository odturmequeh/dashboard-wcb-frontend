export default function ServiciosTable({ rows }) {
  console.log('='.repeat(80));
  console.log('🎨 FRONTEND - ServiciosTable');
  console.log('='.repeat(80));
  console.log('Tipo de rows:', typeof rows);
  console.log('Es array?:', Array.isArray(rows));
  console.log('Cantidad de filas:', rows?.length);
  console.log('Primera fila completa:', rows?.[0]);
  
  if (rows && rows[0]) {
    console.log('Keys disponibles:', Object.keys(rows[0]));
    console.log('Valores de primera fila:');
    console.log('  - fecha:', rows[0].fecha);
    console.log('  - leads:', rows[0].leads);
    console.log('  - gestion_leads:', rows[0].gestion_leads);
    console.log('  - gestion:', rows[0].gestion);
    console.log('  - ventas_dig:', rows[0].ventas_dig);
    console.log('  - ventas_ins:', rows[0].ventas_ins);
    console.log('  - diferencia:', rows[0].diferencia);
  }
  console.log('='.repeat(80));

  // ✅ Filtrar filas sin fecha
  const validRows = rows?.filter(r => r.fecha && r.fecha.trim() !== '') || [];

  if (validRows.length === 0) {
    return (
      <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 mt-4">
        <p className="text-yellow-700">⚠️ No hay datos para mostrar</p>
      </div>
    );
  }

  // ✅ Calcular totales y promedios
  const totals = {
    fecha: 'TOTAL',
    leads: validRows.reduce((sum, r) => sum + (r.leads || 0), 0),
    gestion_leads: validRows.reduce((sum, r) => sum + (r.gestion_leads || 0), 0),
    digitadas_ot: validRows.reduce((sum, r) => sum + (r.digitadas_ot || 0), 0),
    instaladas_ot: validRows.reduce((sum, r) => sum + (r.instaladas_ot || 0), 0),
    ventas_dig: validRows.reduce((sum, r) => sum + (r.ventas_dig || 0), 0),
    ventas_ins: validRows.reduce((sum, r) => sum + (r.ventas_ins || 0), 0),
    diferencia: validRows.reduce((sum, r) => sum + (r.diferencia || 0), 0),
    
    // Promedios de porcentajes
    gestion: (validRows.reduce((sum, r) => sum + (parseFloat(r.gestion) || 0), 0) / validRows.length).toFixed(2),
    efectividad_ot: (validRows.reduce((sum, r) => sum + (parseFloat(r.efectividad_ot) || 0), 0) / validRows.length).toFixed(2),
    efectividad: (validRows.reduce((sum, r) => sum + (parseFloat(r.efectividad) || 0), 0) / validRows.length).toFixed(2),
  };

  return (
    <div className="bg-white rounded-xl shadow mt-4 overflow-x-auto">
      <table className="min-w-full text-xs">
        <thead className="bg-gray-50 text-gray-600">
          <tr>
            <th className="p-3 text-left">Fecha</th>
            <th className="p-3 text-center">Leads</th>   
            <th className="p-3 text-center">Gestion</th>   
            <th className="p-3 text-center">%Gestion</th>
            <th className="p-3 text-center">Digitadas OT</th> 
            <th className="p-3 text-center">Instaladas OT</th> 
            <th className="p-3 text-center">% Efec OT</th>   
            <th className="p-3 text-center">Ventas Dig</th>  
            <th className="p-3 text-center">Ventas Ins</th>  
            <th className="p-3 text-center">% Efec</th>
            <th className="p-3 text-center">Diferencia</th>
          </tr>
        </thead>
        <tbody>
          {/* ✅ FILA DE TOTALES - PRIMERA POSICIÓN */}
          <tr className="bg-blue-100 text-blue-900 font-bold border-b-2 border-blue-300">
            <td className="p-3 text-left">{totals.fecha}</td>
            <td className="p-3 text-center">{totals.leads.toLocaleString()}</td>
            <td className="p-3 text-center">{totals.gestion_leads.toLocaleString()}</td>
            <td className="p-3 text-center">{totals.gestion}%</td>
            <td className="p-3 text-center">{totals.ventas_dig.toLocaleString()}</td>
            <td className="p-3 text-center">{totals.ventas_ins.toLocaleString()}</td>
            <td className="p-3 text-center">{totals.efectividad_ot}%</td>
            <td className="p-3 text-center">{totals.digitadas_ot.toLocaleString()}</td>
            <td className="p-3 text-center">{totals.instaladas_ot.toLocaleString()}</td>
            
            <td className="p-3 text-center">{totals.efectividad}%</td>
            <td className="p-3 text-center">{totals.diferencia.toLocaleString()}</td>
          </tr>

          {/* ✅ FILAS NORMALES */}
          {validRows.map((r, i) => {
            console.log(`Fila ${i}:`, {
              fecha: r.fecha,
              ventas_dig: r.ventas_dig,
              ventas_ins: r.ventas_ins,
              diferencia: r.diferencia
            });
            
            return (
              <tr key={i} className="border-t hover:bg-gray-50">
                <td className="p-3 text-left font-medium">{r.fecha}</td>
                <td className="p-3 text-center bg-blue-50">{r.leads ?? '---'}</td>
                <td className="p-3 text-center bg-blue-50 ">{r.gestion_leads ?? '---'}</td>
                <td className="p-3 text-center bg-blue-50 border-r border-blue-200">{r.gestion ?? '---'}%</td>
                <td className="p-3 text-center bg-green-50 ">{r.ventas_dig ?? '---'}</td>
                <td className="p-3 text-center bg-green-50 ">{r.ventas_ins ?? '---'}</td>
                <td className="p-3 text-center bg-green-50 border-r border-green-200">{r.efectividad_ot ?? '---'}%</td>
                <td className="p-3 text-center bg-purple-50">{r.digitadas_ot ?? '---'}</td>
                <td className="p-3 text-center bg-purple-50">{r.instaladas_ot ?? '---'}</td>
                <td className="p-3 text-center bg-purple-50 border-r border-purple-200">{r.efectividad ?? '---'}%</td>
                <td className="p-3 text-center bg-yellow-100 text-green-600 font-semibold">
                  {r.diferencia ?? 'N/A'}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}