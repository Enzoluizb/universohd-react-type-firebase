import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Marketplace from "../pages/Marketplace";
import Profile from "../pages/Profile";
import AlunaHD from "../pages/AlunaHD";
import EspecialistaHD from "../pages/EspecialistaHD";
import MasterMindHD from "../pages/MasterMindHD";
import EmbaixadoraHD from "../pages/EmbaixadoraHD";
import Login from "../pages/Login";

import ProtectedRoute from "../components/auth/ProtectedRoute";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />

      {/* Marketplace público */}
      <Route path="/marketplace" element={<Marketplace />} />

      {/* Perfil continua protegido */}
      <Route
        path="/profile"
        element={
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        }
      />

      <Route path="/alunahd" element={<AlunaHD />} />
      <Route path="/especialistahd" element={<EspecialistaHD />} />
      <Route path="/mastermindhd" element={<MasterMindHD />} />
      <Route path="/embaixadorahd" element={<EmbaixadoraHD />} />
    </Routes>
  );
}
