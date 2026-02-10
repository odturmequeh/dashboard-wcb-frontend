import { useState, useEffect } from "react";
import UnitSelector from "../components/UnitSelector";
import FiltersPanel from "../components/FiltersPanel";
import KPICards from "../components/KPICards";
import ServiciosTable from "../components/tables/ServiciosTable";
import useDashboardData from "../components/hooks/useDashboardData";

export default function ProduccionDashboard() {
  // 🔹 Sin filtro de unidad por defecto
  const [filters, setFilters] = useState({});

  // 🔹 Filtros aplicados (los que se usan para consultar)
  const [appliedFilters, setAppliedFilters] = useState({});

  // 🔹 Detectar si hay cambios pendientes
  const hasChanges = JSON.stringify(filters) !== JSON.stringify(appliedFilters);

  const [filterOptions, setFilterOptions] = useState({});
  const [filtersLoading, setFiltersLoading] = useState(true);

  // 🔹 Filtros (paralelo, no bloqueante)
  useEffect(() => {
    fetch("/api/dashboard/ventas/filters/")
      .then(res => res.json())
      .then(data => {
        setFilterOptions(data);
        setFiltersLoading(false);
      })
      .catch(err => {
        console.error("Error loading filters:", err);
        setFiltersLoading(false);
      });
  }, []);

  // 🔹 Data principal (usa appliedFilters en lugar de filters)
  const { rows, kpis, loading } = useDashboardData(appliedFilters);

  // 🔹 Handler del botón consultar
  const handleConsultar = () => {
    setAppliedFilters({ ...filters });
  };

  return (
    <div className="space-y-6">

      {/* Unidad */}
      <UnitSelector
        value={filters.unidad || ""} // ✅ Sin valor por defecto
        onChange={(unidad) =>
          setFilters(prev => ({ ...prev, unidad }))
        }
      />

      {/* Filtros */}
      {filtersLoading ? (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="h-10 bg-gray-200 rounded animate-pulse"
            />
          ))}
        </div>
      ) : (
        <FiltersPanel
          filters={filters}
          options={filterOptions}
          onChange={setFilters}
        />
      )}

      {/* 🔹 Botón Consultar */}
      <div className="flex justify-end">
        <button
          onClick={handleConsultar}
          disabled={!hasChanges || loading}
          className={`
            px-6 py-2 rounded-lg font-medium transition-all
            ${hasChanges && !loading
              ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-md hover:shadow-lg'
              : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }
          `}
        >
          {loading ? 'Consultando...' : 'Consultar'}
        </button>
      </div>

      {/* 🔹 Indicador de filtros pendientes */}
      {hasChanges && !loading && (
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3 text-sm text-yellow-800">
          ⚠️ Hay filtros sin aplicar. Haz clic en "Consultar" para actualizar los resultados.
        </div>
      )}

      {/* KPIs */}
      <div className={`transition-opacity ${hasChanges ? 'opacity-40' : 'opacity-100'}`}>
        {loading ? (
          <div className="text-gray-400">Cargando KPIs...</div>
        ) : (
          <KPICards data={kpis} />
        )}
      </div>

      {/* Tabla */}
      <div className={`relative transition-opacity ${hasChanges ? 'opacity-40' : 'opacity-100'}`}>
        {hasChanges && !loading && (
          <div className="absolute inset-0 bg-gray-900 bg-opacity-30 rounded-lg flex items-center justify-center z-10">
            <div className="bg-white px-6 py-3 rounded-lg shadow-lg text-gray-700 font-medium">
              Los datos mostrados no corresponden a los filtros actuales
            </div>
          </div>
        )}
        
        {loading ? (
          <div className="text-center text-gray-500 py-10">
            Cargando datos...
          </div>
        ) : rows.length === 0 ? (
          <div className="text-center text-gray-500 py-10">
            No hay datos para los filtros seleccionados
          </div>
        ) : (
          <ServiciosTable rows={rows} />
        )}
      </div>
    </div>
  );
}