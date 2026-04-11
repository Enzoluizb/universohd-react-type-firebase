import { HashRouter } from "react-router-dom";

import AppRoutes from "./routes/AppRoutes";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

import { AuthProvider } from "../src/contexts/AuthProvider";
import ScrollToTop from "./components/layout/ScrollToTop";

function App() {
  return (
    <HashRouter>
      <ScrollToTop />
      <AuthProvider>
        <div className="flex min-h-screen flex-col">
          <Navbar />

          <main className="flex-1">
            <AppRoutes />
          </main>

          <Footer />
        </div>
      </AuthProvider>
    </HashRouter>
  );
}

export default App;
