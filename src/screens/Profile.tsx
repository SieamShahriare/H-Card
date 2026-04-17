import React, { useState } from 'react';
import { 
  Settings, 
  Shield, 
  Bell, 
  HelpCircle, 
  LogOut, 
  ChevronRight,
  User as UserIcon,
  QrCode,
  Edit3,
  Globe,
  X 
} from 'lucide-react';
import qrCode from '../assets/qrCode.png';
import { User } from '../types';
import { useLanguage } from '../context/LanguageContext';

interface ProfileProps {
  user: User;
}

export default function Profile({ user }: ProfileProps) {
  const { locale, toggleLanguage, t } = useLanguage();
  const [showQrModal, setShowQrModal] = useState(false);

  return (
    <div className="space-y-10 pb-8">
      {/* Profile Header */}
      <header className="flex flex-col items-center text-center">
        <div className="relative mb-6">
          <div className="w-32 h-32 rounded-full border-4 border-emerald-100 p-1 shadow-xl">
            <img 
              src={user.image} 
              alt="Profile" 
              className="w-full h-full rounded-full object-cover"
            />
          </div>
          <button className="absolute bottom-1 right-1 w-10 h-10 bg-primary text-white rounded-full border-4 border-white flex items-center justify-center shadow-lg hover:scale-110 active:scale-95 transition-transform">
            <Edit3 size={18} />
          </button>
        </div>
        <h2 className="text-3xl font-extrabold text-on-background tracking-tighter">{user.name}</h2>
        <p className="text-on-surface-variant font-medium mt-1">{t('screens.home.healthId')}: {user.id}</p>
        
        <div className="flex gap-3 mt-6">
          <button 
            onClick={() => setShowQrModal(true)}
            className="px-6 py-2.5 bg-primary text-white rounded-full font-bold text-xs flex items-center gap-2 shadow-md active:scale-95 transition-transform"
          >
            <QrCode size={16} /> {t('screens.profile.qrCode')}
          </button>
          <button className="px-6 py-2.5 bg-surface-container-high text-primary rounded-full font-bold text-xs active:scale-95 transition-transform">
            {t('screens.profile.editProfile')}
          </button>
        </div>
      </header>

      {/* Info Cards Bento */}
      <section className="grid grid-cols-2 gap-4">
        <div className="bg-surface-container-lowest p-6 rounded-3xl border border-outline-variant/10 shadow-sm">
          <p className="text-[9px] font-bold text-outline uppercase tracking-widest mb-1">{t('screens.profile.bloodGroup')}</p>
          <p className="text-2xl font-extrabold text-primary">{user.bloodGroup}</p>
        </div>
        <div className="bg-surface-container-lowest p-6 rounded-3xl border border-outline-variant/10 shadow-sm">
          <p className="text-[9px] font-bold text-outline uppercase tracking-widest mb-1">{t('screens.profile.age')}</p>
          <p className="text-2xl font-extrabold text-primary">{user.age} {t('screens.profile.years')}</p>
        </div>
      </section>

      {/* Settings List */}
      <section className="space-y-2">
        <h3 className="text-[11px] font-bold text-on-surface-variant uppercase tracking-[0.15em] mb-4 px-2">{t('screens.profile.accountSettings')}</h3>
        <div className="bg-surface-container-low rounded-[2rem] overflow-hidden border border-outline-variant/10">
          <SettingItem 
            icon={<Globe size={20} />} 
            label={t('profile.language')} 
            value={locale === 'en' ? t('screens.profile.english') : t('screens.profile.bangla')}
            onClick={toggleLanguage}
          />
          <SettingItem icon={<UserIcon size={20} />} label={t('screens.profile.personalInfo')} />
          <SettingItem icon={<Shield size={20} />} label={t('screens.profile.security')} />
          <SettingItem icon={<Bell size={20} />} label={t('screens.profile.notifications')} />
          <SettingItem icon={<Settings size={20} />} label={t('screens.profile.preferences')} />
          <SettingItem icon={<HelpCircle size={20} />} label={t('screens.profile.help')} />
        </div>
      </section>

      {/* Logout */}
      <section className="px-2">
        <button className="w-full py-5 flex items-center justify-center gap-3 text-red-600 font-bold text-base hover:bg-red-50 rounded-2xl transition-colors active:scale-95">
          <LogOut size={22} /> {t('screens.profile.logout')}
        </button>
        <p className="text-center text-[10px] text-outline font-medium mt-6 uppercase tracking-widest">{t('screens.profile.version')} 2.4.1 ({t('screens.profile.build')} 882)</p>
      </section>

      {showQrModal && (
        <div 
          onClick={() => setShowQrModal(false)}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
        >
          <div 
            onClick={(e) => e.stopPropagation()}
            className="relative bg-surface w-full max-w-sm rounded-3xl overflow-hidden shadow-2xl flex flex-col animate-in zoom-in-95 duration-200"
          >
            {/* Header */}
            <div className="p-4 border-b border-outline-variant flex justify-between items-center bg-surface">
              <h3 className="font-bold text-on-surface">{t('screens.profile.qrCode')}</h3>
              <button 
                onClick={() => setShowQrModal(false)}
                className="p-2 hover:bg-surface-container-high rounded-full transition-colors"
              >
                <X size={20} className="text-on-surface" />
              </button>
            </div>

            {/* QR Code Body */}
            <div className="p-8 bg-white flex items-center justify-center">
              <img 
                src={qrCode} 
                alt="Health ID QR Code" 
                className="w-full aspect-square"
              />
            </div>

            {/* Footer */}
            <div className="p-4 border-t border-outline-variant bg-surface">
              <button 
                onClick={() => setShowQrModal(false)}
                className="w-full py-4 bg-primary text-on-primary rounded-2xl font-bold text-sm hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20"
              >
                {t('screens.medicalHistory.close')}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function SettingItem({ icon, label, value, onClick }: { icon: React.ReactNode, label: string, value?: string, onClick?: () => void }) {
  return (
    <button className="w-full px-6 py-5 flex items-center justify-between hover:bg-surface-container-high transition-colors group text-left" onClick={onClick}>
      <div className="flex items-center gap-4">
        <div className="text-outline group-hover:text-primary transition-colors">
          {icon}
        </div>
        <span className="text-sm font-bold text-on-surface">{label}</span>
      </div>
      <div className="flex items-center gap-2">
        {value && <span className="text-xs font-bold text-primary bg-primary/10 px-3 py-1 rounded-full">{value}</span>}
        <ChevronRight size={18} className="text-outline group-hover:text-primary transition-colors" />
      </div>
    </button>
  );
}
