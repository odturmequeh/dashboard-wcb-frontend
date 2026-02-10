export default function VentasAliadosBaseTable({
  title,
  columns = [],
  rows = [],
}) {
  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden">
      <div className="bg-gray-100 text-gray-800 px-4 py-2 text-sm font-semibold border-b">
        {title}
      </div>

      <table className="w-full text-sm">
        <thead className="bg-red-600 text-white">
          <tr>
            {columns.map((col) => (
              <th
                key={col.key}
                className={`px-3 py-2 ${
                  col.align ?? "text-left"
                }`}
              >
                {col.label}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {rows.map((row, idx) => (
            <tr
              key={idx}
              className="border-b last:border-0 hover:bg-gray-50"
            >
              {columns.map((col) => (
                <td
                  key={col.key}
                  className={`px-3 py-2 ${
                    col.align ?? "text-left"
                  }`}
                >
                  {col.render
                    ? col.render(row[col.key], row)
                    : row[col.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
