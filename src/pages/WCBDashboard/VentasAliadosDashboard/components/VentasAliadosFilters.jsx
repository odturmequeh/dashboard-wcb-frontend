export default function VentasAliadosFilters({
  filters,
  options = {},
  onChange,
}) {
  return (
    <div className="bg-white rounded-lg shadow-sm p-4 grid grid-cols-2 md:grid-cols-5 gap-4">
      <Filter
        label="Segmento Comercial"
        value={filters.segmentoComercial}
        options={options.segmentoComercial}
        onChange={(v) =>
          onChange({ ...filters, segmentoComercial: v })
        }
      />

      <Filter
        label="Segmento Operativo"
        value={filters.segmentoOperativo}
        options={options.segmentoOperativo}
        onChange={(v) =>
          onChange({ ...filters, segmentoOperativo: v })
        }
      />

      <Filter
        label="Detalle Seg"
        value={filters.detalleSeg}
        options={options.detalleSeg}
        onChange={(v) =>
          onChange({ ...filters, detalleSeg: v })
        }
      />

      <Filter
        label="Canal Tráfico"
        value={filters.canalTrafico}
        options={options.canalTrafico}
        onChange={(v) =>
          onChange({ ...filters, canalTrafico: v })
        }
      />

      <Filter
        label="Medio"
        value={filters.medio}
        options={options.medio}
        onChange={(v) =>
          onChange({ ...filters, medio: v })
        }
      />
    </div>
  );
}

function Filter({ label, value, options = [], onChange }) {
  return (
    <div>
      <label className="block text-xs font-semibold text-gray-600 mb-1">
        {label}
      </label>
      <select
        className="w-full border rounded px-3 py-2 text-sm"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        <option value="ALL">Todos</option>
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </div>
  );
}
