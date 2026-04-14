import React from 'react';
import { motion } from 'motion/react';
import { 
  History, 
  FileText, 
  ShieldCheck, 
  Syringe, 
  Calendar, 
  ChevronRight,
  Heart
} from 'lucide-react';
import { Screen, User } from '../types';

interface HomeProps {
  user: User;
  setScreen: (screen: Screen) => void;
}

export default function Home({ user, setScreen }: HomeProps) {
  return (
    <div className="space-y-8">
      {/* Greeting Section */}
      <section className="flex justify-between items-center">
        <div>
          <p className="text-on-surface-variant text-[10px] font-bold tracking-[0.15em] uppercase mb-1">
            Welcome Back
          </p>
          <h2 className="text-3xl font-extrabold tracking-tight text-primary leading-tight">
            Good Morning,<br />Shakhwat
          </h2>
        </div>
        <div className="w-14 h-14 rounded-full bg-primary-container flex items-center justify-center text-on-primary-container shadow-md">
          <Heart size={28} className="fill-current" />
        </div>
      </section>

      {/* Health Card Widget */}
      <section>
        <div 
          className="relative overflow-hidden rounded-3xl p-8 text-white shadow-2xl transition-transform hover:scale-[1.01] duration-300"
          style={{ background: 'linear-gradient(135deg, #1A4D3E 0%, #0F3A2E 100%)' }}
        >
          {/* Abstract Grain Pattern Overlay */}
          <div 
            className="absolute inset-0 opacity-10 pointer-events-none mix-blend-overlay"
            style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/carbon-fibre.png')" }}
          ></div>
          
          <div className="flex justify-between relative z-10">
            <div className="space-y-6">
              <div>
                <p className="text-emerald-200/70 text-[10px] font-bold tracking-[0.2em] uppercase mb-1">
                  Citizen Record
                </p>
                <h3 className="text-2xl font-bold leading-none">{user.name}</h3>
              </div>
              
              <div className="space-y-3">
                <div>
                  <p className="text-emerald-200/50 text-[9px] uppercase tracking-wider font-semibold">Health ID</p>
                  <p className="text-lg font-mono tracking-wider font-medium">{user.id}</p>
                </div>
                
                <div className="flex gap-8">
                  <div>
                    <p className="text-emerald-200/50 text-[9px] uppercase tracking-wider font-semibold">Blood Group</p>
                    <p className="text-base font-bold">{user.bloodGroup}</p>
                  </div>
                  <div>
                    <p className="text-emerald-200/50 text-[9px] uppercase tracking-wider font-semibold">Age</p>
                    <p className="text-base font-bold">{user.age}</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col items-end justify-between">
              <ShieldCheck size={64} className="opacity-20" />
            </div>
          </div>
        </div>
      </section>

      {/* Quick Access Grid */}
      <section>
        <h4 className="text-[11px] font-bold text-on-surface-variant uppercase tracking-[0.15em] mb-6 px-1">
          Vital Services
        </h4>
        <div className="grid grid-cols-2 gap-4">
          <ServiceTile 
            icon={<History size={24} />} 
            label="Medical History" 
            onClick={() => setScreen('medical-history')}
            color="text-primary"
          />
          <ServiceTile 
            icon={<FileText size={24} />} 
            label="Prescriptions" 
            onClick={() => setScreen('prescriptions')}
            color="text-secondary"
          />
          <ServiceTile 
            icon={<Syringe size={24} />} 
            label="Vaccines" 
            onClick={() => setScreen('vaccines')}
            color="text-emerald-700"
          />
          <ServiceTile 
            icon={<ShieldCheck size={24} />} 
            label="Subsidies & Insurance" 
            onClick={() => setScreen('insurance')}
            color="text-tertiary"
          />
        </div>
      </section>

      {/* Upcoming Appointment */}
      <section>
        <div className="bg-surface-container-lowest p-6 rounded-3xl border border-outline-variant/10 shadow-sm flex items-center gap-5">
          <div className="w-14 h-14 rounded-2xl bg-secondary-container/30 flex items-center justify-center text-secondary shrink-0">
            <Calendar size={28} />
          </div>
          <div className="flex-1">
            <p className="text-[9px] font-bold uppercase tracking-widest text-on-surface-variant mb-1">Next Appointment</p>
            <p className="text-sm font-bold text-on-surface">General Cardiology Checkup</p>
            <p className="text-[11px] text-on-surface-variant">Tomorrow, 09:30 AM • BSMMU Hospital</p>
          </div>
          <button className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-surface-container-high transition-colors">
            <ChevronRight size={20} className="text-outline" />
          </button>
        </div>
      </section>
    </div>
  );
}

function ServiceTile({ icon, label, onClick, color }: { icon: React.ReactNode, label: string, onClick: () => void, color: string }) {
  return (
    <button 
      onClick={onClick}
      className="bg-surface-container-low p-6 rounded-3xl flex flex-col gap-4 hover:bg-surface-container transition-all group cursor-pointer shadow-sm text-left active:scale-[0.98]"
    >
      <div className={`w-12 h-12 rounded-2xl bg-white flex items-center justify-center ${color} shadow-sm group-hover:scale-110 transition-transform`}>
        {icon}
      </div>
      <span className="text-sm font-bold text-on-surface tracking-tight leading-tight">
        {label}
      </span>
    </button>
  );
}
