export default function KPICards({ data }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
      <KPI label="Leads" value={data.leads} />
      <KPI label="Gestión" value={data.gestion} />
      <KPI label="Ventas Dig" value={data.ventas_dig} />
      <KPI label="Ventas Ins" value={data.ventas_ins} />
      <KPI label="Efectividad" value={`${data.efectividad}%`} />
    </div>
  );
}

function KPI({ label, value }) {
  return (
    <div className="bg-white rounded-xl shadow p-4">
      <p className="text-xs text-gray-500">{label}</p>
      <p className="text-xl font-bold">{value}</p>
    </div>
  );
}