import React, { useEffect } from "react";
import { X } from "lucide-react";

interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageSrc: string;
  imageAlt: string;
  caption?: string;
}

export const ImageModal: React.FC<ImageModalProps> = ({
  isOpen,
  onClose,
  imageSrc,
  imageAlt,
  caption,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 bg-[#080D16]/85 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={imageAlt}
    >
      <div
        className="relative max-w-5xl w-full bg-[#151F30] rounded-xl overflow-hidden shadow-2xl border border-[#2A3850]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between px-4 py-3 bg-[#101827] text-[#F4F7FC] border-b border-[#2A3850]">
          <p className="text-sm font-medium truncate pr-4 text-[#F4F7FC]">
            {caption || imageAlt}
          </p>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 text-[#B5C1D3] hover:text-white hover:bg-[#151F30] rounded-lg transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        <div className="p-2 md:p-4 bg-[#080D16] flex items-center justify-center max-h-[80vh] overflow-auto">
          <img
            src={imageSrc}
            alt={imageAlt}
            className="w-auto h-auto max-w-full max-h-[75vh] object-contain rounded"
          />
        </div>
      </div>
    </div>
  );
};

export default ImageModal;