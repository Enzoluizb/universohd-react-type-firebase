type Props = {
  children: React.ReactNode;
  onClose: () => void;
};

export default function BaseModal({ children, onClose }: Props) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />

      {/* Modal */}
      <div className="relative z-10 w-full max-w-md bg-white rounded-xl p-6 shadow-lg">
        {children}
      </div>
    </div>
  );
}
