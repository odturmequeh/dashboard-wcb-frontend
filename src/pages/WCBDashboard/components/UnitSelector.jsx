const units = ["Hogar", "Móvil", "TyT"];

export default function UnitSelector({ value, onChange }) {
  return (
    <div className="flex justify-center py-4">
      <div className="flex bg-gray-100 rounded-full p-1">
        {units.map(unit => (
          <button
            key={unit}
            onClick={() => onChange(unit)}
            className={`px-4 py-1 rounded-full text-sm font-medium transition
              ${
                value === unit
                  ? "bg-claro-red text-white shadow"
                  : "text-gray-600"
              }`}
          >
            {unit}
          </button>
        ))}
      </div>
    </div>
  );
}