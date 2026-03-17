import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { useState } from "react";

export default function Navbar() {
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);

  function handleMarketplaceAccess() {
    navigate(user ? "/marketplace" : "/login");
    setMenuOpen(false);
  }

  function handleProfileAccess() {
    navigate(user ? "/profile" : "/login");
    setMenuOpen(false);
  }

  async function handleLogout() {
    await logout();
    navigate("/");
    setMenuOpen(false);
  }

  function formatRole(role: string) {
    const labels: Record<string, string> = {
      especialista: "Especialista HD",
      mastermind: "Master MindHD",
      embaixadora: "Embaixadora HD",
      admin: "Administrador",
    };
    return labels[role] ?? role;
  }

  return (
    <nav className="w-full bg-gray-100 border-b">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 flex items-center justify-between h-24">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img src="/images/logo.png" alt="Logo" className="h-14 w-auto" />
        </Link>

        {/* Botão Hamburguer (Mobile) */}
        <button
          className="md:hidden flex flex-col gap-1"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="w-6 h-0.5 bg-gray-800"></span>
          <span className="w-6 h-0.5 bg-gray-800"></span>
          <span className="w-6 h-0.5 bg-gray-800"></span>
        </button>

        {/* Menu Desktop */}
        <div className="hidden md:flex items-center gap-4">
          {user ? (
            <>
              <span className="text-sm text-gray-700">
                Bem-vinda, <strong>{user.name}</strong>{" "}
                <span className="text-gray-400 font-normal text-xs">
                  ({formatRole(user.role)})
                </span>
              </span>

              <button
                onClick={handleMarketplaceAccess}
                className="bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-white text-sm font-semibold px-4 py-2 rounded-md shadow-md"
              >
                Marketplace
              </button>

              <button
                onClick={handleProfileAccess}
                className="bg-gradient-to-r from-green-400 to-green-500 hover:from-green-500 hover:to-green-600 text-white text-sm font-semibold px-4 py-2 rounded-md shadow-md"
              >
                Perfil
              </button>

              {user?.role === "admin" && (
                <button
                  onClick={() => navigate("/admin/links")}
                  className="bg-purple-500 hover:bg-purple-600 text-white text-sm font-semibold px-4 py-2 rounded-md shadow-md"
                >
                  Gerenciar Links
                </button>
              )}

              {user?.role === "admin" && (
                <button
                  onClick={() => navigate("/admin/users")}
                  className="bg-indigo-500 hover:bg-indigo-600 text-white text-sm font-semibold px-4 py-2 rounded-md shadow-md"
                >
                  Gerenciar Usuários
                </button>
              )}

              <button
                onClick={handleLogout}
                className="bg-gray-300 hover:bg-gray-400 text-gray-800 text-sm font-semibold px-4 py-2 rounded-md"
              >
                Sair
              </button>
            </>
          ) : (
            <button
              onClick={handleMarketplaceAccess}
              className="bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-white text-sm font-semibold px-4 py-2 rounded-md"
            >
              Acesso Especialistas
            </button>
          )}
        </div>
      </div>

      {/* Menu Mobile */}
      {menuOpen && (
        <div className="md:hidden flex flex-col gap-3 px-6 pb-6">
          {user ? (
            <>
              <span className="text-sm text-gray-700">
                Bem-vinda, <strong>{user.name}</strong>{" "}
                <span className="text-gray-400 font-normal text-xs">
                  ({formatRole(user.role)})
                </span>
              </span>

              <button
                onClick={handleMarketplaceAccess}
                className="bg-yellow-500 text-white py-2 rounded-md"
              >
                Marketplace
              </button>

              <button
                onClick={handleProfileAccess}
                className="bg-green-500 text-white py-2 rounded-md"
              >
                Perfil
              </button>

              {user?.role === "admin" && (
                <button
                  onClick={() => navigate("/admin/links")}
                  className="bg-purple-500 text-white py-2 rounded-md"
                >
                  Gerenciar Links
                </button>
              )}

              {user?.role === "admin" && (
                <button
                  onClick={() => navigate("/admin/users")}
                  className="bg-indigo-500 text-white py-2 rounded-md"
                >
                  Gerenciar Usuários
                </button>
              )}

              <button
                onClick={handleLogout}
                className="bg-gray-400 text-white py-2 rounded-md"
              >
                Sair
              </button>
            </>
          ) : (
            <button
              onClick={handleMarketplaceAccess}
              className="bg-yellow-500 text-white py-2 rounded-md"
            >
              Acesso Especialistas
            </button>
          )}
        </div>
      )}
    </nav>
  );
}
