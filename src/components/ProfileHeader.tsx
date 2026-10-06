import React, { useState } from 'react';
import { Share2, QrCode, CheckCircle2 } from 'lucide-react';

interface ProfileHeaderProps {
  onOpenQR: () => void;
  onOpenShare: () => void;
}

export const ProfileHeader: React.FC<ProfileHeaderProps> = ({
  onOpenQR,
  onOpenShare,
}) => {
  const [logoSrc, setLogoSrc] = useState<string>(
    'https://i.postimg.cc/VsFQRhLN/WA-1791242012661.png'
  );
  const [imgFailed, setImgFailed] = useState(false);

  const handleImageError = () => {
    if (logoSrc !== '/logo.png') {
      setLogoSrc('/logo.png');
    } else {
      setImgFailed(true);
    }
  };

  return (
    <header className="w-full flex flex-col items-center text-center">
      {/* Top action row */}
      <div className="w-full flex items-center justify-between pb-4 border-b border-[#E8D6E0] mb-6 text-xs text-gray-600">
        <a
          href="https://www.instagram.com/chiquexodo_/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 font-semibold text-gray-800 hover:text-[#E21885] transition-colors"
        >
          <span className="text-[#E21885] font-bold">@</span>
          <span>chiquexodo_</span>
        </a>

        {/* Action icons: QR Code & Share */}
        <div className="flex items-center gap-2">
          <button
            onClick={onOpenQR}
            aria-label="Abrir QR Code"
            title="Ver QR Code"
            className="p-2.5 rounded-xl border border-pink-200/80 bg-white/80 hover:bg-white text-gray-700 hover:text-[#E21885] shadow-sm transition-all active:scale-95 cursor-pointer"
          >
            <QrCode className="w-4 h-4" />
          </button>

          <button
            onClick={onOpenShare}
            aria-label="Compartilhar"
            title="Compartilhar Bio Site"
            className="p-2.5 rounded-xl border border-pink-200/80 bg-white/80 hover:bg-white text-gray-700 hover:text-[#E21885] shadow-sm transition-all active:scale-95 cursor-pointer"
          >
            <Share2 className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Avatar Container with Instagram story-ring aesthetic */}
      <div className="relative group cursor-pointer mb-4">
        {/* Animated aura ring */}
        <div className="absolute -inset-1.5 rounded-full blur-[8px] bg-gradient-to-tr from-[#E21885]/35 via-[#ff4d91]/25 to-[#fb923c]/20 opacity-90 group-hover:opacity-100 transition duration-500" />

        {/* Story Ring Border */}
        <div className="relative p-1 rounded-full bg-gradient-to-tr from-[#E21885] via-[#f43f5e] to-[#fb923c] shadow-lg shadow-[#E21885]/20">
          <div className="p-0.5 rounded-full bg-white">
            <div
              className="w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden bg-[#E21885] flex items-center justify-center shadow-inner"
              style={{ borderRadius: '9999px' }}
            >
              {!imgFailed ? (
                <img
                  src={logoSrc}
                  alt="Logo Chiquexodó"
                  onError={handleImageError}
                  className="w-full h-full object-cover rounded-full block select-none pointer-events-none transition-transform duration-500 group-hover:scale-105"
                  style={{ borderRadius: '9999px', objectFit: 'cover' }}
                  referrerPolicy="no-referrer"
                />
              ) : (
                <div className="w-full h-full bg-[#E21885] flex flex-col items-center justify-center p-3 text-white">
                  <span className="font-serif italic text-2xl font-bold tracking-tight">
                    Chiquexodó
                  </span>
                  <span className="text-[9px] uppercase tracking-widest mt-1 opacity-90">
                    Moda Infantil
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Online Status Pill Badge */}
        <div className="absolute bottom-1 right-2 flex items-center gap-1 rounded-full py-0.5 px-2.5 shadow-md border border-pink-200 bg-white text-gray-800">
          <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
          <span className="text-[10px] font-bold tracking-tight">Online</span>
        </div>
      </div>

      {/* Store Name & Verification */}
      <div className="flex items-center justify-center gap-1.5 mt-1">
        <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#1F141E]">
          Chiquexodó
        </h1>
        <div title="Loja Oficial Verificada" className="text-[#E21885] flex items-center">
          <CheckCircle2 className="w-5 h-5 fill-[#E21885] text-white" />
        </div>
      </div>

      {/* Category */}
      <span className="text-xs sm:text-sm font-semibold tracking-wide mt-1 mb-3 text-[#E21885]">
        Loja de roupas
      </span>

      {/* Official Bio Box */}
      <div className="w-full max-w-sm rounded-2xl p-4 text-center backdrop-blur-sm bg-white/90 border border-[#EAD5E1] shadow-md shadow-[#964B74]/5">
        <p className="text-sm font-bold mb-1 text-[#C71273]">
          Onde o estilo encontra a fofura!
        </p>
        <p className="text-xs leading-relaxed text-gray-600">
          <span>✨ Looks que encantam, conforto que abraça.</span>
        </p>
        <div className="mt-2.5 pt-2.5 border-t border-[#F0DFE8] flex items-center justify-center gap-1.5 text-xs font-semibold text-emerald-700">
          <span>🛍️</span>
          <span>Faça seu pedido</span>
        </div>
      </div>
    </header>
  );
};
