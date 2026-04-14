import React from 'react';
import { Search, Heart, Shield, Bone, Baby, Stethoscope, User } from 'lucide-react';
import { Screen } from '../types';

export default function BookAppointment({ setScreen }: { setScreen: (s: Screen) => void }) {
  return (
    <div className="space-y-8 pb-8">
      <section>
        <h2 className="text-3xl font-extrabold tracking-tight text-primary leading-tight mb-2">What type of doctor do you need?</h2>
        <p className="text-on-surface-variant text-lg">Select a specialty to begin your booking process.</p>
      </section>

      <section>
        <div className="relative group">
          <div className="absolute inset-y-0 left-5 flex items-center pointer-events-none text-outline">
            <Search size={20} />
          </div>
          <input 
            type="text" 
            placeholder="Search specialty (e.g. Cardiology)" 
            className="w-full bg-surface-container-high border-none rounded-3xl py-5 pl-14 pr-6 text-on-surface placeholder:text-outline-variant focus:ring-2 focus:ring-secondary/20 transition-all duration-300 shadow-sm"
          />
        </div>
      </section>

      <section>
        <div className="flex items-center justify-between mb-6">
          <span className="text-[11px] font-bold uppercase tracking-widest text-outline">Popular Specialties</span>
          <span className="h-px flex-1 bg-outline-variant/20 ml-4"></span>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <SpecialtyCard icon={<Heart size={24} />} title="Cardiology" subtitle="Heart & Vascular" color="text-red-500" bg="bg-red-50" onClick={() => setScreen('select-hospital')} />
          <SpecialtyCard icon={<Shield size={24} />} title="Internal Medicine" subtitle="Adult Care" color="text-primary" bg="bg-emerald-50" onClick={() => setScreen('select-hospital')} />
          <SpecialtyCard icon={<Bone size={24} />} title="Orthopedics" subtitle="Bones & Joints" color="text-secondary" bg="bg-blue-50" onClick={() => setScreen('select-hospital')} />
          <SpecialtyCard icon={<Baby size={24} />} title="Pediatrics" subtitle="Child Health" color="text-amber-600" bg="bg-amber-50" onClick={() => setScreen('select-hospital')} />
          <SpecialtyCard icon={<Stethoscope size={24} />} title="General Physician" subtitle="Primary Care" color="text-on-surface" bg="bg-slate-100" onClick={() => setScreen('select-hospital')} />
          <SpecialtyCard icon={<User size={24} />} title="Dermatology" subtitle="Skin & Hair" color="text-rose-600" bg="bg-rose-50" onClick={() => setScreen('select-hospital')} />
        </div>
      </section>

      <section className="mt-8 overflow-hidden relative rounded-3xl bg-secondary-container p-6 flex flex-col gap-2">
        <div className="absolute -right-12 -top-12 w-48 h-48 bg-secondary/10 rounded-full blur-3xl"></div>
        <span className="text-[10px] font-extrabold tracking-widest text-on-secondary-container uppercase">Assisted Booking</span>
        <h3 className="text-xl font-bold text-on-secondary-fixed leading-tight z-10">Unsure about your specialty?</h3>
        <p className="text-on-secondary-container/80 text-sm mb-4 z-10 leading-relaxed">Speak with our digital triage nurse to find the right care path for your symptoms.</p>
        <button className="bg-on-secondary-fixed text-white w-fit px-6 py-3 rounded-2xl text-sm font-bold active:scale-95 transition-all">Start Triage</button>
      </section>
    </div>
  );
}

function SpecialtyCard({ icon, title, subtitle, color, bg, onClick }: any) {
  return (
    <button onClick={onClick} className="flex flex-col items-start p-6 bg-surface-container-lowest rounded-3xl shadow-sm active:scale-[0.98] transition-all duration-200 text-left border border-transparent hover:border-secondary/20">
      <div className={`w-12 h-12 rounded-2xl ${bg} flex items-center justify-center ${color} mb-4`}>
        {icon}
      </div>
      <span className="text-primary font-bold text-lg tracking-tight">{title}</span>
      <span className="text-on-surface-variant text-sm mt-1">{subtitle}</span>
    </button>
  );
}
