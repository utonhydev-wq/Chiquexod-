import React from 'react';
import { X, ExternalLink, Sparkles, Shirt, Heart, Package } from 'lucide-react';

export interface HighlightItem {
  id: string;
  name: string;
  iconName: 'sparkles' | 'shirt' | 'heart' | 'package';
  subtitle: string;
  description: string;
  color: string;
}

interface HighlightsModalProps {
  highlight: HighlightItem | null;
  onClose: () => void;
}

export const HighlightsModal: React.FC<HighlightsModalProps> = ({
  highlight,
  onClose,
}) => {
  if (!highlight) return null;

  const renderIcon = (name: HighlightItem['iconName'], className: string) => {
    switch (name) {
      case 'sparkles':
        return <Sparkles className={className} />;
      case 'shirt':
        return <Shirt className={className} />;
      case 'heart':
        return <Heart className={className} />;
      case 'package':
        return <Package className={className} />;
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md">
      <div className="absolute inset-0" onClick={onClose} />

      <div className="relative w-full max-w-sm rounded-3xl p-6 shadow-2xl z-10 text-center border bg-white border-[#EAD5E1] text-gray-900 shadow-[#964B74]/20">
        <button
          onClick={onClose}
          aria-label="Fechar"
          className="absolute top-4 right-4 p-2 rounded-full transition-colors cursor-pointer text-gray-400 hover:text-gray-900 bg-pink-50 hover:bg-pink-100"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Highlight Cover Icon */}
        <div className="mx-auto w-20 h-20 rounded-full p-[2px] bg-gradient-to-tr from-[#E21885] via-[#ff5b94] to-[#f97316] mb-4 shadow-lg shadow-[#E21885]/20">
          <div className="w-full h-full rounded-full flex items-center justify-center bg-white">
            {renderIcon(highlight.iconName, 'w-8 h-8 text-[#E21885]')}
          </div>
        </div>

        <span className="text-[11px] font-bold uppercase tracking-wider text-[#E21885]">
          Destaque do Instagram
        </span>
        <h3 className="text-xl font-bold mt-1 mb-2 text-gray-900">
          {highlight.name}
        </h3>
        <p className="text-xs leading-relaxed mb-6 px-2 text-gray-600">
          {highlight.description}
        </p>

        {/* CTA to view on official Instagram */}
        <a
          href="https://www.instagram.com/chiquexodo_/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full py-3.5 px-4 rounded-2xl bg-gradient-to-r from-[#E21885] to-[#f14a9b] hover:from-[#c71273] hover:to-[#db3280] text-white text-xs font-bold flex items-center justify-center gap-2 shadow-lg shadow-[#E21885]/25 transition-all active:scale-95 cursor-pointer"
        >
          <span>Ver stories no Instagram oficial</span>
          <ExternalLink className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
};
