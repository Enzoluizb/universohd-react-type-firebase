import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

export default function Navbar() {
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  function handleMarketplaceAccess() {
    navigate(user ? "/marketplace" : "/login");
  }

  function handleProfileAccess() {
    navigate(user ? "/profile" : "/login");
  }

  async function handleLogout() {
    await logout();
    navigate("/");
  }

  return (
    <nav className="w-full bg-gray-100 border-b">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 flex items-center justify-between h-24">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img src="/images/logo.png" alt="Logo" className="h-14 w-auto" />
        </Link>

        {/* Ações */}
        <div className="flex items-center gap-4">
          {user ? (
            <>
              <span className="text-sm text-gray-700">
                Bem-vindo, <strong>{user.name}</strong>
              </span>

              <button
                onClick={handleMarketplaceAccess}
                className="bg-gradient-to-r from-yellow-400 to-yellow-500
                  hover:from-yellow-500 hover:to-yellow-600
                  text-white text-sm font-semibold px-4 py-2 rounded-md
                  shadow-md transition-all"
              >
                Marketplace
              </button>

              <button
                onClick={handleProfileAccess}
                className="bg-gradient-to-r from-green-400 to-green-500
                  hover:from-green-500 hover:to-green-600
                  text-white text-sm font-semibold px-4 py-2 rounded-md
                  shadow-md transition-all"
              >
                Perfil
              </button>

              {user?.role === "admin" && (
                <button
                  onClick={() => navigate("/admin/links")}
                  className="bg-purple-500 hover:bg-purple-600
      text-white text-sm font-semibold px-4 py-2 rounded-md
      shadow-md transition-all"
                >
                  Gerenciar Links
                </button>
              )}

              <button
                onClick={handleLogout}
                className="bg-gray-300 hover:bg-gray-400 text-gray-800
                  text-sm font-semibold px-4 py-2 rounded-md transition-all"
              >
                Sair
              </button>
            </>
          ) : (
            <button
              onClick={handleMarketplaceAccess}
              className="bg-gradient-to-r from-yellow-400 to-yellow-500
                hover:from-yellow-500 hover:to-yellow-600
                text-white text-sm font-semibold px-4 py-2 rounded-md
                leading-tight text-center shadow-md transition-all"
            >
              Acesso Especialistas, Master Minds e
              <br />
              Embaixadoras HD
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}
