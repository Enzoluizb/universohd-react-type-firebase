type Props = {
  imageUrl: string;
  onClose: () => void;
};

export default function ImagePreviewModal({ imageUrl, onClose }: Props) {
  return (
    <div
      className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center"
      onClick={onClose}
    >
      <img
        src={imageUrl}
        alt="Preview"
        className="max-h-[90vh] max-w-[90vw] rounded shadow-lg"
        onClick={(e) => e.stopPropagation()}
      />
    </div>
  );
}
