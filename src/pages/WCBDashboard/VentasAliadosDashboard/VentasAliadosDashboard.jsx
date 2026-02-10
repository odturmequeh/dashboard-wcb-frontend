import { useState } from "react";
import useVentasAliadosData from "./hooks/useVentasAliadosData";

import VentasAliadosFilters from "./components/VentasAliadosFilters";
import VentasTotalesSerprinter from "./components/VentasTotalesSerprinter";
import VentasAliadosBaseTable from "./components/tables/VentasAliadosBaseTable";

export default function VentasAliadosDashboard() {
  const [filters, setFilters] = useState({
    segmentoComercial: "ALL",
    segmentoOperativo: "ALL",
    detalleSeg: "ALL",
    canalTrafico: "ALL",
    medio: "ALL",
  });

  const {
    digitadas,
    instaladas,
    aliados,
    filterOptions,
  } = useVentasAliadosData(filters);

  return (
    <div className="space-y-6">
      <VentasAliadosFilters
        filters={filters}
        options={filterOptions}
        onChange={setFilters}
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <VentasTotalesSerprinter
          digitadas={digitadas}
          instaladas={instaladas}
        />

        <VentasAliadosBaseTable
          title="Ventas Reportadas Aliados"
          rows={aliados}
          columns={[
            { key: "backoffice", label: "Backoffice" },
            { key: "ventas", label: "Ventas", align: "text-right" },
            { key: "servicios", label: "Servicios", align: "text-right" },
          ]}
        />
      </div>
    </div>
  );
}
