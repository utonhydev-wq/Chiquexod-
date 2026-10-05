import React, { useState } from 'react';
import { ProfileHeader } from './components/ProfileHeader.tsx';
import { Highlights } from './components/Highlights.tsx';
import { ActionLinks } from './components/ActionLinks.tsx';
import { TrustBadges } from './components/TrustBadges.tsx';
import { QRCodeModal } from './components/QRCodeModal.tsx';
import { ShareModal } from './components/ShareModal.tsx';
import { HighlightsModal, HighlightItem } from './components/HighlightsModal.tsx';
import { Footer } from './components/Footer.tsx';
import { BookmarkPlus, Check } from 'lucide-react';

export default function App() {
  const [isQRModalOpen, setIsQRModalOpen] = useState(false);
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);
  const [selectedHighlight, setSelectedHighlight] = useState<HighlightItem | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const bioSiteUrl = typeof window !== 'undefined' ? window.location.href : 'https://w.app/chiquexodo';

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3000);
  };

  const handleSaveContact = () => {
    const vcard = `BEGIN:VCARD
VERSION:3.0
FN:Chiquexodó - Moda Infantil
ORG:Chiquexodó
NOTE:Onde o estilo encontra a fofura! Entregamos para todo o Brasil.
URL:https://w.app/chiquexodo
URL;type=Instagram:https://www.instagram.com/chiquexodo_/
END:VCARD`;

    const blob = new Blob([vcard], { type: 'text/vcard;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'Chiquexodo_Contato.vcf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    showToast('Contato pronto para salvar no seu celular!');
  };

  return (
    <div className="min-h-screen bg-[#0C1014] text-gray-100 flex flex-col items-center justify-start relative px-4 py-6 sm:py-10 selection:bg-[#E21885] selection:text-white">
      {/* Background radial ambient lights for authentic luxury dark aesthetic */}
      <div
        className="fixed top-0 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-gradient-to-b from-[#E21885]/12 via-[#E21885]/5 to-transparent blur-[90px] pointer-events-none -z-10"
        aria-hidden="true"
      />
      <div
        className="fixed bottom-0 right-0 w-[400px] h-[300px] bg-gradient-to-t from-[#25D366]/5 to-transparent blur-[100px] pointer-events-none -z-10"
        aria-hidden="true"
      />

      {/* Main Single-Column Bio Card */}
      <main className="w-full max-w-[440px] flex flex-col items-center">
        {/* Profile Header (Logo, Name, Bio, Links) */}
        <ProfileHeader
          onOpenQR={() => setIsQRModalOpen(true)}
          onOpenShare={() => setIsShareModalOpen(true)}
        />

        {/* Highlights Row (Novidades, Looks, Depoimentos, Envios) */}
        <Highlights
          onSelectHighlight={(highlight) => setSelectedHighlight(highlight)}
        />

        {/* Action Links (WhatsApp in supreme prominence + Instagram) */}
        <ActionLinks />

        {/* Quick Utility: Save Contact to Phonebook */}
        <div className="w-full mt-3">
          <button
            onClick={handleSaveContact}
            className="w-full py-3 px-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/10 text-xs font-semibold text-gray-300 hover:text-white flex items-center justify-center gap-2 transition-all active:scale-[0.98] cursor-pointer"
          >
            <BookmarkPlus className="w-4 h-4 text-[#E21885]" />
            <span>Salvar contato da Chiquexodó no celular</span>
          </button>
        </div>

        {/* Trust & Guarantee Badges (Envio Nacional, Atendimento, Estilo & Conforto) */}
        <TrustBadges />

        {/* Footer */}
        <Footer />
      </main>

      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 py-2.5 px-4 rounded-full bg-[#1F242D] border border-white/10 shadow-2xl text-xs font-medium text-white flex items-center gap-2 animate-bounce">
          <Check className="w-4 h-4 text-[#25D366]" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Modals */}
      <QRCodeModal
        isOpen={isQRModalOpen}
        onClose={() => setIsQRModalOpen(false)}
        url="https://w.app/chiquexodo"
        title="WhatsApp Chiquexodó"
      />

      <ShareModal
        isOpen={isShareModalOpen}
        onClose={() => setIsShareModalOpen(false)}
        url={bioSiteUrl}
      />

      <HighlightsModal
        highlight={selectedHighlight}
        onClose={() => setSelectedHighlight(null)}
      />
    </div>
  );
}
