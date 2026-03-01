import { useEffect, useState } from "react";
import { Pencil, Trash2 } from "lucide-react";
import {
  subscribeToUsers,
  updateUserInfo,
  deleteUserById,
  createNewUser,
} from "../services/userService";
import type { User } from "../services/userService";

export default function Users() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);

  // Modal criar
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [newEmail, setNewEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [newName, setNewName] = useState("");

  // Modal editar
  const [showEditModal, setShowEditModal] = useState(false);
  const [editUser, setEditUser] = useState<User | null>(null);
  const [editName, setEditName] = useState("");
  const [editEmail, setEditEmail] = useState("");

  useEffect(() => {
    const unsubscribe = subscribeToUsers((usersData) => {
      setUsers(usersData);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const handleCreateUser = async () => {
    if (!newEmail || !newPassword || !newName) return;
    await createNewUser(newEmail, newPassword, newName);
    setNewEmail("");
    setNewPassword("");
    setNewName("");
    setShowCreateModal(false);
  };

  const handleOpenEdit = (user: User) => {
    setEditUser(user);
    setEditName(user.name);
    setEditEmail(user.email);
    setShowEditModal(true);
  };

  const handleEditUser = async () => {
    if (!editUser || !editName || !editEmail) return;
    await updateUserInfo(editUser.uid, editName, editEmail);
    setShowEditModal(false);
    setEditUser(null);
  };

  if (loading)
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-gray-500 text-lg">Carregando...</p>
      </div>
    );

  return (
    <div className="min-h-screen bg-gray-100 p-10">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold text-gray-800">
          Painel de Usuários
        </h2>
        <button
          onClick={() => setShowCreateModal(true)}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg shadow transition"
        >
          + Adicionar Usuário
        </button>
      </div>

      {/* Tabela */}
      <div className="bg-white rounded-xl shadow overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-gray-50 border-b">
            <tr>
              <th className="p-4 text-sm font-medium text-gray-600">Nome</th>
              <th className="p-4 text-sm font-medium text-gray-600">Email</th>
              <th className="p-4 text-sm font-medium text-gray-600">Ações</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr
                key={user.uid}
                className="border-b hover:bg-gray-50 transition"
              >
                <td className="p-4 text-gray-700">{user.name}</td>
                <td className="p-4 text-gray-700">{user.email}</td>
                <td className="p-4">
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => handleOpenEdit(user)}
                      className="text-gray-500 hover:text-blue-600 transition"
                      title="Editar"
                    >
                      <Pencil size={18} />
                    </button>
                    <button
                      onClick={() => deleteUserById(user.uid)}
                      className="text-gray-400 hover:text-red-600 transition"
                      title="Excluir"
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

      {/* Modal Criar */}
      {showCreateModal && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center">
          <div className="bg-white w-96 rounded-xl shadow-xl p-6 space-y-4">
            <h3 className="text-lg font-semibold text-gray-800">
              Novo Usuário
            </h3>
            <input
              type="text"
              placeholder="Nome"
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
              className="w-full border rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
            />
            <input
              type="email"
              placeholder="Email"
              value={newEmail}
              onChange={(e) => setNewEmail(e.target.value)}
              className="w-full border rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
            />
            <input
              type="password"
              placeholder="Senha"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="w-full border rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
            />
            <div className="flex justify-end gap-3 pt-2">
              <button
                onClick={() => setShowCreateModal(false)}
                className="px-4 py-2 rounded-md bg-gray-200 hover:bg-gray-300 transition"
              >
                Cancelar
              </button>
              <button
                onClick={handleCreateUser}
                className="px-4 py-2 rounded-md bg-blue-600 hover:bg-blue-700 text-white transition"
              >
                Criar
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Modal Editar */}
      {showEditModal && editUser && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center">
          <div className="bg-white w-96 rounded-xl shadow-xl p-6 space-y-4">
            <h3 className="text-lg font-semibold text-gray-800">
              Editar Usuário
            </h3>
            <input
              type="text"
              placeholder="Nome"
              value={editName}
              onChange={(e) => setEditName(e.target.value)}
              className="w-full border rounded-md px-3 py-2 focus:ring-2 focus:ring-yellow-400 outline-none"
            />
            <input
              type="email"
              placeholder="Email"
              value={editEmail}
              onChange={(e) => setEditEmail(e.target.value)}
              className="w-full border rounded-md px-3 py-2 focus:ring-2 focus:ring-yellow-400 outline-none"
            />
            <div className="flex justify-end gap-3 pt-2">
              <button
                onClick={() => setShowEditModal(false)}
                className="px-4 py-2 rounded-md bg-gray-200 hover:bg-gray-300 transition"
              >
                Cancelar
              </button>
              <button
                onClick={handleEditUser}
                className="px-4 py-2 rounded-md bg-yellow-400 hover:bg-yellow-500 text-white transition"
              >
                Salvar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
