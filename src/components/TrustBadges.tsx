import React from 'react';
import { Truck, MessageCircleHeart, Sparkles } from 'lucide-react';

export const TrustBadges: React.FC = () => {
  return (
    <div className="w-full grid grid-cols-3 gap-2.5 my-5">
      {/* Badge 1: Envio */}
      <div className="flex flex-col items-center text-center p-3 rounded-2xl border border-[#EAD5E1] bg-white/90 shadow-sm shadow-[#964B74]/5 hover:border-[#E21885]/40 transition-all">
        <div className="w-8 h-8 rounded-xl bg-[#E21885]/15 text-[#E21885] flex items-center justify-center mb-2">
          <Truck className="w-4 h-4" />
        </div>
        <span className="text-[11px] font-bold text-gray-900">
          Faça seu pedido
        </span>
        <span className="text-[10px] mt-0.5 leading-tight text-gray-500">
          Envio seguro
        </span>
      </div>

      {/* Badge 2: Atendimento */}
      <div className="flex flex-col items-center text-center p-3 rounded-2xl border border-[#EAD5E1] bg-white/90 shadow-sm shadow-[#964B74]/5 hover:border-[#25D366]/40 transition-all">
        <div className="w-8 h-8 rounded-xl bg-[#25D366]/15 text-[#25D366] flex items-center justify-center mb-2">
          <MessageCircleHeart className="w-4 h-4" />
        </div>
        <span className="text-[11px] font-bold text-gray-900">
          Atendimento
        </span>
        <span className="text-[10px] mt-0.5 leading-tight text-gray-500">
          Via WhatsApp
        </span>
      </div>

      {/* Badge 3: Conforto & Estilo */}
      <div className="flex flex-col items-center text-center p-3 rounded-2xl border border-[#EAD5E1] bg-white/90 shadow-sm shadow-[#964B74]/5 hover:border-[#ff4d91]/40 transition-all">
        <div className="w-8 h-8 rounded-xl bg-[#ff4d91]/15 text-[#ff4d91] flex items-center justify-center mb-2">
          <Sparkles className="w-4 h-4" />
        </div>
        <span className="text-[11px] font-bold text-gray-900">
          Estilo & Fofura
        </span>
        <span className="text-[10px] mt-0.5 leading-tight text-gray-500">
          Conforto total
        </span>
      </div>
    </div>
  );
};
