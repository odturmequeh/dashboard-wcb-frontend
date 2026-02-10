export default function Tabs() {
  return (
    <div className="flex gap-4 border-b text-sm">
      <span className="pb-2 border-b-2 border-claro-red text-claro-red font-semibold">
        Servicios
      </span>
    </div>
  );
}

/*const tabs = [
  "Servicios",
];

export default function Tabs({ active, onChange }) {
  return (
    <div className="flex gap-4 border-b text-sm">
      {tabs.map(tab => (
        <button
          key={tab}
          onClick={() => onChange(tab)}
          className={`pb-2 ${
            active === tab
              ? "border-b-2 border-claro-red text-claro-red font-semibold"
              : "text-gray-500"
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}*/