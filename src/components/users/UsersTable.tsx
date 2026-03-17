import { Pencil, Trash2 } from "lucide-react";
import type { User } from "../../services/userService";
import { updateUserRole } from "../../services/userService";

interface Props {
  users: User[];
  onEdit: (user: User) => void;
  onDelete: (user: User) => void;
}

export default function UsersTable({ users, onEdit, onDelete }: Props) {
  const handleRoleChange = async (
    uid: string,
    role: "admin" | "especialista" | "mastermind" | "embaixadora",
  ) => {
    try {
      await updateUserRole(uid, role);
    } catch (error) {
      console.error("Erro ao atualizar role:", error);
    }
  };

  return (
    <div className="hidden md:block bg-white rounded-xl shadow overflow-hidden">
      <table className="w-full text-left">
        <thead className="bg-gray-50 border-b">
          <tr>
            <th className="p-4 text-sm text-gray-600">Nome</th>
            <th className="p-4 text-sm text-gray-600">Email</th>
            <th className="p-4 text-sm text-gray-600">Role</th>
            <th className="p-4 text-sm text-gray-600">Ações</th>
          </tr>
        </thead>

        <tbody>
          {users.map((user) => (
            <tr key={user.uid} className="border-b hover:bg-gray-50">
              <td className="p-4">{user.name}</td>

              <td className="p-4">{user.email}</td>

              <td className="p-4">
                <select
                  value={user.role}
                  onChange={(e) =>
                    handleRoleChange(
                      user.uid,
                      e.target.value as
                        | "admin"
                        | "especialista"
                        | "mastermind"
                        | "embaixadora",
                    )
                  }
                  className="border rounded px-2 py-1 text-sm"
                >
                  <option value="especialista">Especialista</option>
                  <option value="mastermind">Master Mind</option>
                  <option value="embaixadora">Embaixadora</option>
                </select>
              </td>

              <td className="p-4">
                <div className="flex gap-3">
                  <button
                    onClick={() => onEdit(user)}
                    className="text-gray-500 hover:text-blue-600"
                  >
                    <Pencil size={18} />
                  </button>

                  <button
                    onClick={() => onDelete(user)}
                    className="text-gray-500 hover:text-red-600"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
