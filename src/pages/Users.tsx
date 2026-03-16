import { useEffect, useState } from "react";
import { subscribeToUsers, deleteUserById } from "../services/userService";

import UsersTable from "../components/users/UsersTable";
import UsersMobileCards from "../components/users/UsersMobileCards";
import CreateUserModal from "../components/users/CreateUserModal";
import EditUserModal from "../components/users/EditUserModal";
import ConfirmModal from "../components/users/ConfirmModal";

import type { User } from "../services/userService";

export default function Users() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);

  const [toast, setToast] = useState<string | null>(null);

  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);

  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  const [confirmModal, setConfirmModal] = useState<{
    message: string;
    onConfirm: () => void;
  } | null>(null);

  const showToast = (message: string) => {
    setToast(message);
    setTimeout(() => setToast(null), 3000);
  };

  useEffect(() => {
    const unsubscribe = subscribeToUsers((data) => {
      setUsers(data);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const handleDeleteUser = (user: User) => {
    setConfirmModal({
      message: `Deseja excluir o usuário "${user.name}"?`,
      onConfirm: async () => {
        await deleteUserById(user.uid);
        setConfirmModal(null);
        showToast("Usuário excluído com sucesso");
      },
    });
  };

  const handleEditUser = (user: User) => {
    setSelectedUser(user);
    setShowEditModal(true);
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        Carregando...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 px-4 md:p-10">
      {toast && (
        <div className="fixed top-6 right-6 bg-green-600 text-white px-5 py-3 rounded-xl shadow-lg">
          {toast}
        </div>
      )}

      <div className="flex justify-between mb-6">
        <h2 className="text-xl md:text-2xl font-semibold">
          Painel de Usuários
        </h2>

        <button
          onClick={() => setShowCreateModal(true)}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg"
        >
          + Adicionar Usuário
        </button>
      </div>

      <UsersTable
        users={users}
        onEdit={handleEditUser}
        onDelete={handleDeleteUser}
      />

      <UsersMobileCards
        users={users}
        onEdit={handleEditUser}
        onDelete={handleDeleteUser}
      />

      {showCreateModal && (
        <CreateUserModal
          onClose={() => setShowCreateModal(false)}
          showToast={showToast}
        />
      )}

      {showEditModal && selectedUser && (
        <EditUserModal
          user={selectedUser}
          onClose={() => setShowEditModal(false)}
          showToast={showToast}
        />
      )}

      {confirmModal && (
        <ConfirmModal
          message={confirmModal.message}
          onConfirm={confirmModal.onConfirm}
          onClose={() => setConfirmModal(null)}
        />
      )}
    </div>
  );
}
