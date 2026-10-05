import React from 'react';
import { Truck, MessageCircleHeart, Sparkles } from 'lucide-react';

export const TrustBadges: React.FC = () => {
  return (
    <div className="w-full grid grid-cols-3 gap-2.5 my-5">
      {/* Badge 1: Envio */}
      <div className="flex flex-col items-center text-center p-3 rounded-2xl bg-[#12161D]/70 border border-white/5 hover:border-white/10 transition-colors">
        <div className="w-8 h-8 rounded-xl bg-[#E21885]/15 text-[#E21885] flex items-center justify-center mb-2">
          <Truck className="w-4 h-4" />
        </div>
        <span className="text-[11px] font-bold text-white">Todo o Brasil</span>
        <span className="text-[10px] text-gray-400 mt-0.5 leading-tight">
          Envio seguro
        </span>
      </div>

      {/* Badge 2: Atendimento */}
      <div className="flex flex-col items-center text-center p-3 rounded-2xl bg-[#12161D]/70 border border-white/5 hover:border-white/10 transition-colors">
        <div className="w-8 h-8 rounded-xl bg-[#25D366]/15 text-[#25D366] flex items-center justify-center mb-2">
          <MessageCircleHeart className="w-4 h-4" />
        </div>
        <span className="text-[11px] font-bold text-white">Atendimento</span>
        <span className="text-[10px] text-gray-400 mt-0.5 leading-tight">
          Via WhatsApp
        </span>
      </div>

      {/* Badge 3: Conforto & Estilo */}
      <div className="flex flex-col items-center text-center p-3 rounded-2xl bg-[#12161D]/70 border border-white/5 hover:border-white/10 transition-colors">
        <div className="w-8 h-8 rounded-xl bg-[#ff4d91]/15 text-[#ff4d91] flex items-center justify-center mb-2">
          <Sparkles className="w-4 h-4" />
        </div>
        <span className="text-[11px] font-bold text-white">Estilo & Fofura</span>
        <span className="text-[10px] text-gray-400 mt-0.5 leading-tight">
          Conforto total
        </span>
      </div>
    </div>
  );
};
