import React from 'react';
import { 
  Pill, 
  History, 
  Stethoscope, 
  Hospital,
  Info
} from 'lucide-react';

export default function Prescriptions() {
  return (
    <div className="space-y-10 pb-8">
      {/* Header Section */}
      <header>
        <div className="flex items-center gap-2 mb-2">
          <span className="uppercase tracking-widest text-secondary font-bold text-[9px]">Current Journey</span>
        </div>
        <h2 className="text-4xl font-extrabold text-on-background tracking-tighter mb-4">Prescriptions</h2>
        <p className="text-on-surface-variant text-base leading-relaxed">
          Manage your ongoing treatments and review your medication history from all connected healthcare providers.
        </p>
      </header>

      {/* Active Medications Section */}
      <section>
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <div className="h-8 w-1 bg-secondary rounded-full"></div>
            <h3 className="text-2xl font-bold text-on-background tracking-tight">Active Medications</h3>
          </div>
          <span className="bg-secondary/10 text-secondary px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider">2 Active</span>
        </div>

        <div className="space-y-6">
          <ActiveMedCard 
            name="Napa Extend"
            purpose="Pain & Fever Management"
            dosage="500 mg"
            frequency="Twice Daily"
            duration="10 Days"
            remaining="4 Days"
            doctor="Dr. Sarah Jenkins"
            hospital="St. Jude Metropolitan"
          />
          <ActiveMedCard 
            name="Seclo 20mg"
            purpose="Gastric Acid Control"
            dosage="10 mg"
            frequency="Once Daily (Morning)"
            duration="Long-term"
            refill="In 15 Days"
            doctor="Dr. Marcus Chen"
            hospital="General Health Center"
          />
        </div>
      </section>

      {/* Completed Medications Section */}
      <section>
        <div className="flex items-center gap-4 mb-8">
          <div className="h-8 w-1 bg-outline-variant rounded-full"></div>
          <h3 className="text-2xl font-bold text-on-background tracking-tight">Completed</h3>
        </div>

        <div className="space-y-4">
          <CompletedMedItem 
            name="Ibuprofen 400mg"
            date="Completed March 12, 2024"
            hospital="City Urgent Care"
            doctor="Dr. Lisa Roy"
          />
          <CompletedMedItem 
            name="Vitamin D3 Supplement"
            date="Completed Jan 05, 2024"
            hospital="Dhaka Medical"
            doctor="Dr. Shahnaz Kabir"
          />
        </div>
      </section>

      {/* Informational Card */}
      <section>
        <div className="bg-primary-container text-on-primary-container rounded-3xl p-8 relative overflow-hidden shadow-lg">
          <div className="relative z-10">
            <h3 className="text-2xl font-bold mb-4">Medication Safety Tip</h3>
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
          <Hospital size={14} className="text-outline" />
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
    <div className="bg-surface-container-lowest rounded-2xl p-5 border border-outline-variant/15 flex flex-col gap-4">
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 bg-surface-container-low rounded-xl flex items-center justify-center shrink-0">
          <History size={24} className="text-outline" />
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
