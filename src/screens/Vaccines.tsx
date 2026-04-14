import React, { useState } from 'react';
import { 
  Calendar, 
  Building2, 
  Syringe, 
  Pill, 
  Shield, 
  Microscope,
  Verified
} from 'lucide-react';
import { Screen } from '../types';
import { VACCINES, HOSPITALS } from '../data';

interface VaccinesProps {
  setScreen: (screen: Screen, params?: { vaccineId?: string }) => void;
}

export default function Vaccines({ setScreen }: VaccinesProps) {
  const [tab, setTab] = useState<'past' | 'pending'>('past');

  const getHospitalName = (id: string) => HOSPITALS.find(h => h.id === id)?.name || 'Vaccine Center';

  const pastVaccines = VACCINES.filter(v => v.status === 'Completed');
  const pendingVaccines = VACCINES.filter(v => v.status === 'Pending');

  return (
    <div className="space-y-8">
      {/* Title & Header */}
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-extrabold tracking-tight text-primary leading-tight">Vaccine History</h1>
        <p className="text-on-surface-variant font-medium opacity-80 text-sm">
          Your complete immunization record verified by health authorities.
        </p>
      </div>

      {/* Toggle Selector */}
      <div className="bg-surface-container-high rounded-full p-1.5 flex shadow-inner">
        <button 
          onClick={() => setTab('past')}
          className={`flex-1 py-3 px-4 rounded-full text-xs font-bold tracking-wide transition-all duration-300 ${
            tab === 'past' 
              ? 'bg-primary-container text-on-primary shadow-md' 
              : 'text-on-surface-variant hover:text-primary'
          }`}
        >
          PAST
        </button>
        <button 
          onClick={() => setTab('pending')}
          className={`flex-1 py-3 px-4 rounded-full text-xs font-bold tracking-wide transition-all duration-300 ${
            tab === 'pending' 
              ? 'bg-primary-container text-on-primary shadow-md' 
              : 'text-on-surface-variant hover:text-primary'
          }`}
        >
          PENDING
        </button>
      </div>

      {tab === 'past' ? (
        <div className="space-y-6">
          {pastVaccines.map(v => (
            <VaccineCard 
              key={v.id}
              icon={<Syringe size={24} />}
              title={v.title}
              date={v.date || ''}
              hospital={getHospitalName(v.hospitalId)}
              status="Completed"
              onClick={() => setScreen('vaccine-details', { vaccineId: v.id })}
            />
          ))}
        </div>
      ) : (
        <div className="space-y-6">
          {pendingVaccines.map(v => (
            <PendingVaccineCard 
              key={v.id}
              title={v.title}
              dueDate={v.dueDate || ''}
              hospital={getHospitalName(v.hospitalId)}
              urgent={v.urgent}
              onBook={() => setScreen('vaccine-discovery')}
              onDetails={() => setScreen('vaccine-details', { vaccineId: v.id })}
            />
          ))}
        </div>
      )}

      {/* Editorial Info Section */}
      <div className="grid grid-cols-1 gap-4 pb-8">
        <div className="bg-primary p-8 rounded-[2rem] text-white flex flex-col justify-between min-h-[180px] shadow-lg">
          <Verified size={40} className="text-emerald-200" />
          <div>
            <h4 className="text-xl font-bold mb-2">Digital Verification</h4>
            <p className="text-emerald-100/80 text-xs leading-relaxed">
              All records listed here are synchronized with the National Health Database of Bangladesh.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function VaccineCard({ icon, title, date, hospital, status, onClick }: any) {
  return (
    <div className="bg-surface-container-lowest rounded-2xl p-6 shadow-sm border border-outline-variant/15 flex items-start gap-5 group hover:shadow-lg transition-all duration-300">
      <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-700 shrink-0">
        {icon}
      </div>
      <div className="flex-1">
        <div className="flex justify-between items-start mb-1">
          <h3 className="text-lg font-bold text-on-surface leading-tight">{title}</h3>
          <span className="px-3 py-1 bg-emerald-100 text-emerald-900 text-[9px] font-bold rounded-full uppercase tracking-widest shrink-0">
            {status}
          </span>
        </div>
        <div className="space-y-2 mt-3">
          <div className="flex items-center gap-2 text-xs text-on-surface-variant">
            <Calendar size={14} className="text-outline" />
            <span>{date}</span>
          </div>
          <div className="flex items-center gap-2 text-xs text-on-surface-variant">
            <Building2 size={14} className="text-outline" />
            <span className="line-clamp-1">{hospital}</span>
          </div>
        </div>
        <button 
          onClick={onClick}
          className="mt-5 w-full px-6 py-2.5 rounded-full bg-surface-container-high text-primary text-xs font-bold hover:bg-emerald-100 transition-colors active:scale-95"
        >
          Details
        </button>
      </div>
    </div>
  );
}

function PendingVaccineCard({ title, dueDate, hospital, urgent, onBook, onDetails }: any) {
  return (
    <div className="bg-surface-container-lowest rounded-3xl p-6 shadow-sm ring-1 ring-outline-variant/15 flex flex-col gap-6 group">
      <div className="flex justify-between items-start">
        <div className="flex gap-4">
          <div className="w-14 h-14 bg-emerald-100 rounded-2xl flex items-center justify-center text-primary shrink-0">
            <Syringe size={28} />
          </div>
          <div>
            <span className="text-[9px] font-bold uppercase tracking-widest text-secondary block mb-1">Immunization due</span>
            <h3 className="text-xl font-bold text-on-surface leading-tight">{title}</h3>
          </div>
        </div>
        {urgent && (
          <div className="bg-red-50 px-3 py-1 rounded-full shrink-0">
            <span className="text-[10px] font-bold text-red-600 uppercase tracking-tighter">Urgent</span>
          </div>
        )}
      </div>
      
      <div className="grid grid-cols-2 gap-4 py-4 border-y border-surface-container-high/50">
        <div className="space-y-1">
          <label className="text-[9px] font-bold text-outline uppercase tracking-wider">Due Date</label>
          <p className="text-sm font-bold text-on-surface">{dueDate}</p>
        </div>
        <div className="space-y-1">
          <label className="text-[9px] font-bold text-outline uppercase tracking-wider">Hospital</label>
          <p className="text-sm font-bold text-on-surface line-clamp-1">{hospital}</p>
        </div>
      </div>
      
      <div className="flex gap-3">
        <button 
          onClick={onBook}
          className="flex-1 bg-primary text-white py-4 rounded-2xl font-bold text-xs shadow-md hover:brightness-110 active:scale-95 transition-all"
        >
          Book Appointment
        </button>
        <button 
          onClick={onDetails}
          className="px-6 bg-surface-container-high text-primary py-4 rounded-2xl font-bold text-xs hover:bg-surface-container-highest active:scale-95 transition-all"
        >
          Details
        </button>
      </div>
    </div>
  );
}
