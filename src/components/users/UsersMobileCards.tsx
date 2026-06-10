import type { User } from "../../services/userService";

interface Props {
  users: User[];
  onEdit: (user: User) => void;
  onDelete: (user: User) => void;
}

export default function UsersMobileCards({ users, onEdit, onDelete }: Props) {
  return (
    <div className="md:hidden space-y-4">
      {users.map((user) => (
        <div
          key={user.uid}
          className="bg-white rounded-xl shadow p-4 flex justify-between"
        >
          <div>
            <p className="font-semibold">{user.name}</p>
            <p className="text-sm text-gray-500">{user.email}</p>
          </div>

          <div className="flex flex-col gap-2">
            <button
              onClick={() => onEdit(user)}
              className="text-blue-600 text-sm"
            >
              Editar
            </button>

            <button
              onClick={() => onDelete(user)}
              className="text-red-600 text-sm"
            >
              Excluir
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
