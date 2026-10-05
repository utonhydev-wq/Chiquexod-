import React from 'react';
import { Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full pt-6 pb-8 border-t border-[#E8D6E0] text-center mt-6">
      <div className="flex items-center justify-center gap-1.5 text-xs mb-1.5 text-gray-700">
        <span>Feito com carinho para a</span>
        <span className="font-bold text-[#1F141E]">
          Chiquexodó
        </span>
        <Heart className="w-3.5 h-3.5 text-[#E21885] fill-[#E21885]" />
      </div>

      <p className="text-[11px] font-medium text-gray-500">
        Moda infantil · Onde o estilo encontra a fofura!
      </p>

      <div className="mt-3 flex items-center justify-center gap-3 text-[11px]">
        <a
          href="https://www.instagram.com/chiquexodo_/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#E21885] font-semibold text-gray-600 transition-colors"
        >
          @chiquexodo_
        </a>
        <span className="text-gray-400">·</span>
        <a
          href="https://w.app/chiquexodo"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#25D366] font-semibold text-gray-600 transition-colors"
        >
          WhatsApp Oficial
        </a>
      </div>

      <p className="text-[10px] mt-4 text-gray-400">
        © {currentYear} Chiquexodó. Todos os direitos reservados.
      </p>
    </footer>
  );
};
