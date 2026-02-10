import { buildFilterOptions } from "../../utils/buildFilterOptions";
import mockData from "../data/mockVentasAliadosUnified";
import { FILTERS_CONFIG } from "../components/config/filters.config";


export default function useVentasAliadosData(filters) {
  const filteredData = mockData.filter((row) => {
    return Object.entries(filters).every(([key, value]) => {
      if (value === "ALL") return true;

      const config = FILTERS_CONFIG.find(
        (f) => f.key === key
      );

      if (!config || !config.sourceKey) return true;

      return row[config.sourceKey] === value;
    });
  });

  const digitadas = filteredData.filter(
    (r) => r.tipo === "digitadas"
  );
  const instaladas = filteredData.filter(
    (r) => r.tipo === "instaladas"
  );
  const aliados = filteredData.filter(
    (r) => r.tipo === "aliados"
  );

  const filterOptions = buildFilterOptions(
    mockData,
    FILTERS_CONFIG
  );

  return {
    digitadas,
    instaladas,
    aliados,
    filterOptions,
  };
}




/*
import { useEffect, useState } from "react";
import { buildFilterOptions } from "../../utils/buildFilterOptions";
import { FILTERS_CONFIG } from "../components/config/filters.config";

export default function useVentasAliadosData(filters) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      try {
        const query = new URLSearchParams(filters).toString();

        const res = await fetch(
          `http://localhost:8000/api/ventas-aliados/?${query}`
        );

        const json = await res.json();
        setData(json);
      } catch (error) {
        console.error("Error cargando ventas aliados", error);
      } finally {
        setLoading(false);
      }
    }

    loadData();
  }, [filters]);

  // 🔹 separar por tipo
  const digitadas = data.filter(r => r.tipo === "digitadas");
  const instaladas = data.filter(r => r.tipo === "instaladas");
  const aliados = data.filter(r => r.tipo === "aliados");

  const filterOptions = buildFilterOptions(
    data,
    FILTERS_CONFIG
  );

  return {
    digitadas,
    instaladas,
    aliados,
    filterOptions,
    loading,
  };
}
*/