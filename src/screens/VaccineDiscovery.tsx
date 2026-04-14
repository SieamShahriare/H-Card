import React from 'react';
import { Search, Info, ShieldAlert, Thermometer, Syringe, ShieldCheck } from 'lucide-react';
import { Screen } from '../types';

interface VaccineDiscoveryProps {
  setScreen: (screen: Screen) => void;
}

export default function VaccineDiscovery({ setScreen }: VaccineDiscoveryProps) {
  return (
    <div className="space-y-8 pb-8">
      {/* Hero Search Section */}
      <section>
        <div className="mb-6">
          <h2 className="text-4xl font-extrabold tracking-tight text-primary mb-2">Vaccine Discovery</h2>
          <p className="text-on-surface-variant text-sm">Search and schedule immunization appointments to keep your community and yourself protected.</p>
        </div>
        
        <div className="relative group">
          <div className="absolute inset-y-0 left-5 flex items-center pointer-events-none text-outline">
            <Search size={20} />
          </div>
          <input 
            type="text" 
            placeholder="Search for vaccines..." 
            className="w-full bg-surface-container-high border-none h-14 pl-12 pr-24 rounded-3xl text-sm focus:ring-2 focus:ring-secondary/20 focus:bg-surface-container-lowest transition-all shadow-sm"
          />
          <div className="absolute inset-y-0 right-2 flex items-center">
            <button className="bg-primary text-white h-10 px-4 rounded-2xl font-medium text-xs hover:brightness-110 active:scale-95 transition-all">Search</button>
          </div>
        </div>
      </section>

      {/* Category Pills */}
      <div className="flex gap-2 overflow-x-auto pb-2 no-scrollbar">
        <button className="whitespace-nowrap px-5 py-2 rounded-full bg-primary text-white font-medium text-xs">All Vaccines</button>
        <button className="whitespace-nowrap px-5 py-2 rounded-full bg-surface-container-low text-on-surface-variant font-medium text-xs hover:bg-surface-container-high transition-colors">Seasonal</button>
        <button className="whitespace-nowrap px-5 py-2 rounded-full bg-surface-container-low text-on-surface-variant font-medium text-xs hover:bg-surface-container-high transition-colors">Travel</button>
        <button className="whitespace-nowrap px-5 py-2 rounded-full bg-surface-container-low text-on-surface-variant font-medium text-xs hover:bg-surface-container-high transition-colors">Pediatric</button>
      </div>

      {/* Vaccine Cards Grid */}
      <div className="space-y-4">
        <DiscoveryCard 
          icon={<ShieldAlert size={28} />}
          title="COVID-19 Booster"
          description="Updated monovalent vaccine targeting current variants. recommended for adults 65+ and immunocompromised individuals."
          tag="Highly Recommended"
          tagColor="bg-emerald-100 text-emerald-900"
          metaLabel="Availability"
          metaValue="Immediate"
          metaValueColor="text-emerald-700"
          onSelect={() => setScreen('hospitals')}
        />
        <DiscoveryCard 
          icon={<Thermometer size={28} />}
          title="Influenza (Flu)"
          description="Annual quadrivalent flu shot. Best taken during the autumn months for maximum protection through winter."
          tag="Seasonal"
          tagColor="bg-blue-100 text-blue-900"
          metaLabel="Availability"
          metaValue="In Stock"
          metaValueColor="text-emerald-700"
          onSelect={() => setScreen('hospitals')}
        />
        <DiscoveryCard 
          icon={<Syringe size={28} />}
          title="Hepatitis B"
          description="Protect against liver infection. Required for healthcare workers and recommended for all infants at birth."
          metaLabel="Doses Needed"
          metaValue="3 Dose Series"
          metaValueColor="text-on-surface"
          onSelect={() => setScreen('hospitals')}
        />
        <DiscoveryCard 
          icon={<ShieldCheck size={28} />}
          title="HPV"
          description="Human Papillomavirus vaccine. Prevents infections that can lead to certain types of cancer later in life."
          metaLabel="Eligibility"
          metaValue="Ages 9-26"
          metaValueColor="text-on-surface"
          onSelect={() => setScreen('hospitals')}
        />
      </div>

      {/* Informational Banner */}
      <div className="bg-primary-container text-white p-6 rounded-3xl relative overflow-hidden">
        <div className="relative z-10">
          <h4 className="text-xl font-bold mb-2">Can't find what you need?</h4>
          <p className="text-emerald-100/80 text-xs mb-6 max-w-[80%]">Consult with our healthcare professionals for travel-specific immunizations or specialized medical requirements.</p>
          <button className="bg-white text-primary px-6 py-3 rounded-xl font-bold text-xs hover:bg-emerald-50 transition-colors active:scale-95">
            Chat with Support
          </button>
        </div>
        <div className="absolute -right-8 -bottom-8 opacity-10">
          <Info size={120} />
        </div>
      </div>
    </div>
  );
}

function DiscoveryCard({ icon, title, description, tag, tagColor, metaLabel, metaValue, metaValueColor, onSelect }: any) {
  return (
    <div className="bg-surface-container-lowest p-5 rounded-3xl shadow-sm border border-outline-variant/10 flex flex-col justify-between group hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start mb-4">
        <div className="w-12 h-12 rounded-2xl bg-secondary-container/30 flex items-center justify-center text-secondary">
          {icon}
        </div>
        {tag && (
          <span className={`${tagColor} px-2 py-1 rounded-full text-[9px] font-bold uppercase tracking-wider`}>
            {tag}
          </span>
        )}
      </div>
      <div>
        <h3 className="text-lg font-bold text-on-surface mb-1">{title}</h3>
        <p className="text-xs text-on-surface-variant mb-4 leading-relaxed">{description}</p>
      </div>
      <div className="flex items-center justify-between pt-4 border-t border-surface-container-low">
        <div className="flex flex-col">
          <span className="text-[9px] text-outline font-bold uppercase tracking-widest">{metaLabel}</span>
          <span className={`text-sm font-medium ${metaValueColor}`}>{metaValue}</span>
        </div>
        <div className="flex gap-2">
          <button className="bg-surface-container-high text-primary px-4 py-2 rounded-xl font-semibold text-xs active:scale-95 transition-all">Details</button>
          <button onClick={onSelect} className="bg-primary text-white px-5 py-2 rounded-xl font-semibold text-xs active:scale-95 transition-all shadow-md shadow-primary/10">Select</button>
        </div>
      </div>
    </div>
  );
}
