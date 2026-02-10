import { useState, useEffect } from "react";
import { buildKPIs, buildServiciosTable } from "../../utils/aggregators";
import { buildFilterOptions } from "../../utils/buildFilterOptions";
import { FILTERS_CONFIG } from "../config/filters.config";

export default function useDashboardData(filters) {
  const [rows, setRows] = useState([]);
  const [kpis, setKpis] = useState({});
  const [filterOptions, setFilterOptions] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    const cleanFilters = { ...filters };
    delete cleanFilters.tab;

    const query = new URLSearchParams(cleanFilters).toString();

    fetch(`/api/dashboard/ventas/?${query}`)
      .then(async res => {
        if (!res.ok) {
          const text = await res.text();
          throw new Error(`HTTP ${res.status}: ${text}`);
        }
        return res.json();
      })
      .then(data => {
        console.log('='.repeat(80));
        console.log('📥 DATOS DEL BACKEND (raw):');
        console.log('Total filas:', data.length);
        console.log('Primera fila:', data[0]);
        console.log('Campos disponibles:', data[0] ? Object.keys(data[0]) : 'Sin datos');
        
        // Verificar campos específicos
        if (data[0]) {
          console.log('ventas_dig:', data[0].ventas_dig);
          console.log('ventas_ins:', data[0].ventas_ins);
          console.log('digitadas_ot:', data[0].digitadas_ot);
          console.log('instaladas_ot:', data[0].instaladas_ot);
        }
        
        const processedRows = buildServiciosTable(data);
        console.log('📊 DESPUÉS DE buildServiciosTable:');
        console.log('Primera fila procesada:', processedRows[0]);
        if (processedRows[0]) {
          console.log('ventas_dig:', processedRows[0].ventas_dig);
          console.log('ventas_ins:', processedRows[0].ventas_ins);
        }
        
        const calculatedKpis = buildKPIs(data);
        console.log('📈 KPIs calculados:', calculatedKpis);
        console.log('='.repeat(80));
        
        setKpis(calculatedKpis);
        setRows(processedRows);
        setFilterOptions(buildFilterOptions(data, FILTERS_CONFIG));
        setLoading(false);
      })
      .catch(err => {
        console.error("Error fetching dashboard data:", err);
        setLoading(false);
      });
  }, [JSON.stringify(filters)]); // ✅ Cambiado para evitar loops infinitos

  return { rows, kpis, filterOptions, loading };
}