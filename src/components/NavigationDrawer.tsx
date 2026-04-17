import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Home, 
  History, 
  Syringe, 
  Pill, 
  Wallet, 
  Calendar, 
  User as UserIcon, 
  Settings, 
  HelpCircle, 
  LogOut,
  Shield
} from 'lucide-react';
import { Screen, User } from '../types';
import { useLanguage } from '../context/LanguageContext';

interface NavigationDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  user: User;
  setScreen: (screen: Screen) => void;
  currentScreen: Screen;
}

export default function NavigationDrawer({ isOpen, onClose, user, setScreen, currentScreen }: NavigationDrawerProps) {
  const { t } = useLanguage();
  const navItems = [
    { icon: <Home size={24} />, label: t('nav.home'), screen: 'home' as Screen },
    { icon: <History size={24} />, label: t('nav.history'), screen: 'medical-history' as Screen },
    { icon: <Syringe size={24} />, label: t('nav.vaccines'), screen: 'vaccines' as Screen },
    { icon: <Pill size={24} />, label: t('nav.prescriptions'), screen: 'prescriptions' as Screen },
    { icon: <Wallet size={24} />, label: t('nav.insurance'), screen: 'insurance' as Screen },
    { icon: <Calendar size={24} />, label: t('nav.appointments'), screen: 'appointments' as Screen },
  ];

  const bottomItems = [
    { icon: <UserIcon size={24} />, label: t('nav.profile'), screen: 'profile' as Screen },
    { icon: <Settings size={24} />, label: t('nav.settings'), screen: 'profile' as Screen },
    { icon: <HelpCircle size={24} />, label: t('nav.help'), screen: 'profile' as Screen },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-on-surface/40 backdrop-blur-sm z-40"
          />
          <motion.aside
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="absolute inset-y-0 left-0 z-50 flex flex-col p-6 h-full w-80 rounded-r-3xl bg-surface shadow-2xl shadow-emerald-950/10 font-body text-lg"
          >
            {/* Header Section */}
            <div className="flex flex-col items-start gap-4 mb-8 pt-4">
              <div className="relative group">
                <img 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAcUWmwSNfSdYVnRKIKWHs7mPoVbf8Serdlgbt9KZqsaAjq7oKkzvhYdUem6gbDuAiCSNu7Y_0eRVHK6puNiD-b8MJ7Y105bep10XPnCEDYUyNC-1ZyPC4Mb6vKnB8Hbait83wClVJ0SJQHntwM0BpLI-b-Kwy9FDDTxFNUT41FX9KUgi-j_pmGqPTIFKFVqtjspsXAzbdGfY6x4yJFYqUvdEBlTo3f2js2outnfXRTQMW4N4QwzI6DvXF3rNkLT0l5WK-5d8FzQSye" 
                  alt={user.name}
                  className="w-20 h-20 rounded-2xl object-cover shadow-lg border-2 border-white"
                />
                <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-emerald-500 border-4 border-surface rounded-full"></div>
              </div>
              <div className="space-y-0.5">
                <h2 className="text-2xl font-bold text-primary tracking-tight">{user.name}</h2>
                <p className="text-sm font-medium text-on-surface-variant">Health ID: {user.id}</p>
              </div>
            </div>

            {/* Navigation Links */}
            <nav className="flex-1 overflow-y-auto space-y-1.5 pr-2 no-scrollbar">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => { setScreen(item.screen); onClose(); }}
                  className={`w-full flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-300 ease-in-out ${
                    currentScreen === item.screen 
                      ? 'bg-emerald-100 text-primary font-bold' 
                      : 'text-on-surface-variant hover:text-primary hover:bg-emerald-50'
                  }`}
                >
                  {item.icon}
                  <span className="text-base">{item.label}</span>
                </button>
              ))}

              <div className="h-px bg-outline-variant/30 my-4 mx-4"></div>

              {bottomItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => { setScreen(item.screen); onClose(); }}
                  className="w-full flex items-center gap-4 px-4 py-3 text-on-surface-variant hover:text-primary hover:bg-emerald-50 rounded-xl transition-all duration-300 ease-in-out"
                >
                  {item.icon}
                  <span className="text-base">{item.label}</span>
                </button>
              ))}
            </nav>

            {/* Footer Branding/Logout */}
            <div className="mt-auto pt-6 flex items-center justify-between border-t border-outline-variant/30">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                  <Shield size={16} className="text-white" />
                </div>
                <span className="text-xs font-bold text-primary tracking-tighter uppercase">e-Health Card</span>
              </div>
              <button className="p-2 text-outline hover:text-red-600 transition-colors active:scale-95 duration-200">
                <LogOut size={20} />
              </button>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
