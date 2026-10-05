import React, { useState } from 'react';
import { Share2, QrCode, Sparkles, CheckCircle2 } from 'lucide-react';

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
      // Try local fallback
      setLogoSrc('/logo.png');
    } else {
      // Both failed, render SVG emblem fallback
      setImgFailed(true);
    }
  };

  return (
    <header className="w-full flex flex-col items-center text-center">
      {/* Top action row */}
      <div className="w-full flex items-center justify-between pb-5 border-b border-white/5 mb-6 text-xs text-gray-400">
        <a
          href="https://www.instagram.com/chiquexodo_/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 font-semibold text-gray-300 hover:text-white transition-colors"
        >
          <span className="text-[#E21885] font-bold">@</span>
          <span>chiquexodo_</span>
        </a>

        <div className="flex items-center gap-2">
          <button
            onClick={onOpenQR}
            aria-label="Abrir QR Code"
            title="Ver QR Code"
            className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white border border-white/5 transition-all active:scale-95 cursor-pointer"
          >
            <QrCode className="w-4 h-4" />
          </button>
          <button
            onClick={onOpenShare}
            aria-label="Compartilhar"
            title="Compartilhar Bio Site"
            className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white border border-white/5 transition-all active:scale-95 cursor-pointer"
          >
            <Share2 className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Avatar Container with Instagram story-ring aesthetic */}
      <div className="relative group cursor-pointer mb-4">
        {/* Animated aura ring */}
        <div className="absolute -inset-1 rounded-full bg-gradient-to-tr from-[#E21885] via-[#ff4d91] to-[#ffa07a] opacity-80 blur-[6px] group-hover:opacity-100 transition duration-500" />
        
        {/* Story Ring Border */}
        <div className="relative p-1 rounded-full bg-gradient-to-tr from-[#E21885] via-[#f43f5e] to-[#fb923c]">
          <div className="p-0.5 rounded-full bg-[#0C1014]">
            <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden bg-[#161B22] flex items-center justify-center">
              {!imgFailed ? (
                <img
                  src={logoSrc}
                  alt="Logo Chiquexodó"
                  onError={handleImageError}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
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
        <div className="absolute bottom-1 right-2 flex items-center gap-1 bg-[#0C1014] border border-white/10 rounded-full py-0.5 px-2 shadow-lg">
          <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
          <span className="text-[10px] font-semibold text-gray-300 tracking-tight">
            Online
          </span>
        </div>
      </div>

      {/* Store Name & Verification */}
      <div className="flex items-center justify-center gap-1.5 mt-1">
        <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
          Chiquexodó
        </h1>
        <div title="Loja Oficial Verificada" className="text-[#E21885] flex items-center">
          <CheckCircle2 className="w-5 h-5 fill-[#E21885] text-[#0C1014]" />
        </div>
      </div>

      {/* Category */}
      <span className="text-xs sm:text-sm font-medium text-gray-400 mt-1 mb-3">
        Loja de roupas infantis
      </span>

      {/* Official Bio Box */}
      <div className="w-full max-w-sm bg-[#12161D]/80 border border-white/5 rounded-2xl p-4 text-center backdrop-blur-sm shadow-sm mb-2">
        <p className="text-sm font-semibold text-[#fce7f3] mb-1">
          Onde o estilo encontra a fofura!
        </p>
        <p className="text-xs text-gray-300 leading-relaxed flex items-center justify-center gap-1">
          <span>Looks que encantam, conforto que abraça.</span>
        </p>
        <div className="mt-2 pt-2 border-t border-white/5 flex items-center justify-center gap-1.5 text-xs text-emerald-400 font-medium">
          <span>🚚</span>
          <span>Entregamos para todo o Brasil</span>
        </div>
      </div>
    </header>
  );
};
