import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import { mockData2025 } from "../data/mockData2025";

const VentasVsMetaChart = () => {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <LineChart data={mockData2025}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="mes" />
        <YAxis />
        <Tooltip />
        <Legend />

        {/* Servicios */}
        <Line
          type="monotone"
          dataKey="metaServicios"
          name="Meta Servicios"
          stroke="#8884d8"
          strokeWidth={2}
        />
        <Line
          type="monotone"
          dataKey="ventasServicios"
          name="Ventas Servicios"
          stroke="#82ca9d"
          strokeWidth={2}
        />

        {/* Internet */}
        <Line
          type="monotone"
          dataKey="metaInternet"
          name="Meta Internet"
          stroke="#ff7300"
          strokeWidth={2}
        />
        <Line
          type="monotone"
          dataKey="ventasInternet"
          name="Ventas Internet"
          stroke="#387908"
          strokeWidth={2}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default VentasVsMetaChart;
