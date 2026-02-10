import { useState } from "react";
import Header from "./components/Header";
import TopTabs from "./components/TopTabs";

import ProduccionDashboard from "./dashboards/ProduccionDashboard";
import VentasAliadosDashboard from "./VentasAliadosDashboard/VentasAliadosDashboard";

export default function WCBDashboard() {
  const [activeDashboard, setActiveDashboard] = useState("produccion");

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />

      <main className="p-6 space-y-6">
        <TopTabs
          active={activeDashboard}
          onChange={setActiveDashboard}
        />

        {activeDashboard === "produccion" && (
          <ProduccionDashboard />
        )}

        {activeDashboard === "aliados" && (
          <VentasAliadosDashboard />
        )}
      </main>
    </div>
  );
}
