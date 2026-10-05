import React, { useState } from 'react';
import { X, Check, Copy, ExternalLink, QrCode } from 'lucide-react';

interface QRCodeModalProps {
  isOpen: boolean;
  onClose: () => void;
  url: string;
  title: string;
}

export const QRCodeModal: React.FC<QRCodeModalProps> = ({
  isOpen,
  onClose,
  url,
  title,
}) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  // Generate Google Chart QR Code URL as high-quality image with inline SVG fallback
  const qrImageUrl = `https://api.qrserver.com/v1/create-qr-code/?size=280x280&data=${encodeURIComponent(
    url
  )}&color=0c1014&bgcolor=ffffff&qzone=2`;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback
      const input = document.createElement('input');
      input.value = url;
      document.body.appendChild(input);
      input.select();
      document.execCommand('copy');
      document.body.removeChild(input);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
      {/* Backdrop click to close */}
      <div className="absolute inset-0" onClick={onClose} />

      <div className="relative w-full max-w-sm bg-[#14181E] border border-white/10 rounded-3xl p-6 shadow-2xl z-10 text-center">
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Fechar"
          className="absolute top-4 right-4 p-2 text-gray-400 hover:text-white rounded-full bg-white/5 hover:bg-white/10 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="flex items-center justify-center gap-2 mb-2 text-[#E21885]">
          <QrCode className="w-6 h-6" />
          <span className="text-xs font-semibold tracking-wider uppercase">
            Acesso Rápido
          </span>
        </div>
        <h3 className="text-lg font-bold text-white mb-1">{title}</h3>
        <p className="text-xs text-gray-400 mb-5">
          Aponte a câmera do seu celular para abrir diretamente
        </p>

        {/* QR Code Container */}
        <div className="relative mx-auto w-60 h-60 bg-white p-3 rounded-2xl shadow-inner flex items-center justify-center mb-5">
          <img
            src={qrImageUrl}
            alt="QR Code Chiquexodó"
            className="w-full h-full object-contain"
            loading="lazy"
          />
        </div>

        {/* Link display & Copy Button */}
        <div className="flex items-center gap-2 bg-[#0C1014] border border-white/10 rounded-xl p-2.5 mb-4">
          <span className="text-xs text-gray-300 font-mono truncate flex-1 text-left px-1">
            {url}
          </span>
          <button
            onClick={handleCopy}
            className="px-3 py-1.5 text-xs font-semibold rounded-lg bg-[#E21885] hover:bg-[#c71273] text-white flex items-center gap-1.5 transition-all shrink-0 active:scale-95"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5" />
                Copiado
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                Copiar
              </>
            )}
          </button>
        </div>

        {/* Direct Open Link */}
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full py-3 px-4 rounded-xl text-xs font-semibold text-gray-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/5 flex items-center justify-center gap-2 transition-colors"
        >
          <span>Abrir link no navegador</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>
    </div>
  );
};
