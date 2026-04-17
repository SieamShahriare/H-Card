import React from 'react';
import { Construction, ArrowLeft } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function ComingSoon({ onBack }: { onBack: () => void }) {
  const { t } = useLanguage();
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-6">
      <div className="w-20 h-20 bg-emerald-50 rounded-full flex items-center justify-center text-primary mb-6">
        <Construction size={40} />
      </div>
      <h2 className="text-2xl font-extrabold text-primary mb-2">{t('common.comingSoon')}</h2>
      <p className="text-on-surface-variant mb-8">
        {t('screens.comingSoon.subtitle')}
      </p>
      <button 
        onClick={onBack}
        className="flex items-center gap-2 text-primary font-bold hover:underline"
      >
        <ArrowLeft size={18} /> {t('common.back')}
      </button>
    </div>
  );
}
