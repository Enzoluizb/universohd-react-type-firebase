import { useState } from "react";
import { updateUserInfo } from "../../services/userService";
import type { User } from "../../services/userService";

interface Props {
  user: User;
  onClose: () => void;
  showToast: (message: string) => void;
}

export default function EditUserModal({ user, onClose, showToast }: Props) {
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);

  const handleSave = async () => {
    await updateUserInfo(user.uid, name, email);
    showToast("Usuário atualizado com sucesso");
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center">
      <div className="bg-white w-96 rounded-xl p-6 space-y-4">
        <h3 className="text-lg font-semibold">Editar Usuário</h3>

        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full border px-3 py-2 rounded-md"
        />

        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border px-3 py-2 rounded-md"
        />

        <div className="flex justify-end gap-3">
          <button onClick={onClose}>Cancelar</button>

          <button
            onClick={handleSave}
            className="bg-yellow-400 text-white px-4 py-2 rounded"
          >
            Salvar
          </button>
        </div>
      </div>
    </div>
  );
}
