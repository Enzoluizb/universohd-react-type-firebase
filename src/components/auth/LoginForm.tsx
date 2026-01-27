import { useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { FirebaseError } from "firebase/app";

export default function LoginForm() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    try {
      await login(email, password);
      navigate("/marketplace");
    } catch (error) {
      if (error instanceof FirebaseError) {
        console.error("Erro no login:", error.code, error.message);
        alert(error.code);
      } else {
        console.error("Erro desconhecido:", error);
        alert("Erro inesperado");
      }
    }
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
      <input
        type="email"
        placeholder="Email"
        className="w-full border p-3 rounded"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Senha"
        className="w-full border p-3 rounded"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button className="w-full bg-blue-800 text-white py-3 rounded">
        Entrar
      </button>
    </form>
  );
}
