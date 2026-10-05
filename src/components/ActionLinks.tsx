import React from 'react';
import { ExternalLink, ChevronRight } from 'lucide-react';

export const ActionLinks: React.FC = () => {
  return (
    <div className="w-full space-y-4 my-2">
      {/* WHATSAPP - PRIMARY SUPREME PROMINENCE CTA */}
      <div className="relative group">
        {/* Ambient glow behind WhatsApp button */}
        <div className="absolute -inset-1 bg-gradient-to-r from-[#25D366] to-[#128C7E] rounded-3xl opacity-40 group-hover:opacity-65 blur-lg transition duration-500" />

        <a
          href="https://w.app/chiquexodo"
          target="_blank"
          rel="noopener noreferrer"
          className="relative w-full min-h-[76px] flex items-center justify-between p-4 sm:p-5 rounded-2xl sm:rounded-3xl bg-gradient-to-r from-[#25D366] via-[#20be5b] to-[#16a34a] text-white shadow-xl shadow-[#25D366]/25 transition-all duration-300 transform group-hover:-translate-y-0.5 group-active:scale-[0.98] border border-white/30"
        >
          {/* Left: Icon & Text Info */}
          <div className="flex items-center gap-3.5 sm:gap-4 text-left">
            {/* WhatsApp Icon Circle */}
            <div className="w-12 h-12 sm:w-13 sm:h-13 rounded-2xl bg-white text-[#25D366] flex items-center justify-center shadow-md shrink-0">
              <svg
                viewBox="0 0 24 24"
                width="28"
                height="28"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="fill-current text-[#25D366]"
              >
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
              </svg>
            </div>

            <div>
              {/* Top micro badge */}
              <div className="flex items-center gap-1.5 mb-0.5">
                <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-emerald-100">
                  Canal Principal · Atendimento Imediato
                </span>
              </div>
              <h2 className="text-base sm:text-lg font-extrabold leading-tight text-white drop-shadow-sm">
                Falar no WhatsApp
              </h2>
              <p className="text-[11px] sm:text-xs text-emerald-50 font-medium">
                Tire dúvidas, veja novidades e faça seu pedido
              </p>
            </div>
          </div>

          {/* Right Arrow */}
          <div className="w-9 h-9 rounded-xl bg-white/20 flex items-center justify-center shrink-0 group-hover:bg-white group-hover:text-[#25D366] transition-colors ml-2">
            <ChevronRight className="w-5 h-5 text-white group-hover:text-[#25D366] transition-transform group-hover:translate-x-0.5" />
          </div>
        </a>
      </div>

      {/* INSTAGRAM - SECONDARY PROMINENT CTA */}
      <div className="relative group">
        <a
          href="https://www.instagram.com/chiquexodo_/"
          target="_blank"
          rel="noopener noreferrer"
          className="relative w-full min-h-[70px] flex items-center justify-between p-4 sm:p-5 rounded-2xl sm:rounded-3xl bg-white/95 hover:bg-white border border-[#EAD5E1] hover:border-[#E21885] shadow-lg shadow-[#964B74]/8 text-gray-900 transition-all duration-300 transform group-hover:-translate-y-0.5 group-active:scale-[0.98]"
        >
          {/* Left: Icon & Text Info */}
          <div className="flex items-center gap-3.5 sm:gap-4 text-left">
            {/* Instagram Icon with official gradient */}
            <div className="w-12 h-12 sm:w-13 sm:h-13 rounded-2xl bg-gradient-to-tr from-[#f09433] via-[#e6683c] via-[#dc2743] via-[#cc2366] to-[#bc1888] flex items-center justify-center shadow-md text-white shrink-0">
              <svg
                viewBox="0 0 24 24"
                width="26"
                height="26"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </div>

            <div>
              <div className="flex items-center gap-1.5 mb-0.5">
                <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-[#E21885]">
                  Rede Oficial
                </span>
                <span className="text-gray-400">·</span>
                <span className="text-[10px] sm:text-xs font-mono font-semibold text-gray-600">
                  @chiquexodo_
                </span>
              </div>
              <h2 className="text-base sm:text-lg font-bold leading-tight text-gray-900 group-hover:text-[#E21885] transition-colors">
                Seguir no Instagram
              </h2>
              <p className="text-[11px] sm:text-xs text-gray-500">
                Acompanhe fotos, reels e looks nos stories diários
              </p>
            </div>
          </div>

          {/* Right External Link Icon */}
          <div className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0 transition-colors ml-2 bg-pink-50 group-hover:bg-[#E21885] group-hover:text-white text-gray-500">
            <ExternalLink className="w-4 h-4 transition-colors" />
          </div>
        </a>
      </div>
    </div>
  );
};
