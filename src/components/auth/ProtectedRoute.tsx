import { Navigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import React from "react";

type Props = {
  children: React.ReactNode;
  requiredRole?: "admin";
};

export default function ProtectedRoute({ children, requiredRole }: Props) {
  const { user, loading } = useAuth();

  if (loading) return null;

  // Não está logado
  if (!user) return <Navigate to="/login" replace />;

  // Está logado mas não tem permissão suficiente
  if (requiredRole && user.role !== requiredRole) {
    return <Navigate to="/" replace />;
  }

  return <>{children}</>;
}
