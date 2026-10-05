import React from 'react';
import { Sparkles, Shirt, Heart, Package } from 'lucide-react';
import { HighlightItem } from './HighlightsModal.tsx';

interface HighlightsProps {
  onSelectHighlight: (highlight: HighlightItem) => void;
}

export const highlightsData: HighlightItem[] = [
  {
    id: 'novidades',
    name: 'Novidades',
    iconName: 'sparkles',
    subtitle: 'Lançamentos',
    description:
      'Confira os lançamentos mais recentes, novas coleções e peças exclusivas para vestir os pequenos com encanto.',
    color: '#E21885',
  },
  {
    id: 'looks',
    name: 'Looks',
    iconName: 'shirt',
    subtitle: 'Inspirações',
    description:
      'Combinações delicadas e cheias de estilo preparadas com carinho para inspirar o dia a dia e momentos especiais.',
    color: '#f43f5e',
  },
  {
    id: 'depoimentos',
    name: 'Depoimentos',
    iconName: 'heart',
    subtitle: 'Clientes',
    description:
      'Mensagens reais e fotos de clientes apaixonados pelo conforto, qualidade e cuidado de cada pedido Chiquexodó.',
    color: '#ec4899',
  },
  {
    id: 'envios',
    name: 'Envios',
    iconName: 'package',
    subtitle: 'Para todo Brasil',
    description:
      'Registros dos nossos pacotes sendo preparados e despachados com todo zelo e segurança para qualquer cidade do Brasil.',
    color: '#d946ef',
  },
];

export const Highlights: React.FC<HighlightsProps> = ({
  onSelectHighlight,
}) => {
  const renderIcon = (name: HighlightItem['iconName']) => {
    const iconClass = 'w-6 h-6 text-[#E21885] transition-transform group-hover:scale-110';

    switch (name) {
      case 'sparkles':
        return <Sparkles className={iconClass} />;
      case 'shirt':
        return <Shirt className={iconClass} />;
      case 'heart':
        return <Heart className={iconClass} />;
      case 'package':
        return <Package className={iconClass} />;
    }
  };

  return (
    <div className="w-full my-5">
      <div className="flex items-center justify-between px-2 mb-3">
        <span className="text-[11px] font-bold uppercase tracking-wider text-gray-600">
          Destaques do Instagram
        </span>
        <span className="text-[11px] text-[#E21885] font-semibold">
          Toque para ver
        </span>
      </div>

      <div className="grid grid-cols-4 gap-2">
        {highlightsData.map((item) => (
          <button
            key={item.id}
            onClick={() => onSelectHighlight(item)}
            className="group flex flex-col items-center focus:outline-none transition-transform active:scale-95 cursor-pointer"
          >
            {/* Instagram story style circular ring */}
            <div className="relative w-16 h-16 sm:w-18 sm:h-18 rounded-full p-[2px] bg-gradient-to-tr from-[#E21885] via-[#ff4d91] to-[#f97316] group-hover:from-[#E21885] group-hover:to-[#ff90c2] transition-all shadow-md shadow-[#964B74]/15">
              <div className="w-full h-full rounded-full flex items-center justify-center border-2 border-white bg-white group-hover:bg-pink-50/70 transition-colors">
                {renderIcon(item.iconName)}
              </div>
            </div>
            {/* Label */}
            <span className="mt-2 text-[11px] font-bold text-gray-700 group-hover:text-[#E21885] truncate max-w-[70px] transition-colors">
              {item.name}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};
