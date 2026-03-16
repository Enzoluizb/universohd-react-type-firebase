interface Props {
  message: string;
  onConfirm: () => void;
  onClose: () => void;
}

export default function ConfirmModal({ message, onConfirm, onClose }: Props) {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white w-96 rounded-xl shadow-xl p-6 space-y-4">
        <h3 className="text-lg font-semibold">Confirmar ação</h3>

        <p className="text-gray-600 text-sm">{message}</p>

        <div className="flex justify-end gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-200 rounded-md"
          >
            Cancelar
          </button>

          <button
            onClick={onConfirm}
            className="px-4 py-2 bg-blue-600 text-white rounded-md"
          >
            Confirmar
          </button>
        </div>
      </div>
    </div>
  );
}
