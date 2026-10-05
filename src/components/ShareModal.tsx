import React, { useState } from 'react';
import { X, Check, Copy, Share2, MessageCircle } from 'lucide-react';

interface ShareModalProps {
  isOpen: boolean;
  onClose: () => void;
  url: string;
}

export const ShareModal: React.FC<ShareModalProps> = ({
  isOpen,
  onClose,
  url,
}) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const shareText =
    'Confira o Bio Site oficial da Chiquexodó - Onde o estilo encontra a fofura! Moda infantil e entregas para todo o Brasil:';

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
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

  const shareViaWhatsApp = () => {
    const waUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(
      `${shareText}\n${url}`
    )}`;
    window.open(waUrl, '_blank', 'noopener,noreferrer');
  };

  const shareViaTelegram = () => {
    const tgUrl = `https://t.me/share/url?url=${encodeURIComponent(
      url
    )}&text=${encodeURIComponent(shareText)}`;
    window.open(tgUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <div className="absolute inset-0" onClick={onClose} />

      <div className="relative w-full max-w-sm rounded-3xl p-6 shadow-2xl z-10 text-center border bg-white border-[#EAD5E1] text-gray-900 shadow-[#964B74]/15">
        <button
          onClick={onClose}
          aria-label="Fechar"
          className="absolute top-4 right-4 p-2 rounded-full transition-colors cursor-pointer text-gray-400 hover:text-gray-900 bg-pink-50 hover:bg-pink-100"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center justify-center gap-2 mb-2 text-[#E21885]">
          <Share2 className="w-6 h-6" />
          <span className="text-xs font-bold tracking-wider uppercase">
            Compartilhar
          </span>
        </div>
        <h3 className="text-lg font-bold mb-1 text-gray-900">
          Espalhe o estilo Chiquexodó
        </h3>
        <p className="text-xs mb-6 text-gray-500">
          Envie o link oficial para amigos ou familiares
        </p>

        {/* Share buttons */}
        <div className="grid grid-cols-2 gap-3 mb-5">
          <button
            onClick={shareViaWhatsApp}
            className="flex items-center justify-center gap-2 py-3 px-4 rounded-2xl bg-[#25D366]/15 hover:bg-[#25D366]/25 border border-[#25D366]/40 text-[#25D366] text-xs font-bold transition-all active:scale-95 cursor-pointer"
          >
            <MessageCircle className="w-4 h-4" />
            <span>WhatsApp</span>
          </button>

          <button
            onClick={shareViaTelegram}
            className="flex items-center justify-center gap-2 py-3 px-4 rounded-2xl bg-[#0088cc]/15 hover:bg-[#0088cc]/25 border border-[#0088cc]/40 text-[#0284c7] text-xs font-bold transition-all active:scale-95 cursor-pointer"
          >
            <Share2 className="w-4 h-4" />
            <span>Telegram</span>
          </button>
        </div>

        {/* Copy link */}
        <div className="flex items-center gap-2 rounded-xl p-2.5 border bg-pink-50/70 border-pink-200">
          <span className="text-xs font-mono truncate flex-1 text-left px-1 text-gray-700">
            {url}
          </span>
          <button
            onClick={handleCopy}
            className="px-3.5 py-1.5 text-xs font-semibold rounded-lg bg-[#E21885] hover:bg-[#c71273] text-white flex items-center gap-1.5 transition-all shrink-0 active:scale-95 cursor-pointer"
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
      </div>
    </div>
  );
};
