import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="p-4 flex gap-4 border-b">
      <Link to="/">Home</Link>
      <Link to="/marketplace">Marketplace</Link>
    </nav>
  );
}
