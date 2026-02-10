export default function TopTabs({ active, onChange }) {
  const tabs = [
    { id: "produccion", label: "Producción WCB" },
    { id: "aliados", label: "Ventas Aliados" },
  ];

  return (
    <div className="flex gap-4 border-b">
      {tabs.map(tab => (
        <button
          key={tab.id}
          onClick={() => onChange(tab.id)}
          className={`px-4 py-3 font-medium border-b-4 transition ${
            active === tab.id
              ? "border-red-600 text-red-600"
              : "border-transparent text-gray-500 hover:text-red-500"
          }`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}
