import { HashRouter as Router, Routes, Route } from "react-router-dom"; // 👈 Cambiar aquí
import HomePage from "./pages/HomePage";
import TimeLoad from "./pages/TimeLoad";
import ClickRelation from "./pages/ClickRelation";
import GeniaHome from "./pages/GeniaHome";
import PosPago from "./pages/PosPago";
import ClickTrackingDashboard from "./pages/ClickTrackingDashboard";
import User_click_render from "./pages/User_click_metrics";   
import WCBDashboard from "./pages/WCBDashboard/WCBDashboard";

function App() {
  return (
    <Router> {/* 👈 SIN basename cuando usas HashRouter */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/timeLoad" element={<TimeLoad />} />
        <Route path="/click_relation" element={<ClickRelation />} />
        <Route path="/genia" element={<GeniaHome />} />
        <Route path="/PosPago" element={<PosPago />} />
        <Route path="/click_tracking" element={<ClickTrackingDashboard />} />
        <Route path="/user_click_analysis" element={<User_click_render />} />
        <Route path="/WCB" element={<WCBDashboard />} />
      </Routes>
    </Router>
  );
}
export default App;