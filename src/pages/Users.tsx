import { useState } from "react";
import { createUserByAdmin } from "../services/functions";

export default function Users() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleCreateUser(e: React.FormEvent) {
    e.preventDefault();

    try {
      setLoading(true);
      const result = await createUserByAdmin(email, password);

      alert("Usuário criado com sucesso!");
      console.log("Criado:", result);

      setEmail("");
      setPassword("");
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error(error.message);
        alert(error.message);
      } else {
        console.error(error);
        alert("Erro ao criar usuário");
      }
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="max-w-xl mx-auto mt-16 bg-white shadow-lg rounded-xl p-8">
      <h1 className="text-2xl font-bold mb-6 text-center">
        Gerenciar Usuários
      </h1>

      <form onSubmit={handleCreateUser} className="flex flex-col gap-4">
        <input
          type="email"
          placeholder="Email do usuário"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border rounded-md px-4 py-2"
          required
        />

        <input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border rounded-md px-4 py-2"
          required
        />

        <button
          type="submit"
          disabled={loading}
          className="bg-blue-600 hover:bg-blue-700 text-white
          font-semibold py-2 rounded-md transition-all"
        >
          {loading ? "Criando..." : "Criar Usuário"}
        </button>
      </form>
    </div>
  );
}
