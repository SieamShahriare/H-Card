import React, { useState } from 'react';
import { 
  Pill, 
  History, 
  Stethoscope, 
  Hospital as HospitalIcon
} from 'lucide-react';
import { MEDICATIONS, HOSPITALS, DOCTORS } from '../data';
import { useLanguage } from '../context/LanguageContext';

export default function Prescriptions() {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState<'active' | 'past'>('active');
  
  const activeMeds = MEDICATIONS.filter(m => m.status === 'active');
  const completedMeds = MEDICATIONS.filter(m => m.status === 'completed');

  const getHospitalName = (id: string) => HOSPITALS.find(h => h.id === id)?.name || 'Health Center';
  const getDoctorName = (id: string) => DOCTORS.find(d => d.id === id)?.name || 'Doctor';

  return (
    <div className="space-y-8 pb-8">
      {/* Header Section */}
      <header>
        <div className="flex items-center gap-2 mb-2">
          <span className="uppercase tracking-widest text-secondary font-bold text-[9px]">{t('screens.prescriptions.currentJourney')}</span>
        </div>
        <h2 className="text-4xl font-extrabold text-on-background tracking-tighter mb-4">{t('screens.prescriptions.title')}</h2>
        <p className="text-on-surface-variant text-base leading-relaxed">
          {t('screens.prescriptions.subtitle')}
        </p>
      </header>

      {/* Tabs */}
      <div className="bg-surface-container-high rounded-full p-1.5 flex shadow-inner">
        <button 
          onClick={() => setActiveTab('active')}
          className={`flex-1 py-3 px-4 rounded-full text-xs font-bold tracking-wide transition-all duration-300 ${
            activeTab === 'active' 
              ? 'bg-primary text-white shadow-md' 
              : 'text-on-surface-variant hover:text-primary'
          }`}
        >
          ACTIVE ({activeMeds.length})
        </button>
        <button 
          onClick={() => setActiveTab('past')}
          className={`flex-1 py-3 px-4 rounded-full text-xs font-bold tracking-wide transition-all duration-300 ${
            activeTab === 'past' 
              ? 'bg-primary text-white shadow-md' 
              : 'text-on-surface-variant hover:text-primary'
          }`}
        >
          PAST ({completedMeds.length})
        </button>
      </div>

      {/* Medications List */}
      <section className="space-y-6">
        {activeTab === 'active' ? (
          activeMeds.length > 0 ? (
            activeMeds.map(m => (
              <ActiveMedCard 
                key={m.id}
                name={m.name}
                purpose={m.purpose}
                dosage={m.dosage}
                frequency={m.frequency}
                duration={m.duration}
                remaining={m.remaining}
                refill={m.refill}
                doctor={getDoctorName(m.doctorId)}
                hospital={getHospitalName(m.hospitalId)}
              />
            ))
          ) : (
            <div className="text-center py-12 bg-surface-container-lowest rounded-3xl border border-dashed border-outline-variant">
              <p className="text-on-surface-variant italic">No active medications found.</p>
            </div>
          )
        ) : (
          completedMeds.length > 0 ? (
            completedMeds.map(m => (
              <CompletedMedItem 
                key={m.id}
                name={m.name}
                date={m.endDate || 'Completed Recently'}
                hospital={getHospitalName(m.hospitalId)}
                doctor={getDoctorName(m.doctorId)}
              />
            ))
          ) : (
            <div className="text-center py-12 bg-surface-container-lowest rounded-3xl border border-dashed border-outline-variant">
              <p className="text-on-surface-variant italic">No medication history found.</p>
            </div>
          )
        )}
      </section>

      {/* Informational Card */}
      <section>
        <div className="bg-primary-container text-on-primary-container rounded-3xl p-8 relative overflow-hidden shadow-lg">
          <div className="relative z-10">
            <h3 className="text-2xl font-bold mb-4">{t('screens.prescriptions.safetyTipTitle')}</h3>
            <p className="text-emerald-100/80 text-base leading-relaxed mb-6">
              Always complete the full course of your antibiotics as prescribed by your doctor, even if you feel better. Stopping early can lead to antibiotic resistance.
            </p>
            <button className="bg-white text-primary px-6 py-3 rounded-xl font-bold text-sm active:scale-95 transition-transform">
              Learn More
            </button>
          </div>
          <div className="absolute -right-10 -bottom-10 opacity-10">
            <Pill size={200} />
          </div>
        </div>
      </section>
    </div>
  );
}

function ActiveMedCard({ name, purpose, dosage, frequency, duration, remaining, refill, doctor, hospital }: any) {
  return (
    <div className="bg-surface-container-lowest rounded-3xl p-6 border-l-4 border-secondary shadow-sm hover:shadow-md transition-all">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h4 className="text-xl font-bold text-primary mb-1">{name}</h4>
          <p className="text-on-surface-variant text-xs font-medium">{purpose}</p>
        </div>
        <span className="bg-emerald-100 text-emerald-900 px-3 py-1 rounded-full text-[9px] font-bold uppercase tracking-wider flex items-center gap-1">
          <div className="w-1.5 h-1.5 bg-emerald-600 rounded-full animate-pulse"></div>
          Active
        </span>
      </div>

      <div className="grid grid-cols-2 gap-y-4 gap-x-2 mb-6">
        <MedStat label="Dosage" value={dosage} />
        <MedStat label="Frequency" value={frequency} />
        <MedStat label="Duration" value={duration} />
        <MedStat label={remaining ? "Remaining" : "Refill"} value={remaining || refill} />
      </div>

      <div className="pt-4 border-t border-surface-container-high flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <Stethoscope size={14} className="text-outline" />
          <span className="text-xs text-on-surface-variant font-medium">{doctor}</span>
        </div>
        <div className="flex items-center gap-2">
          <HospitalIcon size={14} className="text-outline" />
          <span className="text-xs font-bold text-secondary">{hospital}</span>
        </div>
      </div>
    </div>
  );
}

function MedStat({ label, value }: { label: string, value: string }) {
  return (
    <div>
      <p className="text-[9px] uppercase tracking-widest text-outline font-bold">{label}</p>
      <p className="text-on-surface font-bold text-sm">{value}</p>
    </div>
  );
}

function CompletedMedItem({ name, date, hospital, doctor }: any) {
  return (
    <div className="bg-surface-container-lowest rounded-2xl p-5 border border-outline-variant/15 flex flex-col gap-4 shadow-sm group hover:shadow-md transition-all">
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 bg-surface-container-low rounded-xl flex items-center justify-center shrink-0 text-outline group-hover:text-primary transition-colors">
          <History size={24} />
        </div>
        <div>
          <h4 className="font-bold text-on-surface text-base">{name}</h4>
          <p className="text-xs text-on-surface-variant font-medium">{date}</p>
        </div>
      </div>
      <div className="flex flex-wrap gap-x-8 gap-y-2 px-1">
        <div>
          <p className="text-[8px] uppercase tracking-widest text-outline font-bold">Hospital</p>
          <p className="text-[11px] font-bold text-on-surface">{hospital}</p>
        </div>
        <div>
          <p className="text-[8px] uppercase tracking-widest text-outline font-bold">Doctor</p>
          <p className="text-[11px] font-bold text-on-surface">{doctor}</p>
        </div>
      </div>
      <button className="text-secondary font-bold text-xs hover:underline text-left">View Records</button>
    </div>
  );
}
