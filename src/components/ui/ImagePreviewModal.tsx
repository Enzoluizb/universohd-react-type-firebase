import { useState } from "react";

type Props = {
  images: string[];
  initialIndex?: number;
  onClose: () => void;
};

export default function ImagePreviewModal({
  images,
  initialIndex = 0,
  onClose,
}: Props) {
  const [currentImage, setCurrentImage] = useState(initialIndex);

  function nextImage() {
    setCurrentImage((prev) => (prev + 1) % images.length);
  }

  function prevImage() {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  }

  return (
    <div
      className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center"
      onClick={onClose}
    >
      <div className="relative">
        <img
          src={images[currentImage]}
          alt="Preview"
          className="max-h-[90vh] max-w-[90vw] rounded shadow-lg"
          onClick={(e) => e.stopPropagation()}
        />

        {images.length > 1 && (
          <>
            {/* esquerda */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
              className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 rounded-full w-10 h-10 flex items-center justify-center shadow"
            >
              ‹
            </button>

            {/* direita */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
              className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 rounded-full w-10 h-10 flex items-center justify-center shadow"
            >
              ›
            </button>
          </>
        )}
      </div>
    </div>
  );
}
