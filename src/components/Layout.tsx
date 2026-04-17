import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Home, 
  FileText, 
  Calendar, 
  User as UserIcon, 
  Bell, 
  Menu, 
  Wallet,
  ArrowLeft
} from 'lucide-react';
import { Screen, User } from '../types';
import NavigationDrawer from './NavigationDrawer';

interface LayoutProps {
  children: React.ReactNode;
  currentScreen: Screen;
  setScreen: (screen: Screen) => void;
  title?: string;
  showBack?: boolean;
  onBack?: () => void;
  user: User;
}

export default function Layout({ 
  children, 
  currentScreen, 
  setScreen, 
  title = "e-Health Card",
  showBack = false,
  onBack,
  user
}: LayoutProps) {
  
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const isMainScreen = ['home', 'records', 'appointments', 'profile'].includes(currentScreen);

  return (
    <div className="min-h-screen bg-background flex justify-center">
      {/* Mobile Container Emulator */}
      <div className="w-full max-w-[430px] bg-surface min-h-screen relative flex flex-col shadow-2xl overflow-hidden">
        
        {/* Top App Bar */}
        <header className="sticky top-0 z-30 glass-header h-16 flex items-center justify-between px-6 shrink-0 bg-surface/80">
          <div className="flex items-center gap-4">
            {showBack ? (
              <button 
                onClick={onBack}
                className="p-2 -ml-2 hover:bg-emerald-50 text-primary transition-colors active:scale-95 rounded-full"
              >
                <ArrowLeft size={24} />
              </button>
            ) : (
              <button 
                onClick={() => setIsDrawerOpen(true)}
                className="p-2 -ml-2 hover:bg-emerald-50 text-primary transition-colors active:scale-95 rounded-full"
              >
                <Menu size={24} />
              </button>
            )}
            {!showBack && (
              <div className="flex items-center gap-2">
                <Wallet className="text-primary" size={20} />
                <h1 className="text-lg font-bold text-primary tracking-tight font-headline">
                  {title}
                </h1>
              </div>
            )}
            {showBack && (
              <h1 className="text-lg font-bold text-primary tracking-tight font-headline">
                {title}
              </h1>
            )}
          </div>
          <div className="flex items-center gap-2">
            <button 
              onClick={() => setScreen('notifications')}
              className="p-2 hover:bg-emerald-50 text-primary transition-colors active:scale-95 rounded-full relative"
            >
              <Bell size={24} />
              <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
            </button>
            <button 
              onClick={() => setScreen('profile')}
              className="w-8 h-8 rounded-full overflow-hidden ring-2 ring-emerald-100 ml-2 transition-transform active:scale-90"
            >
              <img 
                src={user.image} 
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </button>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto no-scrollbar pb-32 relative z-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentScreen}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="px-6 pt-6"
            >
              {children}
            </motion.div>
          </AnimatePresence>
        </main>

        {/* Bottom Navigation */}
        <nav className="absolute bottom-0 left-0 w-full glass-header rounded-t-[2rem] h-24 flex justify-around items-center px-4 pb-6 shadow-[0_-4px_24px_rgba(17,29,37,0.06)] z-30 bg-surface/80 border-t border-outline-variant/10">
          <NavItem 
            active={currentScreen === 'home'} 
            icon={<Home size={22} />} 
            label="Home" 
            onClick={() => setScreen('home')} 
          />
          <NavItem 
            active={currentScreen === 'records' || currentScreen.includes('history') || currentScreen === 'vaccines' || currentScreen === 'prescriptions' || currentScreen === 'insurance'} 
            icon={<FileText size={22} />} 
            label="Records" 
            onClick={() => setScreen('records')} 
          />
          <NavItem 
            active={currentScreen === 'appointments' || currentScreen === 'past-appointments' || currentScreen === 'book-appointment' || currentScreen === 'select-hospital' || currentScreen === 'select-doctor' || currentScreen === 'schedule-appointment' || currentScreen === 'booking-success'} 
            icon={<Calendar size={22} />} 
            label="Appointments" 
            onClick={() => setScreen('appointments')} 
          />
          <NavItem 
            active={currentScreen === 'profile'} 
            icon={<UserIcon size={22} />} 
            label="Profile" 
            onClick={() => setScreen('profile')} 
          />
        </nav>

        {/* Navigation Drawer */}
        <NavigationDrawer 
          isOpen={isDrawerOpen} 
          onClose={() => setIsDrawerOpen(false)} 
          user={user} 
          setScreen={setScreen} 
          currentScreen={currentScreen} 
        />
      </div>
    </div>
  );
}

function NavItem({ active, icon, label, onClick }: { active: boolean, icon: React.ReactNode, label: string, onClick: () => void }) {
  return (
    <button 
      onClick={onClick}
      className={`flex flex-col items-center justify-center px-4 py-2 rounded-2xl transition-all duration-300 active:scale-90 ${
        active 
          ? 'bg-emerald-100 text-primary' 
          : 'text-slate-500 hover:text-primary'
      }`}
    >
      <div className={active ? 'fill-current' : ''}>{icon}</div>
      <span className="text-[10px] font-bold uppercase tracking-wider mt-1 font-headline">
        {label}
      </span>
    </button>
  );
}
