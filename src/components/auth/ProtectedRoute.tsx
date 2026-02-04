import { Navigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import React from "react";

// Define o tipo das propriedades do componente
// children representa qualquer componente JSX passado dentro do ProtectedRoute
type Props = {
  children: React.ReactNode;
};

export default function ProtectedRoute({ children }: Props) {
  const { user, loading } = useAuth();

  if (loading) return null;

  // Se não existir um usuário logado,
  // redireciona automaticamente para a página de login
  if (!user) return <Navigate to="/login" />;

  // Se o usuário estiver autenticado,
  // renderiza normalmente o conteúdo protegido
  return <>{children}</>;
}
