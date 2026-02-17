import { useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import { FirebaseError } from "firebase/app";

export default function LoginForm() {
  const { login } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErrorMessage(null); // limpa erro anterior

    try {
      await login(email, password);
    } catch (error: unknown) {
      if (error instanceof FirebaseError) {
        switch (error.code) {
          case "auth/invalid-credential":
          case "auth/user-not-found":
          case "auth/wrong-password":
            setErrorMessage("Email ou senha inválidos.");
            break;

          case "auth/invalid-email":
            setErrorMessage("Email inválido.");
            break;

          case "auth/too-many-requests":
            setErrorMessage("Muitas tentativas. Tente novamente mais tarde.");
            break;

          default:
            setErrorMessage("Erro ao fazer login. Tente novamente.");
        }
      } else {
        setErrorMessage("Erro inesperado.");
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
        required
      />

      <input
        type="password"
        placeholder="Senha"
        className="w-full border p-3 rounded"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />

      {errorMessage && (
        <div className="bg-red-100 text-red-700 p-3 rounded text-sm">
          {errorMessage}
        </div>
      )}

      <button className="w-full bg-blue-800 text-white py-3 rounded">
        Entrar
      </button>
    </form>
  );
}
