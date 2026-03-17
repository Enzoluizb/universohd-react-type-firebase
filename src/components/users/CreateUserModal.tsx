import { useState } from "react";
import { createUserWithValidation } from "../../services/userActions";

interface Props {
  onClose: () => void;
  showToast: (message: string) => void;
}

export default function CreateUserModal({ onClose, showToast }: Props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [role, setRole] = useState<
    "admin" | "especialista" | "mastermind" | "embaixadora"
  >("especialista");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleCreate = async () => {
    const result = await createUserWithValidation(email, password, name, role);

    if (!result.success) {
      setEmailError(result.emailError || "");
      setPasswordError(result.passwordError || "");
      return;
    }

    showToast("Usuário criado com sucesso");
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center">
      <div className="bg-white w-96 rounded-xl p-6 space-y-4">
        <h3 className="text-lg font-semibold">Novo Usuário</h3>

        <input
          type="text"
          placeholder="Nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full border px-3 py-2 rounded-md"
        />

        <div>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setEmailError("");
            }}
            className="w-full border px-3 py-2 rounded-md"
          />
          {emailError && <p className="text-red-500 text-sm">{emailError}</p>}
        </div>

        <div>
          <input
            type="password"
            placeholder="Senha"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              setPasswordError("");
            }}
            className="w-full border px-3 py-2 rounded-md"
          />
          {passwordError && (
            <p className="text-red-500 text-sm">{passwordError}</p>
          )}
        </div>

        <div>
          <label className="text-sm text-gray-600">Tipo de usuário</label>

          <select
            value={role}
            onChange={(e) =>
              setRole(
                e.target.value as
                  | "admin"
                  | "especialista"
                  | "mastermind"
                  | "embaixadora",
              )
            }
            className="w-full border px-3 py-2 rounded-md mt-1"
          >
            <option value="especialista">Especialista</option>
            <option value="mastermind">Master Mind</option>
            <option value="embaixadora">Embaixadora</option>
          </select>
        </div>

        <div className="flex justify-end gap-3">
          <button onClick={onClose}>Cancelar</button>

          <button
            onClick={handleCreate}
            className="bg-blue-600 text-white px-4 py-2 rounded"
          >
            Criar
          </button>
        </div>
      </div>
    </div>
  );
}
