import VentasAliadosBaseTable from "./tables/VentasAliadosBaseTable";
import { COLUMNS_SERPRINTER } from "./columnsSerprinter";

export default function VentasTotalesSerprinter({
  digitadas,
  instaladas,
}) {
  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden">
      <div className="bg-red-800 text-white px-4 py-3 font-semibold">
        Ventas Totales de Serprinter
      </div>

      <div className="p-4 space-y-6">
        <VentasAliadosBaseTable
          title="Servicios Digitados"
          columns={COLUMNS_SERPRINTER}  
          rows={digitadas}
        />

        <VentasAliadosBaseTable
          title="Servicios Instalados"
          columns={COLUMNS_SERPRINTER}  
          rows={instaladas}
        />
      </div>
    </div>
  );
}
