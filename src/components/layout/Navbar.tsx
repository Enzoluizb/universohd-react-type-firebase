import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="w-full bg-gray-100 border-b">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 flex items-center justify-between h-24">
        <Link to="/" className="flex items-center">
          <img src="/images/logo.png" alt="Logo" className="h-14 w-auto" />
        </Link>

        <Link
          to="/marketplace"
          className="
            bg-gradient-to-r from-yellow-400 to-yellow-500
            hover:from-yellow-500 hover:to-yellow-600
            text-white text-sm font-semibold
            px-4 py-2 rounded-md
            leading-tight text-center
            shadow-md transition-all
          "
        >
          Acesso Especialistas, Master Minds e<br />
          Embaixadoras HD
        </Link>
      </div>
    </nav>
  );
}
