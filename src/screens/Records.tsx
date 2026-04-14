import React from 'react';
import { 
  History, 
  Syringe, 
  Wallet, 
  Pill, 
  ChevronRight,
  FileText,
  Clock
} from 'lucide-react';
import { Screen } from '../types';

interface RecordsProps {
  setScreen: (screen: Screen) => void;
}

export default function Records({ setScreen }: RecordsProps) {
  return (
    <div className="space-y-10">
      {/* Hero Section */}
      <section>
        <div className="bg-primary-container rounded-[2rem] p-8 text-on-primary relative overflow-hidden shadow-xl shadow-primary-container/20">
          <div className="relative z-10">
            <span className="text-[10px] font-bold tracking-[0.2em] uppercase opacity-80 font-headline">Secure Access</span>
            <h2 className="text-3xl font-extrabold mt-2 tracking-tight">Your Health Intelligence</h2>
            <p className="mt-2 text-emerald-100/80 max-w-xs text-lg opacity-90 leading-relaxed">
              Centralized digital archives for your lifelong wellness journey.
            </p>
          </div>
          <div className="absolute right-[-20px] bottom-[-20px] w-48 h-48 bg-white/10 rounded-full blur-3xl"></div>
        </div>
      </section>

      {/* Primary Navigation Bento Grid */}
      <section className="grid grid-cols-1 gap-4">
        <RecordCard 
          icon={<History size={28} />} 
          title="Medical History" 
          description="Past diagnoses and visits" 
          onClick={() => setScreen('medical-history')}
        />
        <RecordCard 
          icon={<Syringe size={28} />} 
          title="Vaccination History" 
          description="Immunization and boosters" 
          onClick={() => setScreen('vaccines')}
        />
        <RecordCard 
          icon={<Wallet size={28} />} 
          title="Insurance & Subsidies" 
          description="Policy details and coverage" 
          onClick={() => setScreen('insurance')}
        />
        <RecordCard 
          icon={<Pill size={28} />} 
          title="Prescription History" 
          description="Medication and dosage logs" 
          onClick={() => setScreen('prescriptions')}
        />
      </section>

      {/* Recent Updates Section */}
      <section>
        <div className="flex items-end justify-between mb-6 px-2">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-on-surface">Recent Updates</h2>
            <p className="text-on-surface-variant text-sm mt-1">Changes recorded in the last 30 days</p>
          </div>
          <button className="text-primary font-bold text-sm hover:underline">View All</button>
        </div>
        
        <div className="space-y-4">
          <UpdateItem 
            icon={<FileText size={20} />}
            title="Lab Report: General Blood Test"
            source="St. Mary's Diagnostic Center"
            date="Uploaded Oct 12, 2023"
            isNew={true}
            color="bg-primary/10 text-primary"
          />
          <UpdateItem 
            icon={<Pill size={20} />}
            title="Prescription Renewed"
            source="Lisinopril 10mg - Dr. Aris Thorne"
            date="Verified by Health Portal"
            timeAgo="2d ago"
            color="bg-secondary/10 text-secondary"
          />
        </div>
      </section>
    </div>
  );
}

function RecordCard({ icon, title, description, onClick }: { icon: React.ReactNode, title: string, description: string, onClick: () => void }) {
  return (
    <button 
      onClick={onClick}
      className="group bg-surface-container-lowest rounded-3xl p-6 border border-outline-variant/15 flex items-center justify-between hover:shadow-lg transition-all cursor-pointer text-left active:scale-[0.99]"
    >
      <div className="flex items-center gap-5">
        <div className="w-14 h-14 rounded-2xl bg-surface-container-low flex items-center justify-center text-primary transition-transform group-hover:scale-110">
          {icon}
        </div>
        <div>
          <h3 className="text-lg font-bold text-on-surface">{title}</h3>
          <p className="text-on-surface-variant text-sm">{description}</p>
        </div>
      </div>
      <ChevronRight size={20} className="text-outline group-hover:text-primary transition-colors" />
    </button>
  );
}

function UpdateItem({ icon, title, source, date, isNew, timeAgo, color }: { icon: React.ReactNode, title: string, source: string, date: string, isNew?: boolean, timeAgo?: string, color: string }) {
  return (
    <div className="bg-surface-container-low rounded-2xl p-5 flex items-start gap-4 hover:bg-surface-container transition-colors">
      <div className={`w-10 h-10 rounded-full ${color} flex items-center justify-center shrink-0`}>
        {icon}
      </div>
      <div className="flex-1">
        <div className="flex justify-between items-start">
          <h4 className="font-bold text-on-surface text-sm leading-tight">{title}</h4>
          {isNew ? (
            <span className="text-[9px] font-bold text-primary bg-emerald-100 px-2 py-0.5 rounded-full uppercase tracking-wider">New</span>
          ) : (
            <span className="text-[10px] text-outline font-medium">{timeAgo}</span>
          )}
        </div>
        <p className="text-on-surface-variant text-xs mt-1">{source}</p>
        <p className="text-outline text-[10px] mt-2 italic flex items-center gap-1">
          <Clock size={10} /> {date}
        </p>
      </div>
    </div>
  );
}
