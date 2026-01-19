import { ref, set } from "firebase/database";
import { database } from "../services/firebase";

export default function Crud() {
  const testarFirebase = async () => {
    await set(ref(database, "teste"), {
      mensagem: "Firebase conectado com sucesso",
      criadoEm: Date.now(),
    });
  };

  return (
    <main className="min-h-screen p-8">
      <h1 className="text-2xl font-bold mb-4">Teste Firebase</h1>

      <button
        onClick={testarFirebase}
        className="px-4 py-2 bg-blue-600 text-white rounded"
      >
        Testar conexão
      </button>
    </main>
  );
}
