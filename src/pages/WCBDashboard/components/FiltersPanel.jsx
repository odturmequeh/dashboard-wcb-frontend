export default function FiltersPanel({ filters, options= {}, onChange }) {
  console.log("FILTER OPTIONS:", options);
  const handleChange = (key, value) => {
    onChange(prev => ({ ...prev, [key]: value }));
  };

  return (
    <div className="bg-white rounded-xl shadow p-4">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
        {Object.entries(options).map(([key, values]) => (
          <select
            key={key}
            className="border rounded-lg px-3 py-2 text-sm"
            value={filters[key] || ""}
            onChange={e => handleChange(key, e.target.value)}
          >
            <option value="">{key.replace("_", " ")}</option>
            {values.map(v => (
              <option key={v} value={v}>
                {v}
              </option>
            ))}
          </select>
        ))}
      </div>
    </div>
  );
}