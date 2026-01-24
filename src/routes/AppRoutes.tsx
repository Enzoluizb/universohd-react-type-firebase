import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Marketplace from "../pages/Marketplace";
import AlunaHD from "../pages/AlunaHD";
import EspecialistaHD from "../pages/EspecialistaHD";
import MasterMindHD from "../pages/MasterMindHD";
import EmbaixadoraHD from "../pages/EmbaixadoraHD";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/marketplace" element={<Marketplace />} />

      <Route path="/alunahd" element={<AlunaHD />} />
      <Route path="/especialistahd" element={<EspecialistaHD />} />
      <Route path="/mastermindhd" element={<MasterMindHD />} />
      <Route path="/embaixadorahd" element={<EmbaixadoraHD />} />
    </Routes>
  );
}
