import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-900">
      <h1 className="text-4xl font-bold text-white">
        Tailwind 3 funcionando 🚀
      </h1>
    </div>
  );
}
